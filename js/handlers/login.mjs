
import { BASE_URL } from "../api/constants.mjs";
import { login } from "../api/auth/login.mjs";

export function setLoginFormListener() {
    const loginForm = document.querySelector("#login-form");
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        //Send to api
        login(profile)
    })
}
