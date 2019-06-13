(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{303:function(e,n,o){"use strict";o.r(n);var t=o(0),a=Object(t.a)({},function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"hyperexchange-middleware-setup-guide"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hyperexchange-middleware-setup-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" HyperExchange Middleware Setup Guide")]),e._v(" "),o("p",[e._v("Last updated for v1.0.7.")]),e._v(" "),o("hr"),e._v(" "),o("p",[o("code",[e._v("HyperExchange Middleware")]),e._v(" Used to collect/store and manage other blockchain data;Handle various operations of acrosschain (deposit/withdraw, etc.).")]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"download-and-install"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#download-and-install","aria-hidden":"true"}},[e._v("#")]),e._v(" Download and Install")]),e._v(" "),o("p",[e._v("The latest version of HyperExchange Middleware can be downloaded from [https://github.com/HcashOrg/HyperExchange/releases/tag/v0.1).Now just support install on linux system.")]),e._v(" "),o("p",[e._v("When deployed, mongo and ubuntu images are used, and docker automatically downloads the image, so there is no active pull.")]),e._v(" "),o("blockquote",[o("p",[e._v("Config File")])]),e._v(" "),o("p",[e._v("Before start middleware,need to config parameters of mongo/log/local rpc server/other chain rpc server...")]),e._v(" "),o("p",[e._v("For example:")]),e._v(" "),o("pre",[o("code",[e._v('#!/usr/bin/env python \n# encoding: utf-8\n\n__author__ = \'hasee\'\n\nimport logging\n\nclass CollectorConfig(object):\n# DB configure\nDB_POOL_SIZE = 10\nCONNECT_TIMEOUT = 50\nMONGO_HOST = \'127.0.0.1\'\nMONGO_PORT = 27017\nMONGO_NAME = \'chaindb\'\nMONGO_USER = \'chaindb_user\'\nMONGO_PASS = \'yqr.1010\'\n\n# LOG configure\nLOG_LEVEL = logging.INFO\nLOG_FORMAT = \'%(asctime)-15s %(levelname)s %(funcName)s %(message)s\'\nLOG_FILENAME = "btc_data_collector.log"\n\n# SYNC configure\nSYNC_BLOCK_PER_ROUND = 10000\n\nclass BKCollectorConfig(CollectorConfig):\n# RPC SERVER configure \nASSET_SYMBOL = "BK"\nRPC_HOST = \'192.168.1.152\'\nRPC_PORT = 8093\nSYNC_STATE_FIELD = "bksyncstate"\nSYNC_BLOCK_NUM = "bksyncblocknum"\nSAFE_BLOCK_FIELD = "bksafeblock"\nCONTRACT_CALLER = "lktest001"\n\nclass BTCCollectorConfig(CollectorConfig):\nASSET_SYMBOL = "BTC"\nRPC_HOST = \'192.168.1.121\'\nRPC_PORT = 60022\nSYNC_STATE_FIELD = "btcsyncstate"\nSYNC_BLOCK_NUM = "btcsyncblocknum"\nSAFE_BLOCK_FIELD = "btcsafeblock"\n\nclass LTCCollectorConfig(CollectorConfig):\nASSET_SYMBOL = "LTC"\nRPC_HOST = \'192.168.1.124\'\nRPC_PORT = 60014\nSYNC_STATE_FIELD = "ltcsyncstate"\nSYNC_BLOCK_NUM = "ltcsyncblocknum"\nSAFE_BLOCK_FIELD = "ltcsafeblock"\n\nclass UBCollectorConfig(CollectorConfig):\nASSET_SYMBOL = "UB"\nRPC_HOST = \'192.168.1.124\'\nRPC_PORT = 60011\nSYNC_STATE_FIELD = "ubsyncstate"\nSYNC_BLOCK_NUM = "ubsyncblocknum"\nSAFE_BLOCK_FIELD = "ubsafeblock"\n')])]),e._v(" "),o("blockquote",[o("p",[e._v("Start Middleware")])]),e._v(" "),o("p",[e._v("Enter directory of middleware,find file docker_op.sh,then excute command:")]),e._v(" "),o("p",[o("code",[e._v("./docker_op.sh")])])])},[],!1,null,null,null);n.default=a.exports}}]);