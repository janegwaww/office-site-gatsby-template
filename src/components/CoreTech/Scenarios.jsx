import React from "react";
import SectionTitle from "../SectionTitle";

const Scenarios = ({ scen }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <SectionTitle title="应用场景" subtitle="Application scenarios" />
            <div className="tabs is-centered">
              <ul>
                <li className="is-active">
                  <a>知识纠错</a>
                </li>
                <li>
                  <a>知识填充</a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              {scen.map((o) => (
                <div className="tab-item" key={o.title}>
                  <div className="columns">
                    <div className="column is-half">image</div>
                    <div className="column is-half">
                      <p>{o.description.title}</p>
                      <p>{o.description.context}</p>
                      <br />
                      <p>{o.advance.title}</p>
                      {o.advance.contexts.map((i) => (
                        <p>{i}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scenarios;
