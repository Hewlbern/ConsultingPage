/**
 * Created by Hewlbern on 21-Jan-17.
 */
import React from 'react';
import {Image} from 'react-bootstrap';



export default React.createClass ( {
    render() {
        return (
            <div style={{width: 'auto', height: 1300}}>
                <Image responsive src = "https://static.pexels.com/photos/296886/pexels-photo-296886.jpeg"/>
            </div>
        );
    }
});

// <Image src={require('./images/Logo.png')} />