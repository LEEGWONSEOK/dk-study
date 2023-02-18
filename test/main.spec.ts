import { add, subtract, multiply, divide } from '../src/main';

describe('test', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(2, 3)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(divide(6, 3)).toBe(2);
    });
  });
});
