import { useMemo } from "react";
import "./FrameComponent3.css";

const FrameComponent3 = ({
  filterChain,
  month,
  dataMapping,
  propWidth,
  propMinWidth,
  propMinWidth1,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const filterChainStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const monthStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="frame-parent5">
      <div className="error-handler-wrapper">
        <div className="error-handler">
          <div className="data-splitter-wrapper">
            <div className="data-splitter">
              <div className="filter-chain-wrapper" style={frameDiv1Style}>
                <div className="filter-chain" style={filterChainStyle}>
                  {filterChain}
                </div>
              </div>
              <h3 className="month" style={monthStyle}>
                {month}
              </h3>
            </div>
          </div>
          <div className="parent">
            <h1 className="h1">₹</h1>
            <div className="data-mapping">{dataMapping}</div>
            <div className="month1">/month</div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper4">
        <div className="suitable-for-companies-with-5-parent">
          <div className="suitable-for-companies">
            Suitable for companies with 5-10 openings
          </div>
          <div className="frame-parent6">
            <div className="icons-parent">
              <img className="icons" loading="lazy" alt="" src="/icons.svg" />
              <div className="interview-ready-candidates">
                10 interview-ready candidates
              </div>
            </div>
            <div className="icons-group">
              <img className="icons1" alt="" src="/icons.svg" />
              <div className="unlimited-job-postings">
                Unlimited job postings
              </div>
            </div>
            <div className="icons-container">
              <img className="icons2" alt="" src="/icons.svg" />
              <div className="receive-pre-vetted-profiles">
                Receive pre-vetted profiles within 48 hours
              </div>
            </div>
            <div className="icons-parent1">
              <img className="icons3" alt="" src="/icons-3.svg" />
              <div className="dedicated-account-manager">
                Dedicated account manager
              </div>
            </div>
            <div className="stack-stack">
              <img className="icons4" alt="" src="/icons-3.svg" />
              <div className="assistance-with-interview">
                Assistance with interview scheduling
              </div>
            </div>
            <div className="heap-heap">
              <img className="icons5" alt="" src="/icons-3.svg" />
              <div className="custom-reports">Custom reports</div>
            </div>
          </div>
        </div>
      </div>
      <div className="simple-button-wrapper">
        <button className="simple-button4">
          <div className="get-started2">Get Started</div>
          <div className="arrow4">
            <img className="vector-icon15" alt="" src="/vector.svg" />
            <img className="vector-icon16" alt="" src="/vector-1.svg" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent3;
