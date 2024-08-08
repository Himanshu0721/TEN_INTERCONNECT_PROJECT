import "../../pages.css/home.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faGit,
  faJs,
  faAngular,
  faNode,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ReactLogo from "../../componentsCss/icon.svg";

function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/jobs`;
    navigate(path);
  };

  return (
    <div className="home">
      <section>
        <div className="topping">
          <div className="content">
            <h1 className="header-title">
              Internships <br></br>
              <span>Roadmap</span>
            </h1>
          </div>
          <div className="header-box">
            <div className="header-description">
              Your Roadmap to Success: TenInternships that Guide Your Career. We
              help you achieve your goals.
            </div>
          </div>

          <button className="cta" onClick={routeChange}>
            <span>Start Applying</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
          <div className="background-img"></div>
        </div>
      </section>

      <div className="row justify-content-center mb-5">
        <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
          <span className="subheading"> </span>
          <h2 className="mb-0">Our Internship Categories</h2>
        </div>
      </div>
      <div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <div className="type">React Developer</div>
            </div>
            <div className="slide">
              <div className="type"> Java Developer</div>
            </div>
            <div className="slide">
              <div className="type"> ProductManagement</div>
            </div>
            <div className="slide">
              <div className="type">Angular Developer </div>
            </div>
            <div className="slide">
              <div className="type">Digital Marketing</div>
            </div>
            <div className="slide">
              <div className="type">Market Research</div>
            </div>
            <div className="slide">
              <div className="type">Sales</div>
            </div>
            <div className="slide">
              <div className="type">Text Content Preparation</div>
            </div>
            <div className="slide">
              <div className="type">Graphic Content Preparation</div>
            </div>
            <div className="slide">
              <div className="type">Video Content Preparation</div>
            </div>
            <div className="slide">
              <div className="type">Audio content Preparation</div>
            </div>
            <div className="slide">
              <div className="type">SpringBoot Developer</div>
            </div>
            <div className="slide">
              <div className="type">WordPress Developer</div>
            </div>
            <div className="slide">
              <div className="type">Project Management</div>
            </div>
            <div className="slide">
              <div className="type">Strategic Relationship Management</div>
            </div>
            <div className="slide">
              <div className="type">Program Management</div>
            </div>
            <div className="slide">
              <div className="type">Enterpreneur in residence</div>
            </div>
            <div className="slide">
              <div className="type">Technical Program Management</div>
            </div>
          </div>
        </div>
      </div>
      <main role="main" className="site-main">
        <section className="fixed-width">
          <h2 className="skills">Skills You'll be working on!</h2>

          <div className="col fourth highlighted-bg small-box">
            <div className="icon icon-large">
              <h3>HTML5</h3>
              <FontAwesomeIcon icon={faHtml5} style={{ color: "#e34f26" }} />
            </div>
          </div>

          <div className="col fourth highlighted-bg small-box">
            <div className="icon icon-large">
              <h3>CSS3</h3>
              <FontAwesomeIcon icon={faCss3} style={{ color: "#2965f1" }} />
            </div>
          </div>

          <div className="col fourth highlighted-bg small-box">
            <div className="icon icon-large">
              <h3>JavaScript</h3>
              <FontAwesomeIcon icon={faJs} style={{ color: "#F0DB4F" }} />
            </div>
          </div>

          <div className="col fourth highlighted-bg small-box">
            <div className="icon icon-large">
              <h3>MongoDB</h3>
              <img src={ReactLogo} alt="React Logo" />
            </div>
          </div>

          <div className="col fourth highlighted-bg small-box">
            <div className="icon icon-large">
              <h3>Git</h3>
              <FontAwesomeIcon icon={faGit} style={{ color: "#4183c4" }} />
            </div>
          </div>

          <div className="col fourth highlighted-bg small-box">
            <div className="icon icon-large">
              <h3>Node.js</h3>
              <FontAwesomeIcon icon={faNode} style={{ color: "#80BD01" }} />
            </div>
          </div>

          <div className="col fourth highlighted-bg small-box">
            <div className="icon icon-large">
              <h3>Angular.js</h3>
              <FontAwesomeIcon icon={faAngular} style={{ color: "#DD1B16" }} />
            </div>
          </div>

          <div className="col fourth highlighted-bg small-box">
            <div className="icon icon-large">
              <h3>Agile</h3>
              <FontAwesomeIcon icon={faAngular} style={{ color: "#0e3a86" }} />
            </div>
          </div>
        </section>
      </main>

      <section>
        <div className="about">
          <div className="block2">
            <div className="about_heading">
              ABOUT US
              <br />
            </div>
            <div className="texting">
              <p style={{ textAlign: "center" }}>
                At TenInternships, our mission is to revolutionize the way
                students prepare for their careers. We're dedicated to offering
                a comprehensive platform that equips students with not just
                theoretical knowledge, but also practical skills and real-world
                exposure. Imagine a world where every student has the
                opportunity to explore their interests, discover their passions,
                and seamlessly transition them into successful careers. With
                TenInternships, students have access to a diverse range of
                resources, including internships, mentorship programs,
                workshops, and networking opportunities. We believe that by
                providing students with relevant skills and practical
                experience, we can help them unlock their full potential and
                achieve their career goals.
              </p>
            </div>
            <div className="social_icons">
              <div className="square">
                <div className="icons">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </div>
              </div>
              <div className="square">
                <div className="icons">
                  <i className="fa fa-youtube" aria-hidden="true"></i>
                </div>
              </div>
              <div className="square">
                <div className="icons">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </div>
              </div>
              <div className="square">
                <div className="icons">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "black" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
