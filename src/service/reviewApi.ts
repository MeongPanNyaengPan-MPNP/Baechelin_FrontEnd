import { request } from './httpClient';

// eslint-disable-next-line import/prefer-default-export
export const getRecentReviewList = <T>(limit = 12) =>
  request<T>({
    method: 'GET',
    url: `/recent-review?limit=${limit}`,
  });
