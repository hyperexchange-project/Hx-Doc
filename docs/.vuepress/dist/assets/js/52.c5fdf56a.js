(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{200:function(e,t,o){"use strict";o.r(t);var n=o(0),i=Object(n.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"hyperexchange-building-guide"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hyperexchange-building-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" HyperExchange Building Guide")]),e._v(" "),o("p",[e._v("Last updated for v1.0.7.")]),e._v(" "),o("h2",{attrs:{id:"building"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building","aria-hidden":"true"}},[e._v("#")]),e._v(" Building")]),e._v(" "),o("p",[o("strong",[e._v("HX-Node")]),e._v(" requires a 64-bit operating system to build")]),e._v(" "),o("p",[o("strong",[e._v("HX-Node")]),e._v(" requires a Boost version 1.64.0 or newer than it. Versions earlier than 1.64 are NOT supported.")]),e._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"/wallets/hx-building/#1"}},[e._v("Ubuntu (64-bit) Linux")])],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"/wallets/hx-building/#2"}},[e._v("OS X")])],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"/wallets/hx-building/#3"}},[e._v("Windows")])],1)]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"1"}},[e._v("BUILD_UBUNTU")]),e._v(" "),o("hr"),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Ubuntu 16.04 LTS (64-bit) Build and Install Instructions")])])]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("The following dependencies were necessary for a clean install on Ubuntu 16.04 LTS (64-bit):")]),e._v(" "),o("pre",[o("code",[e._v("sudo apt-get update\nsudo apt-get install autoconf cmake make automake libtool git libboost-all-dev libssl-dev g++ libcurl4-openssl-dev libleveldb-dev\n")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Build Crosschain Privatekey")])])]),e._v(" "),o("pre",[o("code",[e._v("git clone https://github.com/BlockLink/blocklink_crosschain_privatekey\ncd blocklink_crosschain_privatekey\ncmake -DCMAKE_BUILD_TYPE=Release .\nmake\n")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Build Eth Crosschain Privatekey")])])]),e._v(" "),o("pre",[o("code",[e._v("git clone https://github.com/BlockLink/eth_crosschain_privatekey.git\ncd eth_crosschain_privatekey/eth_sign/cryptopp/\nmake\ncd ..\ncmake .\nmake\n")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Build HyperExchange Node")])])]),e._v(" "),o("p",[e._v("Add path of crosschain privatekey and eth crosschain privatekey, please use the path of blocklink_crosschain_privatekey and eth_crosschain_privatekey in your environment.")]),e._v(" "),o("pre",[o("code",[e._v("`export CROSSCHAIN_PRIVATEKEY_PROJECT=~/blocklink_crosschain_privatekey`\n`export ETH_CROSSCHAIN_PROJECT=~/eth_crosschain_privatekey`\n\n\ngit clone https://github.com/HcashOrg/HyperExchange.git\ncd HyperExchange\ngit submodule update --init --recursive\ncmake .\nmake\n")])]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"2"}},[e._v("Building on OS X")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("HyperExchange Node OS X Build Instructions")])])]),e._v(" "),o("p",[e._v("1.Install XCode and its command line tools by following the instructions here:"),o("a",{attrs:{href:"https://guide.macports.org/#installing.xcode",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://guide.macports.org/#installing.xcode"),o("OutboundLink")],1),e._v(". In OS X 10.11 (El Capitan) and newer, you will be prompted to install developer tools when running a devloper command in the terminal. This step may not be needed.")]),e._v(" "),o("p",[e._v("2.Install Homebrew by following the instructions here: "),o("a",{attrs:{href:"http://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://brew.sh/"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("3.Initialize Homebrew:")]),e._v(" "),o("pre",[o("code",[e._v("brew doctor\nbrew update\n")])]),e._v(" "),o("p",[e._v("4.Install dependencies:")]),e._v(" "),o("pre",[o("code",[e._v("brew install boost cmake git openssl autoconf automake libtool\nbrew link --force openssl \n")])]),e._v(" "),o("p",[e._v("5.Optional. To support importing Bitcoin wallet files:")]),e._v(" "),o("pre",[o("code",[e._v("brew install berkeley-db\n")])]),e._v(" "),o("p",[e._v("6.Optional. To use TCMalloc in LevelDB:")]),e._v(" "),o("pre",[o("code",[e._v("brew install google-perftools\n")])]),e._v(" "),o("p",[e._v("7.Build Crosschain Privatekey")]),e._v(" "),o("pre",[o("code",[e._v("git clone https://github.com/BlockLink/blocklink_crosschain_privatekey\ncd blocklink_crosschain_privatekey\ncmake .\nmake\n")])]),e._v(" "),o("p",[e._v("8.Build Eth Crosschain Privatekey")]),e._v(" "),o("pre",[o("code",[e._v("git clone https://github.com/BlockLink/eth_crosschain_privatekey.git\ncd eth_crosschain_privatekey/eth_sign/cryptopp/\nmake\ncd ..\ncmake .\nmake\n")])]),e._v(" "),o("p",[e._v("9.Clone the HyperExchange repository:")]),e._v(" "),o("pre",[o("code",[e._v("git clone https://github.com/HcashOrg/HyperExchange.git\ncd HyperExchange\n")])]),e._v(" "),o("p",[e._v("10.Build HyperExchange:")]),e._v(" "),o("p",[e._v("Add path of crosschain privatekey and eth crosschain privatekey, please use the path of blocklink_crosschain_privatekey and eth_crosschain_privatekey in your environment.")]),e._v(" "),o("pre",[o("code",[e._v("`export CROSSCHAIN_PRIVATEKEY_PROJECT=~/blocklink_crosschain_privatekey`\n`export ETH_CROSSCHAIN_PROJECT=~/eth_crosschain_privatekey`\n\ngit submodule update --init --recursive\ncmake .\nmake\n")])]),e._v(" "),o("p",[e._v('Notes: As mentioned elsewhere, HyperExchange depends on the third-party libraries "Boost" and "OpenSSL". These libraries need to be in certain version ranges. At the moment, Boost needs to be 1.64 or newer than it. OpenSSL needs to be in the 1.0.x range.')]),e._v(" "),o("p",[e._v("Boost: You can check which version(s) of boost you have by asking brew:")]),e._v(" "),o("pre",[o("code",[e._v("brew search boost\n")])]),e._v(" "),o("p",[e._v("To install another version of Boost (such as 1.64):")]),e._v(" "),o("pre",[o("code",[e._v("brew install boost@1.64\n")])]),e._v(" "),o("p",[e._v("OpenSSL: You may have an older version of OpenSSL than is required. If so, have brew get the latest:")]),e._v(" "),o("pre",[o("code",[e._v("brew upgrade openssl\n")])]),e._v(" "),o("p",[e._v('Compiling with these new versions: We must now tell cmake where these libraries are. Instead of the "cmake ." mentioned above, we use:')]),e._v(" "),o("pre",[o("code",[e._v("cmake -DBOOST_ROOT=/usr/local/opt/boost@1.64 -DOPENSSL_ROOT_DIR=/usr/local/opt/openssl .\n")])]),e._v(" "),o("p",[e._v("and then proceed with the normal")]),e._v(" "),o("pre",[o("code",[e._v("make\n")])]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"3"}},[e._v("Building on Windows - Visual Studio 2017")]),e._v(" "),o("blockquote",[o("p",[e._v("Prerequisites")])]),e._v(" "),o("ul",[o("li",[e._v("Microsoft Visual C++ 2017 Update 1 (the free Express edition will work)")]),e._v(" "),o("li",[e._v("If you have multiple MSVS installation use MSVS Developer console from target version.")]),e._v(" "),o("li",[e._v("This build is for 64bit binaries.")])]),e._v(" "),o("blockquote",[o("p",[e._v("Set up the directory structure")])]),e._v(" "),o("p",[e._v("1.Create a base directory for all projects. I'm putting everything in D:\\hyperexchange, you can use whatever you like. In several of the batch files and makefiles, this directory will be referred to as "),o("code",[e._v("GRA_ROOT")]),e._v(":")]),e._v(" "),o("pre",[o("code",[e._v("mkdir D:\\hyperexchange\n")])]),e._v(" "),o("p",[e._v("2.Clone the hyperexchange repository")]),e._v(" "),o("pre",[o("code",[e._v("D:\ncd D:\\hyperexchange\ngit clone https://github.com/HcashOrg/HyperExchange.git\ncd HyperExchange\ngit submodule update --init --recursive\n")])]),e._v(" "),o("p",[e._v("3.Download CMake")]),e._v(" "),o("p",[e._v("Download the latest Win32 Zip build CMake from "),o("a",{attrs:{href:"https://cmake.org/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://cmake.org/cmake/resources/software.html"),o("OutboundLink")],1),e._v(" (version 3.12.2 as of this writing). Unzip it to your base directory, which will create a directory that looks something like "),o("code",[e._v("D:\\hyperexchange\\cmake-3.12.2-win64-x64")]),e._v(". Rename this directory to "),o("code",[e._v("D:\\hyperexchange\\CMake")]),e._v(".")]),e._v(" "),o("p",[e._v("If you already have CMake installed elsewhere on your system you can use it, but hyperexchange Core has a few batch files that expect it to be in the base directory's "),o("code",[e._v("CMake")]),e._v(" subdirectory, so those scripts would need tweaking.")]),e._v(" "),o("p",[e._v("4.Boost")]),e._v(" "),o("p",[e._v("hyperexchange depends on the Boost libraries version 1.64.0 or newer than it. You can build them from source.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("download boost source from "),o("a",{attrs:{href:"http://www.boost.org/users/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.boost.org/users/download/"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("unzip it to the base directory "),o("code",[e._v("D:\\hyperexchange")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("This will create a directory like "),o("code",[e._v("D:\\hyperexchange\\boost_1_64_0")]),e._v(".")])])]),e._v(" "),o("p",[e._v("5.OpenSSL")]),e._v(" "),o("p",[e._v("HyperExchange depends on OpenSSL version 1.0.2, and you must build this from source.")]),e._v(" "),o("ul",[o("li",[e._v("download OpenSSL source from "),o("a",{attrs:{href:"http://www.openssl.org/source/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.openssl.org/source/"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Untar it to the base directory "),o("code",[e._v("D:\\hyperexchange")])]),e._v(" "),o("li",[e._v("this will create a directory like "),o("code",[e._v("D:\\hyperexchange\\openssl-1.0.2o")]),e._v(".")])]),e._v(" "),o("p",[e._v("6.Crosschain Privatekey")]),e._v(" "),o("p",[e._v("HyperExchange depends on libboost, you must build this from source.")]),e._v(" "),o("ul",[o("li",[e._v("download Crosschain Privatekey source from "),o("a",{attrs:{href:"https://github.com/BlockLink/blocklink_crosschain_privatekey",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/BlockLink/blocklink_crosschain_privatekey"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Untar it to the base directory "),o("code",[e._v("D:\\hyperexchange")])]),e._v(" "),o("li",[e._v("this will create a directory like "),o("code",[e._v("D:\\hyperexchange\\blocklink_crosschain_privatekey")]),e._v(".")])]),e._v(" "),o("p",[e._v("7.Eth Crosschain Privatekey")]),e._v(" "),o("p",[e._v("HyperExchange depends on libboost, you must build this from source.")]),e._v(" "),o("ul",[o("li",[e._v("download Crosschain Privatekey source from "),o("a",{attrs:{href:"https://github.com/BlockLink/eth_crosschain_privatekey.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/BlockLink/eth_crosschain_privatekey.git"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Untar it to the base directory "),o("code",[e._v("D:\\hyperexchange")]),e._v(",Untar leveldb.rar to the base directory "),o("code",[e._v("D:\\hyperexchange")]),e._v(" too;")]),e._v(" "),o("li",[e._v("this will create a directory like "),o("code",[e._v("D:\\hyperexchange\\eth_crosschain_privatekey")]),e._v(" and "),o("code",[e._v("D:\\hyperexchange\\leveldb")]),e._v(".")])]),e._v(" "),o("p",[e._v("At the end of this, your base directory should look like this (directory names will be slightly different for the 64bit versions):")]),e._v(" "),o("pre",[o("code",[e._v("D:\\hyperexchange\n+- HyperExchange\n+- boost_1_64_0\n+- CMake\n+- openssl-1.0.2o\n+- blocklink_crosschain_privatekey\n+- eth_crosschain_privatekey\n+- leveldb\n")])]),e._v(" "),o("blockquote",[o("p",[e._v("Build the library dependencies")])]),e._v(" "),o("p",[e._v("1.Build OpenSSL DLLs")]),e._v(" "),o("pre",[o("code",[e._v("D:\ncd D:\\hyperexchange\\openssl-1.0.2o\nperl Configure VC-WIN64A --prefix=D:\\hyperexchange\\OpenSSL\nms\\do_win64a\nnmake -f ms\\ntdll.mak\nnmake -f ms\\ntdll.mak install\n")])]),e._v(" "),o("p",[e._v('If occur error like "NMAKE : fatal error U1077" when you excute command '),o("code",[e._v("nmake -f ms\\ntdll.mak")]),e._v(", please try to use "),o("code",[e._v("VS2013 x64 native tool command prompt")]),e._v(" tool to excute nmake command.")]),e._v(" "),o("p",[e._v("2.Build Boost")]),e._v(" "),o("pre",[o("code",[e._v("D:\ncd D:\\hyperexchange\\boost_1_64_0\nbootstrap.bat\n.\\b2.exe address-model=64\n")])]),e._v(" "),o("p",[e._v("3.Build Crosschain Privatekey")]),e._v(" "),o("p",[e._v("Set up environment for building:")]),e._v(" "),o("pre",[o("code",[e._v("D:\ncd D:\\hyperexchange\\blocklink_crosschain_privatekey\nnotepad setenv_x64.bat\n")])]),e._v(" "),o("p",[e._v("Put this into the notepad window, then save and quit.")]),e._v(" "),o("pre",[o("code",[e._v('@echo off\nset GRA_ROOT=d:/hyperexchange\nset OPENSSL_ROOT=%GRA_ROOT%\\OpenSSL\nset OPENSSL_ROOT_DIR=%OPENSSL_ROOT%\nset OPENSSL_INCLUDE_DIR=%OPENSSL_ROOT%\\include\nset BOOST_ROOT=%GRA_ROOT%\\boost_1_64_0\nset CROSSCHAIN_PRIVATEKEY_PROJECT=%GRA_ROOT%/blocklink_crosschain_privatekey\n\nset PATH=%GRA_ROOT%\\CMake\\bin;%BOOST_ROOT%\\stage\\lib;%OPENSSL_ROOT%\\lib\\;%CROSSCHAIN_PRIVATEKEY_PROJECT%;%PATH%\n\necho Setting up VS2017 environment...\ncall "%VS150COMNTOOLS%\\..\\..\\VC\\vcvarsall.bat" x86_amd64\n')])]),e._v(" "),o("p",[e._v('In my PC,VS150COMNTOOLS:"C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\Community\\VC\\Auxiliary\\Build", please set a correct path of file vcvarsall.bat by your PC.')]),e._v(" "),o("p",[e._v("Note keep slash and backslash are consistency with the example")]),e._v(" "),o("p",[e._v("Then run")]),e._v(" "),o("pre",[o("code",[e._v("setenv_x64.bat\n")])]),e._v(" "),o("p",[e._v("Build")]),e._v(" "),o("pre",[o("code",[e._v("D:\ncd D:\\hyperexchange\\blocklink_crosschain_privatekey\nnotepad run_cmake_x64.bat\n")])]),e._v(" "),o("p",[e._v("Put this into the notepad window, then save and quit.")]),e._v(" "),o("pre",[o("code",[e._v('setlocal\ncall "d:\\hyperexchange\\blocklink_crosschain_privatekey\\setenv_x64.bat"\ncd %GRA_ROOT%\\blocklink_crosschain_privatekey\ncmake-gui -G "Visual Studio 15"\n')])]),e._v(" "),o("p",[e._v("Then run")]),e._v(" "),o("pre",[o("code",[e._v("run_cmake_x64.bat\n")])]),e._v(" "),o("p",[e._v("This pops up the cmake gui, but if you've used CMake before it will probably be showing the wrong data, so fix that:")]),e._v(" "),o("ul",[o("li",[e._v("Where is the source code: "),o("code",[e._v("D:/hyperexchange/blocklink_crosschain_privatekey")])]),e._v(" "),o("li",[e._v("Where to build the binaries: "),o("code",[e._v("D:/hyperexchange/blocklink_crosschain_privatekey/x64")])])]),e._v(" "),o("p",[e._v("Then hit Configure. It may ask you to specify a generator for this project; if it does, choose Visual Studio 15 2017 Win64 for 64 bit builds and select Use default native compilers. Look through the output and fix any errors. Then hit Generate.")]),e._v(" "),o("p",[e._v("Launch Visual Studio and load D:\\hyperexchange\\blocklink_crosschain_privatekey\\x64\\blocklink_crosschain_privatekey.sln")]),e._v(" "),o("p",[e._v("Set Active Configuration to "),o("code",[e._v("RelWithDebInfo")]),e._v(", ensure Active Solution platform is "),o("code",[e._v("x64")]),e._v(" for 64 bit builds")]),e._v(" "),o("p",[e._v("Build Solution")]),e._v(" "),o("p",[e._v("After build successfully,build "),o("code",[e._v("INSTALL")]),e._v(" target, then will create a directory "),o("code",[e._v("third_libs")]),e._v(" under blocklink_crosschain_privatekey, include "),o("code",[e._v("blocklink_libbitcoin.lib")]),e._v(" and "),o("code",[e._v("blocklink_libbitcoin_secp256k1.lib")]),e._v(".")]),e._v(" "),o("p",[e._v("4.Build Eth Crosschain Privatekey")]),e._v(" "),o("p",[e._v("Build cryptlib.lib")]),e._v(" "),o("pre",[o("code",[e._v('D:\ncd D:\\hyperexchange\\eth_crosschain_privatekey\\eth_sign\\cryptopp\nfind file cryptest.sln and double click it,will open this project in vs2017;\nSet Active Configuration to"Release",ensure Active Solution platform is `x64` for 64 bit builds;\nSelect project cryptlib,right botton click and click Building;\ncopy D:\\hyperexchange\\eth_crosschain_privatekey\\eth_sign\\cryptopp\\x64\\Output\\Release\\cryptlib.lib to D:\\hyperexchange\\eth_crosschain_privatekey\\libs,if have no directory libs,to create it please.\n')])]),e._v(" "),o("p",[e._v("Set up environment for building:")]),e._v(" "),o("pre",[o("code",[e._v("D:\ncd D:\\hyperexchange\\eth_crosschain_privatekey\\eth_sign\nnotepad setenv_x64.bat\n")])]),e._v(" "),o("p",[e._v("Put this into the notepad window, then save and quit.")]),e._v(" "),o("pre",[o("code",[e._v('@echo off\nset GRA_ROOT=d:/hyperexchange\nset OPENSSL_ROOT=%GRA_ROOT%\\OpenSSL\nset OPENSSL_ROOT_DIR=%OPENSSL_ROOT%\nset OPENSSL_INCLUDE_DIR=%OPENSSL_ROOT%\\include\nset BOOST_ROOT=%GRA_ROOT%\\boost_1_64_0\nset ETH_CROSSCHAIN_PROJECT=%GRA_ROOT%/eth_crosschain_privatekey/eth_sign\n\nset PATH=%GRA_ROOT%\\CMake\\bin;%BOOST_ROOT%\\stage\\lib;%OPENSSL_ROOT%\\lib\\;%ETH_CROSSCHAIN_PROJECT%;%PATH%\n\necho Setting up VS2017 environment...\ncall "%VS150COMNTOOLS%\\..\\..\\VC\\vcvarsall.bat" x86_amd64\n')])]),e._v(" "),o("p",[e._v('In my PC,VS150COMNTOOLS:"C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\Community\\VC\\Auxiliary\\Build", please set a correct path of file vcvarsall.bat by your PC.')]),e._v(" "),o("p",[e._v("Note keep slash and backslash are consistency with the example")]),e._v(" "),o("p",[e._v("Then run")]),e._v(" "),o("pre",[o("code",[e._v("setenv_x64.bat\n")])]),e._v(" "),o("p",[e._v("Build")]),e._v(" "),o("pre",[o("code",[e._v("D:\ncd D:\\hyperexchange\\eth_crosschain_privatekey\\eth_sign\nnotepad run_cmake_x64.bat\n")])]),e._v(" "),o("p",[e._v("Put this into the notepad window, then save and quit.")]),e._v(" "),o("pre",[o("code",[e._v('setlocal\ncall "d:\\hyperexchange\\eth_crosschain_privatekey\\eth_sign\\setenv_x64.bat"\ncd %GRA_ROOT%\\eth_crosschain_privatekey\\eth_sign\ncmake-gui -G "Visual Studio 15"\n')])]),e._v(" "),o("p",[e._v("Then run")]),e._v(" "),o("pre",[o("code",[e._v("run_cmake_x64.bat\n")])]),e._v(" "),o("p",[e._v("This pops up the cmake gui, but if you've used CMake before it will probably be showing the wrong data, so fix that:")]),e._v(" "),o("ul",[o("li",[e._v("Where is the source code: "),o("code",[e._v("D:/hyperexchange/eth_crosschain_privatekey/eth_sign")])]),e._v(" "),o("li",[e._v("Where to build the binaries: "),o("code",[e._v("D:/hyperexchange/eth_crosschain_privatekey/eth_sign/x64")])])]),e._v(" "),o("p",[e._v("Then hit Configure. It may ask you to specify a generator for this project; if it does, choose Visual Studio 15 2017 Win64 for 64 bit builds and select Use default native compilers. Look through the output and fix any errors. Then hit Generate.")]),e._v(" "),o("p",[e._v("Launch Visual Studio and load D:\\hyperexchange\\eth_crosschain_privatekey\\x64\\eth_crosschain_privatekey.sln")]),e._v(" "),o("p",[e._v("Set Active Configuration to "),o("code",[e._v("RelWithDebInfo")]),e._v(", ensure Active Solution platform is "),o("code",[e._v("x64")]),e._v(" for 64 bit builds")]),e._v(" "),o("p",[e._v("Select project "),o("code",[e._v("eth_sign")]),e._v(",right botton click,choose "),o("code",[e._v("properties")]),e._v(",in "),o("code",[e._v("C/C++->Gneral->Additional Include Directories")]),e._v(" add boost directory："),o("code",[e._v("D:\\hyperexchange\\boost_1_64_0")]),e._v("; add include file directory of leveldb："),o("code",[e._v("D:\\hyperexchange\\leveldb\\include")]),e._v("; in "),o("code",[e._v("Librarian->General->Additional Dependencies")]),e._v(", add "),o("code",[e._v("leveldb.lib")]),e._v(", in "),o("code",[e._v("Additional Library Directories")]),e._v(", add "),o("code",[e._v("D:\\hyperexchange\\leveldb\\x64\\Release")]),e._v(", click "),o("code",[e._v("Apply->Confirm")]),e._v("； in project "),o("code",[e._v("eth_sign")]),e._v(" find out file "),o("code",[e._v("levelDB.cpp")]),e._v(", right botton click, select "),o("code",[e._v("Properties")]),e._v(",in "),o("code",[e._v("General")]),e._v(",set value of "),o("code",[e._v("Exincluded From Build")]),e._v(" to "),o("code",[e._v("Yes")]),e._v(".")]),e._v(" "),o("p",[e._v("Build Solution")]),e._v(" "),o("p",[e._v("After build,copy D:\\hyperexchange\\eth_crosschain_privatekey\\eth_sign\\x64\\Release\\eth_sign.lib to D:\\hyperexchange\\eth_crosschain_privatekey\\libs,if have no directory libs,to create it please.")]),e._v(" "),o("blockquote",[o("p",[e._v("Build project files for hyperexchange")])]),e._v(" "),o("p",[e._v("1.Set up environment for building:")]),e._v(" "),o("pre",[o("code",[e._v("D:\ncd D:\\hyperexchange\\HyperExchange\nnotepad setenv_x64.bat\n")])]),e._v(" "),o("p",[e._v("Put this into the notepad window, then save and quit.")]),e._v(" "),o("pre",[o("code",[e._v('@echo off\nset GRA_ROOT=d:/hyperexchange\nset OPENSSL_ROOT=%GRA_ROOT%\\OpenSSL\nset OPENSSL_ROOT_DIR=%OPENSSL_ROOT%\nset OPENSSL_INCLUDE_DIR=%OPENSSL_ROOT%\\include\nset BOOST_ROOT=%GRA_ROOT%\\boost_1_64_0\nset CROSSCHAIN_PRIVATEKEY_PROJECT=%GRA_ROOT%/blocklink_crosschain_privatekey\nset ETH_CROSSCHAIN_PROJECT=%GRA_ROOT%/eth_crosschain_privatekey\n\nset PATH=%GRA_ROOT%\\CMake\\bin;%BOOST_ROOT%\\stage\\lib;%OPENSSL_ROOT%\\lib\\;%CROSSCHAIN_PRIVATEKEY_PROJECT%;%ETH_CROSSCHAIN_PROJECT%;%PATH%\n\necho Setting up VS2017 environment...\ncall "%VS150COMNTOOLS%\\..\\..\\VC\\vcvarsall.bat" x86_amd64\n')])]),e._v(" "),o("p",[e._v('In my PC,VS150COMNTOOLS:"C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\Community\\VC\\Auxiliary\\Build", please set a correct path of file vcvarsall.bat by your PC.')]),e._v(" "),o("p",[e._v("Note keep slash and backslash are consistency with the example")]),e._v(" "),o("p",[e._v("Then run")]),e._v(" "),o("pre",[o("code",[e._v("setenv_x64.bat\n")])]),e._v(" "),o("p",[e._v("2.Run CMake:")]),e._v(" "),o("pre",[o("code",[e._v("D:\ncd D:\\hyperexchange\\HyperExchange\nnotepad run_cmake_x64.bat\n")])]),e._v(" "),o("p",[e._v("Put this into the notepad window, then save and quit.")]),e._v(" "),o("pre",[o("code",[e._v('setlocal\ncall "d:\\hyperexchange\\HyperExchange\\setenv_x64.bat"\ncd %GRA_ROOT%\\HyperExchange\ncmake-gui -G "Visual Studio 15"\n')])]),e._v(" "),o("p",[e._v("Then run")]),e._v(" "),o("pre",[o("code",[e._v("run_cmake_x64.bat\n")])]),e._v(" "),o("p",[e._v("This pops up the cmake gui, but if you've used CMake before it will probably be showing the wrong data, so fix that:")]),e._v(" "),o("ul",[o("li",[e._v("Where is the source code: "),o("code",[e._v("D:/hyperexchange/HyperExchange")])]),e._v(" "),o("li",[e._v("Where to build the binaries: "),o("code",[e._v("D:/hyperexchange/HyperExchange/x64")])])]),e._v(" "),o("p",[e._v("Then hit Configure. It may ask you to specify a generator for this project; if it does, choose Visual Studio 15 2017 Win64 for 64 bit builds and select Use default native compilers. Look through the output and fix any errors. Then hit Generate.")]),e._v(" "),o("p",[e._v("3.Launch Visual Studio and load D:\\hyperexchange\\x64\\hyperexchange.sln")]),e._v(" "),o("p",[e._v("4.Set Active Configuration to "),o("code",[e._v("RelWithDebInfo")]),e._v(", ensure Active Solution platform is "),o("code",[e._v("x64")]),e._v(" for 64 bit builds")]),e._v(" "),o("p",[e._v("5.Build Solution")]),e._v(" "),o("p",[e._v("6.Or you can build the "),o("code",[e._v("INSTALL")]),e._v(" target in Visual Studio which will copy all of the necessary files into your "),o("code",[e._v("D:\\hyperexchange\\HyperExchange\\install")]),e._v(" directory, then copy all of those files to the "),o("code",[e._v("bin")]),e._v(" directory.")]),e._v(" "),o("hr")])},[],!1,null,null,null);t.default=i.exports}}]);