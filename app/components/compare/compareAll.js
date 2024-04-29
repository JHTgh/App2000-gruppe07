import BarChart from "./compareChart";
import styles from './page.module.css';

/**
 * @author Kjartan
 * Liten hjelpe metode/funksjon som returnerer en random farge
 * 
 * @returns {string} random farge
 */
const getRandomColors = () => {
    // funksjon som returnerer en random farge
    return (`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.8)`);
  };

  /**
   * @author Kjartan
   * Denne funksjonen bygger og henter all data som trengs for å vise frem diagrammer
   * Både data som altid vil være der og data for hver enkelt profil
   * 
   * @param {Array[object]} valgteProfiler 
   * @return {JSX.Element} Alle diagrammer for alle profiler 
   */
function CompareAll(valgteProfiler) {
    const profiler = valgteProfiler.valgteProfiler;
    
    // legger inn en farge per profil inn i profil objektet
    profiler.forEach(profil => profil.farge = getRandomColors());

    // lager en liste over alle de forskjellige teamer vi har score til, samt en tittel for grafene
    const temaListe = fyllTemaListe();
    const tittelForGrafer = ['Big Five' ,'Nevrotisisme', 'Ekstroversjon', 'Åpenhet For Erfaringer', 'Medmenneskelighet', 'Planmessighet']
    //const scoreListe = fyllScoreListe(profiler);
    const scoreListe = [
        fyllHovedScoreListe(profiler),
        fyllNevrotisismeScoreListe(profiler),
        fyllEkstroversjonScoreListe(profiler),
        fyllÅpenhetForErfaringerScoreListe(profiler),
        fyllMedmenneskelighetScoreListe(profiler),
        fyllPlanmessighetScoreListe(profiler)
    ]
    const hovedScoreListe = fyllHovedScoreListe(profiler);
    const nevrotisismeScoreListe = fyllNevrotisismeScoreListe(profiler);
    const ekstroversjonScoreListe = fyllEkstroversjonScoreListe(profiler);
    const åpenhetForErfaringerScoreListe = fyllÅpenhetForErfaringerScoreListe(profiler);
    const medmenneskelighetScoreListe = fyllMedmenneskelighetScoreListe(profiler);
    const planmessighetScoreListe = fyllPlanmessighetScoreListe(profiler);
    
    function fyllTemaListe() {
        // legger inn tittel for alt som er tatt test på
        const hovedScore = ['Nevrotisisme', 'Ekstroversjon', 'Åpenhet For Erfaringer', 'Medmenneskelighet', 'Planmessighet'];

        const nevrotisisme = ['Angst', 'Sinne', 'Deprisjon', 'Selvbevissthet', 'Impulsivitet', 'Sårbarhet'];
        const ekstroversjon = ['Vennlighet', 'Sosiabilitet', 'Selvmarkering', 'Aktivitet', 'Spennings Søking', 'Positive Følelser'];
        const åpenhetForErfaringer = ['Fantasi', 'Estetikk', 'Følelser', 'Eventyrlyst', 'Intellekt', 'Liberale Verdier'];
        const medmenneskelighet = ['Tillit', 'Moral', 'Altruisme', 'Føyelighet', 'Beskjedenhet', 'Følsomhet'];
        const planmessighet = ['Kompetanse', 'Orden', 'Pliktoppfyllenhet', 'Prestasjonsstreben', 'Selvdisiplin', 'Betenksomhet'];

        return [hovedScore, nevrotisisme, ekstroversjon, åpenhetForErfaringer, medmenneskelighet, planmessighet];
    }

    if(profiler.length === 0) {
        return(
            <div>
                <p className={styles.ingenting}>Velg profilene du vil sammenligne</p>
            </div>
        );
    }
    if(profiler[0] === undefined) {
        return(
            <div>
                <p>Velg en bruker</p>
            </div>
        );
    }
    // sorterer score fra scoreListe (liste over alle som skal sammenlignes)
    //men det er masse annen data vi ikke trenger i scoredata 
    function fyllHovedScoreListe(profiler) {
        if(profiler.length === 0) {
            return null;
        }
        if(profiler[0] === undefined) {
            return null;
        }
        const enTest = profiler.map(bruker => (
            {
                navn: bruker.navn,
                farge: bruker.farge,
                score: [
                    bruker.scoreData.Nevrotisisme.score,
                    bruker.scoreData.Ekstroversjon.score,
                    bruker.scoreData.ÅpenhetForErfaringer.score,
                    bruker.scoreData.Medmenneskelighet.score,
                    bruker.scoreData.Planmessighet.score
                ],
            }));

        return(enTest);
    }
    function fyllNevrotisismeScoreListe(profiler) {
        if(profiler.length === 0) {
            return null;
        }
        if(profiler[0] === undefined) {
            return null;
        }
        const enTest = profiler.map(bruker => ({
                navn: bruker.navn,
                farge: bruker.farge,
                score: [
                    bruker.scoreData.Nevrotisisme.angst,
                    bruker.scoreData.Nevrotisisme.sinne,
                    bruker.scoreData.Nevrotisisme.deprisjon,
                    bruker.scoreData.Nevrotisisme.selvbevissthet,
                    bruker.scoreData.Nevrotisisme.impulsivitet,
                    bruker.scoreData.Nevrotisisme.sårbarhet
                ]
            }));

        return(enTest);
    }
    function fyllEkstroversjonScoreListe(profiler) {
        if(profiler.length === 0) {
            return null;
        }
        if(profiler[0] === undefined) {
            return null;
        }
        const enTest = profiler.map(bruker => ({
                navn: bruker.navn,
                farge: bruker.farge,
                score: [
                    bruker.scoreData.Ekstroversjon.vennlighet,
                    bruker.scoreData.Ekstroversjon.sosiabilitet,
                    bruker.scoreData.Ekstroversjon.selvmarkering,
                    bruker.scoreData.Ekstroversjon.aktivitet,
                    bruker.scoreData.Ekstroversjon.spenningsSøking,
                    bruker.scoreData.Ekstroversjon.positiveFølelser
                ]
            }));

        return(enTest);
    }
    function fyllÅpenhetForErfaringerScoreListe(profiler) {
        if(profiler.length === 0) {
            return null;
        }
        if(profiler[0] === undefined) {
            return null;
        }
        const enTest = profiler.map(bruker => ({
                navn: bruker.navn,
                farge: bruker.farge,
                score: [
                    bruker.scoreData.ÅpenhetForErfaringer.fantasi,
                    bruker.scoreData.ÅpenhetForErfaringer.estetikk,
                    bruker.scoreData.ÅpenhetForErfaringer.følelser,
                    bruker.scoreData.ÅpenhetForErfaringer.eventyrlyst,
                    bruker.scoreData.ÅpenhetForErfaringer.intellekt,
                    bruker.scoreData.ÅpenhetForErfaringer.liberaleVerdier
                ]
            }));

        return(enTest);
    }
    function fyllMedmenneskelighetScoreListe(profiler) {
        if(profiler.length === 0) {
            return null;
        }
        if(profiler[0] === undefined) {
            return null;
        }
        const enTest = profiler.map(bruker => ({
                navn: bruker.navn,
                farge: bruker.farge,
                score: [
                    bruker.scoreData.Medmenneskelighet.tillit,
                    bruker.scoreData.Medmenneskelighet.moral,
                    bruker.scoreData.Medmenneskelighet.altruisme,
                    bruker.scoreData.Medmenneskelighet.føyelighet,
                    bruker.scoreData.Medmenneskelighet.beskjedenhet,
                    bruker.scoreData.Medmenneskelighet.følsomhet
                ]
            }));

        return(enTest);
    }
    function fyllPlanmessighetScoreListe(profiler) {
        if(profiler.length === 0) {
            return null;
        }
        if(profiler[0] === undefined) {
            return null;
        }
        const enTest = profiler.map(bruker => ({
                navn: bruker.navn,
                farge: bruker.farge,
                score: [
                    bruker.scoreData.Planmessighet.kompetanse,
                    bruker.scoreData.Planmessighet.orden,
                    bruker.scoreData.Planmessighet.pliktoppfyllenhet,
                    bruker.scoreData.Planmessighet.prestasjonsstreben,
                    bruker.scoreData.Planmessighet.selvdisiplin,
                    bruker.scoreData.Planmessighet.betenksomhet
                ]
            }));

        return(enTest);
    }

    // returnerer alle charts i en løkke 
    return (
        <div>
           {temaListe.map((tema, index) => (
                <div key={index}>
                    <div>
                        {tittelForGrafer[index]}
                    </div>
                    <BarChart 
                        tittel={tema} 
                        testData={scoreListe[index]}
                    />
                </div>
            ))}
        </div>
    )
}

export default CompareAll;