import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useState,
} from "react";

export interface ReturnUseBoolean {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}
/**
 * Una simple abstracción para jugar con un booleano, tener operaciones comunes y
 * controlar el estado del booleano.
 * @param {boolean} boolean - defaultValue: Valor inicial del booleano.
 * @returns {ReturnUseBoolean} ReturnType - Objeto con las siguientes propiedades:
 * - value - El valor actual del booleano.
 * - setValue: - Una función para cambiar el valor del booleano por el parámetro recibido.
 * - setTrue: - Una función para establecer el valor booleano en verdadero.
 * - setFalse: - Una función para establecer el valor booleano en falso.
 * - toggle: - Una función para alternar el booleano.
 */
export function useBoolean(defaultValue?: boolean): ReturnUseBoolean {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return {
    value,
    setValue,
    setTrue,
    setFalse,
    toggle,
  };
}
