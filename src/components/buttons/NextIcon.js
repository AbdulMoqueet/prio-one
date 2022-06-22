import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const NextIcon = ({ onClick, width }) => {
    return (
        <div className={width === 100 ? "slick-icons slick-icons--right slick-icon__disabled" : "slick-icons slick-icons--right"} onClick={onClick} >
            <RiArrowRightSLine className="slick-icons--right" />
        </div>
    );
};

export default NextIcon