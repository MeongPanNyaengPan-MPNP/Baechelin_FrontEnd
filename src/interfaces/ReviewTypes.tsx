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

export interface ReviewResponseDtoItem {
  storeId: number;
  userId: number;
  reviewId: number;
  storeName?: string;
  name: string;
  content: string;
  address?: string;
  point: number;
  userImage?: string;
  createdAt: Date;
  modifiedAt: Date;
  reviewImageUrlList: ReviewImageUrlListType[];
  tagList: TagListType[];
  email: string;
  myReview?: string;
}

export interface ReviewResponseRootType {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  size: number;
  totalPages: number;
  totalElements: number;
  number: number;
  reviewResponseDtoList: ReviewResponseDtoItem[];
}

export interface MutationReviewResponse {
  statusCode: number;
  responseMessage: string;
}
