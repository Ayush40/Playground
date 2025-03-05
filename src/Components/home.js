import React from "react";

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Hero Section */}
      <header className="bg-light text-center py-5">
        <div className="container">
          <h1>Welcome to My Website</h1>
          <p className="lead">A simple, responsive homepage using Bootstrap</p>
          <a href="#" className="btn btn-primary">Get Started</a>
        </div>
      </header>

      {/* Features Section */}
      <section className="container my-5 flex-grow-1">
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card p-4 shadow">
              <h3>Feature 1</h3>
              <p>Some description about feature 1.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 shadow">
              <h3>Feature 2</h3>
              <p>Some description about feature 2.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 shadow">
              <h3>Feature 3</h3>
              <p>Some description about feature 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3 mt-auto">
        <p>&copy; 2025 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
