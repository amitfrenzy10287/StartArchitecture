import { put } from "redux-saga/effects"; 
import axios from "axios";
import * as actions from "../actions"; 

export function* initBlogListing(action) {
 
  try {
    const responseBlog = yield axios.get(
      "http://reduxblog.herokuapp.com/api/posts" 
    );
   	const fetchedBlog = [];
    for (let key in responseBlog.data) {
      fetchedBlog.push({
        ...responseBlog.data[key]
      });
    }
    yield put(actions.initBlogListing(fetchedBlog)); 
  } catch (error) {
    yield put(actions.fetchBlogFailed());
  }
}

export function* fetchBlogSaga(action) {
 
  try {
    const responseBlog = yield axios.get(
      "http://reduxblog.herokuapp.com/api/posts/" + action.id 
    );

    yield put(actions.getBlog(responseBlog.data)); 
  } catch (error) {
    yield put(actions.fetchBlogFailed());
  }
}  

export function* blogPostingSaga(action) {
 
  yield put(actions.blogPostingStart());
  try {
     
    const response = yield axios.post(
        "http://reduxblog.herokuapp.com/api/posts",
    action.blog.formData,
    {
      headers: {'content-type': 'application/json'}
    });

    yield put(
      actions.blogPostingSuccess(response.data, action.blog.formData)
    );

    yield put(actions.initBlog());

  } catch (error) {
    yield put(actions.blogPostingFailed(error));
  }
}

export function* deleteBlogSaga(action) {
   try { 
    const response = yield axios.delete(
        "http://reduxblog.herokuapp.com/api/posts/"+
        action.blogid,
    {
      headers: {'content-type': 'application/json'}
    });

    yield put(
      actions.blogDeleteSuccess(response.data, action.blogid)
    );

    yield put(actions.initBlog());

  } catch (error) {
    yield put(actions.blogDeleteFailed(error));
  }
}

