import React, { Component } from "react";
import NewsManager from "../../modules/NewsManager";
// import "./NewsForm.css";

class NewsForm extends Component {
  state = {
    title: "",
    synopsis: "",
    url: "",
    date: "",
    loadingStatus: false
  };

  //   componentDidMount() {
  //     NewsManager.getAll().then(parsedNews => {
  //       this.setState({ newss: parsedNews});
  //     });
  //   }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create news object, invoke the NewsManager post method, and redirect to the full news list
   */
  constructNewArticle = evt => {
    evt.preventDefault();
    if (
      this.state.title === "" ||
      this.state.synopsis === "" ||
      this.state.url === "" ||
      this.state.date === ""
    ) {
      window.alert("Please input a title, synopsis and url");
    } else {
      this.setState({ loadingStatus: true });
      const article = {
        title: this.state.title,
        synopsis: this.state.synopsis,
        url: this.state.url,
        date: this.state.date
      };

      // Create the news and redirect user to news list
      NewsManager.post(article).then(() => this.props.history.push("/news"));
    }
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                // The following id has to match EXACTLY to the parameter in state in order to work
                id="title"
                placeholder="News Title"
              />
              <label htmlFor="date">Article Date</label>
              <input
                type="date"
                required
                onChange={this.handleFieldChange}
                id="date"
                placeholder="Date"
              />
              <label htmlFor="synopsis">Synopsis</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="synopsis"
                placeholder="Synopsis"
              />
              <label htmlFor="url">URL</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="url"
                placeholder="URL"
              />
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewArticle}
              >
                Add
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default NewsForm;
