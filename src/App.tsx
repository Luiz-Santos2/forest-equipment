import React, { useState, useEffect } from 'react';
import EquipmentMap from './components/EquipmentMap';
import EquipmentDetails from './components/EquipmentDetails';
import { fetchEquipmentData, fetchEquipmentPositionHistory, fetchEquipmentStateHistory, fetchEquipmentState } from './utils/api';
import { Equipment, EquipmentStateHistory } from './types/equipment';

const App: React.FC = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [stateHistory, setStateHistory] = useState<EquipmentStateHistory[]>([]);
  const [stateData, setStateData] = useState<any[]>([]); // Adjust the type based on your actual data

  useEffect(() => {
    const loadData = async () => {
      const equipmentResponse = await fetchEquipmentData();
      const positionResponse = await fetchEquipmentPositionHistory();
      const stateHistoryResponse = await fetchEquipmentStateHistory();
      const stateDataResponse = await fetchEquipmentState();

      setStateHistory(stateHistoryResponse.data);
      setStateData(stateDataResponse.data);
    };

    loadData();
  }, []);

  return (
    <div>
      <EquipmentMap onEquipmentClick={setSelectedEquipment} />
      <EquipmentDetails
        equipment={selectedEquipment}
        stateHistory={stateHistory}
        stateData={stateData} // Pass the state data here
      />
    </div>
  );
};

export default App;
