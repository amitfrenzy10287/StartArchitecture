import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './FormData.css';
import axios from 'axios';
import Input from '../../components/UI/Input/Input';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';

class FormData extends Component {
    state = {
        blogForm: {
            title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Title'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            categories: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Category'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            content: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Content'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }, 
        },
        formIsValid: false,
        redirect:false,
    }

    formHandler = ( event ) => {
         
        event.preventDefault(); 
        const formData = {}; 
        for (let formElementIdentifier in this.state.blogForm) {
            formData[formElementIdentifier] = this.state.blogForm[formElementIdentifier].value;
        }  
        const blogdata = { 
            formData           : formData, 
        } 
        this.props.onBlogPosting( blogdata );
        this.setState({redirect:true}); 
    }

    inputChangedHandler = ( event, inputIdentifier ) => {
        
        const updatedFormElement = updateObject(this.state.blogForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.blogForm[inputIdentifier].validation),
            touched: true
        });
        const updatedOrderForm = updateObject(this.state.blogForm, {
            [inputIdentifier]: updatedFormElement
        });
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({blogForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render () {
         
        const formElementsArray = [];
        
        for (let key in this.state.blogForm) {
            formElementsArray.push({
                id: key,
                config: this.state.blogForm[key]
            });
        }
        
        let form = (
            <form onSubmit={this.formHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <button className="btn btn-block btn-primary"
                disabled={!this.state.formIsValid}>
                SAVE YOUR BLOG</button>
            </form>
        );
        
        
        return (
            <div className={classes.FormData}>
                <div className="alert alert-success" role="alert">
                  Write blog here
                </div>
                {form}
            </div>
        );
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        onBlogPosting: (blogData) => dispatch(actions.addBlog(blogData))
    };
};

export default connect(null, mapDispatchToProps)(withErrorHandler(FormData, axios));