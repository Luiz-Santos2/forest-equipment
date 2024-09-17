import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { fetchEquipmentData, fetchEquipmentPositionHistory, fetchEquipmentStateHistory, fetchEquipmentState } from '../utils/api';
import { Equipment, PositionHistory, EquipmentStateHistory, EquipmentState } from '../types/equipment';
import Drawer from './Drawer'; // Certifique-se de que o caminho está correto

// Função auxiliar para criar um ícone circular com a cor do estado
const createCustomIcon = (color: string) => {
  return L.divIcon({
    html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>`,
    iconSize: [20, 20],
    className: '', // Remove a classe padrão do ícone
  });
};

interface Props {
  onEquipmentClick: (equipment: Equipment) => void;
}

const EquipmentMap: React.FC<Props> = ({ onEquipmentClick }) => {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [positions, setPositions] = useState<PositionHistory[]>([]);
  const [stateHistory, setStateHistory] = useState<EquipmentStateHistory[]>([]);
  const [equipmentStates, setEquipmentStates] = useState<EquipmentState[]>([]);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [drawerContent, setDrawerContent] = useState<{ date: string; state: string }[]>([]);

  // Função para encontrar o estado mais recente de um equipamento
  const getLatestState = (equipmentId: string) => {
    const history = stateHistory.find((sh) => sh.equipmentId === equipmentId);
    if (!history || history.states.length === 0) return null;

    const latestState = history.states.reduce((prev, current) => {
      return new Date(prev.date) > new Date(current.date) ? prev : current;
    });

    return equipmentStates.find((state) => state.id === latestState.equipmentStateId);
  };

  // Função para encontrar o histórico de estados de um equipamento
  const getStateHistory = (equipmentId: string) => {
    return stateHistory.find((sh) => sh.equipmentId === equipmentId);
  };

  useEffect(() => {
    const loadData = async () => {
      const equipmentResponse = await fetchEquipmentData();
      const positionResponse = await fetchEquipmentPositionHistory();
      const stateHistoryResponse = await fetchEquipmentStateHistory();
      const equipmentStateResponse = await fetchEquipmentState();

      setEquipment(equipmentResponse.data);
      setPositions(positionResponse.data);
      setStateHistory(stateHistoryResponse.data);
      setEquipmentStates(equipmentStateResponse.data);
    };

    loadData();
  }, []);

  return (
    <>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {positions.map((position) =>
          position.positions.slice(-1).map((pos) => {
            const equipmentData = equipment.find((e) => e.id === position.equipmentId);
            const latestState = getLatestState(position.equipmentId);
            const equipmentHistory = getStateHistory(position.equipmentId);

            return (
              equipmentData && latestState && (
                <Marker
                  key={position.equipmentId}
                  position={[pos.lat, pos.lon]}
                  icon={createCustomIcon(latestState.color)} // Usa a cor do estado mais recente para o ícone
                  eventHandlers={{
                    click: () => {
                      onEquipmentClick(equipmentData);
                      if (equipmentHistory) {
                        setDrawerContent(
                          equipmentHistory.states.map((stateHistory) => {
                            const state = equipmentStates.find((s) => s.id === stateHistory.equipmentStateId);
                            return { date: stateHistory.date, state: state?.name || 'Desconhecido' };
                          })
                        );
                        setDrawerOpen(true);
                      }
                    },
                  }}
                >
                  <Popup>
                    <div>
                      <h3>{equipmentData.name}</h3>
                      <p>
                        <strong>Estado: </strong>{latestState.name}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              )
            );
          })
        )}
      </MapContainer>
      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        content={drawerContent}
      />
    </>
  );
};

export default EquipmentMap;
