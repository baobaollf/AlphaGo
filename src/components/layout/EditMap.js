import React, { Component } from 'react';

class EditMapPage extends Component {

  render() {
    const id = this.props.match.params.id;
    console.log(this.props.location.details)
    return (
      <div>Edit your map - {id}</div>
    )
  }
}

export default EditMapPage;