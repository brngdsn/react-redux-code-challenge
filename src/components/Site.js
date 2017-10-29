import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../api';
import './Site.css';

function SiteState(props) {
  if (props.state.busy) {
    return (<i className="fa fa-refresh fa-spin site-state-busy" aria-hidden="true"></i>);
  } else if (props.state.ok) {
    return (<i className="fa fa-check-circle-o site-state-ok" aria-hidden="true"></i>);
  } else {
    return (<i className="fa fa-times site-state-error" aria-hidden="true"></i>);
  }
}

function SiteLink(props) {
  if (props.state.busy) {
    return (
      <span>{props.url}</span>
    );
  } else if (props.state.ok) {
    return (
      <a href={`http://`+props.url}>{props.url}</a>
    );
  } else {
    return (
      <span>{props.url}</span>
    );
  }
}

class Site extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      ok: false,
      busy: false,
      error: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.poke(nextProps);
  }

  poke(nextProps) {
    this.setState({ busy: true });
    const url = `http://${nextProps ? nextProps.url : this.props.url}`;
    api.get({ url: url })
      .then((response) => {
        if ((response.status === 0) || (response.status === 200)) {
          this.setState({
            busy: false,
            ok: true,
            error: false
          });
        } else {
          this.setState({
            busy: false,
            ok: false,
            error: response.status
          });
        }
      }, (error) => {
        this.setState({
          busy: false,
          ok: false,
          error: JSON.stringify(error)
        });
      })
    ;
  }

  componentDidMount() {
    this.poke();
  }

  render() {
    return (
      <div className="site-container">
        <div><SiteState state={this.state} /></div>
        <div><SiteLink state={this.state} url={this.props.url} /></div>
      </div>
    );
  }

}

export default connect()(Site);