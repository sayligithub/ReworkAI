import Component from "./Component";
import "./FigmaPlugin.css";

const FigmaPlugin = () => {
  return (
    <section className="figma-plugin">
      <div className="design-system">
        <div className="team-library">
          <div className="data-processor">
            <h1 className="success-stories">
              <span>{`Success `}</span>
              <span className="stories">Stories</span>
            </h1>
          </div>
          <div className="backed-by">
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0@2x.png" />
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0-1@2x.png" />
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0-2@2x.png" />
          </div>
        </div>
        <div className="shape-maker">
          <div className="frame-parent14">
            <div className="frame-child3" />
            <div className="extensive-features-making-it-a" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FigmaPlugin;
