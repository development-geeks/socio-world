import PropTypes from "prop-types";

const CustomIconButton = ({ type, icon: Icon, imageSrc }) => {
  return (
    <div className="h-10 w-10 rounded-lg bg-[#eff2f6] ml-2 flex justify-center items-center">
      {type === "icon" && <Icon className="text-sw-gray" />}
      {type === "image" && <img src={imageSrc} alt="icon-image" className="text-sw-gray" />}
    </div>
  );
};
CustomIconButton.propTypes = {
  type: PropTypes.oneOf(["icon", "image"]),
  icon: PropTypes.elementType,
  imageSrc: PropTypes.string,
};
export default CustomIconButton;
