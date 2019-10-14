import React from "react";
import EpizodeItem from "./Episode-item"

const Episodes = ({ episodes }) => {
  return (
    <section className="episodes-wrapper">
        {/* Map through episodes and display items */}
      <EpizodeItem>
        {/* On click go to Episode-details */}
      </EpizodeItem>
    </section>
  );
};

export default Episodes;
