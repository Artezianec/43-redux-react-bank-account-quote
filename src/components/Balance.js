import React from 'react';
import {connect} from "react-redux";

class Balance extends React.Component {

    render() {
        return (
            <div>
                <h1 className='text-center text-uppercase'>Iron Bank of Braavos</h1>
                <h4 className='text-center text-uppercase'><p>{this.props.quote}</p></h4>
                <h3 className='text-center text-uppercase'>Balance = {this.props.amount}</h3>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        amount: state.balance,
        quote: state.quote
    }
)

export default connect(mapStateToProps)(Balance);