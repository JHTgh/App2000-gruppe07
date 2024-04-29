"use client";
import React, { useState, useEffect } from "react";
import SingelChart from "./chart";
import styles from "./component.module.css";


/**
 * @author Mie og Nicco
 * @contributor Kjartan, ChatGPT, Gemini, CODEIUM (for JSDoc)
 * Henter data fra big5 sitt API, behandler data og viser det frem, bruker også komponenten SingelChart for å vise diagram.
 *
 * @param {string} id - id brukt til å hente data.
 * @param {string} navn - Navnet på den som har tatt testen
 * @return {JSX.Element} komponent som viser frem dataen fra api
 */
const ApiData = ({id, navn}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  //console.log(id);
  const apiLenke = "https://bigfive-f9cymyeb1-rubynor.vercel.app/api/result/" + id + "/no";
  //console.log(apiLenke);
  //console.log (navn);

  useEffect(() => {
    async function fetchData() {
      const apiData = await fetch(apiLenke);
      const json = await apiData.json();
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, [apiLenke]);

  let content = null;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (data) {
    
    // henter data til for å vise frem hovedkategoriene til profilen
    const scoreData = data.results.map((result) => {
      return {
        score: result.score,
        title: result.title,  
      }
    });
    
    content = (
      <div className={styles.flexcontainer}>
        <h4 className={styles.testSkrift}>{navn} sin Big Five test</h4>
        <br />
        
        <SingelChart  className={styles.chart2}  testData={scoreData} navn={navn} />
        {data.results.map((result, index) => (
          <div key={index}>
            <div className = {styles.oOverskrift}>{result.title}</div>
            <div className={styles.scoreTop} >Score:{result.score} - {result.scoreText}</div>
            <div className={styles.litenSkrift}>{result.text}</div>
            {/* kan legge til flere ting her, men for nå har vi bare tekst rettet mot den som har tatt testen. 
            kan også bruke; result.description, result.shortDescription  */}      
            <SingelChart testData={result.facets} navn={navn} />
            {result.facets.map((facet, facetIndex) => (
              <div key={facetIndex}>
                <div className={styles.overskriftUnderkategori}>{facet.title}</div>
                <div className={styles.miniSkrift}>Score: {facet.score} - {facet.scoreText}</div>
                <div className={styles.litenSkrift}>{facet.text}</div>
                <br />
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
