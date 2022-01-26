import React, {useEffect, useRef, useState} from "react";
import styles from './Messenger.module.css';
import {MessageList} from "./components";

const DEFAULT_MESSAGE_BOT = 'Сообщение бота';
const USER_NAME = 'user';
const BOT_NAME = 'bot';
const TIMEOUT = 1500;
let timeoutId = null;

export function Messenger() {

    const [messageList, setMessageList] = useState([]);
    const [messageText, setMessageText] = useState('');
    const inputRef = useRef(null);

    const sendMessage = () => {
        if (messageText.trim().length === 0) return

        setMessageList([...messageList, {
            author: USER_NAME,
            text: messageText
        }]);
        setMessageText('');
    }

    const sendMessageFromBot = () => {
        setMessageList([...messageList, {
            author: BOT_NAME,
            text: DEFAULT_MESSAGE_BOT
        }])
    }

    useEffect(() => {
        if (messageList.length === 0) return;
        if (messageList[messageList.length - 1].author === 'bot') return;

        timeoutId = setTimeout(sendMessageFromBot, TIMEOUT);

        return () => clearTimeout(timeoutId);

    }, [messageList]);


    const inputMessageHandler = ({target}) => { setMessageText(target.value) }

    useEffect(() => {
        inputRef.current?.focus();
    })

    return (
        <div className={styles.block}>
            <MessageList messages={messageList} userName={USER_NAME}/>
            <div className={styles.messageForm}>
                <textarea
                    className={styles.messageText}
                    value={messageText}
                    onChange={inputMessageHandler}
                    ref={inputRef}
                />
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    )
}