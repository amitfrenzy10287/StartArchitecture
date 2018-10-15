import { takeEvery, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
 
import { initBlogListing,blogPostingSaga,deleteBlogSaga,fetchBlogSaga } from "./blogListing"; 
 

export function* watchBlogListing() { 
  yield takeEvery(actionTypes.INIT_BLOG, initBlogListing); 
} 

export function* watchBlogPosting() {
  yield takeLatest(actionTypes.ADD_BLOG, blogPostingSaga);
  yield takeEvery(actionTypes.DELETE_BLOG, deleteBlogSaga);
  yield takeEvery(actionTypes.VIEW_BLOG, fetchBlogSaga);
}
