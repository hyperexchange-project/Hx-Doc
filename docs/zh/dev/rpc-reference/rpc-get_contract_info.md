# get_contract_info

get_contract_info 命令根据合约id获取链上合约的信息。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "get_contract_info", 
  "params": ["HXTCQtETHn1MUjN3hJNTmWKe9gwFrZWFH12mN"], 
  "id": 1
}
```

> 输入参数

* 需要查询的合约 id

> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "id": "HXTCQtETHn1MUjN3hJNTmWKe9gwFrZWFH12mN",
        "owner_address": "HXTNa5ZMhvFYXSYN4E2sAKqDVBKZgU9AGEBfZ",
        "owner_name": "",
        "name": "",
        "description": "",
        "type_of_contract": "normal_contract",
        "registered_block": 372,
        "registered_trx": "854647f348b3de5194b990bc59b8d7c8a57553d0",
        "native_contract_key": "",
        "derived": [],
        "code_printable": {
            "abi": [
                "init"
            ],
            "offline_abi": [
                "hello"
            ],
            "events": [
                "hello"
            ],
            "printable_storage_properties": [],
            "printable_code": "1b476c7561100019930d0a1a0a04080408087856000000000000000000000028774001000000000000000000000205140000002c0000006c40000080000000a4808000ec8000008ac00080c7404001e24000001e000080cb0000008ac08080c7404001074140011c0100020d814002cac04002ecc000008ac08081a600000126008000040000000405696e697404076c6f63616c73130100000000000000040668656c6c6f0100000001000400000000010000000100000001000208000000224000001e4000804b00000000008000220000001ec0ff7f2600000126008000000000000000000000000000080000000100000001000000010000000100000001000000010000000100000001000000010000000670726f707300000000080000000000000000010000000100000001000208000000224000001e4000804b00000000008000220000001ec0ff7f2600000126008000000000000000000000000000080000000100000001000000010000000100000001000000010000000100000001000000010000000670726f707300000000080000000000000000070000000a00000001000304000000460040008140000064400001260080000200000004067072696e740407b3f5cabcbbaf01000000000000000000040000000800000008000000080000000a000000010000000573656c66000000000400000001000000055f454e56000c0000000f0000000200050900000086004000c140000000018000a440800181800000c00080009dc00001a600000126008000030000000405656d6974040668656c6c6f040768656c6c6f2001000000000000000000090000000d0000000d0000000d0000000d0000000e0000000e0000000e0000000e0000000f000000020000000573656c66000000000900000004617267000000000900000001000000055f454e5614000000010000000100000005000000050000000a000000070000000c0000000c0000000c0000000c0000000c0000000c0000000c0000000c0000000c0000000c0000000f0000000c00000026000000260000000300000009436f6e747261637401000000140000000853746f726167650200000014000000024d040000001400000001000000055f454e56",
            "code_hash": "a690f6b523fa951a51ca6fc2fe31d0f738fdd156"
        },
        "createtime": "2019-06-14T07:08:15"
    }
}
```

> 返回值

- **id**: 合约 id
- **owner_address**: 注册合约的账户地址
- **owner_name**: 注册合约的账户名
- **name**: 合约名称
- **description**: 合约描述
- **type_of_contract**: 合约类型
- **registered_block**: 注册合约的块号
- **registered_trx**: 注册合约的交易 id
- **native_contract_key**: ~~暂未使用~~
- **derived**: ~~暂未使用~~
- **code_printable.abi**: 合约 abi
- **code_printable.offline_abi**: 合约 offline abi
- **code_printable.events**: 合约 event
- **code_printable.printable_storage_properties**: ~~暂未使用~~
- **code_printable.printable_code**: 16 进制合约字节码
- **code_printable.code_hash**: 代码 hash
- **createtime**: 创建时间