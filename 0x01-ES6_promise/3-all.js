// 3-all.js
import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
        .then(([photo, user]) => {
            console.log(`${user.body.firstName} ${user.body.lastName}`);
        })
        .catch(error => {
            console.error("Signup system offline");
        });
}

export default handleProfileSignup;
