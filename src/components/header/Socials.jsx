import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsSpotify} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
const Socials = () => {
  return (
    <div className='socials'>
        <a href="https://www.instagram.com/zaeedhnpr/" target="_blank"><BsInstagram/></a>
        <a href="https://open.spotify.com/artist/6oKe9ykerZRf9ghCORfjbQ?si=RYwIVaDKS8mdwv3pLAfTjw" target="_blank"><BsSpotify/></a>
        <a href="https://www.youtube.com/channel/UCVwm964aZ-wWgQ9V0NKcrcw/featured" target="_blank"><BsYoutube/></a>
        <a href="https://www.facebook.com/Zaeed-110399764811848" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default Socials