import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

const FooterMobile = () => {
  return (
    <div className="footer-mobile content is-hidden-tablet is-size-7-mobile has-text-centered">
      <div className="container">
        <p>
          <span
            className="tooltip has-tooltip-top"
            data-tooltip="haetek_20190801"
          >
            <FormattedMessage id="footer.officialaccount" />
          </span>
          &ensp;&ensp;|&ensp;&ensp;
          <span
            className="tooltip has-tooltip-top"
            data-tooltip="+86 156-4233-6090"
          >
            <FormattedMessage id="footer.marketingphone" />
          </span>
        </p>
        <p>peizhengqi@kc-group.com.cn</p>
        <p>
          <FormattedMessage id="footer.address" />
        </p>
      </div>
    </div>
  );
};

export default FooterMobile;
