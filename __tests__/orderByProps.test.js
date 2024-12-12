import { orderByProps } from "../src/orderByProps";

test("should sort properties according to the specified order", () => {
  const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };
  const order = ["name", "level"];
  const expected = [
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
  ];

  expect(orderByProps(obj, order)).toEqual(expected);
});
