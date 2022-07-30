export interface BookmarkListTypes {
  name: string;
  pointAvg: number;
  address: string;
  category: string;
  phoneNumber: string;
  storeImageList?: string[];
  bookmarkId?: number;
  sotreId?: number;
}

export interface GetUserBookmarkFoldersResponse {
  id: number;
  folderName: string;
  bookmarkList: BookmarkListTypes[];
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
