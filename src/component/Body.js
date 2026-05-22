import { useContext } from "react"
import { RestroContainer } from "./RestroContainer"
import Search from "./Search"
import UserContext from "../utils/UserContext"

export const Body = () =>{
    const {loggedInUser, setUserName} = useContext(UserContext);

    return (
        <div>
            {/* <input className="border"
               value={loggedInUser}
               onChange={(e)=> {
                  setUserName(e.target.value)
               }}
            /> */}

            <Search/>
            <RestroContainer></RestroContainer>
        </div>
    )
}