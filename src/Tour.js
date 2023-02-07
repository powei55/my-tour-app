// import React from "react";
import React, { useState } from "react";
import { data } from "./data";

const Tour = () => {
  const [info, setInfo] = useState(data);
  const [readMore, setReadMore] = useState(false);
  const linkName = readMore ? "Read Less...   " : "Read More... ";

  const removeItem = (id) => {
    let newInfo = info.filter((city) => city.id !== id);

    setInfo(newInfo);
  };

  const handleClick = (id) => {
    setReadMore((current) => !current);
  };
  

  return (
    <>
      {info.map((city) => {
        const { id, image, title, about, moreInfo } = city;

        return (
          <div key={id}>
            <div className="tour-info">
              <img src={image} alt="beautiful cites tp explore" />
              <h3>{title}</h3>
              <div>
                <p>
                  {about} {readMore && moreInfo}
                </p>

                <button
                  className="read-more"
                  onClick={() => {
                    handleClick(id);
                  }}
                >
                  {linkName}
                </button>
              </div>
              <div className="btn">
                <button onClick={() => removeItem(id)}>not interested</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Tour;
