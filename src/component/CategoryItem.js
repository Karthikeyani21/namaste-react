

const CategoryItem = ({info}) => {
    console.log(info)
    return (
        <div>
            {info.map((item, index) => {
                const itemInfo = item.card.info
                return (
                    <div className="p-4 border-b-2" key={index}>
                        <h2>{itemInfo.name}</h2>
                        <h2>${itemInfo.price/100}</h2>
                        <h2 className="text-xs">{itemInfo.description}</h2>
                    </div>
                )

            })}
        </div>
    )
}

export default CategoryItem;