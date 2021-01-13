import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <section className="section is-paddingless-mobile">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1 is-paddingless-tablet">
              <div className="context">
                <div className="has-text-centered">
                  <div className="is-size-3 is-size-5-5-mobile text">
                    联系我们
                  </div>
                  <div className="has-margin-bottom-20 has-margin-bottom-10-mobile" />
                  <div className="is-size-4 is-size-6-5-mobile has-text-6f text">
                    专注于人工智能算法研发，致力于成为最能读懂这个世界的科技公司
                  </div>
                </div>
                <div>
                  <a
                    href="mailto:haetek_20190801@outlook.com"
                    className="button is-blue-border"
                  >
                    联系我们
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
