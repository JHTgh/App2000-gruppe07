"use client";
import { hentAllData } from "@/app/api/big5/hentAllData";
import React, { useState, useEffect } from "react";

const ApiData = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(id.id);
  const apiLenke = "https://bigfive-f9cymyeb1-rubynor.vercel.app/api/result/" + id.id + "/no";
  console.log(apiLenke);

  useEffect(() => {
    async function fetchData() {
      const apiData = await fetch(apiLenke);
      const json = await apiData.json();
      console.log(json);
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, []);


  /*
  
useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state
  */


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

export default ApiData;
