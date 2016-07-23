import React from 'react';

export default class Header extends React.Component {

  render() {
    const moment = require('moment');
    console.log(moment);
    return (
      <div class="row">
        <div class="col-md-2">
          <h3><span class="glyphicon glyphicon-time"></span> Chrono log</h3>
        </div>
        <div class="col-md-6">
          <h3> </h3>
          <div class="pull-right">
            <div class="btn-toolbar">
              <div class="btn-group">
                <button class="btn btn-success" onClick={this.props.createNewItem}>
                  <span class="glyphicon glyphicon-plus"></span>
                </button>
              </div>
              <div class="btn-group">
                <button class="btn btn-default">
                  <span class="glyphicon glyphicon-circle-arrow-left"></span>
                </button>
                <button class="btn btn-default">
                  January
                </button>
                <button class="btn btn-default">
                  <span class="glyphicon glyphicon-circle-arrow-right"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
