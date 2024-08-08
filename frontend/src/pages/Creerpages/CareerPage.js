import { useState } from "react";
import "../../pages.css/career.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

const Careerpage = () => {
  const [jobs, setJobs] = useState(new Array(3).fill(0));
  const [testimonials, setTestimonials] = useState([
    {
      name: "Piush Bose",
      uniName: "University of Delhi",
      testimonial: "TenInternships gave me the opportunity to gain real-world experience. The team was supportive and the learning environment was fantastic.",
    },
    {
      name: "Faizan Surani",
      uniName: "IIT Bombay",
      testimonial: "The internships I found through TenInternships were tailored to my career ambitions. It’s a great platform for students looking to make a mark in the industry.",
    },
    {
      name: "Anuradha Singh",
      uniName: "JNU",
      testimonial: "I loved the community and the networking opportunities. TenInternships helped me connect with industry professionals and learn from the best.",
    },
    {
      name: "Pravin",
      uniName: "BITS Pilani",
      testimonial: "The experience I gained from my internship has been invaluable. TenInternships truly bridges the gap between academia and the professional world.",
    },
    {
      name: "Aryan Panchal",
      uniName: "NIT Trichy",
      testimonial: "TenInternships provides excellent opportunities for students to explore different career paths. The support and guidance I received were exceptional.",
    }
  ]);

  function TestimonialCard({ name, uniName, testimonial }) {
    return (
      <div className="testimonial__card">
        <img src="/noimage.png" alt="TenInternships" />
        <div>
          <h4 style={{ marginBottom: "unset" }}>{name}</h4>
          <span>{uniName}</span>
          <p>"{testimonial}"</p>
        </div>
      </div>
    );
  }

  return (
    <main className="main__wrapper">
      <section className="hero__title">
        <h1 style={{ textAlign: "left", fontWeight: "500" }}>
          TenInternships <span style={{ color: "blue" }}></span>
        </h1>
        <p>
          The place where dreams meet opportunities. Whether you're a student
          seeking real-world experience or an employer searching for bright
          talent, we're here to bridge the gap. Discover internships tailored to
          your ambitions, connect with industry professionals, and embark on a
          journey of growth and discovery. Join our vibrant community today and
          unlock the door to endless possibilities. Your future starts here.
          Ready to take the next step?
        </p>
        <p
          style={{
            textAlign: "right",
            color: "blue",
            fontStyle: "italic",
            fontSize: "1rem",
          }}
        >
          - Team TenInternships
        </p>
      </section>
      <section className="why__us">
        <h1>
          <span style={{ color: "blue" }}>Why</span> work with us?
        </h1>
        <p style={{ textAlign: "right" }}>
          Together, we dream big, chill often, and brainstorm nonstop in the
          pursuit of excellence. Join our incredible team and help millions of
          students flirt with their careers before they marry one.
        </p>
        <div className="card__wrapper">
          <div className="y__card">
            <img src="/card1.svg" alt="no_dress_code_pic" />
            <h4>No dress code</h4>
            <span>
              Clothes don’t transform lives; the people who wear them do.
            </span>
          </div>
          <div className="y__card">
            <img src="/card2.svg" alt="" />
            <h4>Lean and efficient teams</h4>
            <span>
              Our well-structured teams empower us to be creative, exceptional,
              and limitless.
            </span>
          </div>
          <div className="y__card">
            <img src="/card3.svg" alt="" />
            <h4>Competitive packages</h4>
            <span>
              We are all about following our passion without having to worry
              about our paycheck.
            </span>
          </div>
          <div className="y__card">
            <img src="/card4.svg" alt="" />
            <h4>Free training for everyone</h4>
            <span>
              Working with a learning platform comes with a perk for you and
              your family.
            </span>
          </div>
          <div className="y__card">
            <img src="/card5.svg" alt="" />
            <h4>Great place to work and get certified</h4>
            <span>You know it's true when there is a certification.</span>
          </div>
        </div>
      </section>
      <section className="hero__description">
        <p>
          "The only way to do great work is to love what you do. If you haven’t
          found it yet, keep looking. Don’t settle. As with all matters of the
          heart, you’ll know when you find it."
        </p>
        <p style={{ color: "rgba(0 0 255 / .6)" }}>- Steve Jobs</p>
      </section>
      <section className="jobs__search__intro">
        <aside className="left__wrapper">
          <h1 style={{ textAlign: "left" }}>
            Your <span style={{ color: "blue" }}>future starts</span>
          </h1>
          <p style={{ textAlign: "left" }}>
            TenInternships consistently ranks as one of the world’s best places
            to work — here’s your chance to find out why. Explore our latest internships
            listings and apply today to join one of our high-performing teams.
          </p>
          <div className="btn__container">
            <a href="/saved_jobs" className="job__btn">
              Saved internships
            </a>
          </div>
        </aside>
        <aside className="right__wrapper">
        </aside>
      </section>
      <section className="insights">
        <img src="/insights.jpg" alt="" />
        <div className="right__wrapper">
          <h1 style={{ textAlign: "left" }}>
            <span style={{ color: "blue" }}>Transforming</span> ourselves.
          </h1>
          <p>
            Your benefits for your life. No matter where in the world you work,
            In Life benefits and perks are designed to make your life even
            better.
          </p>
          <p>
            We understand that in order to do our best work, we all need peace
            of mind. From health and wellness to dependent care, time off, and
            work flexibility, our program is designed to give our employees the
            support they need to be their best selves.
          </p>
          <ul style={{ textAlign: "left" }}>
            <li>
              Your Wellness Healthcare + EAP, Wellness Programs, Paid Time Off,
              and Annual Shutdown
            </li>

            <li>
              Your family Paid Parental Leave, Fertility and Adoption
              Assistance, and Childcare, Eldercare and Pet Care Subsidy
            </li>

            <li>
              Your Passions InDay, Volunteer Opportunities, and Donation
              Matching
            </li>

            <li>
              Your Must-Haves and Extras PTO, PerkUp!, Speakers Series, and
              Education Reimbursement
            </li>
          </ul>
        </div>
      </section>
      <section className="testimonials">
        <h1>
          <span style={{ color: "blue" }}>Testimonials</span> from our interns
        </h1>
        <div className="testimonials__wrapper">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              uniName={testimonial.uniName}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Careerpage;
