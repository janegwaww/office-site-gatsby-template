import React from "react";

export default function SectionTitle({ title = "", subtitle = "" }) {
  return (
    <div>
      {title ? (
        <span className="text section-title is-size-5-mobile">{title}</span>
      ) : null}
      {subtitle ? (
        <span className="text section-subtitle is-size-7-5-mobile">
          {subtitle}
        </span>
      ) : null}
    </div>
  );
}
