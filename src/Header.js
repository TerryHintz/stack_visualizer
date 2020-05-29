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
            <div className='header'>
                <div className='header-section'>
                    <span className='header-text'>{'Enter Value'}</span>
                    <input
                        id='num-input'
                        type='text'
                        className='header-input'
                    />
                    <Button
                        className='header-button'
                        color='primary'
                        variant="contained"
                        key={'Push'}
                        onClick={() => this.props.handleButton('Push')}
                    >
                        {'Push'}
                    </Button>
                </div>
                <div className='header-section'>
                    {funcs.map((func) => {
                        return (
                            <Button
                                className='header-button'
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