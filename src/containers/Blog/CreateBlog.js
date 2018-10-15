import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Aux from '../../hoc/Auxiliary/Auxiliary';  
import classes from '../../components/Blog/BlogListing.css'; 
import BlogFilter from '../../components/Blog/BlogFilter/BlogFilter'; 
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import FormData from '../FormData/FormData';
import axios from 'axios'; 

export class CreateBlog extends Component {
    
    state = {
        purchasing: false
    }

    componentDidMount () {         
         this.props.onCreateBlog(); 
    } 

    render () {  
        if(this.props.posted) {
           this.props.history.push("/");
        }
        return (
            <Aux> 
                <div className="container-fluid">
                    <div className="row">
                        <BlogFilter/> 
                        <div className={classes.contentBlog}>                            
                            <div className="row m-3"> 
                                 <FormData/>
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
        posted :state.blogPosting.blogposting.posted, 
        error: state.blog 
    };
}

const mapDispatchToProps = dispatch => {
    
    return { 
        onCreateBlog: () => dispatch(actions.addBlog()), 
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( CreateBlog, axios ));