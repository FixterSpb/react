import React from 'react';
import {Message} from './components';
import styles from './MessageList.module.css'

export const MessageList = ({messages, userName}) => {
    return (
    <div className={styles.content} >
        {messages.map((message, idx) =>
            <Message message={message} isPrimary={message.author === userName} key={idx}/>
        )}
    </div>
)

};
