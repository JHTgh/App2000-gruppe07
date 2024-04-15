"use client";
import React, { useState, useEffect } from "react";

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://bigfive-f9cymyeb1-rubynor.vercel.app/api/result/660edc22642b4b0008934eb1/no"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  let content = null;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (data) {
    content = (
      <div>
        <h2>{data.title}</h2>
        <p>{data.shortDescription}</p>
        <p>{data.description}</p>
        {data.results.map((result, index) => (
          <div key={index}>
            <h3>{result.title}</h3>
            <p>{result.text}</p>
            <p>Score: {result.scoreText}</p>
            <h4>Facets:</h4>
            {result.facets.map((facet, facetIndex) => (
              <div key={facetIndex}>
                <h5>{facet.title}</h5>
                <p>Score: {facet.score}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  } else {
    content = <p>No data available</p>;
  }

  return <div>{content}</div>;
};

export default YourComponent;
