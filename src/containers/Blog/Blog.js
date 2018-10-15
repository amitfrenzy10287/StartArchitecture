import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 

import Aux from '../../hoc/Auxiliary/Auxiliary';
import BlogList from '../../components/Blog/BlogListing'; 
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from '../../components/Blog/BlogListing.css';
import ScrollArea from 'react-scrollbar';
import BlogFilter from '../../components/Blog/BlogFilter/BlogFilter'; 
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Modal from '../../components/UI/Modal/Modal';
import axios from 'axios'; 

export class Blog extends Component {
     
    state = {
        purchasing: false,
        show:false,
        blogid:0,
    }

    componentDidMount () { 
        this.props.onInitBlog();
    }  

    showDelete = ( e, id ) => { 
        e.preventDefault();
        this.setState({
            show    : true,
            blogid  : id
        }); 
    }

    initDeleteBlog = ( e,id ) => {

        e.preventDefault(); 
        this.props.deleteBlog(id);
        this.setState( { show: false } );  
    }

    deleteCancelHandler = () => {
        this.setState( { show: false } );
    }

    finishDelete = () => {
        this.setState( { show: false } );
    }    

    getBlog = (e,id) => {
        
        e.preventDefault(); 
        this.props.history.push({
            pathname: '/view_blog/', 
            state: { blogid: id }
        });
    }    

    render () { 

        let blog = this.props.bloglisting ? this.props.bloglisting:null; 
        let blogPanel= <Spinner/>;  
 
        if( blog ){
             
            blogPanel = Object.keys( blog ).map( ( key )=>{  
                   if( blog[key].content != null ) {
                        return( 
                            <Aux> 
                                <BlogList 
                                delete={(e) => this.showDelete( e, blog[key].id ) } 
                                view={(e) => this.getBlog( e, blog[key].id ) }
                                title={blog[key].title}
                                content={blog[key].content}
                                categories={blog[key].categories}    
                                 /> 
                            </Aux>
                            );  
                        }  
                    });    
            }  
      
        return (
            <Aux> 
                <Modal show={this.state.show} modalClosed={this.deleteCancelHandler}>
                  <h4>Are you sure you want to delete this blog?</h4>  
                  <button onClick={(e)=>this.initDeleteBlog(e,this.state.blogid)} 
                  className="btn btn-success btn-sm" >Continue</button>
                  <button onClick={this.deleteCancelHandler} 
                  className="btn btn-danger btn-sm ml-3" >Cancel</button>
                </Modal>  
                <div className="container-fluid">
                    <div className="row">
                        <BlogFilter/> 
                        <div className={['',classes.contentBlog].join(' ')}>
                            <ScrollArea style={{ height: '800px' }}>
                                <div className="m-3 text-right">
                                    <Link  
                                    className="btn btn-warning" to="/create_new_blog">
                                    Create New Blog</Link>             
                                </div>
                                <div className="row m-3"> 
                                     {this.props.loading===false ? blogPanel : <Spinner/> }
                                </div>
                            </ScrollArea>          
                        </div> 
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        loading:state.blogListing.loading,
        bloglisting :state.blogListing.bloglisting,
        blogdeleteddata:state.blogListing.blogdeleteddata,
        blogdeleted:state.blogListing.blogdeleted, 
        error: state.blog, 
    };
}

const mapDispatchToProps = dispatch => {
    
    return { 
        onInitBlog: () => dispatch(actions.initBlog()),
        getUpdatedBlogs: ()=> dispatch(actions.initBlogListing()),
        deleteBlog:(blogid) => dispatch(actions.deleteBlog(blogid)),
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( Blog, axios ));