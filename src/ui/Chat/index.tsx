 // src/components/Chat.tsx
import React, { useEffect, useState } from "react";
import { useSocket } from "../../hooks/useSocket";

const Chat: React.FC = () => {
  const socket = useSocket();
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      setMessages((prevMessages) => [...prevMessages, "You have joined the chat"])
    })


    socket.on("user-joined", (data: any) => {
      setMessages((prevMessages) => [...prevMessages, data.message])
    })

    socket.on("user-left", (data: any) => {
      setMessages((prevMessages) => [...prevMessages, data.message])
    })


    socket.on("message", (msg: string) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("newMessage");
      socket.off("user-left");
      socket.off("user-joined");
      socket.off("connect");
    };
  }, [socket]);

  const sendMessage = () => {
    if (socket && message.trim() !== "") {
      socket.emit("newMessage", message);
      setMessage(""); // Clear input after sending
    }
  };

  const clearMessage = () => {
    setMessages([])
  };

  return (
    <div>
      <h1>Chat Room</h1>
      <div style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "scroll" }}>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") sendMessage();
        }}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
      <button onClick={clearMessage}>Clear</button>
    </div>
  );
};

export default Chat;
