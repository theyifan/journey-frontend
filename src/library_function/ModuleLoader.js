import React from "react";

const BACKEND_STATIC_URL = "http://0.0.0.0:4000/static";

async function getModuleDirList() {
  return await fetch(`${BACKEND_STATIC_URL}/modules/modules.json`)
    .then(data => data.json())
    .then(obj => {
      if (obj["module_dirs"] === undefined) {
        throw 'Invalid modules.json: key "module_dirs" is missing';
      }
      return obj["module_dirs"];
    });
}

async function loadModule(moduleDirList, moduleName, usedSymbols = []) {
  const dirname = moduleDirList[moduleName];
  if (dirname === undefined) {
    throw "Unknown module: " + moduleName;
  }
  const modulePath = `${BACKEND_STATIC_URL}/modules/${dirname}`;
  await fetch(modulePath + "/module_config.json")
    .then(data => data.json())
    .then(moduleObj => {
      const sourceFileNames = moduleObj["module_source_files"];
      const allSymbols = moduleObj["module_symbols"];
      for (const url of sourceFileNames) {
        dynamicallyLoadScript(modulePath + "/" + url);
        blockUnusedSymbols(allSymbols, usedSymbols);
      }
    });
}

function dynamicallyLoadScript(url) {
  // private
  const script = document.createElement("script");
  script.src = url;
  script.async = false;
  script.defer = true;
  document.body.appendChild(script);
}

function blockUnusedSymbols(allSymbols, usedSymbols) {
  const unusedSymbols = allSymbols.filter(x => !usedSymbols.includes(x));
  let scriptText = "";
  for (const symbol of unusedSymbols) {
    scriptText += `${symbol} = undefined;\n`;
  }
  const script = document.createElement("script");
  script.text = scriptText;
  script.async = false;
  document.body.appendChild(script);
}

function ModuleLoader(name) {
  getModuleDirList().then(moduleDirList => {
    loadModule(moduleDirList, name);
  });
}

export default ModuleLoader;
