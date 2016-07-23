import React from 'react';

export default class Statistics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div class="col-md-4">
            <div class="panel panel-info">
              <div class="panel-heading">
                Statistics
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-8">
                    Worked hours this month
                  </div>
                  <div class="col-md-4">
                    40
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    Hours until heat death
                  </div>
                  <div class="col-md-4">
                    2
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    Hours until the big rip
                  </div>
                  <div class="col-md-4">
                    2
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    Longest workday
                  </div>
                  <div class="col-md-4">
                    8
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}
