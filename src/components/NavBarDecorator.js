import React, { useState } from 'react'
import {
    Navbar,
    Button,
    NavbarToggler,
    NavbarBrand,
    Collapse,
    Nav,
    NavLink,
    NavItem,
} from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import { navigateTo } from '../helpers'

export default function NavBarDeCorator() {
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (Child) => {
        return (
            <><Navbar color="light" light expand="md">
                <NavbarBrand onClick={() => navigateTo(history, '/')}>Resume Builder</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>
                    </Nav>
                    <Button color="outline-success" onClick={() => navigateTo(history, "/add")}>Add Resume</Button>
                </Collapse>
            </Navbar>
                <Child />
            </>
        )
    }
}
