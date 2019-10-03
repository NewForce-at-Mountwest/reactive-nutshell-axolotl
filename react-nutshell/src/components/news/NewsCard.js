import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewsCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Title:{" "}
            <span className="card-title">{this.props.newsProp.title}</span>
          </h3>
          <p>Synopsis: {this.props.newsProp.synopsis}</p>
          <p>URL: {this.props.newsProp.url}</p>
          <Link to={`/news/${this.props.newsProp.id}`}>
            <button>Delete</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NewsCard;
