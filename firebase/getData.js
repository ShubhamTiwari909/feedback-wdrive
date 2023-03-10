import { getDocs, collection } from 'firebase/firestore'
import { database } from "./firebaseConfig";

export const getData = async (setData) => {
    const databaseRef = collection(database, `/Gallary/Feedbacks/feedbacks`)
    await getDocs(databaseRef)
        .then(response => {
            setData(response.docs.map(data => {
                return { ...data.data(), id: data.id }
            }))
        }).catch(err => {
            console.error(err)
        })
}
