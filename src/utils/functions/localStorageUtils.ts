export function saveToLocalStorage<k>(keyName: string, obj: k) {
  try {
    const objetoString = JSON.stringify(obj);
    localStorage.setItem(keyName, objetoString);
  } catch (error) {
    console.error("Error al guardar en localStorage:", error);
  }
}

export function getFromLocalStorage<K>(keyName: string) {
  try {
    const objetoString = localStorage.getItem(keyName);
    if (objetoString) {
      return JSON.parse(objetoString) as K;
    }
    return null; // Retorna null si no encuentra el objeto con esa keyName
  } catch (error) {
    console.error("Error al obtener de localStorage:", error);
    return null;
  }
}
