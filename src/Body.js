import React from 'react'
import './Body.css'

import Header from './Header'


function Body({spotify}) {
    return (
        <div className="body">
            <Header spotify={spotify} />
            
            <div className="bodyInfo">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440" alt="" />
                <div className="bodyInfoText">

                </div>
            </div>
        </div>
    )
}

export default Body
