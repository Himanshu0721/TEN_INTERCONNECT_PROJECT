import "../../pages.css/guidelines.css";

function Guidelines() {
  return (
      <div>
        <section className="banner-area relative" id="home">
          <div className="box-guideline">
            <div className="head">
              <div className="before-lineup">
                <h1 className="lineUp">Guidelines</h1>
              </div>
              <hr className="redline" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3>Community Guidelines</h3>
            <p className="guidelines-text">
              Welcome to The Entrepreneurship Network's community! To ensure a positive and enriching experience for everyone, we've outlined some guidelines for participation:
            </p>
            <ol className="guidelines-list">
              <li className="guidelines-category">
              <span className="guidelines-main">
                Respectful Behavior:
              </span>
                <ul className="guidelines-sublist">
                  <li>
                    Treat others with kindness, respect, and empathy.
                  </li>
                  <li>
                    Avoid offensive language, harassment, or discrimination of any kind.
                  </li>
                  <li>
                    Foster an inclusive environment where diverse perspectives are valued.
                  </li>
                </ul>
              </li>
              <li className="guidelines-category">
              <span className="guidelines-main">
                Content Guidelines:
              </span>
                <ul className="guidelines-sublist">
                  <li>
                    Share content that is relevant, constructive, and adds value to discussions.
                  </li>
                  <li>
                    Respect intellectual property rights by citing sources and obtaining necessary permissions.
                  </li>
                  <li>
                    Avoid spamming, self-promotion, or posting unrelated content.
                  </li>
                </ul>
              </li>
              <li className="guidelines-category">
              <span className="guidelines-main">
                Engagement:
              </span>
                <ul className="guidelines-sublist">
                  <li>
                    Engage in meaningful and constructive conversations.
                  </li>
                  <li>
                    Provide constructive feedback and support to fellow community members.
                  </li>
                  <li>
                    Report any inappropriate behavior or content to the moderators.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              By following these guidelines, we can create a vibrant and supportive community where everyone can thrive. Thank you for your cooperation!
            </p>
          </div>
        </section>
      </div>
  );
}

export default Guidelines;
