import React, {Component} from 'react';
import {connect} from 'react-redux';
import Site from './Site';
import './Sites.css';

class Sites extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      page: 1
    };
  }

  nextPage() {
    if (this.state.page === this.getNumPages()) {
      return null;
    } else {
      return this.setState({ page: this.state.page + 1});
    }
  }

  prevPage() {
    if (this.state.page === 1) {
      return null;
    } else {
      return this.setState({ page: this.state.page - 1});
    }
  }

  getNumPages() {
    return Math.floor((this.props.sites.length+10)/10);
  }

  getSites() {
    return this.props.sites.filter((site, i) => {
      return (i < this.state.page * 10) && (i >= (this.state.page * 10) - 10)
    });
  }

  render() {
    return (
      <div className="sites">
        <div>
          <h1>Alexa Top Sites</h1>
          <h3>There are {this.props.sites.length} sites</h3>
          <h3>
            <button type="button" onClick={this.prevPage.bind(this)} disabled={this.state.page === 1}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>&nbsp;
            {this.state.page}/{this.getNumPages()}&nbsp;&nbsp;
            <button type="button" onClick={this.nextPage.bind(this)} disabled={this.state.page === this.getNumPages()}>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </h3>
        </div>
        <div>
          {
            this.props.sites && this.getSites().map((site, i) => {
              if (!site)
                return <tr></tr>
              return (
                <Site key={i} id={site.id} url={site.url} />
              );
            })
          }
        </div>
      </div>
    );
  }

}
;

const mapState = ({sites}) => ({sites});
export default connect(mapState)(Sites);