import React, { useState } from "react";
import Headbar from "../components/Headbar";
import Chatui from "../components/Chatui";
import Searchbar from "../components/Searchbar";
import { createContext } from "react";

export const MsgContext = createContext();

const Chatpage = () => {
    const [msg, setMsg] = useState([]);

    return (
        <MsgContext.Provider 
            value={{
                msg, setMsg
            }}
        >
            <div className="chat-section">
                <Headbar />
                <Chatui />
                <Searchbar />
            </div>
        </MsgContext.Provider>
    );
};

export default Chatpage;