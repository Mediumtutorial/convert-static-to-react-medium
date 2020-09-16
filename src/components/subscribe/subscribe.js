import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './subscribe.css'
import ctaBg from '../../assets/images/cta-bg.jpg'

export default class call extends Component {
    render() {
        return (
            <section className="section" id="call-to-action" style={{backgroundImage : `url('${ctaBg}')`}}>
        <Container>
         <Row>
         <Col lg={{span: 10 ,offset: 1}}>
                    <div className="cta-content">
                        <h2>Don’t <em>think</em>, begin <em>today</em>!</h2>
                        <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.</p>
                        <div className="main-button scroll-to-section">
                            <a href="#our-classes">Become a member</a>
                        </div>
                    </div>
                </Col>
                </Row>
            </Container>
    </section>
        )
    }
}
