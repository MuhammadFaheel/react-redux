import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div class="card" style={{width : "18rem", marginTop : 20}}>,
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">{this.props.Name}</h5>
                <p class="card-text">{this.props.Description}</p>
                <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}

