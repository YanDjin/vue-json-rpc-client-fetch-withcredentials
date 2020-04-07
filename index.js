"use strict";

import JsonRpcVueClient from "json-rpc-client-fetch-withcredentials";

export default {
  install: function (Vue, url = url, credentials = "include", newHeaders = null, debug = false, callbacksOnResponse = []) {
    let client = new JsonRpcVueClient(url, credentials, newHeaders, debug, callbacksOnResponse);

    Object.defineProperty(Vue.prototype, "$JsonRpcVueClient", { value: client });
  },
};
