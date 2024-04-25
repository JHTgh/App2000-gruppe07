// kompnenten skal ha et "form" hvor det er mulig å legge til en ansatt i databasen

import ProfilForm from "./profilForm";

const LeggTilProfil = ({formData, setFormData, bedriftId}) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Putter inn firma som FK til ansatt. 
            const employeeWithCompany = {
                name: formData.name,
                email: formData.email,
                address: formData.address,
                postnummer: formData.postnummer,
                stilling: formData.stilling,
                testId: formData.testId,
                companyId: bedriftId
            };
            console.log('employeeWithCompany:');
            console.log(employeeWithCompany);
            // legger til ny ansatt/profil i database.
            await leggTilAnsatt(employeeWithCompany);
            // Blanker ut form etter en bruker er opprettet.
            setEmployeeData({
                name: '',
                email: '',
                address: '',
                postnummer: '',
                jobbtittel: '',
                testId: ''
        
              });
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <ProfilForm formData={formData} behandleTrykk={handleSubmit} setFormData={setFormData} typeEvent={"submit"} />
        </>
    )
}

export default LeggTilProfil;