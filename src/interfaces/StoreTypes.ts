export interface StoreBasicInfoTypes {
  storeId: 0;
  name: string;
  category?: string;
  address?: string;
  storeImageUrl?: string;
  storeModifiedAt?: string;
  pointAvg?: number;
  bookmark?: string;
}

export interface FacilityTypes {
  elevator?: 'Y' | 'N';
  toilet?: 'Y' | 'N';
  parking?: 'Y' | 'N';
  heightDifferent?: 'Y' | 'N';
  approach?: 'Y' | 'N';
}
