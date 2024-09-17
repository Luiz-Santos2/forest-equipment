import React from 'react';
import { Equipment, EquipmentStateHistory } from '../types/equipment';
import StateHistory from './StateHistory';

interface Props {
  equipment: Equipment | null;
  stateHistory: EquipmentStateHistory[];
  stateData: any; // Define a more specific type based on your data structure
}

const EquipmentDetails: React.FC<Props> = ({ equipment, stateHistory, stateData }) => {
  if (!equipment) return <div>Select an equipment to see details.</div>;

  const history = stateHistory.find(history => history.equipmentId === equipment.id)?.states || [];

  return (
    <div>
      <h2>{equipment.name}</h2>
      <StateHistory stateHistory={history} stateData={stateData} />
    </div>
  );
};

export default EquipmentDetails;
