import React, {Component} from 'react';
import './Stack.css'

class Stack extends Component {
    state = {
        stack: [],
    }

    componentDidMount() {
        let arr = [];
        for(let i=0; i<10; i++){
            arr.push(null);
        }
        this.setState({stack: arr});
    }

    push = (val) => {
        
    }

    render() {
        return(
            <div>
                <div>
                    <span>push 5</span>
                </div>
                <div className='stack-container'>
                    {this.state.stack.map((num) => {
                        return (
                            <div className='stack-element'>
                                {num ? num : ''}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Stack;