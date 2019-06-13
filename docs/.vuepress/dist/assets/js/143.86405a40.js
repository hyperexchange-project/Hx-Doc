(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{317:function(n,t,e){"use strict";e.r(t);var r=e(0),a=Object(r.a)({},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"内置record类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内置record类型","aria-hidden":"true"}},[n._v("#")]),n._v(" 内置record类型")]),n._v(" "),e("ul",[e("li",[e("code",[n._v("Contract<S>")]),n._v("类型，用于声明合约变量类型,S使用当前合约的storage类型替换")])]),n._v(" "),e("p",[n._v("内置的Contract类型的代码实现如下：")]),n._v(" "),e("pre",[e("code",[n._v("type Contract<S> = {\n    id: string,\n    name: string,\n    storage: S\n}\n")])]),n._v(" "),e("p",[n._v("使用例子如下：")]),n._v(" "),e("pre",[e("code",[n._v("type Storage = {\n    author_name: string,\n    age: int\n}\nlet M: Contract<Storage> = {}\nfunction M:init()\n    self.storage.age = 100\n    self.storage.author_name = 'uvm'\n    -- 这里self.id和self.name, self.storage.author_name是字符串类型，self.storage.age 是整数\n    \nend\nreturn M\n")])]),n._v(" "),e("ul",[e("li",[n._v("Stream类型，用于作为字节流类型使用，是一个内置的record类型，但是Stream类型的对象访问其中的成员函数只能用冒号不能用点号的形式")])]),n._v(" "),e("p",[n._v("内置的Stream的类型签名如下：")]),n._v(" "),e("pre",[e("code",[n._v("type Stream = {\n    pos: () => int,  -- 获取字节流中当前位置\n    eof: () => bool, -- 获取字节流是否到结尾\n    current: () => int,  -- 获取当前字节（转成int类型)，如果已经读取结束了无法读取当前字节，返回-1\n    next: () => bool,    -- 如果字节流还没有到结尾，pos递进1步，返回true，否则返回false\n    reset_pos: () => nil,   -- 重组字节流的当前读取位置到起始位置\n    size: () => int,        -- 获取字节流的长度\n    push: (int) => nil,     -- 把参数取最后一字节（转成C风格的char类型），加入字节流\n    push_string: (string) => nil  -- 把参数字符串中每一个字节加入字节流\n}\n")])]),n._v(" "),e("p",[n._v("使用例子如下：")]),n._v(" "),e("pre",[e("code",[n._v("let a1 = Stream()\na1:push(123)    -- 对于Stream类型，不能使用a1.push(a1, 123)这种点号访问成员函数的方法\na1:push_string('abc')\nlet s1 = a1:size()\npprint(\"a1 size is \", s1)\npprint('a1 is ', tostring(a1), tojsonstring(a1))\npprint('a1 pos is', a1:pos())\n\nvar c = a1:pos()\n\nvar s = ''\nwhile c < a1:size() do\n    s = s .. tostring(a1:current())\n    pprint(\"a1[\", c, \"]=\", a1:current())  -- 应该依次输出 a1[0]=123   a1[1]=97    a1[2]=98      a1[3]=99\n    c = c + 1\n    a1:next()\nend\n")])])])},[],!1,null,null,null);t.default=a.exports}}]);