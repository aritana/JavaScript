import React, { Component } from 'react';


//tudo vai ser colocado entre <header>..</header>

//curso


//FimCurso

/*
function App() { 


   return (   
    <div className="App">    
  


    </div>
  );
}
*/
class App extends Component{
  state = {
    counter:0
  }
  increment = ()=>(
    this.setState({counter: 5})
  )
  render(){
    return(
      <div className="App"> 

        <button onClick={()=>this.increment()}>Button</button>
        <div>
          Div 1 {this.state.counter}
        </div>
        <div>
          Div 2
        </div>
        <div>
          Div 3
        </div>    
     </div>
    )
  }
}


export default App;
