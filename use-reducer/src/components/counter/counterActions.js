export const increment = { type: "INCREMENT_COUNT" };
export const decrement = { type: "DECREMENT_COUNT" };
export const reset = { type: "RESET_COUNT" };

export const incrementByValue = (amount) => {
  return { type: "INCREMENT_COUNT_BY_VALUE", payload: amount };
};
