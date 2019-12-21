import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./Footer.scss"

function Footer(props) {
    return (
        <div className="Footer">
            {props.socialLinks.map(s =>
                <a key={s.id} href={s.link}>
                    <FontAwesomeIcon icon={s.icon} />
                </a>
            )}
        </div>
    )
}

export default Footer
