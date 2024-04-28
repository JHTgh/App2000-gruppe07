import { collection, setDoc, doc} from "firebase/firestore";
import { db } from "../../database/firebase";


/**
 * @author Kjartan
 * @contributor Gimini og ChatGPT, CODEIUM (for JSDocs)
 * Funkjson for å lagre testdata til databasen. Gjør om all data til slik vi vil ha den i databasen
 *
 * @param {object} data - testdataen.
 * @param {string} id - id til testdataen
 */
export async function testDataTilDatabase(data, id) {

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
    // id for test er også nøkkel for dokumentet
    // her legger vi ikke til et dokument men heller oppdaterer, legger til hvis denne nøkkelen ikke har et dokument
    await setDoc(doc(db, 'testResults', id), {
        Nevrotisisme: nevrotisisme,
        Ekstroversjon: ekstroversjon,
        ÅpenhetForErfaringer: åpenhetForErfaringer,
        Medmenneskelighet: medmenneskelighet,
        Planmessighet: planmessighet
    });
}