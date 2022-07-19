export interface StoreResponseTypes {
  storeId: 0;
  name: string;
  category?: string;
  address?: string;
  phoneNumber?: string;
  storeImgList?: string[];
  storeModifiedAt?: string;
  pointAvg?: number;
  bookmark?: boolean;
  bookmarkCount?: number;
  elevator?: 'Y' | 'N';
  toilet?: 'Y' | 'N';
  parking?: 'Y' | 'N';
  heightDifferent?: 'Y' | 'N';
  approach?: 'Y' | 'N';
}

export interface StoreReviewResponseTypes {
  reviewId: number;
  storeId: number;
  userId: number;
  point: number;
  content: string;
  reviewImageUrlList: string[];
  name?: string;
  userName?: string;
  address?: string;
  tagList?: string[];
}
