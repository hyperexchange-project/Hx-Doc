(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{376:function(t,n,a){"use strict";a.r(n);var i=a(0),e=Object(i.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"/language-syntax/global-variables"}},[t._v("全局变量表")])]),t._v(" "),a("h1",{attrs:{id:"table模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table模块","aria-hidden":"true"}},[t._v("#")]),t._v(" table模块")]),t._v(" "),a("p",[t._v("table.concat(table, sep, start=1, end=table的数组部分长度) 把数组table中从第start项到第end项（包括第end项）每一项用sep分隔连接成一个字符串,返回拼接后的字符串")]),t._v(" "),a("p",[t._v("table.insert(table, pos, value) 在数组table的第pos个位置插入一个值value，如果只传2个参数table和value，则在table的数组部分的最后位置之后插入value，无返回值")]),t._v(" "),a("p",[t._v("table.append(table, value) 在数组的最后位置之后插入value，无返回值")]),t._v(" "),a("p",[t._v("table.length(table)  获取数组的数组部分的长度")]),t._v(" "),a("p",[t._v("table.remove(table, pos=table数组部分长度) 函数删除并返回table数组部分位于pos位置的元素. 其后的元素会被前移. pos参数可选, 默认为table长度, 即从最后一个元素删起，返回被删除的值")]),t._v(" "),a("p",[t._v("table.sort(table) 函数对给定的table进行升序排序.参数table中的元素需要类型一致，无返回值")]),t._v(" "),a("pre",[a("code",[t._v('> tbl = {"hsrha", "beta", "gamma", "delta"}\n> table.sort(tbl)\n> print(table.concat(tbl, ", "))\nhsrha, beta, delta, gamma\n')])]),t._v(" "),a("p",[t._v("全局函数rawlen  返回table中数组部分元素的个数")]),t._v(" "),a("h1",{attrs:{id:"math模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#math模块","aria-hidden":"true"}},[t._v("#")]),t._v(" math模块")]),t._v(" "),a("p",[t._v("math.abs(n) 获取参数n的绝对值")]),t._v(" "),a("p",[t._v("math.ceil(n) 返回不小于n的最小整数")]),t._v(" "),a("p",[t._v("math.floor(n) 返回不超过n的最大整数")]),t._v(" "),a("p",[t._v("math.max(n1,n2,...) 返回参数列表中多个值的最大值，至少需要1个参数")]),t._v(" "),a("p",[t._v("math.maxinteger  常数，支持的最大整数")]),t._v(" "),a("p",[t._v("math.min(n1,n2,...) 返回参数列表中多个值的最小值，至少需一个参数")]),t._v(" "),a("p",[t._v("math.mininteger 常数，支持的最小整数")]),t._v(" "),a("p",[t._v("math.pi 常数，π值，3.1415...")]),t._v(" "),a("p",[t._v("math.sqrt(n) 获取第一个参数的平方根")]),t._v(" "),a("p",[t._v("math.tointeger(n) 把第一个参数str字符串转成整数，如果str本身是整数，直接转成整数，如果无法转换，返回nil")]),t._v(" "),a("p",[t._v("math.type(num) 判断第一个参数num是整数还是浮点数")]),t._v(" "),a("h1",{attrs:{id:"string模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string模块","aria-hidden":"true"}},[t._v("#")]),t._v(" string模块")]),t._v(" "),a("p",[t._v("string.split(str, sep) 把str按sep划分成多块，返回一个字符串数组")]),t._v(" "),a("p",[t._v("string.byte(s) 返回字符串首字符对应的ASCII数字")]),t._v(" "),a("p",[t._v("string.char(i1, i2, …) 把多个整数对应的ascii字符构造成字符串返回")]),t._v(" "),a("p",[t._v("string.find(str, pattern, [init=1, [plain=nil]]) 在str字符串中查找模式字符串pattern，从str的第init个字符开始查找，plain表示是否把pattern当成普通文本字符串而不是模式字符串来查找，返会找到的第一个满足条件的子字符串的开始字符索引或者nil")]),t._v(" "),a("p",[t._v("模式字符串在可以用以下符号匹配源字符串中的一些子字符串")]),t._v(" "),a("ul",[a("li",[t._v(".(点): 与任何字符配对")]),t._v(" "),a("li",[t._v("%a: 与任何字母配对")]),t._v(" "),a("li",[t._v("%c: 与任何控制符配对(例如\\n)")]),t._v(" "),a("li",[t._v("%d: 与任何数字配对")]),t._v(" "),a("li",[t._v("%l: 与任何小写字母配对")]),t._v(" "),a("li",[t._v("%p: 与任何标点(punctuation)配对")]),t._v(" "),a("li",[t._v("%s: 与空白字符配对")]),t._v(" "),a("li",[t._v("%u: 与任何大写字母配对")]),t._v(" "),a("li",[t._v("%w: 与任何字母/数字配对")]),t._v(" "),a("li",[t._v("%x: 与任何十六进制数配对")]),t._v(" "),a("li",[t._v("%z: 与任何代表0的字符配对")]),t._v(" "),a("li",[t._v("%x(此处x是非字母非数字字符): 与字符x配对. 主要用来处理表达式中有功能的字符(^$()%.[]*+-?)的配对问题, 例如%%与%配对")]),t._v(" "),a("li",[t._v("[数个字符类]: 与任何[]中包含的字符类配对. 例如[%w_]与任何字母/数字, 或下划线符号(_)配对")]),t._v(" "),a("li",[t._v("[^数个字符类]: 与任何不包含在[]中的字符类配对. 例如[^%s]与任何非空白字符配对")])]),t._v(" "),a("p",[t._v("例如:")]),t._v(" "),a("pre",[a("code",[t._v('let p1 = "%d%d:%d%d"\nlet s = "2016/11/11 11:11"\nlet a = string.find(s, p1)  -- a的结果是11，也就是子字符串"11:11"的第一个字符的索引\nlet b = string.sub(s, a)    -- b结果是"11:11"\nlet c = string.find(s, p1, 3)  -- c结果是12\nlet d = string.find(s, p1, 1, true)  -- d结果是nil，因为第四个参数是true，所以把p1当成普通字符串进行匹配\n')])]),t._v(" "),a("p",[t._v("string.format(formatstring, ...args) 类似C语言的sprintf")]),t._v(" "),a("p",[t._v("例如:")]),t._v(" "),a("pre",[a("code",[t._v('let a = string.format("hello, %s, the number is %d", "China", 123)\n')])]),t._v(" "),a("p",[t._v("string.gmatch(str, pattern) 返回在str字符串中遍历模式字符串pattern的迭代器")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("pre",[a("code",[t._v('t = {}\ns = "from=world, to=Lua"\nvar k = nil\nvar v = nil\nfor k, v in string.gmatch(s, "(%w+)=(%w+)") do\n   t[k] = v\nend\n')])]),t._v(" "),a("p",[t._v("string.gsub(str, pattern, replacer, [n]) 把str中满足pattern模式的子串投用replacer字符串或者函数进行替换，如果提供了n,只进行前n个符合的字串的替换")]),t._v(" "),a("p",[t._v("string.len(str) 获取字符串长度")]),t._v(" "),a("p",[t._v("string.match(str, pattern, [init=1]) 在str找到第一个符合模式pattern的子串，从str的第init个字符开始查找")]),t._v(" "),a("p",[t._v("string.rep(str, n, [sep=’’]) 返回str字符串重复n次的结果，间隔符是字符串sep")]),t._v(" "),a("p",[t._v("string.reverse(str) 返回字符串str的反转")]),t._v(" "),a("p",[t._v("string.sub(str, i, [,j=-1]) 获取str字符串的子字符串，从第i个字符开始，到第j个字符结束（包含第i和第j个字符），i和j可以是负数，表示从str反方向开始的第-i/-j个字符")]),t._v(" "),a("p",[t._v("string.upper(str) 把字符串str各字母字符转成大写后返回")]),t._v(" "),a("h1",{attrs:{id:"time模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#time模块","aria-hidden":"true"}},[t._v("#")]),t._v(" time模块")]),t._v(" "),a("p",[t._v("time.add(timestamp, field, offset) 返回新时间戳，field是year/month/day/hour/minute/second其中某个字符串，offset是变化值，可以是正数、负数、零")]),t._v(" "),a("p",[t._v("time.tostr(timestamp) 把时间戳转成时间字符串， %yy-%m-%d %H:%M:%S格式")]),t._v(" "),a("p",[t._v("time.difftime(timestamp1, timestamp2) 比较2个时间戳的间隔的秒数")]),t._v(" "),a("h1",{attrs:{id:"safemath模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#safemath模块","aria-hidden":"true"}},[t._v("#")]),t._v(" safemath模块")]),t._v(" "),a("pre",[a("code",[t._v("bigint(int | string): bigint\nadd(bigint, bigint): bigint\nsub(bigint, bigint): bigint\nmul(bigint, bigint): bigint\nmin(bigint, bigint): bigint\nmax(bigint, bigint): bigint\ndiv(bigint, bigint): bigint\nrem(bigint, bigint): bigint\npow(bigint, bigint): bigint\ngt(bigint, bigint): bigint\nge(bigint, bigint): bigint\nlt(bigint, bigint): bigint\nle(bigint, bigint): bigint\neq(bigint, bigint): bigint\nne(bigint, bigint): bigint\ntoint(bigint): int\ntohex(bigint): string\ntostring(bigint): string\n")])]),t._v(" "),a("p",[t._v("例子:")]),t._v(" "),a("pre",[a("code",[t._v("a = safemath.bigint('123')\npprint('a=', a)\nb = safemath.bigint(456)\npprint('b=', b)\npprint('hex(a)=', safemath.tohex(a))\npprint('int(a)=', safemath.toint(a))\npprint('str(a)=', safemath.tostring(a))\nc = safemath.add(a, b)\nd = safemath.sub(a, b)\ne = safemath.mul(a, b)\nf = safemath.div(b, a)\ng = safemath.pow(a, safemath.bigint(10))\npprint('c', safemath.tostring(c))\npprint('d', safemath.tostring(d))\npprint('e', safemath.tostring(e))\npprint('f', safemath.tostring(f))\npprint('g', safemath.tostring(g))\n\nc1 = safemath.gt(a, b)\nc2 = safemath.ge(a, b)\nc3 = safemath.lt(a, b)\nc4 = safemath.le(a, b)\nc5 = safemath.eq(a, b)\nc6 = safemath.ne(a, b)\nc7 = safemath.eq(a, a)\n\npprint(safemath.tostring(a) .. ' > ' .. safemath.tostring(b) .. '=' .. tostring(c1))\npprint(safemath.tostring(a) .. ' >= ' .. safemath.tostring(b) .. '=' .. tostring(c2))\npprint(safemath.tostring(a) .. ' < ' .. safemath.tostring(b) .. '=' .. tostring(c3))\npprint(safemath.tostring(a) .. ' <= ' .. safemath.tostring(b) .. '=' .. tostring(c4))\npprint(safemath.tostring(a) .. ' == ' .. safemath.tostring(b) .. '=' .. tostring(c5))\npprint(safemath.tostring(a) .. ' != ' .. safemath.tostring(b) .. '=' .. tostring(c6))\npprint(safemath.tostring(a) .. ' == ' .. safemath.tostring(a) .. '=' .. tostring(c7))\n")])]),t._v(" "),a("h1",{attrs:{id:"json模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json模块","aria-hidden":"true"}},[t._v("#")]),t._v(" json模块")]),t._v(" "),a("p",[t._v("json.dumps(任意lua值) 将lua值转成json字符串")]),t._v(" "),a("p",[t._v("json.loads(字符串) 将json字符串转成lua值，如果失败，返回nil")]),t._v(" "),a("h1",{attrs:{id:"utf8模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utf8模块","aria-hidden":"true"}},[t._v("#")]),t._v(" utf8模块")]),t._v(" "),a("p",[t._v("utf8.char(...)          接受参数中若干个数字，返回对应的UTF8编码的字节序列")]),t._v(" "),a("p",[t._v("utf8.charpattern         常量，能匹配UTF8字节序列的一个字符串pattern模式")]),t._v(" "),a("p",[t._v("utf8.codes(s)            返回变量s中所有字符的迭代器，按utf8编码")]),t._v(" "),a("p",[t._v("utf8.codepoint(s, i, j)  返回字符串s在索引[i, j]范围内的utf8编码的字符")]),t._v(" "),a("p",[t._v("utf8.len(s, i, j)        返回字符串s在索引[i, j]范围内的按utf8编码的字符长度")]),t._v(" "),a("p",[t._v("utf8.offset(s, n, i)     返回s中第n个字符的从第i个字节开始的字节索引")])])},[],!1,null,null,null);n.default=e.exports}}]);