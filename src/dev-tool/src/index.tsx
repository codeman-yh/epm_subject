import { startServer } from "./server";
import { DevTool, installDevTool } from "./dev-tool";

export const loadServer = (callback: () => void) => {
  startServer();
  installDevTool();
  if (callback) {
    callback();
  }
};

export const DevTools = DevTool;
