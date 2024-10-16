import React, { useState } from 'react';

const Goals= () => {
  const [goals, setGoals] = useState([]);
  const [goalInput, setGoalInput] = useState('');

  const handleInputChange = (event) => {
    setGoalInput(event.target.value);
  };

  const handleAddGoal = () => {
    if (goalInput) {
      setGoals([...goals, goalInput]);
      setGoalInput('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h3>My Goals</h3>
      <input
        type="text"
        value={goalInput}
        onChange={handleInputChange}
        placeholder="Add a new goal"
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleAddGoal} style={{ padding: '10px', width: '100%', backgroundColor: 'rgb(91, 161, 137)', color: 'white', border: 'none', cursor: 'pointer' }}>
        Add Goal
      </button>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {goals.map((goal, index) => (
          <li key={index} style={{ padding: '10px', border: '1px solid #ccc', margin: '10px 0', borderRadius: '5px' }}>
            {goal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;
