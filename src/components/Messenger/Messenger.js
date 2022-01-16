import React from 'react';
import {Message} from './components';
import styles from './Messenger.module.css'

export const Messenger = ({messages}) => {
    return (
    <div className={styles.content} >
        {messages.map((text, idx) =>
            <Message text={text} isPrimary={idx % 2 === 0} key={idx}/>
        )}
    </div>
)

};
