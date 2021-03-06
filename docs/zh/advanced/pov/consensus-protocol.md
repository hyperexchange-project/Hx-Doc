# 共识机制

POV 中 Citizen 通过竞争来争夺记账权的基本条件是提交质押金。这里的质押金包含 HX 和所有 HIOU。质押金数量越多，在争夺记账权算法中占
有的权重越大。POV 依靠链上随机数在每一轮共识开始时依据质押金权重随机选举 25 名 Citizen 进行轮流出块。

Citizen 的选出和产块规则如下：
每当区块数是 25 的整数倍时，进入下一轮 Citizen 选举流程。

1、喂价：每个 Senator 都有义务通过共识对 HIOU 进行喂价，喂价是指由 Senator 根据现行交易所的实时价计算出所有 HIOU：HX 的汇兑比例，然后分别进行喂价。喂价的最终结果值为所有 Senator 喂价去掉最高值和最低值，剩下的取平均数。喂价只会影响 Citizen 竞争出块时的权重。每 25 个块进行一轮 Citizen 切换，在一轮（25 个块）中是由选定的Citizen 进行出块，因此在一轮内喂价的变化并不会影响 Citizen 的资格变化。当进行新一轮 Citizen 切换时，会根据当前所有 HIOU 喂价重新计算Candidate of Citizen 的质押权重，然后根据权重选出本轮 Citizen。因此喂价变更时并不会影响本轮 Citizen 的权重。

2、从满足最低质押金要求的 Candidate of Citizen 中选出正式的 25个 Citizen 参与出块。在计算 Candidate of Citizen 质押金的数量时，是将 Candidate ofCitizen 上质押的所有 HIOU 和 HX 总和根据喂价换算成 HX 的值。例如，Candidate of Citizen A 上质押有 10 个 BTC、10 个 LTC、10 个 HX ，当前喂价为 1BTC：100HX 1LTC:10HX。经过计算 A 的质押总值为 1110 个 HX。HyperExchange 将所有 Candidate of Citizen 质押金数量喂价换算成 HX后，去除掉不满足最低质押金标准的 Candidate of Citizen，然后按照从大到小的顺序，在大整数（大整数是满足最低质押金标准的所有 Candidate ofCitizen 的有效质押金数量的和）上按有效质押金数量分配等量的配号。通过随机数种子生成 hash 值，对大整数取模得到值就是中签号，Candidate ofCitizen 拥有与中签号一致的配号即为命中。HyperExchange 连续 25 次命中
出 25 个不重复的 Candidate of Citizen 即为本轮产块的 Citizen。本轮的25 个块将根据命中顺序由被选出的 Citizen 进行轮流出块

3、POV 共识算法使得 HyperExchange 准确地每 5 秒生成一个区块，并且在任何时间点只有一个被授权的 Citizen 来生成区块。如果一个区块在规定时间之内未被生产出来则这个区块的生产者将会被跳过，由排序的下一个Citizen 进行替补出块。当一个或多个 Citizen 没有出块时，区块链上将有10 秒或以上的延迟。

4、通常HyperExchange链会有100%的Citizen参与，一个HyperExchange原生交易从广播开始后平均 2.5 秒就可以 99.9%被认为是确认的了。
但是，为了避免特殊情况，例如：软件出现 bug、网络拥塞，或一个恶意的 Citizen 制造了两个或更多的分叉，为了确保一个交易绝对是不可逆的，
一个交易需要等待 17 个块的确认。基于 HyperExchange 的软件配置，在一般情况下这需要平均 85 秒的时间。 默认情况下，所有的节点将认为当一轮出块的25个Citizen中有17个Citizen给出确认后这一区块就是不可逆的了，并且不管长度如何都不会切换到没有这一区块的分叉。