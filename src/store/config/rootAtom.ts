import { deepMap } from "nanostores";
import { APP_INFO_INIT as appInfo } from "../appInfo";
import { SCREEN_INFO_INIT as screenInfo } from "../screenInfo";
import { ROUTE_INFO_INIT as routeInfo } from "../routeInfo";

export const INITIAL_REDUCERS = {
  appInfo,
  screenInfo,
  routeInfo,
};

export type IFStore = typeof INITIAL_REDUCERS;

export const FStore = deepMap<IFStore>(INITIAL_REDUCERS);
