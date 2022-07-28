import { request } from './httpClient';

import {
  CreateBookmarkFolderResponse,
  CreateBookmarkStoreBody,
  GetUserBookmarkFoldersResponse,
} from '@interfaces/BookmarkTypes';

export const getUserBookmarkFolders = () => {
  return request<GetUserBookmarkFoldersResponse>({
    method: 'GET',
    url: '/folderList',
  });
};

export const createBookmarkFolder = (body: { folderName: string }) => {
  return request<CreateBookmarkFolderResponse>({ method: 'POST', url: '/folder', data: body });
};

export const updateBookmarkFolderName = (params: { folderId: number }, body: { folderName: string }) => {
  return request({ method: 'PATCH', url: '/bookmark', params, data: body });
};

export const deleteBookmarkFolder = (params: { folderId: number }) => {
  return request({ method: 'DELETE', url: '/folder', params });
};

export const createBookmarkStore = (body: CreateBookmarkStoreBody) => {
  return request<CreateBookmarkFolderResponse>({ method: 'POST', url: '/bookmark', data: body });
};

export const deleteBookmarkStore = (params: { bookmarkId: number }) => {
  return request({ method: 'DELETE', url: '/bookmark', params });
};
