export interface StoreBasicInfoTypes {
  storeId: 0;
  category: string[];
  name: string;
  address?: string;
  storeImageUrl?: string;
  storeModifiedAt?: string;
  pointAvg?: number;
  bookmark?: string;
}

export interface FacilityTypes {
  elevator?: string;
  toilet?: string;
  parking?: string;
  heightDifferent?: string;
  approach?: string;
}
