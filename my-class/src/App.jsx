import './App.css';
import ClassWorkList from "./Components/ClassWorkList";
import StreamList from './Components/StreamList';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('Stream');

  return (
    <div className='App'>
      <nav className='nav'>
        <ul>
          <li className={activeTab === 'Stream' ? 'active' : ''} onClick={() => setActiveTab('Stream')}>Stream</li>
          <li className={activeTab === 'Classwork' ? 'active' : ''} onClick={() => setActiveTab('Classwork')}>Classwork</li>
        </ul>
      </nav>
      <div className='mainFrame'>
        {activeTab === 'Stream' && <StreamList/>}
        {activeTab === 'Classwork' && <ClassWorkList/>}
      </div>
    </div>
  );
}

export default App;