import { request } from './httpClient';

// eslint-disable-next-line import/prefer-default-export
export const getUserBookmarkFolders = <T>() =>
  request<T>({
    method: 'POST',
    url: `/folderList`,
  });
