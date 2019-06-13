(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{212:function(e,i,r){"use strict";r.r(i);var a=r(0),_=Object(a.a)({},function(){var e=this,i=e.$createElement,r=e._self._c||i;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"hx-docker环境部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hx-docker环境部署","aria-hidden":"true"}},[e._v("#")]),e._v(" hx docker环境部署")]),e._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),r("p",[e._v("因为服务器一般都用的linux的服务器，下面以ubuntu16.04的服务器环境为例，说下如何编译生成hx项目的docker部署镜像以及启动相应容器。")]),e._v(" "),r("h2",{attrs:{id:"下载部署所需资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#下载部署所需资源","aria-hidden":"true"}},[e._v("#")]),e._v(" 下载部署所需资源")]),e._v(" "),r("p",[e._v("1.从相应官方网站"),r("a",{attrs:{href:"http://www.hx.cash/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.hx.cash/"),r("OutboundLink")],1),e._v("下载部署文件deploy_data.zip并解压到本地的路径。目录结构如下：")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker.png",alt:"docker deploy"}})]),e._v(" "),r("p",[e._v("2.目录结构说明：")]),e._v(" "),r("ul",[r("li",[e._v("main_chain目录：该目录放的是hx主链所需的内容以及启动脚本；")]),e._v(" "),r("li",[e._v("third_chain目录：该目录放的是hx接入的第三方链的内容以及启动脚本；")]),e._v(" "),r("li",[e._v("volumes目录：该目录主要用于将启动后hx中的相关链数据以及log映射到外面；")]),e._v(" "),r("li",[e._v("docker-compose.yml文件：用于组织和配置hx中两个docker serveice hx-mainchain以及hx- thirdchain的；")]),e._v(" "),r("li",[e._v("Dockerfile_mainchain和Dockerfile_thirdchain文件：定义hx_mainchain以及hx_thirdchain的docker文件；")]),e._v(" "),r("li",[e._v("sources.list文件：Ubuntu系统中的配置文件，用于配置ubuntu源。")])]),e._v(" "),r("h2",{attrs:{id:"配置文件详细说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置文件详细说明","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置文件详细说明")]),e._v(" "),r("p",[e._v("1.Dockerfile_mainchain")]),e._v(" "),r("p",[e._v("(1)对于国内用户，docker中将sources.list做了修改，以便更好、够快的安装相关软件；")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker1.png",alt:"docker deploy"}})]),e._v(" "),r("p",[e._v("(2)配置hx_mainchain所需内容；")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker2.png",alt:"docker deploy"}})]),e._v(" "),r("ul",[r("li",[r("p",[e._v("在docker镜像中创建/hx/crosschain_midware目录，用于存放中间件相关的数据；")])]),e._v(" "),r("li",[r("p",[e._v("将hx_mainchain所需的内容从main_chain目录拷贝到docker镜像中；")])]),e._v(" "),r("li",[r("p",[e._v("将start.sh（docker启动后执行的脚本）以及witness_node（mainchain的节点）赋予执行权限；")])]),e._v(" "),r("li",[r("p",[e._v("将witness_node链接到/usr/bin下，方便start.sh脚本进行使用")])])]),e._v(" "),r("p",[e._v("(2)配置hx_mainchain启动执行脚本")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker3.png",alt:"docker deploy"}})]),e._v(" "),r("p",[e._v("(3)hx_mainchain的执行脚本，位于main_chain目录下")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker4.png",alt:"docker deploy"}})]),e._v(" "),r("p",[e._v("2.Dockerfile_thirdchain")]),e._v(" "),r("p",[e._v("它的结构类似上述的Dockerfile_mainchain，这里不再赘述；")]),e._v(" "),r("p",[e._v("3.Docker-compose.yml")]),e._v(" "),r("p",[e._v("(1)docker-compose 中定义了两个service（镜像），分别为hx_thirdchain以及hx_mainchain；")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker5.png",alt:"docker deploy"}})]),e._v(" "),r("p",[e._v("(2)Service：hx_thirdchain")]),e._v(" "),r("ul",[r("li",[e._v("以当前目录下的Dockerfile_thirdchain作为其docker file；")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker6.png",alt:"docker deploy"}})]),e._v(" "),r("ul",[r("li",[e._v("定义service(镜像)的name以及tag")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker7.png",alt:"docker deploy"}})]),e._v(" "),r("ul",[r("li",[e._v("设定thirdchain的端口映射这些端口对应于执行脚本中相关链的端口")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker8.png",alt:"docker deploy"}})]),e._v(" "),r("p",[e._v("执行脚本start.sh中的端口情况")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker9.png",alt:"docker deploy"}})]),e._v(" "),r("ul",[r("li",[e._v("设定映射的目录")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker10.png",alt:"docker deploy"}})]),e._v(" "),r("ul",[r("li",[e._v("设定service启动后运行docker的名称")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker11.png",alt:"docker deploy"}})]),e._v(" "),r("ul",[r("li",[e._v("设定service的ipv4地址")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker12.png",alt:"docker deploy"}})]),e._v(" "),r("p",[e._v("(3)Service：hx_mainchain")]),e._v(" "),r("p",[e._v("类似上面的hx_thirdchain service")]),e._v(" "),r("ul",[r("li",[e._v("设定该service的依赖项,hx_mainchain service依赖于hx_thirdchain service")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker13.png",alt:"docker deploy"}})]),e._v(" "),r("ul",[r("li",[e._v("设定该service的ipv4地址")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker14.png",alt:"docker deploy"}})]),e._v(" "),r("p",[e._v("4.执行脚本(start.sh)")]),e._v(" "),r("p",[e._v("(1)main_chain中的执行脚本")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker15.png",alt:"docker deploy"}})]),e._v(" "),r("ul",[r("li",[e._v("启动采集插件所需的mongo db")]),e._v(" "),r("li",[e._v("启动采集插件")]),e._v(" "),r("li",[e._v("启动mainchain的witness_node节点")])]),e._v(" "),r("p",[e._v("(2)third_chain中的执行脚本")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/wallets/docker/docker16.png",alt:"docker deploy"}})]),e._v(" "),r("ul",[r("li",[e._v("启动bitcoin节点")]),e._v(" "),r("li",[e._v("启动hc节点")]),e._v(" "),r("li",[e._v("启动litecoin节点")])]),e._v(" "),r("h2",{attrs:{id:"编译镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编译镜像","aria-hidden":"true"}},[e._v("#")]),e._v(" 编译镜像")]),e._v(" "),r("p",[e._v("进入到deploy_data目录，执行下面的命令：")]),e._v(" "),r("pre",[r("code",[e._v("sudo docker-compose build [hx_mainchain/hx_thirdchain]\n")])]),e._v(" "),r("p",[e._v("说明：")]),e._v(" "),r("ul",[r("li",[e._v("[hx_mainchain/hx_thirdchain]为可选参数，表示编译哪个镜像(service)，若为空，则编译所有的镜像(service)。")]),e._v(" "),r("li",[e._v("docker compose中有两个镜像(service), 分别为hx_mainchain,  hx_thirdchain, 其中hx_mainchain依赖于hx_thirdchain. 所以你也可以编译单独的镜像。")])]),e._v(" "),r("h2",{attrs:{id:"启动容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动容器","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动容器")]),e._v(" "),r("p",[e._v("在deploy_data目录下执行下面的命令：")]),e._v(" "),r("pre",[r("code",[e._v("sudo docker-compose up –d  [hx_mainchain/hx_thirdchain]\n")])]),e._v(" "),r("p",[e._v("说明：")]),e._v(" "),r("ul",[r("li",[e._v("[hx_mainchain/hx_thirdchain]为可选参数，表示以哪个镜像为基础启动container，若为空，则启动所有container。")]),e._v(" "),r("li",[e._v("因为hx_mainchain依赖于hx_thirdchain, 所以先要启动hx_thirdchain让里面的第三方链同步数据；过一段时间后(最好是数据同步好后)，启动hx_mainchain，里面的采集程序采集相关数据。")])]),e._v(" "),r("h2",{attrs:{id:"确认容器状态"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#确认容器状态","aria-hidden":"true"}},[e._v("#")]),e._v(" 确认容器状态")]),e._v(" "),r("p",[e._v("在deploy_data目录下使用cli_wallet(如果其没有执行权限，加上相应执行权限)，连接上hx链查看其状态。")]),e._v(" "),r("pre",[r("code",[e._v("./cli_wallet -s ws://192.168.18.8:8090\n")])]),e._v(" "),r("p",[e._v("说明：上面命令的的ip以及port的说明具体见上面配置文件的说明。")])])},[],!1,null,null,null);i.default=_.exports}}]);