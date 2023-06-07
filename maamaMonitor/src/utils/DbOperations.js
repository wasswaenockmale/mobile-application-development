import { db } from '../Firebase/Config';
import { onValue, ref } from 'firebase/database';

// For saving date to the database
export async function setMother(pId, name,age, lnmp, nok, nokNumber){
    try {
        await set(ref(db, `${userType}/` + pId), {
            name: name,
            age: age,
            lnmp: lnmp,
            nok: nok,
            nokNumber: nokNumber,
            // More is to be saved to this user.
        }).then(() => {
            alert('Account created');
            
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

export async function patientExists(email){
    try{
        const response = await ref(db, 'patients/' + email);
        onValue(res,(snapshot) => {
            if(snapshot.exists){
                return true
            }else{
                return false;
            }
        })
    }catch (error) {
        console.error(error)
    }
}