import './App.css';
import { MainRoutes } from './ MainRoutes';

import { Navbar } from './components/Navbar';

function App() {
  return (
    <main className="App">
      <Navbar />
      <MainRoutes />
      <div>footer</div>
    </main>
  );
}

export default App;
