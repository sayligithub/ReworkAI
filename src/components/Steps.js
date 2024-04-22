import { useMemo } from "react";
import "./Steps.css";

const Steps = ({
  uploadDocuments,
  shortlistTheMostQualified,
  settingsPanel,
  propMinHeight,
}) => {
  const pluginsPanelStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div className="steps">
      <h3 className="upload-documents">{uploadDocuments}</h3>
      <div className="plugins-panel" style={pluginsPanelStyle}>
        <div className="instagram">
          <div className="shortlist-the-most">{shortlistTheMostQualified}</div>
        </div>
      </div>
      <div className="wrapper-settings-panel">
        <img
          className="settings-panel-icon"
          loading="lazy"
          alt=""
          src={settingsPanel}
        />
      </div>
    </div>
  );
};

export default Steps;
