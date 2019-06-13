(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{329:function(e,n,r){"use strict";r.r(n);var a=r(0),t=Object(a.a)({},function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"record自定义类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#record自定义类型","aria-hidden":"true"}},[e._v("#")]),e._v(" record自定义类型")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("record类型是类似C语言的struct的语法，可以自定义带有若干个属性字段的结构体，每个属性字段都有各自的类型，不同属性可以有不同类型，\n属性的类型也可以是其他的record类型，也就是可以嵌套使用record类型。")]),e._v(" "),r("p",[e._v("比如:")]),e._v(" "),r("p",[e._v("type Address = {\nprovince: string,\ncity: string\n}")]),e._v(" "),r("p",[e._v("type Person = {\nname: string,\nage: int default 24,\nage2: int = 24,  -- record属性默认值既可以用default也可以用=区分\naddress: Address,\nparent_names: Array"),r("string",[e._v("\n}")])],1)]),e._v(" "),r("li",[r("p",[e._v("record的初始化和赋值可以用table来赋值，record类型的变量或者函数返回值也可以赋值给table类型的变量，不需要额外做类型转换，\nrecord的属性和属性值与table的键值一一对应。")])])]),e._v(" "),r("p",[e._v("比如:")]),e._v(" "),r("pre",[r("code",[e._v("type Person = {\n    name: string,\n    age: int default 24\n}\n\ntype Address = {\n    province: string,\n    city: string\n}\n\nvar p1: Person = {name='uvm'} -- 用Map<T>值给record类型的变量赋值，会做自动类型转换\nvar p2: Address = p1           -- 编译报错，p1是Person类型变量，不能赋值给Address类型的变量\nvar p3: table = p1             -- 正确，record类型的变量或值可以赋值给table类型的变量\n")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("record类型只是对变量的类型声明，但是在运行时实际还是table类型。\nrecord如果用构造函数（类型构造函数的名称和类型名称同名）创建，可以使用一个table值作为参数初始化，没有赋值的属性会使用属性默认值。如果用table类型的值比如{}进行类型转换赋值给record类型，则不涉及构造函数调用，record类型的属性默认值不起作用。")]),e._v(" "),r("p",[e._v("合约的storage的初始化是直接由区块链初始化的，record类型的default属性值不对它起作用")])])]),e._v(" "),r("p",[e._v("比如:")]),e._v(" "),r("pre",[r("code",[e._v("type Person = {\n    name: string,\n    age: int default 24,\n    age2: int = 24  -- record属性默认值既可以用default也可以用=区分\n}\nlet p1 = Person()                        -- p1值是{name: nil, age: 24, age2: 24}\nlet p2 = Person({name='uvm'})           -- p2值是{name: 'uvm', age: 24, age2: 24}\nlet p3 = Person({name='uvm', age=100})  -- p3值是{name: 'uvm', age: 100, age2: 24}\nlet p4: Person = {}                      -- p4值是{}\n")])]),e._v(" "),r("ul",[r("li",[e._v("record定义时可以带有若干个泛型参数，泛型参数在record的属性的类型中可以用来定义属性类型。带有泛型参数的record类型，\n需要用具体类型实例化后才能用来声明变量或者函数参数类型。")])]),e._v(" "),r("p",[e._v("比如：")]),e._v(" "),r("pre",[r("code",[e._v("type Person<A> = {  -- A就是Person泛型的泛型参数，是用来代表未知类型的类型变量\n    name: string,\n    address: A      -- 将address属性声明为A类型，则表示address属性的类型根据Person泛型实例化时的A的具体类型来确定\n}\nlet p = Person<string>()  -- 这里先用string类型替换Person泛型的A类型变量替换产生一个新类型Person<string>，然后调用这个新类型的构造函数\n")])]),e._v(" "),r("ul",[r("li",[e._v("record的成员函数的定义，不能用function "),r("varname",[e._v("."),r("funcname",[e._v(" (...) ... end的语法,只能用function "),r("varname",[e._v(":"),r("funcname",[e._v(" (...) ... end的语法")])],1)],1)],1)],1)]),e._v(" "),r("p",[e._v("比如:")]),e._v(" "),r("pre",[r("code",[e._v("type Person = {\n    name: string,\n    age: int\n}\nvar p1 = {}\nfunction p1.sayHi1(self)    -- 正确\nend\nfunction p1:sayHi2()    -- 正确\nend\n\nvar p2 = Person()\nfunction p2.sayHi1(self)    -- 编译错误，p2是record类型的，不能用varname.funcName的方式定义成员函数\nend\nfunction p2:sayHi2()        -- 正确\nend\n\np1:sayHi1()                 -- 正确\np1:sayHi2()                 -- 正确\np2:sayHi2()                 -- 正确\n")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("没有特定说明的record的语法，和Map"),r("object",[e._v("语法一致,也可以用 varname.propertyName和varname['propertyName']，varname[\"propertyName\"}的方式来读取和修改record类型变量的属性")])])]),e._v(" "),r("li",[r("p",[e._v("record定义的语法是:")]),e._v(" "),r("p",[e._v("type RecordName = { PropName: PropTypeName, … }")])])]),e._v(" "),r("p",[e._v("或")]),e._v(" "),r("pre",[r("code",[e._v("type RecordName <GenericType1, … > = { PropName: PropTypeName, … }\n")])]),e._v(" "),r("p",[e._v("例如:")]),e._v(" "),r("pre",[r("code",[e._v("type Person = { \n    name: string,\n    age: int,\n    mobile ?: string default ''                  --  这表示属性mobile的类型是string | nil，并且默认值是空字符串\n}\ntype G1<T1, T2, T3> = { a: T1, b: T2, c: T3, count: int }\n")])]),e._v(" "),r("ul",[r("li",[e._v("record可以用来定义其他名称的新record，同时可以有新的泛型参数（可选的）")])]),e._v(" "),r("p",[e._v("语法如下：")]),e._v(" "),r("pre",[r("code",[e._v("type RecordName = RecordNameExisted < Type1, … >\n")])]),e._v(" "),r("p",[e._v("或")]),e._v(" "),r("pre",[r("code",[e._v("type RecordName = RecordNameExisted\n")])]),e._v(" "),r("p",[e._v("或")]),e._v(" "),r("pre",[r("code",[e._v("type RecordName <GenericType1, … > = RecordNameExisted < Type1, … >\n")])]),e._v(" "),r("p",[e._v("或")]),e._v(" "),r("pre",[r("code",[e._v("type RecordName <GenericType1, … > = RecordNameExisted\n")])]),e._v(" "),r("p",[e._v("例如:")]),e._v(" "),r("pre",[r("code",[e._v("type G2<T> = G1<int, T, string>\ntype G3 = G1<string> -- 编译报错，G1需要3个类型变量\ntype G4 = string\ntype G5 = G4\n")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("record类型在定义后自动产生一个同名函数作为构造函数，可以可选地接受一个Map"),r("T",[e._v("类型的参数，\n参数Map"),r("T",[e._v("中有的属性覆盖record类型的属性默认值，合并后的Map"),r("T",[e._v("当成record类型作为构造函数的返回值")])],1)],1)],1),e._v(" "),r("p",[e._v("调用类型的构造函数也可以省略括号直接传一个map字面量字面量作为参数")])])]),e._v(" "),r("p",[e._v("例如:")]),e._v(" "),r("pre",[r("code",[e._v('type Person = { name: string, age: int default 100 }\nlet p1 = Person()                        -- p1 的值是 {name: nil, age: 100}\nlet p2 = Person({name: "uvm"})           -- p2 的值是{name: "uvm", age: 100}\n\nlet p3 = Array<Person> (  [ {name: "uvm"}, {name: "China", age: 10000} ] )   -- 这里括号不能省略,因为参数是array字面量不是map字面量\nlet p4 = Array<Person> { name: "hello", age: 100 } ')])])])},[],!1,null,null,null);n.default=t.exports}}]);