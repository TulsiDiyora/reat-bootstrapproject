import React from 'react'
import { Container, Row, Accordion } from 'react-bootstrap'
import './Haccodion.css'

function Hacodion() {
  return (
    <>  
        <section className=' info-bg '>
            <Container>
                <Row style={{marginBottom:'100px'}}>
                    <div className="col-6"></div>
                    <div className="col-6">
                    <div className="title text-center">
                        <span className='mb-3'>
                           We love Pets
                        </span>
                        <h2 className='fw-bold text-white'>
                          Taking Care of Pets
                        </h2>
                    </div>
                           <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="0" className="transparent-item">
                            <Accordion.Header className='a-text'>
                                 What is to be avoided for pups?
                            </Accordion.Header>
                            <Accordion.Body>
                            Etori haum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est elige ndi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptasi ass umenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1" className="transparent-item">
                            <Accordion.Header>
                                   How often should I walk my dog?
                            </Accordion.Header>
                            <Accordion.Body>
                            Turpis cursus in hac habitasse platea dictumst quisque. Tellus orci ac auctor augue mauris augue neque. Vel quam elementum pulvinar etiam non. Dui id ornare arcu odio ut sem nulla pharetra diam. Ultrices vitae auctor eu augue ut lectus. Risus viverra adipiscing at in.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2" className="transparent-item">
                            <Accordion.Header>
                               How often should I wash my pets?
                            </Accordion.Header>
                            <Accordion.Body>
                            Libero id faucibus nisl tincidunt eget nullam. Sit amet luctus venenatis lectus magna fringilla urna. Tellus id interdum velit laoreet id donec ultrices tincidunt. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Leo duis ut diam quam nulla. Est sit amet facilisis magna etiam tempor orci eu.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3" className="transparent-item">
                            <Accordion.Header>
                                Can I feed my dog cat food?
                            </Accordion.Header>
                            <Accordion.Body>
                            Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Vestibulum sed arcu non odio euismod lacinia at. Justo laoreet sit amet cursus sit. Ornare lectus sit amet est placerat in egestas erat imperdiet. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4" className="transparent-item">
                            <Accordion.Header>
                                  What shots do pets need?
                            </Accordion.Header>
                            <Accordion.Body>
                            Viverra ipsum nunc aliquet bibendum. Nisi lacus sed viverra tellus. Lacus suspendisse faucibus interdum posuere. Mauris augue neque gravida in fermentum et sollicitudin. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>

                    </div>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Hacodion
