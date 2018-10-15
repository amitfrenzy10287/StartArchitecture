import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import BlogFilter from '../../components/Blog/BlogFilter/BlogFilter'; 
import classes from './ViewBlog.css';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index'; 
import axios from 'axios'; 
import {Link} from 'react-router-dom';

export class ViewBlog extends Component {
    
    state = {
        purchasing: false
    }

    componentDidMount () {     
        // console.log(this.props.history.state.blogid);
        this.props.onViewBlog(this.props.history.location.state.blogid); 

    } 

    render () { 
              
        return (
            <Aux> 
                <div className="container-fluid">
                    <div className="row">
                        <BlogFilter/> 
                        <div className={classes.contentBlog}> 
                            <div className="row m-3"> 
                                 { this.props.getblog ?
                                    (<div className={classes.ViewBlog}> 
                                        <div className="form-group">
                                          <label for="disabledTextInput">Title</label>
                                          <input type="text" disabled="disabled" 
                                          className="form-control" value={this.props.getblog.title} />
                                        </div>
                                        <div className="form-group">
                                          <label for="disabledTextInput">Category</label>
                                          <input type="text" disabled="disabled" 
                                          className="form-control" value={this.props.getblog.categories} />
                                        </div>
                                        <div className="form-group">
                                          <label for="disabledTextInput">Content</label>
                                          <input type="text" disabled="disabled" 
                                          className="form-control" value={this.props.getblog.content} />
                                        </div>  
                                        <Link to="/" className="btn btn-primary"> Back </Link> 
                                    </div>) : null }
                            </div> 
                        </div> 
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        getblog :state.blogListing.viewblog,
        error: state.blog 
    };
}

const mapDispatchToProps = dispatch => {
    
    return { 
        onViewBlog: (blogid) => dispatch(actions.viewBlog(blogid)), 
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( ViewBlog, axios ));