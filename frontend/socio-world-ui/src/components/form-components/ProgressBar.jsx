import PropTypes from "prop-types";
import "./css/progress-bar.css";

const ProgressBar = ({
  percentage = 0,
  progressColor = "#0000001A",
  backgroundColor = "#0000001A",
}) => {
  return (
    <div>
      <div className="w-full rounded-full h-2 mb-4" style={{ backgroundColor: backgroundColor }}>
        <div
          className="h-2 rounded-full transition-all duration-300 ease-in-out animate-striped"
          style={{ width: `${percentage}%`, backgroundColor: progressColor }}
        ></div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number,
  progressColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default ProgressBar;
