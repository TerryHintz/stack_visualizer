import React, {Component} from 'react';
import './Stack.css';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';

const funcs = [
    'Pop',
    'Peek',
    'Size',
    'isEmpty',
]

class Header extends Component {
    state = {
        functions: false,
    }

    toggleFunctions = () => {
        this.setState({functions: !this.state.functions})
    }

    mobileTap = (func) => {
        this.toggleFunctions();
        this.props.handleButton(func);
    }

    render () {
        return (
            <div className='stack-header'>
                <div className='stack-header-left'>
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
                <div className='stack-header-right'>
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
                <div className='stack-mobile-right'>
                    <Button
                        className='stack-header-button'
                        color='primary'
                        variant="contained"
                        onClick={() => this.toggleFunctions()}
                    >
                        {'Functions'}
                    </Button>
                </div>
                <Drawer anchor={'bottom'} open={this.state.functions} onClose={() => this.toggleFunctions()}>
                    {funcs.map((func) => {
                        return (
                            <div
                                key={func + ' mobile'}
                                onClick={() => this.mobileTap(func)}
                                className='stack-mobile-button'
                            >
                                {func}
                            </div>
                        )
                    })}
                </Drawer>
            </div>
        )
    }
}

export default Header;