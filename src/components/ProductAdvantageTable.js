import React from 'react'
import PropTypes from 'prop-types'

const ProductAdvantageTable = ({tableInfo}) => {
  const {description={}} = tableInfo
  const cells = description.tc.reduce((a,c,i) => (i % 2 == 0 ? a.push([c])
  : a[a.length-1].push(c)) && a,[])
  console.log(cells)
  return (
    <div>
      <div className="is-size-2-5 has-text-centered has-margin-bottom-40">{tableInfo.heading}</div>
      <table className="table is-bordered is-fullwidth">
        <thead>
          <tr>
            {description.th.map((o,i) => (
              <th key={i} className="th">{o}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="tr"><p className="tr-text">{description.tr[0]}</p></th>
            {cells[0].map((o,i) => (
              <th key={i} className="tc is-size-6-5 has-text-666">
                {o.split('/').map((o,i) => (
                  <p key={i}>{o}</p>
                ))}
              </th>
            ))}
          </tr>
          <tr>
            <th className="tr"><p className="tr-text">{description.tr[1]}</p></th>
            {cells[1].map((o,i) => (
              <th key={i} className="tc is-size-6-5 has-text-666">
                {o.split('/').map((o,i) => (
                  <p key={i}>{o}</p>
                ))}
              </th>
            ))}
          </tr>
          <tr>
            <th className="tr"><p className="tr-text">{description.tr[2]}</p></th>
            {cells[2].map((o,i) => (
              <th key={i} className="tc is-size-6-5 has-text-666">
                {o.split('/').map((o,i) => (
                  <p key={i}>{o}</p>
                ))}
              </th>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

ProductAdvantageTable.propTypes = {
  tableInfo: PropTypes.object
}

export default ProductAdvantageTable
