import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt='no photo' className={s.avatarImg}/>
            <div className={s.textInfoAndTime}>
                <div className={s.textInfo}>
                    <div className={s.textInfoTitle}>{props.name}</div>
                    <div className={s.textInfoMessage}>{props.message}</div>
                </div>
                <div className={s.textInfoTime}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
