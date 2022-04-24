import axios from 'axios';

import { ENV } from '../../app/config';
import URL_CONFIG from './proxy.config';
import { DEFAULT_ERROR, REQUEST_TIMEOUT, TIMEOUT_ERROR } from './constants';

const getUrl = (path) => {

  const result = { URL: '' };

  const config = URL_CONFIG[path][ENV] ?? null;

  if (config) {
    if (typeof config === 'string') {
      return { ...result, URL: config };
    }
    return config;
  }
  return result;
};

const request = async (url, options) => {
  const {
    method = 'GET',
    query = {},
    body,
    headers = {},
    headersOverride
  } = options;
  try {

    const { URL: defaultUrl, headers: headers_consts } = getUrl(url);

    let URL = defaultUrl;

    if (options.params) URL = `${defaultUrl}/${options.params}`;

    const isFormData = body;

    const reqHeaders = headersOverride || {
      ...headers_consts,
      ...headers,
    };

    if (method === 'POST' && !isFormData) {
      reqHeaders['Content-Type'] = 'application/json';
    }

    let response;

    response = await axios.request({
      url: URL,
      method,
      headers: reqHeaders,
      params: query,
      data: body,
      timeout: REQUEST_TIMEOUT
    });
    return { ...response, success: true };

  } catch (errorResponse) {
    if (errorResponse.timeout) {
      return {
        success: false,
        data: null,
        error: TIMEOUT_ERROR,
      };
    }
    if (!errorResponse.response) {
      return {
        success: false,
        data: null,
        error: DEFAULT_ERROR,
      };
    }
    const error = errorResponse.response.error;

    // TODO : Handle un authorized user

    const { message, code } = error;

    let errorMessage;

    if (Array.isArray(message)) {
      errorMessage = this.getValidationErrorMessage(message);
    } else {
      errorMessage = message;
    }

    return {
      success: false,
      data: null,
      error: {
        code,
        message: errorMessage,
        statusCode: typeof error.statusCode === 'string' ? error.statusCode : undefined,
      },
    };
  }
};

export default request;
