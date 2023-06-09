import Mainhome from "./homecom/Mainhome";
import NoteList from "./homecom/NoteList";

function Home() {
  return (
    <>
      <Mainhome />
      <NoteList showDone={true} />
    </>
  );
}

export default Home;
