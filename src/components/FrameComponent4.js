import FrameComponent5 from "./FrameComponent5";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
  return (
    <section className="for-employers-inner">
      <div className="frame-parent1">
        <div className="our-amazing-benefits-helpful-f-wrapper">
          <h1 className="our-amazing-benefits-container">
            <span>{`Our Amazing Benefits `}</span>
            <span className="helpful-for-your">Helpful For Your Hiring</span>
          </h1>
        </div>
        <div className="frame-child2" />
        <div className="frame-parent2 col-md-4">
          <FrameComponent5
            eosIconsai="/eosiconsai.svg"
            prop="60%"
            costReduce="Cost Reduce"
            zeroOverheadInTheHiringPr="Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"
          />
          <FrameComponent5
            eosIconsai="/eosiconsai-1.svg"
            prop="50% Faster"
            costReduce="Recruitment by TAT"
            zeroOverheadInTheHiringPr="Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"
            propTop="0px"
            propLeft="428.2px"
            propHeight="unset"
            propLineHeight="27.2px"
          />
          <div className="frame-parent3">
            <div className="frame-wrapper2">
              <div className="vector-parent">
                <img className="vector-icon9" alt="" src="/vector-7.svg" />
                <img className="vector-icon10" alt="" src="/vector-8.svg" />
              </div>
            </div>
            <div className="highly-contextualized-intervie-parent">
              <h3 className="highly-contextualized-intervie-container">
                <p className="highly-contextualized">{`Highly Contextualized `}</p>
                <p className="interview">Interview</p>
              </h3>
              <div className="al-models-generate">
                Al models generate highly contextualized interviews for the
                candidates based on your Company profile, Job description and
                Candidate's CV.
              </div>
            </div>
          </div>
          <div className="frame-parent4">
            <div className="frame-wrapper3">
              <div className="vector-group">
                <img className="vector-icon11" alt="" src="/vector-9.svg" />
                <img className="vector-icon12" alt="" src="/vector-10.svg" />
                <img
                  className="container-property-icon"
                  alt=""
                  src="/vector-11.svg"
                />
                <img
                  className="layout-property-icon"
                  alt=""
                  src="/vector-12.svg"
                />
              </div>
            </div>
            <div className="automated-scheduling-parent">
              <h3 className="automated-scheduling">
                <p className="automated">{`Automated `}</p>
                <p className="scheduling">Scheduling</p>
              </h3>
              <div className="email-whatsapp">{`Email & WhatsApp based communication for interview scheduling with automated reminders.`}</div>
            </div>
          </div>
          <FrameComponent5
            eosIconsai="/eosiconsai-2.svg"
            prop="AI generated Interviews"
            costReduce="On what matters"
            zeroOverheadInTheHiringPr="0 manual interventions, completely seamless experience for the candidates."
            propTop="308px"
            propLeft="428.2px"
            propHeight="66px"
            propLineHeight="unset"
          />
          <FrameComponent5
            eosIconsai="/fluenttasksapp20regular.svg"
            prop="in-built"
            costReduce="ATS"
            zeroOverheadInTheHiringPr={`To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.`}
            propTop="308px"
            propLeft="856.3px"
            propHeight="66px"
            propLineHeight="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
