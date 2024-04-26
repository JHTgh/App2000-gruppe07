export async function hentTestData(id) {
  try {
    const response = await fetch(
      `https://bigfive-f9cymyeb1-rubynor.vercel.app/api/result/${id}/no`
    );
    const jsonData = await response.json();
    const dataString = JSON.stringify(jsonData);
    const data = JSON.parse(dataString);

    function formatBigfiveData(data) {
      const obj = {};

      for (let result of data.results) {
        obj[formatValidObjectName(result.title)] = formatBigfiveFacets(result);
      }

      return obj;
    }

    function formatBigfiveFacets(result) {
      const obj = {
        score: result.score,
      };

      for (let facet of result.facets) {
        obj[formatValidObjectName(facet.title)] = facet.score;
      }

      return obj;
    }

    function formatValidObjectName(title = "") {
      return title
        .toLowerCase()
        .replace(/[æøå-]/gi, replacer)
        .trim()
        .replace(/([\s_-])(\w)/gi, (str) => str.trim().toUpperCase());
    }

    function replacer(str) {
      switch (str) {
        case "æ":
          return "ae";
        case "ø":
          return "o";
        case "å":
          return "aa";
        case "-":
          return " ";
        default:
          return str;
      }
    }

    console.log("hentTestData fullført");
    return formatBigfiveData(data);
  } catch (error) {
    console.log(error);
    return null;
  }

  //   try {
  //     const innData = {
  //       nevrotisisme: {
  //         score: data.results[0].score,
  //         angst: data.results[0].facets[0].score,
  //         sinne: data.results[0].facets[1].score,
  //         deprisjon: data.results[0].facets[2].score,
  //         selvbevissthet: data.results[0].facets[3].score,
  //         impulsivitet: data.results[0].facets[4].score,
  //         sårbarhet: data.results[0].facets[5].score,
  //       },
  //       ekstroversjon: {
  //         score: data.results[1].score,
  //         vennlighet: data.results[1].facets[0].score,
  //         sosiabilitet: data.results[1].facets[1].score,
  //         selvmarkering: data.results[1].facets[2].score,
  //         aktivitet: data.results[1].facets[3].score,
  //         spenningsSøking: data.results[1].facets[4].score,
  //         positiveFølelser: data.results[1].facets[5].score,
  //       },
  //       åpenhetForErfaringer: {
  //         score: data.results[2].score,
  //         fantasi: data.results[2].facets[0].score,
  //         estetikk: data.results[2].facets[1].score,
  //         følelser: data.results[2].facets[2].score,
  //         eventyrlyst: data.results[2].facets[3].score,
  //         intellekt: data.results[2].facets[4].score,
  //         liberaleVerdier: data.results[2].facets[5].score,
  //       },
  //       medmenneskelighet: {
  //         score: data.results[3].score,
  //         tillit: data.results[3].facets[0].score,
  //         moral: data.results[3].facets[1].score,
  //         altruisme: data.results[3].facets[2].score,
  //         føyelighet: data.results[3].facets[3].score,
  //         beskjedenhet: data.results[3].facets[4].score,
  //         følsomhet: data.results[3].facets[5].score,
  //       },
  //       planmessighet: {
  //         score: data.results[4].score,
  //         kompetanse: data.results[4].facets[0].score,
  //         orden: data.results[4].facets[1].score,
  //         pliktoppfyllenhet: data.results[4].facets[2].score,
  //         prestasjonsstreben: data.results[4].facets[3].score,
  //         selvdisiplin: data.results[4].facets[4].score,
  //         betenksomhet: data.results[4].facets[5].score,
  //       },
  //     };
  //     console.log("hentTestData fullført");
  //     return innData;
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
}
