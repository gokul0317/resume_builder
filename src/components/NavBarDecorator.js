import React, { Component } from 'react'
import NavBarComponent from './NavBar'

export default function navBarWrapper() {
    return function (Child) {
        return class extends Component {
            constructor(props) {
                super(props);
            }
            render() {
                return (
                    <div>
                        <NavBarComponent />
                        <Child />
                    </div>
                )
            }
        }
    }
}