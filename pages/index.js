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
        </form>

        {/* <div className="grid"> */}
          {/* <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a> */}
        {/* </div> */}
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

        // .grid {
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   flex-wrap: wrap;

        //   max-width: 800px;
        //   margin-top: 3rem;
        // }

        // .card {
        //   margin: 1rem;
        //   flex-basis: 45%;
        //   padding: 1.5rem;
        //   text-align: left;
        //   color: inherit;
        //   text-decoration: none;
        //   border: 1px solid #eaeaea;
        //   border-radius: 10px;
        //   transition: color 0.15s ease, border-color 0.15s ease;
        // }

        // .card:hover,
        // .card:focus,
        // .card:active {
        //   color: #0070f3;
        //   border-color: #0070f3;
        // }

        // .card h3 {
        //   margin: 0 0 1rem 0;
        //   font-size: 1.5rem;
        // }

        // .card p {
        //   margin: 0;
        //   font-size: 1.25rem;
        //   line-height: 1.5;
        // }

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
        }

        input::placeholder {
          font-size: 1.2rem;
        }

        input[type=text] {
          font-size: 1.2rem;
        }

        input[type=text]:hover {
          border: 0.2rem solid #6495ED;
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
