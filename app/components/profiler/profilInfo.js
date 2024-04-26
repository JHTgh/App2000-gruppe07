// panel som viser frem info om valgt profil
import ProfilForm from "./profilForm";
import { updateProfil } from "@/app/api/profil/ansatt/updateProfil";
import { deleteProfil } from '@/app/api/profil/ansatt/deleteProfil';

const ProfilInfo = ({ profil, formData, setFormData, oppdaterSlett, oppdaterUpdate }) => {


    const handleUpdate = async (event) => {
        event.preventDefault();
        // sjekker om det er endring
        console.log('Endringer i profilen, oppdaterer...');
        const result = await updateProfil(profil.id, formData, profil.companyId);
        // hvis oppdatering vellykket, oppdaterer profil i liste
        console.log(result);
        const oppdatertProfil = {
            id: profil.id,
            ...formData,
            companyId: profil.companyId
        }
        if(result) {
            oppdaterUpdate(oppdatertProfil);
        }
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        console.log('sletter profil: ' + profil.navn);
        const result = await deleteProfil(profil.id);
        // oppdaterer liste hvis denne går igjennom
        if(result) {
            oppdaterSlett(profil);
        }
    }

    return (
        <ProfilForm profil={profil} formData={formData} behandleTrykk={handleUpdate} behandleEkstraTrykk={handleDelete} setFormData={setFormData} typeEvent="oppdater" />
    );
};

export default ProfilInfo;