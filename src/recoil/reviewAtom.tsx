import { atom } from 'recoil';
import { RecentReviewResponseType } from '@interfaces/ReviewTypes';

// eslint-disable-next-line import/prefer-default-export
export const StoreFilterValuesss = atom<RecentReviewResponseType | null>({
  key: 'postReview',
  default: null,
});
