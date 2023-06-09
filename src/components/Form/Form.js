import React from 'react';


class Form extends React.Component {

  state = { name: "",
            surname: "",
            error: "",
          }

   onSubmit = (event) => {
    event.preventDefault();
  
    if(this.state.name.length <= 3 || this.state.surname.length <= 3) {
      this.setState({ error: "С твоими данными что то не так ;(" });
    } else {
      alert(`Добро пожаловать ${this.state.name} ${this.state.surname}`)
      this.setState( {name: "", surname: "", error: ""})
 
    
      }   

    console.log(this.state.name, this.state.surname);
   }

   changeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
   }
 
render() {
  return (
  <div>
    <form onSubmit={this.onSubmit}>
        <div>
            <input
             placeholder="Name"
              name="name"
               value={this.state.name}
                onChange={this.changeValue} />
        </div>
        <div>
            <input
             placeholder="Surname"
              name="surname"
               value={this.state.surname}
               onChange={this.changeValue}
                />
        </div>
        <button type="submit">Submit</button>
        <div>
          {this.state.error}
        </div> 
    </form>
   
  </div>
  );
}
}

export default Form;