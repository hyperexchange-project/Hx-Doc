(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{219:function(t,e,r){"use strict";r.r(e);var a=r(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"初学者指南"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#初学者指南","aria-hidden":"true"}},[t._v("#")]),t._v(" 初学者指南")]),t._v(" "),r("p",[t._v("上次更新 v1.0.7")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#欢迎使用hyperexchange"}},[t._v("欢迎使用HyperExchange")])]),r("li",[r("a",{attrs:{href:"#应用"}},[t._v("应用")])]),r("li",[r("a",{attrs:{href:"#用户指引"}},[t._v("用户指引")])]),r("li",[r("a",{attrs:{href:"#安装指导"}},[t._v("安装指导")])]),r("li",[r("a",{attrs:{href:"#一般指南"}},[t._v("一般指南")])])])]),r("p"),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"欢迎使用hyperexchange"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#欢迎使用hyperexchange","aria-hidden":"true"}},[t._v("#")]),t._v(" 欢迎使用HyperExchange")]),t._v(" "),r("p",[t._v("欢迎来到HyperExchange！HyperExchange需要你学习很多新东西才能完全掌握工作原理。本文档将尝试使你更容易的使用HyperExchange的相关应用。")]),t._v(" "),r("p",[t._v("本初学者指南将学习如何安装，设置和使用HyperExchange应用程序; 如何获得HX; 以及如何创建跨链交易等。")]),t._v(" "),r("p",[r("strong",[t._v("注意：强烈建议使用Testnet学习如何使用HyperExchange软件，而不必担心出错或HX亏损。请参考"),r("router-link",{attrs:{to:"/getting-started/public-testnet.html"}},[t._v("公测链使用")]),t._v("。")],1)]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),r("p",[t._v("您可以在下面找到当前可用应用程序的列表，其中的图表显示了它们与不同操作系统的兼容性。")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("hx_node")]),t._v(": hx_node通过P2P连接到HX网络，从网络接收块，将本地签名的交易报文广播到网络，hx_node通过websocket + HTTP RPC向其他程序提供API，使用中间件处理跨链数据的存取操作。HX_node管理钱包文件，其中包含加密用户的私钥。钱包文件可以包含多个私钥。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("middleware")]),t._v(": 中间件，定期从BTC / LTC / ETH和其他主链收集数据，并将其存储在数据库中。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("HXIndicator")]),t._v(": HXIndicator是hx wallet的图形用户界面.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("hx_client")]),t._v(": 通过rpc连接到hx_node，hx_client提供了交易签名功能，然后将签名广播到hx_node，hx_client为其他程序提供了通过HTTP RPC调用的API（以下简称钱包API）")])])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"right"}}),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("hx_node")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("middleware")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("HXIndicator")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("hx_client")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("Windows")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Y")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("macOS")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Y")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("Linux")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Y")])])])]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"用户指引"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用户指引","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户指引")]),t._v(" "),r("blockquote",[r("p",[t._v("普通用户")])]),t._v(" "),r("ul",[r("li",[t._v("对于初次使用HX的用户，建议使用手机版钱包进行体验，官方推荐使用"),r("a",{attrs:{href:"https://www.anybit.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AnyBit"),r("OutboundLink")],1),t._v("钱包，也可使用其他支持HX的钱包，如："),r("a",{attrs:{href:"https://www.hoo.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("虎符钱包"),r("OutboundLink")],1),t._v("和"),r("a",{attrs:{href:"https://hyperpay.me/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HPY钱包"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("li",[t._v("从HX官方网站下载适用于您的操作系统的HXIndicator。请参考 "),r("router-link",{attrs:{to:"/wallets/hxindicator-setup.html"}},[t._v("HXIndicator设置")]),t._v("中的"),r("code",[t._v("下载和安装")]),t._v("。")],1),t._v(" "),r("li",[t._v("如果你已经获得了hx在mainnet中，你可以参考 "),r("router-link",{attrs:{to:"/wallets/hxindicator-using-account.html"}},[t._v("使用HXIndicator")]),t._v(" 去使用 HXIndicator.")],1),t._v(" "),r("li",[t._v("如果您对测试公共testnet感兴趣，请参阅 "),r("router-link",{attrs:{to:"/getting-started/public-testnet.html"}},[t._v("公测链使用")])],1)]),t._v(" "),r("blockquote",[r("p",[t._v("开发者用户")])]),t._v(" "),r("ul",[r("li",[t._v("从github下载HyperExchange源代码:"),r("a",{attrs:{href:"https://github.com/HcashOrg/HyperExchange.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/HcashOrg/HyperExchange.git"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("router-link",{attrs:{to:"/wallets/hx-building.html"}},[t._v("编译")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/getting-started/private-testnet.html"}},[t._v("私有链使用")])],1),t._v(" "),r("li",[t._v("如果想使用docker部署hx的所有应用(hx-node/hx-cli/中间件等)，请参考"),r("router-link",{attrs:{to:"/wallets/hx-docker-deploy.html"}},[t._v("docker部署")])],1),t._v(" "),r("li",[t._v("如果要使用命令行测试充值/提现/跨链转账和其他功能，请参阅 "),r("router-link",{attrs:{to:"/wallets/hxwallet-cli-rpc-commands.html"}},[t._v("Hx-cli RPC命令")]),t._v(".")],1)]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"安装指导"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装指导","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装指导")]),t._v(" "),r("p",[t._v("要开始使用HyperExchange的应用，请在下面选择适用于您的操作系统的安装选项：")]),t._v(" "),r("blockquote",[r("p",[t._v("Windows")])]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/wallets/hxindicator-setup.html"}},[t._v("HXIndicator 设置")])],1)]),t._v(" "),r("blockquote",[r("p",[t._v("Ubuntu")])]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/wallets/hxnode-setup.html"}},[t._v("hx-node 启动")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/wallets/hxwallet-cli.html"}},[t._v("hx-client 启动")])],1)]),t._v(" "),r("blockquote",[r("p",[t._v("Mac OS")])]),t._v(" "),r("ul",[r("li",[t._v("HXIndicator请参考window中的使用"),r("router-link",{attrs:{to:"/wallets/hxindicator-setup.html"}},[t._v("HXIndicator Setup")]),t._v(".")],1)]),t._v(" "),r("hr"),t._v(" "),r("p",[r("strong",[t._v("注意：可以在导航菜单中找到具有相同名称的所有以下指南。")])]),t._v(" "),r("h2",{attrs:{id:"一般指南"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一般指南","aria-hidden":"true"}},[t._v("#")]),t._v(" 一般指南")]),t._v(" "),r("p",[t._v("以下指南独立于不同的应用程序：")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/getting-started/hx-features.html"}},[t._v("HyperExchange 特性")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/getting-started/private-testnet.html"}},[t._v("测试网络")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/getting-started/obtaining-hx-test.html"}},[t._v("HX分配")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/getting-started/using-the-block-explorer.html"}},[t._v("区块浏览器")])],1)])])},[],!1,null,null,null);e.default=n.exports}}]);