import "./Home.css";
import news from "../data/news.json";
import data from "../data/reviews.json";
import { useEffect, useState } from "react";

function Home() {
  const [articles, setArticles] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    setArticles(news.articles);
  }, []);

  useEffect(() => {
    setReviews(data.reviews);
  }, []);

  // Aggiungere un commento
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment(""); // Pulisce il campo dopo l'invio
    }
  };

  // Read More
  const toggleReadMore = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="Home">
      {/* Hero */}
      <section className="hero bg-dark text-white py-5">
        <div className="container mt-5">
          <h1>Joystick Journal</h1>
          <p className="lead">
            Le ultime notizie sui videogiochi, recensioni e molto altro.
          </p>
        </div>
      </section>

      {/* Articoli */}
      <section className="latest-news py-5">
        <div className="container">
          <div className="row">
            <div className="scroll col-lg-8">
              <h2>Articoli</h2>
              <div className="row">
                {articles.map((news) => (
                  <div key={news.id} className="col-md-6 mb-4">
                    <div className="card-news">
                      <div className="card-image">
                        <img
                          className="card-image"
                          src={news.image}
                          alt={news.name}
                        />
                      </div>
                      <div className="category">
                        {news.category}
                        <span className="platform">{news.platform}</span>
                      </div>
                      <h5> {news.title} </h5>
                      <div className="heading">
                        <div className="description">
                          {expanded[news.id]
                            ? news.content
                            : `${news.content.substring(0, 150)}...`}
                          <button
                            className="read-more"
                            onClick={() => toggleReadMore(news.id)}
                          >
                            {expanded[news.id] ? "Read less" : "Read more"}
                          </button>
                        </div>
                        <div className="author">
                          By <span className="name">{news.author}</span>
                          <span className="date">{news.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recensioni */}
            <div className="scroll col-lg-4">
              <h2>Recensioni</h2>
              <div className="row">
                {reviews.map((reviews) => (
                  <div key={reviews.id} className="col-md-12">
                    <div className="card-reviews">
                      <div className="infos">
                        <h5 className="title-review">{reviews.title}</h5>
                        <p className="category">
                          {reviews.platform}
                          <span className="platform">{reviews.date}</span>
                        </p>
                        <div className="description">
                          {expanded[reviews.id]
                            ? reviews.content
                            : `${reviews.content.substring(0, 150)}...`}
                          <button
                            className="read-more"
                            onClick={() => toggleReadMore(reviews.id)}
                          >
                            {expanded[reviews.id] ? "Read less" : "Read more"}
                          </button>
                        </div>
                      </div>
                      <div className="author">
                        By <span className="name">{reviews.author}</span>
                        <span className="date">{reviews.score}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2025 Joystick Journal - Tutti i diritti riservati</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
