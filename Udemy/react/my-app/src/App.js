import React from 'react';
import { Component } from 'react';
import Comentario from './components/Comentario'

//tudo vai ser colocado entre <div className="App"> 
//o componente é uma tag
class App extends Component {//componente ajuda a ter o estado

  state = { //Aplicacao inteira so tem um estado
    comentarios: [
      {
        
        name: 'Jonh',
        email: 'joao@gmail.com',
        date: new Date(2020, 3, 19),
        mensage: 'Olá, tudo bem?'
      },
      {
        name: 'Mary',
        email: 'maria@gmail.com',
        date: new Date(2021, 9, 20),
        mensage: 'Olá, tudo bem.'
      }
    ]
  }
  render() {

    return (
      <div className="App">

        <h1>Meu projeto</h1>
        {this.state.comentarios.map((comentario, indice) => (
              
          <Comentario
            key = {indice}
            name={comentario.name}
            email={comentario.email}
            date={comentario.date} >
            {comentario.mensage}

          </Comentario>

        ))
        }
      </div>
    )
  }
}


export default App;
