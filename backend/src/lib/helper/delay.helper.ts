export const delay = async (seconds: number) => {
  await new Promise((resolve) => setTimeout(resolve, seconds));
};
