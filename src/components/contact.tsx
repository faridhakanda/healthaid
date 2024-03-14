import React from 'react'
import Image from 'next/image'

const Contact = () => {
    const images = [
        {
            id: 1,
            title: 'Telegram',
            url: '/telegram.png'
        },
        {
            id: 2,
            title: 'X',
            url: '/tweet.png'
        },
        {
            id: 3,
            title: 'Github',
            url: '/github.png'
        },
        {
            id: 4,
            title: 'Youtube',
            url: '/youtube.png'
        },
        {
            id: 5,
            title: 'Linkedin',
            url: '/linkedin.png'
        }
    ];
  return (
    <div className="justify-center flex mx-auto gap-4">
        {
            images.map((image) => {
                return (
                    <Image key={image.id} src={image.url} alt={image.title} width="32" height="32" />
                )
            })
        }
    
    </div>
  )
}

export default Contact
