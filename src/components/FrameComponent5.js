import { useMemo } from "react";
import "./FrameComponent5.css";

const FrameComponent5 = ({
  eosIconsai,
  prop,
  costReduce,
  zeroOverheadInTheHiringPr,
  propTop,
  propLeft,
  propHeight,
  propLineHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const costReduceStyle = useMemo(() => {
    return {
      height: propHeight,
      lineHeight: propLineHeight,
    };
  }, [propHeight, propLineHeight]);

  return (
    <div className="eos-iconsai-parent" style={frameDivStyle}>
      <img className="eos-iconsai" alt="" src={eosIconsai} />
      <h3 className="cost-reduce" style={costReduceStyle}>
        <p className="p1">{prop}</p>
        <p className="cost-reduce1">{costReduce}</p>
      </h3>
      <div className="zero-overhead-in">{zeroOverheadInTheHiringPr}</div>
    </div>
  );
};

export default FrameComponent5;
