export default function Editor({ text, setText }) {
  return (
    <textarea
      id="editor"
      onChange={(event) => setText(event.target.value)}
    ></textarea>
  );
}
