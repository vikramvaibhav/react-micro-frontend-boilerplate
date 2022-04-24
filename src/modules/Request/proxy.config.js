const baseUrl = {
  PROD: 'https://jsonplaceholder.typicode.com',
  UAT: 'https://jsonplaceholder.typicode.com',
  QA: 'https://jsonplaceholder.typicode.com',
  DEV: 'https://jsonplaceholder.typicode.com'
};


const config = {
  '/posts': {
    PROD: `${baseUrl.PROD}/posts`,
    UAT: `${baseUrl.UAT}/posts`,
    QA: `${baseUrl.QA}/posts`,
    DEV: `${baseUrl.DEV}/posts`
  },
  '/comments': {
    PROD: `${baseUrl.PROD}/comments`,
    UAT: `${baseUrl.UAT}/comments`,
    QA: `${baseUrl.QA}/comments`,
    DEV: `${baseUrl.DEV}/comments`
  },
  '/albums': {
    PROD: `${baseUrl.PROD}/albums`,
    UAT: `${baseUrl.UAT}/albums`,
    QA: `${baseUrl.QA}/albums`,
    DEV: `${baseUrl.DEV}/albums`
  },
  '/photos': {
    PROD: `${baseUrl.PROD}/photos`,
    UAT: `${baseUrl.UAT}/photos`,
    QA: `${baseUrl.QA}/photos`,
    DEV: `${baseUrl.DEV}/photos`
  },
  '/todos': {
    PROD: `${baseUrl.PROD}/todos`,
    UAT: `${baseUrl.UAT}/todos`,
    QA: `${baseUrl.QA}/todos`,
    DEV: `${baseUrl.DEV}/todos`
  },
  '/users': {
    PROD: `${baseUrl.PROD}/users`,
    UAT: `${baseUrl.UAT}/users`,
    QA: `${baseUrl.QA}/users`,
    DEV: `${baseUrl.DEV}/users`
  },

};

export default config;
