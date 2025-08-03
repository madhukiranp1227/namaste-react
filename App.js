import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *
 *  -Search
 *  -Restuarant Container
 *   - RestuarantCard
 *        -Img
 *        -Name of the Restuarant, Star Rating, Cusine, Delivery time
 * Footer
 *  -Copy Right
 *  -Links
 *  -Address
 *
 * @returns
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const resList = [
    {
        card: {
            card: {
                "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                    id: "139558",
                    name: "Dindigul Thalappakatti - Since 1957\n",
                    cloudinaryImageId: "exhzkyd9pjoqlobruy4v",
                    locality: "HSR Layout",
                    areaName: "HSR Layout",
                    costForTwo: "₹650 for two",
                    cuisines: [
                        "Biryani",
                        "Barbecue",
                        "South Indian",
                        "Chinese",
                        "North Indian",
                    ],
                    avgRating: 4.3,
                    parentId: "332",
                    avgRatingString: "4.3",
                    totalRatingsString: "9.3K+",
                    promoted: true,
                    adTrackingId:
                        "cid=31613589~p=32~adgrpid=31613589#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=139558~plpr=COLLECTION~eid=f4559970-21ac-482d-8aa9-ed4af93b1215~srvts=1754245071089~collid=83639",
                    sla: {
                        deliveryTime: 37,
                        lastMileTravel: 4.4,
                        serviceability: "SERVICEABLE",
                        slaString: "35-40 mins",
                        lastMileTravelString: "4.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                        nextCloseTime: "2025-08-04 01:00:00",
                        opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textExtendedBadges: {},
                            textBased: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹120",
                        logoCtx: {
                            text: "BENEFITS",
                        },
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                        commsStyling: {},
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: "4.2",
                            ratingCount: "7.1K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                    },
                    ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    campaignId: "31613589",
                },
                analytics: {},
                cta: {
                    link: "swiggy://menu?restaurant_id=139558&source=collection&query=Biryani",
                    text: "RESTAURANT_MENU",
                    type: "DEEPLINK",
                },
                widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food",
            },
            relevance: {
                type: "RELEVANCE_TYPE_ON_MENU_RETURN",
                sectionId: "MENU_RETURN_FOOD",
            },
        },
    },
    {
        card: {
            card: {
                "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                    id: "270",
                    name: "Donne Biryani House",
                    cloudinaryImageId:
                        "FOOD_CATALOG/IMAGES/CMS/2024/4/22/77f55014-fab9-4018-b971-f84e33054b05_2bd44604-a472-4c32-8c9c-d77d3f73163b.jpeg",
                    locality: "7th Block",
                    areaName: "Koramangala",
                    costForTwo: "₹130 for two",
                    cuisines: ["Biryani"],
                    avgRating: 4.3,
                    parentId: "338",
                    avgRatingString: "4.3",
                    totalRatingsString: "57K+",
                    sla: {
                        deliveryTime: 18,
                        lastMileTravel: 1.2,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "1.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                        nextCloseTime: "2025-08-03 23:59:00",
                        opened: true,
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C",
                            },
                        ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            textBased: {},
                            imageBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            shortDescription:
                                                "options available",
                                            fontColor: "#7E808C",
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            description: "",
                                        },
                                    },
                                ],
                            },
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹98",
                        logoCtx: {
                            text: "BENEFITS",
                        },
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                        commsStyling: {},
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: "--",
                        },
                    },
                    ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {},
                cta: {
                    link: "swiggy://menu?restaurant_id=270&source=collection&query=Biryani",
                    text: "RESTAURANT_MENU",
                    type: "DEEPLINK",
                },
                widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food",
            },
            relevance: {
                type: "RELEVANCE_TYPE_ON_MENU_RETURN",
                sectionId: "MENU_RETURN_FOOD",
            },
        },
    },
    {
        card: {
            card: {
                "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                    id: "1004721",
                    name: "Mr Phillys American Cheeseburgers",
                    cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/c41fe099-61b1-45cd-af96-9eee8d87e119_1004721.jpg",
                    locality: "HSR",
                    areaName: "HSR",
                    costForTwo: "₹500 for two",
                    cuisines: [
                        "American",
                        "Biryani",
                        "Fast Food",
                        "Burgers",
                        "wrap",
                        "Salads",
                    ],
                    avgRating: 4.4,
                    parentId: "516779",
                    avgRatingString: "4.4",
                    totalRatingsString: "2.0K+",
                    promoted: true,
                    adTrackingId:
                        "cid=31586335~p=35~adgrpid=31586335#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1004721~plpr=COLLECTION~eid=ba40e974-ef53-4b86-b80a-7bf55d01f425~srvts=1754245071089~collid=83639",
                    sla: {
                        deliveryTime: 30,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "30-35 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                        nextCloseTime: "2025-08-04 05:00:00",
                        opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            textBased: {},
                            imageBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: "₹121 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                        logoCtx: {
                            text: "BENEFITS",
                        },
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                        commsStyling: {},
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: "--",
                        },
                    },
                    ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    campaignId: "31586335",
                },
                analytics: {},
                cta: {
                    link: "swiggy://menu?restaurant_id=1004721&source=collection&query=Biryani",
                    text: "RESTAURANT_MENU",
                    type: "DEEPLINK",
                },
                widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food",
            },
            relevance: {
                type: "RELEVANCE_TYPE_ON_MENU_RETURN",
                sectionId: "MENU_RETURN_FOOD",
            },
        },
    },
    {
        card: {
            card: {
                "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                    id: "121603",
                    name: "Kannur Food Point",
                    cloudinaryImageId: "dvfempk88bepceby8laz",
                    locality: "BTM Layout",
                    areaName: "Koramangala",
                    costForTwo: "₹300 for two",
                    cuisines: ["Kerala", "Chinese"],
                    avgRating: 4.2,
                    parentId: "20974",
                    avgRatingString: "4.2",
                    totalRatingsString: "64K+",
                    sla: {
                        deliveryTime: 21,
                        lastMileTravel: 3,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "3.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                        nextCloseTime: "2025-08-04 02:30:00",
                        opened: true,
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C",
                            },
                        ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            textBased: {},
                            imageBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            description: "",
                                            shortDescription:
                                                "options available",
                                            fontColor: "#7E808C",
                                        },
                                    },
                                ],
                            },
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹149",
                        logoCtx: {
                            text: "BENEFITS",
                        },
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                        commsStyling: {},
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: "--",
                        },
                    },
                    ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {},
                cta: {
                    link: "swiggy://menu?restaurant_id=121603&source=collection&query=Biryani",
                    text: "RESTAURANT_MENU",
                    type: "DEEPLINK",
                },
                widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food",
            },
            relevance: {
                type: "RELEVANCE_TYPE_ON_MENU_RETURN",
                sectionId: "MENU_RETURN_FOOD",
            },
        },
    },
    {
        card: {
            card: {
                "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                    id: "570178",
                    name: "Om Sai Ram Food Junction",
                    cloudinaryImageId: "fuqvwvihgfdmwtycyrqi",
                    locality: "HAL 2nd Stage",
                    areaName: " Indiranagar",
                    costForTwo: "₹1 for two",
                    cuisines: [
                        "Bengali",
                        "South Indian",
                        "Fast Food",
                        "Chinese",
                        "Biryani",
                        "Desserts",
                        "Kerala",
                        "Punjabi",
                        "Snacks",
                    ],
                    avgRating: 4.2,
                    parentId: "151799",
                    avgRatingString: "4.2",
                    totalRatingsString: "1.2K+",
                    promoted: true,
                    adTrackingId:
                        "cid=30997392~p=37~adgrpid=30997392#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=570178~plpr=COLLECTION~eid=c5d278b4-2f19-412f-8888-f36264801257~srvts=1754245071089~collid=83639",
                    sla: {
                        deliveryTime: 37,
                        lastMileTravel: 4.6,
                        serviceability: "SERVICEABLE",
                        slaString: "35-40 mins",
                        lastMileTravelString: "4.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                        nextCloseTime: "2025-08-10 00:00:00",
                        opened: true,
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C",
                            },
                        ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            textBased: {},
                            imageBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            description: "",
                                            shortDescription:
                                                "options available",
                                            fontColor: "#7E808C",
                                        },
                                    },
                                ],
                            },
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹125",
                        logoCtx: {
                            text: "BENEFITS",
                        },
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                        commsStyling: {},
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: "--",
                        },
                    },
                    ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    campaignId: "30997392",
                },
                analytics: {},
                cta: {
                    link: "swiggy://menu?restaurant_id=570178&source=collection&query=Biryani",
                    text: "RESTAURANT_MENU",
                    type: "DEEPLINK",
                },
                widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food",
            },
            relevance: {
                type: "RELEVANCE_TYPE_ON_MENU_RETURN",
                sectionId: "MENU_RETURN_FOOD",
            },
        },
    },
    {
        card: {
            card: {
                "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                    id: "330996",
                    name: "Savoury Seashell Restaurant - Kerala Style",
                    cloudinaryImageId: "5a8104559dd3cd7ebdc7676fbdf9e754",
                    locality: "Maruti Nagar",
                    areaName: "Btm Layout",
                    costForTwo: "₹450 for two",
                    cuisines: [
                        "Arabian",
                        "Indian",
                        "Chinese",
                        "Tandoor",
                        "Biryani",
                        "Seafood",
                        "Kerala",
                    ],
                    avgRating: 4.4,
                    parentId: "472352",
                    avgRatingString: "4.4",
                    totalRatingsString: "5.5K+",
                    sla: {
                        deliveryTime: 20,
                        lastMileTravel: 2,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "2.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                        nextCloseTime: "2025-08-04 01:00:00",
                        opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            textBased: {},
                            imageBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹99",
                        logoCtx: {
                            text: "BENEFITS",
                        },
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                        commsStyling: {},
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: "--",
                        },
                    },
                    ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {},
                cta: {
                    link: "swiggy://menu?restaurant_id=330996&source=collection&query=Biryani",
                    text: "RESTAURANT_MENU",
                    type: "DEEPLINK",
                },
                widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food",
            },
            relevance: {
                type: "RELEVANCE_TYPE_ON_MENU_RETURN",
                sectionId: "MENU_RETURN_FOOD",
            },
        },
    },
    {
        card: {
            card: {
                "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                    id: "1061641",
                    name: "KOMBOZZ by Thalappakatti",
                    cloudinaryImageId:
                        "FOOD_CATALOG/IMAGES/CMS/2025/5/20/133914a4-e08a-4b66-b4fd-cc93684587e4_7f4a401f-5e31-4705-b625-8360c87bfd72.jpg",
                    locality: "HSR Layout",
                    areaName: "BTM Layout",
                    costForTwo: "₹450 for two",
                    cuisines: [
                        "Chinese",
                        "Biryani",
                        "Desserts",
                        "South Indian",
                        "Beverages",
                        "North Indian",
                        "Combos",
                    ],
                    avgRating: 4.1,
                    parentId: "616357",
                    avgRatingString: "4.1",
                    totalRatingsString: "73",
                    promoted: true,
                    adTrackingId:
                        "cid=31613682~p=38~adgrpid=31613682#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1061641~plpr=COLLECTION~eid=4f279f41-56b6-4cb4-b2b6-16b2d85d94cc~srvts=1754245071089~collid=83639",
                    sla: {
                        deliveryTime: 44,
                        lastMileTravel: 4.4,
                        serviceability: "SERVICEABLE",
                        slaString: "40-50 mins",
                        lastMileTravelString: "4.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                        nextCloseTime: "2025-08-04 01:00:00",
                        opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textExtendedBadges: {},
                            textBased: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹50",
                        logoCtx: {
                            text: "BENEFITS",
                        },
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                        commsStyling: {},
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    isNewlyOnboarded: true,
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: "--",
                        },
                    },
                    ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    campaignId: "31613682",
                },
                analytics: {},
                cta: {
                    link: "swiggy://menu?restaurant_id=1061641&source=collection&query=Biryani",
                    text: "RESTAURANT_MENU",
                    type: "DEEPLINK",
                },
                widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food",
            },
            relevance: {
                type: "RELEVANCE_TYPE_ON_MENU_RETURN",
                sectionId: "MENU_RETURN_FOOD",
            },
        },
    },
    {
        card: {
            card: {
                "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                    id: "428",
                    name: "Biryani Pot ",
                    cloudinaryImageId: "stcwjsd9zpxnbi8nnq8t",
                    locality: "BTM Layout",
                    areaName: "BTM Layout",
                    costForTwo: "₹500 for two",
                    cuisines: ["Biryani"],
                    avgRating: 4.1,
                    parentId: "21798",
                    avgRatingString: "4.1",
                    totalRatingsString: "47K+",
                    sla: {
                        deliveryTime: 14,
                        lastMileTravel: 1.9,
                        serviceability: "SERVICEABLE",
                        slaString: "10-15 mins",
                        lastMileTravelString: "1.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                        nextCloseTime: "2025-08-04 03:00:00",
                        opened: true,
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C",
                            },
                        ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            fontColor: "#7E808C",
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            description: "",
                                            shortDescription:
                                                "options available",
                                        },
                                    },
                                ],
                            },
                            textBased: {},
                            imageBased: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                        logoCtx: {
                            text: "BENEFITS",
                        },
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                        commsStyling: {},
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: "3.5",
                            ratingCount: "541",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                    },
                    ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {},
                cta: {
                    link: "swiggy://menu?restaurant_id=428&source=collection&query=Biryani",
                    text: "RESTAURANT_MENU",
                    type: "DEEPLINK",
                },
                widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food",
            },
            relevance: {
                type: "RELEVANCE_TYPE_ON_MENU_RETURN",
                sectionId: "MENU_RETURN_FOOD",
            },
        },
    },
    {
        card: {
            card: {
                "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                    id: "230732",
                    name: "Mandya Gowdru Donne Biryani",
                    cloudinaryImageId:
                        "FOOD_CATALOG/IMAGES/CMS/2025/3/19/d69fe5c9-586a-4e69-a6d6-771a10aec333_81bc80ca-5d1a-465b-9b95-9e531861544a.jpg",
                    locality: "HSR Layout",
                    areaName: "Koramangala",
                    costForTwo: "₹249 for two",
                    cuisines: ["Biryani", "Chettinad", "Combos"],
                    avgRating: 4.3,
                    parentId: "14651",
                    avgRatingString: "4.3",
                    totalRatingsString: "8.7K+",
                    promoted: true,
                    adTrackingId:
                        "cid=31686344~p=39~adgrpid=31686344#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=230732~plpr=COLLECTION~eid=d6e53deb-d6f9-4896-b8a1-64874063bc0c~srvts=1754245071089~collid=83639",
                    sla: {
                        deliveryTime: 26,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                        nextCloseTime: "2025-08-03 23:59:00",
                        opened: true,
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C",
                            },
                        ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            textBased: {},
                            imageBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            description: "",
                                            shortDescription:
                                                "options available",
                                            fontColor: "#7E808C",
                                        },
                                    },
                                ],
                            },
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹89",
                        logoCtx: {
                            text: "BENEFITS",
                        },
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                        commsStyling: {},
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: "4.0",
                            ratingCount: "1.8K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                    },
                    ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    campaignId: "31686344",
                },
                analytics: {},
                cta: {
                    link: "swiggy://menu?restaurant_id=230732&source=collection&query=Biryani",
                    text: "RESTAURANT_MENU",
                    type: "DEEPLINK",
                },
                widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food",
            },
            relevance: {
                type: "RELEVANCE_TYPE_ON_MENU_RETURN",
                sectionId: "MENU_RETURN_FOOD",
            },
        },
    },
    {
        card: {
            card: {
                "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                    id: "375041",
                    name: "Andhra Gunpowder",
                    cloudinaryImageId: "janhgjevj4xnyyg5htnv",
                    locality: "6th Block",
                    areaName: "Koramangala",
                    costForTwo: "₹350 for two",
                    cuisines: ["Andhra", "Biryani", "South Indian"],
                    avgRating: 4.4,
                    parentId: "10496",
                    avgRatingString: "4.4",
                    totalRatingsString: "6.1K+",
                    sla: {
                        deliveryTime: 19,
                        lastMileTravel: 0.3,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "0.3 km",
                        iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                        nextCloseTime: "2025-08-04 01:00:00",
                        opened: true,
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId:
                                    "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png",
                                description: "Delivery!",
                            },
                        ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            textExtendedBadges: {},
                            textBased: {},
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            imageId:
                                                "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png",
                                            description: "Delivery!",
                                        },
                                    },
                                ],
                            },
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹44",
                        logoCtx: {
                            text: "BENEFITS",
                        },
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                        commsStyling: {},
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: "--",
                        },
                    },
                    ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {},
                cta: {
                    link: "swiggy://menu?restaurant_id=375041&source=collection&query=Biryani",
                    text: "RESTAURANT_MENU",
                    type: "DEEPLINK",
                },
                widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food",
            },
            relevance: {
                type: "RELEVANCE_TYPE_ON_MENU_RETURN",
                sectionId: "MENU_RETURN_FOOD",
            },
        },
    },
    {
        card: {
            card: {
                "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                    id: "81810",
                    name: "Tharavadu family restaurant",
                    cloudinaryImageId: "vysnsutwqhw2d2td7tjk",
                    locality: "Hosur Main Road",
                    areaName: "Bommanahalli",
                    costForTwo: "₹250 for two",
                    cuisines: ["Kerala", "Seafood", "Biryani", "South Indian"],
                    avgRating: 4.3,
                    parentId: "13245",
                    avgRatingString: "4.3",
                    totalRatingsString: "25K+",
                    promoted: true,
                    adTrackingId:
                        "cid=31657660~p=40~adgrpid=31657660#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=81810~plpr=COLLECTION~eid=8b675d35-0d44-4366-bfcd-99e94e53da55~srvts=1754245071089~collid=83639",
                    sla: {
                        deliveryTime: 28,
                        lastMileTravel: 4.7,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "4.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                        nextCloseTime: "2025-08-03 23:59:00",
                        opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            textBased: {},
                            imageBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹89",
                        logoCtx: {
                            text: "BENEFITS",
                        },
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                        commsStyling: {},
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: "--",
                        },
                    },
                    ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    campaignId: "31657660",
                },
                analytics: {},
                cta: {
                    link: "swiggy://menu?restaurant_id=81810&source=collection&query=Biryani",
                    text: "RESTAURANT_MENU",
                    type: "DEEPLINK",
                },
                widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food",
            },
            relevance: {
                type: "RELEVANCE_TYPE_ON_MENU_RETURN",
                sectionId: "MENU_RETURN_FOOD",
            },
        },
    },
    {
        card: {
            card: {
                "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                    id: "186080",
                    name: "The Biryani Life",
                    cloudinaryImageId: "r6hfgz7icl2rwdeimhjl",
                    locality: "NGK Complex",
                    areaName: "BTM 1st Stage",
                    costForTwo: "₹250 for two",
                    cuisines: [
                        "Biryani",
                        "Mughlai",
                        "Lucknowi",
                        "Hyderabadi",
                        "Kebabs",
                        "Desserts",
                        "Beverages",
                    ],
                    avgRating: 4.1,
                    parentId: "8496",
                    avgRatingString: "4.1",
                    totalRatingsString: "1.8K+",
                    sla: {
                        deliveryTime: 41,
                        lastMileTravel: 3,
                        serviceability: "SERVICEABLE",
                        slaString: "40-45 mins",
                        lastMileTravelString: "3.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                        nextCloseTime: "2025-08-04 00:00:00",
                        opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            textBased: {},
                            imageBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹159",
                        logoCtx: {
                            text: "BENEFITS",
                        },
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                        commsStyling: {},
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: "--",
                        },
                    },
                    ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {},
                cta: {
                    link: "swiggy://menu?restaurant_id=186080&source=collection&query=Biryani",
                    text: "RESTAURANT_MENU",
                    type: "DEEPLINK",
                },
                widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food",
            },
            relevance: {
                type: "RELEVANCE_TYPE_ON_MENU_RETURN",
                sectionId: "MENU_RETURN_FOOD",
            },
        },
    },
    {
        card: {
            card: {
                "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                    id: "523888",
                    name: "Biryani Blues",
                    cloudinaryImageId: "97377e54937c079fe269d744aa66274a",
                    locality: "7th Block",
                    areaName: "Koramangala",
                    costForTwo: "₹400 for two",
                    cuisines: ["Biryani", "Hyderabadi", "Lucknowi", "Kebabs"],
                    avgRating: 4.3,
                    parentId: "13813",
                    avgRatingString: "4.3",
                    totalRatingsString: "2.4K+",
                    sla: {
                        deliveryTime: 19,
                        lastMileTravel: 1.2,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "1.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                        nextCloseTime: "2025-08-04 03:00:00",
                        opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textExtendedBadges: {},
                            textBased: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹29",
                        logoCtx: {
                            text: "BENEFITS",
                        },
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                        commsStyling: {},
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: "4.1",
                            ratingCount: "332",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                    },
                    ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {},
                cta: {
                    link: "swiggy://menu?restaurant_id=523888&source=collection&query=Biryani",
                    text: "RESTAURANT_MENU",
                    type: "DEEPLINK",
                },
                widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food",
            },
            relevance: {
                type: "RELEVANCE_TYPE_ON_MENU_RETURN",
                sectionId: "MENU_RETURN_FOOD",
            },
        },
    },
    {
        card: {
            card: {
                "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                    id: "654965",
                    name: "Hyderabadi Biryani Hub",
                    cloudinaryImageId:
                        "FOOD_CATALOG/IMAGES/CMS/2024/5/17/69550922-c2cb-4bc2-adf3-34a6d1597be9_35c00581-1cf1-47ad-be49-86856939af2a.png",
                    locality: "BTM Layout",
                    areaName: "BTM Layout",
                    costForTwo: "₹250 for two",
                    cuisines: [
                        "Biryani",
                        "Indian",
                        "Chinese",
                        "Snacks",
                        "Fast Food",
                        "Beverages",
                    ],
                    avgRating: 4.1,
                    parentId: "1419",
                    avgRatingString: "4.1",
                    totalRatingsString: "1.6K+",
                    sla: {
                        deliveryTime: 16,
                        lastMileTravel: 1.9,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "1.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                        nextCloseTime: "2025-08-03 23:59:00",
                        opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textExtendedBadges: {},
                            textBased: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                        logoCtx: {
                            text: "BENEFITS",
                        },
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                        commsStyling: {},
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: "3.5",
                            ratingCount: "351",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                    },
                    ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {},
                cta: {
                    link: "swiggy://menu?restaurant_id=654965&source=collection&query=Biryani",
                    text: "RESTAURANT_MENU",
                    type: "DEEPLINK",
                },
                widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food",
            },
            relevance: {
                type: "RELEVANCE_TYPE_ON_MENU_RETURN",
                sectionId: "MENU_RETURN_FOOD",
            },
        },
    },
    {
        card: {
            card: {
                "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                    id: "31194",
                    name: "Tasty Magic",
                    cloudinaryImageId:
                        "FOOD_CATALOG/IMAGES/CMS/2024/11/3/257bf246-5737-4f40-b300-02b074a10be3_2356042e-9cf9-4c1e-b24b-ad7a9a53c944.jpg",
                    locality: "BTM Layout",
                    areaName: "BTM Layout",
                    costForTwo: "₹300 for two",
                    cuisines: [
                        "Chinese",
                        "Arabian",
                        "North Indian",
                        "Desserts",
                        "Biryani",
                        "South Indian",
                    ],
                    avgRating: 3.7,
                    parentId: "202073",
                    avgRatingString: "3.7",
                    totalRatingsString: "5.1K+",
                    sla: {
                        deliveryTime: 30,
                        lastMileTravel: 3,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "3.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                        nextCloseTime: "2025-08-03 23:59:00",
                        opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            textExtendedBadges: {},
                            textBased: {},
                            imageBased: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹77",
                        logoCtx: {
                            text: "BENEFITS",
                        },
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                        commsStyling: {},
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: "3.8",
                            ratingCount: "2.9K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                    },
                    ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {},
                cta: {
                    link: "swiggy://menu?restaurant_id=31194&source=collection&query=Biryani",
                    text: "RESTAURANT_MENU",
                    type: "DEEPLINK",
                },
                widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food",
            },
            relevance: {
                type: "RELEVANCE_TYPE_ON_MENU_RETURN",
                sectionId: "MENU_RETURN_FOOD",
            },
        },
    },
];
const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                {resList.map((restaurant) => {
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

const RestuarantCard = (props) => {
    console.log("props are ", props);
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
        resData?.card?.card?.info;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    cloudinaryImageId
                }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars </h4>
            <h4>{costForTwo}</h4>
            {/* <h4>{sla.deliveryTime}</h4> */}
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
