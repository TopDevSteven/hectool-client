import React from "react";
import { ReactComponent  as BotIcon} from "../assets/icons/botmsg/bot-avatar.svg";
import { SyncLoader } from "react-spinners";

const Botmsg = ({content}) => {
    return (
        <div className="bot-msg">
            <div className="bot-avatar-box">
                <span>
                    <BotIcon />
                </span>
            </div>
            <div className="bot-content-box">
                {
                    content === "LOADING" 
                        ? <p><SyncLoader color="#394867" size={12}/></p> 
                        : content.split("\n").map((item, idx) => 
                            <p key={idx} dangerouslySetInnerHTML={{ 
                                __html: item.replace(/(https:\/\/[^\s]+)/g, (match) => 
                                    `<a href="${match}" target="_blank" rel="noopener noreferrer">${match}</a>`
                                )
                            }} />
                        )
                }
            </div>
        </div>
    );
};

export default Botmsg;