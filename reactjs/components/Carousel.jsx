/**
 * Created by Hewlbern on 21-Jan-17.
 */
import React from 'react';
import {Image} from 'react-bootstrap';
import OverImage from './Overlay';

export default React.createClass ( {
    render() {

        var background = {
            backgroundSize : 'cover',
            width: '100%',
        };
        var heroStyle = {
            width:'auto',
            overflow : 'hidden',
        };
        return (
            <div style={heroStyle}>
                <Image
                    style={background} responsive
                    src="http://www.milkbardigital.com.au/wp-content/uploads/2015/11/Milkbar-Home-Background.jpg">
                </Image>
                <OverImage/>
            </div>
        );
    }
});


// <Image src={require('./images/Logo.png')} />
//<Image src="http://www.milkbardigital.com.au/wp-content/uploads/2015/11/Milkbar-Digital-Media.png" responsive/>
    //https://static.pexels.com/photos/296886/pexels-photo-296886.jpeg