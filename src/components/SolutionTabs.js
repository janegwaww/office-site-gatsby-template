import React, { Component } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import SolutionCard from "../components/SolutionCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/solution-tabs.sass";

const SampleNextArrow = props => {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
};

const SamplePrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex: 1 }}
      onClick={onClick}
    />
  );
};

class SolutionTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      mobile: false,
      heading: ""
    };
  }

  _tabSelect = key => {
    this.setState({
      items: this.state.items.map((o, i) =>
        i === key ? { ...o, className: "is-active" } : { ...o, className: "" }
      )
    });
    this.sliderRef.slickGoTo(key);
  };

  componentDidMount() {
    const { solutionItems } = this.props;
    this.setState({
      items: solutionItems.blurbs.map((o, i) =>
        i === 0 ? { ...o, className: "is-active" } : o
      ),
      heading: solutionItems.heading
    });
    if (window.innerWidth <= 768) {
      this.setState({ mobile: true });
    }
  }

  render() {
    const { mobile, heading, items } = this.state;
    const slider = {
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: mobile,
      variableWidth: mobile,
      className: "carousel slider variable-width",
      beforeChange: (current, next) => this._tabSelect(next),
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div className="solution-tabs">
        <br className="is-hidden-tablet" />
        <h3 className="is-size-3 is-size-5-5-mobile has-text-black has-text-centered">
          {heading}
        </h3>
        <br className="is-hidden-mobile" />
        <div className="columns is-centered is-hidden-mobile">
          <div className="column is-8">
            <div className="tabs is-around">
              <ul>
                {[...items].map((o, i) => (
                  <li key={i} className={o.className}>
                    <a onClick={() => this._tabSelect(i)}>{o.heading}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <br />
        <section
          className="container"
          style={mobile ? { margin: "0 0 0 -4em" } : {}}
        >
          <Slider ref={e => (this.sliderRef = e)} {...slider}>
            {[...items].map((o, i) => (
              <div key={`item-${i}`} style={{ width: 300 }}>
                <SolutionCard info={o} />
              </div>
            ))}
          </Slider>
        </section>
        <br />
      </div>
    );
  }
}

SolutionTabs.propTypes = {
  solutionItems: PropTypes.shape({
    blurbs: PropTypes.array,
    heading: PropTypes.string
  })
};

export default SolutionTabs;
