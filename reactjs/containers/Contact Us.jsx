import React from "react"
import Pageheader from 'react-bootstrap/lib/Pageheader'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Thumbnail from 'react-bootstrap/lib/Thumbnail'

export default class Contact extends React.Component {
  render() {
    return (
        <div id = "contact">
            <Pageheader justified>
                Meet the Team
            </Pageheader>
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        <Thumbnail src="http://www.milkbardigital.com.au/wp-content/uploads/2017/06/Katina_Treated-300x300.png" alt="300x300">
                            <h3>Michael Holborn</h3>
                            <p>CEO</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="http://www.milkbardigital.com.au/wp-content/uploads/2017/06/Edwina_Treated-300x300.png" alt="300x300">
                            <h3>Thomas Kreiner</h3>
                            <p>Director of Marketing</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="http://www.milkbardigital.com.au/wp-content/uploads/2017/06/Nic_Treated-300x300.png" alt="300x300">
                            <h3>James Jack</h3>
                            <p>Director of Cinematography and Videography</p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
  }
}
