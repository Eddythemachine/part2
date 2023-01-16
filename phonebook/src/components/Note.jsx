import { Component } from "react";

class Note extends Component {
 render() {
  const { note } = this.props;
  return (
   <div>
    <ul>
     {note.map((el) => {
      return <li key={el.id}>{el.name}</li>;
     })}
    </ul>
   </div>
  );
 }
}

export default Note;
