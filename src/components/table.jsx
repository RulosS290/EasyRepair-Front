import React from 'react';

function Table({ appointments }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Dispositivo</th>
          <th>Técnico</th>
          <th>Estado de Pago</th>
          <th>Acción</th>
          <th>Editar</th>
          <th>Eliminar</th>
          <th>Calificar</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appt, index) => (
          <tr key={index}>
            <td>{appt.fecha}</td>
            <td>{appt.hora}</td>
            <td>{appt.dispositivo}</td>
            <td>{appt.tecnico}</td>
            <td>{appt.estadoPago}</td>
            <td><button>Ver Pago</button></td>
            <td><button>Editar</button></td>
            <td><button>Eliminar</button></td>
            <td><button>Calificar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;