import React from 'react';
import {MatchMediaHOC} from 'react-match-media';
import {Image} from 'react-bootstrap';

const styles1 = {
    position: 'absolute',
    display: 'block',
    height:'auto',
    width: '50%',
    margin: 'auto',
    marginTop: '-40%',
    marginLeft:'25%',
};

/*var styles2 = {
    position: 'absolute',
    display: 'block',
    height:'auto',
    width: '25%',
    margin: 'auto',
    marginTop: '-25%',
}; */

const OverImage = () => {
    return(
    <Image
        style={styles1} responsive
        src="http://www.milkbardigital.com.au/wp-content/uploads/2015/11/Milkbar-Digital-Media.png">
    </Image>
    );
};

export default MatchMediaHOC(OverImage, '(min-width: 775px)');