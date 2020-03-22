import React, { useState } from 'react';
import CreateTask from './createTask';
import './styles.scss';

function Home() {
  const [activeTab, setActiveTab] = useState('createtask');
  return (
    <div className='home'>
      <div className='tabs'>
        <div
          className={`tab ${activeTab === 'createtask' ? 'active' : ''}`}
          onClick={() => setActiveTab('createtask')}
        >
          Create Task
        </div>
        <div
          className={`tab ${activeTab === 'myTask' ? 'active' : ''}`}
          onClick={() => setActiveTab('myTask')}
        >
          My Task
        </div>
        <div
          className={`tab ${activeTab === 'assignedTask' ? 'active' : ''}`}
          onClick={() => setActiveTab('assignedTask')}
        >
          Assigned Task
        </div>
      </div>
      {activeTab === 'createtask' && <CreateTask />}
    </div>
  );
}

export default Home;
