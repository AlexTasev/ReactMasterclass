import React from "react";

const Episode = () => {
  return (
    <>
      <section className="episode-header">
        <div className="episode-poaster">
          <img></img>
        </div>
        <div className="episode-title"></div>
      </section>

      <section className="episode-description">
          <article>Description</article>
          <div className="director"></div>
          <div className="release-date"></div>
      </section>

      <section className="episode-characters">
        {/* Map through characters related with this episode  */}
      </section>

      <button>Load More</button>
    </>
  );
};

export default Episode;
