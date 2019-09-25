import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Us</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      {/* <p>I am a computer grad student from DAIICT-Gandhinagar with ICT as my major.I love exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years (apart from the headphone-jack part!!)</p>
                    <p>I have started reflecting my ideas and thougths through the medium of words recently so spelling and grammer mistaks are very often.You can write me back if you spot any and don't want to live anymore :P </p> */}
                      <p>
                        I am a computer grad from D. Y. Patil Institute of
                        Technology, Pimpri, Pune with CSE as my major. I am
                        always amazed to learn that technology never remains the
                        same, and this uncertainness motivates me to keep
                        learning.
                      </p>
                      <p>
                        I am currently working on various ideas and projects.
                        Though many ideas and projects have not been that
                        successfull over the years. But still I keep my head up
                        for new challenges.
                      </p>
                      <p>
                        I never hesitate in telling about my failures and
                        unsuccessful endeavours to anyone, because all these
                        failures have taught me, How Not To Do A Thing!!
                      </p>
                      <p>
                        I am working as a full-time Associate Consultant in Atos
                        | Syntel, GDC, Pune.
                      </p>
                      <p>
                        I am always open to any ideas or opportunities one is
                        willing to share with me. If you wish to connect with
                        me, then please use the social links in the sidebar to contact me.
                      </p>
                      <p>
                        I will be more than happy to connect with you. And maybe
                        we can go for a cup of tea. I am more of a tea guy than
                        a cup of coffee.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                      I have experience in building websites using
                      JavaScript,HTML,CSS and BootStrap.
                    </p>
                    <p>
                      I have experience in building webapps using React and
                      Angular.
                    </p>
                    <p>
                      I have experience in building native mobile apps using Android
                      Studio.
                    </p>
                    <p>
                      I have experience in building Hybrid mobile apps using
                      React-Native, Ionic and Cordova.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-arrow-loop" />
                  </span>
                  <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>
                      As coming from the CSE background, I have good grasp over
                      fundamental concepts of DSA.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Databases</h3>
                    <p>
                      I have experience in SQL and MongoDb.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-code" />
                  </span>
                  <div className="desc">
                    <h3>Programming Languages</h3>
                    <p>
                      I have experience in Html, JavaScript, TypeScript, Python and Java.
                    </p>
                    <p>
                      For styling CSS, BootStrap and SCSS.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-display2" />
                  </span>
                  <div className="desc">
                    <h3>Practicing From</h3>
                    <p>
                    {/* <ul style={{listStyleType:"none"}}> */}
                    <a href="https://www.freecodecamp.org/aman08singh" target="_blank" data-nav-section="about">Freecodecamp</a>
                  <br></br>
                  <a href="https://stackoverflow.com/users/6781395/aman-kumar-singh" target="_blank" data-nav-section="about">StackOverflow</a>
                  <br></br>
                  <a href="https://www.codecademy.com/aman08singh" target="_blank" data-nav-section="about">Codecademy</a>
                  <br></br>
                  <a href="https://www.hackerearth.com/@aman.rajkumar.singh"  target="_blank" data-nav-section="home">Hackerearth</a>
                  <br></br>
                  <a href="https://www.hackerrank.com/aman_rajkumar_s1?hr_r=1" target="_blank" data-nav-section="about">Hackerrank</a>
                  <br></br>
                  <a href="https://codepen.io/aman08singh/" target="_blank" data-nav-section="about">Codepen</a>
                  <br></br>
                  <a href="https://www.techgig.com/amankumar371" target="_blank" data-nav-section="timeline">Techgig</a>
                  <br></br>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-display2" />
                  </span>
                  <div className="desc">
                    <h3>Currently Learning</h3>
                    <p>
                      Progressive Web App (PWA)
                    </p>
                    <p>
                      Data Science with Python.
                    </p>
                  </div>
                </div>
              </div>
              {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
