/**
 * Created by Hewlbern on 17-Jan-17.
 */
import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar'
import {Nav} from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';


export default React.createClass ({
    render() {
        return (
            <div>
                <Navbar inverse fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            M2 Consulting
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullright bsStyle = "pills" active>
                        <li><Scrollchor to="#services">Services</Scrollchor></li>
                        <li><Scrollchor to="#work">Latest Work</Scrollchor></li>
                        <li><Scrollchor to="#contact">Contact Us</Scrollchor></li>
                    </Nav>
                </Navbar>
            </div>
        );
    }
});
/* I used this npm package for scrolling, "https://www.npmjs.com/package/react-scrollchor" */