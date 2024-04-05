export const utils = {
  formatCoinBRL: (value: number) => {
    const valueFormated = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    return valueFormated;
  },
};
