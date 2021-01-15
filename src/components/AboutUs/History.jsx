import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import { moving } from "../../utils";
import HJSON from "./History.json";

const History = () => {
  const [x, setX] = useState(100);

  const marginChange = (v) => {
    setX((prev) => {
      if (prev > 100) {
        return v <= 0 ? prev + v : prev;
      }
      if (prev < -2300) {
        return v >= 0 ? prev + v : prev;
      }
      return prev + v;
    });
  };

  useEffect(() => {
    moving("h-timeline-id", marginChange);
  }, []);

  return (
    <div className="history">
      <SectionTitle title="发展历程" subtitle="DEVELOPMENT HISTORY" />
      <div className="events">
        <div className="tabs">
          <ul>
            <li className="is-active">
              <a>2019</a>
            </li>
            <li>
              <a>2020</a>
            </li>
          </ul>
        </div>
        <section
          id="h-timeline-id"
          className="h-timeline"
          style={{ marginLeft: `${x}px` }}
        >
          {HJSON.map((o, i) => (
            <div className="h-timeline-item" key={i}>
              <div className="h-timeline-marker"></div>
              <div className="h-timeline-content">
                <p className="heading text is-size-3-5">{o.date}</p>
                <p className="text">{o.content}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default History;
