import React, {Component} from 'react';
import './Stack.css'

import Header from './Header'

import Button from '@material-ui/core/Button';

class Stack extends Component {
    state = {
        stack: [],
        index: 9,
        log: [],
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
                this.push();
                break;
            case 'Peek':
                this.peek();
                break;
            case 'Pop':
                this.pop();
                break;
            case 'isEmpty':
                this.isEmpty();
                break;
        }
    }

    push = () => {
        const val = document.getElementById('num-input').value;
        let stackCopy = this.state.stack;
        let log = this.state.log;
        const i = this.state.index;

        this.checkLog(log);

        if(!val){
            log.push('Please Enter Integer Value');
            this.setState({log});
            return;
        }

        stackCopy[i] = val;
        
        log.push('Pushed ' + val + ' to Stack');

        const stack = document.getElementsByClassName('stack-element');
        stack[i].style.backgroundColor = '#ffcc66';
        setTimeout(() => stack[i].innerHTML = val, 1000);
        setTimeout(() => stack[i].style.backgroundColor = 'YellowGreen', 1000);
        this.setState({index: this.state.index - 1, stack: stackCopy, log});
    }

    peek = () => {
        const stackCopy = this.state.stack;
        let log = this.state.log;
        const i = this.state.index;

        this.checkLog(log);

        log.push(stackCopy[i+1] ? 'Peek Retruned ' + stackCopy[i+1] : 'Stack is Empty');
        this.setState({log});
    }

    pop = () => {
        let stackCopy = this.state.stack;
        let log = this.state.log;
        const i = this.state.index + 1;

        this.checkLog(log);

        if(i === 10){
            log.push('Stack is Empty');
            this.setState({log});
            return;
        }

        const stack = document.getElementsByClassName('stack-element');
        stack[i].style.backgroundColor = 'FireBrick';
        setTimeout(() => stack[i].innerHTML = '', 1000);
        setTimeout(() => stack[i].style.backgroundColor = 'cornflowerblue', 1000);

        log.push('Deleted ' + stackCopy[i] + ' from Stack');

        stackCopy[i] = null;

        this.setState({log, stack: stackCopy, index: i});
    }

    isEmpty = () => {
        const i = this.state.index + 1;
        let log = this.state.log;

        this.checkLog(log);

        log.push( i===10 ? 'isEmpty returned TRUE' : 'isEmpty returned FALSE');
        this.setState({log});
    }

    checkLog = (log) => {
        if(log.length === 13){
            log.shift();
        }
    }

    render() {
        return(
            <div>
                <Header
                    handleButton = {this.handleButton}
                />
                <div className='main-root'>
                    <div className='stack-container'>
                        {this.state.stack.map((num, index) => {
                            return (
                                <div key={index} className='stack-element'>
                                    {''}
                                </div>
                            )
                        })}
                    </div>
                    <div className='log-root'>
                        {this.state.log.map((message, index) => {
                            return (
                                <div style={{backgroundColor: index === this.state.log.length-1 ? 'lightgreen' : 'LightSeaGreen' }} className='log-msg'>
                                    {message}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Stack;