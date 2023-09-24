import { PipelineToolbar } from './components/home/toolbar';
import { PipelineUI } from './components/home/ui';
import { SubmitButton } from './components/home/submit';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
