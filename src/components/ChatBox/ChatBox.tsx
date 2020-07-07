import React, { useEffect, useState } from 'react';
import firebase from './../../config/firebase';
import Chat from './Chat';
import { ChatTypes } from '../../Types';
import { ChatBoxContainer, ChatBoxHeader } from './ChatBox-styles';

const ChatBox = () => {
  const [chats, setChats] = useState<any>([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('chats')
      .orderBy('time', 'desc')
      .onSnapshot((snapshot) => {
        const chatsArray = snapshot.docs.map((doc) => {
          return doc.data()
        });
        setChats(chatsArray)
      });
  }, []);
  return (
    <>
      <ChatBoxHeader>- Chat Log -</ChatBoxHeader>
      <ChatBoxContainer>
        {chats &&
          chats.map((chat: ChatTypes,index: number) => {
            return <Chat index={chats.length-index} key={chat.comment + chat.time} chat={chat} />;
          })}
      </ChatBoxContainer>
    </>
  );
};

export default ChatBox;
