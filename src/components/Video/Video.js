import React,{Component,Fragment} from 'react';
import {Col,Container,Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlayCircle } from '@fortawesome/free-solid-svg-icons'



class Video extends Component {
    render(){
        return(
            <Fragment>
            <Container className="text-center">
            <Row>
            <Col lg={12} md={12} sm={12} className="videoCard">
            <div>
                <p className="videoTitle">How I Do</p>
                <p className="videoDes">FFirst i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.</p>
                <p><FontAwesomeIcon className="playIcon" icon={faPlayCircle} /></p>
            </div>

            </Col>
            </Row>
            </Container>


            </Fragment>
        );
    }
}
export default  Video;
