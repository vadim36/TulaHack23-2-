import React from 'react'

export default function ChatMessage({messageData}) {
    return (
        <li>
            {messageData.body}
        </li>
    );
}