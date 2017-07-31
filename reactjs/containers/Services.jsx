import React from "react"
import Pageheader from 'react-bootstrap/lib/Pageheader'
import Video from "./Video"
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'


export default class Services extends React.Component {
  render() {
      var textStyle = {
          textAlign: 'center', // <-- the magic
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 0,
          width: 200,
      };
    return (
        <div id = "services">
            <Pageheader justified>
                About M2 Consulting
            </Pageheader>
            <p1 style = {textStyle}>A Digital Agency here to help you advertise more cheaply and more effectively</p1>
            <Video/>
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col  xs={12} md={8}>
                        Experienced Videography and Photography - Digital Marketing Strategy is key to staying alive in 2017.
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col  xs={12} md={8}>
                            Social Media Marketing - Leverage your amazing content to engage more people
                        </Col>
                    </Row>
                    <Row className ="show-grid">
                        <Col  xs={12} md={8}>
                        We provide the best in digital content for your business
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    )
  }
}
