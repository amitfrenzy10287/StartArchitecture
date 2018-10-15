import React from 'react';
import classes from './BlogFilter.css';

const BlogFilter = (props) =>{
	return(
		<div className={['col-md-2',classes.contentBlogSidebar].join(' ')}>
	        <h6> BLOGS | POST </h6>   
	         <div className="custom-control custom-checkbox">
	          <input type="checkbox" className="custom-control-input" name="action"
	           id="action" defaultChecked={true} />
	          <label className="custom-control-label" for="action" >Blog</label>
	         </div>
	         <div className="custom-control custom-checkbox">
	          <input type="checkbox" className="custom-control-input" name="comedy" id="comedy" defaultChecked={true} />
	          <label className="custom-control-label" for="comedy">Post</label>
	         </div>
	    </div>
	);
}
export default BlogFilter;	