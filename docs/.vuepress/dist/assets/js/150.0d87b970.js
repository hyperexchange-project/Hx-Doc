(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{296:function(n,t,e){"use strict";e.r(t);var r=e(0),a=Object(r.a)({},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"rpc-tutorial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpc-tutorial","aria-hidden":"true"}},[n._v("#")]),n._v(" RPC Tutorial")]),n._v(" "),e("h1",{attrs:{id:"jsonrpc的支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsonrpc的支持","aria-hidden":"true"}},[n._v("#")]),n._v(" JsonRpc的支持")]),n._v(" "),e("p",[n._v("支持两种JsonRpc模式")]),n._v(" "),e("ul",[e("li",[n._v("Tcp-JsonRpc模式")]),n._v(" "),e("li",[n._v("Http-JsonRpc模式")])]),n._v(" "),e("h1",{attrs:{id:"如何启动rpc服务端监听"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何启动rpc服务端监听","aria-hidden":"true"}},[n._v("#")]),n._v(" 如何启动RPC服务端监听")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("启动Tcp-JsonRpc模式")]),n._v(" "),e("p",[n._v("node.exe --rpcuser RPC用户名 --rpcpassword RPC密码 --rpcport 监听端口 --server --data-dir 数据目录")])])]),n._v(" "),e("p",[n._v("示例：")]),n._v(" "),e("pre",[e("code",[n._v("node.exe --rpcuser admin --rpcpassword 123456 --rpcport 10086 --server --data-dir chain_data\n")])]),n._v(" "),e("ul",[e("li",[e("p",[n._v("启动Http-JsonRpc模式")]),n._v(" "),e("p",[n._v("Unode.exe --rpcuser RPC用户名 --rpcpassword RPC密码 --httpdendpoint 监听Endpoint --server --data-dir 数据目录")])])]),n._v(" "),e("p",[n._v("示例：")]),n._v(" "),e("pre",[e("code",[n._v("node.exe --rpcuser admin --rpcpassword 123456 --httpdendpoint 127.0.0.1:8080 --server --data-dir chain_data\n")])]),n._v(" "),e("h1",{attrs:{id:"如何进行一次有效的rpc交互"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何进行一次有效的rpc交互","aria-hidden":"true"}},[n._v("#")]),n._v(" 如何进行一次有效的RPC交互")]),n._v(" "),e("ul",[e("li",[n._v("在Tcp-JsonRpc模式下")])]),n._v(" "),e("ol",[e("li",[n._v("发起一个TCP连接")])]),n._v(" "),e("p",[n._v("#. 将RPC请求做为数据流，发送登录(login)的RPC请求，并接收到正确的RPC返回")]),n._v(" "),e("p",[n._v("#. 进行RPC交互")]),n._v(" "),e("p",[n._v("#. 连接断开")]),n._v(" "),e("ul",[e("li",[n._v("在Http-JsonRpc模式下")])]),n._v(" "),e("ol",[e("li",[n._v("新增一个http header，key为Authorization，value为随机6个字节 + base64(rpcuser:rpcpassword)")])]),n._v(" "),e("p",[n._v("#. 将RPC请求做为HTTP包的包体，发起一个HTTP POST请求")]),n._v(" "),e("p",[n._v("#. 获取HTTP返回，包体内容就是RPC的返回")]),n._v(" "),e("h1",{attrs:{id:"简单demo示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单demo示例","aria-hidden":"true"}},[n._v("#")]),n._v(" 简单DEMO示例")]),n._v(" "),e("p",[n._v("Python 2.7简单示例")]),n._v(" "),e("ul",[e("li",[n._v("在Tcp-JsonRpc模式下")])]),n._v(" "),e("p",[n._v("SimpleTcpJsonRpc.py")]),n._v(" "),e("pre",[e("code",[n._v('#!/usr/bin/env python \n# encoding: utf-8\n\n\nimport socket\n\ndef is_receive_complete(data):\n    if data is None or data == \'\':\n        return False\n    json_start = False\n    json_tag_count = 0\n    for c in data:\n        if c == \'{\':\n            if not json_start:\n                json_start = True\n            json_tag_count += 1\n        elif c == \'}\':\n            json_tag_count -= 1\n        if json_start and json_tag_count == 0:\n            return True\n    return False\n\ndef recv_until_json_complete(sd):\n    left_data = ""\n    while not is_receive_complete(left_data):\n        data = sd.recv(4096)\n        left_data += data\n    return left_data\n\n\nlogin_payload = \'\'\' { "jsonrpc": "2.0", "params": [ "admin", "123456" ], "id": "1", "method": "login" } \'\'\'\nget_info_payload = \'\'\' { "jsonrpc": "2.0", "params": [], "id": "2", "method": "get_info" } \'\'\'\n\nRpcServerEndpoint = "127.0.0.1:10086"\nconn_tuple = RpcServerEndpoint.split(":")\nendpoint_tuple = (conn_tuple[0], int(conn_tuple[1]))\n\nsd = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nsd.connect(endpoint_tuple)\n\nsd.sendall(login_payload)\nrecv_data = recv_until_json_complete(sd)\nprint recv_data\n\nsd.sendall(get_info_payload)\nrecv_data = recv_until_json_complete(sd)\nprint recv_data\n\nsd.close()\n')])]),n._v(" "),e("ul",[e("li",[n._v("在Http-JsonRpc模式下")])]),n._v(" "),e("p",[n._v("SimpleHttpJsonRpc.py")]),n._v(" "),e("pre",[e("code",[n._v('#!/usr/bin/env python \n# encoding: utf-8\n\n\nimport base64\nfrom requests import Request, Session\n\nget_info_payload = {"jsonrpc": "2.0", "params": [], "id": "2", "method": "info"}\n\nrpc_auth = "000000" + base64.b64encode("%s:%s" % ("admin", "123456"))\nauth_headers = {\'Content-Type\': \'application/json\', \'Authorization\': rpc_auth}\npost_url = "http://127.0.0.1:8080/rpc"\n\ns = Session()\nreq = Request(\'POST\', post_url, json=get_info_payload, headers=auth_headers)\nprepped = req.prepare()\nresp = s.send(prepped)\n\nprint resp.text\n')])])])},[],!1,null,null,null);t.default=a.exports}}]);