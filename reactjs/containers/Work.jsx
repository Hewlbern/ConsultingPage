import React from "react"
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

export default class Work extends React.Component {
  render() {
    return (
        <div id = "work">
            <Jumbotron>
                <Grid>
                    <h1>Small Business Experts</h1>
                    <p>From Advertising to Supply Chain Management</p>
                </Grid>

                <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                            <Thumbnail src="https://cdn.shopify.com/s/files/1/1749/1459/files/3_450x450_crop_top.jpg?v=1497112065" alt="242x200">
                                <h3>DoggoBox - The Dog Subscription Company</h3>
                                <p>E-Commerce Business</p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                            <Thumbnail src="http://www.ledmaninstitute.com.au/resources/group%20medical%20education.jpg.opt539x359o0%2C0s539x359.jpg" alt="242x200">
                                <h3>Clients include media businesses, health organisations, education providers</h3>
                                <p>Ledman Institute - bridging the education Gap</p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                            <Thumbnail src="https://careers.herbertsmithfreehills.com/uk/grads/sites/graduate/files/GR_Home_Get_to_know_us_11.jpg" alt="242x200">
                                <h3>Top Tier Engineering and Legal Experience</h3>
                                <p>IBM and Herbert Smith Free Hills - Quality Solutions for More People</p>
                            </Thumbnail>
                        </Col>
                    </Row>
                </Grid>
            </Jumbotron>
        </div>
    )
  }
}
/*
  *
   * <Grid>
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
 */