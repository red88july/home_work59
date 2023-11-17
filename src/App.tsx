import Toolbar from './components/Toolbar/Toolbar.tsx';
import JokesBox from './components/JokesBox/JokesBox.tsx';
import MovieForm from './components/MovieForm/MovieForm.tsx';
import { useState } from 'react';

function App() {
    const [showTaskOne, setShowTaskOne] = useState(false);
    const [showTaskTwo, setShowTaskTwo] = useState(false);

    const visabilityTaskOne = () => {
        setShowTaskOne((prevState) => !prevState);
    };

    const visabilityTaskTwo = () => {
        setShowTaskTwo((prevState) => !prevState);
    };

    return (
        <>
            <header>
                <Toolbar />
            </header>
            <main>
                <div className="MainBoxTask d-flex align-items-center justify-content-around ">
                    <div className="TaskOneMain d-flex align-items-center flex-column">
                        <button className="btn btn-primary mt-5 w-75" onClick={() => visabilityTaskOne()}>
                            Show first Task
                        </button>
                        <div className="TaskOne border border-black p-4 mt-2" style={{ visibility: showTaskOne ? 'visible' : 'hidden' }}>
                            <MovieForm onSubmit={() => {}} />
                        </div>
                    </div>
                    <div className="TaskTwoMain d-flex align-items-center flex-column">
                        <button className="btn btn-primary mt-5 w-75" onClick={() => visabilityTaskTwo()}>
                            Show second Task
                        </button>
                        <div className="TaksTwo border border-black mt-2" style={{ visibility: showTaskTwo ? 'visible' : 'hidden' }}>
                           <JokesBox />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
