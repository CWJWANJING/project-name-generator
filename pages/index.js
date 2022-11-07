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
          <title>Create Next App</title>
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

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #6495ed;
          }

          p {
            color: #e6f9ff;
            margin-top: 5%;
            font-size: 1.5rem;
          }

          .tags {
            color: white;
            box-sizing: content-box;
            margin-top: 5%;
            width: 300px;
            height: 20px;
            padding: 30px;
            border: 2px solid #e6f9ff;
          }

          .results {
            color: white;
            box-sizing: content-box;
            margin-top: 5%;
            width: 300px;
            height: 100px;
            padding: 30px;
            border: 2px solid #e6f9ff;
          }

          #Add {
            color: #6495ed;
            background-color: #e6f9ff;
            width: 24%;
            border-color: #6a90d4;
            height: 2.5rem;
            font-size: 1rem;
            margin-left: 2%;
          }

          #Add:hover {
            color: #e6f9ff;
            background-color: #6a90d4;
            border-color: black;
          }

          #Generate {
            color: #6495ed;
            background-color: #e6f9ff;
            width: 100%;
            border-color: #6a90d4;
            height: 2.5rem;
            font-size: 1rem;
            margin-top: 5%;
          }

          #Generate:hover {
            color: #e6f9ff;
            background-color: #6a90d4;
            border-color: black;
          }

          input {
            height: 2.5rem;
            text-size: 1rem;
            text-align: center;
            width: 74%;
          }

          input::placeholder {
            font-size: 1rem;
            color: #6495ed;
          }

          input[type="text"],
          textarea {
            background-color: #e6f9ff;
          }

          input[type="text"] {
            font-size: 1rem;
            border-color: #6495ed;
          }

          input[type="text"]:hover {
            border-color: black;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #e6f9ff;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
            color: #e6f9ff;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .logo {
            height: 1em;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
  }
}
