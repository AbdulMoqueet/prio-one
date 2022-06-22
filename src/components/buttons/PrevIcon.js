import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";


const PrevIcon = ({ onClick, width }) => {
    return (
        <div className={width === 25 ? "slick-icons slick-icons--left slick-icon__disabled" : "slick-icons slick-icons--left"} onClick={onClick}>
            <RiArrowLeftSLine className="slick-icons--left" />
        </div>
    );
};

export default PrevIcon