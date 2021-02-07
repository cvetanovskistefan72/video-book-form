import logo from './logo.svg';
import './App.css';
import Table from './Table'
import Book from './components/Book';
import Video from './components/Video';
import { useState } from 'react';
import { Dropdown } from './components/Dropdown';
 
function App() {
  const [selectedForm, setSelectedForm] = useState("book")
  
  return (
    <div className="App">
      <Dropdown selectForm={setSelectedForm} />
      { selectedForm==="book" ? <Book/> : <Video/> }
    </div>
  );
}

export default App;
