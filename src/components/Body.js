// import React, { useEffect, useState } from "react";
// import RestaurantCard from "./RestaurantCard";
// import restList from "../utils/mockData";
// // import { swiggy_api_URL } from "../utils/constant";
// import Shimmer from "./Shimmer";

// const Body = () => {
//   const [listOfRestaurants, setListOfRestaurants] = useState(restList);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const data = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING");
//       const json = await data.json();
      
//       console.log(json);

//       if (json && json.data && json.data.cards && json.data.cards[2]) {
//         const restaurantData = json.data.cards[2].data.data.cards;
//         setListOfRestaurants(restaurantData);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
     
//       setListOfRestaurants([]);
//     }
//   };

//   if (listOfRestaurants.length === 0) {
//     return <Shimmer />;
//   }

//   return (
//     <div className="body">
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = listOfRestaurants.filter(
//               (res) => res.data.avgRating > 4
//             );
//             setListOfRestaurants(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>
//       <div className="res-container">
//         {listOfRestaurants.map((restaurant) => (
//           <RestaurantCard
//             key={restaurant.data.id}
//             cloudinaryImageId={restaurant.data.cloudinaryImageId}
//             name={restaurant.data.name}
//             cuisines={restaurant.data.cuisines}
//             deliveryTime={restaurant.data.deliveryTime}
//             costForTwo={restaurant.data.costForTwo}
//             avgRating={restaurant.data.avgRating}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;


import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import restList from "../utils/mockData";
// import { swiggy_api_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);

    // const fetchData = async () => {
    //     try {
    //       const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING");
    //       const json = await response.json();
    //       console(json.data.cards.card.card.imageGridCards.info[0])
    //       console.log(json);
      
    //       if (json && json.data && json.data.cards && json.data.cards[2] && json.data.cards[2].data && json.data.cards[2].data.data && json.data.cards[2].data.data.cards) {
    //         const restaurantData = json.data.cards[2].data.data.cards;
    //         setListOfRestaurants(restaurantData);
    //       } else {
    //         // Handle unexpected response format
    //         console.error("Unexpected response format:", json);
    //         setListOfRestaurants([]);
    //       }
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //       setListOfRestaurants([]);
    //     }
    //   };
      
    const fetchData = async () => {
      
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        // console(json.data.cards.card.card.imageGridCards.info[0]);
        const data1 =json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
    
        setListOfRestaurants(data1);
        console.log(data1);
    };
  
    if (listOfRestaurants.length === 0) {
      return <Shimmer />;
    }
  
    return (
      <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.data.id}
              cloudinaryImageId={restaurant.data.cloudinaryImageId}
              name={restaurant.data.name}
              cuisines={restaurant.data.cuisines}
              deliveryTime={restaurant.data.deliveryTime}
              costForTwo={restaurant.data.costForTwo}
              avgRating={restaurant.data.avgRating}
            />
          ))}
        </div>
      </div>
    );
  };
  
export default Body;

