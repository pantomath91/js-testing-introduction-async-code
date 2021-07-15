// Promises
// Be sure to return the promise - if you omit this return statement, your test will complete before the promise returned from fetchData resolves and then() has a chance to execute the callback.
test("the data is peanut butter", () => {
  return fetchData().then(data => {
    expect(data).toBe("peanut butter");
  });
});

// If you expect a promise to be rejected use the .rejects matcher. It works analogically to the .resolves matcher. If the promise is fulfilled, the test will automatically fail.

test("the fetch fails with an error", () => {
  return expect(fetchData()).rejects.toMatch("error");
});

// Async/await
// To write an async test, use the async keyword in front of the function passed to test. For example, the same fetchData scenario can be tested with:

test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

// You can combine async and await with .resolves or .rejects.
test("the data is peanut butter", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  await expect(fetchData()).rejects.toThrow("error");
});
// In these cases, async and await are effectively syntactic sugar for the same logic as the promises example uses.