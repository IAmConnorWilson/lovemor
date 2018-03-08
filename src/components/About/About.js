import React, {Component} from 'react';
import BasicInfo from '../BasicInfo/BasicInfo'
import OtherInfo from '../OtherInfo/OtherInfo'

class About extends Component {
    componentDidMount() {
        document.body.scrollTop = 0;
        document.querySelector('.menu').classList.remove('open');
    }

    render() {
        return (
            <div>
                <BasicInfo/>
                <OtherInfo/>
            </div>
        );
    }
}

export default About;