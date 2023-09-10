import React, { useState, useEffect } from "react";
import "../Components.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ScrollableFeed from "react-scrollable-feed";
const OneToOneChat = () => {
  const [messages, setMessages] = useState([]);
  const [sendMsg, setSendMsg] = useState("");
  const params = useParams();
  const id1 = localStorage.getItem("userId");
  const id2 = params.id;

  const personalMessages = async () => {
    let prmsg;
    try {
      prmsg = await axios.get(`http://localhost:8100/oneChats/${id1}/${id2}`);
    } catch (err) {
      console.log(err);
    }
    // console.log(prmsg.data);
    return prmsg.data;
  };

  const handleChange = (e) => {
    setSendMsg(e.target.value);
  };

  const sendMessage = async () => {
    let sentMsg;
    try {
      sentMsg = await axios.post("http://localhost:8100/oneChats/send", {
        sender: id1,
        receiver: id2,
        content: sendMsg,
      });
    } catch (err) {
      console.log(err);
    }
    // console.log(sendMsg)
  };

  useEffect(() => {
    personalMessages().then((p) => {
      setMessages(p.msgs);
    });
    // console.log(messages);
  }, [personalMessages()]);

  return (
    <div className="container-fluid group-chat-container">
      <div className="row chat-row justify-content-center">
        <h2 className="per-chat mt-4">Personalised Chat</h2>
        <div className="col-10 chat-col my-5">
            <div className="row chat-div">
          <ScrollableFeed className="scroll-feed">
            <div className="col-12 chats">
              {messages.map((p) => {
                const isUserId = p.senderId == id1;
                return (
                  <span
                    className={`chat-message ${
                      isUserId ? "user-message" : "other-message"
                    }`}
                  >
                    {" "}
                    {p.content}
                  </span>
                );
              })}
            </div>
            
          </ScrollableFeed>
         
          <div className="col-12">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Type a message....."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              name="message"
              onChange={handleChange}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={sendMessage}
            >
              Send
            </button>
            <Link to='/feedback'><button type="button" class="btn btn-success">End Chat</button></Link>
          </div>
         

        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default OneToOneChat;
