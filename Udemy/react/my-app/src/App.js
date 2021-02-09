import React from 'react';
import {Component} from 'react';
import Comentario from './components/Comentario'

//tudo vai ser colocado entre <div className="App"> 
//o componente é uma tag
class App extends Component{
  render(){

    return(
      <div className="App"> 
        <h1>Meu projeto</h1>
        <Comentario name="Joao" email = "joao@gmail.com" date = {new Date(2020,3,19)}>
          Olá, sou João!
        </Comentario>
        <Comentario name="Maria" email = "Maria@gmail.com" date = {new Date(2020,3,21)}>
          Olá, sou Maria.
         </Comentario>
     </div>
    )
  }
}


export default App;
