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
