import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = { 
    loading: false, 
    posted: false,
    blogposting:{
        posted:false
    }
}; 

const blogInit = ( state, action ) => {
    
    const updatedSt = {
        loading: false,
        blogposting:{
            posted:false
        }
    } 
    return updateObject( state, updatedSt );
};

const blogPostingStart = ( state, action ) => {
    const updatedSt = {
        loading: true,
        blogposting:{
            posted:true
        }
    } 
    return updateObject( state, updatedSt );
};

const blogPostingSuccess = ( state, action ) => {
    
    const updatedSt = {
        loading: false,
        posted:false,
        blogposting:{
            posted:false
        }
    } 
    return updateObject( state, updatedSt );
};

const blogPostingFinish = ( state, action ) => {
    
    
    const updatedSt = {
        loading: false,
        blogposting:{
            posted:false,
        }
    } 
    return updateObject( state, updatedSt );
};

const blogPostingFailed = ( state, action ) => {
    return updateObject( state, {
        loading: false,
        blogposting:{
            posted:false
        }
    } );
};

const fetchBlogStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchBlogSuccess = ( state, action ) => {
    return updateObject( state, {
        orders: action.orders,
        loading: false
    } );
};

const fetchBlogFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {
        case actionTypes.BLOG_INIT: return blogInit( state, action );
        case actionTypes.BLOG_POSTING_START: return blogPostingStart( state, action );
        case actionTypes.BLOG_POSTING_FINISH: return blogPostingFinish( state, action );
        case actionTypes.BLOG_POSTING_SUCCESS: return blogPostingSuccess( state, action )
        case actionTypes.BLOG_POSTING_FAIL: return blogPostingFailed( state, action );
        case actionTypes.FETCH_BLOG_START: return fetchBlogStart( state, action );
        case actionTypes.FETCH_BLOG_SUCCESS: return fetchBlogSuccess( state, action );
        case actionTypes.FETCH_BLOG_FAIL: return fetchBlogFail( state, action );
        default : return state;
    }
};

export default reducer;