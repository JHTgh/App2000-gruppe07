

export async function hentAllData(testId) {
   
    const response  = await fetch(`https://bigfive-f9cymyeb1-rubynor.vercel.app/api/result/${testId}/no`);
    const data = await response.json();
    console.log('data hentet fra api (hentAllData)');
    console.log(data);

    return data;
}

/*
    fetch(
      "https://bigfive-f9cymyeb1-rubynor.vercel.app/api/result/" + id + "/no"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
*/