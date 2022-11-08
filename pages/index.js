import Head from "next/head";
import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: "Loading Results",
      tag: "",
      allTags: "",
    };
    this.handleChangeAddTag = this.handleChangeAddTag.bind(this);
    this.handleSubmitAddTag = this.handleSubmitAddTag.bind(this);
    this.handleSubmitGenerate = this.handleSubmitGenerate.bind(this);
  }

  handleChangeAddTag(event) {
    this.setState({ tag: event.target.value });
  }

  handleSubmitAddTag(event) {
    this.setState({ allTags: this.state.allTags + this.state.tag + " " });
    event.preventDefault();
  }

  handleSubmitGenerate(event) {
    let names;
    fetch("http://localhost:3000/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ keywords: this.state.allTags }),
    }).then(response => {
      return response.json();
  })
  .then(data => {
      names = data.body[0];
      console.log(names)
      this.setState({ results: names });
      return names;
  })
  
    alert(this.state.results);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <Head>
          <title>Project Name Generator</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">Project Name Generator</h1>

          <p className="description">
            Please enter tags below to generate project names.
          </p>

          <form onSubmit={this.handleSubmitAddTag}>
            <input
              type="text"
              id="addTag"
              placeholder="Enter new tag here"
              defaultValue={this.state.tag}
              onChange={this.handleChangeAddTag}
            />
            <input type="submit" id="Add" value="Add" />
          </form>

          <form onSubmit={this.handleSubmitGenerate}>
            <p>Tags</p>
            <div className="tags">{this.state.allTags}</div>
            <input type="submit" id="Generate" value="Generate" />
            <p>Results</p>
            <div className="results">{this.state.results}</div>
          </form>
        </main>

        <footer>
          <a href="https://cwjwanjing.github.io/">@ Wanjing Chen</a>
        </footer>
      </div>
    );
  }
}
