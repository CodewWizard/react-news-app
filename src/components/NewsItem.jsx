import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <>
        <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={imgUrl===null?"https://www.techexplorist.com/wp-content/uploads/2023/07/bunch-drops-liquid.jpg":imgUrl}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} className="btn btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
