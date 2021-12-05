import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Store from './redux/store';
import './App.scss';

const List = lazy(() => import('./pages'));

function App() {
  return (
    <div className="App">
      <Store>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<List />} />
            </Routes>
          </Suspense>
        </Router>
      </Store>
    </div>
  );
}

export default App;
