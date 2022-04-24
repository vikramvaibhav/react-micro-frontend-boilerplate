import { lazy } from "react";

import { ROUTES } from '../../modules/Routing';

const Post = lazy(() => import('../pages/Post'));

export const routes = [
  {
    path: ROUTES.POST,
    component: Post
  }
];
