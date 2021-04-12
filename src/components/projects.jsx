import React, {Component} from 'react'

export default class Projects extends Component {
    render(){
        return (

            <section className="colorlib-services" data-section="services">
              <div className="colorlib-narrow-content">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">What I do?</span>
                    <h2 className="colorlib-heading">Here are some of my expertise</h2>
                  </div>
                </div>
                <div className="row row-pt-md">
                  <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                      <span className="icon">
                        <i className="icon-book" />
                      </span>
                      <div className="desc">
                        <h3>E-Commerece Online Bookstore</h3>
                        <p>
                        Created online platform using Django to allow users to buy and sell books online. 
                        Built front-end/back-end for book listing page and functionality for sellers to add books to sell.
                        As product owner led team of 5 to successfully launch app and receive recognition from professor
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center animate-box">
                    <div className="services color-2">
                      <span className="icon">
                        <i className="icon-bulb" />
                      </span>
                      <div className="desc">
                        <h3>Analysis of Happiness Factors</h3>
                        <p>
                        Analyzed data of countries with highest happiness rankings to determine most important factors that affect happiness and predict happiness of countries in the future.
                        Based on happiness data of the countries predicted ranking of the neighboring countries.
                        Transformed raw data into linear regression ML models to predict future country happiness rate.
                        Achieved 98% of accuracy in predicting training data using linear regression model and 94% in predicting test data.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center animate-box">
                    <div className="services color-3">
                      <span className="icon">
                        <i className="icon-phone3" />
                      </span>
                      <div className="desc">
                        <h3>Habit Tracking Mobile App</h3>
                        <p>
                        Designed middle-fidelity prototype of mobile app using Figma to allow users create habits.
                        Identified and gathered requirements from potential users to better fit the needs of the users.
                        Conducted user-centered design interviews and identified disadvantages of the existing habit-forming apps.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-4 text-center animate-box">
                    <div className="services color-4">
                      <span className="icon">
                        <i className="icon-layers2" />
                      </span>
                      <div className="desc">
                        <h3>Graphic Design</h3>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-md-4 text-center animate-box">
                    <div className="services color-5">
                      <span className="icon">
                        <i className="icon-data" />
                      </span>
                      <div className="desc">
                        <h3>Software</h3>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-md-4 text-center animate-box">
                    <div className="services color-6">
                      <span className="icon">
                        <i className="icon-phone3" />
                      </span>
                      <div className="desc">
                        <h3>Application</h3>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </section>
          );
    }
}