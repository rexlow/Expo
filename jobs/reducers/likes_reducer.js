import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';
import {
  LIKE_JOB,
  CLEAR_LIKED_JOBS
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case LIKE_JOB:
      return _.uniqBy([
        ...state, action.payload
      ], 'jobkey')
    case CLEAR_LIKED_JOBS:
      return [];
    case REHYDRATE:
      return action.payload.likedJobs || []; // empty array is to catch the first time app runs
    default:
      return state;
  }
}