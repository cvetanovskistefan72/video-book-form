import React, { Component } from 'react'

class Asset extends Component {
    state = {
        name: "",
        author: ""
    }

    handleChange = (e) => {
        console.log([e.target.name])
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    
}

export default Asset
