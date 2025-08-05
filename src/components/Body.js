import RestuarantCard from "./RestuarantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    const [listOfRestuarants, setListOfRestuarants] = useState(resList);
    console.log("list of ", listOfRestuarants);
    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        console.log("Button Clicked");
                        const filteredList = listOfRestuarants.filter(
                            (res) => res.card?.card?.info.avgRating > 4.2
                        );
                        console.log("filtered list", filteredList);
                        setListOfRestuarants(filteredList);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {listOfRestuarants.map((restaurant) => {
                    return (
                        <RestuarantCard
                            key={restaurant.card.card.info.id}
                            resData={restaurant}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
