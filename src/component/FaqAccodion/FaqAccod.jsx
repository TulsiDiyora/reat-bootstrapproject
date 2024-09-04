import React from 'react'
import { Container, Row, Accordion } from 'react-bootstrap'
import './FaqAccod.css'

function FaqAccod() {
  return (
    <>
      <section className='pb-100'>
        <Container>
          <Row>
          <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="0" className="transparent-item">
                            <Accordion.Header className='a-text'>
                              What age can I begin training my dog?
                            </Accordion.Header>
                            <Accordion.Body>
                              Volutpat maecenas volutpat blandit aliquam etiam. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.   Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Cras ornare arcu dui vivamus arcu felis bibendum.
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
          </Row>
        </Container>
      </section>
    </>
  )
}

export default FaqAccod
