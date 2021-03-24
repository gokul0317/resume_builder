import React, { Component } from 'react'
import navBarWrapper from './NavBarDecorator'

@navBarWrapper()
class MainTest extends Component {
    render() {
        return (
            <div>
              Decorator Example
            </div>
        )
    }
}

export default MainTest