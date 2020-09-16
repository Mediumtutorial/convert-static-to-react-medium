import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import linedec from '../../assets/images/line-dec.png'
import firstTrainer from '../../assets/images/first-trainer.jpg'
import secondTrainer from '../../assets/images/second-trainer.jpg'
import thirdTrainer from '../../assets/images/third-trainer.jpg'
import './trainers.css'
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance} from 'react-icons/fa'

export default class trainers extends Component {
    render() {
        return (
            <section className="section" id="trainers">
            <Container>
                <Row>
                <Col lg={{span: 6 ,offset: 3}}>
                        <div className="section-heading">
                        <h2>Expert <em>Trainers</em></h2>
                        <img src={linedec} alt="" />
                        <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
                    </div>
                    </Col> 
                </Row>
                <Row>
                    <Col lg={4}>
                    <div className="trainer-item">
                        <div className="image-thumb">
                            <img src={firstTrainer} alt="" />
                        </div>
                        <div className="down-content">
                            <span>Strength Trainer</span>
                            <h4>Bret D. Bowers</h4>
                            <p>Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
                            <ul className="social-icons">
                                <li><a href="#"><FaFacebookF /></a></li>
                                <li><a href="#"><FaTwitter/></a></li>
                                <li><a href="#"><FaLinkedinIn /></a></li>
                                <li><a href="#"><FaBehance/></a></li>
                            </ul>
                        </div>
                    </div>
                    </Col>
                    <Col lg={4}>
                    <div className="trainer-item">
                        <div className="image-thumb">
                            <img src={secondTrainer} alt="" />
                        </div>
                        <div className="down-content">
                            <span>Muscle Trainer</span>
                            <h4>Hector T. Daigl</h4>
                            <p>Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
                            <ul className="social-icons">
                            <li><a href="#"><FaFacebookF /></a></li>
                                <li><a href="#"><FaTwitter/></a></li>
                                <li><a href="#"><FaLinkedinIn /></a></li>
                                <li><a href="#"><FaBehance/></a></li>
                            </ul>
                        </div>
                    </div>
                    </Col>
                    <Col lg={4}>
                    <div className="trainer-item">
                        <div className="image-thumb">
                            <img src={thirdTrainer} alt="" />
                        </div>
                        <div className="down-content">
                            <span>Power Trainer</span>
                            <h4>Paul D. Newman</h4>
                            <p>Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
                            <ul className="social-icons">
                            <li><a href="#"><FaFacebookF /></a></li>
                                <li><a href="#"><FaTwitter/></a></li>
                                <li><a href="#"><FaLinkedinIn /></a></li>
                                <li><a href="#"><FaBehance/></a></li>
                            </ul>
                        </div>
                    </div>
                    </Col>
                </Row>
         </Container>
            </section>
        )
    }
}
