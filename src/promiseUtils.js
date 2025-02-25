export default function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("error"));
    }

    let results = [];
    let total = promises.length;

    if (total === 0) {
      return resolve([]);
    }

    for (let i = 0; i < total; i++) {
      Promise.resolve(promises[i])
        .then((value) => {
          results[i] = value;
          if (i == total - 1) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
}
