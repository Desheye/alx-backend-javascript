// 0-promise.js
export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation, e.g., an API call
        setTimeout(() => {
            const success = true; // Change this to false to simulate a failure
            if (success) {
                resolve("API response data");
            } else {
                reject("Error occurred");
            }
        }, 1000); // Simulate a 1-second delay
    });
}
