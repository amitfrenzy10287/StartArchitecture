import React from 'react'; 
 
const BlogListing = ( props ) => {   
        return( 
              <div key={props.id} className="card text-white bg-dark mt-3 p-0 col-md-12">
                <div className="card-header">
                  {props.title.toUpperCase()} 
                  <button type="button" onClick={props.delete} 
                  className="btn btn-danger btn-sm float-right">Delete</button>
                  <button type="button" onClick={props.view} 
                  className="btn btn-success btn-sm float-right mr-2">View</button>
                </div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>{props.content}</p>
                    <footer className="blockquote-footer">{props.categories}</footer>
                  </blockquote>
                </div>
              </div> 
        );
    } 

export default BlogListing;
