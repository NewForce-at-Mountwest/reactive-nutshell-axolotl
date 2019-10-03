import React, { Component } from "react";

import { Link } from "react-router-dom";

class NewsCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            {" "}
            <span className="card-title">{this.props.newsProp.title}</span>
          </h3>
          <br>
          </br>
          <p>{this.props.newsProp.synopsis}</p>
          <a target="_blank" rel="noopener noreferrer" href={this.props.newsProp.url}>Follow Link</a>
          {/* <p>URL: {this.props.newsProp.url}</p> */}
          <br>
          </br>
          <br>
          </br>
          <Link to={`/news/${this.props.newsProp.id}/edit`}>
            <button className="btn btn-primary mr-1">Edit</button>
          </Link>
{/* <br>
</br>
<br>
</br> */}
          <button className="btn btn-primary mr-1"
            onClick={() => this.props.deleteNewsProp(this.props.newsProp.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default NewsCard;
