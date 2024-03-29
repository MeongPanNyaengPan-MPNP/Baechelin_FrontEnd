import { StoreResponseTypes } from '@interfaces/StoreResponseTypes';

export interface BookmarkListTypes {
  name: string;
  pointAvg: number;
  address: string;
  category: string;
  phoneNumber: string;
  storeImageList?: string;
  bookmarkId?: number;
  sotreId?: number;
}

export interface GetUserBookmarkFoldersResponse {
  id: number;
  folderName: string;
  bookmarkList: BookmarkListTypes[];
  thumbNail: string | null;
}

export interface CreateBookmarkFolderResponse {
  statusCode: number;
  responseMessage: string;
}

export interface CreateBookmarkStoreBody {
  folderId: number;
  storeId: number;
}

export interface UpdateBookmarkFolderNameParam {
  folderId: number;
}

export interface UpdateBookmarkFolderNameQuery {
  newFolderName: string;
}

export interface GetBookmarkTopResponse {
  address: string;
  bookmarkId?: number;
  category: string;
  name: string;
  phoneNumber: string;
  pointAvg: number;
  storeId?: number;
  storeImageList?: string;
}

export interface BookmarkDetailQueryTypes {
  cards: StoreResponseTypes[];
  totalCount: number;
  totalPage: number;
  hasNextPage: number;
  leftElement: number;

  (key: string): any;
}
