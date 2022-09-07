import Navbar from './components/Navbar';
import Homepage from './components/home/Homepage';
import { Routes, Route } from 'react-router-dom';
import { QuizPage } from './components/quiz/QuizPage';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/quiz/:quizId" element={<QuizPage />} />
            </Routes>
        </div>
    );
}

export default App;
