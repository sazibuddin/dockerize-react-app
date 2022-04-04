import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  return (
    <div className="App">
      <header className='header'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">React blog</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className='main'>
        <div className='container'>
          <main>

            <section className="py-5 text-center container">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light">Read our lates blogs</h1>
                  <p className="lead text-muted">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                  </p>
                </div>
              </div>
            </section>

            <div className="album py-5 bg-light">
              <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {blogs && blogs.map(blog => (
                  <div className="col">
                    <div className="card shadow-sm">
                      <img src="https://via.placeholder.com/225/000000/FFFFFF/?text=Blog%20thumbnail" height="225" width="100%" />

                      <div className="card-body">
                      <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">{blog.body}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Read more</button>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                       ))}
                </div>
              </div>
            </div>

          </main>
        </div>
      </main>
      {/* <header className="App-header">
        <h1>Dockerize React app</h1>
        <h5>Read our lates blogs</h5>
        {blogs && blogs.map(blog => (
          <div key={blog.id}>{blog.title}</div>
        ))}
      </header> */}
    </div>
  );
}

export default App;
