import React from 'react'

const PhoneNumber = (props) => (
  <a href={`callto:${props.phoneNumber}`}>Appeler</a>
);

export default PhoneNumber;