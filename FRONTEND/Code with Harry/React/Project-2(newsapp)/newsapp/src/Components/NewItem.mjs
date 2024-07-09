import React from 'react'
import "./NewItem.css"

const NewItem=(props)=> {
    let { title, description, imageUrl, Url, author, date, source } =props
    return (
      <div className="card my-3 " style={{ width: "22rem"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"52%",marginTop:"2.9%"}}>
          {source.name}
        </span>
        <img src={!imageUrl ? "https://cdn3.parksmedia.wdprapps.disney.com/media/espnwwos/home/WWoS_Hero_768x438_Multi.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.length > 50 ? title.slice(0, 50) + "..." : title}</h5>
          <p className="card-text">{description.length > 93 ? description.slice(0, 93) + "..." : description}</p>
          <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author}  on {new Date(date).toGMTString()}</small></p>
          <a href={Url} target="_blank" className="btn btn-sm btn-outline-dark">Read more</a>
        </div>
      </div>
    )
  
}

export default NewItem
