import equipmentData from '../data/equipment.json';
import equipmentStateData from '../data/equipmentState.json';
import equipmentModelData from '../data/equipmentModel.json';
import equipmentStateHistoryData from '../data/equipmentStateHistory.json';
import equipmentPositionHistoryData from '../data/equipmentPositionHistory.json';

export const fetchEquipmentData = async () => {
  return new Promise<{ data: any[] }>((resolve) => {
    setTimeout(() => resolve({ data: equipmentData }), 1000); // Simula um atraso de 1 segundo
  });
};

export const fetchEquipmentState = async () => {
  return new Promise<{ data: any[] }>((resolve) => {
    setTimeout(() => resolve({ data: equipmentStateData }), 1000); // Simula um atraso de 1 segundo
  });
};

export const fetchEquipmentModel = async () => {
  return new Promise<{ data: any[] }>((resolve) => {
    setTimeout(() => resolve({ data: equipmentModelData }), 1000); // Simula um atraso de 1 segundo
  });
};

export const fetchEquipmentStateHistory = async () => {
  return new Promise<{ data: any[] }>((resolve) => {
    setTimeout(() => resolve({ data: equipmentStateHistoryData }), 1000); // Simula um atraso de 1 segundo
  });
};

export const fetchEquipmentPositionHistory = async () => {
  return new Promise<{ data: any[] }>((resolve) => {
    setTimeout(() => resolve({ data: equipmentPositionHistoryData }), 1000); // Simula um atraso de 1 segundo
  });
};
