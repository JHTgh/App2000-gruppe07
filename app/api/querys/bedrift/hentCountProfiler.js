export async function hentCount(bedriftID) {
    try {
        if (!bedriftID) {
            throw new Error('bedriftID is null');
        }

        const countQuery = query(collection(db, 'ansatte'), where('bedriftID', '==', bedriftID));
        const countSnapshot = await getDocs(countQuery);

        if (!countSnapshot) {
            throw new Error('countSnapshot is null');
        }

        const count = countSnapshot.size;
        return count;
    } catch (error) {
        console.error('Error getting count: ', error);
        return null;
    }
}