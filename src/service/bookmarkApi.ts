import {
  BookmarkDetailQueryTypes,
  CreateBookmarkFolderResponse,
  CreateBookmarkStoreBody,
  GetBookmarkTopResponse,
  GetUserBookmarkFoldersResponse,
} from '@interfaces/BookmarkTypes';

import { request } from './httpClient';

export const getUserBookmarkFolders = () =>
  request<GetUserBookmarkFoldersResponse[]>({
    method: 'GET',
    url: '/folderList',
  });
export const getUserBookmarkDetailFolders = (folderId: number) =>
  request<BookmarkDetailQueryTypes>({
    method: 'GET',
    url: `/folder/${folderId}`,
  });

export const createBookmarkFolder = (body: { folderName: string }) =>
  request<CreateBookmarkFolderResponse>({
    method: 'POST',
    url: '/folder',
    data: body,
  });

export const updateBookmarkFolderName = ({ folderId }: { folderId: number }, params: { newFolderName: string }) =>
  request({
    method: 'PUT',
    url: `/folderUpdate/${folderId}`,
    params,
  });

export const deleteBookmarkFolder = (params: number) =>
  request({
    method: 'DELETE',
    url: `/folder/${params}`,
  });

export const createBookmarkStore = (body: CreateBookmarkStoreBody) =>
  request<CreateBookmarkFolderResponse>({
    method: 'POST',
    url: '/bookmark',
    data: body,
  });

export const deleteBookmarkStore = <T>(storeId: number) =>
  request<T>({
    method: 'DELETE',
    url: `/bookmark/${storeId}`,
  });

export const getBookmarkTop = () =>
  request<GetBookmarkTopResponse[]>({
    method: 'GET',
    url: '/bookmarkTop',
  });
