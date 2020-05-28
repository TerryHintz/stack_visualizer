import React, {Component} from 'react';
import './Stack.css'

import Snackbar from '@material-ui/core/Snackbar';

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
        peek: false,
    }

    componentDidMount() {
        let arr = [];
        for(let i=0; i<10; i++){
            arr.push(null);
        }
        this.setState({stack: arr});
    }

    closeSnackBar = () => {
        this.setState({peek: false});
    }

    handleButton = (func) => {
        switch(func){
            case 'Push':
                this.push(5);
                break;
            case 'Peek':
                this.setState({peek: true});
                break;
        }
    }

    push = (val) => {
        let copy = this.state.stack;
        const i = this.state.index;

        copy[i] = val;

        const stack = document.getElementsByClassName('stack-element');
        stack[i].style.backgroundColor = '#ffcc66';
        setTimeout(() => stack[i].innerHTML = val, 1000);
        setTimeout(() => stack[i].style.backgroundColor = 'YellowGreen', 1000);
        this.setState({index: this.state.index - 1, stack: copy});
    }

    peek = () => {
        const i = this.state.index;

    }

    render() {
        return(
            <div>
                <div>
                    {funcs.map((func) => {
                        return (
                            <div key={func}>
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
                <Snackbar
                    open={this.state.peek}
                    message={this.state.index === 9 ? 'Stack is Empty' : 'Peek Returned ' + this.state.stack[this.state.index+1]}
                    autoHideDuration={5000}
                    onClose={() => this.closeSnackBar()}
                />
            </div>
        )
    }
}

export default Stack;