import Toolbar from './components/Toolbar/Toolbar.tsx';
import {useState} from 'react';

function App() {
  const [showTaskOne, setShowTaskOne] = useState(false);
  const [showTaskTwo, setShowTaskTwo] = useState(false);

  const visabilityTaskOne = () => {
    setShowTaskOne((prevState) => !prevState)
  };

  const visabilityTaskTwo = () => {
    setShowTaskTwo((prevState) => !prevState)
  };

  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main>
        <div className="MainBoxTask d-flex align-items-center justify-content-around ">
          <div className="TaskOneMain d-flex flex-column">
            <button className="btn btn-primary mt-5 " onClick={() => visabilityTaskOne()}>Show first Task</button>
            <div className="TaskOne border border-black" style={{visibility: showTaskOne ? 'visible':'hidden'}}>
              <span>Test Show Task one</span>
            </div>
          </div>
          <div className="TaskTwoMain d-flex flex-column">
            <button className="btn btn-primary mt-5" onClick={() => visabilityTaskTwo()}>Show second task</button>
            <div className="TaksTwo border border-black" style={{visibility: showTaskTwo ? 'visible':'hidden'}}>
              <span>Test Show Task one</span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
