import React, {Component} from 'react'
// import Card from 'react-bootstrap/Card'
import {Card} from 'react-bootstrap'

export default class Education extends Component {
    render() {
        return (

            <section className="colorlib-education" data-section="education">
              <div className="colorlib-narrow-content">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">Education</span>
                    <h2 className="colorlib-heading animate-box">Education</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                    <div className="fancy-collapse-panel">
                      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                       
                        {/* <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingOne">
                            <h4 className="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Master Degree Graphic Design
                              </a>
                            </h4>
                          </div>
                          <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div className="panel-body"> */}
                              {/* <div className="row"> */}
                                {/* <div className="panel-body"> */}
                                  {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p> */}
                                {/* </div> */}
                                {/* <div className="col-md-6">
                                  <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div> */}
                              {/* </div> */}
                            {/* </div>
                          </div>
                        </div> */}

                        {/* <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingFour">
                            <h4 className="panel-title">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Bachelor's of Science in Computer Science
                              </a>
                            </h4>
                          </div>
                          <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-expanded="true" aria-labelledby="headingFour">
                            <div className="panel-body">
                              <p>Simon Fraser University 
                                <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                              </p>
                            </div>
                          </div>
                        </div> */}

                        
                        <Card className="bg-light text-black">
                          <Card.Header as="h4">Bachelors of Science, Computing Science</Card.Header>
                              <Card.Body>
                                <Card.Title as="h3">Simon Fraser University</Card.Title>
                                <Card.Text>2017 - 2021</Card.Text>
                                <Card.Text as="p">Dean's Honor Roll</Card.Text>
                              </Card.Body>
                        </Card>
                        
               
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
    }
}