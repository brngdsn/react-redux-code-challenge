import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import {connect} from 'react-redux';
import Sites from './Sites';
import { fetchSites } from '../redux/reducers/reducer';

const Routes = ({fetchSites}) => {
  return (
    <Router history={browserHistory}>
        <Route path="/" component={Sites} onEnter={fetchSites} />
    </Router>
  )
};

const mapState = ({sites}) => ({sites});
const mapDispatch = {fetchSites};

export default connect(mapState, mapDispatch)(Routes);