import React from "react";
import PropTypes from "prop-types";

const ProductAdvantageTable = ({tableInfo}) => {
  const {description = {}} = tableInfo;
  const cells = description.tc.reduce(
    (a, c, i) => (i % 2 == 0 ? a.push([c]) : a[a.length - 1].push(c)) && a,
    [],
  );
  return (
    <div>
      <div className="is-size-2-5 has-text-centered has-margin-bottom-40">
        {tableInfo.heading}
      </div>
      <table className="table is-bordered is-fullwidth">
        <thead>
          <tr>
            {description.th.map((o, i) => (
              <th key={i} className="th">
                {o}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {description.tr.map((o, i) => (
            <tr key={i}>
              <th className="tr">
                <p className="tr-text">{o}</p>
              </th>
              {cells[i].map((j, k) => (
                <th key={k} className="tc is-size-6-5 has-text-666">
                  {j.split("/").map((h, g) => (
                    <p key={g}>{h}</p>
                  ))}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProductAdvantageTable.defaultProps = {
  tableInfo: {
    heading: "Product Advantage Table",
    description: {
      th: ["Our Product", "Other Product"],
      tr: ["Function 1", "Function 2", "Function 3"],
      tc: [
        "- Advantage 1/- Advantage 2",
        "- Advantage 3/- Advantage 4",
        "- Advantage 5/- Advantage 6",
        "- Advantage 7/- Advantage 8",
        "- Advantage 9/- Advantage 10",
        "- Advantage 11/- Advantage 12",
      ],
    },
  },
};

ProductAdvantageTable.propTypes = {
  tableInfo: PropTypes.shape({
    description: PropTypes.shape({
      th: PropTypes.array,
      tr: PropTypes.array,
      tc: PropTypes.array,
    }),
    heading: PropTypes.string,
  }),
};

export default ProductAdvantageTable;
