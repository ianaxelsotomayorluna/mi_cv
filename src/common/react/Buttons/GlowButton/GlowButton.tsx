// ---Dependencies
import { type ReactElement } from "react";
// ---UI Dependencies
import { Button, type ButtonProps } from "antd";
// ---Styles
import style from "./GlowButton.module.scss";

interface Props extends ButtonProps {
  glowVariant: "dark" | "red";
  width?: string;
  margin?: string;
  maxWidth?: number | string;
}

/**
 * GlowButton Component: Antd Button with a glowing effect in variants pink and blue
 * @param {Props} props - Custom props "glowVariant", "width", "maxWidth"
 * @returns {ReactElement}
 */
export function GlowButton({
  glowVariant,
  margin,
  width,
  maxWidth,
  ...otherProps
}: Props): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  const styles = {
    ...otherProps?.style,
    ...{
      maxWidth:
        maxWidth && (typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth),
      width,
      margin,
    },
  };
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <Button
      {...otherProps}
      style={styles}
      className={`${style.GlowButton} ${style[`GlowButton-${glowVariant}`]}`}
    />
  );
}
