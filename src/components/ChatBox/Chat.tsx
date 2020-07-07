import React, { FC } from 'react';
import { ChatTypes } from '../../Types';
import { ChatContainer, ChatTitle, ChatText } from './ChatBox-styles';
import Moment from 'react-moment';

type Props = {
  chat: ChatTypes;
  index: number;
};

const Chat: FC<Props> = ({ chat, index }) => {
  return (
    <ChatContainer>
      <ChatTitle>
        {index}:{chat.user}
        <Moment toNow>{chat.time}</Moment>
      </ChatTitle>
      <ChatText>{chat.comment}</ChatText>
    </ChatContainer>
  );
};

export default Chat;
