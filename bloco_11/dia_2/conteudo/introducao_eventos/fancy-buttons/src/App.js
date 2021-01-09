import React from 'react';
import './App.css';


// function handleClick2() {
//   console.log('Clicada 2');
// }
// function handleClick3() {
//   console.log('Clicada 3');
// }

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.changeClass = this.changeClass.bind(this);
    this.state = {
      cliquesBotao1: 0,
      cliquesBotao2: 0,
      cliquesBotao3: 0,
      information: 'Cliques',
      className: 'default'
    }
    console.log('Componente sendo contruído')
  }
  handleClick(incremento, botao, callback) {
    //O bind é necessário para conseguir acessar o estado
    // console.log(this)
    // A mudança de estado ocorre de forma assíncrona:
    this.setState((estadoAnterior, _props) => {
      // console.log(`Clicada ${this.state.cliquesBotao1}`);
      if (botao === 'botao1'){
        return {
          cliquesBotao1: estadoAnterior.cliquesBotao1 + incremento,
          className: callback,
        }
      } else if (botao === 'botao2') {
        return {
          cliquesBotao2: estadoAnterior.cliquesBotao2 + incremento
        }
      } else {
        return {
          cliquesBotao3: estadoAnterior.cliquesBotao3 + incremento
        }
      }
  })
  }

  changeClass () {
    // // return 'button-style'
    // this.setState((estadoAnterior, _props) => {
      // if (estadoAnterior.cliquesBotao1 % 2 !== 0) {
      if (this.state.cliquesBotao1 % 2 !== 0) {
        console.log('verde')
        return 'button-style'
      } else {
        console.log('cinza')
        return 'default'
      }
    // })
  }
    
  
  render() {
    // console.log(this);
    return ( 
    <div>
      <button onClick={ () => this.handleClick(1,'botao1', this.changeClass())} className={this.state.className}>Botão 1 recebeu {this.state.cliquesBotao1} {this.state.information}</button>
      <button onClick={ () => this.handleClick(1,'botao2')}>Botão 2 recebeu {this.state.cliquesBotao2} {this.state.information}</button>
      <button onClick={ () => this.handleClick(1,'botao3')}>Botão 3 recebeu {this.state.cliquesBotao3} {this.state.information}</button>
    </div>
    )
  }
}

export default App;
