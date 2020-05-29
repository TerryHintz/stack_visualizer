import React, {Component} from 'react';
import './Stack.css';
import Button from '@material-ui/core/Button';

const funcs = [
    'Pop',
    'Peek',
    'isEmpty',
]

class Header extends Component {
    render () {
        return (
            <div className='stack-header'>
                <div className='stack-header-section'>
                    <span className='stack-header-text'>{'Enter Value'}</span>
                    <input
                        id='num-input'
                        type='text'
                        className='stack-header-input'
                    />
                    <Button
                        className='stack-header-button'
                        color='primary'
                        variant="contained"
                        key={'Push'}
                        onClick={() => this.props.handleButton('Push')}
                    >
                        {'Push'}
                    </Button>
                </div>
                <div className='stack-header-section'>
                    {funcs.map((func) => {
                        return (
                            <Button
                                className='stack-header-button'
                                color='primary'
                                variant="contained"
                                key={func}
                                onClick={() => this.props.handleButton(func)}
                            >
                                {func}
                            </Button>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Header;