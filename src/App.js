
import React from 'react';
import './App.css';

const UserCard = (props) => {
  return(
  <div>
  <div>User information:</div>
    <div>Name:  {props.name}</div>
    <div>Surname:  {props.surname}</div>
    <div>Age:  {props.age}</div>
  </div>
  )
}

const UserCardText = (props) => {
  return (
  <div>My info: {props.name} {props.surname} {props.age}</div>
  )
}

const UserTrueAge = (props) => {
  const trueAge = props.age
  if(trueAge >= 18)
  {return <div>Привет {props.name} , тебе {props.age} ,  я могу налить тебе выпить чего-нибудь </div>}
   
  return <div>Привет {props.name} , тебе {props.age} ,  я не могу налить тебе выпить чего-нибудь </div> 
}

class App extends React.Component {

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

export default App;
