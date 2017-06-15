import React from "react"
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';

export default class Contact extends React.Component {
  render() {
    return (
        <div id = "contact">
            <Jumbotron>
                <Grid>
                    <h3>Email Us At</h3>
                    <p>M2Consulting@gmail.com</p>
                </Grid>
            </Jumbotron>
        </div>
    )
  }
}
