import RocketTest from './rocketsReducer';

jest.mock('axios');
describe('Rockets must pass the test', () => {
  test('added Rockets must return data', () => {
    expect(RocketTest.addedRockets()).toBeDefined();
  });
  test('added Rockets return value length must be 3', () => {
    expect(RocketTest.addedRockets()).toHaveLength(4);
  });
  test('added Rockets must return name t', () => {
    expect(RocketTest.addedRockets()[3].description).toBe('For pure comfort');
  });
});
