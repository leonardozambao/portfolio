export function getTranslation(obj, key) {
  return key.split(".").reduce((acc, part) => acc?.[part], obj);
}
