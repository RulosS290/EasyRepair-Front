import React from 'react';
import Table from './table';

function appointments() {
  const data = [
    {
      fecha: "1/27/2025",
      hora: "10:33:00 PM",
      dispositivo: "teclado",
      tecnico: "tecnico1",
      estadoPago: "Pagado"
    }
  ];

  return (
    <div>
      <h1>Appointments</h1>
      <Table appointments={data} />
    </div>
  );
}

export default appointments;
