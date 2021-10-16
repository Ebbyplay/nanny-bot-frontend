import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Image from 'react-bootstrap/Image';

class NannyAvatar extends React.Component {
    render() {
        let randomNum = Math.floor(Math.random(0,29)* 10);

        if (randomNum < 10)
            randomNum = '0' + randomNum;

        return (
            <>
                <div>
                    <Image style={this.props.imageStyle} src={'/tile0' + randomNum + '.png'} rounded onClick={this.props.click} />
                    <center><p>{this.props.user.name}</p></center>
                </div>
            </>
        );
    }
}
 
export default NannyAvatar;