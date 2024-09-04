import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import Reviewimg from '../../assets/reviewimg.avif';
import Reviewimg2 from '../../assets/reviewimg2.avif';
import Reviewimg3 from '../../assets/reviewimg3.avif';
import './Review.css';

function Review() {
  return (
    <>
      <section className="review-bg">
        <Container>
          <div className="title text-center">
            <span>Customer Review</span>
            <h2 className="fw-bold">Clients are Saying</h2>
          </div>
          <Row>
            <div className="col-12">
              <Carousel controls={false} > 
                <Carousel.Item>
                  <div className="review text-center position-relative">
                    <div className="review-icon">
                      <i className="bi bi-quote"></i>
                    </div>
                    <div className="review-text mt-3">
                      <p>
                        Ac orci phasellus egestas tellus rutrum tellus. Dui vivamus arcu felis bibendum. 
                        Cursus risus at<br />ultrices mi tempus imperdiet nulla malesuada. Lobortis 
                        feugiat vivamus at augue eget arcu. Id<br />donec ultrices tincidunt arcu non.&nbsp;
                      </p>
                    </div>
                    <div className="s-icon">
                      <ul className="d-flex align-items-center justify-content-center">
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star"></i></li>
                      </ul>
                    </div>
                    <div className="review-img mt-3 d-flex align-items-center justify-content-center">
                      <img src={Reviewimg} alt="Review" />
                      <div className="r-content ms-3">
                        <h5>Jessica Walker</h5>
                        <p>Developer</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="review text-center position-relative">
                    <div className="review-icon">
                      <i className="bi bi-quote"></i>
                    </div>
                    <div className="review-text mt-3">
                      <p>
                      Tincidunt dui ut ornare lectus sit amet est. Faucibus ornare suspendisse sed nisi lacus sed viverra.<br /> Eget egestas purus viverra accumsan in nisl nisi. Facilisi nullam vehicula ipsum a arcu cursus vitae <br/>congue mauris.&nbsp;
                      </p>
                    </div>
                    <div className="s-icon">
                      <ul className="d-flex align-items-center justify-content-center">
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star"></i></li>
                      </ul>
                    </div>
                    <div className="review-img mt-3 d-flex align-items-center justify-content-center">
                      <img src={Reviewimg2} alt="Review" />
                      <div className="r-content ms-3">
                        <h5>James Cameron</h5>
                        <p>Musician</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="review text-center position-relative">
                    <div className="review-icon">
                      <i className="bi bi-quote"></i>
                    </div>
                    <div className="review-text mt-3">
                      <p>
                      Sed augue lacus viverra vitae. Semper quis lectus nulla at volutpat diam ut. Purus non enim<br /> praesent elementum facilisis leo vel fringilla est. Id semper risus in hendrerit gravida rutrum <br />quisque non tellus. Justo laoreet sit amet cursus.
                      </p>
                    </div>
                    <div className="s-icon">
                      <ul className="d-flex align-items-center justify-content-center">
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star"></i></li>
                      </ul>
                    </div>
                    <div className="review-img mt-3 d-flex align-items-center justify-content-center">
                      <img src={Reviewimg3} alt="Review" />
                      <div className="r-content ms-3">
                        <h5>Elizabeth Johnson</h5>
                        <p>Auditor</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Review;
