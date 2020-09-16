import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import scheduleBg from '../../assets/images/schedule-bg.jpg'
import lineDec from '../../assets/images/line-dec.png'
import './schedule.css'
import Table from 'react-bootstrap/Table'

export default class schedule extends Component {
    render() {
        return (
            <section className="section" id="schedule"  style={{backgroundImage : `url('${scheduleBg}')`}}>
                <Container>
                    <Row>
                    <Col lg={{span: 6 ,offset: 3}}>
                    <div className="section-heading dark-bg">
                        <h2>Classes <em>Schedule</em></h2>
                        <img src={lineDec} alt="" />
                        <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
                    </div>
                    </Col>
                    </Row>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="monday">
                    <Row>
                        <Col lg={12}>
  <div className="filters">
      <Nav variant="pills" as="ul" className="schedule-filter">
        <Nav.Item as="li">
          <Nav.Link eventKey="monday">Monday</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="tuesday">Tuesday</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="wednesday">Wednesday</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="thursday">Thursday</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="friday">Friday</Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
      </Col>


    <Col lg={{span: 10 ,offset: 1}}>
      <Tab.Content>
        <Tab.Pane eventKey="monday">
        <div className="schedule-table filtering">
                        <Table>
                            <tbody>
                                <tr>
                                    <td className="day-time">Fitness Class</td>
                                    <td className="monday ts-item show" data-tsmeta="monday">10:00AM - 11:30AM</td>
                                    <td className="tuesday ts-item show" data-tsmeta="tuesday">2:00PM - 3:30PM</td>
                                    <td>William G. Stewart</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Muscle Training</td>
                                    <td className="friday ts-item" data-tsmeta="friday">10:00AM - 11:30AM</td>
                                    <td className="thursday friday ts-item" data-tsmeta="thursday" data-tsmeta="friday">2:00PM - 3:30PM</td>
                                    <td>Paul D. Newman</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Body Building</td>
                                    <td className="tuesday ts-item" data-tsmeta="tuesday">10:00AM - 11:30AM</td>
                                    <td className="monday ts-item show" data-tsmeta="monday">2:00PM - 3:30PM</td>
                                    <td>Boyd C. Harris</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Yoga Training Class</td>
                                    <td className="wednesday ts-item" data-tsmeta="wednesday">10:00AM - 11:30AM</td>
                                    <td className="friday ts-item" data-tsmeta="friday">2:00PM - 3:30PM</td>
                                    <td>Hector T. Daigle</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Advanced Training</td>
                                    <td className="thursday ts-item" data-tsmeta="thursday">10:00AM - 11:30AM</td>
                                    <td className="wednesday ts-item" data-tsmeta="wednesday">2:00PM - 3:30PM</td>
                                    <td>Bret D. Bowers</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
        </Tab.Pane>
        <Tab.Pane eventKey="tuesday">
        <div className="schedule-table filtering">
                        <Table>
                            <tbody>
                                <tr>
                                    <td className="day-time">Fitness Class</td>
                                    <td className="monday ts-item" data-tsmeta="monday">10:00AM - 11:30AM</td>
                                    <td className="tuesday ts-item  show" data-tsmeta="tuesday">2:00PM - 3:30PM</td>
                                    <td>William G. Stewart</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Muscle Training</td>
                                    <td className="friday ts-item" data-tsmeta="friday">10:00AM - 11:30AM</td>
                                    <td className="thursday friday ts-item" data-tsmeta="thursday" data-tsmeta="friday">2:00PM - 3:30PM</td>
                                    <td>Paul D. Newman</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Body Building</td>
                                    <td className="tuesday ts-item  show" data-tsmeta="tuesday">10:00AM - 11:30AM</td>
                                    <td className="monday ts-item" data-tsmeta="monday">2:00PM - 3:30PM</td>
                                    <td>Boyd C. Harris</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Yoga Training Class</td>
                                    <td className="wednesday ts-item" data-tsmeta="wednesday">10:00AM - 11:30AM</td>
                                    <td className="friday ts-item" data-tsmeta="friday">2:00PM - 3:30PM</td>
                                    <td>Hector T. Daigle</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Advanced Training</td>
                                    <td className="thursday ts-item" data-tsmeta="thursday">10:00AM - 11:30AM</td>
                                    <td className="wednesday ts-item" data-tsmeta="wednesday">2:00PM - 3:30PM</td>
                                    <td>Bret D. Bowers</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
        </Tab.Pane>
        <Tab.Pane eventKey="wednesday">
        <div className="schedule-table filtering">
                        <Table>
                            <tbody>
                                <tr>
                                    <td className="day-time">Fitness Class</td>
                                    <td className="monday ts-item" data-tsmeta="monday">10:00AM - 11:30AM</td>
                                    <td className="tuesday ts-item " data-tsmeta="tuesday">2:00PM - 3:30PM</td>
                                    <td>William G. Stewart</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Muscle Training</td>
                                    <td className="friday ts-item  show" data-tsmeta="friday">10:00AM - 11:30AM</td>
                                    <td className="thursday friday ts-item" data-tsmeta="thursday" data-tsmeta="friday">2:00PM - 3:30PM</td>
                                    <td>Paul D. Newman</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Body Building</td>
                                    <td className="tuesday ts-item" data-tsmeta="tuesday">10:00AM - 11:30AM</td>
                                    <td className="monday ts-item " data-tsmeta="monday">2:00PM - 3:30PM</td>
                                    <td>Boyd C. Harris</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Yoga Training Class</td>
                                    <td className="wednesday ts-item show" data-tsmeta="wednesday">10:00AM - 11:30AM</td>
                                    <td className="friday ts-item" data-tsmeta="friday">2:00PM - 3:30PM</td>
                                    <td>Hector T. Daigle</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Advanced Training</td>
                                    <td className="thursday ts-item" data-tsmeta="thursday">10:00AM - 11:30AM</td>
                                    <td className="wednesday ts-item show" data-tsmeta="wednesday">2:00PM - 3:30PM</td>
                                    <td>Bret D. Bowers</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
      </Tab.Pane>
      <Tab.Pane eventKey="thursday">
      <div className="schedule-table filtering">
                        <Table>
                            <tbody>
                                <tr>
                                    <td className="day-time">Fitness Class</td>
                                    <td className="monday ts-item" data-tsmeta="monday">10:00AM - 11:30AM</td>
                                    <td className="tuesday ts-item show" data-tsmeta="tuesday">2:00PM - 3:30PM</td>
                                    <td>William G. Stewart</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Muscle Training</td>
                                    <td className="friday ts-item" data-tsmeta="friday">10:00AM - 11:30AM</td>
                                    <td className="thursday friday ts-item" data-tsmeta="thursday" data-tsmeta="friday">2:00PM - 3:30PM</td>
                                    <td>Paul D. Newman</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Body Building</td>
                                    <td className="tuesday ts-item" data-tsmeta="tuesday">10:00AM - 11:30AM</td>
                                    <td className="monday ts-item show" data-tsmeta="monday">2:00PM - 3:30PM</td>
                                    <td>Boyd C. Harris</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Yoga Training Class</td>
                                    <td className="wednesday ts-item" data-tsmeta="wednesday">10:00AM - 11:30AM</td>
                                    <td className="friday ts-item" data-tsmeta="friday">2:00PM - 3:30PM</td>
                                    <td>Hector T. Daigle</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Advanced Training</td>
                                    <td className="thursday ts-item" data-tsmeta="thursday">10:00AM - 11:30AM</td>
                                    <td className="wednesday ts-item" data-tsmeta="wednesday">2:00PM - 3:30PM</td>
                                    <td>Bret D. Bowers</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
      </Tab.Pane>
      <Tab.Pane eventKey="friday">
      <div className="schedule-table filtering">
                        <Table>
                            <tbody>
                                <tr>
                                    <td className="day-time">Fitness Class</td>
                                    <td className="monday ts-item show" data-tsmeta="monday">10:00AM - 11:30AM</td>
                                    <td className="tuesday ts-item" data-tsmeta="tuesday">2:00PM - 3:30PM</td>
                                    <td>William G. Stewart</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Muscle Training</td>
                                    <td className="friday ts-item" data-tsmeta="friday">10:00AM - 11:30AM</td>
                                    <td className="thursday friday ts-item" data-tsmeta="thursday" data-tsmeta="friday">2:00PM - 3:30PM</td>
                                    <td>Paul D. Newman</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Body Building</td>
                                    <td className="tuesday ts-item" data-tsmeta="tuesday">10:00AM - 11:30AM</td>
                                    <td className="monday ts-item show" data-tsmeta="monday">2:00PM - 3:30PM</td>
                                    <td>Boyd C. Harris</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Yoga Training Class</td>
                                    <td className="wednesday ts-item" data-tsmeta="wednesday">10:00AM - 11:30AM</td>
                                    <td className="friday ts-item" data-tsmeta="friday">2:00PM - 3:30PM</td>
                                    <td>Hector T. Daigle</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Advanced Training</td>
                                    <td className="thursday ts-item" data-tsmeta="thursday">10:00AM - 11:30AM</td>
                                    <td className="wednesday ts-item" data-tsmeta="wednesday">2:00PM - 3:30PM</td>
                                    <td>Bret D. Bowers</td>
                                </tr>
                            </tbody>
                        </Table>
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
