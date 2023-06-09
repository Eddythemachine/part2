import NoteList from "./homecom/NoteList";

function ImportantNotes() {
  return (
    <div>
      <NoteList showDone={false} />
    </div>
  );
}

export default ImportantNotes;
