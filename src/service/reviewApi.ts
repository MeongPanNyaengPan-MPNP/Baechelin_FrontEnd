import { request } from './httpClient';

// eslint-disable-next-line import/prefer-default-export
export const getRecentReviewList = <T>(limit = 12) =>
  request<T>({
    method: 'GET',
    url: `/recent-review?limit=${limit}`,
  });

export const postReview = <T>(data: any) =>
  request<T>({
    method: 'post',
    url: `/review`,
    data,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
export const getReviewList = <T>(storeId: number, page = 0, size = 6) =>
  request<T>({
    method: 'get',
    url: `/review/${storeId}?page=${page}&size=${size}`,
  });
export const deleteReviewList = <T>(reviewId: number) =>
  request<T>({
    method: 'DELETE',
    url: `/review/${reviewId}`,
  });
