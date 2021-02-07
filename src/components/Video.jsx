import React, { Component } from 'react'
import Asset from './Asset'

class Video extends Asset {
    constructor(props) {
        super(props)
        this.state = {
            ...this.state,
            url: ""
        }
    }
    render() {
        return (
            <div>
                <h5>VIDEO</h5>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="name"
                        value={this.state.name}
                        type="text"
                        onChange={this.handleChange}
                        placeholder="name" />
                    <br />
                    <input
                        name="author"
                        value={this.state.author}
                        type="text"
                        onChange={this.handleChange}
                        placeholder="author" />
                    <br />
                    <input
                        name="url"
                        value={this.state.url}
                        type="text"
                        onChange={this.handleChange}
                        placeholder="url" />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Video
