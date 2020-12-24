import React, { Component } from "react";
import bulmaCarousel from "../../node_modules/bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js";

class Carousel extends Component {
  construtor(props) {
    super(props);
    this.state = {};
  }
  getDefaultProps() {
    return {
      options: {
        initialSlide: 0,
        slidesToScroll: 1,
        slidesToShow: 1,
        effect: "translate"
      }
    };
  }
  componentDidMount() {
    const carousels = bulmaCarousel.attach(`#carousel`, this.props.options);
  }
  render() {
    return (
      <section class="hero is-medium has-carousel">
        <div id="carousel" class="hero-carousel">
          {this.props.children}
        </div>
        <div class="hero-head"></div>
        <div class="hero-body"></div>
        <div class="hero-foot"></div>
      </section>
    );
  }
}

export default Carousel;
