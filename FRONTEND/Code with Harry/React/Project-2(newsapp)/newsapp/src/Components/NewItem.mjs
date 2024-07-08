import React, { Component } from 'react'

export class NewItem extends Component {
  render() {
    let {title,description,imageUrl,Url}=this.props
    return (
        <div className="card my-3" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://cdn3.parksmedia.wdprapps.disney.com/media/espnwwos/home/WWoS_Hero_768x438_Multi.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title.length>50?title.slice(0,50) +"...":title}</h5>
              <p className="card-text">{description.length>93?description.slice(0,93)+"...":description}</p>
              <a href={Url} target="_blank" className="btn btn-sm btn-outline-dark">Read more</a>
            </div>
        </div>
    )
  }
}

export default NewItem
