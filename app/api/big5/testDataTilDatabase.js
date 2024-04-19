import { collection, addDoc } from "firebase/firestore";
import { db } from "../../database/firebase";


export async function testDataTilDatabase(data, ansID) {

    const testResultCollection = collection (db, "testResults");

    console.log(data);


    // lager ett objekt for alle kategorier
    const nevrotisisme = {
        score: data.nevrotisisme.score,
        angst: data.nevrotisisme.angst,
        sinne: data.nevrotisisme.sinne,
        deprisjon: data.nevrotisisme.deprisjon,
        selvbevissthet: data.nevrotisisme.selvbevissthet,
        impulsivitet: data.nevrotisisme.impulsivitet,
        sårbarhet: data.nevrotisisme.sårbarhet
    }
    const ekstroversjon ={
        score: data.ekstroversjon.score,
        vennlighet: data.ekstroversjon.vennlighet,
        sosiabilitet: data.ekstroversjon.sosiabilitet,
        selvmarkering: data.ekstroversjon.selvmarkering,
        aktivitet: data.ekstroversjon.aktivitet,
        spenningsSøking: data.ekstroversjon.spenningsSøking,
        positiveFølelser: data.ekstroversjon.positiveFølelser
    }
    const åpenhetForErfaringer = {
        score: data.åpenhetForErfaringer.score,
        fantasi: data.åpenhetForErfaringer.fantasi,
        estetikk: data.åpenhetForErfaringer.estetikk,
        følelser: data.åpenhetForErfaringer.følelser,
        eventyrlyst: data.åpenhetForErfaringer.eventyrlyst,
        intellekt: data.åpenhetForErfaringer.intellekt,
        liberaleVerdier: data.åpenhetForErfaringer.liberaleVerdier
    }
    const medmenneskelighet = {
        score: data.medmenneskelighet.score,
        tillit: data.medmenneskelighet.tillit,
        moral: data.medmenneskelighet.moral,
        altruisme: data.medmenneskelighet.altruisme,
        føyelighet: data.medmenneskelighet.føyelighet,
        beskjedenhet: data.medmenneskelighet.beskjedenhet,
        følsomhet: data.medmenneskelighet.følsomhet
    }
    const planmessighet = {
        score: data.planmessighet.score,
        kompetanse: data.planmessighet.kompetanse,
        orden: data.planmessighet.orden,
        pliktoppfyllenhet: data.planmessighet.pliktoppfyllenhet,
        prestasjonsstreben: data.planmessighet.prestasjonsstreben,
        selvdisiplin: data.planmessighet.selvdisiplin,
        betenksomhet: data.planmessighet.betenksomhet
    }

    // legger til uid i data samlingen
    const testResultsData = {
        ansattID: ansID,
        Nevrotisisme: nevrotisisme,
        Ekstroversjon: ekstroversjon,
        ÅpenhetForErfaringer: åpenhetForErfaringer,
        Medmenneskelighet: medmenneskelighet,
        Planmessighet: planmessighet
    };

    console.log(testResultsData);

    await addDoc(testResultCollection, testResultsData);
}