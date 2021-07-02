import React, {Component} from 'react';
import {depositAction, putQuoteAction, withdrawAction} from "../actions/accountActions";
import {connect} from "react-redux";

class Operation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: 1
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='mx-auto'>
                        <button
                            className='btn btn-primary btn-lg'
                            onClick={() => this.props.withdraw(this.state.sum)}
                        >Withdraw
                        </button>
                        <input
                            className='form-control-lg'
                            onChange={e => this.setState({sum: +e.target.value})}
                            type='number'
                            min='0'
                            value={this.state.sum}
                        />
                        <button
                            className='btn btn-primary btn-lg'
                            onClick={() => this.props.deposit(this.state.sum)}
                        >Deposit</button>
                    </div>
                    <div className='w-100'>
                        <div className='mx-auto'>
                            <button
                                className='btn btn-info btn-lg'
                            onClick={() => {
                                fetch('http://api.kanye.rest/')
                                    .then(response => response.json())
                                    .then(data => this.props.putQuote(data.quote))
                            }}>
                                Get quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {
        withdraw: sum => dispatch(withdrawAction(sum)),
        deposit: sum => dispatch(depositAction(sum)),
        putQuote: quote => dispatch(putQuoteAction(quote))
    }
)

export default connect(null, mapDispatchToProps)(Operation);