import React from 'react'
import Email from 'components/Email'
import PhoneNumber from 'components/PhoneNumber'


const Client = (props) => {

  return (
    <li className="card">
      <img src={props.img} alt="Client Avatar"/> 
      <div className="cardBody">
        <p>{props.firstName}</p>  
        <p>{props.lastName}</p> 
      </div>
      <div className="cardFooter">
        <p><Email lenom={props.firstName} leprenom={props.lastName} /></p>
        <p><PhoneNumber phoneNumber={props.tel} /></p>
      </div>
    </li>
  );
};

export default Client;