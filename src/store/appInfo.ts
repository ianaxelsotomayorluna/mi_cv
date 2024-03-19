export interface AppInfoState {
  isLoadingGlobal: boolean;
  clientLoaded: boolean;
}

export const APP_INFO_INIT: Partial<AppInfoState> = {
  isLoadingGlobal: false,
  clientLoaded: false,
};
