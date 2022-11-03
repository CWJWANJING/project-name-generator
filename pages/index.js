import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Project Name Generator
        </h1>

        <p className="description">
          Please enter tags below to generate project names.
        </p>

        <form action="datalocation" method="post">
          <input type="text" id="addTag" name="tag" placeholder="Enter new tag here"/>
          <button type="submit">Add</button>
        </form>
      </main>

      <footer>
        <a
          href="https://cwjwanjing.github.io/"
        >
          @ Wanjing Chen
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #6495ED;
        }

        p {
          color: #e6f9ff;
        }

        button {
          color: #6495ED;
          height: 2rem;
          background-color: #e6f9ff;
          margin-top: 5%;
          width: 105%;
          border-color: #6a90d4;
        }

        button:hover {
          color: #e6f9ff;
          background-color: #6a90d4;
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
        
        input {
          padding: 8% 12%;
          border: 0.1rem solid;
          text-size: 1rem;
          width: 105%;
        }

        input::placeholder {
          font-size: 1.2rem;
          color: #6495ED;
        }

        input[type="text"], textarea {
          background-color : #e6f9ff; 
        }

        input[type=text] {
          font-size: 1.2rem;
          border-color: #6495ED;
        }

        input[type=text]:hover {
          color: #e6f9ff;
          border-color: black;
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
  )
}
