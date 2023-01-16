import { Component } from "react";

class Note extends Component {
 render() {
  const { note } = this.props;
  console.log(note);
  return <div></div>;
 }
}

export default Note;
