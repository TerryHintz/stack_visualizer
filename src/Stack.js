import React, {Component} from 'react';
import './Stack.css'

const funcs = [
    'Push',
    'Pop',
    'Peek',
    'isEmpty',
]

class Stack extends Component {
    state = {
        stack: [],
        index: 9,
    }

    componentDidMount() {
        let arr = [];
        for(let i=0; i<10; i++){
            arr.push(null);
        }
        this.setState({stack: arr});
    }

    handleButton = (func) => {
        switch(func){
            case 'Push':
                this.push(5);
                break;
        }
    }

    push = (val) => {
        const i = this.state.index;
        const stack = document.getElementsByClassName('stack-element');
        stack[i].style.backgroundColor = '#ffcc66';
        setTimeout(() => stack[i].innerHTML = val, 1000);
        setTimeout(() => stack[i].style.backgroundColor = 'YellowGreen', 1000);
        this.setState({index: this.state.index - 1});
    }

    render() {
        return(
            <div>
                <div>
                    {funcs.map((func) => {
                        return (
                            <div>
                                <span onClick={() => this.handleButton(func)}>{func}</span>
                            </div>
                        )
                    })}
                </div>
                <div className='stack-container'>
                    {this.state.stack.map((num, index) => {
                        return (
                            <div key={index} className='stack-element'>
                                {''}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Stack;