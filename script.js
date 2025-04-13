//your JS code here. If required.
const output = document.getElementById("output");
 // Function that returns a promise resolving after a random delay
  function createTimedPromise(index) {
    const delay = Math.random() * 2000 + 1000; // 1000ms to 3000ms
    return new Promise(resolve => {
      const start = performance.now();
      setTimeout(() => {
        const end = performance.now();
        const timeTaken = ((end - start) / 1000).toFixed(3);
        resolve({ index, timeTaken });
      }, delay);
    });
  }

  async function handlePromises() {
    const startTime = performance.now();

    const promises = [createTimedPromise(1), createTimedPromise(2), createTimedPromise(3)];

    const results = await Promise.all(promises);

    const endTime = performance.now();
    const totalTime = ((endTime - startTime) / 1000).toFixed(3);

    // Clear loading row
    output.innerHTML = '';

    // Add each resolved promise
    results.forEach(result => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>Promise ${result.index}</td><td>${result.timeTaken}</td>`;
      output.appendChild(row);
    });

    // Add total row
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${totalTime}</strong></td>`;
    output.appendChild(totalRow);
  }

  handlePromises();