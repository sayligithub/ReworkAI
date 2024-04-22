import "./NavLinks.css";

const NavLinks = () => {
  return (
    <div className="nav-links">
      <header className="image-handler-parent">
        <div className="image-handler">
          <div className="logo">
            <div className="input-box" />
            <div className="input-box1" />
            <div className="rework">
              <span className="re">
                <span className="r">r</span>
                <span className="e">e</span>
              </span>
              <span className="work">work</span>
            </div>
            <div className="ai-wrapper">
              <div className="ai">ai</div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="talent-finder-parent">
            <div className="talent-finder">Talent Finder</div>
            <div className="for-recruiters">For Recruiters</div>
            <div className="for-employers-parent">
              <div className="for-employers1">For Employers</div>
              <div className="join-network-partners-d-agent-wrapper">
                <img
                  className="join-network-partners-d-agent"
                  alt=""
                  src="/join-network-partners-d-agent-ui-dappsproducts.svg"
                />
              </div>
            </div>
            <div className="about-us">About Us</div>
            <div className="company">Company</div>
          </div>
        </div>
        <div className="simple-button-parent">
          <button className="simple-button1">
            <div className="log-in">Log In</div>
            <div className="arrow1">
              <img className="vector-icon2" alt="" src="/vector.svg" />
              <img className="vector-icon3" alt="" src="/vector-1.svg" />
            </div>
          </button>
          <button className="simple-button2">
            <div className="get-started">Get Started</div>
            <div className="arrow2">
              <img className="vector-icon4" alt="" src="/vector.svg" />
              <img className="vector-icon5" alt="" src="/vector-1.svg" />
            </div>
          </button>
        </div>
      </header>
      <div className="frame-parent">
        <div className="frame-group">
          <div className="ellipse-parent">
            <div className="frame-child" />
            <div className="mask-group">
              <div className="rectangle-parent">
                <div className="frame-item" />
                <div className="k-candidates-hired-container">
                  <p className="k">
                    <b>+10K</b>
                  </p>
                  <p className="candidates-hired">Candidates Hired</p>
                </div>
                <button className="rectangle-group">
                  <div className="frame-inner" />
                  <img className="vector-icon6" alt="" src="/vector-4.svg" />
                </button>
              </div>
              <img className="about-us-icon" alt="" src="/about-us@2x.png" />
            </div>
          </div>
          <div className="power-up-your-container">
            <p className="power-up-your">Power Up Your Hiring</p>
            <p className="with-rework">with Rework .</p>
          </div>
        </div>
        <div className="empower-your-business-with-cut-wrapper">
          <div className="empower-your-business">{`Empower your business with cutting-edge A.I. technology, simplified processes, and top-tier talent connections. Rework is your strategic partner in redefining how you hire `}</div>
        </div>
        <div className="cta-button-parent">
          <button className="cta-button1">
            <div className="book-a-demo1">Book A Demo</div>
          </button>
          <div className="frame-container">
            <div className="frame-div">
              <div className="group-parent">
                <img className="group-icon" alt="" src="/group.svg" />
                <div className="no-credit-required">No credit Required</div>
              </div>
              <div className="group-group">
                <img className="group-icon1" alt="" src="/group.svg" />
                <div className="streamlined-recruitment-proces">
                  Streamlined Recruitment Process
                </div>
              </div>
              <div className="frame-wrapper1">
                <div className="rectangle-container">
                  <div className="rectangle-div" />
                  <button className="frame-button">
                    <div className="frame-child1" />
                    <img className="vector-icon7" alt="" src="/vector-4.svg" />
                  </button>
                  <div className="happy-companies-wrapper">
                    <div className="happy-companies">
                      <p className="p">
                        <b>+360</b>
                      </p>
                      <p className="happy-companies1">Happy Companies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-links-child" />
    </div>
  );
};

export default NavLinks;
