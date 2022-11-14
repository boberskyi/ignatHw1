import React from 'react'
import c from './Message.module.css'

type MessageProps = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageProps) {
    return (
        <div className={c.message}>
            <img className={c.image} src={props.avatar} alt="Avatar"/>
            <div className={c.message_right}>
                <h2 className={c.message__heading}>{props.name}</h2>
                <p className={c.message__txt}>{props.message}</p>
                <span className={c.messageTime}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
