import React, {Component} from 'react'

export default class About extends Component {
    render(){
        return (
          <div>

          
            <section className="colorlib-about" data-section="about">
              <div className="colorlib-narrow-content">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                      <div className="col-md-12">
                        <div className="about-desc">
                          <span className="heading-meta">About Me</span>
                          <h2 className="colorlib-heading">Who Am I?</h2>
                          <p>
                            <strong>Hi I'm Kassymkhan Bekbolatov</strong> 
                            <p>I learn iOS and Front-End developer </p>                           
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                        <div className="services color-1">
                          <span className="icon2">
                            <i className="icon-bulb" />
                          </span>
                          <h3>Graphic Design</h3>
                        </div>
                      </div>
                      <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                        <div className="services color-2">
                          <span className="icon2">
                            <i className="icon-globe-outline" />
                          </span>
                          <h3>Web Design</h3>
                        </div>
                      </div>
                      <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                        <div className="services color-3">
                          <span className="icon2">
                            <i className="icon-data" />
                          </span>
                          <h3>Software Devlopment</h3>
                        </div>
                      </div>
                      <div className="col-md-3 animate-box" data-animate-effect="bounceInLeft">
                        <div className="services color-4">
                          <span className="icon2">
                            <i className="icon-phone3" />
                          </span>
                          <h3>Application</h3>
                        </div>
                      </div>
                    </div>
                    {/* <div className="row">
                      <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <div className="hire">
                          <h2>I am happy to know you 
                            <br />
                          </h2>
                          <a href="#" className="btn-hire">Hire me</a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </section>
            </div>
          );
    }
}