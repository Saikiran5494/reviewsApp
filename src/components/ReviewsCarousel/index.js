// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  rightArrowClicked = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  leftArrowClicked = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="image" />
        <div className="icon-container">
          <button
            type="button"
            className="icon-button"
            data-testid="leftArrow"
            onClick={this.leftArrowClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="icon"
            />
          </button>
          <div className="details">
            <p className="name">{username}</p>
            <p className="company">{companyName}</p>
          </div>
          <button
            type="button"
            className="icon-button"
            data-testid="rightArrow"
            onClick={this.rightArrowClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="icon"
            />
          </button>
        </div>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
