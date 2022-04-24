import { usersUrl } from "./Constants";

export const fetchUrl = async() =>{
    const requestUrl = await fetch(usersUrl);
    const responseData = await requestUrl.json();
    return responseData;
}