// henter alle profiler som passer til innlogget bruker
// brukes ikke
export async function hentListe() {
  const queryTilBrukerCollection = query(
    collection(db, "users"),
    where("uid", "==", await userUId())
  );
  const snapshot = await getDocs(queryTilBrukerCollection);
  if (snapshot.empty) {
    console.log("bruker ikke funnet");
    return null;
  }
  try {
    const liste = [];
    snapshot.forEach((doc) => {
      liste.push(doc.data());
    });
    console.log("liste: " + liste);
    return liste;
  } catch (error) {
    console.log(error);
    return null;
  }
}
