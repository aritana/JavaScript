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
    ],
    novoComentario: {
      name: '',
      email: '',
      mensage: ''
    }
  }

  adicionarComentario = evento => {
    evento.preventDefault();
    const novoComentario = {...this.state.novoComentario, date: new Date()};
    this.setState({
      comentarios: [...this.state.comentarios,  novoComentario],
      novoComentario: { name: '',email: '', mensage: '' }
    })
  }
  digitacao = evento => {
    const { name, value } = evento.target;
    this.setState({
      novoComentario: { ...this.state.novoComentario, [name]: value }
    })
  }

  render() {

    return (
      <div className="App">

        <h1>Meu projeto</h1>
        {this.state.comentarios.map((comentario, indice) => (

          <Comentario
            key={indice}
            name={comentario.name}
            email={comentario.email}
            date={comentario.date} >
            {comentario.mensage}

          </Comentario>

        ))}
        <form method="post" onSubmit={this.adicionarComentario}>
          <h2>Adicionar Comentário</h2>
          <div>
            <input
              type="text"
              name="name"
              value={this.state.novoComentario.name}
              onChange={this.digitacao}
              placeholder="Digite seu name" />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={this.state.novoComentario.email}
              onChange={this.digitacao}
              placeholder="Digite seu email" />
          </div>
          <div>
            <textarea
              name="mensage"
              value={this.state.novoComentario.mensage}
              onChange={this.digitacao}
              rows="4"></textarea>
          </div>
          <button type="submit">Adicionar Comentário</button>
        </form>

      </div>
    );
  }
}


export default App;
