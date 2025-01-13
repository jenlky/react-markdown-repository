import "./styles.css";
import Editor from "./Editor.js";
import Previewer from "./Previewer.js";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <Editor text={text} setText={setText} />
      <Previewer text={text} />
    </div>
  );
}
