import React from "react";

export default function SectionTitle({ title = "", subtitle = "" }) {
  return (
    <div>
      <span className="text section-title is-size-5-mobile">{title}</span>
      <span className="text section-subtitle">{subtitle}</span>
    </div>
  );
}
