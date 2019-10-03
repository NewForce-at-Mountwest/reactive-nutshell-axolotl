import React, { Component } from "react";
//import the components we will need
import NewsCard from "./NewsCard";
import NewsManager from "../../modules/NewsManager";

class NewsList extends Component {
  //define what this component needs to render
  state = {
    news: []
  };

  deleteNews = id => {
    NewsManager.softDelete(id)
      .then(NewsManager.getAll)
      .then(parsedNews => {
        this.setState({
          news: parsedNews
        });
      });
  };

  handleDelete = () => {
    //invoke the delete function in NewsManger and re-direct to the news list.
    this.setState({loadingStatus: true})
    NewsManager.softDelete(this.props.newsId)
    .then(() => this.props.history.push("/news"))
}

  componentDidMount() {
    // console.log("NEWS LIST: ComponentDidMount");
    //getAll from NewsManager and hang on to that data; put it in state
    NewsManager.getAll().then(newsFromDatabase => {
      this.setState({
        news: newsFromDatabase
      });
    });
  }

  render() {
    // console.log("NEWS LIST: Render");

    return (
        <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/news/new");
            }}
          >
            New Article
          </button>
        </section>
        <div className="container-cards">
          {this.state.news.map(singleNews =>
            !singleNews.archived ? (
              <NewsCard
                deleteNewsProp={this.deleteNews}
                key={singleNews.id}
                newsProp={singleNews}
              />
            ) : null
          )}
        </div>
      </>
    );
  }
}

export default NewsList;
