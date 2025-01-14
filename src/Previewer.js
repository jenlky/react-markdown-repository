import Markdown from 'react-markdown'

export default function Previewer({ text }) {
  return (
    <div id="previewer">
      <Markdown>{text}</Markdown>
    </div>
  );
}
