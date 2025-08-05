import { CDN_URL } from "../utils/constants";
const RestuarantCard = (props) => {
    //console.log("props are ", props);
    const { resData } = props;
    //console.log("resData", resData);
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
        resData?.card?.card?.info;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars </h4>
            <h4>{costForTwo}</h4>
            {/* <h4>{sla.deliveryTime}</h4> */}
        </div>
    );
};

export default RestuarantCard;
