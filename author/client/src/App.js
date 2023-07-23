import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthorList from './components/authorList';
import Form from './components/form';
import Update from './components/update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/author' element={<AuthorList/>} />
        <Route path='/new' element={<Form/>} />
        <Route path='/author/:id' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
