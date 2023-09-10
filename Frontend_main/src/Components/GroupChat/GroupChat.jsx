import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Components.css";
import Popup from "./Popup";
import ScrollableFeed from "react-scrollable-feed";
import { useSelector } from "react-redux";

const GroupChat = ({ isopen, isAnonymous }) => {
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);

  const id = localStorage.getItem("userId");
  const docId = localStorage.getItem("doctorId");

  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const [anonymous, setAnonymous] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const openModal = () => {
    setIsPopupOpen(true);
  };

  const closeModal = () => {
    setIsPopupOpen(false);
  };

  const getMessages = async () => {
    let messages;
    try {
      messages = await axios.get("http://localhost:8100/groupChats");
    } catch (err) {
      console.log(err);
    }
    // console.log(messages.data.chats);
    const rendermsg = messages.data;
    setMessages(rendermsg.chats);
  };

  const handleChange = (e) => {
    if (e.target.value == "") {
      return;
    }
    setNewMsg(e.target.value);
  };

  const sendMessage = async () => {
    if (isUserLoggedIn === true) {
      let user;
      try {
        user = await axios.get(`http://localhost:8100/users/${id}`);
      } catch (err) {
        console.log(err);
      }

      const userData = user.data.user;
      let name;
      if (anonymous === true) {
        name = "Anonymous";
      } else {
        name = userData.name;
      }

      let sendMsg;
      try {
        sendMsg = await axios.post("http://localhost:8100/groupChats/add", {
          userId: id,
          userName: name,
          message: newMsg,
        });
      } catch (err) {
        console.log(err);
      }
      if (!sendMsg) {
        return console.log("unable to send message");
      }
      console.log(sendMsg);

      getMessages();
    } else if (isAdminLoggedIn === true) {
      let doctor;
      try {
        doctor = await axios.get(`http://localhost:8100/doctors/${docId}`);
      } catch (err) {
        console.log(err);
      }
      // console.log(doctor)

      const doctorData = doctor.data.doctorData;
      // console.log(doctorData)
      let name;
      if (anonymous === true) {
        name = "Anonymous";
      } else {
        name = doctorData.name;
      }
      console.log(docId);
      let sendMsg;
      try {
        sendMsg = await axios.post("http://localhost:8100/groupChats/add", {
          userId: docId,
          userName: name,
          message: newMsg,
        });
      } catch (err) {
        console.log(err);
      }
      if (!sendMsg) {
        return console.log("unable to send message");
      }
      console.log(sendMsg);

      getMessages();
    }
  };

  useEffect(() => {
    getMessages();
  }, [ ]);

  return (
    <div className="container-fluid group-chat-container">
      <div className="row chat-row justify-content-center">
        <h2 className="comm mt-4">Community Chat</h2>
        <div className="col-10 chat-col my-5">
          <div className="row chat-div">
            <ScrollableFeed className="scroll-feed">
              <div className="col-12 chats">
                {messages.map((p) => {
                  const isUserId = p.userId == (id || docId);
                  return (
                    <span
                      className={`chat-message ${
                        isUserId ? "user-message" : "other-message"
                      }`}
                    >
                      <b>{p.userName}</b> {p.message}
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
                  placeholder="Type a message"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  name="message"
                  onChange={handleChange}
                />
                <button
                  className="btn send-btn "
                  type="button"
                  onClick={sendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Popup
        isOpen={isPopupOpen}
        closeModal={closeModal}
        onYes={(value) => setAnonymous(value)}
        onNo={(value) => setAnonymous(value)}
      />
    </div>
  );
};

export default GroupChat;
