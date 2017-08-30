import React, { Component } from 'react';

class Calculator extends Component {
    constructor(){
        super();
        this.state={
            sum1 : 0,
            sum2 : 0,
            total :0
        };

    }
    setSum1(s){
        const sum = s.target.value;
        this.setState({sum1 : sum});
    }
    setSum2(s){
        const sum = s.target.value;
        this.setState({sum2 : sum});
    }

    render() {
        const myname = "Tossaphorn";

        return (
            <div>
                <div>
                    sum1 : <input onChange={this.setSum1.bind(this)}/><br/>
                    sum2 : <input onChange={this.setSum2.bind(this)}/>
                </div>>
                <h1>
                   This is calculator Components
                </h1>
               <h1>
                   sum1 : {this.state.sum1}
               </h1>
                <h1>
                    sum2 :  {this.state.sum2}
                </h1>
                <h1>
                    Total :  {this.state.sum1+this.state.sum2}
                </h1>
            </div>
        );
    }

}


export default Calculator;