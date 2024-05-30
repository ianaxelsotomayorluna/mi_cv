// ---Dependencies
import { ConfigProvider, theme } from "antd";
import React, { type ReactNode } from "react";
import colors from "./appColors.module.scss";

interface Props {
  children: ReactNode;
}

/**
 * AntdProv Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export function AntdProv({ children }: Props) {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: colors.primaryColor || undefined,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
