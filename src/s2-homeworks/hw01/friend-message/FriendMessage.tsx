import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

type FriendMessagePropsType={
    message:MessageType
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsType) => {
    const{message}=props
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={message.user.avatar}
                    alt="avatar"
                    className={s.friendAvatar}
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {message.user.name}
                        {/*создаёт студент*/}

                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {message.message.text}
                        {/*создаёт студент*/}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {message.message.time}
                {/*создаёт студент*/}

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
