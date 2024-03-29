import React, { Component } from 'react';
import Header from '../component/Header';
import {connect} from 'react-redux';
import {getValue} from '../actions/userLogin';

class Card extends Component {
    
    componentDidMount(){
        this.props.getValue()

        if(!localStorage.Name && !localStorage.Pass){
            this.props.history.push('/login')
        }
    }
    
    render() {
        return (
            <div>
                <Header />
                {console.log(this.props)};
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth:state.auth
})

export default connect(mapStateToProps,{getValue})(Cart)
