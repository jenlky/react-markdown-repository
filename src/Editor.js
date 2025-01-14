export default function Editor({ text, setText }) {
  return (
    <div className="editorWrap">
      <div className="toolbar">
        <i class="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
        Editor
        <i class="fa fa-arrows-alt"></i>
      </div>
      <textarea
        id="editor"
        onChange={(event) => setText(event.target.value)}
      >{text}</textarea>
    </div>
  );
}
