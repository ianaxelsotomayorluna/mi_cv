import type { GridSystem } from "react-forge-grid";

/**
 * basicResponsive function: Handle the grid for responsivity basic behaviors for being used in paramas for antd cols
 * @param {number} normalSize - Number to handle the size of antd colums in mid to xxl screens
 * @returns
 */
export function basicResponsive(normalSize: number) {
  return {
    xs: 100,
    sm: 100,
    md: normalSize,
    lg: normalSize,
    xl: normalSize,
    xxl: normalSize,
  };
}

/**
 * basicResponsiveMD function: Handle the grid for responsivity basic behaviors for being used in paramas for antd cols
 * @param {number} normalSize - Number to handle the size of antd colums in mid to xxl screens
 * @returns
 */
export function basicResponsiveMD(normalSize: number) {
  return {
    xs: 100,
    sm: 100,
    md: 100,
    lg: normalSize,
    xl: normalSize,
    xxl: normalSize,
  };
}

/**
 * customResponsive: Asigna "normalSize" a tamaños lg, xl y xxl, asigna mobileSize a xs, sm y md
 * @param {number} normalSize - Number to handle the size of antd colums in mid to xxl screens
 * @returns
 */
export function customResponsive(normalSize: number, mobileSize: number) {
  return {
    xs: mobileSize,
    sm: mobileSize,
    md: normalSize,
    lg: normalSize,
    xl: normalSize,
    xxl: normalSize,
  };
}

/**
 * customResponsiveMD: Asigna "normalSize" a tamaños lg, xl y xxl, asigna mobileSize a xs, sm y md
 * @param {number} normalSize - Number to handle the size of antd colums in mid to xxl screens
 * @returns
 */
export function customResponsiveMD(normalSize: number, mobileSize: number) {
  return {
    xs: mobileSize,
    sm: mobileSize,
    md: mobileSize,
    lg: normalSize,
    xl: normalSize,
    xxl: normalSize,
  };
}

/** propSizePicker: setea un valor por defecto para las propiedas del grid y setea las propiedades que quieras modificar */
export function propSizePicker(props: GridSystem, rest: number) {
  return {
    xs: props.xs || rest,
    sm: props.sm || rest,
    md: props.md || rest,
    lg: props.lg || rest,
    xl: props.xl || rest,
    xxl: props.xxl || rest,
  };
}
