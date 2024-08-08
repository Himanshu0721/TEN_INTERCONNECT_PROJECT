import React, { useState } from 'react';
import "../../../pages.css/adminchat/input.css";
import {useDispatch, useSelector} from "react-redux";
import { add_messages } from "../../../redux/actions/messagesActions";

const Input = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const selectedUser = useSelector((state) => state.chat.selectedUser);

    const handleSend = (e) => {
        e.preventDefault();
        if (message.trim()) {
            dispatch(add_messages(message));
            setMessage("");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend(e);
        }
    };

    return (
        <div className="input-wrapper">
            <input
                type="text"
                className="input-field"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown} // Add this line
                placeholder="Type your message..."
            />
            <button type="submit" className="send-button" onClick={handleSend}>Send</button>
        </div>
    );
};

export default Input;
