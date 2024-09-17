export interface Equipment {
    id: string;
    equipmentModelId: string;
    name: string;
  }
  
  export interface Position {
    date: string;
    lat: number;
    lon: number;
  }
  
  export interface PositionHistory {
    equipmentId: string;
    positions: {
      date: string;
      lat: number;
      lon: number;
    }[];
  }
  
  export interface EquipmentState {
    id: string;
    name: string;
    color: string;
  }
  
  export interface HourlyEarnings {
    equipmentStateId: string;
    value: number;
  }
  
  export interface EquipmentModel {
    id: string;
    name: string;
    hourlyEarnings: HourlyEarnings[];
  }
  
  export interface EquipmentStateHistory {
    equipmentId: string;
    states: {
      date: string;
      equipmentStateId: string;
    }[];
  }
  