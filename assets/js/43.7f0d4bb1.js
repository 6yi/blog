(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{534:function(t,a,s){"use strict";s.r(a);var e=s(5),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[t._v("##### \t\ttcp在ip层提供不可靠的服务基础上实现了可靠数据传输,具体实现了以下几种机制\n"),s("blockquote",[s("p",[t._v("流水线机制")]),t._v(" "),s("p",[t._v("滑动窗口")]),t._v(" "),s("p",[t._v("累积确认")]),t._v(" "),s("p",[t._v("单一重传定时器")]),t._v(" "),s("p",[t._v("触发重传事件")]),t._v(" "),s("blockquote",[s("p",[t._v("超时")]),t._v(" "),s("p",[t._v("收到重复ACK")])])]),t._v(" "),s("h4",{attrs:{id:"超时时间的设定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#超时时间的设定"}},[t._v("#")]),t._v(" 超时时间的设定")]),t._v(" "),s("p",[t._v("因为RTT是变化的,因此测量多个RTT时间(忽略重传),求平均值,获得RTT的估计值 :    "),s("strong",[t._v("EstimatedRTT")])]),t._v(" "),s("blockquote",[s("p",[t._v("EstimatedRTT = (1-α) * EstimatedRTT + α * SampleRTT")]),t._v(" "),s("p",[t._v("指数加权移动平均值")]),t._v(" "),s("p",[t._v("α=0.125")])]),t._v(" "),s("p",[t._v("在"),s("strong",[t._v("EstimatedRTT")]),t._v("基础上加上安全边界,安全边界的大小与"),s("strong",[t._v("EstimatedRTT")]),t._v("和"),s("strong",[t._v("SampleRTT")]),t._v("差值,即RTT的变化值")]),t._v(" "),s("blockquote",[s("p",[t._v("DevRTT = (1-β)  * DevRTT + β * | SampleRTT - EstimatedRTT |")]),t._v(" "),s("p",[t._v("β=0.25")])]),t._v(" "),s("p",[t._v("超时时间: "),s("strong",[t._v("TimeoutInterval")]),t._v("="),s("strong",[t._v("EstimatedRTT")]),t._v("+"),s("strong",[t._v("DevRTT")])]),t._v(" "),s("h4",{attrs:{id:"tcp发送方事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp发送方事件"}},[t._v("#")]),t._v(" Tcp发送方事件")]),t._v(" "),s("p",[t._v("从应用层收到数据")]),t._v(" "),s("blockquote",[s("p",[t._v("创建Segment")]),t._v(" "),s("p",[t._v("Segment第一个字节的编号是序列号")]),t._v(" "),s("p",[t._v("开始计时器")]),t._v(" "),s("p",[t._v("设置超时时间")])]),t._v(" "),s("p",[t._v("超时")]),t._v(" "),s("blockquote",[s("p",[t._v("重传引起超时的Segment")]),t._v(" "),s("p",[t._v("重启定时器")])]),t._v(" "),s("p",[t._v("收到ACK")]),t._v(" "),s("blockquote",[s("p",[t._v("确认未曾确认过的Segment")]),t._v(" "),s("blockquote",[s("p",[t._v("更新Sendbase")]),t._v(" "),s("p",[t._v("滑动窗口中若还有未确认的分组,重新启动定时器")])])]),t._v(" "),s("h4",{attrs:{id:"快速重传机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速重传机制"}},[t._v("#")]),t._v(" 快速重传机制")]),t._v(" "),s("p",[t._v("tcp中发生超时,超时时间间隔将重新设置,超时时间间隔加倍,重发丢失分组前需要等待过长的时间")]),t._v(" "),s("p",[t._v("通过重复ACK检测分组丢失")]),t._v(" "),s("blockquote",[s("p",[t._v("Sender会发送多个分组")]),t._v(" "),s("p",[t._v("如果某个分组丢失,可能会引发多个重发的ACK")])]),t._v(" "),s("p",[t._v("如果sender收到对同一数据的3个ACK则假定该数据之后的段已经丢失")]),t._v(" "),s("blockquote",[s("p",[t._v("快速重传:在定时器超时之前立刻进行重传")])]),t._v(" "),s("h4",{attrs:{id:"流量控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流量控制"}},[t._v("#")]),t._v(" 流量控制")]),t._v(" "),s("p",[t._v("接收方为tcp连接分配buffer")]),t._v(" "),s("p",[t._v("Receiver通过再Segment的头部字段将RecvWindow告诉Sender")]),t._v(" "),s("p",[t._v("Sender限制自己已经发送的但还未收到的ACK的数据不超过接收方的空闲RcvWindow尺寸")]),t._v(" "),s("p",[t._v("如果RcvWindow=0,发送方仍可以发送较小的数据段,从而返回RecWindow的信息以避免死锁情况")]),t._v(" "),s("h4",{attrs:{id:"tcp连接管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp连接管理"}},[t._v("#")]),t._v(" Tcp连接管理")]),t._v(" "),s("p",[t._v("Tcp sender和receiver在传输前需要建立连接")]),t._v(" "),s("p",[t._v("Server:等待客户连接")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerSocket")]),t._v(" serverSocket "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerSocket")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Socket")]),t._v(" socket "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" serverSocket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("accept")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Client:连接发起者")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Socket")]),t._v(" socket "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Socket")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h5",{attrs:{id:"建立连接过程使用三次握手机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立连接过程使用三次握手机制"}},[t._v("#")]),t._v(" 建立连接过程使用三次握手机制")]),t._v(" "),s("ol",[s("li",[t._v("client向server发送Syn报文段 , Syn报文段不携带任何数据 ,  但是携带了Syn的标志位,置1,表示需要建立连接,并且传递初始的序列号(有大量机制产生序列号或者伪随机选择)")]),t._v(" "),s("li",[t._v("server收到Syn报文段,若是同意则 ,Server为这个连接分配缓存,并且选择这次tcp连接的初始序列号,返回SynAck报文段,标志位1以及server初始序列号,ack字段为client初始序列号+1")]),t._v(" "),s("li",[t._v("client收到SynAck报文段,返回一个Ack报文段,syn标志位置0,序列号为server发送过来的期望序列号,ack为server序列号+1")])]),t._v(" "),s("h5",{attrs:{id:"关闭连接过程使用四次握手机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭连接过程使用四次握手机制"}},[t._v("#")]),t._v(" 关闭连接过程使用四次握手机制")]),t._v(" "),s("p",[t._v("?1.client向server发送tcp fin\n?2.server收到fin报文段,回复ack,发送fin\n3.client收到fin,回复ack,进入等待状态,如果收到fin会重新发送ack\n4.server收到ack,关闭连接")]),t._v(" "),s("h3",{attrs:{id:"连接示意图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接示意图"}},[t._v("#")]),t._v(" 连接示意图")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://59.110.173.180/usr/uploads/2020/02/154934584.png",alt:"微信截图_20200226002724.png"}})]),t._v(" "),s("h3",{attrs:{id:"tcp拥塞控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp拥塞控制"}},[t._v("#")]),t._v(" TCP拥塞控制")]),t._v(" "),s("h4",{attrs:{id:"sender限制发送速率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sender限制发送速率"}},[t._v("#")]),t._v(" Sender限制发送速率")]),t._v(" "),s("blockquote",[s("p",[t._v("rate≈CongWin/Rtt Bytes/sec")])]),t._v(" "),s("h4",{attrs:{id:"congwin-拥塞窗口大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#congwin-拥塞窗口大小"}},[t._v("#")]),t._v(" CongWin(拥塞窗口大小)")]),t._v(" "),s("blockquote",[s("p",[t._v("动态调整以改变发送速率")]),t._v(" "),s("p",[t._v("反映所感知到的网络拥塞")])]),t._v(" "),s("h4",{attrs:{id:"网络拥塞的感知"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络拥塞的感知"}},[t._v("#")]),t._v(" 网络拥塞的感知")]),t._v(" "),s("blockquote",[s("p",[t._v("Loss事件=timeout或者3个重复的ACK")])]),t._v(" "),s("h4",{attrs:{id:"发送速率的调整"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送速率的调整"}},[t._v("#")]),t._v(" 发送速率的调整")]),t._v(" "),s("h5",{attrs:{id:"加性增-乘性减-amd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加性增-乘性减-amd"}},[t._v("#")]),t._v(" 加性增---乘性减:AMD")]),t._v(" "),s("blockquote",[s("p",[t._v("逐渐增加发送速率,谨慎探测可用带宽,直到发生loss\n发生oss时,直接将CongWin减少为1/2\nAMD:每个RTT将CongWin增大一个MSS---拥塞避免")])]),t._v(" "),s("img",{attrs:{src:" http://59.110.173.180:9090/static/SavePic/529f83552b156410f127867121cabd5b%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20200226161409.png "}}),t._v(" "),s("h5",{attrs:{id:"慢启动-ss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#慢启动-ss"}},[t._v("#")]),t._v(" 慢启动:SS")]),t._v(" "),s("p",[t._v("TCP建立时,CongWin=1")]),t._v(" "),s("blockquote",[s("p",[t._v("例:MSS=500byte")]),t._v(" "),s("p",[t._v("RTT=200msec")]),t._v(" "),s("p",[t._v("初始速率=20kbps")])]),t._v(" "),s("p",[t._v("当连接开始时,指数性增长")]),t._v(" "),s("blockquote",[s("p",[t._v("每个RTT将CongWin翻倍")])]),t._v(" "),s("img",{attrs:{src:"http://59.110.173.180:9090/static/SavePic/6193adf3d2c4265e543271009f0ff4cf微信截图_20200226231823.png"}}),t._v(" "),s("p",[t._v("初始速率慢,但是会快速攀升")]),t._v(" "),s("p",[t._v("当CongWin达到LOSS事件前值的1/2时,指数性增长切换为线性增长")]),t._v(" "),s("p",[t._v("Threshold为LOSS事件前值的1/2")]),t._v(" "),s("img",{attrs:{src:"http://59.110.173.180:9090/static/SavePic/2d9b9653a70bf29ea4b8099b3bdd761d%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20200226185554.png"}}),t._v(" "),s("h5",{attrs:{id:"loss事件处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loss事件处理"}},[t._v("#")]),t._v(" Loss事件处理")]),t._v(" "),s("p",[t._v("3个重复ACK")]),t._v(" "),s("blockquote",[s("p",[t._v("CongWin切到一半,然后线性增长")])]),t._v(" "),s("p",[t._v("Timeout事件")]),t._v(" "),s("blockquote",[s("p",[t._v("CongWin直接设置为1个MSS,然后指数增长,达到Threhold后线性增长")])])])}),[],!1,null,null,null);a.default=v.exports}}]);