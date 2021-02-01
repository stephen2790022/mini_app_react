import React from 'react';
import faker from 'faker';
import Client from 'components/Client';

const Clients = () => {
  const clientsList = Array.from({ length: 100 }, () => ({
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    avatar: faker.image.image(),
  }));
  console.log(clientsList)
  return (
    <ul className="clients">
      {clientsList.map((clientData) => (
        <Client
          firstName={clientData.firstName}
          lastName={clientData.lastName}
          tel={clientData.phoneNumber}
          email={clientData.email}
          img={clientData.avatar}
          key={clientData.id}
          />
      ))}
    </ul>
  );
};

export default Clients;