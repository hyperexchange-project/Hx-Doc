(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{194:function(n,e,t){"use strict";t.r(e);var i=t(0),r=Object(i.a)({},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"gsharpc支持的c-语法的例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gsharpc支持的c-语法的例子","aria-hidden":"true"}},[n._v("#")]),n._v(" gsharpc支持的C#语法的例子")]),n._v(" "),t("h1",{attrs:{id:"c-版合约例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-版合约例子","aria-hidden":"true"}},[n._v("#")]),n._v(" C#版合约例子")]),n._v(" "),t("pre",[t("code",[n._v('using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nusing static UVMCoreLib.UVMCoreFuncs;\nusing UVMCoreLib;\n\nnamespace DemoContract1\n{\npublic class Storage\n{\n    public string Name { get; set; }\n    public int Age { get; set; }\n    public string Country; // field test\n    public bool IsMale { get; set; }\n    public UVMArray<string> ArrayDemo { get; set; }\n}\n\npublic class MyEventEmitteer : IUVMEventEmitter\n{\n    public static void EmitHello(string eventArg)\n    {\n    Console.WriteLine("event Hello emited, arg is " + eventArg);\n    }\n    public static void EmitHello2(string eventArg)\n    {\n    Console.WriteLine("event Hello2 emited, arg is " + eventArg);\n    }\n}\n\npublic class MyContract : UVMContract<Storage>\n{\n    public MyContract() : base(new Storage())\n    {\n    }\n    public override void init()\n    {\n    print("contract initing");\n    this.storage.Age = 100;\n    this.storage.Country = "China";\n    this.storage.Name = "C#";\n    this.storage.IsMale = true;\n    this.storage.ArrayDemo = UVMArray<string>.Create();\n    this.storage.ArrayDemo.Add("hello");\n    pprint(this);\n    print("this is contract init api");\n    }\n    public string GetAge(string arg)\n    {\n    print("this is contract getAge api");\n    return "" + this.storage.Age;\n    }\n    public string OfflineGetAge(string arg)\n    {\n    print("this is contract OfflineGetAge api");\n    print("age is " + this.storage.Age);\n    return "" + this.storage.Age;\n    }\n    public void TestHello(string arg)\n    {\n    print("this is contract hello api with argument " + arg);\n    }\n}\n\npublic class ExampleLibClass\n{\n    public MyContract Main()\n    {\n    print("start of demo C# contract");              \n    var contract = new MyContract();       \n    print("end main");\n    return contract;\n    }\n}\n\n}\n')])]),n._v(" "),t("h1",{attrs:{id:"c-中调用调试合约的例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-中调用调试合约的例子","aria-hidden":"true"}},[n._v("#")]),n._v(" C#中调用调试合约的例子")]),n._v(" "),t("pre",[t("code",[n._v('using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace GsharpDemo1\n{\nclass Program\n{\n    static void Main(string[] args)\n    {\n    var contractEntry = new ExampleLibClass();\n    var contract = contractEntry.Main();\n    contract.storage = new Storage();\n    contract.storage.Age = 25;\n    contract.storage.Name = "gsharpc";\n    contract.storage.IsMale = true;\n    contract.storage.Country = "China";\n    Console.WriteLine(contract.OfflineGetAge("hello"));\n    }\n}\n}\n')])]),n._v(" "),t("h1",{attrs:{id:"c-版更多语法的例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-版更多语法的例子","aria-hidden":"true"}},[n._v("#")]),n._v(" C#版更多语法的例子")]),n._v(" "),t("pre",[t("code",[n._v('using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\nusing static UVMCoreLib.UVMCoreFuncs;\nusing UVMCoreLib;\n\nnamespace Demo1\n{\npublic class Storage\n{\n    public string Name { get; set; }\n    public int Age { get; set; }\n    public string Country; // field test\n    public bool IsMale { get; set; }\n}\n\npublic class HelloContract\n{\n    public void SayHello(string arg)\n    {\n        print("hello, this is hello contract api SayHello with arg " + tostring(arg));\n    }\n}\n\npublic class MyEventEmitteer : IUVMEventEmitter\n{\n    public static void EmitHello(string eventArg)\n    {\n        Console.WriteLine("event Hello emited, arg is " + eventArg);\n    }\n    public static void EmitHello2(string eventArg)\n    {\n        Console.WriteLine("event Hello2 emited, arg is " + eventArg);\n    }\n}\n\npublic class MyContract : UVMContract<Storage>\n{\n    public MyContract() : base(new Storage())\n    {\n    }\n    public override void init()\n    {\n        print("contract initing");\n        this.storage.Age = 100;\n        this.storage.Country = "China";\n        this.storage.Name = "C#";   \n        pprint(this);\n        print("this is contract init api end");\n    }\n    public string GetAge(string arg)\n    {\n        print("this is contract getAge api");\n        return "" + this.storage.Age;\n    }\n    public string OfflineGetAge(string arg)\n    {\n        print("this is contract OfflineGetAge api");\n        print("age is " + this.storage.Age);\n        return "" + this.storage.Age;\n    }\n    public void TestHello(string arg)\n    {\n       print("this is contract hello api with argument " + arg);\n    }\n}\n\npublic class ExampleLibClass\n{\n    \n    public int SayHi()\n    {\n        Console.WriteLine("hello,\\tCecil");\n        var a = 5;\n        var b = 100;\n        var sum = 3;       \n\n        if (b > 50)\n        {\n            Console.WriteLine("hello, this is if condition=true branch");\n        }\n        else if (b > 25)\n        {\n            Console.WriteLine("hello, this is if elseif condition branch");\n        }\n        else\n        {\n            Console.WriteLine("hello, this is if condition=else branch");\n        }\n        var d = "a " + sum;\n        Console.WriteLine(b);\n        Console.WriteLine("hello world");\n        Console.WriteLine("sum is " + 123);\n        Console.WriteLine("sum is " + d);\n        Console.WriteLine(a + b);\n\n        print("" + 123);\n\n        return a + b + 1234;\n    }\n\n    public void TestIf()\n    {\n        Console.WriteLine("this is test if function");\n        var b = 30;\n        if (b > 50)\n        {\n            Console.WriteLine("hello, this is if condition=true branch");\n        }\n        else if (b > 25)\n        {\n            Console.WriteLine("hello, this is if elseif condition branch");\n        }\n        else\n        {\n            Console.WriteLine("hello, this is if condition=else branch");\n        }\n        }            \n\n        public void TestFor()\n        {\n        int sum = 0;\n        for (var i = 0; i < 10; ++i)\n        {\n            sum += i;\n            Console.WriteLine("for loop in");\n        }\n        Console.WriteLine("test for sum is " + sum); // sum=45\n    }\n\n    public void TestWhile()\n    {\n        int sum = 0;\n        int i = 0;\n        while (i < 10)\n        {\n            sum += i;\n            Console.WriteLine("while loop in");\n            i++;\n        }\n        Console.WriteLine("test while loop sum is " + sum); // sum=45\n        }\n\n        public void TestCompare()\n        {\n        var a = 5;\n        Console.WriteLine("5==5 is " + ((a == 5) ? "true" : "false"));\n        Console.WriteLine("4<5 is " + ((4 < a) ? "true" : "false"));\n\n        if (a == 5)\n        {\n            Console.WriteLine("a==5");\n        }\n        else\n        {\n            Console.WriteLine("a!=5");\n        }\n    }\n\n    public void TestContinue()\n    {\n        Console.WriteLine("test continue case");\n        int sum = 0;\n        for (var i = 0; i < 10; ++i)\n        {\n            if (i == 5)\n            {\n            Console.WriteLine("continue when i=" + i);\n            continue;\n            }\n            sum += i;\n            Console.WriteLine("for loop in");\n        }\n        Console.WriteLine("test for sum with continue is " + sum); // sum=40\n    }\n\n    public void TestBreak()\n    {\n        Console.WriteLine("test break case");\n        int sum = 0;\n        for (var i = 0; i < 10; ++i)\n        {\n            if (i == 5)\n            {\n            Console.WriteLine("break when i=" + i);\n            break;\n            }\n            sum += i;\n            Console.WriteLine("for loop in");\n        }\n        Console.WriteLine("test for sum with break is " + sum); // sum = 10\n        }\n\n        public int TestFuncArg(int a, int b, String name, bool c)\n        {\n        Console.WriteLine(a);\n        Console.WriteLine(b);\n        Console.WriteLine("name=" + name); // name=C#\n        Console.WriteLine("c=" + c); // c=true  \n        Console.WriteLine("hi " + c); // hi true\n        Console.WriteLine("args a + b = " + (a + b)); // a+b=11 when a = 5, b = 6\n        a = 10;\n        b = 20;\n        return a + b; // should be 30\n        }\n\n        public void TestMultiConcat()\n        {\n        int a = 1;\n        // 不支持超过2个字符串的字符串连接，因为.net数组是0-based，uvm数组是1-based\n        // Console.WriteLine("TestMultiConcat " + a + " and " + a);\n    }\n\n    public void TestArithmeticOperators()\n    {\n        var a = 8;\n        var b = 3;\n        var c = a - b;\n        Console.WriteLine("8-3=" + c); // 8-3=5\n        Console.WriteLine("8*3=" + (a * b)); // 8*3=24\n        Console.WriteLine("8/3=" + (a / b)); // 8/3=2, 整数除法\n        Console.WriteLine("8 div 3=" + div(a, b)); // 8 div 3=2.666, 浮点除法\n        Console.WriteLine("8 idiv 3=" + idiv(a, b)); // 8 idiv 3=2 整数除法\n        Console.WriteLine("7%3=" + (7 % b)); // 7%3=1\n        // 因为0在uvm中是布尔真值，所以暂时用一个单独的函数库做布尔运算\n        Console.WriteLine("true && false=" + and(true, false)); // true && false = false\n        Console.WriteLine("true || false=" + or(true, false)); // true || false = true\n        Console.WriteLine("9&3=" + (9 & b)); // 9&3=1\n        Console.WriteLine("9|3=" + (9 | b)); // 9|3=11\n        Console.WriteLine("9^3=" + (9 ^ b)); // 9^3=10\n        Console.WriteLine("8>>3=" + (a >> b)); // 8>>3=1\n        Console.WriteLine("8<<3=" + (a << 3)); // 8<<3=64     \n        var t = true;\n        print("-8=" + (-a)); // -8=-8        \n        print("-8=" + neg(a)); // -8=-8\n        print("!true=" + (!t)); // !true=0   这里.net字节码把布尔当0/1 int处理  \n        print("!true=" + not(t)); // !true=false        \n    }\n\n    public void TestPlainObject()\n    {\n        var storage = new Storage();\n        storage.Name = "C#";\n        storage.Age = 100;\n        storage.IsMale = true;\n        storage.Country = "China";\n        Console.WriteLine("storage name is " + storage.Name);\n        Console.WriteLine("storage age is " + storage.Age);\n        Console.WriteLine("storage isMale is " + storage.IsMale);\n        print("storage country is " + storage.Country);\n        pprint(storage);\n        pprint(null);\n    }\n\n    public void TestArray()\n    {\n        var array1 = UVMArray<int?>.Create();\n        array1.Add(1);\n        array1.Add(2);\n        array1.Add(3);\n        array1.Add(4);\n        pprint(array1);\n        print("array 1 size is " + array1.Count()); // 4      \n        array1.Set(4, 2); \n        print("array[4] is " + array1.Get(4)); // 2  \n        array1.Pop();\n        print("array 1 after changed size is " + array1.Count()); // 3\n        print("array[3] is " + array1.Get(3)); // 3      \n        for (int i = 1; i <= array1.Count(); ++i)\n        {\n            var item = array1.Get(i);\n            print("index: " + i);\n            print("value: " + item);\n        }\n    }\n\n    public void TestMap()\n    {\n        var map1 = UVMMap<string>.Create();\n        map1.Set("name", "C#");\n        map1.Set("country", "China");\n        Console.WriteLine("map1\'s name is " + map1.Get("name"));\n        Console.WriteLine("map1\'s country is " + map1.Get("country"));\n\n        // 遍历map的demo\n        var map1PairsIter = map1.Pairs();\n        pprint(map1PairsIter);\n        var keyValuePair = map1PairsIter(map1, null);\n        pprint(keyValuePair);\n        print(keyValuePair.Key);\n        print(keyValuePair.Value);\n        while (keyValuePair.Key != null)\n        {\n            Console.WriteLine("key: " + tostring(keyValuePair.Key));\n            Console.WriteLine("value: " + tostring(keyValuePair.Value));\n\n            if (keyValuePair.Key == "name")\n            {\n            print("found key==name pair");\n            }\n            keyValuePair = map1PairsIter(map1, keyValuePair.Key);\n        }\n\n    }\n\n    public void TestEmitEvent()\n    {\n        MyEventEmitteer.EmitHello("hello");\n        var a = 3;\n        var b = 4;\n        MyEventEmitteer.EmitHello2("" + (a + b)); \n    }\n\n    public void TestModules()\n    {  \n        // 引用string模块，UVMStringModule类型是返回的模块对象的类型，必须用合适的类型来引用合适的模块\n        var strModule = importModule<UVMStringModule>("string");\n        pprint("string module: " + tojsonstring(strModule));\n\n        // 可以调用string模块的函数来获取字符串长度，也可以用C#的字符串类型的内置Length属性来获取字符串长度\n        var helloLength = "hello".Length;\n        var helloLength2 = strModule.Len("hello");\n        print("hello string length is: " + helloLength);\n        print("hello string length2 is: " + helloLength2);\n\n        var tableModule = importModule<UVMTableModule>("table");\n        var table1 = UVMArray<string>.Create();\n        table1.Add("a");\n        tableModule.Append(table1, "b");\n        var table1Count = tableModule.Length(table1);\n        print("table1 size is: " + table1Count);\n\n        var mathModule = importModule<UVMMathModule>("math");\n        var floor1 = mathModule.Floor(3.3);  \n        print("floor(3.3) = " + floor1);\n\n        var abs1 = mathModule.Abs(-4);\n        print("abs(-4) = " + abs1);\n\n        var pi = mathModule.pi;\n        print("pi = " + pi);\n\n        var timeModule = importModule<UVMTimeModule>("time");            \n        print("date: " + timeModule.Tostr(1494301754));\n\n        var jsonModule = importModule<UVMJsonModule>("json");\n        print("dumps of json module is: " + jsonModule.Dumps(jsonModule));\n\n        var typeOfNumber = Type(123);\n        print("type(123) = " + typeOfNumber);\n\n        var array1 = UVMArray<string>.Create();\n        array1.Add("a");\n        array1.Add("b");\n        print("rawlen([\'a\', \'b\'])=" + rawlen(array1));\n\n        print("caller_address = " + tostring(caller_address())); // 非合约中会返回nil\n\n        var array1Iter = array1.Ipairs();\n        var array1keyValuePair = array1Iter(array1, 0);\n        while(array1keyValuePair.Key != null)\n        {                             \n            print("key: " + array1keyValuePair.Key);\n            print("value: " + array1keyValuePair.Value);\n            array1keyValuePair = array1Iter(array1, array1keyValuePair.Key);\n        }                                            \n    }\n\n    public void TestImportContract()\n    {\n        var helloContract = importContract<HelloContract>("hello");\n        helloContract.SayHello("C#");\n    }\n    \n    /**\n    * 这是程序入口，必需，且必须是非static方法.如果是要定义合约，需要返回类型是一个合约类型\n    */\n    public MyContract Main()\n    {\n        print("start of demo C# contract \\r\\n another line");\n        \n        var result = SayHi();\n        Console.WriteLine("SayHi result is " + result);\n        TestIf();\n        TestFor();\n        TestWhile();\n        TestContinue();\n        TestCompare();\n        TestBreak();\n        var testFuncArgResult = TestFuncArg(5, 6, "C#", true);\n        Console.WriteLine("testFuncArg result is " + testFuncArgResult);\n        TestArithmeticOperators();\n        TestPlainObject();\n        TestArray();\n        TestMap();\n        TestEmitEvent();\n        TestModules();\n        \n        // TestImportContract();\n\n        var contract = new MyContract();\n\n        contract.storage = new Storage(); \n        contract.init();\n\n        pprint(contract); \n        \n        var offlineGetAgeRet = contract.OfflineGetAge("");\n        print("OfflineGetAge ret is " + offlineGetAgeRet);    \n        \n        print("end main");\n        return contract;\n    }\n}\n}\n')])])])},[],!1,null,null,null);e.default=r.exports}}]);