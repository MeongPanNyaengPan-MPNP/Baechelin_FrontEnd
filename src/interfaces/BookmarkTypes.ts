export interface BookmarkListTypes {
  name: string;
  pointAvg: string;
  address: string;
  category: string;
  PhoneNumber: string;
  storeImageList?: string[];
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
  storeId: string;
}
