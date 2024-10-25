import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import { moving } from "../../utils";

const History = () => {
  const [x, setX] = useState(100);
  const [select, setSelect] = useState(["is-active", ""]);

  const marginChange = (v) => {
    const width = document.getElementById("h-timeline-id").clientWidth - 700;
    setX((prev) => {
      setSelect(prev + v < -980 ? ["", "is-active"] : ["is-active", ""]);
      if (prev > 100) {
        return v <= 0 ? prev + v : prev;
      }
      if (prev < -width) {
        return v >= 0 ? prev + v : prev;
      }
      return prev + v;
    });
  };

  const handleTab = (value) => {
    setSelect((prev) =>
      prev.map((o, i) => {
        if (value === 1) {
          setX(-980);
        } else {
          setX(100);
        }
        if (i === value) {
          return "is-active";
        }
        return "";
      })
    );
  };

  useEffect(() => {
    moving("h-timeline-id", marginChange);
  }, []);

  return (
    <div className="history">
      <SectionTitle title="发展历程" subtitle="DEVELOPMENT HISTORY" />
      <div className="events">
        <div className="tabs content">
          <ul>
            <li className={`${select[0]}`} onClick={() => handleTab(0)}>
              <a>2019</a>
            </li>
            <li className={`${select[1]}`} onClick={() => handleTab(1)}>
              <a>2020</a>
            </li>
          </ul>
        </div>
        <section
          id="h-timeline-id"
          className="h-timeline"
          style={{ marginLeft: `${x}px` }}
        ></section>
      </div>
    </div>
  );
};

export default History;
