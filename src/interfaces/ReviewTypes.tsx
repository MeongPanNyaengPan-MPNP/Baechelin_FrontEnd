export interface StoreReviewResponseTypes {
  reviewId: number;
  storeId: number;
  userId: number;
  point: number;
  content: string;
  reviewImageUrlList: string[];
  storeName?: string; // 메인 리스트일경우
  userName?: string; // 최신
  address?: string; // 메인 리스트일경우
  tagList?: string[]; // 메인 리스트일경우
}

export type FormDataInitial = {
  point: number;
  comment: string;
  imageFiles: any[];
  storeId: string | number;
  tagList: string[];
};

export interface ReviewImageUrlListType {
  url: string;
}

export interface TagListType {
  id: number;
  tag: string;
}

export interface RecentReviewResponseType {
  storeId: number;
  userId: number;
  storeName: string;
  userName: string;
  content: string;
  address: string;
  point: number;
  createdAt: Date;
  modifiedAt: Date;
  reviewImageUrlList: ReviewImageUrlListType[];
  tagList: TagListType[];
}

export interface DetailReviewResponseType {
  reviewId: number;
  storeId: number;
  userId: number;
  point: number;
  content: string;
  reviewImageUrlList: any[];
  createdAt: Date;
  modifiedAt: Date;
  tagList: TagListType[];
}
