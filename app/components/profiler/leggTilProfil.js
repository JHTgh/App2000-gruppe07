// kompnenten skal ha et "form" hvor det er mulig å legge til en ansatt i databasen

import ProfilForm from "./profilForm";
import { leggTilAnsatt } from "@/app/api/profil/ansatt/leggTilAnsatt";

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
            //legger også ny profil inn til liste
            // må gjøre om dataen igjen (stor for bokstav i database men ikke i appen)
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
            <ProfilForm profil={null} formData={formData} behandleTrykk={handleSubmit} setFormData={setFormData} typeEvent={"submit"} />
        </>
    )
}

export default LeggTilProfil;