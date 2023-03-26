
import React from 'react';
import UserCard from './UserCard';
import UserCardText from './UserCardText';

const UserTrueAge = ({name,age}) => {
  const trueAge = age;

  if(trueAge >= 18)
  {return <div>Привет {name} , тебе {age} ,  я могу налить тебе выпить чего-нибудь </div>}
   
  return <div>Привет {name} , тебе {age} ,  я не могу налить тебе выпить чего-нибудь </div> 
}

class User extends React.Component {

  state = { name: "Имя",
            surname: "Фамилия",
            age: 20,
          }
 
render() {
  return (
  <div>
    <UserCard  {...this.state} />
    <UserCard name={this.state.name}
              surname={this.state.surname}
              age={this.state.age}
    />
    <UserCardText {...this.state}/>
    <UserTrueAge {...this.state}/>
  </div>
  );
}
}

export default User;
