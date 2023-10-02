import { createBrowserRouter } from 'react-router-dom';
import CreateSpace from '@/pages/CreateSpace';
import CreatePost from '@/pages/CreatePost';
import MainPage from '@/pages/Main';
import InviteCode from '@pages/InviteCode';
import MyPage from '@pages/MyPage';
import PrivateRoute from '@router/Private';
import Landing from '@/pages/Landing';
import SelectSpace from '@/pages/SelectSpace';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
import Auth from '@/pages/Auth';
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
            path: PATH.SPACE_SELECT,
            element: <SelectSpace />,
          },
          {
            path: PATH.SPACE_CREATE,
            element: <CreateSpace />,
          },
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
          {
            path: PATH.USER_INFO,
            element: <MyPage />,
          },
        ],
      },
    ],
  },
  {
    path: PATH.LANDING,
    element: <Landing />,
  },
  {
    path: PATH.INVITE,
    element: <InviteCode />,
  },
  {
    path: PATH.AUTH,
    element: <Auth />,
  },
]);

export default router;
