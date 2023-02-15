import './App.css';
import NotesListPage from './pages/NotesListPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotePage from './pages/NotePage';

function App() {
  return (
    <BrowserRouter>
      <h1>Nadpis hlavní stránky</h1>
      <Routes>
          <Route path="/" exact element={<NotesListPage />} />
          <Route path='/note/:id' element={<NotePage />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App;
