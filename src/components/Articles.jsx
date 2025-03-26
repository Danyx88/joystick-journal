import news from "../data/news.json";
import { Component } from "react";

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      expanded: {},
    };
  }
  componentDidMount() {
    this.setState({
      articles: news.articles,
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

  // const [articles, setArticles] = useState([]);
  // const [reviews, setReviews] = useState([]);
  // const [comments, setComments] = useState([]);
  // const [newComment, setNewComment] = useState("");
  // const [expanded, setExpanded] = useState({});

  // useEffect(() => {
  //   setArticles(news.articles);
  // }, []);

  // useEffect(() => {
  //   setReviews(data.reviews);
  // }, []);

  // Aggiungere un commento
  // const handleAddComment = () => {
  //   if (newComment.trim() !== "") {
  //     setComments([...comments, newComment]);
  //     setNewComment(""); // Pulisce il campo dopo l'invio
  //   }
  // };

  // Read More
  // const toggleReadMore = (id) => {
  //   setExpanded((prevState) => ({
  //     ...prevState,
  //     [id]: !prevState[id],
  //   }));
  // };

  render() {
    const { articles } = this.state;
    return (
      <div className=" col-lg-8">
        <h2 className="title">Articoli</h2>
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
                  <button className="btn-platform">{news.platform}</button>
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
                      {this.state.expanded[news.id] ? "Read less" : "Read more"}
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
    );
  }
}

export default Articles;
