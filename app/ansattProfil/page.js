"use client";
import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://bigfive-f9cymyeb1-rubynor.vercel.app/api/result/660edc22642b4b0008934eb1/no')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  let content = null;
if (loading) {
  content = <p>Loading...</p>;
} else if (data) {
  const firstResult = data.results[0];
  const firstResultFacets = firstResult.facets;
  
  content = (
    <div>
      <h2>{data.title}</h2>
      <p>{data.shortDescription}</p>
      <p>{data.description}</p>
      <p>First Result Title: {firstResult.title}</p>
      <p>First Result Text: {firstResult.text}</p>
      <p>First Result Score: {firstResult.scoreText}</p>
      <h3>Facets of First Result:</h3>
      {firstResultFacets.map((facet, facetIndex) => (
        <div key={facetIndex}>
          <h4>{facet.name}</h4>
          <p>Score: {facet.score}</p>
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