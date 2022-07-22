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
