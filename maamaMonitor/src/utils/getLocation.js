// This function returns the location coordinates of the user of the application. 
export async function getLocation(Location) {
    const status = await Location.requestForegroundPermissionsAsync();
    
    if(status == 'granted'){
        alert('Permision granted');
        return;
    }

    const location = await Location.getCurrentPositionAsync({});
    
    return location;
}