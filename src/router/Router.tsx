import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from '@router/Private';
import { PATH } from '@constants/path';
import { Suspense } from 'react';

import * as Lazy from '@router/lazy';
import MainPageSkeleton from '@components/Main/Skeleton';
import MyPageSkeleton from '@components/MyPage/Skeleton';
import CreatePostSkeleton from '@components/Create/Skeleton/CreatePost';
import HeaderLayout from '@layout/HeaderLayout';
import BackLayout from '@layout/BackLayout';
import SelectSpaceSkeleton from '@components/SelectSpace/Skeleton';
import CreateSpaceSkeleton from '@components/Create/Skeleton/CreateSpace';
import { AuthPage, InviteCodePage, SignPage } from '@router/lazy';
import LandingPage from '@pages/Landing';

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <PrivateRoute />,
    children: [
      {
        element: <HeaderLayout />,
        children: [
          {
            path: PATH.HOME,
            element: (
              <Suspense fallback={<SelectSpaceSkeleton />}>
                <Lazy.SelectSpacePage />
              </Suspense>
            ),
          },
          {
            path: PATH.SPACE_MAIN(':spaceId'),
            element: (
              <Suspense fallback={<MainPageSkeleton />}>
                <Lazy.MainPage />
              </Suspense>
            ),
          },
          {
            path: PATH.USER_INFO,
            element: (
              <Suspense fallback={<MyPageSkeleton />}>
                <Lazy.MyPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        element: <BackLayout />,
        children: [
          {
            path: PATH.POST_CREATE(':spaceId'),
            element: (
              <Suspense fallback={<CreatePostSkeleton />}>
                <Lazy.CreatePostPage />
              </Suspense>
            ),
          },
          {
            path: PATH.POST_UPDATE(':spaceId', ':postId'),
            element: (
              <Suspense fallback={<CreatePostSkeleton />}>
                <Lazy.CreatePostPage />
              </Suspense>
            ),
          },
          {
            path: PATH.SPACE_CREATE,
            element: (
              <Suspense fallback={<CreateSpaceSkeleton />}>
                <Lazy.CreateSpacePage />
              </Suspense>
            ),
          },
          {
            path: PATH.SPACE_UPDATE(':spaceId'),
            element: (
              <Suspense fallback={<CreateSpaceSkeleton />}>
                <Lazy.CreateSpacePage />
              </Suspense>
            ),
          },
          {
            path: PATH.INVITE,
            element: (
              <Suspense fallback={<>loading...</>}>
                <InviteCodePage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: PATH.LOGIN,
    element: <SignPage />,
  },
  {
    path: PATH.AUTH,
    element: <AuthPage />,
  },
  {
    path: PATH.LANDING,
    element: <LandingPage />,
  },
]);
export default router;
