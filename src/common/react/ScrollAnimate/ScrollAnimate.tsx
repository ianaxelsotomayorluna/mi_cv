// ---Dependencies
import React from "react";
import {
  type ReactNode,
  type ReactElement,
  useRef,
  useEffect,
  useState,
} from "react";
// ---Styles
import style from "./ScrollAnimate.module.scss";

interface Props {
  children: ReactNode;
  /** Si se activa la animación se repetirá cada que el componente sea visible */
  always?: boolean;
  /** Numero en ms para retrasar la animación */
  delay?: number;
  /** Renderiza el children sin modificar ni animar cuando TRUE */
  disabled?: boolean;
}

/**
 * ScrollAnimate Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 * @returns {ReactElement}
 */
export function ScrollAnimate(props: Props): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const [classNames, setClassnames] = useState(style.ScrollAnimate);
  const { children, always = false, delay = 0, disabled } = props;
  // -----------------------MAIN METHODS
  const ref = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    if (!ref.current) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setClassnames(`${style.ScrollAnimate} ${style.ScrollAnimate}-show`);
        } else {
          if (always) {
            setClassnames(style.ScrollAnimate);
          }
        }
      },
      {
        threshold: 0.6,
      },
    );

    observer.current.observe(ref.current);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [ref]);
  // -----------------------AUX METHODS
  // -----------------------RENDER
  if (disabled) return <>{children}</>;
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={classNames}
    >
      {children}
    </div>
  );
}
