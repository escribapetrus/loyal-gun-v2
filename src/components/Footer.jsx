import React from 'react'
import social from "../resources/social"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./Footer.scss"

function Footer() {
    return (
        <div className="Footer">
            {social.map(s =>
                <FontAwesomeIcon icon={s.icon} />
            )}
        </div>
    )
}

export default Footer
