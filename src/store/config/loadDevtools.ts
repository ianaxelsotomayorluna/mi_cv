import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/functions/localStorageUtils";
import { type IFStore, INITIAL_REDUCERS, FStore } from "./rootAtom";

interface Props {
  withDevTools?: boolean;
  useLocalStorage?: boolean;
}

/**Carga las herramientas de desarrollo y añade listeners para inicializar y limpiar al cargar y antes de descargar la página. */
export function loadDevtools(props: Props) {
  let connection: IDevTools = null;

  document.addEventListener("DOMContentLoaded", () => {
    connection = connectDevtools(props);
  });

  window.addEventListener("beforeunload", () => {
    cleanAll(connection);
  });
}

/**Conecta las herramientas de desarrollo y el almacenamiento local basado en la configuración proporcionada. */
function connectDevtools({
  withDevTools = !!import.meta.env.PUBLIC_DEV_TOOLS,
  useLocalStorage,
}: Props) {
  // console.log('Continue', { withDevTools });

  const toolsConnection = devtoolsInit(withDevTools);
  localStorageInit(useLocalStorage);
  syncStores(toolsConnection, useLocalStorage);

  return toolsConnection;
}

/**Inicializa la conexión con Redux DevTools si está habilitada. */
function devtoolsInit(withDevTools: boolean) {
  const useDevTools = withDevTools && window.__REDUX_DEVTOOLS_EXTENSION__;
  if (!useDevTools) return null;

  const connection = useDevTools.connect({
    name: "Astro_App",
  });

  connection.send(
    {
      type: "STORE_INIT",
      INITIAL_REDUCERS,
    },
    INITIAL_REDUCERS,
  );

  return connection;
}

type IDevTools = ReturnType<typeof devtoolsInit>;

/**Inicializa el estado del almacenamiento desde localStorage si está habilitado. */
function localStorageInit(useLocalStorage?: boolean) {
  if (!useLocalStorage) return;
  const prevState = getFromLocalStorage<IFStore>("Astro_App");
  if (!prevState) return;
  FStore.set(prevState);
}

/** Sincroniza el estado de la tienda entre Redux DevTools y localStorage con FStore, si están habilitados. */
function syncStores(withDevTools: IDevTools, useLocalStorage?: boolean) {
  const syncStates = withDevTools || useLocalStorage;
  if (!syncStates) return;

  FStore.subscribe((state) => {
    if (withDevTools) {
      withDevTools.send(
        {
          type: "STORE_CHANGE",
          state,
        },
        state,
      );
    }
    if (useLocalStorage) {
      saveToLocalStorage("Astro_App", state);
    }
  });
}

/**Realiza la limpieza desconectando las herramientas de desarrollo y removiendo suscriptores de la tienda. */
function cleanAll(withDevTools: IDevTools) {
  if (withDevTools) {
    withDevTools.unsubscribe();
  }
  FStore.off();
}
