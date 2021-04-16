import React,{createContext} from 'react'
import userDB from '../Json-Data/Users.json'
import axios from 'axios'
export const StoreG = createContext()

const Store = (props) => {

    const userData = userDB.users

    const obj = {
        ad:'1rw',
        asdf:'1rw',
    }
    const sendImage = (data) => {
        // axios.post('/',)
        console.log(data)
    }
    return (
        <StoreG.Provider
            value={
                {
                    obj,
                    userData,
                    sendImage
                }
            }
        >
            {props.children}
        </StoreG.Provider>
    )
}

export default Store
