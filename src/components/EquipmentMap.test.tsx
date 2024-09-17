// src/components/EquipmentMap.test.tsx

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import EquipmentMap from './EquipmentMap';
import { fetchEquipmentData, fetchEquipmentPositionHistory, fetchEquipmentStateHistory, fetchEquipmentState, fetchEquipmentModel } from '../utils/api';

// Mock das funções de API
jest.mock('../utils/api', () => ({
  fetchEquipmentData: jest.fn(),
  fetchEquipmentPositionHistory: jest.fn(),
  fetchEquipmentStateHistory: jest.fn(),
  fetchEquipmentState: jest.fn(),
  fetchEquipmentModel: jest.fn(),
}));

// Dados simulados
const mockEquipmentData = [
  { id: '1', name: 'Equipamento 1' },
  { id: '2', name: 'Equipamento 2' },
];

const mockPositionHistory = [
  { equipmentId: '1', positions: [{ lat: 0, lon: 0 }] },
  { equipmentId: '2', positions: [{ lat: 1, lon: 1 }] },
];

const mockStateHistory = [
  { equipmentId: '1', states: [{ date: '2024-09-17T00:00:00Z', equipmentStateId: '1' }] },
  { equipmentId: '2', states: [{ date: '2024-09-16T00:00:00Z', equipmentStateId: '2' }] },
];

const mockEquipmentStates = [
  { id: '1', name: 'Estado 1', color: 'red' },
  { id: '2', name: 'Estado 2', color: 'blue' },
];

const mockEquipmentModels = [
  { id: '1', name: 'Modelo 1', equipmentIds: ['1'] },
  { id: '2', name: 'Modelo 2', equipmentIds: ['2'] },
];

describe('EquipmentMap', () => {
  beforeEach(() => {
    (fetchEquipmentData as jest.Mock).mockResolvedValue({ data: mockEquipmentData });
    (fetchEquipmentPositionHistory as jest.Mock).mockResolvedValue({ data: mockPositionHistory });
    (fetchEquipmentStateHistory as jest.Mock).mockResolvedValue({ data: mockStateHistory });
    (fetchEquipmentState as jest.Mock).mockResolvedValue({ data: mockEquipmentStates });
    (fetchEquipmentModel as jest.Mock).mockResolvedValue({ data: mockEquipmentModels });
  });

  test('renders the map with markers', async () => {
    render(<EquipmentMap onEquipmentClick={() => {}} />);

    // Espera até que os dados sejam carregados e renderizados
    await waitFor(() => {
      expect(screen.getByText('Modelo 1')).toBeInTheDocument();
      expect(screen.getByText('Modelo 2')).toBeInTheDocument();
    });
  });

  test('opens drawer with equipment state history on marker click', async () => {
    render(<EquipmentMap onEquipmentClick={() => {}} />);

    // Simular o clique em um marcador
    fireEvent.click(screen.getByText('Modelo 1'));

    // Verifica se o drawer foi aberto e se o conteúdo está presente
    await waitFor(() => {
      expect(screen.getByText('Estado 1')).toBeInTheDocument();
    });
  });
});
