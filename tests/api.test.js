const getCitation = require('../src/api');

test("L'API retourne une citation valide", async () => {
  const result = await getCitation();
  expect(typeof result).toBe('string');
  expect(result.length).toBeGreaterThan(10);
});
