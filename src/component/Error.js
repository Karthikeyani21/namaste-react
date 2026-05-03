import { useRouteError } from "react-router-dom"

const Error = () => {
    // Hook which captures error related to our app
    const error = useRouteError();
    console.log(error)
    return (
        <>
           <h1> {error.status} - {error.statusText}🤷‍♀️😶‍🌫️</h1>
           <h2> something went wrong....</h2>
        </>
    )
}

export default Error