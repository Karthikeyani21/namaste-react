const RestroCards = ({resData}) => {
    return (
        <div className="res-cards">
            {/* <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/26/cc03b5e1-f0b3-46c7-855f-26f80e3c8f85_647001.JPG" /> */}
            <img className="res-img" src={resData.imgUrl} />
            <h2 className="pb-1">{resData.name}</h2>
            <div className="res-card-info pb-1">
                <h4 style={{lineHeight: 1}}> {Array(4).forEach((val) => ("⭐"))} ⭐ {resData.rating}</h4>
                <p>{resData.deliveryTime}</p>
            </div>
            <p className="pb-1">{resData.cuisine}...</p>
            <p className="pb-1">{resData.place}</p>
        </div>
    )
}

export default RestroCards;