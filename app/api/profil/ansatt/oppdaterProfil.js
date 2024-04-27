

export async function oppdaterProfil(data) {


    await setDoc(doc(db, "ansatte", data.ansattId), data);

    /*
    await setDoc(doc(db, 'testResults', id), {
        Nevrotisisme: nevrotisisme,
        Ekstroversjon: ekstroversjon,
        ÅpenhetForErfaringer: åpenhetForErfaringer,
        Medmenneskelighet: medmenneskelighet,
        Planmessighet: planmessighet
    });
    */
}