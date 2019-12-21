import React from 'react'

function ContactLink({link, name}) {
    return (
        <a href={link}>
            {name}                    
        </a>
    )
}

export default ContactLink
