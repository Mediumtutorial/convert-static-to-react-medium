import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import './classes.css'
import tabsFirstIcon from '../../assets/images/tabs-first-icon.png'
import linedec from '../../assets/images/line-dec.png'
import trainingImage1 from '../../assets/images/training-image-01.jpg'
import trainingImage2 from '../../assets/images/training-image-02.jpg'
import trainingImage3 from '../../assets/images/training-image-03.jpg'
import trainingImage4 from '../../assets/images/training-image-04.jpg'

export default class classes extends Component {
    render() {
        return (
            <section className="section" id="our-classes">
            <Container>
                <Row>
                <Col lg={{span: 6 ,offset: 3}}>
                    <div className="section-heading">
                        <h2>Our <em>Classes</em></h2>
                        <img src={linedec} alt="" />
                        <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
                    </div>
               </Col>
                </Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row id="tabs">
                    <Col lg={4}>
                    <Nav variant="pills" className="flex-column" as="ul">
        <Nav.Item as="li">
          <Nav.Link eventKey="first"><img src={tabsFirstIcon} alt="" />First Training Class</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="second"><img src={tabsFirstIcon} alt="" />Second Training Class</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="third"><img src={tabsFirstIcon} alt="" />Third Training Class</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="fourth"><img src={tabsFirstIcon} alt="" />Fourth Training Class</Nav.Link>
        </Nav.Item>
        <div className="main-rounded-button"><a href="#">View All Schedules</a></div>
      </Nav>
                    </Col>
                    <Col lg={8}>
                    <Tab.Content as="section" className="tabs-content">
        <Tab.Pane eventKey="first" as="article">
            <img src={trainingImage1} alt="First Class" />
                    <h4>First Training Class</h4>
                    <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</p>
                    <div className="main-button">
                        <a href="#">View Schedule</a>
                    </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
            <img src={trainingImage2} alt="Second Training" />
                    <h4>Second Training Class</h4>
                    <p>Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <div className="main-button">
                        <a href="#">View Schedule</a>
                    </div>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
            <img src={trainingImage3} alt="Third Class" />
                    <h4>Third Training Class</h4>
                    <p>Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.</p>
                    <div className="main-button">
                        <a href="#">View Schedule</a>
                    </div>

        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        <img src={trainingImage4} alt="Fourth Training" />
                    <h4>Fourth Training Class</h4>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultrices elementum odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum commodo et.</p>
                    <div className="main-button">
                        <a href="#">View Schedule</a>
                    </div>

        </Tab.Pane>
      </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
            </Container>
        </section>
        )
    }
}
