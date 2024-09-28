import React from 'react';
import s from './Message.module.css';
import { MessageType } from '../HW1';
import avatar from './../avatar.png';

// нужно создать правильный тип вместо any
// export type MessagePropsType = any
export type MessagePropsType = {
  message: MessageType;
};

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
  // console.log(props);
  return (
    <div id={'hw1-message-' + props.message.id} className={s.message}>
      <div className={s.imageAndText}>
        <img
          id={'hw1-avatar-' + props.message.id}
          // создаёт студент
          src={avatar}
          alt={'avatar'}
        />
        <div className={s.text}>
          <div id={'hw1-name-' + props.message.id} className={s.name}>
            {/*создаёт студент*/}
            {props.message.user.name} {/* Display the name */}
          </div>
          <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
            {/*создаёт студент*/}
            {props.message.message.text} {/* Display the message text */}{' '}
          </pre>
        </div>
      </div>
      <div id={'hw1-time-' + props.message.id} className={s.time}>
        {/*создаёт студент*/}
        22:15 {/* Display the time */}{' '}
      </div>
    </div>
  );
};

export default Message;

//
