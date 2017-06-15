/**
 * Created by Hewlbern on 17-Jan-17.
 */
import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar'
import {Nav, NavItem} from 'react-bootstrap';
export default React.createClass ({
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            M2 Consulting
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullright bsStyle = "pills" active>
                        <NavItem href="#services">Services</NavItem>
                        <NavItem href="#work">Latest Work</NavItem>
                        <NavItem href="#contact">Contact Us</NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
});
