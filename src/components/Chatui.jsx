import React, { useEffect, useRef } from "react";
import Usermsg from "../commons/Usermsg";
import Botmsg from "../commons/Botmsg";
import { MsgContext } from "../pages/Chatpage";
import { useContext } from "react";

const Chatui = () => {
    const { msg } = useContext(MsgContext);
    const chatuiContainerRef = useRef(null);

    useEffect(() => {
        // Check if the chatui container overflows, and if so, scroll down with animation
        const container = chatuiContainerRef.current;
        if (container.scrollHeight > container.clientHeight) {
            container.scrollTo({
                top: container.scrollHeight - container.clientHeight,
                behavior: "smooth",
            });
        }
    }, [msg]);

    return (
        <div className="chatui-container" ref={chatuiContainerRef}>
            {msg?.map((item, idx) =>
                item.user === "User" ? (
                    <Usermsg key={idx} content={item.content} />
                ) : (
                    <Botmsg key={idx} content={item.content} />
                )
            )}
        </div>
    );
};

export default Chatui;