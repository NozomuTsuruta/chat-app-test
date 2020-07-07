import styled from 'styled-components';

export const ChatBoxContainer = styled.div`
  height: 60%;
  width: 100%;
  overflow-y: scroll;
`;

export const ChatBoxHeader = styled.h2`
  font-size: 40px;
  font-family: 'Montserrat Subrayada', sans-serif;
  text-align: center;
  box-shadow: 0px 11px 3px -3px rgba(0, 0, 0, 0.6);
  border-radius: 20px 20px 0 0;
  margin: 0;
  margin-bottom: 9px;
  background: linear-gradient(
    to bottom,
    rgba(80, 80, 80, 0.7),
    rgba(80, 80, 80, 0.2) 90%
  );
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(80, 80, 80, 0.2);
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ChatTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ChatText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  background-color: rgba(80, 80, 80, 0.2);
  border-radius: 5px;
  padding: 10px;
`;
