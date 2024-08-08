import "../../pages.css/about.css";

function about() {
  return (
    <div>
      <section class="banner-area relative" id="home">
        <div class="box-about">
          <div class="head">
            <div className="before-lineup">
              <h1 className="lineUp">
                About <span class="red">Us</span>
              </h1>
            </div>
            <hr class="redline" />
          </div>
        </div>
      </section>
      <section>
        <div className="displayer">
          <div className="image-display"></div>
          <div className="description">
            <h1 className="about-title">About</h1>
            <p className="">
              At TenInternships, our mission is to revolutionize the way students
              prepare for their careers. We're dedicated to offering a
              comprehensive platform that equips students with not just
              theoretical knowledge, but also practical skills and real-world
              exposure. Imagine a world where every student has the opportunity
              to explore their interests, discover their passions, and
              seamlessly transition them into successful careers. With
              TenInternships, students have access to a diverse range of
              resources, including internships, mentorship programs, workshops,
              and networking opportunities. We believe that by providing
              students with relevant skills and practical experience, we can
              help them unlock their full potential and achieve their career
              goals.
              <li>Comprehensive Platform</li>
              <li>Skill Development</li>
              <li>Internship opportunities</li>
              <li>Mentorship Programs</li>
              {/* <li>Networking</li> */}
              <li>Confidence and Readiness</li>
              <li>Personalized Guidance</li>
              <li>
                Empowerment: Explore passions and turn them into successful
                careers.
              </li>
            </p>
          </div>
        </div>
      </section>

      <section className="m-5">
        <div className="service">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 pb-40 header-text">
              <h2>Why TenInternships</h2>
              <p>
                At TenInternships, we believe that internships are pivotal
                stepping stones to a successful career journey. Here's how we
                facilitate your internship experience and internship.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-service">
                <h4>
                  <span className="lnr lnr-user"></span>Internship
                  Opportunities: Your Future Gateway
                </h4>
                <p>
                  Explore a diverse array of internship opportunities spanning
                  various industries with TenInternships. Partnered with leading
                  companies, our platform offers sought-after positions to gain
                  invaluable work experience. Engage in hands-on learning
                  through real-world projects, honing practical skills essential
                  for your career journey.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service">
                <h4>
                  <span class="lnr lnr-license"></span> Streamlined internship
                  Applications
                </h4>
                <p>
                TenInternships simplifies the process of applying for full-time
                  positions by offering a user-friendly platform that enables
                  seamless submissions. You can easily navigate through our
                  curated internship listings, which feature opportunities from
                  prestigious companies actively seeking skilled graduates. With
                  just a few clicks, you can submit your application directly
                  through our platform, saving you time and effort.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service">
                <h4>
                  <span class="lnr lnr-phone"></span>Seamless Talent Discovery
                </h4>
                <p>
                  Employers leverage TenInternships's robust platform to
                  streamline their hiring process by tapping into our pool of
                  talented students and recent graduates. Our advanced search
                  tools enable employers to easily find skilled candidates
                  matching their criteria, saving time and effort. With seamless
                  communication features, employers can swiftly connect with
                  prospective employees, facilitating efficient recruitment
                  processes.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service">
                <h4>
                  <span class="lnr lnr-rocket"></span> Highlight Your Expertise
                </h4>
                <p>
                  At TenInternships, we provide you with the platform to not just
                  list your skills but to truly showcase them. Craft detailed
                  portfolios and profiles that highlight your projects,
                  achievements, and capabilities. Impress potential employers by
                  demonstrating your expertise through tangible examples of your
                  work. Our personalized approach allows you to tailor your
                  profile to emphasize your strengths, ensuring that you stand
                  out from the crowd
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service">
                <h4>
                  <span class="lnr lnr-diamond"></span> Expand Your Professional
                  Circle
                </h4>
                <p>
                TenInternships offers a myriad of networking avenues beyond
                  traditional means. Dive into interactive networking events,
                  thought-provoking webinars, and engaging forums to connect
                  with seasoned industry professionals. Beyond mere connections,
                  seize mentorship opportunities to glean insights and advice
                  crucial for your career trajectory. By actively participating
                  in our networking ecosystem.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service">
                <h4>
                  <span class="lnr lnr-bubble"></span> Personalized Career
                  Navigation
                </h4>
                <p>
                  At TenInternships, we're dedicated to guiding you through every
                  step of your professional journey. Benefit from tailored
                  career guidance and support crafted specifically for your
                  ambitions and aspirations. Gain invaluable insights into
                  emerging industry trends, diverse career pathways, and
                  shifting internship market demands. Armed with this knowledge, you'll
                  be empowered to make informed decisions that align with your
                  long-term career goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default about;
