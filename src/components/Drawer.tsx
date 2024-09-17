import React from 'react';
import './Drawer.css'; // Certifique-se de que o caminho está correto

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  content: { date: string; state: string }[];
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, content }) => {
  return (
    <div className={`drawer ${isOpen ? 'drawer-open' : ''}`}>
      <button className="drawer-close-button" onClick={onClose}>X</button>
      <h2>Histórico de Estados</h2>
      {content.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {content.map((entry, index) => (
              <tr key={index}>
                <td>{new Date(entry.date).toLocaleString()}</td>
                <td>{entry.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Sem histórico de estados disponível.</p>
      )}
    </div>
  );
};

export default Drawer;
