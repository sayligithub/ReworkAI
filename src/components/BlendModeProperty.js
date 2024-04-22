import Steps from "./Steps";
import "./BlendModeProperty.css";

const BlendModeProperty = () => {
  return (
    <section className="blend-mode-property">
      <div className="transform-property">
        <img className="anchors-property-icon" alt="" src="/vector-13.svg" />
        <div className="steps1">
          <div className="variants-property">
            <h1 className="how-our-system-container">
              <span>{`How Our System `}</span>
              <span className="operates">Operates</span>
            </h1>
          </div>
          <div className="properties-panel">
            <div className="telegram">
              <Steps
                uploadDocuments="Upload Documents"
                shortlistTheMostQualified="Shortlist the most qualified candidate and upload their details for the top companies"
                settingsPanel="/frame-48095633.svg"
              />
              <div className="steps2">
                <h3 className="sign-up">Sign Up</h3>
                <div className="follow-the-link">
                  Follow the link below to sign up and get access of the current
                  job postings
                </div>
                <div className="wrapper-mingcuteuser-add-line">
                  <img
                    className="mingcuteuser-add-line-icon"
                    loading="lazy"
                    alt=""
                    src="/mingcuteuseraddline.svg"
                  />
                </div>
              </div>
              <Steps
                uploadDocuments="Get Rewards"
                shortlistTheMostQualified="As soon as the candidate gets selected you get your benefits"
                settingsPanel="/frame-48095633-1.svg"
                propMinHeight="100px"
              />
            </div>
            <div className="preview-panel">
              <button className="simple-button3">
                <div className="get-started1">Get Started</div>
                <div className="arrow3">
                  <img className="vector-icon13" alt="" src="/vector.svg" />
                  <img className="vector-icon14" alt="" src="/vector-1.svg" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlendModeProperty;
