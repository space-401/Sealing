import { createBrowserRouter } from 'react-router-dom';
import CreateSpace from '@/pages/CreateSpace';
import CreatePost from '@/pages/CreatePost';
import MainPage from '@/pages/Main';
import InviteCode from '@pages/InviteCode';
import MyPage from '@pages/MyPage';
import PrivateRoute from '@router/Private';

import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
import { PATH } from '@constants/path';

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <PrivateRoute />,
    children: [
      {
        element: <HeaderLayout />,
        children: [
          /*스페이스*/
          {
            path: PATH.SPACE + '/:spaceId',
            element: <MainPage />,
          },
          {
            path: PATH.SPACE_UPDATE + '/:spaceId',
            // element: 업데이트 스페이스
          },
          {
            path: PATH.SPACE_CREATE,
            element: <CreateSpace />,
          },
          /*포스트*/
          {
            path: PATH.POST_CREATE,
            element: <CreatePost />,
          },
          {
            path: PATH.POST_UPDATE,
            // element: 업데이트 포스트
          },
          {
            path: PATH.USER_INFO,
            element: <MyPage />,
          },
        ],
      },
    ],
  },
  {
    path: PATH.INVITE,
    element: <InviteCode />,
  },
]);

export default router;
