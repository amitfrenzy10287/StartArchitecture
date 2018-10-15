import React from 'react';

import blogLogo from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={blogLogo} alt="MyBlog" /> 
    </div>
);

export default logo;