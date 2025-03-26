import { Component } from "react";
import data from "../data/reviews.json";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      expanded: {},
    };
  }
  componentDidMount() {
    this.setState({
      reviews: data.reviews,
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
    const { reviews } = this.state;

    return (
      <div className=" col-lg-4">
        <h2 className="title">Recensioni</h2>
        <div className="scroll row">
          {reviews.map((reviews) => (
            <div key={reviews.id} className="col-md-12">
              <div className="card-reviews">
                <div className="infos">
                  <h5 className="sub-title">{reviews.title}</h5>
                  <p className="category">
                    <button className="btn-platform">{reviews.platform}</button>
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
    );
  }
}

export default Reviews;
