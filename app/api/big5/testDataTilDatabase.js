import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../database/firebase";

export async function testDataTilDatabase(data, id) {
  const testResultCollection = collection(db, "testRes");

  console.log(data);

  // lager ett objekt for alle kategorier
  const nevrotisisme = {
    score: data.nevrotisisme.score,
    angst: data.nevrotisisme.angst,
    sinne: data.nevrotisisme.sinne,
    deprisjon: data.nevrotisisme.depresjon,
    selvbevissthet: data.nevrotisisme.selvbevissthet,
    impulsivitet: data.nevrotisisme.impulsivitet,
    sårbarhet: data.nevrotisisme.saarbarhet,
  };

  const ekstroversjon = {
    score: data.ekstroversjon.score,
    vennlighet: data.ekstroversjon.vennlighet,
    sosiabilitet: data.ekstroversjon.sosiabilitet,
    selvmarkering: data.ekstroversjon.selvmarkering,
    aktivitet: data.ekstroversjon.aktivitet,
    spenningsSøking: data.ekstroversjon.spenningsSoking,
    positiveFølelser: data.ekstroversjon.positiveFolelser,
  };

  const aapenhetForErfaringer = {
    score: data.aapenhetForErfaringer.score,
    fantasi: data.aapenhetForErfaringer.fantasi,
    estetikk: data.aapenhetForErfaringer.estetikk,
    følelser: data.aapenhetForErfaringer.folelser,
    eventyrlyst: data.aapenhetForErfaringer.eventyrlyst,
    intellekt: data.aapenhetForErfaringer.intellekt,
    liberaleVerdier: data.aapenhetForErfaringer.liberaleVerdier,
  };

  const medmenneskelighet = {
    score: data.medmenneskelighet.score,
    tillit: data.medmenneskelighet.tillit,
    moral: data.medmenneskelighet.moral,
    altruisme: data.medmenneskelighet.altruisme,
    føyelighet: data.medmenneskelighet.foyelighet,
    beskjedenhet: data.medmenneskelighet.beskjedenhet,
    følsomhet: data.medmenneskelighet.folsomhet,
  };

  const planmessighet = {
    score: data.planmessighet.score,
    kompetanse: data.planmessighet.kompetanse,
    orden: data.planmessighet.orden,
    pliktoppfyllenhet: data.planmessighet.pliktoppfyllenhet,
    prestasjonsstreben: data.planmessighet.prestasjonsstreben,
    selvdisiplin: data.planmessighet.selvdisiplin,
    betenksomhet: data.planmessighet.betenksomhet,
  };

  const testResultsData = {
    Nevrotisisme: nevrotisisme,
    Ekstroversjon: ekstroversjon,
    ÅpenhetForErfaringer: aapenhetForErfaringer,
    Medmenneskelighet: medmenneskelighet,
    Planmessighet: planmessighet,
  };

  //console.log(testResultsData);

  // id for test er også nøkkel for dokumentet
  // her legger vi ikke til et dokument men heller oppdaterer, legger til hvis denne nøkkelen ikke har et dokument
  await setDoc(doc(db, "testRes", id), {
    Nevrotisisme: nevrotisisme,
    Ekstroversjon: ekstroversjon,
    ÅpenhetForErfaringer: aapenhetForErfaringer,
    Medmenneskelighet: medmenneskelighet,
    Planmessighet: planmessighet,
  });

  //await addDoc(testResultCollection, testResultsData);
}
