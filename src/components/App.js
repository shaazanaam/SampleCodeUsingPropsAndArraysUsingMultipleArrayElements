import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// the first step is  to go to the apps.js and pass in some custom props
// the first thing that we want to customize is the title of the note and the content of the note

function App() {
  return (
    <div>
      <Header />
      {notes.map((i) => (
        <Note key={i.key} title={i.title} content={i.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
