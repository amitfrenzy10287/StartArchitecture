import * as actionTypes from "./actionTypes";

export const blogPostingSuccess = (id, blogData) => {
  return {
    type: actionTypes.BLOG_POSTING_SUCCESS,
    orderId: id,
    blogData: blogData
  };
};

export const blogPostingFailed = error => {
  return {
    type: actionTypes.BLOG_POSTING_FAIL,
    error: error
  };
};

export const blogPostingStart = () => {
  return {
    type: actionTypes.BLOG_POSTING_START
  };
};

export const blogPostingFinish = () => {
  return {
    type: actionTypes.BLOG_POSTING_FINISH
  };
};

export const blogDeleteSuccess = (id, blogData) => {
  return {
    type: actionTypes.BLOG_DELETE_SUCCESS,
    blogId: id,
    blogData: blogData
  };
};

export const blogDeleteFailed = error => {
  return {
    type: actionTypes.BLOG_DELETE_FAIL,
    error: error
  };
};

export const blogDeleteStart = () => {
  return {
    type: actionTypes.BLOG_DELETE_START
  };
};

export const blogDeleteFinish = () => {
  return {
    type: actionTypes.BLOG_DELETE_FINISH
  };
};

export const blogPosting = (blogData) => {
  return {
    type: actionTypes.BLOG_POSTING,
    blogData: blogData, 
  };
};

export const blogInit = () => {
  return {
    type: actionTypes.BLOG_INIT
  };
};

export const fetchBlogSuccess = blog => {
  return {
    type: actionTypes.FETCH_BLOG_SUCCESS,
    blog: blog
  };
};

export const fetchBlogFail = error => {
  return {
    type: actionTypes.FETCH_BLOG_FAIL,
    error: error
  };
};

export const fetchBlogStart = () => {
  return {
    type: actionTypes.FETCH_BLOG_START
  };
};

export const fetchBlogs = (token, Id) => {
  return {
    type: actionTypes.FETCH_BLOGS, 
    Id: Id
  };
};
