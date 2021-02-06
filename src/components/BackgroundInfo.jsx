import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { useMediaQuery } from "react-responsive";
import SectionTitle from "../components/SectionTitle";

const BackgroundInfo = ({ bakPara = [] }) => {
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });
  const { formatMessage } = useIntl();
  return (
    <div className="college-back-info columns is-centered">
      <div className="column is-11 has-text-centered">
        <SectionTitle
          title={formatMessage({ id: "college.academicbackground" })}
          subtitle={"ACADEMIC BACKGROUND"}
        />
        <br />
        <div className="is-size-6 is-size-7-mobile has-text-left-mobile">
          {isMobile ? (
            <>
              <p>{`${bakPara[0]}${bakPara[1]}`}</p>
              <p>{`${bakPara[2]}${bakPara[3]}`}</p>
            </>
          ) : (
            <>
              {bakPara.map((o, i) => (
                <p key={i}>{o}</p>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BackgroundInfo;
