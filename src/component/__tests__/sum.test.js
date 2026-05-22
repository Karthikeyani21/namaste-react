import sums from "../sum"

test("sum function should add a and b", () => {

    const testSum = sums(4, 6);

    // assertion
    expect(testSum).toBe(10)
})