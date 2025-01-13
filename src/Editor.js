import { useState } from "react";

export default function Editor() {
  const [text, setText] = useState("");
  return (
    <div>
      <textarea
        id="editor"
        onChange={() => setText(event.target.value)}
      ></textarea>
      {text}
    </div>
  );
}
