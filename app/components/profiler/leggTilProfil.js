// kompnenten skal ha et "form" hvor det er mulig å legge til en ansatt i databasen

import ProfilForm from "./profilForm";
import { leggTilAnsatt } from "@/app/api/profil/ansatt/leggTilAnsatt";
import { hentTestTilDatabase } from "@/app/api/big5/hentTestTilDatabase"; 

/**
 * @author Mie og Jørgen
 * @con Kjartan, codeium 
 * Denne komponenten bruker et Form fra profilForm.js. har også funksjonaliteten til å legge til en profil
 * 
 * @param {objekt} formData - tabell med info om profilen.
 * @param {function} setFormData - funksjon for å kalle på setFormData i ProfilerPage.js
 * @param {string} bedriftId - id for bedriften.
 * @param {function} oppdaterListe - funksjon for å kalle på oppdaterListe i ProfilerPage.js
 * @returns {JSX.Element} - komponenten LeggTilProfil
 */
const LeggTilProfil = ({formData, setFormData, bedriftId, oppdaterListe}) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Putter inn firma som FK til ansatt. 
            const profilMedBedrifID = {
                Navn: formData.navn,
                Epost: formData.epost,
                Adresse: formData.adresse,
                PostNr: formData.postNr,
                Stilling: formData.stilling,
                TestId: formData.testId,
                CompanyId: bedriftId
            };
            console.log('profilMedBedrifID:');
            console.log(profilMedBedrifID);
            // legger til ny ansatt/profil i database.
            const nyAnsatt = await leggTilAnsatt(profilMedBedrifID);
            // legger også inn test scor informsajon inn i databasen 

            await hentTestTilDatabase(formData.testId);

            //legger også ny profil inn til liste
            // må gjøre om dataen igjen (stor forbokstav i database men ikke i appen)
            const profil = {
                id: nyAnsatt.id,
                ...formData,
                companyId: bedriftId
            };
            console.log('profil:');
            console.log(profil);

            oppdaterListe(profil);
            // Blanker ut form etter en profil er opprettet.
            setFormData({
                navn: '',
                epost: '',
                adresse: '',
                postNr: '',
                stilling: '',
                testId: ''
              });

        } catch (error) {
            console.log('feil med lagring av profil (LeggTilProfil)');
            console.error(error);
        }
    };


    return (
        <>
            <ProfilForm formData={formData} behandleTrykk={handleSubmit} behandleEkstraTrykk={null} setFormData={setFormData} typeEvent={"submit"} />
        </>
    )
}

export default LeggTilProfil;