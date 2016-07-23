import React from 'react';
import Statistics from './Statistics';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div class="row">
          <div class="col-md-8">
            <div class="list-group">
              { this.props.children }
            </div>
          </div>
          <Statistics/>
        </div>
    );
  }
}
