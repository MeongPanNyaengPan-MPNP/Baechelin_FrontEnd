import { request } from '@service/httpClient';

export const getRecentReviewList = <T>(limit = 12) =>
  request<T>({
    method: 'GET',
    url: `/recent-review?limit=${limit}`,
  });

export const tokenRefresh = <T>() =>
  request<T>({
    method: 'GET',
    url: `/auth/refresh`,
  });
export const userLogout = <T>() =>
  request<T>({
    method: 'POST',
    url: `/user/logout`,
  });
export const getUserInfo = <T>(token: any) => {
  if (!token) return false;
  return request<T>({
    method: 'GET',
    url: `/user`,
    headers: { Authorization: `Bearer ${token}` },
  });
};
