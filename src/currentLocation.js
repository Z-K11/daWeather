export const location = (() => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation not supported'));
      return;
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          resolve(`${pos.coords.latitude},${pos.coords.longitude}`);
        },
        (err) => {
          reject(err);
        },
        { timeout: 5000 }
      );
    }
  });
})();
