declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: ReduxDevtools;
  }
}

export type ReduxDevtools = {
  name: string;
  connect: (infoA: unknown) => {
    init: (infoA: unknown, infoB: unknown) => void;
    subscribe: (infoA: unknown) => void;
    unsubscribe: () => void;
    send: (infoA: unknown, infoB: unknown) => void;
    error: (infoA: unknown) => void;
  };
  disconnect: () => void;
  listen: (infoA: unknown, infoB: unknown) => void;
  notifyErrors: (infoA: unknown) => void;
  open: (infoA: unknown) => void;
  send: (
    infoA: unknown,
    infoB: unknown,
    infoC: unknown,
    infoD: unknown,
    infoE: unknown,
  ) => void;
};
