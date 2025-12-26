// https://github.com/TanStack/virtual/issues/743#issuecomment-2894893548
export const useNoMemo = <const T>(factory: () => T): T => {
  "use no memo";
  return factory();
};
