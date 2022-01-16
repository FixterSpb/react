import React from 'react';
import styles from './Message.module.css'

export const Message = ({message, isPrimary}) => {
    console.log(message);
    return (
        <div className={[
            styles.content,
            styles.primary,
            isPrimary ? styles.primary : styles.secondary
        ].join(' ')}>
            <small>{message.author}</small>
            <p className={styles.messageText}>
               {message.text}
            </p>
        </div>
    )
};