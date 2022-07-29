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

export type StoreListQueryTypes = {
  cards?: StoreResponseTypes[];
  (key: string): any;
};

export interface StoreMapResponseTypes {
  storeId: number;
  category: string;
  name: string;
  latitude: number;
  longitude: number;
  storeImgList: string[];
  address: string;
  phoneNumber: string;
  bookmarkCount: number;
  bookmark: 'Y' | 'N';
  pointAvg: number;
  elevator?: 'Y' | 'N';
  toilet?: 'Y' | 'N';
  parking?: 'Y' | 'N';
  heightDifferent?: 'Y' | 'N';
  approach?: 'Y' | 'N';
}

export interface StoreMapListQueryTypes {
  cards?: StoreMapResponseTypes[];
  totalCount: number;
  hasNextPage: number;
  leftElement: number;

  (key: string): any;
}
