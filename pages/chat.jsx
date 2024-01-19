import React from "react";
import dynamic from 'next/dynamic'


const ChatWindow = dynamic(() => import("./components/Chats/ChatsComponent"), {
  ssr: true,
});

const Chat = () => {
  return (
    <ChatWindow></ChatWindow>
  );
};

export default Chat;