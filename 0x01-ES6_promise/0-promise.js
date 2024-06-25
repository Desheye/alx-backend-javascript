export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('API response data');
      } else {
        reject(new Error('Error occurred'));
      }
    }, 1000);
  });
}
