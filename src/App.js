import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout'; 
import Blog from './containers/Blog/Blog';
import CreateBlog from './containers/Blog/CreateBlog';
import ViewBlog from './containers/Blog/ViewBlog';

class App extends Component {
 
  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={Blog} />
        <Route path="/view_blog" exact component={ViewBlog} />
        <Route path="/create_new_blog" exact component={CreateBlog} />
        <Redirect to="/" /> 
      </Switch>
    ); 

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}
 

export default withRouter( App );
