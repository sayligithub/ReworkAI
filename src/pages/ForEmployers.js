import NavLinks from "../components/NavLinks";
import WhatDoINeedToDoToMakeT from "../components/WhatDoINeedToDoToMakeT";
import FrameComponent4 from "../components/FrameComponent4";
import BlendModeProperty from "../components/BlendModeProperty";
import DataAggregator from "../components/DataAggregator";
import FrameComponent2 from "../components/FrameComponent2";
import FillPattern from "../components/FillPattern";
import FrameComponent1 from "../components/FrameComponent1";
import FigmaPlugin from "../components/FigmaPlugin";
import FrameComponent from "../components/FrameComponent";
import "./ForEmployers.css";

const ForEmployers = () => {
  return (
    <div className="for-employers">
      <section className="shape-container">
        <NavLinks />
        <WhatDoINeedToDoToMakeT />
      </section>
      <FrameComponent4 />
      <BlendModeProperty />
      <DataAggregator />
      <div className="data-aggregator">
        <button className="simple-button">
          <div className="book-a-demo">Book a Demo</div>
          <div className="arrow">
            <img className="vector-icon" alt="" src="/vector.svg" />
            <img className="vector-icon1" alt="" src="/vector-1.svg" />
          </div>
        </button>
      </div>
      <FrameComponent2 />
      <FillPattern />
      <FrameComponent1 />
      <FigmaPlugin />
      <FrameComponent />
      <section className="path-processor">
        <div className="fill-filter">
          <div className="stroke-styler">
            <h1 className="optimize-your-hiring">
              Optimize Your Hiring Strategy with Rework's Exclusive Hiring Audit
            </h1>
            <div className="discover-the-strengths">
              Discover the strengths and opportunities in your current hiring
              process. Our comprehensive Hiring Audit evaluates your strategy,
              identifies areas for improvement, and tailors a roadmap for
              success. Elevate your recruitment game with data-driven insights –
              because the right talent deserves the right approach.
            </div>
          </div>
          <button className="cta-button">
            <div className="request-your-free">
              Request Your Free Hiring Audit
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ForEmployers;
