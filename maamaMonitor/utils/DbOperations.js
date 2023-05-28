import { db } from '../../Firebase/firebase';
import { DataSnapshot, onValue, ref } from 'firebase/database';

// For saving date to the database
export async function setMother(pId, name,username, email, phone, password, userType){
    try {
        await set(ref(db, `${userType}/` + pId), {
            name: name,
            username: username,
            email: email,
            phone: phone,
            password: password,
            // More is to be saved to this user.
        }).then(() => {
            alert('Account created')
        }).catch((error) => {
            alert(error);
        });
    } catch (error) {
        console.error(error);
    }
}


export async function getPatient() {
    try {
        const response = await ref(db, 'patients/' + patientId + '/history');
        onValue(response, (snapshot)=>{
            const data = snapshot.val();
            
        })
    } catch (error) {
        console.error(error);
    }
}