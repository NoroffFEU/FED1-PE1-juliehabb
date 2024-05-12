import { BASE_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs"

const action = "auth/login";
const method = "post";

export async function login(profile) {
    const loginURL = BASE_URL + action;
    const body = JSON.stringify(profile);
    
    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })
    const result = await response.json()
    
    storage.save("token", result.data.accessToken);
    storage.save("profile", result.data)

    alert("You have been logged in.");
}



