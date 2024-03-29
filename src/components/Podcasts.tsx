import React from "react";
import AppHeader from "./AppHeader";
import { Play } from "@phosphor-icons/react";

const Podcasts = () => {
  return (
    <div>
      <AppHeader />
      <section>
        <span style={{display: 'grid', gridTemplateColumns: '1.75fr .25fr', borderBottom: '1px solid #e7e7e7'}}>
          <p className="podcastCard">Behind the Dance: Unfiltered</p>
          <Play size={32} color="#ff0000" />
        </span>
        <span style={{display: 'grid', gridTemplateColumns: '1.75fr .25fr', borderBottom: '1px solid #e7e7e7'}}>
        <p className="podcastCard">Because Mom Said So</p>
        <Play size={32} color="#ff0000" />
        </span>
      </section>
    </div>
  );
};

export default Podcasts;
