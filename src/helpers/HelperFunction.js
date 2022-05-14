import { appUrl } from "./Constants";

export const fetchUrl = async() =>{
    const requestUrl = await fetch(`${appUrl}/users`);
    const responseData = await requestUrl.json();
    return responseData;
}

export const addUser = async(name) =>{
    let payload = {name};
    const requestUrl = await fetch(`${appUrl}/users`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers:{
            'Content-type': 'application/json'
        }
    });
    const responseData = await requestUrl.json();
    return responseData;
}