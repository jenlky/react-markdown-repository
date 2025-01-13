import "./styles.css";
import Editor from "./Editor.js";
import Previewer from "./Previewer.js";

export default function App() {
  return (
    <div className="App">
      <Editor />
      <Previewer />
    </div>
  );
}
