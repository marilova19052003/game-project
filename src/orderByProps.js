export function orderByProps(obj, order) {
  const result = [];

  // Сначала добавляем свойства из order
  for (const key of order) {
    if (key in obj) {
      result.push({ key, value: obj[key] });
    }
  }

  // Затем добавляем остальные свойства, сортируя их по алфавиту
  const remainingKeys = Object.keys(obj)
    .filter((key) => !order.includes(key))
    .sort();
  for (const key of remainingKeys) {
    result.push({ key, value: obj[key] });
  }

  return result;
}
