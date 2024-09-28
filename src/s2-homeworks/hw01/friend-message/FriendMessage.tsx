import React from 'react';
import s from './FriendMessage.module.css';
import { MessageType } from '../HW1';
import avatar from './../avatar.png';

export type FriendMessagePropsType = {
  message: MessageType;
};

// создать тип вместо any и отобразить приходящие данные
// const FriendMessage = (props: any) => {
const FriendMessage = (props: FriendMessagePropsType) => {
  return (
    <div id={'hw1-friend-message-' + props.message.id} className={s.friendMessage}>
      <div className={s.friendImageAndText}>
        <img
          id={'hw1-friend-avatar-' + props.message.id}
          // создаёт студент

          src={avatar}
          alt={'friend avatar'}
        />
        <div className={s.friendText}>
          <div id={'hw1-friend-name-' + props.message.id} className={s.friendName}>
            {/*создаёт студент*/}
            {props.message.user.name} {/* Display the friend's name */}{' '}
          </div>
          <pre id={'hw1-friend-text-' + props.message.id} className={s.friendMessageText}>
            {/*создаёт студент*/}
            {props.message.message.text} {/* Display the friend's message text */}{' '}
          </pre>
        </div>
      </div>
      <div id={'hw1-friend-time-' + props.message.id} className={s.friendTime}>
        {/*создаёт студент*/}
        22:10 {/* Display the friend's time */}{' '}
      </div>
    </div>
  );
};

export default FriendMessage;

//
