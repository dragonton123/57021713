import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Calculator from './Components/Calculator';
class App extends Component {
    getVal(){
        var a = "get val";
        return a
    }

    constructor(){
        super();
        this.name="Tonner";
        this.state={
            name : "eieiei",
            age : "18",

        };

    }
    onClick(){
        this.setState({name : "TON"});
    }
    setAge(e){
        const age = e.target.value;
        this.setState({age : age});
    }

  render() {
      var list=[
          <Header />,
          <Header />,
          <Header />

      ];
      const myname = "Tossaphorn";
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <p>
              lnwza007
          </p>
          <div>
              KUY{this.name}
              {myname}
          </div>
          <div>
              cal : {445+123}
          </div>
          <div>
              call function {(() => {return 1234})()}
          </div>
          <div>
              {this.getVal()}
          </div>
          <div>
              {list}
          </div>
          <Footer />
          <div>
             Name: {this.state.name} Age:{this.state.age}
              <button onClick={this.onClick.bind(this)}> Change name</button>

            <input onChange={this.setAge.bind(this)}/>
          </div>
          <div>
              <Header title={this.state.name} />
          </div>

          <Calculator/>


      </div>
    );
  }

}


export default App;
