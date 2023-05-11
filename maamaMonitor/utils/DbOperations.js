import { db } from '../../Firebase/firebase';
import { ref } from 'firebase/database';

// For saving date to the database
export async function create(pId, name,username, email, phone, password){
    try {
        await set(ref(db, 'medicalCenter/' + pId), {
            name: name,
            username: username,
            email: email,
            phone: phone,
            password: password,
            // More is to be saved to this user.
        }).then(() => {
            alert('Data submitted')
        }).catch((error) => {
            alert(error);
        });
    } catch (error) {
        console.error(error);
    }
}


export async function getPatients() {
    
}

