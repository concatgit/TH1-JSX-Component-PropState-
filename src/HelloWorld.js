import React from 'react';

function HelloWorld() {
    let name='Cee';
    const user={
        firstName:"Harper",
        lastName:"Perez"
    };
    const formatName=(user)=>
    {
        return user.firstName+' '+user.lastName;
    }
  return (
    <div>
    <div>Xin chào:{name} và {formatName(user)}</div>
    <div>{name==='Cee'? 'Xin chào '+name:'Xin chào'+formatName(user)}</div>
    </div>
  )
}

export default HelloWorld