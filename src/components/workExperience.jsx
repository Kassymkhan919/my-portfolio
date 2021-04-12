import React, {Component} from 'react'
// import './css/animate.css'
// import './css/allstyle.css'

class WorkExperience extends Component {
    render(){
        return (

            <section className="colorlib-experience" data-section="experience">
              <div className="colorlib-narrow-content">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">Experience</span>
                    <h2 className="colorlib-heading animate-box">Work Experience</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="timeline-centered">
                      <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                        <div className="timeline-entry-inner">
                          <div className="timeline-icon color-1">
                            <i className="icon-pen2" />
                          </div>
                          <div className="timeline-label">
                            <h2>
                              <a href="#">Full Stack Developer - Amcama Software Innovations</a>
                              <span className="subtitle-date">February 2018- August2018</span>
                            </h2>
                            <p>
                              {/* I worked at Amcama as a full-stack developer intern. During my co-op, I built a  */}
                              Interning as a full-stack developer in the Amcama, 
                              I built a web app to help inspect buildings for fire risk. 
                              I quickly learned Angular and .Net frameworks and started building the app. 
                              I used Google Maps API to help inspectors navigate the buildings in the app and automated unit tests to reduce the number of bugs by 20%.
                            </p>
                          </div>
                        </div>
                      </article>
                      <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                        <div className="timeline-entry-inner">
                          <div className="timeline-icon color-2">
                            <i className="icon-pen2" />
                          </div>
                          <div className="timeline-label">
                            <h2>
                              <a href="#">Software Engineer - BioInteractive Technologies Inc.</a>
                              <span className="subtitle-date">February 2018- August2018</span>
                            </h2>
                            <p>Working as a junior software engineer at BIT, 
                              I Created interface to connect iOS devices to Bluetooth low energy peripheral to allow app exchange data. 
                              Designed UI using Xamarin for iOS, Android, macOS and UWP for efficient navigation in the app. 
                              Built custom image carousel for the cross-platform app in Xamarin to scroll images on the screen.
                              Created persistent data in iOS, Android, macOS, UWP to save the current state of the app in device memory.
                              </p>
                          </div>
                        </div>
                      </article>
                      {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                        <div className="timeline-entry-inner">
                          <div className="timeline-icon color-3">
                            <i className="icon-pen2" />
                          </div>
                          <div className="timeline-label">
                            <h2>
                              <a href="#">System Analyst</a>
                              <span className="subtitle-date">February 2018- August2018</span>
                            </h2>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                          </div>
                        </div>
                      </article> */}
                      {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                        <div className="timeline-entry-inner">
                          <div className="timeline-icon color-4">
                            <i className="icon-pen2" />
                          </div>
                          <div className="timeline-label">
                            <h2>
                              <a href="#">Creative Designer</a>
                              <span className="subtitle-date">February 2018- August2018</span>
                            </h2>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                          </div>
                        </div>
                      </article> */}
                      {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                        <div className="timeline-entry-inner">
                          <div className="timeline-icon color-5">
                            <i className="icon-pen2" />
                          </div>
                          <div className="timeline-label">
                            <h2>
                              <a href="#">UI/UX Designer at Envato</a>
                              <span className="subtitle-date">February 2018- August2018</span>
                            </h2>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                          </div>
                        </div>
                      </article> */}
                      <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                        <div className="timeline-entry-inner">
                          <div className="timeline-icon color-none" />
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
    }
}

export default WorkExperience