import {
  CreateBookmarkFolderResponse,
  CreateBookmarkStoreBody,
  GetUserBookmarkFoldersResponse,
} from '@interfaces/BookmarkTypes';

import { request } from './httpClient';

export const getUserBookmarkFolders = () =>
  request<GetUserBookmarkFoldersResponse[]>({
    method: 'POST',
    url: '/folderList',
  });

export const createBookmarkFolder = (body: { folderName: string }) =>
  request<CreateBookmarkFolderResponse>({ method: 'POST', url: '/folder', data: body });

export const updateBookmarkFolderName = (params: { folderId: number }, body: { folderName: string }) =>
  request({ method: 'PATCH', url: '/bookmark', params, data: body });

export const deleteBookmarkFolder = (params: number) => request({ method: 'DELETE', url: `/folder/${params}` });

export const createBookmarkStore = (body: CreateBookmarkStoreBody) =>
  request<CreateBookmarkFolderResponse>({ method: 'POST', url: '/bookmark', data: body });

export const deleteBookmarkStore = (params: { bookmarkId: number }) =>
  request({ method: 'DELETE', url: `/bookmark/${params}` });

export const getBookmarkTop = () =>
  request<any>({
    method: 'GET',
    url: '/bookmarkTop',
  });
