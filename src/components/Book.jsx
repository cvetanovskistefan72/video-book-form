import React, { Component } from 'react'
import Asset from './Asset'

class Book extends Asset {

    render() {
        return (
            <div>
                <h5>BOOK</h5>
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
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Book
