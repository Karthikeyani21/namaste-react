import React from "react";
import ReactDOM from "react-dom/client"


/*
    Header
      logo 
      nav items
    Body
       Search
       restaurant container
          restaurant cart
          - image
          - restro name, rating, cusine, delivery time
    footer
       copyrights
       link
       address
       contatct
*/


const Header = () => {
    return (
        <div className="header">
            <div className="header-detail">
                <img className="logo" width="80px" height="80px"
                     src="http://png.pngtree.com/png-vector/20220727/ourmid/pngtree-food-logo-png-image_6089719.png" 
                     alt="res-logo"></img>
                <h1>Devito</h1>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Search = () => <h1>Search Component</h1>

const resObj = [
  {
    "id": 1,
    "name": "The Brownie Studio",
    "imgUrl": "https://images.unsplash.com/photo-1606312619070-d48b4c652a52",
    "rating": 4.4,
    "cuisine": "Bakery, Desserts",
    "deliveryTime": "45 mins",
    "place": "Georgetown"
  },
  {
    "id": 2,
    "name": "Spice Garden",
    "imgUrl": "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    "rating": 4.2,
    "cuisine": "South Indian, Chinese",
    "deliveryTime": "30 mins",
    "place": "T Nagar"
  },
  {
    "id": 3,
    "name": "Pizza Hub",
    "imgUrl": "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
    "rating": 4.5,
    "cuisine": "Italian, Pizza",
    "deliveryTime": "35 mins",
    "place": "Anna Nagar"
  },
  {
    "id": 4,
    "name": "Biryani Palace",
    "imgUrl": "https://images.unsplash.com/photo-1604908176997-4313b4c8a5a6",
    "rating": 4.6,
    "cuisine": "Biryani, Mughlai",
    "deliveryTime": "40 mins",
    "place": "Velachery"
  },
  {
    "id": 5,
    "name": "Green Bowl",
    "imgUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    "rating": 4.1,
    "cuisine": "Healthy, Salads",
    "deliveryTime": "25 mins",
    "place": "Adyar"
  },
  {
    "id": 6,
    "name": "Burger Point",
    "imgUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    "rating": 4.3,
    "cuisine": "Fast Food, Burgers",
    "deliveryTime": "20 mins",
    "place": "OMR"
  },
  {
    "id": 7,
    "name": "Sushi World",
    "imgUrl": "https://images.unsplash.com/photo-1562158070-57f6d7b94dbe",
    "rating": 4.7,
    "cuisine": "Japanese, Sushi",
    "deliveryTime": "50 mins",
    "place": "Nungambakkam"
  },
  {
    "id": 8,
    "name": "Tandoori Nights",
    "imgUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    "rating": 4.0,
    "cuisine": "North Indian, Tandoor",
    "deliveryTime": "38 mins",
    "place": "Tambaram"
  },
  {
    "id": 9,
    "name": "Cafe Coffee Day",
    "imgUrl": "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "rating": 3.9,
    "cuisine": "Cafe, Beverages",
    "deliveryTime": "15 mins",
    "place": "Guindy"
  },
  {
    "id": 10,
    "name": "Ice Cream Delight",
    "imgUrl": "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    "rating": 4.5,
    "cuisine": "Ice Cream, Desserts",
    "deliveryTime": "20 mins",
    "place": "Besant Nagar"
  }
]

const RestroCards = ({resData}) => {
    return (
        <div className="res-cards">
            {/* <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/26/cc03b5e1-f0b3-46c7-855f-26f80e3c8f85_647001.JPG" /> */}
            <img className="res-img" src={resData.imgUrl} />
            <h2 className="pb-1">{resData.name}</h2>
            <div className="res-card-info pb-1">
                <h4>⭐ 4.4</h4>
                <p>{resData.deliveryTime}</p>
            </div>
            <p className="pb-1">{resData.cuisine}...</p>
            <p className="pb-1">{resData.place}</p>
        </div>
    )
}

const RestroContainer = () => {
    return (
        <div className="res-container">
           { resObj.map((restaurant) => {
                return (<RestroCards key={restaurant.id} resData={restaurant}/> )
            })}
        </div>
    )
}
const Body = () =>{
    return (
        <div>
            <Search/>
            <RestroContainer></RestroContainer>

        </div>
    )

}

const Footer = () => {
    return (
        <h1>Footer Component</h1>
    )
}


const AppLayout = () =>{
    return (
        <div>
          <Header/>

           <Body/>
           <Footer/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

// render component
root.render(<AppLayout/>)

