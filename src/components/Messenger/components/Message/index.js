import React from 'react';
import styles from './Message.module.css'

export const Message = ({text, isPrimary}) => {
    return (
        <div className={[
            styles.content,
            styles.primary,
            isPrimary ? styles.primary : styles.secondary
        ].join(' ')}>{text}
        </div>
    )
};