import { CDN_URL } from "../utils/constants";

const RestuarantCard = (props) => {
    const { resData } = props;
    if (!resData) return null; // guard

    const {
        cloudinaryImageId,
        name,
        cuisines = [],
        avgRating,
        costForTwo,
    } = resData;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt={`${name || "restaurant"} logo`}
                src={CDN_URL + (cloudinaryImageId || "")}
            />
            <h3>{name}</h3>
            <h4>{Array.isArray(cuisines) ? cuisines.join(", ") : ""}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export default RestuarantCard;
