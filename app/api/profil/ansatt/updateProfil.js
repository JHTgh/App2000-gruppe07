

export async function updateProfil(id, nyData) {
    
    try{
        await setDoc(doc(db, "ansatte", id), {
        Adresse: nyData.adresse,
        Epost: nyData.epost,
        Navn: nyData.navn,
        PostNr: nyData.postNr,
        Stilling: nyData.stilling,
        TestId: nyData.testId,
        CompanyId: nyData.companyId
        });
    }catch(error){
        console.log(error);
    }
}
