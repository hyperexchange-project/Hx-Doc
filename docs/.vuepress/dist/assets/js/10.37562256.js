(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{230:function(e,t,a){"use strict";a.r(t);var i=a(0),o=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"senator-replace-rule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#senator-replace-rule","aria-hidden":"true"}},[e._v("#")]),e._v(" Senator Replace Rule")]),e._v(" "),a("p",[e._v("As a part of the governance and operation of the HyperExchange chain, Citizens are involved in the replacement of Senators. The replacement process is as follows:")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"_5-fixed-senators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-fixed-senators","aria-hidden":"true"}},[e._v("#")]),e._v(" 5 fixed Senators")]),e._v(" "),a("p",[e._v("The 5 Senators are replaced by the process as following:")]),e._v(" "),a("ol",[a("li",[e._v("new Senator registers as an on-chain user(need spend 5HX)")]),e._v(" "),a("li",[e._v("register to be a senator(need spend 10000HX)")]),e._v(" "),a("li",[e._v("Any random existing Senator initiates a proposal to nominate the new Senator and the Senator to be replaced.")]),e._v(" "),a("li",[e._v("the rest 4 Senators confirm such a proposal")]),e._v(" "),a("li",[e._v("Senator  the new Senator becomes candidate Senator after 2/3 signatures confirmation")]),e._v(" "),a("li",[e._v("the new 15 Senators launch cross-chain wallet replacement process")]),e._v(" "),a("li",[e._v("New Senator officially becomes a Senator after wallet replacement process finished. The Senator who just has been replaced loses its identity.")]),e._v(" "),a("li",[e._v("New Senator begins to get mining reward and other reword, the Senator who just has been replaced becomes ordinary registered user.")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"_10-campaigns-senator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-campaigns-senator","aria-hidden":"true"}},[e._v("#")]),e._v(" 10 campaigns Senator")]),e._v(" "),a("p",[e._v("These 10 Senator replacement processes is more complicated, please find it as following:")]),e._v(" "),a("p",[e._v("1.A certain amount of hc is required as a security deposit before the election")]),e._v(" "),a("p",[e._v("2.new Senator registers and becomes on-chain user")]),e._v(" "),a("p",[e._v("3.Any Citizen initiates a replacement proposal, the process is as follows:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("during the period of such a proposal, there should be a normal state of Senator without any campaign")])]),e._v(" "),a("li",[a("p",[e._v("maximum nomination amount for Senators replacement is 3, in order to keep a secure system")])]),e._v(" "),a("li",[a("p",[e._v("After the proposal is initiated by any Citizen, the entire chain is in collection period, lasting 16,000 blocks (about 1 day), which is part of the election cycle.")])]),e._v(" "),a("li",[a("p",[e._v("All Citizen proposals are screened in the following order of priority (prior to the previous conditions), and finally only one proposal is confirmed")]),e._v(" "),a("pre",[a("code",[e._v(" i. The maximum amount of the campaign payment in the proposal is given priority\n\n Ii. The maximum amount citizen pledge assets is given priority\n\n Iii. Earlier proposal block confirmation is given priority\n\n Iv. Earlier Packing within the same block is given priority\n")])])])]),e._v(" "),a("p",[e._v("4.After the end of the proposal collection period, the sole proposal should be selected and voting period started.")]),e._v(" "),a("ul",[a("li",[e._v("This cycle lasts for 80,000 blocks (approximately 5 days)")]),e._v(" "),a("li",[e._v("All Citizen can initiate voting during this period")]),e._v(" "),a("li",[e._v("Take all Citizens pledged assets as total weight, proposal is passed when more than 2/3 weight of citizens confirm.")]),e._v(" "),a("li",[e._v("If the voting period does not meet the conditions of proposal, the proposal becomes invalid")])]),e._v(" "),a("p",[e._v("5.When the proposal for voting period is passed, it will enter replacement period.")]),e._v(" "),a("ul",[a("li",[e._v("During this period, the new Senator is required to submit cross-chain asset management information (ie public key, all cross-chain assets, and initiate asset transfer transactions)")]),e._v(" "),a("li",[e._v("This cycle lasts for 80,000 blocks (approximately 5 days)")]),e._v(" "),a("li",[e._v("If asset is  successfully transferred during this period, replacement of old Senator by new Senator is completed.")]),e._v(" "),a("li",[e._v("if unable to provide till the end of this period, proposal becomes invalid.")])]),e._v(" "),a("p",[e._v("6.the entire chain finishes election cycle after voting period, which means new replacement nomination can be initiated.")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"the-campaign-cycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-campaign-cycle","aria-hidden":"true"}},[e._v("#")]),e._v(" The campaign cycle")]),e._v(" "),a("p",[e._v("The campaign cycle starts since confirmation of the first on-chain proposal, finishes when new Senator completes asset wallet replacement and gets reward. Campaign cycle is a one-line process that cannot be paralleled, which ensuring that no excessive states will be generated, avoid causing unnecessary coding errors.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/senator-replace-rule.png",alt:"senator replace rule"}})]),e._v(" "),a("p",[e._v("The four states described in the process has been explained in details in the campaign process, please see summary as below:")]),e._v(" "),a("ol",[a("li",[e._v("No campaign status – no replace proposal is going on in this status, any proposal could be initiated in this status. HX chain should always be in this status apart from election cycle.")]),e._v(" "),a("li",[e._v("Proposal Collection – When HX chain is in “no campaign” status and any proposal initiated by Citizen is confirmed in blocks, the block has entered into the proposal collection status, which lasts 16,000 blocks and ends immediately after 16,000 blocks.")]),e._v(" "),a("li",[e._v("Voting Collection –Proposal collection status is initiated by a proposal, in which case at least one (and only one) proposal will enter voting collection phase. All Citizens have to vote on this proposal in such status. This status lasts for 80,000 blocks and ends immediately after 80,000 blocks.")]),e._v(" "),a("li",[e._v('Senator replacement status – it will be Senator Replacement stage if there is enough Citizens to vote (2/3) in voting collection status, otherwise it will return directly to “no campaign” status. In such status, all Senators initiate asset multi-sign address change transaction and enter “no campaign” status after all transactions have been completed. At this point, the new Senator replaces the old Senator and begins to receive reward. This status lasts for 80,000 blocks and ends immediately after 80,000 blocks. It enters "no campaign" status, proposal becomes invalid, original Senators remain unchanged.')])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"cost-of-proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cost-of-proposal","aria-hidden":"true"}},[e._v("#")]),e._v(" cost of proposal")]),e._v(" "),a("p",[e._v("Proposal can be initiated by any Citizen, multiple proposals may be initiated during proposal collection status. Here is a description of the cost of proposal:")]),e._v(" "),a("ol",[a("li",[e._v("Every proposal has a cost, that is, the initiation of proposal requires a certain fee, minimum 100HX, no upper limit.")]),e._v(" "),a("li",[e._v("Proposal fee can be increased, but each increase must be an integer multiple of 100HX.")]),e._v(" "),a("li",[e._v("This fee is not charged by anyone but will be destroyed immediately. That is to say, as long as a proposal is packaged into a block, the fee in the proposal has been destroyed.")]),e._v(" "),a("li",[e._v("Even a proposal is not confirmed as a voting proposal by the end of the proposal collection period, fee will not be returned.\nThe reason of having cost of proposal is to prevent initiating the proposal endlessly by malicious node. A normal node does not need to pay too much fee when initiating a proposal. Even is not selected in one election, it can be used for the next time election.\nMeanwhile, after proposal confirmation, voting phase remains. Even if malicious node wins the right to confirm the proposal, if there is not enough Citizen voting support, it will still fail to be elected with unnecessary consumption of HX.")])]),e._v(" "),a("hr")])},[],!1,null,null,null);t.default=o.exports}}]);