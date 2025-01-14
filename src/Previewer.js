import Markdown from 'react-markdown'

export default function Previewer({ text }) {
  return (
    <div className="previewWrap">
      <div className='toolbar'>
        <i class="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
        Previewer
        <i class="fa fa-arrows-alt"></i>
      </div>
      <div id='preview'>
        <Markdown>{text}</Markdown>
      </div>
    </div>
  );
}
