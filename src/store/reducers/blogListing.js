import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    error: false, 
    blog:[],
    posted:false,
    blogid:null,
    loading:true,
    viewblog:false,
    blogdeleteddata:[],
    blogdeleted:false,
    bloglisting:[], 
};  
 
const addBlog = (state, action) => {
    // 
    const updatedAddBlogState = {
        posted: false,
    } 
    return updateObject( state, updatedAddBlogState );
};

const getBlog = (state, action) => {
    
    const updatedGetBlogState = {
        viewblog: action.viewblog?action.viewblog:[], 
    } 
    return updateObject( state, updatedGetBlogState );
};

const viewBlog = (state, action) => {
    
    const updatedGetBlogState = {
        blogid  :action.id
    } 
    return updateObject( state, updatedGetBlogState );
};

 
const initBlog = (state, action) => {
    
    const updatedBlogSt = {
        bloglisting: action.bloglisting?action.bloglisting:[],
        loading: false,
        posted:false,
        blogposting:{
            posted:false
        }
    }
    return updateObject( state, updatedBlogSt);
};

const initBlogListing = (state, action) => {
    
    const updatedBlogSt = {
        bloglisting: action.bloglisting ? action.bloglisting:[], 
        blogdeleted:false,
        loading: false, 
        posted:false,
        blogposting:{
            posted:false
        }
    }
    return updateObject( state, updatedBlogSt);
};


const blogDeleteFinish = (state, action) => {
    const updatedSt = {
        blogdeleted:false,
        blogdeleteddata:[],
        posted:false,
        blogposting:{
            posted:false
        }
    }
    return updateObject( state, updatedSt );
};


const fetchBlogFailed = (state, action) => {
    return updateObject( state, { error: true } );
};

const blogDeleteSuccess = (state, action) => {
    
    const updateSt = {
        blogdeleted:true,
        blogdeleteddata: action.deletedblog,
        blogposting:{
            posted:false
        } 
    }
    return updateObject( state, updateSt );
};

const reducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {
        
        case actionTypes.ADD_BLOG: return addBlog( state, action );
        case actionTypes.VIEW_BLOG: return viewBlog( state, action );
        case actionTypes.GET_BLOG: return getBlog( state, action );
        case actionTypes.BLOG_DELETE_SUCCESS: return blogDeleteSuccess( state, action );
        case actionTypes.BLOG_DELETE_FINISH: return blogDeleteFinish( state, action );
        case actionTypes.INIT_BLOG: return initBlog( state, action ); 
        case actionTypes.INIT_BLOG_LISTING: return initBlogListing(state, action);
        case actionTypes.FETCH_BLOG_FAILED: return fetchBlogFailed(state, action);
        default: return state;
    }
};

export default reducer;