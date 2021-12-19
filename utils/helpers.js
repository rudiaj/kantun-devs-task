export const formatToNumber = (value) => Number(value);

export function handleInputChange(value, name, onChange, modifier) {
  onChange((prev) => ({
    ...prev,
    [name]: typeof modifier === "function" ? modifier(value) : value,
  }));
}
