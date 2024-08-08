import React from 'react'

function Contactpage1() {
  return (
    <div>
      <div className="box">
        <div className="head">
          <div className="before-lineup">
            <h1 className="lineUp">
              Contact <span className="red">Us</span>
            </h1>
          </div>
          <hr className="redline" />
          <p>Have Questions ? We have answers ( may be )</p>
        </div>
      </div>

      <div className="contact">
        <div className="container__elem">
          <div className="elem__block">
            <img
              className="hover-img"
              src="https://i.postimg.cc/gjnCSrHQ/62759-computer-location-icon-icons-free-download-png-hd.png"
              width="100%"
              height='auto'
              alt="call"
            />
          </div>

          <h2 className="mode">Our Address</h2>

          <p className="mode">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="container__elem">
          <div className="elem__block">
            <img
              className="hover-img"
              src="https://i.postimg.cc/XvK00tKD/call.png"
              width="50%"
              alt="call"
            />
          </div>

          <h2 className="mode">CALL US</h2>
          <p className="mode">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="container__elem">
          <div className="elem__block">
            <img
              className="hover-img"
              src="https://i.postimg.cc/Fzzt3RM2/write.png"
              width="50%"
              alt="mail"
            />
          </div>
          <h2 className="mode">WRITE US</h2>
          <p className="mode">
            We will respond to your email inquiry within 24 hours.
          </p>
        </div>
        <div className="container__elem">
          <div className="elem__block">
            <img
              className="hover-img"
              src="https://i.postimg.cc/tT2QsPM3/faq.png"
              width="50%"
              alt="faq"
            />
          </div>

          <h2 className="mode">FAQ</h2>
          <p className="mode">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="touch">
        <h2>Get in touch</h2>
        <hr className="redline" />
      </div>

      <form onSubmit={handleSubmit} method="POST" name="contact-form">
        <div className=" mt-11">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  ng-model="firstname"
                  name="firstname"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                  ng-model="company"
                  name="company"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  ng-model="phone"
                  name="firstname"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  ng-model="lastname"
                  name="lastname"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  ng-model="email"
                  name="email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Course"
                  ng-model="course"
                  name="course"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
          </div>
        </div>

        <div className="">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
            <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="group">
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Message"
                  ng-model="message"
                  name="message"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="pager">
                <button type="submit" className="btn btn-success">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        </div>
      </form>
    </div>
  )
}

export default Contactpage1;