import React, { Component } from "react";
import NewsManager from "../../modules/NewsManager";
// import "./NewsForm.css"

class NewsEditForm extends Component {
  //set the initial state
  state = {
    title: "",
    synopsis: "",
    url: "",
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  componentDidMount() {
    NewsManager.getOne(this.props.match.params.newsId).then(news => {
      this.setState({
        title: news.title,
        synopsis: news.synopsis,
        url: news.url,
        loadingStatus: false
      });
    });
  }

  updateExistingNews = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedNews = {
      id: this.props.match.params.newsId,
      title: this.state.title,
      synopsis: this.state.synopsis,
      url: this.state.url
    };

    NewsManager.update(editedNews).then(() => this.props.history.push("/news"));
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="title"
                value={this.state.title}
              />
              <label htmlFor="title">Title</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="synopsis"
                value={this.state.synopsis}
              />
              <label htmlFor="synopsis">Synopsis</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="url"
                value={this.state.url}
              />
              <label htmlFor="url">URL</label>
            </div>

            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingNews}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default NewsEditForm;
