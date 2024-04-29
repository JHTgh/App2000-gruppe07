// panel som viser frem info om valgt profil
import ProfilForm from "./profilForm";
import { updateProfil } from "@/app/api/profil/ansatt/updateProfil";
import { deleteProfil } from '@/app/api/profil/ansatt/deleteProfil';

/**
 * @author Kjartan og Mie
 * @con Jørgen, ChatGPT
 * 
 * Komponenten viser frem info om en valgt profil i ProfilForm
 * Har også to funksjoner som sendes videre som props til ProfilForm
 * bruker to funksjoner fra profiler/page.js, oppdaterer og fjerner elemet fra listeProfiler.js
 * 
 * @param {object} profil - om valgt profil
 * @param {object} formData - alle info om valgt profil
 * @param {function} setFormData - funksjon for å kalle på setFormData i ProfilForm
 * @param {function} oppdaterSlett - funksjon for å kalle på oppdaterSlett i ProfilerPage
 * @param {function} oppdaterUpdate - funksjon for å kalle på oppdaterUpdate i ProfilerPage
 * @returns {JSX.Element} ProfilInfo kompoenten
 */
const ProfilInfo = ({ profil, formData, setFormData, oppdaterSlett, oppdaterUpdate }) => {


    const handleUpdate = async (event) => {
        event.preventDefault();
        // sjekker om det er endring
        //console.log('Endringer i profilen, oppdaterer...');
        const result = await updateProfil(profil.id, formData, profil.companyId);
        
        // hvis oppdatering vellykket, oppdaterer profil i liste - venter på dette
        //console.log(result);
        if(result) {
            const oppdatertProfil = {
                id: profil.id,
                ...formData,
                companyId: profil.companyId
            }
            oppdaterUpdate(oppdatertProfil);
        }
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        //console.log('sletter profil: ' + profil.navn);
        const result = await deleteProfil(profil.id);
        // oppdaterer liste hvis denne går igjennom
        if(result) {
            oppdaterSlett(profil);
        }
    }

    return (
        <ProfilForm formData={formData} behandleTrykk={handleUpdate} behandleEkstraTrykk={handleDelete} setFormData={setFormData} typeEvent="oppdater" />
    );
};

export default ProfilInfo;