import React from 'react';

interface StateHistoryProps {
  stateHistory: {
    date: string;
    equipmentStateId: string;
  }[];
  stateData: any; // Define a more specific type based on your data structure
}

const StateHistory: React.FC<StateHistoryProps> = ({ stateHistory, stateData }) => {
  return (
    <div>
      <h2>State History</h2>
      <ul>
        {stateHistory.map((history, index) => {
          const state = stateData.find((s: any) => s.id === history.equipmentStateId); // Adjust according to your data
          return (
            <li key={index}>
              {new Date(history.date).toLocaleDateString()}: {state ? state.name : 'Unknown State'}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StateHistory;
