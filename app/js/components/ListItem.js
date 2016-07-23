import React from 'react';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    const data = {date: this.props.date, fromTime: this.props.fromTime, toTime: this.props.toTime, note: this.props.note};
    this.state = {editing: this.props.editing, data};
    this.state.stagedData = {};
  }

  stopEditing() {
    this.state.editing = false;
    this.state.stagedData = {};
    this.setState(this.state);
  }

  startEditing() {
    this.state.stagedData = JSON.parse(JSON.stringify(this.state.data));
    this.state.editing = true;
    this.setState(this.state);
  }

  saveChanges() {
    this.state.data = this.state.stagedData;
    this.state.editing = false;
    this.state.stagedData = {};
    this.setState(this.state);
  }

  stageChange(fieldName, value) {
    this.state.stagedData[fieldName] = value;
    this.setState(this.state);
  }


  render() {
    return !this.state.editing ? (<div class="list-group-item listitem">
                <h4 class="list-group-item-heading">
                  { this.state.data.date }: { this.state.data.fromTime } - { this.state.data.toTime } { this.state.data.note }
                  <div class="btn-group pull-right actions">
                    <button class="btn btn-xs btn-info" onClick={() => {this.startEditing();}}>
                      <span class="glyphicon glyphicon-pencil"></span>
                    </button>
                    <button class="btn btn-xs btn-warning" onClick={this.props.deleteItem}>
                      <span class="glyphicon glyphicon-trash"></span>
                    </button>
                  </div>
                </h4>
            </div>) :
    (<div class="list-group-item listitem active">
              <h4 class="list-group-item-heading">
                <div class="form-inline">
                  <div class="form-group form-group-sm">
                    <input type="text" class="form-control" placeholder="Date" value={this.state.stagedData.date}
                      onChange={(e) => this.stageChange('date', e.target.value)}></input>
                  </div>
                  <div class="form-group form-group-sm">
                    <input type="text" class="form-control" placeholder="from time" value={this.state.stagedData.fromTime}
                      onChange={(e) => this.stageChange('fromTime', e.target.value)}></input>
                  </div>
                  <div class="form-group form-group-sm">
                    <input type="text" class="form-control" placeholder="to time" value={this.state.stagedData.toTime}
                      onChange={(e) => this.stageChange('toTime', e.target.value)}></input>
                  </div>
                  <div class="form-group form-group-sm">
                    <input type="text" class="form-control" placeholder="note to mr mcruize" value={this.state.stagedData.note}
                      onChange={(e) => this.stageChange('note', e.target.value)}></input>
                  </div>
                  <div class="btn-group pull-right">
                    <button class="btn btn-sm btn-success" onClick={() => {this.saveChanges();}}>
                      <span class="glyphicon glyphicon-ok"></span>
                    </button>
                    <button class="btn btn-sm btn-danger" onClick={() => {this.stopEditing();}}>
                      <span class="glyphicon glyphicon-remove"></span>
                    </button>
                  </div>
                </div>
              </h4>
            </div>);
  }
}
ListItem.propTypes = {date: React.PropTypes.string,
  fromTime: React.PropTypes.string,
  toTime: React.PropTypes.string,
  note: React.PropTypes.string,
  deleteItem: React.PropTypes.func,
  editing: React.PropTypes.bool
};
