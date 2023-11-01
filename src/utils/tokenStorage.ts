import { deleteCookie, getCookie, hasCookie, setCookie } from '@utils/cookie';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@constants/api';

const tokenStorage = {
  getAccessToken() {
    if (hasCookie(ACCESS_TOKEN_KEY)) {
      return getCookie(ACCESS_TOKEN_KEY);
    }
  },
  getRefreshToken() {
    return getCookie(REFRESH_TOKEN_KEY);
  },

  setAccessToken(accessToken: string, expiredDate: number) {
    setCookie(ACCESS_TOKEN_KEY, accessToken, expiredDate);
  },

  hasAccessToken() {
    return !!getCookie(ACCESS_TOKEN_KEY);
  },

  hasRefreshToken() {
    return !!getCookie(REFRESH_TOKEN_KEY);
  },

  removeAccessToken() {
    deleteCookie(ACCESS_TOKEN_KEY);
  },

  removeRefreshToken() {
    deleteCookie(REFRESH_TOKEN_KEY);
  },

  clear() {
    this.removeAccessToken();
    this.removeRefreshToken();
  },
};

export default tokenStorage;
