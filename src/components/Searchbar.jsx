import React, { useState } from "react";
import { ReactComponent as SendIcon } from "../assets/icons/search/submit.svg";
import { useContext } from "react";
import { MsgContext } from "../pages/Chatpage";

const Searchbar = () => {
    const {msg, setMsg} = useContext(MsgContext);
    const [query, setQuery] = useState("");

    const handleSubmit = async () => {
        setMsg((prevMsg) => [
            ...prevMsg,
            {
                user: 'User',
                content: query
            },
            {
                user: 'Bot',
                content: 'LOADING'
            }
        ])

        setQuery("");

        try {
            const res = await fetch('/api/chat', {
                method: "POST",
                body: JSON.stringify({query})
            })
            
            if (res.ok) {
                setQuery("")
                const response = await res.json();
                setMsg(prevMsg => [
                    ...prevMsg.filter((item) => item.content !== "LOADING"),
                    {user: "Bot", content: response.message}
                ]);
            }
        } catch (err) {
            setMsg(prevMsg => [
                ...prevMsg.filter((item) => item.content !== "LOADING"),
                {user: "Bot", content: "Net Error"}
            ]);
        }

        setMsg(prevMsg => prevMsg.filter((item) => item.content !== "LOADING"))

    };

    return (
        <div className="search-container">
            <input className="search-input" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <div className="submit-btn" onClick={handleSubmit}>
                <span>
                    <SendIcon />
                </span>
            </div>
        </div>
    );
};

export default Searchbar;