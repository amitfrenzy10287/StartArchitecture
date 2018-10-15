import * as actionTypes from './actionTypes';

export const initBlogListing = ( bloglisting ) => {
    return {
        type: actionTypes.INIT_BLOG_LISTING,
        bloglisting: bloglisting
    };
};

export const getBlog = ( blog ) => {
    return {
        type     : actionTypes.GET_BLOG,
        viewblog : blog 
    };
};

export const viewBlog = ( blogid) => {
    return {
        type    : actionTypes.VIEW_BLOG,
        id      : blogid
    };
};


export const initBlog = (bloglisting) => {
    return {
        type: actionTypes.INIT_BLOG,
    };
};

export const addBlog = ( blog ) => {
    return {
        type: actionTypes.ADD_BLOG,
        blog: blog
    };
};

export const deleteBlog = ( id ) => {
    return {
        type    : actionTypes.DELETE_BLOG,
        blogid  : id
    };
};

export const blogDeleteSuccess = ( blog ) => {
    return {
        type    : actionTypes.BLOG_DELETE_SUCCESS,
        deletedblog  : blog
    };
};

export const blogDeleteFinish = ( blog ) => {
    return {
        type    : actionTypes.BLOG_DELETE_FINISH
    };
}; 

export const fetchBlogFailed = () => {
    return {
        type: actionTypes.FETCH_BLOG_FAILED
    };
};