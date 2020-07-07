import React, { useState, FormEvent, ChangeEvent } from 'react';
import {
  FormContainer,
  FormInput,
  FormButton,
  UserName,
  Error,
} from './Form-Styles';
import firebase from '../../config/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../re-ducks/store';
import { setUser } from '../../re-ducks/user/actions';

const Form = () => {
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);
  const user = useSelector((state: RootState) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      if (!comment) {
        setError(true);
        return;
      }
      const time = Math.floor(new Date().getTime());
      firebase
        .firestore()
        .collection('chats')
        .add({
          user: user,
          comment: comment,
          time: time,
        })
        .then(() => {
          setComment('');
          setError(false);
        });
    } else {
      if (!userName) {
        setError(true);
        return;
      }
      dispatch(setUser(userName));
      setUserName('');
      setError(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (user) {
      setComment(e.target.value);
    } else {
      if (e.target.value.length > 10) {
        return setUserName(e.target.value.slice(0, 10));
      }
      setUserName(e.target.value);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {user && <UserName>ユーザー名：{user}</UserName>}
      <FormInput
        value={user ? comment : userName}
        onChange={handleChange}
        placeholder={user ? '　コメントを入力' : '　名前を入力 (※10文字以下)'}
      />
      <FormButton>{user ? '送信' : '入室'}</FormButton>
      {error && <Error>※1文字以上入力してください！</Error>}
    </FormContainer>
  );
};

export default Form;
