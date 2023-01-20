import { useState, createContext, useContext } from "react";
import { UserContext } from "./App";
function Home()
{
    const name = useContext(UserContext);

    return(
        <>
            <h2>{name}</h2>
        </>
    )
}

export default Home;