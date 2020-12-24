import React from "react";
import { navigate } from "gatsby-link";
import { FormattedMessage } from "gatsby-plugin-intl";
import emailjs from "emailjs-com";
import Layout from "../../components/Layout";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    emailjs
      .send(
        "outlook",
        "advisory",
        { ...this.state },
        "user_BBiJVm0Sq42hFj1H1Bny0"
      )
      .then(
        response => {
          console.log("SUCCESS!", response.status, response.text);
          navigate(form.getAttribute("action"));
        },
        error => {
          console.log("FAILED...", error);
        }
      );
  };

  render() {
    return (
      <Layout>
        <section className="advisory section h-section has-background-grey-1">
          <div className="container">
            <h1 className="is-size-2-5 is-size-5-mobile has-text-centered has-margin-bottom-30 has-margin-bottom-15-mobile">
              <FormattedMessage id="product.personalinformation" />
            </h1>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content has-background-white">
                  <div className="section h-section">
                    <div className="columns is-centered">
                      <div className="column is-8">
                        <form
                          name="contact"
                          method="post"
                          action="/product-center/thanks/"
                          data-netlify="true"
                          data-netlify-honeypot="bot-field"
                          onSubmit={this.handleSubmit}
                        >
                          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                          <input
                            type="hidden"
                            name="form-name"
                            value="contact"
                          />
                          <div hidden>
                            <label>
                              Don’t fill this out:{" "}
                              <input
                                name="bot-field"
                                onChange={this.handleChange}
                              />
                            </label>
                          </div>
                          <div className="field">
                            <label className="label" htmlFor={"name"}>
                              <span>*</span>
                              <FormattedMessage id="product.name" />
                            </label>
                            <div className="control">
                              <input
                                className="input"
                                type={"text"}
                                name={"name"}
                                onChange={this.handleChange}
                                id={"name"}
                                required={true}
                              />
                            </div>
                          </div>
                          <div className="field">
                            <label className="label" htmlFor={"company"}>
                              <span>*</span>
                              <FormattedMessage id="product.company" />
                            </label>
                            <div className="control">
                              <input
                                className="input"
                                type={"text"}
                                name={"company"}
                                onChange={this.handleChange}
                                id={"company"}
                                required={true}
                              />
                            </div>
                          </div>
                          <div className="field">
                            <label className="label" htmlFor={"position"}>
                              <span>*</span>
                              <FormattedMessage id="product.position" />
                            </label>
                            <div className="control">
                              <input
                                className="input"
                                type={"text"}
                                name={"position"}
                                onChange={this.handleChange}
                                id={"position"}
                                required={true}
                              />
                            </div>
                          </div>
                          <div className="field">
                            <label className="label" htmlFor={"industry"}>
                              <span>*</span>
                              <FormattedMessage id="product.industry" />
                            </label>
                            <div className="control">
                              <input
                                className="input"
                                type={"text"}
                                name={"industry"}
                                onChange={this.handleChange}
                                id={"industry"}
                                required={true}
                              />
                            </div>
                          </div>
                          <div className="field">
                            <label className="label" htmlFor={"email"}>
                              <span>*</span>
                              <FormattedMessage id="product.email" />
                            </label>
                            <div className="control">
                              <input
                                className="input"
                                type={"email"}
                                name={"email"}
                                onChange={this.handleChange}
                                id={"email"}
                                required={true}
                              />
                            </div>
                          </div>
                          <div className="field">
                            <label className="label" htmlFor={"mobile"}>
                              <span>*</span>
                              <FormattedMessage id="product.mobile" />
                            </label>
                            <div className="control">
                              <input
                                className="input"
                                type={"number"}
                                name={"mobile"}
                                onChange={this.handleChange}
                                id={"mobile"}
                                required={true}
                              />
                            </div>
                          </div>
                          <div className="field">
                            <label className="label" htmlFor={"message"}>
                              <span>*</span>
                              <FormattedMessage id="product.youneeds" />
                            </label>
                            <div className="control">
                              <textarea
                                className="textarea"
                                name={"message"}
                                onChange={this.handleChange}
                                id={"message"}
                                required={true}
                              />
                            </div>
                          </div>
                          <div className="field">
                            <div className="content">
                              <button
                                className="button is-blue is-fullwidth"
                                type="submit"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
