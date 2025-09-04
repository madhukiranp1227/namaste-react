import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
    const [listOfRestuarants, setListOfRestuarants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestuarant, setFilteredRestuarant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?url=https://pastebin.com/raw/0QcdEDBL"
        );
        const json = await data.json();

        // Keep only cards that actually contain restaurant info,
        // and flatten to the `info` object we need in the UI:
        const restaurants =
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;

        setListOfRestuarants(restaurants);
        setFilteredRestuarant(restaurants);
        console.log("json", json);
        console.log("restaurants (cleaned):", restaurants);
        console.log("filtered restaurants ", restaurants);
    };

    //Conditional Rendering

    return listOfRestuarants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search ">
                    <input
                        type="text"
                        className="search-box "
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    ></input>
                    <button
                        onClick={() => {
                            console.log(searchText);
                            const filteredRestuarant = listOfRestuarants.filter(
                                (res) =>
                                    res.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                            );
                            setFilteredRestuarant(filteredRestuarant);
                            console.log("ListofRestuarants", listOfRestuarants);
                            // Filter The Restuarant Card and update the UI
                            // Search Text
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestuarants.filter(
                            (res) => res?.info?.avgRating > 4.2
                        );
                        setFilteredRestuarant(filteredList);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>

            <div className="res-container">
                {filteredRestuarant.map((restaurantcard) => (
                    <RestuarantCard
                        key={restaurantcard.info.id}
                        resData={restaurantcard.info}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
