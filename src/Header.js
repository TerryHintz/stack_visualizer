import React, {Component} from 'react';
import './Stack.css';
import Button from '@material-ui/core/Button';

const funcs = [
    'Push',
    'Pop',
    'Peek',
    'isEmpty',
]

class Header extends Component {
    render () {
        return (
            <div className='header'>
                <span className='header-text'>{'Enter Integer'}</span>
                <input
                    id='num-input'
                    type='text'
                    className='header-input'
                />
                {funcs.map((func) => {
                    return (
                        <Button
                            style={{color: 'white'}}
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
        )
    }
}

export default Header;