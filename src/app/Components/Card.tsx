import React from 'react';
import Image from "next/image";


interface Card{
    title: string , description :string, link?:string, Url?:string ,backgroundColor?:string , image:string ,link2?:string ,
}
const Card = ({title , description , link ,link2,Url, backgroundColor,image }:Card) => {
  return (
    <>
        {/* Card 1 */}
        <div className="card" data-aos="fade-up" style={{ backgroundColor}}>
          <Image
            src={image}
            alt="CV"
            width={100}
            height={100}
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{description}</p>
            <p className="card-text2">{link2}</p>
            <a  href={Url}
              className="card-link"
              style={{backgroundColor}}
            >
             {link}
            </a>
           
          </div>
          </div>
          </>

  )
}

export default Card
