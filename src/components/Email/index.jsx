import React from 'react'

const Email = (props) => (
  <a href={`mailto: ${props.lenom}.${props.leprenom}@gmail.com`}>Envoyer un Email</a>
);

export default Email;