import React from 'react';
const moment = require('moment');

import Header from './Header';
import Content from './Content';
import ListItem from './ListItem';


export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {timeItems: [], loading: true};
    $.get('/data.json', (res) => {
      this.setState({timeItems: res, loading: false});
    });
  }

  createDeleteItemFunction(id) {
    return () => {
      this.state.timeItems = this.state.timeItems.filter((el) => { return el.id !== id;});
      this.setState(this.state);
    };
  }

  createCreateNewItemFunction() {
    moment.now();
    return () => {
      this.state.timeItems.unshift({id: null, date: null, fromTime: null, toTime: null, editing: true});
      this.setState(this.state);
    };
  }

  render() {
    return (
        <div class="container">
          <div class="modal fade" tabIndex="-1" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title">Modal title</h4>
                </div>
                <div class="modal-body">
                  <p>One fine body&hellip;</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          <Header createNewItem={this.createCreateNewItemFunction()}/>
          <Content>
            { this.state.timeItems.length !== 0 ? this.state.timeItems.map((timeitem) => {
              return (<ListItem key={timeitem.id}
                      date={timeitem.date} fromTime={timeitem.fromTime}
                      toTime={timeitem.toTime} note={timeitem.note}
                      editing={timeitem.editing}
                      deleteItem={this.createDeleteItemFunction(timeitem.id)}/>);
            }) :
              (<div class="panel panel-warning">
                <div class="panel-heading">
                  No time items added for this month
                </div>
                <div class="panel-body">
                  Use the <span class="btn btn-xs btn-success"><span class="glyphicon glyphicon-plus"></span></span> button above to add time items.
                </div>
              </div>)
            }
          </Content>
        </div>
    );
  }
}
