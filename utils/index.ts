export const get = (elt: HTMLElement, key: string) =>
  getComputedStyle(elt).getPropertyValue(key);
