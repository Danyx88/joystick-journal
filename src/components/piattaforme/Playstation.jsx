import { Component } from "react";
import news from "../../data/news.json";
import data from "../../data/reviews.json";

class Playstation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      reviews: [],
      expanded: {},
    };
  }
  componentDidMount() {
    const psArticle = news.articles.filter(
      (articles) => articles.platform === "PlayStation"
    );
    const psReview = data.reviews.filter(
      (reviews) => reviews.platform === "PlayStation"
    );
    this.setState({
      articles: psArticle,
      reviews: psReview,
    });
  }
  toggleReadMore = (id) => {
    this.setState((prevState) => ({
      expanded: {
        ...prevState.expanded,
        [id]: !prevState.expanded[id],
      },
    }));
  };

  render() {
    const { articles } = this.state;
    const { reviews } = this.state;

    return (
      <div className="Home">
        <section className="py-5">
          <div className="container">
            <div className="row">
              {/* articoli  */}
              <div className="col-lg">
                <h2 className="title">Articoli PlayStation</h2>
                <div className="scroll row">
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
                        <div className="category pt-2 pb-1">
                          {news.category}
                          <button className="btn-platform">
                            {news.platform}
                          </button>
                        </div>
                        <h5 className="sub-title"> {news.title} </h5>
                        <div className="heading">
                          <div className="description">
                            {this.state.expanded[news.id]
                              ? news.content
                              : `${news.content.substring(0, 150)}...`}
                            <button
                              className="read-more"
                              onClick={() => this.toggleReadMore(news.id)}
                            >
                              {this.state.expanded[news.id]
                                ? "Read less"
                                : "Read more"}
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
              <div className=" col-lg-4">
                <h2 className="title">Recensioni</h2>
                <div className="scroll row">
                  {reviews.map((reviews) => (
                    <div key={reviews.id} className="col-md-12">
                      <div className="card-reviews">
                        <div className="infos">
                          <h5 className="sub-title">{reviews.title}</h5>
                          <p className="category">
                            <button className="btn-platform">
                              {reviews.platform}
                            </button>
                            <span>{reviews.date}</span>
                          </p>
                          <div className="description">
                            {this.state.expanded[reviews.id]
                              ? reviews.content
                              : `${reviews.content.substring(0, 150)}...`}
                            <button
                              className="read-more"
                              onClick={() => this.toggleReadMore(reviews.id)}
                            >
                              {this.state.expanded[reviews.id]
                                ? "Read less"
                                : "Read more"}
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
      </div>
    );
  }
}

export default Playstation;
