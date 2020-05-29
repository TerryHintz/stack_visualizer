import React, {Component} from 'react';
import './Stack.css'

import Header from './Header'

const STACK_SIZE = 10;
const LOG_SIZE = 13;

class Stack extends Component {
    state = {
        stack: [],
        index: 9,
        log: [],
    }

    componentDidMount() {
        let arr = [];
        for(let i=0; i<STACK_SIZE; i++){
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
            log.push('Push: Value is Blank');
            this.setState({log});
            return;
        }

        stackCopy[i] = val;
        
        log.push('Push: Pushed ' + val + ' to Stack');

        const stack = document.getElementsByClassName('stack-element');
        stack[i].style.backgroundColor = '#ffcc66';
        setTimeout(() => stack[i].innerHTML = val, 1000);
        setTimeout(() => stack[i].style.backgroundColor = 'YellowGreen', 1000);
        this.setState({index: i - 1, stack: stackCopy, log});
    }

    peek = () => {
        const stackCopy = this.state.stack;
        let log = this.state.log;
        const i = this.state.index;

        this.checkLog(log);

        log.push(stackCopy[i+1] ? 'Peek: ' + stackCopy[i+1] : 'Peek: Stack is Empty');
        this.setState({log});
    }

    pop = () => {
        let stackCopy = this.state.stack;
        let log = this.state.log;
        const i = this.state.index + 1;

        this.checkLog(log);

        if(i === STACK_SIZE){
            log.push('Pop: Stack is Empty');
            this.setState({log});
            return;
        }

        const stack = document.getElementsByClassName('stack-element');
        stack[i].style.backgroundColor = 'FireBrick';
        setTimeout(() => stack[i].innerHTML = '', 1000);
        setTimeout(() => stack[i].style.backgroundColor = 'cornflowerblue', 1000);

        log.push('Pop: Deleted ' + stackCopy[i] + ' from Stack');

        stackCopy[i] = null;

        this.setState({log, stack: stackCopy, index: i});
    }

    isEmpty = () => {
        const i = this.state.index + 1;
        let log = this.state.log;

        this.checkLog(log);

        log.push( i===STACK_SIZE ? 'isEmpty: TRUE' : 'isEmpty: FALSE');
        this.setState({log});
    }

    checkLog = (log) => {
        if(log.length === LOG_SIZE){
            log.shift();
        }
    }

    render() {
        return(
            <div>
                <Header
                    handleButton = {this.handleButton}
                />
                <div className='stack-main-root'>
                    <div>
                        <div className='stack-title'>Stack</div>
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
                    <div>
                        <div className='stack-title'>Log</div>
                        <div className='stack-log-root'>
                            {this.state.log.map((message, index) => {
                                return (
                                    <div style={{backgroundColor: index === this.state.log.length-1 ? 'lightgreen' : 'LightSeaGreen' }} className='stack-log-msg'>
                                        {message}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stack;