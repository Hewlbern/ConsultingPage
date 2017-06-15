import React from "react"
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';

export default class Services extends React.Component {
  render() {
    return (
        <div id = "services">
            <Jumbotron>
                <Grid>
                    <h1>M2 Consulting</h1>
                    <p>Bringing Small Businesses to the Agile century</p>
                </Grid>
            </Jumbotron>

            <Grid>
                <Row>
                    <Col md={3}>
                        <h2>Ride the Tiger</h2>
                        <p>Control your online presence</p>
                    </Col>
                    <Col md={3}>
                        <h2>Utilize Online Channels</h2>
                        <p>Guarantee more revenue</p>
                    </Col>
                    <Col md={3}>
                        <h2>Improve your process</h2>
                        <p>Embrace the lean manifesto</p>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
  }
}
