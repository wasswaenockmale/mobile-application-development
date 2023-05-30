export async function zygoteAge(){
    const date = new Date();
    const lnmpDate = await callDB();
    return date.getMonth - lnmpDate;
}
