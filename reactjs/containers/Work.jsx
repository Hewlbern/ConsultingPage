import React from "react"
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';

export default class Work extends React.Component {
  render() {
    return (
        <div id = "work">
            <Jumbotron>
                <Grid>
                    <h1>Small Business Experts</h1>
                    <p>From Advertising to Supply Chain Management</p>
                </Grid>
            </Jumbotron>

            <Grid>
                <Row>
                    <Col md={3}>
                        <h2>Wagglebox - The Dog Subscription Company</h2>
                        <p>E-Commerce Business</p>
                    </Col>
                    <Col md={3}>
                        <h2>Clients include media businesses, health organisations, education providers</h2>
                        <p>Links below</p>
                    </Col>
                    <Col md={3}>
                        <h2>Engineering and Legal Experience</h2>
                        <p>From top tier law firms to global IT giants</p>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
  }
}
