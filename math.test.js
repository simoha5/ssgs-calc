// a.test.js
const { add, subtract, multiply, divide} = require('./math.js');
test("Test addizione1", () => {
    expect(add(10, 5)).toBe(15);
});
test("Test addizione2", () => {
    expect(add(-10, 5)).toBe(-5);
});
test("Test addizione3", () => {
    expect(add(-10, -5)).toBe(-15);
});

test("Test sottrazione", () => {
    expect(subtract(10, 5)).toBe(5);
});
test("Test sottrazione negativa", () => {
    expect(subtract(5, 10)).toBe(-5);
});
test("Test sottrazione zero", () => {
    expect(subtract(0, 0)).toBe(0);
});

test("Test moltiplicazione", () => {
    expect(multiply(10, 5)).toBe(50);
});
test("Test moltiplicazione negativa", () => {
    expect(multiply(-10, 5)).toBe(-50);
});
test("Test moltiplicazione zero", () => {
    expect(multiply(0, 5)).toBe(0);
});

test("Test divisione", () => {
    expect(divide(10, 5)).toBe(2);
});
test("Test divisione negativa", () => {
    expect(divide(-10, 5)).toBe(-2);
});
test("Test divisione zero", () => {
    expect(divide(0, 5)).toBe(0);
});

test("Test divisione per zero", () => {
    expect(() => divide(10, 0)).toThrow("Errore: divisione per zero!");
});
