import React from 'react';

interface Props {
  username: string;
  text: string;
}

const Message = ({ username, text }: Props) => {
  return (
    <div className='message'>
      <p className='message-username'>{username}</p>
      <p className='message-text'>{text}</p>
    </div>
  );
};

export default Message;
