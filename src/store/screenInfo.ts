export interface ScreenInfoState {
  isMobile: boolean;
  winSize: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  width: number;
}

export const SCREEN_INFO_INIT: Partial<ScreenInfoState> = {
  isMobile: true,
  winSize: "sm",
  width: 0,
};
