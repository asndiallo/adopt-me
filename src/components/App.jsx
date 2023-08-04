import { createRoot } from 'react-dom/client';
import SearchParams from './SearchParams';

/**
 * The 'App' function is the main component of the application.
 * It renders the main page of the website, which includes the title and the 'SearchParams' component.
 */
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
