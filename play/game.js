var Je={"orchard.dsl":`player 阿团
actor 阿棠 = scene("flower-clasp") at 果树旁小路 facing=26
actor 小羽 = scene("child") at 林间球场对面 facing=0
actor 草帽 = scene("angler") at 码头钓位 facing=65
on new_game:
    shot 0 player width=9 guide=off
    shot 1.1 player width=9 guide=off
    shot 2.8 player+阿棠 width=16 guide=on thought="那边……阿棠在等我。"
    shot 3.8 player+阿棠 width=16 guide=on
    shot 5.1 player width=16 guide=on
tutorial move at 门前路标 radius=.8 "按 WASD 移动"
tutorial jump at 糖树路标 radius=.95 "按住空格蓄力，松开起跳"
guidance icon=star pulse=1.8 edge=arrow reach=4.5
wait_thought 阿棠 "阿棠停下来了。她在等我呢。"
prompt 阿棠 "你在看什么呀？"
prompt 草帽 "今天钓到鱼了吗？"
item candy 棒棒糖 "枝头一圈糖纹，掌心一缕甜香。"
item carrot 萝卜 "青叶沾水珠，泥间露橙红。"
item apple 苹果 "枝头一点果红，掌心一缕秋香。"
on interact 阿棠 id=pickCandy at 果树旁小路:
    say 阿团 "早呀，需要我搭把手吗？"
    say 阿棠 face=smile "阿团！帮我摘一下这个？我跳起来也够不着。" reach candy
    say 阿团 "交给我！"
on interact 阿棠 id=apple after=pickCandy at 果树旁小路:
    guide item candy
    need candy 2 "站到糖底下，往上蹦一下就够着了。"
    say 阿团 face=smile "接着！" toss candy to 阿棠
    say 阿棠 "哎！……这回接住了。"
    say 阿团 "这回？"
    say 阿棠 "你忘啦？上次你扔得不准，苹果差点滚到沟里了。"
    say 阿团 face=puzzled "苹...果？"
    scenery 1
    walk 果树西侧路面 屋前岔路 菜园右篱外
on interact 阿棠 id=gardenIntro after=apple at 菜园右篱外:
    say 阿棠 "阿团，菜园里的胡萝卜记得收呀。"
on carrot_harvest 阿团 id=garden after=gardenIntro at 菜园收获处:
    guide place 菜园入口
    remind 阿棠 harvest "把这茬胡萝卜都收了吧，种子留着，正好够种下一畦。"
    remind 阿棠 sow "种子留好了吧？从背包里选胡萝卜种子，把空着的地方都种上吧。"
    remind 阿棠 water "都种好了。拿上水管，哪块土还干着，就给哪块浇点水。"
    remind 阿棠 grow "水浇好了，让它长一会儿。等泥面上露出橙色的肩，就能拔了。"
    remind 阿棠 pull "你种的那茬长好了！去拔一根看看，我在这儿等你。"
    remind 阿棠 seeds "胡萝卜种子用完啦？去林子里的草丛找找，带些回来再种。"
    remind 阿棠 space "菜畦都占满啦。先腾出一块，再种胡萝卜吧。"
    say 阿团 "萝卜应该是半截在土里的才对！"
on interact 阿棠 id=toPond after=garden at 菜园右篱外:
    say 阿团 "收好了！"
    say 阿棠 "走吧，草帽还在池边等咱们呢。"
    walk 屋前岔路 池西路口 池边芦苇
on interact 阿棠 id=pond after=toPond at 池边芦苇:
    say 阿团 "好大好漂亮的鱼！"
    say 阿棠 face=smile "果然还是最喜欢鱼呢"
    say 阿棠 "你之前跟草帽两个钓了一天，一条都没钓到，直接跳进水里抓，还记得吗？"
    say 阿团 "水里......."
    scenery 2
on interact 草帽 id=angle after=pond at 码头钓位:
    say 阿团 "我来钓鱼了！"
    fish
on interact 阿棠 id=toCourt after=angle at 池边芦苇:
    say 阿团 "接下来去哪儿？"
    say 阿棠 "走吧，咱们去陪小羽打会儿球。"
    walk 池西路口 屋前岔路 林间小径 球场近端 场边等候处
on interact 小羽 id=courtInvite after=toCourt at 林间球场对面:
    say 小羽 face=smile "阿团，来顶球呀！我站这头，你站网那边的圈里。"
    say 小羽 "看球要落在哪儿，跑进去，按住空格就能顶回来。"
on match_end 阿棠 id=courtMemory after=courtInvite at 场边等候处:
    say 阿棠 "小羽，作业写完了没？别整天顾着玩呀。" to 小羽
    say 小羽 face=smile "爷爷跟我说过，要多出来活动，多看看青草地，对眼睛好！" to 阿棠
    say 小羽 "爷爷也没意见，是吧？" to 阿团 observers=listener
    say 阿团 face=puzzled "草地是……绿色的。" to 小羽
    scenery 3
    walk 球场近端 林间小径 屋前岔路 苹果屋门前
    on_arrival "我去树那边歇会儿。你想去哪儿逛逛，就去吧。"
    return_home 屋前岔路 果树西侧路面
chat 小羽 after=courtInvite ask="还玩吗？" "来呀！" "来呀，我等你发球。"
overhear pond 草帽 阿棠 "鱼……在池上飞……"
chat 阿棠 after=apple ask="我的领巾歪了吗？" "……一点儿……别动。" "有一点儿。别动，我给你扶正。"
chat 阿棠 after=garden pool=after.apple ask="你那颗糖吃了吗？" "……留着……" "还在兜里呢。我吃糖慢，一颗能含好久。"
chat 阿棠 after=toCourt pool=after.garden ask="你在哼什么？" "……哼着玩儿的……" "哼着玩儿的。你接一句？我老是在这儿忘词。"
chat 草帽 catch=1 "鱼……在池上飞……" "嗝……鱼要是在池上飞，那就好抓了。"
chat 草帽 catch=2 pool=started "......几十条鱼....." "这几十条鱼怎么一条都不咬钩！"
chat 草帽 catch=3 pool=catch2 "......十年....." "我们第一次钓鱼是十年前了，那时候...."
release 1 "「嗝……鱼要是在池上飞，那就好抓了。」草帽笑了。「那天酒喝多了，我还真举着抄网，等了半天。」"
release 2 "「停停停！！你钓到我的帽子了！」"
specimen 鳑鲏 "那条粉鱼太罕见了，看看我们谁能把它钓上来...." "粉鳞薄似花，轻游空网下。"
specimen 白条 "看那道银线，一下在左，一下在右。它要拐弯了。" "水下一梭银，钩上一顶草帽。"
specimen 珍珠金鱼 "我刚刚看到那条你一直心念的金鱼出没了，在那一块！" "金鳞缀白珠，双尾拨清波。"`,"memories.dsl":`memory 花树下的岔路
cast 阿团 屋前岔路
cast 阿棠 果树西侧路面
shot 阿棠
meet 阿棠
say 阿棠 puzzled 我头一回来。这条路走到头，是不是有棵苹果树？
say 阿团 smile 正好顺路，咱俩一块儿走吧！
walk 阿棠 果树旁小路
meet 阿棠
say 阿棠 smile 到啦。你刚才说顺路，那你要去哪儿呀？
say 阿团 puzzled 嗯……我家在刚才那个岔口。
say 阿棠 smile 那明天你还顺路吗？
say 阿团 smile 顺路！我还在岔口等你。
end
memory 栈桥空着的那一边
cast 阿团 池西路口
cast 草帽 池边芦苇
shot 草帽
meet 草帽
say 阿团 talk 请问，桥上那边有人吗？
say 草帽 smile 空着呢！我一个人哪用得着这么宽？来呀。
walk 草帽 码头钓位
meet 草帽
say 阿团 puzzled 这么好的位置，真给我呀？
say 草帽 smile 你用左手，我用右手。你站那边，咱俩甩竿就碰不着。
say 阿团 surprised 这你都留意到了！那明天我还站这儿？
say 草帽 smile 来呀！你要是晚到，我把帽子搁这儿给你占着。
end`};var sc={主屋与门前小路:{苹果屋门前:[-5,0,-3],门前路标:[-5,0,-1.75],屋前岔路:[-5,0,0],门左花丛旁:[-6.8,0,-2.1],门右花丛旁:[-2.8,0,-1.9],屋西墙外:[-9.6,0,-6.8],屋东墙外:[-.6,0,-6.8]},果树与池西小径:{果树西侧路面:[-.8,0,0],果树西侧树荫下:[.05,0,-2.48],果树北侧树荫下:[1.35,0,-3.95],果树旁小路:[4,0,-2.7],果树南侧路沿:[1.35,0,-.85],池西路口:[3.8,0,0],池西小径南口:[2.8,0,1.6]},菜园:{菜园来客站位:[-10.55,0,.85],菜园右篱外:[-4.75,0,.75],菜园入口:[-7.8,0,1.35],菜园田间过道起点:[-7.8,0,3],菜园田间过道中段:[-7.8,0,5.4],菜园田间过道尽头:[-7.8,0,7.95],菜园西篱外:[-12.65,0,4.3],菜园东篱外:[-2.9,0,5.5]},池塘与栈桥:{池边芦苇:[4.15,.27,5.35],木桥岸边:[2.8,0,4],栈桥中央:[5.7,.27,4],玩家钓位:[7.2,.27,4.98],码头钓位:[7.2,.27,3.02],芦苇丛西边:[3.5,0,7.5],池南岸西头:[6.75,0,11.25],池北岸草径:[11,0,-1.8]},林间小径:{进林岔口:[-12,0,0],小径浅弯:[-16,0,-1],林间小径:[-19,0,-3],林道北折处:[-21,0,-6],通往球场的林道:[-21,0,-9],林东草丛旁:[-14,0,-1],林中草丛南边:[-18,0,2.4],西林空地:[-25,0,-.9],深林调查点东侧:[-37,0,4.5]},林间球场:{球场近端:[-21,0,-10.5],近端底线内:[-21,0,-12.8],近侧发球位:[-21,0,-14.4],近场西边线内:[-24,0,-15],近场东边线内:[-18,0,-15],球网近侧:[-21,0,-17.3],球网远侧:[-21,0,-20.7],远侧发球位:[-21,0,-23.6],远端底线内:[-21,0,-25.5],场边等候处:[-15.85,0,-23.2],球网西侧通道:[-26.6,0,-19]}};var Tr=Object.assign(Object.create(null),...Object.values(sc));function ac(r,e,t,n){let[i,,s]=Tr[e],[a,,o]=Tr[n],l=c=>c==="阿团"?1:.84;return Math.hypot(i-a,s-o)<.92*(l(r)+l(t))}var ka={阿团:"traveler",阿棠:"flower-clasp",草帽:"angler",小羽:"child"};function ci(r){let e=new Map,t=[],n=new Map,i="",s=!1,a=null,o=null;for(let l of r.trim().split(/\r?\n/)){let c=l.trim();if(!c||c.startsWith("#"))continue;let[h,u,p,...d]=c.split(/\s+/),v=y=>e.has(y),g=y=>Object.hasOwn(Tr,y),f=v(u)&&u!=="阿团";if(!i&&h==="memory"&&u&&!p&&u.length<=24){i=u;continue}if(!i||s)throw Error("回忆首尾不完整");if(h==="cast"&&!t.length&&Object.hasOwn(ka,u)&&g(p)&&!e.has(u)&&!d.length){if([...e].some(([y,m])=>ac(u,p,y,m)))throw Error("出场站位过近："+c);e.set(u,p),n.set(u,p);continue}if(!e.has("阿团")||e.size<2)throw Error("缺少出场角色");if(!t.length&&h!=="shot")throw Error("回忆需要一个开场镜头");if(h==="shot"&&v(u)&&!p)t.push({op:h,a:u});else if(h==="meet"&&f&&!p&&(!o||o===u))t.push({op:h,a:u}),a=u,o=null;else if(h==="walk"&&f&&a===u&&g(p)&&!d.length){if([...n].some(([y,m])=>y!==u&&y!=="阿团"&&ac(u,p,y,m)))throw Error("目的地已被角色占用："+c);t.push({op:h,a:u,b:p}),n.set(u,p),o=u,a=null}else if(h==="say"&&a&&(u==="阿团"||u===a)&&["talk","smile","puzzled","surprised"].includes(p)&&d.length&&d.join(" ").length<=80)t.push({op:h,a:u,b:p,text:d.join(" ")});else if(h==="end"&&!u&&a&&t.at(-1)?.op==="say")s=!0;else throw Error("回忆指令无法演出："+c.slice(0,60))}if(!s||t.length>48||!t.some(l=>l.op==="meet"))throw Error("缺少可完成的回忆任务");return{title:i,cast:e,steps:t,source:r.trim()}}async function as(r){if(typeof Je<"u")return Je[r];let e=await fetch(new URL(r,import.meta.url),{cache:"no-cache"});if(!e.ok)throw Error("剧情读取失败 "+e.status);return e.text()}async function oc({saved:r,launch:e}){let t=(await as("memories.dsl")).replace(/^\s*#.*$/gm,"").trim().split(/\n(?=memory )/).map(ci),n=document.querySelector("#memory-window"),i=n.querySelector("h2"),s=n.querySelector("p"),a=n.querySelector("nav"),o=document.createElement("div");o.className="memory-glimmer",o.hidden=!0,o.setAttribute("aria-hidden","true");let l=document.createElement("div");l.className="memory-bloom",o.append(l);for(let w=0;w<5;w++){let R=document.createElement("i");R.style.setProperty("--angle",w*72+"deg"),l.append(R)}for(let w=0;w<18;w++){let R=document.createElement("b"),O=w*2.4;R.style.setProperty("--x",Math.cos(O)*(65+w%4*14)+"px"),R.style.setProperty("--y",Math.sin(O)*(30+w%3*9)+"px"),R.style.setProperty("--delay",w%6*.09+"s"),o.append(R)}i.after(o),s.setAttribute("aria-live","polite");let c=null,h=!1,u=null;function p(w,R){u=null,o.hidden=!0,a.replaceChildren(),i.textContent=w,s.textContent=R,n.open||n.showModal()}function d(w,R){let O=document.createElement("button");return O.textContent=w,O.onclick=R,a.append(O),O}function v(){n.close()}n.querySelector(".book-close").onclick=v;function g(){return c?.list??r?.memoryAlbum??[]}let f=location.hostname==="localhost"||location.hostname==="127.0.0.1",y=document.documentElement.dataset.memoryEndpoint??(f?"http://127.0.0.1:8786/memory":"");function m(w,R){c||e(),!(!c||c.trial||c.busy())&&(v(),c.begin(w,R))}function x(){let w=g();if(c?.trial){p("回忆目录","回到农庄后，可以在这里重温收录的往事。");return}p("回忆目录",w.length?"选择一段往事重温。":"收录过的回忆，会留在这本手记里。");for(let R of w){let O=ci(R);d(O.title,()=>m(O,!0))}}document.querySelector("#open-memories").onclick=x;function M(){p("拾忆瓶","记忆点正在凝成一段往事……"),u="exploring",o.hidden=!1}async function E(){if(!(h||c.pending)){h=!0,M();try{let w=t[g().length],[R]=await Promise.all([w??_(),new Promise(O=>setTimeout(O,2400))]);c.remember(R.source),n.open&&u==="exploring"&&S(R)}catch{n.open&&u==="exploring"&&(p("拾忆瓶","这次未能展开回忆，记忆点已保留。"),d("重新探索",E))}finally{h=!1}}}async function _(){let w=await fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previous:g().slice(-60).map(O=>{let{title:L,steps:U}=ci(O),N=U.filter(k=>k.op==="say").map(k=>k.a+"："+k.text).join(" ").slice(0,200);return{title:L,excerpt:N}})}),signal:AbortSignal.timeout(205e3)});if(!w.ok)throw Error();let R=ci((await w.json()).script);if(g().some(O=>ci(O).title===R.title))throw Error();return R}function S(w){p("拾忆瓶","《"+w.title+"》"),d("进入回忆",()=>m(w,!1)).focus()}function A(){if(!c)return;let w="与农庄里的伙伴和草木互动，可以积攒记忆点。攒够 100 点，就能探索一段回忆。";if(!c.unlocked()||c.trial){p("拾忆瓶",w+`
请先完成主线任务。`);return}if(c.busy()){p("拾忆瓶","请先结束当前活动。");return}if(c.pending){S(ci(c.pending));return}if(h){M();return}if(!y&&g().length>=t.length){p("拾忆瓶","这次试玩的两段往事都收进手记了。翻开回忆目录，随时可以重温。"),d("翻开回忆目录",x);return}if(c.points()<100){p("拾忆瓶",w+`
当前记忆点 `+c.points()+" / 100");return}p("拾忆瓶","记忆点已满，可以探索一段回忆了。"),d("探索回忆",E)}return{jar:A,bind(w){c=w}}}var zh=1,Sl=2,zn=3,$n=0,qt=1,ur=2;var mi=100;var wo=204,To=205;var Fh=0,id=1,rd=2,Jn=0,sd=1,ad=2,od=3,ld=4,cd=5,hd=6;var Bh=300,Qi=301,er=302,Eo=303,Ao=304,da=306,Co=1e3,Fn=1001,Ro=1002,Xt=1003,lc=1004;var Ga=1005;var _n=1006,ud=1007;var Fs=1008;var yi=1009;var wl=1012,kh=1013,Yn=1014,Zn=1015,Br=1016,Gh=1017,Vh=1018,_i=1020;var En=1023;var Mi=1026,tr=1027;var Hh=1029;var Wh=1031,Xh=1033,Va=33776,Ha=33777,Wa=33778,Xa=33779,cc=35840,hc=35841,uc=35842,dc=35843,jh=36196,pc=37492,fc=37496,mc=37808,gc=37809,vc=37810,xc=37811,yc=37812,_c=37813,Mc=37814,bc=37815,Sc=37816,wc=37817,Tc=37818,Ec=37819,Ac=37820,Cc=37821,ja=36492,Rc=36494,Pc=36495;var Lc=36284,Ic=36285,Uc=36286;var Bs=2300,ks=2301,qa=2302,Dc=2400,Nc=2401,Oc=2402;var qh=3e3,bi=3001;var An="",yt="srgb",Bn="srgb-linear",Tl="display-p3",pa="display-p3-linear",Gs="linear",xt="srgb",Vs="rec709",Hs="p3";var Li=7680;var zc=35044,Yh=35048;var Fc="300 es",Po=1035,nr=2e3,Ws=2001,Qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=1234567,Ji=Math.PI/180,kr=180/Math.PI;function Pi(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(kt[255&r]+kt[r>>8&255]+kt[r>>16&255]+kt[r>>24&255]+"-"+kt[255&e]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[63&t|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[255&n]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Nt(r,e,t){return Math.max(e,Math.min(t,r))}function Lo(r,e){return(r%e+e)%e}function Ur(r,e,t){return(1-t)*r+t*e}function Io(r){return(r&r-1)==0&&r!==0}function Xs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Yi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ht(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Ce={DEG2RAD:Ji,RAD2DEG:kr,generateUUID:Pi,clamp:Nt,euclideanModulo:Lo,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:Ur,damp:function(r,e,t,n){return Ur(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(Lo(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(Bc=r);let e=Bc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Ji},radToDeg:function(r){return r*kr},isPowerOfTwo:Io,ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:Xs,setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),p=a((e-n)/2),d=s((n-e)/2),v=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*p,o*c);break;case"YZY":r.set(l*p,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*p,o*h,o*c);break;case"XZX":r.set(o*h,l*v,l*d,o*c);break;case"YXY":r.set(l*d,o*h,l*v,o*c);break;case"ZYZ":r.set(l*v,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:Ht,denormalize:Yi},ye=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],d=n[5],v=n[8],g=i[0],f=i[3],y=i[6],m=i[1],x=i[4],M=i[7],E=i[2],_=i[5],S=i[8];return s[0]=a*g+o*m+l*E,s[3]=a*f+o*x+l*_,s[6]=a*y+o*M+l*S,s[1]=c*g+h*m+u*E,s[4]=c*f+h*x+u*_,s[7]=c*y+h*M+u*S,s[2]=p*g+d*m+v*E,s[5]=p*f+d*x+v*_,s[8]=p*y+d*M+v*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,p=o*l-h*s,d=c*s-a*l,v=t*u+n*p+i*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/v;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=p*g,e[4]=(h*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ya.makeScale(e,t)),this}rotate(e){return this.premultiply(Ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ya=new Qe;function Zh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function js(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dd(){let r=js("canvas");return r.style.display="block",r}var kc={};function Dr(r){r in kc||(kc[r]=!0,console.warn(r))}var Gc=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vc=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),os={[Bn]:{transfer:Gs,primaries:Vs,toReference:r=>r,fromReference:r=>r},[yt]:{transfer:xt,primaries:Vs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[pa]:{transfer:Gs,primaries:Hs,toReference:r=>r.applyMatrix3(Vc),fromReference:r=>r.applyMatrix3(Gc)},[Tl]:{transfer:xt,primaries:Hs,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Vc),fromReference:r=>r.applyMatrix3(Gc).convertLinearToSRGB()}},pd=new Set([Bn,pa]),ut={enabled:!0,_workingColorSpace:Bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!pd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=os[e].toReference;return(0,os[t].fromReference)(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return os[r].primaries},getTransfer:function(r){return r===An?Gs:os[r].transfer}};function Ki(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Za(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Ii,qs=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=js("canvas")),Ii.width=e.width,Ii.height=e.height;let n=Ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=js("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*Ki(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Ki(t[n]/255)):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fd=0,Ys=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Pi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ja(i[a].image)):s.push(Ja(i[a]))}else s=Ja(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Ja(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qs.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var md=0,Mn=class r extends Qn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Pi(),this.name="",this.source=new Ys(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===bi?yt:An),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Co:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Co:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yt?bi:qh}set encoding(e){Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===bi?yt:An}};Mn.DEFAULT_IMAGE=null,Mn.DEFAULT_MAPPING=Bh,Mn.DEFAULT_ANISOTROPY=1;var Rt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],d=l[5],v=l[9],g=l[2],f=l[6],y=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-g)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(v+f)<.1&&Math.abs(c+d+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,M=(d+1)/2,E=(y+1)/2,_=(h+p)/4,S=(u+g)/4,A=(v+f)/4;return x>M&&x>E?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=_/n,s=S/n):M>E?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=_/i,s=A/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=S/s,i=A/s),this.set(n,i,s,t),this}let m=Math.sqrt((f-v)*(f-v)+(u-g)*(u-g)+(p-h)*(p-h));return Math.abs(m)<.001&&(m=1),this.x=(f-v)/m,this.y=(u-g)/m,this.z=(p-h)/m,this.w=Math.acos((c+d+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Uo=class extends Qn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Dr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===bi?yt:An),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Mn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ys(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends Uo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zs=class extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Do=class extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],p=s[a+0],d=s[a+1],v=s[a+2],g=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=p,e[t+1]=d,e[t+2]=v,void(e[t+3]=g);if(u!==g||l!==p||c!==d||h!==v){let f=1-o,y=l*p+c*d+h*v+u*g,m=y>=0?1:-1,x=1-y*y;if(x>Number.EPSILON){let E=Math.sqrt(x),_=Math.atan2(E,y*m);f=Math.sin(f*_)/E,o=Math.sin(o*_)/E}let M=o*m;if(l=l*f+p*M,c=c*f+d*M,h=h*f+v*M,u=u*f+g*M,f===1-o){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],p=s[a+1],d=s[a+2],v=s[a+3];return e[t]=o*v+h*u+l*d-c*p,e[t+1]=l*v+h*p+c*u-o*d,e[t+2]=c*v+h*d+o*p-l*u,e[t+3]=h*v-o*u-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),p=l(n/2),d=l(i/2),v=l(s/2);switch(a){case"XYZ":this._x=p*h*u+c*d*v,this._y=c*d*u-p*h*v,this._z=c*h*v+p*d*u,this._w=c*h*u-p*d*v;break;case"YXZ":this._x=p*h*u+c*d*v,this._y=c*d*u-p*h*v,this._z=c*h*v-p*d*u,this._w=c*h*u+p*d*v;break;case"ZXY":this._x=p*h*u-c*d*v,this._y=c*d*u+p*h*v,this._z=c*h*v+p*d*u,this._w=c*h*u-p*d*v;break;case"ZYX":this._x=p*h*u-c*d*v,this._y=c*d*u+p*h*v,this._z=c*h*v-p*d*u,this._w=c*h*u+p*d*v;break;case"YZX":this._x=p*h*u+c*d*v,this._y=c*d*u+p*h*v,this._z=c*h*v-p*d*u,this._w=c*h*u-p*d*v;break;case"XZY":this._x=p*h*u-c*d*v,this._y=c*d*u-p*h*v,this._z=c*h*v+p*d*u,this._w=c*h*u+p*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=n+o+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=i*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ka=new P,Hc=new Yt,Qt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(s,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(e.matrixWorld),this.union(ls)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),cs.subVectors(this.max,Er),Ui.subVectors(e.a,Er),Di.subVectors(e.b,Er),Ni.subVectors(e.c,Er),Hn.subVectors(Di,Ui),Wn.subVectors(Ni,Di),hi.subVectors(Ui,Ni);let t=[0,-Hn.z,Hn.y,0,-Wn.z,Wn.y,0,-hi.z,hi.y,Hn.z,0,-Hn.x,Wn.z,0,-Wn.x,hi.z,0,-hi.x,-Hn.y,Hn.x,0,-Wn.y,Wn.x,0,-hi.y,hi.x,0];return!!$a(t,Ui,Di,Ni,cs)&&(t=[1,0,0,0,1,0,0,0,1],!!$a(t,Ui,Di,Ni,cs)&&(hs.crossVectors(Hn,Wn),t=[hs.x,hs.y,hs.z],$a(t,Ui,Di,Ni,cs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(vn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},In=[new P,new P,new P,new P,new P,new P,new P,new P],vn=new P,ls=new Qt,Ui=new P,Di=new P,Ni=new P,Hn=new P,Wn=new P,hi=new P,Er=new P,cs=new P,hs=new P,ui=new P;function $a(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ui.fromArray(r,s);let o=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var gd=new Qt,Ar=new P,Qa=new P,en=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);let t=Ar.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Ar,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(Qa)),this.expandByPoint(Ar.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Un=new P,eo=new P,us=new P,Xn=new P,to=new P,ds=new P,no=new P,Si=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){eo.copy(e).add(t).multiplyScalar(.5),us.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(eo);let s=.5*e.distanceTo(t),a=-this.direction.dot(us),o=Xn.dot(this.direction),l=-Xn.dot(us),c=Xn.lengthSq(),h=Math.abs(1-a*a),u,p,d,v;if(h>0)if(u=a*l-o,p=a*o-l,v=s*h,u>=0)if(p>=-v)if(p<=v){let g=1/h;u*=g,p*=g,d=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;else p=-s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;else p<=-v?(u=Math.max(0,-(-a*s+o)),p=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+p*(p+2*l)+c):p<=v?(u=0,p=Math.min(Math.max(-s,-l),s),d=p*(p+2*l)+c):(u=Math.max(0,-(a*s+o)),p=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+p*(p+2*l)+c);else p=a>0?-s:s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(eo).addScaledVector(us,p),d}intersectSphere(e,t){Un.subVectors(e.center,this.origin);let n=Un.dot(this.direction),i=Un.dot(Un)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,i=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,i=(e.min.x-p.x)*c),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,i,s){to.subVectors(t,e),ds.subVectors(n,e),no.crossVectors(to,ds);let a,o=this.direction.dot(no);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Xn.subVectors(this.origin,e);let l=a*this.direction.dot(ds.crossVectors(Xn,ds));if(l<0)return null;let c=a*this.direction.dot(to.cross(Xn));if(c<0||l+c>o)return null;let h=-a*Xn.dot(no);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,p,d,v,g,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,p,d,v,g,f)}set(e,t,n,i,s,a,o,l,c,h,u,p,d,v,g,f){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=u,y[14]=p,y[3]=d,y[7]=v,y[11]=g,y[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Oi.setFromMatrixColumn(e,0).length(),s=1/Oi.setFromMatrixColumn(e,1).length(),a=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let p=a*h,d=a*u,v=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+v*c,t[5]=p-g*c,t[9]=-o*l,t[2]=g-p*c,t[6]=v+d*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*h,d=l*u,v=c*h,g=c*u;t[0]=p+g*o,t[4]=v*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-v,t[6]=g+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*h,d=l*u,v=c*h,g=c*u;t[0]=p-g*o,t[4]=-a*u,t[8]=v+d*o,t[1]=d+v*o,t[5]=a*h,t[9]=g-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*h,d=a*u,v=o*h,g=o*u;t[0]=l*h,t[4]=v*c-d,t[8]=p*c+g,t[1]=l*u,t[5]=g*c+p,t[9]=d*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,d=a*c,v=o*l,g=o*c;t[0]=l*h,t[4]=g-p*u,t[8]=v*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+v,t[10]=p-g*u}else if(e.order==="XZY"){let p=a*l,d=a*c,v=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+g,t[5]=a*h,t[9]=d*u-v,t[2]=v*u-d,t[6]=o*h,t[10]=g*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vd,e,xd)}lookAt(e,t,n){let i=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),jn.crossVectors(n,Zt),jn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),jn.crossVectors(n,Zt)),jn.normalize(),ps.crossVectors(Zt,jn),i[0]=jn.x,i[4]=ps.x,i[8]=Zt.x,i[1]=jn.y,i[5]=ps.y,i[9]=Zt.y,i[2]=jn.z,i[6]=ps.z,i[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],d=n[13],v=n[2],g=n[6],f=n[10],y=n[14],m=n[3],x=n[7],M=n[11],E=n[15],_=i[0],S=i[4],A=i[8],w=i[12],R=i[1],O=i[5],L=i[9],U=i[13],N=i[2],k=i[6],Q=i[10],Y=i[14],ee=i[3],K=i[7],V=i[11],j=i[15];return s[0]=a*_+o*R+l*N+c*ee,s[4]=a*S+o*O+l*k+c*K,s[8]=a*A+o*L+l*Q+c*V,s[12]=a*w+o*U+l*Y+c*j,s[1]=h*_+u*R+p*N+d*ee,s[5]=h*S+u*O+p*k+d*K,s[9]=h*A+u*L+p*Q+d*V,s[13]=h*w+u*U+p*Y+d*j,s[2]=v*_+g*R+f*N+y*ee,s[6]=v*S+g*O+f*k+y*K,s[10]=v*A+g*L+f*Q+y*V,s[14]=v*w+g*U+f*Y+y*j,s[3]=m*_+x*R+M*N+E*ee,s[7]=m*S+x*O+M*k+E*K,s[11]=m*A+x*L+M*Q+E*V,s[15]=m*w+x*U+M*Y+E*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],d=e[14];return e[3]*(+s*l*u-i*c*u-s*o*p+n*c*p+i*o*d-n*l*d)+e[7]*(+t*l*d-t*c*p+s*a*p-i*a*d+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*d-s*a*u+n*a*d+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*p+i*a*u-n*a*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],d=e[11],v=e[12],g=e[13],f=e[14],y=e[15],m=u*f*c-g*p*c+g*l*d-o*f*d-u*l*y+o*p*y,x=v*p*c-h*f*c-v*l*d+a*f*d+h*l*y-a*p*y,M=h*g*c-v*u*c+v*o*d-a*g*d-h*o*y+a*u*y,E=v*u*l-h*g*l-v*o*p+a*g*p+h*o*f-a*u*f,_=t*m+n*x+i*M+s*E;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/_;return e[0]=m*S,e[1]=(g*p*s-u*f*s-g*i*d+n*f*d+u*i*y-n*p*y)*S,e[2]=(o*f*s-g*l*s+g*i*c-n*f*c-o*i*y+n*l*y)*S,e[3]=(u*l*s-o*p*s-u*i*c+n*p*c+o*i*d-n*l*d)*S,e[4]=x*S,e[5]=(h*f*s-v*p*s+v*i*d-t*f*d-h*i*y+t*p*y)*S,e[6]=(v*l*s-a*f*s-v*i*c+t*f*c+a*i*y-t*l*y)*S,e[7]=(a*p*s-h*l*s+h*i*c-t*p*c-a*i*d+t*l*d)*S,e[8]=M*S,e[9]=(v*u*s-h*g*s-v*n*d+t*g*d+h*n*y-t*u*y)*S,e[10]=(a*g*s-v*o*s+v*n*c-t*g*c-a*n*y+t*o*y)*S,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*d-t*o*d)*S,e[12]=E*S,e[13]=(h*g*i-v*u*i+v*n*p-t*g*p-h*n*f+t*u*f)*S,e[14]=(v*o*i-a*g*i-v*n*l+t*g*l+a*n*f-t*o*f)*S,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*p+t*o*p)*S,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,p=s*c,d=s*h,v=s*u,g=a*h,f=a*u,y=o*u,m=l*c,x=l*h,M=l*u,E=n.x,_=n.y,S=n.z;return i[0]=(1-(g+y))*E,i[1]=(d+M)*E,i[2]=(v-x)*E,i[3]=0,i[4]=(d-M)*_,i[5]=(1-(p+y))*_,i[6]=(f+m)*_,i[7]=0,i[8]=(v+x)*S,i[9]=(f-m)*S,i[10]=(1-(p+g))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Oi.set(i[0],i[1],i[2]).length(),a=Oi.set(i[4],i[5],i[6]).length(),o=Oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],xn.copy(this);let l=1/s,c=1/a,h=1/o;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=c,xn.elements[5]*=c,xn.elements[6]*=c,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),p=(n+i)/(n-i),d,v;if(o===nr)d=-(a+s)/(a-s),v=-2*a*s/(a-s);else{if(o!==Ws)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);d=-a/(a-s),v=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),p=(t+e)*c,d=(n+i)*h,v,g;if(o===nr)v=(a+s)*u,g=-2*u;else{if(o!==Ws)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);v=s*u,g=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Oi=new P,xn=new Ze,vd=new P(0,0,0),xd=new P(1,1,1),jn=new P,ps=new P,Zt=new P,Wc=new Ze,Xc=new Yt,ir=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],p=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ir.DEFAULT_ORDER="XYZ";var Gr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},yd=0,jc=new P,zi=new Yt,Dn=new Ze,fs=new P,Cr=new P,_d=new P,Md=new Yt,qc=new P(1,0,0),Yc=new P(0,1,0),Zc=new P(0,0,1),bd={type:"added"},Sd={type:"removed"},ft=class r extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new P,t=new ir,n=new Yt,i=new P(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Qe}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return jc.copy(e).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fs.copy(e):fs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Cr,fs,this.up):Dn.lookAt(fs,Cr,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),zi.setFromRotationMatrix(Dn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,_d),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),d=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};ft.DEFAULT_UP=new P(0,1,0),ft.DEFAULT_MATRIX_AUTO_UPDATE=!0,ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=new P,Nn=new P,io=new P,On=new P,Fi=new P,Bi=new P,Jc=new P,ro=new P,so=new P,ao=new P,ms=!1,xi=class r{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yn.subVectors(e,t),i.cross(yn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){yn.subVectors(i,t),Nn.subVectors(n,t),io.subVectors(e,t);let a=yn.dot(yn),o=yn.dot(Nn),l=yn.dot(io),c=Nn.dot(Nn),h=Nn.dot(io),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let p=1/u,d=(c*l-o*h)*p,v=(a*h-o*l)*p;return s.set(1-d-v,v,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,On)!==null&&On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(e,t,n,i,s,a,o,l){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static isFrontFacing(e,t,n,i){return yn.subVectors(n,t),Nn.subVectors(e,t),yn.cross(Nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),.5*yn.cross(Nn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Fi.subVectors(i,n),Bi.subVectors(s,n),ro.subVectors(e,n);let l=Fi.dot(ro),c=Bi.dot(ro);if(l<=0&&c<=0)return t.copy(n);so.subVectors(e,i);let h=Fi.dot(so),u=Bi.dot(so);if(h>=0&&u<=h)return t.copy(i);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Fi,a);ao.subVectors(e,s);let d=Fi.dot(ao),v=Bi.dot(ao);if(v>=0&&d<=v)return t.copy(s);let g=d*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Bi,o);let f=h*v-d*u;if(f<=0&&u-h>=0&&d-v>=0)return Jc.subVectors(s,i),o=(u-h)/(u-h+(d-v)),t.copy(i).addScaledVector(Jc,o);let y=1/(f+g+p);return a=g*y,o=p*y,t.copy(n).addScaledVector(Fi,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},gs={h:0,s:0,l:0};function oo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Lo(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=oo(a,s,e+1/3),this.g=oo(a,s,e),this.b=oo(a,s,e-1/3)}return ut.toWorkingColorSpace(this,i),this}setStyle(e,t=yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=Jh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Za(e.r),this.g=Za(e.g),this.b=Za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return ut.fromWorkingColorSpace(Gt.copy(this),e),65536*Math.round(Nt(255*Gt.r,0,255))+256*Math.round(Nt(255*Gt.g,0,255))+Math.round(Nt(255*Gt.b,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Gt.copy(this),t);let n=Gt.r,i=Gt.g,s=Gt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=yt){ut.fromWorkingColorSpace(Gt.copy(this),e);let t=Gt.r,n=Gt.g,i=Gt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(gs);let n=Ur(qn.h,gs.h,t),i=Ur(qn.s,gs.s,t),s=Ur(qn.l,gs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gt=new ze;ze.NAMES=Jh;var wd=0,ei=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=1,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=To,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wo&&(n.blendSrc=this.blendSrc),this.blendDst!==To&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mt=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zf=Td();function Td(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(8388608&c)==0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var Ct=new P,vs=new ye,$t=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zc&&(e.usage=this.usage),e}};var Js=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ks=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Ed=0,sn=new Ze,lo=new ft,ki=new P,Jt=new Qt,Rr=new Qt,Dt=new P,_t=class r extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zh(e)?Ks:Js)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return lo.lookAt(e),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ye(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new P,1/0);if(e){let n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(Jt.min,Rr.min),Jt.expandByPoint(Dt),Dt.addVectors(Jt.max,Rr.max),Jt.expandByPoint(Dt)):(Jt.expandByPoint(Rr.min),Jt.expandByPoint(Rr.max))}Jt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Dt.fromBufferAttribute(o,c),l&&(ki.fromBufferAttribute(e,c),Dt.add(ki)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new P,h[R]=new P;let u=new P,p=new P,d=new P,v=new ye,g=new ye,f=new ye,y=new P,m=new P;function x(R,O,L){u.fromArray(i,3*R),p.fromArray(i,3*O),d.fromArray(i,3*L),v.fromArray(a,2*R),g.fromArray(a,2*O),f.fromArray(a,2*L),p.sub(u),d.sub(u),g.sub(v),f.sub(v);let U=1/(g.x*f.y-f.x*g.y);isFinite(U)&&(y.copy(p).multiplyScalar(f.y).addScaledVector(d,-g.y).multiplyScalar(U),m.copy(d).multiplyScalar(g.x).addScaledVector(p,-f.x).multiplyScalar(U),c[R].add(y),c[O].add(y),c[L].add(y),h[R].add(m),h[O].add(m),h[L].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let R=0,O=M.length;R<O;++R){let L=M[R],U=L.start;for(let N=U,k=U+L.count;N<k;N+=3)x(n[N+0],n[N+1],n[N+2])}let E=new P,_=new P,S=new P,A=new P;function w(R){S.fromArray(s,3*R),A.copy(S);let O=c[R];E.copy(O),E.sub(S.multiplyScalar(S.dot(O))).normalize(),_.crossVectors(A,O);let L=_.dot(h[R])<0?-1:1;l[4*R]=E.x,l[4*R+1]=E.y,l[4*R+2]=E.z,l[4*R+3]=L}for(let R=0,O=M.length;R<O;++R){let L=M[R],U=L.start;for(let N=U,k=U+L.count;N<k;N+=3)w(n[N+0]),w(n[N+1]),w(n[N+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let i=new P,s=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let p=0,d=e.count;p<d;p+=3){let v=e.getX(p+0),g=e.getX(p+1),f=e.getX(p+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,f),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)i.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h),d=0,v=0;for(let g=0,f=l.length;g<f;g++){d=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let y=0;y<h;y++)p[v++]=c[d++]}return new $t(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let p=e(c[h],n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kc=new Ze,di=new Si,xs=new en,$c=new P,Gi=new P,Vi=new P,Hi=new P,co=new P,ys=new P,_s=new ye,Ms=new ye,bs=new ye,Qc=new P,eh=new P,th=new P,Ss=new P,ws=new P,Fe=class extends ft{constructor(e=new _t,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){ys.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(co.fromBufferAttribute(u,e),a?ys.addScaledVector(co,h):ys.addScaledVector(co.sub(t),h))}t.add(ys)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(s),di.copy(e.ray).recast(e.near),xs.containsPoint(di.origin)===!1&&(di.intersectSphere(xs,$c)===null||di.origin.distanceToSquared($c)>(e.far-e.near)**2))return;Kc.copy(s).invert(),di.copy(e.ray).applyMatrix4(Kc),n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,di)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=p.length;v<g;v++){let f=p[v],y=a[f.materialIndex];for(let m=Math.max(f.start,d.start),x=Math.min(o.count,Math.min(f.start+f.count,d.start+d.count));m<x;m+=3)i=Ts(this,y,e,n,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let v=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);v<g;v+=3)i=Ts(this,a,e,n,c,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=p.length;v<g;v++){let f=p[v],y=a[f.materialIndex];for(let m=Math.max(f.start,d.start),x=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));m<x;m+=3)i=Ts(this,y,e,n,c,h,u,m,m+1,m+2),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let v=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);v<g;v+=3)i=Ts(this,a,e,n,c,h,u,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}};function Ts(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Gi),r.getVertexPosition(l,Vi),r.getVertexPosition(c,Hi);let h=(function(u,p,d,v,g,f,y,m){let x;if(x=p.side===qt?v.intersectTriangle(y,f,g,!0,m):v.intersectTriangle(g,f,y,p.side===$n,m),x===null)return null;ws.copy(m),ws.applyMatrix4(u.matrixWorld);let M=d.ray.origin.distanceTo(ws);return M<d.near||M>d.far?null:{distance:M,point:ws.clone(),object:u}})(r,e,t,n,Gi,Vi,Hi,Ss);if(h){i&&(_s.fromBufferAttribute(i,o),Ms.fromBufferAttribute(i,l),bs.fromBufferAttribute(i,c),h.uv=xi.getInterpolation(Ss,Gi,Vi,Hi,_s,Ms,bs,new ye)),s&&(_s.fromBufferAttribute(s,o),Ms.fromBufferAttribute(s,l),bs.fromBufferAttribute(s,c),h.uv1=xi.getInterpolation(Ss,Gi,Vi,Hi,_s,Ms,bs,new ye),h.uv2=h.uv1),a&&(Qc.fromBufferAttribute(a,o),eh.fromBufferAttribute(a,l),th.fromBufferAttribute(a,c),h.normal=xi.getInterpolation(Ss,Gi,Vi,Hi,Qc,eh,th,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};xi.getNormal(Gi,Vi,Hi,u.normal),h.face=u}return h}var At=class r extends _t{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],p=0,d=0;function v(g,f,y,m,x,M,E,_,S,A,w){let R=M/S,O=E/A,L=M/2,U=E/2,N=_/2,k=S+1,Q=A+1,Y=0,ee=0,K=new P;for(let V=0;V<Q;V++){let j=V*O-U;for(let re=0;re<k;re++){let b=re*R-L;K[g]=b*m,K[f]=j*x,K[y]=N,c.push(K.x,K.y,K.z),K[g]=0,K[f]=0,K[y]=_>0?1:-1,h.push(K.x,K.y,K.z),u.push(re/S),u.push(1-V/A),Y+=1}}for(let V=0;V<A;V++)for(let j=0;j<S;j++){let re=p+j+k*V,b=p+j+k*(V+1),T=p+(j+1)+k*(V+1),B=p+(j+1)+k*V;l.push(re,b,B),l.push(b,T,B),ee+=6}o.addGroup(d,ee,w),d+=ee,p+=Y}v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function rr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(r){let e={};for(let t=0;t<r.length;t++){let n=rr(r[t]);for(let i in n)e[i]=n[i]}return e}function Kh(r){return r.getRenderTarget()===null?r.outputColorSpace:ut.workingColorSpace}var Ad={clone:rr,merge:Wt},Gn=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Vr=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Kt=class extends Vr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*kr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ji*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*kr*Math.atan(Math.tan(.5*Ji*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ji*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wi=-90,No=class extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Kt(Wi,1,e,t);i.layers=this.layers,this.add(i);let s=new Kt(Wi,1,e,t);s.layers=this.layers,this.add(s);let a=new Kt(Wi,1,e,t);a.layers=this.layers,this.add(a);let o=new Kt(Wi,1,e,t);o.layers=this.layers,this.add(o);let l=new Kt(Wi,1,e,t);l.layers=this.layers,this.add(l);let c=new Kt(Wi,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===nr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Ws)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},$s=class extends Mn{constructor(e,t,n,i,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Qi,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Oo=class extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Dr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===bi?yt:An),this.texture=new $s(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new At(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:0});s.uniforms.tEquirect.value=t;let a=new Fe(i,s),o=t.minFilter;return t.minFilter===Fs&&(t.minFilter=_n),new No(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},ho=new P,Cd=new P,Rd=new Qe,an=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ho.subVectors(n,t).cross(Cd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ho),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rd.getNormalMatrix(e),i=this.coplanarPoint(ho).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new en,Es=new P,sr=class{constructor(e=new an,t=new an,n=new an,i=new an,s=new an,a=new an){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],p=i[7],d=i[8],v=i[9],g=i[10],f=i[11],y=i[12],m=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,p-c,f-d,M-y).normalize(),n[1].setComponents(l+s,p+c,f+d,M+y).normalize(),n[2].setComponents(l+a,p+h,f+v,M+m).normalize(),n[3].setComponents(l-a,p-h,f-v,M-m).normalize(),n[4].setComponents(l-o,p-u,f-g,M-x).normalize(),t===nr)n[5].setComponents(l+o,p+u,f+g,M+x).normalize();else{if(t!==Ws)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,g,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Es.x=i.normal.x>0?e.max.x:e.min.x,Es.y=i.normal.y>0?e.max.y:e.min.y,Es.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $h(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Pd(r,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){let o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);let a=n.get(i);if(a===void 0)n.set(i,(function(o,l){let c=o.array,h=o.usage,u=c.byteLength,p=r.createBuffer(),d;if(r.bindBuffer(l,p),r.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");d=r.HALF_FLOAT}else d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);d=r.UNSIGNED_BYTE}return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}})(i,s));else if(a.version<i.version){if(a.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,u=l._updateRange,p=l.updateRanges;if(r.bindBuffer(c,o),u.count===-1&&p.length===0&&r.bufferSubData(c,0,h),p.length!==0){for(let d=0,v=p.length;d<v;d++){let g=p[d];t?r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count):r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h.subarray(g.start,g.start+g.count))}l.clearUpdateRanges()}u.count!==-1&&(t?r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),l.onUploadCallback()})(a.buffer,i,s),a.version=i.version}}}}var ar=class r extends _t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,p=t/l,d=[],v=[],g=[],f=[];for(let y=0;y<h;y++){let m=y*p-a;for(let x=0;x<c;x++){let M=x*u-s;v.push(M,-m,0),g.push(0,0,1),f.push(x/o),f.push(1-y/l)}}for(let y=0;y<l;y++)for(let m=0;m<o;m++){let x=m+c*y,M=m+c*(y+1),E=m+1+c*(y+1),_=m+1+c*y;d.push(x,M,_),d.push(M,E,_)}this.setIndex(d),this.setAttribute("position",new Ye(v,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ke={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},we={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Tn={basic:{uniforms:Wt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Wt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Wt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Wt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Wt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Wt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Wt([we.points,we.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Wt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Wt([we.common,we.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Wt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Wt([we.sprite,we.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Wt([we.common,we.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Wt([we.lights,we.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Tn.physical={uniforms:Wt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var As={r:0,b:0,g:0};function Ld(r,e,t,n,i,s,a){let o=new ze(0),l,c,h=s===!0?0:1,u=null,p=0,d=null;function v(g,f){g.getRGB(As,Kh(r)),n.buffers.color.setClear(As.r,As.g,As.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(g,f=1){o.set(g),h=f,v(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,v(o,h)},render:function(g,f){let y=!1,m=f.isScene===!0?f.background:null;m&&m.isTexture&&(m=(f.backgroundBlurriness>0?t:e).get(m)),m===null?v(o,h):m&&m.isColor&&(v(m,1),y=!0);let x=r.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),m&&(m.isCubeTexture||m.mapping===da)?(c===void 0&&(c=new Fe(new At(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:rr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ut.getTransfer(m.colorSpace)!==xt,u===m&&p===m.version&&d===r.toneMapping||(c.material.needsUpdate=!0,u=m,p=m.version,d=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new Fe(new ar(2,2),new Gn({name:"BackgroundMaterial",uniforms:rr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=m,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=ut.getTransfer(m.colorSpace)!==xt,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),u===m&&p===m.version&&d===r.toneMapping||(l.material.needsUpdate=!0,u=m,p=m.version,d=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}}}function Id(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=d(null),c=l,h=!1;function u(E){return n.isWebGL2?r.bindVertexArray(E):s.bindVertexArrayOES(E)}function p(E){return n.isWebGL2?r.deleteVertexArray(E):s.deleteVertexArrayOES(E)}function d(E){let _=[],S=[],A=[];for(let w=0;w<i;w++)_[w]=0,S[w]=0,A[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:S,attributeDivisors:A,object:E,attributes:{},index:null}}function v(){let E=c.newAttributes;for(let _=0,S=E.length;_<S;_++)E[_]=0}function g(E){f(E,0)}function f(E,_){let S=c.newAttributes,A=c.enabledAttributes,w=c.attributeDivisors;S[E]=1,A[E]===0&&(r.enableVertexAttribArray(E),A[E]=1),w[E]!==_&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](E,_),w[E]=_)}function y(){let E=c.newAttributes,_=c.enabledAttributes;for(let S=0,A=_.length;S<A;S++)_[S]!==E[S]&&(r.disableVertexAttribArray(S),_[S]=0)}function m(E,_,S,A,w,R,O){O===!0?r.vertexAttribIPointer(E,_,S,w,R):r.vertexAttribPointer(E,_,S,A,w,R)}function x(){M(),h=!0,c!==l&&(c=l,u(c.object))}function M(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(E,_,S,A,w){let R=!1;if(a){let O=(function(L,U,N){let k=N.wireframe===!0,Q=o[L.id];Q===void 0&&(Q={},o[L.id]=Q);let Y=Q[U.id];Y===void 0&&(Y={},Q[U.id]=Y);let ee=Y[k];return ee===void 0&&(ee=d(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),Y[k]=ee),ee})(A,S,_);c!==O&&(c=O,u(c.object)),R=(function(L,U,N,k){let Q=c.attributes,Y=U.attributes,ee=0,K=N.getAttributes();for(let V in K)if(K[V].location>=0){let j=Q[V],re=Y[V];if(re===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),j===void 0||j.attribute!==re||re&&j.data!==re.data)return!0;ee++}return c.attributesNum!==ee||c.index!==k})(E,A,S,w),R&&(function(L,U,N,k){let Q={},Y=U.attributes,ee=0,K=N.getAttributes();for(let V in K)if(K[V].location>=0){let j=Y[V];j===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let re={};re.attribute=j,j&&j.data&&(re.data=j.data),Q[V]=re,ee++}c.attributes=Q,c.attributesNum=ee,c.index=k})(E,A,S,w)}else{let O=_.wireframe===!0;c.geometry===A.id&&c.program===S.id&&c.wireframe===O||(c.geometry=A.id,c.program=S.id,c.wireframe=O,R=!0)}w!==null&&t.update(w,r.ELEMENT_ARRAY_BUFFER),(R||h)&&(h=!1,(function(O,L,U,N){if(n.isWebGL2===!1&&(O.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let k=N.attributes,Q=U.getAttributes(),Y=L.defaultAttributeValues;for(let ee in Q){let K=Q[ee];if(K.location>=0){let V=k[ee];if(V===void 0&&(ee==="instanceMatrix"&&O.instanceMatrix&&(V=O.instanceMatrix),ee==="instanceColor"&&O.instanceColor&&(V=O.instanceColor)),V!==void 0){let j=V.normalized,re=V.itemSize,b=t.get(V);if(b===void 0)continue;let T=b.buffer,B=b.type,$=b.bytesPerElement,D=n.isWebGL2===!0&&(B===r.INT||B===r.UNSIGNED_INT||V.gpuType===kh);if(V.isInterleavedBufferAttribute){let Z=V.data,F=Z.stride,G=V.offset;if(Z.isInstancedInterleavedBuffer){for(let H=0;H<K.locationSize;H++)f(K.location+H,Z.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let H=0;H<K.locationSize;H++)g(K.location+H);r.bindBuffer(r.ARRAY_BUFFER,T);for(let H=0;H<K.locationSize;H++)m(K.location+H,re/K.locationSize,B,j,F*$,(G+re/K.locationSize*H)*$,D)}else{if(V.isInstancedBufferAttribute){for(let Z=0;Z<K.locationSize;Z++)f(K.location+Z,V.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Z=0;Z<K.locationSize;Z++)g(K.location+Z);r.bindBuffer(r.ARRAY_BUFFER,T);for(let Z=0;Z<K.locationSize;Z++)m(K.location+Z,re/K.locationSize,B,j,re*$,re/K.locationSize*Z*$,D)}}else if(Y!==void 0){let j=Y[ee];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(K.location,j);break;case 3:r.vertexAttrib3fv(K.location,j);break;case 4:r.vertexAttrib4fv(K.location,j);break;default:r.vertexAttrib1fv(K.location,j)}}}}y()})(E,_,S,A),w!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(w).buffer))},reset:x,resetDefaultState:M,dispose:function(){x();for(let E in o){let _=o[E];for(let S in _){let A=_[S];for(let w in A)p(A[w].object),delete A[w];delete _[S]}delete o[E]}},releaseStatesOfGeometry:function(E){if(o[E.id]===void 0)return;let _=o[E.id];for(let S in _){let A=_[S];for(let w in A)p(A[w].object),delete A[w];delete _[S]}delete o[E.id]},releaseStatesOfProgram:function(E){for(let _ in o){let S=o[_];if(S[E.id]===void 0)continue;let A=S[E.id];for(let w in A)p(A[w].object),delete A[w];delete S[E.id]}},initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function Ud(r,e,t,n){let i=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(i)c=r,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(s,a,0,o,0,l);let h=0;for(let u=0;u<l;u++)h+=o[u];t.update(h,s,1)}}}function Dd(r,e,t){let n;function i(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),d=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),m=u>0,x=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:d,maxAttributes:v,maxVertexUniforms:g,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:m,floatFragmentTextures:x,floatVertexTextures:m&&x,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function Nd(r){let e=this,t=null,n=0,i=!1,s=!1,a=new an,o=new Qe,l={value:null,needsUpdate:!1};function c(h,u,p,d){let v=h!==null?h.length:0,g=null;if(v!==0){if(g=l.value,d!==!0||g===null){let f=p+4*v,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<f)&&(g=new Float32Array(f));for(let m=0,x=p;m!==v;++m,x+=4)a.copy(h[m]).applyMatrix4(y,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||n!==0||i;return i=u,n=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,p){let d=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,f=r.get(h);if(!i||d===null||d.length===0||s&&!g)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let y=s?0:n,m=4*y,x=f.clippingState||null;l.value=x,x=c(d,u,m,p);for(let M=0;M!==m;++M)x[M]=t[M];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}}}function Od(r){let e=new WeakMap;function t(i,s){return s===Eo?i.mapping=Qi:s===Ao&&(i.mapping=er),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===Eo||s===Ao){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Oo(a.height/2);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var ti=class extends Vr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nh=[.125,.215,.35,.446,.526,.582],Pr=20,uo=new ti,ih=new ze,po=null,fo=0,mo=0,fi=(1+Math.sqrt(5))/2,Xi=1/fi,rh=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,fi,Xi),new P(0,fi,-Xi),new P(Xi,0,fi),new P(-Xi,0,fi),new P(fi,Xi,0),new P(-fi,Xi,0)],Qs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){po=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(po,fo,mo),e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),po=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Br,format:En,colorSpace:Bn,depthBuffer:!1},i=sh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sh(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+nh.length;for(let p=0;p<u;p++){let d=Math.pow(2,h);l.push(d);let v=1/d;p>a-4?v=nh[p-a+4-1]:p===0&&(v=0),c.push(v);let g=1/(d-2),f=-g,y=1+g,m=[f,f,y,f,y,y,f,f,y,y,f,y],x=6,M=6,E=3,_=2,S=1,A=new Float32Array(E*M*x),w=new Float32Array(_*M*x),R=new Float32Array(S*M*x);for(let L=0;L<x;L++){let U=L%3*2/3-1,N=L>2?0:-1,k=[U,N,0,U+2/3,N,0,U+2/3,N+1,0,U,N,0,U+2/3,N+1,0,U,N+1,0];A.set(k,E*M*L),w.set(m,_*M*L);let Q=[L,L,L,L,L,L];R.set(Q,S*M*L)}let O=new _t;O.setAttribute("position",new $t(A,E)),O.setAttribute("uv",new $t(w,_)),O.setAttribute("faceIndex",new $t(R,S)),o.push(O),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Pr),h=new P(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new Fe(this._lodPlanes[0],e);this._renderer.compile(t,uo)}_sceneToCubeUV(e,t,n,i){let s=new Kt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(ih),l.toneMapping=Jn,l.autoClear=!1;let u=new mt({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),p=new Fe(new At,u),d=!1,v=e.background;v?v.isColor&&(u.color.copy(v),e.background=null,d=!0):(u.color.copy(ih),d=!0);for(let g=0;g<6;g++){let f=g%3;f===0?(s.up.set(0,a[g],0),s.lookAt(o[g],0,0)):f===1?(s.up.set(0,0,a[g]),s.lookAt(0,o[g],0)):(s.up.set(0,a[g],0),s.lookAt(0,0,o[g]));let y=this._cubeSize;Cs(i,f*y,g>2?y:0,y,y),l.setRenderTarget(i),d&&l.render(p,s),l.render(e,s)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Qi||e.mapping===er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Fe(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Cs(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,uo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=rh[(i-1)%rh.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Fe(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,d=isFinite(s)?Math.PI/(2*p):2*Math.PI/39,v=s/d,g=isFinite(s)?1+Math.floor(3*v):Pr;g>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let f=[],y=0;for(let M=0;M<Pr;++M){let E=M/v,_=Math.exp(-E*E/2);f.push(_),M===0?y+=_:M<g&&(y+=2*_)}for(let M=0;M<f.length;M++)f[M]=f[M]/y;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:m}=this;u.dTheta.value=d,u.mipInt.value=m-n;let x=this._sizeLods[i];Cs(t,3*x*(i>m-4?i-m+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,uo)}};function sh(r,e,t){let n=new kn(r,e,t);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ah(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function oh(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zd(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===Eo||s===Ao,o=s===Qi||s===er;if(a||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let l=e.get(i);return t===null&&(t=new Qs(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),e.set(i,l),l.texture}if(e.has(i))return e.get(i).texture;{let l=i.image;if(a&&l&&l.height>0||o&&l&&(function(c){let h=0,u=6;for(let p=0;p<u;p++)c[p]!==void 0&&h++;return h===u})(l)){t===null&&(t=new Qs(r));let c=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,c),i.addEventListener("dispose",n),c.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Fd(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Bd(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let p=c.morphAttributes[u];for(let d=0,v=p.length;d<v;d++)e.remove(p[d])}c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,p=0;if(h!==null){let g=h.array;p=h.version;for(let f=0,y=g.length;f<y;f+=3){let m=g[f+0],x=g[f+1],M=g[f+2];c.push(m,x,x,M,M,m)}}else{if(u===void 0)return;{let g=u.array;p=u.version;for(let f=0,y=g.length/3-1;f<y;f+=3){let m=f+0,x=f+1,M=f+2;c.push(m,x,x,M,M,m)}}}let d=new(Zh(c)?Ks:Js)(c,1);d.version=p;let v=s.get(l);v&&e.remove(v),s.set(l,d)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let p=h[u];for(let d=0,v=p.length;d<v;d++)e.update(p[d],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function kd(r,e,t,n){let i=n.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){r.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,p;if(i)u=r,p="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[p](s,c,a,l*o,h),t.update(c,s,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<h;p++)this.render(l[p]/o,c[p]);else{u.multiDrawElementsWEBGL(s,c,0,a,l,0,h);let p=0;for(let d=0;d<h;d++)p+=c[d];t.update(p,s,1)}}}function Gd(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Vd(r,e){return r[0]-e[0]}function Hd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Wd(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new Rt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,d=p!==void 0?p.length:0,v=s.get(c);if(v===void 0||v.count!==d){let U=function(){O.dispose(),s.delete(c),c.removeEventListener("dispose",U)};v!==void 0&&v.texture.dispose();let y=c.morphAttributes.position!==void 0,m=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],_=c.morphAttributes.color||[],S=0;y===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let A=c.attributes.position.count*S,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let R=new Float32Array(A*w*4*d),O=new Zs(R,A,w,d);O.type=Zn,O.needsUpdate=!0;let L=4*S;for(let N=0;N<d;N++){let k=M[N],Q=E[N],Y=_[N],ee=A*w*4*N;for(let K=0;K<k.count;K++){let V=K*L;y===!0&&(a.fromBufferAttribute(k,K),R[ee+V+0]=a.x,R[ee+V+1]=a.y,R[ee+V+2]=a.z,R[ee+V+3]=0),m===!0&&(a.fromBufferAttribute(Q,K),R[ee+V+4]=a.x,R[ee+V+5]=a.y,R[ee+V+6]=a.z,R[ee+V+7]=0),x===!0&&(a.fromBufferAttribute(Y,K),R[ee+V+8]=a.x,R[ee+V+9]=a.y,R[ee+V+10]=a.z,R[ee+V+11]=Y.itemSize===4?a.w:1)}}v={count:d,texture:O,size:new ye(A,w)},s.set(c,v),c.addEventListener("dispose",U)}let g=0;for(let y=0;y<u.length;y++)g+=u[y];let f=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(r,"morphTargetBaseInfluence",f),h.getUniforms().setValue(r,"morphTargetInfluences",u),h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{let p=u===void 0?0:u.length,d=n[c.id];if(d===void 0||d.length!==p){d=[];for(let m=0;m<p;m++)d[m]=[m,0];n[c.id]=d}for(let m=0;m<p;m++){let x=d[m];x[0]=m,x[1]=u[m]}d.sort(Hd);for(let m=0;m<8;m++)m<p&&d[m][1]?(o[m][0]=d[m][0],o[m][1]=d[m][1]):(o[m][0]=Number.MAX_SAFE_INTEGER,o[m][1]=0);o.sort(Vd);let v=c.morphAttributes.position,g=c.morphAttributes.normal,f=0;for(let m=0;m<8;m++){let x=o[m],M=x[0],E=x[1];M!==Number.MAX_SAFE_INTEGER&&E?(v&&c.getAttribute("morphTarget"+m)!==v[M]&&c.setAttribute("morphTarget"+m,v[M]),g&&c.getAttribute("morphNormal"+m)!==g[M]&&c.setAttribute("morphNormal"+m,g[M]),i[m]=E,f+=E):(v&&c.hasAttribute("morphTarget"+m)===!0&&c.deleteAttribute("morphTarget"+m),g&&c.hasAttribute("morphNormal"+m)===!0&&c.deleteAttribute("morphNormal"+m),i[m]=0)}let y=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function Xd(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var ea=class extends Mn{constructor(e,t,n,i,s,a,o,l,c,h){if((h=h!==void 0?h:Mi)!==Mi&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mi&&(n=Yn),n===void 0&&h===tr&&(n=_i),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Qh=new Mn,eu=new ea(1,1);eu.compareFunction=515;var tu=new Zs,nu=new Do,iu=new $s,lh=[],ch=[],hh=new Float32Array(16),uh=new Float32Array(9),dh=new Float32Array(4);function dr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=lh[i];if(s===void 0&&(s=new Float32Array(i),lh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function It(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function fa(r,e){let t=ch[e];t===void 0&&(t=new Int32Array(e),ch[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function jd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function qd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2fv(this.addr,e),Ut(t,e)}}function Yd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;r.uniform3fv(this.addr,e),Ut(t,e)}}function Zd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4fv(this.addr,e),Ut(t,e)}}function Jd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;dh.set(n),r.uniformMatrix2fv(this.addr,!1,dh),Ut(t,n)}}function Kd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;uh.set(n),r.uniformMatrix3fv(this.addr,!1,uh),Ut(t,n)}}function $d(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;hh.set(n),r.uniformMatrix4fv(this.addr,!1,hh),Ut(t,n)}}function Qd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ep(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2iv(this.addr,e),Ut(t,e)}}function tp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3iv(this.addr,e),Ut(t,e)}}function np(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4iv(this.addr,e),Ut(t,e)}}function ip(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2uiv(this.addr,e),Ut(t,e)}}function sp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3uiv(this.addr,e),Ut(t,e)}}function ap(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4uiv(this.addr,e),Ut(t,e)}}function op(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?eu:Qh;t.setTexture2D(e||s,i)}function lp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||nu,i)}function cp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||iu,i)}function hp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||tu,i)}function up(r,e){r.uniform1fv(this.addr,e)}function dp(r,e){let t=dr(e,this.size,2);r.uniform2fv(this.addr,t)}function pp(r,e){let t=dr(e,this.size,3);r.uniform3fv(this.addr,t)}function fp(r,e){let t=dr(e,this.size,4);r.uniform4fv(this.addr,t)}function mp(r,e){let t=dr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function gp(r,e){let t=dr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vp(r,e){let t=dr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xp(r,e){r.uniform1iv(this.addr,e)}function yp(r,e){r.uniform2iv(this.addr,e)}function _p(r,e){r.uniform3iv(this.addr,e)}function Mp(r,e){r.uniform4iv(this.addr,e)}function bp(r,e){r.uniform1uiv(this.addr,e)}function Sp(r,e){r.uniform2uiv(this.addr,e)}function wp(r,e){r.uniform3uiv(this.addr,e)}function Tp(r,e){r.uniform4uiv(this.addr,e)}function Ep(r,e,t){let n=this.cache,i=e.length,s=fa(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Qh,s[a])}function Ap(r,e,t){let n=this.cache,i=e.length,s=fa(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||nu,s[a])}function Cp(r,e,t){let n=this.cache,i=e.length,s=fa(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||iu,s[a])}function Rp(r,e,t){let n=this.cache,i=e.length,s=fa(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||tu,s[a])}var zo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return jd;case 35664:return qd;case 35665:return Yd;case 35666:return Zd;case 35674:return Jd;case 35675:return Kd;case 35676:return $d;case 5124:case 35670:return Qd;case 35667:case 35671:return ep;case 35668:case 35672:return tp;case 35669:case 35673:return np;case 5125:return ip;case 36294:return rp;case 36295:return sp;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return op;case 35679:case 36299:case 36307:return lp;case 35680:case 36300:case 36308:case 36293:return cp;case 36289:case 36303:case 36311:case 36292:return hp}})(t.type)}},Fo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return up;case 35664:return dp;case 35665:return pp;case 35666:return fp;case 35674:return mp;case 35675:return gp;case 35676:return vp;case 5124:case 35670:return xp;case 35667:case 35671:return yp;case 35668:case 35672:return _p;case 35669:case 35673:return Mp;case 5125:return bp;case 36294:return Sp;case 36295:return wp;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return Ap;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Rp}})(t.type)}},Bo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},go=/(\w+)(\])?(\[|\.)?/g;function ph(r,e){r.seq.push(e),r.map[e.id]=e}function Pp(r,e,t){let n=r.name,i=n.length;for(go.lastIndex=0;;){let s=go.exec(n),a=go.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){ph(t,c===void 0?new zo(o,r,e):new Fo(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Bo(o),ph(t,h)),t=h}}}var $i=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);Pp(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function fh(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Lp=37297,Ip=0;function mh(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),p=Math.min(l+6,c.length);for(let d=u;d<p;d++){let v=d+1;h.push(`${v===l?">":" "} ${v}: ${c[d]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function Up(r,e){let t=(function(n){let i=ut.getPrimaries(ut.workingColorSpace),s=ut.getPrimaries(n),a;switch(i===s?a="":i===Hs&&s===Vs?a="LinearDisplayP3ToLinearSRGB":i===Vs&&s===Hs&&(a="LinearSRGBToLinearDisplayP3"),n){case Bn:case pa:return[a,"LinearTransferOETF"];case yt:case Tl:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}})(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Dp(r,e){let t;switch(e){case sd:t="Linear";break;case ad:t="Reinhard";break;case od:t="OptimizedCineon";break;case ld:t="ACESFilmic";break;case hd:t="AgX";break;case cd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ji(r){return r!==""}function gh(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Np=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(r){return r.replace(Np,zp)}var Op=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zp(r,e){let t=Ke[e];if(t===void 0){let n=Op.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return ko(t)}var Fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(r){return r.replace(Fp,Bp)}function Bp(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function yh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kp(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(L){let U="SHADOWMAP_TYPE_BASIC";return L.shadowMapType===zh?U="SHADOWMAP_TYPE_PCF":L.shadowMapType===Sl?U="SHADOWMAP_TYPE_PCF_SOFT":L.shadowMapType===zn&&(U="SHADOWMAP_TYPE_VSM"),U})(t),c=(function(L){let U="ENVMAP_TYPE_CUBE";if(L.envMap)switch(L.envMapMode){case Qi:case er:U="ENVMAP_TYPE_CUBE";break;case da:U="ENVMAP_TYPE_CUBE_UV"}return U})(t),h=(function(L){let U="ENVMAP_MODE_REFLECTION";return L.envMap&&L.envMapMode===er&&(U="ENVMAP_MODE_REFRACTION"),U})(t),u=(function(L){let U="ENVMAP_BLENDING_NONE";if(L.envMap)switch(L.combine){case Fh:U="ENVMAP_BLENDING_MULTIPLY";break;case id:U="ENVMAP_BLENDING_MIX";break;case rd:U="ENVMAP_BLENDING_ADD"}return U})(t),p=(function(L){let U=L.envMapCubeUVHeight;if(U===null)return null;let N=Math.log2(U)-2,k=1/U;return{texelWidth:1/(3*Math.max(Math.pow(2,N),112)),texelHeight:k,maxMip:N}})(t),d=t.isWebGL2?"":(function(L){return[L.extensionDerivatives||L.envMapCubeUVHeight||L.bumpMap||L.normalMapTangentSpace||L.clearcoatNormalMap||L.flatShading||L.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(L.extensionFragDepth||L.logarithmicDepthBuffer)&&L.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",L.extensionDrawBuffers&&L.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(L.extensionShaderTextureLOD||L.envMap||L.transmission)&&L.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ji).join(`
`)})(t),v=(function(L){return[L.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ji).join(`
`)})(t),g=(function(L){let U=[];for(let N in L){let k=L[N];k!==!1&&U.push("#define "+N+" "+k)}return U.join(`
`)})(s),f=i.createProgram(),y,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ji).join(`
`),y.length>0&&(y+=`
`),m=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ji).join(`
`),m.length>0&&(m+=`
`)):(y=[yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),m=[d,yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Jn?Dp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Up("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),a=ko(a),a=gh(a,t),a=vh(a,t),o=ko(o),o=gh(o,t),o=vh(o,t),a=xh(a),o=xh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,y=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=x+y+a,E=x+m+o,_=fh(i,i.VERTEX_SHADER,M),S=fh(i,i.FRAGMENT_SHADER,E);function A(L){if(r.debug.checkShaderErrors){let U=i.getProgramInfoLog(f).trim(),N=i.getShaderInfoLog(_).trim(),k=i.getShaderInfoLog(S).trim(),Q=!0,Y=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,_,S);else{let ee=mh(i,_,"vertex"),K=mh(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+ee+`
`+K)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):N!==""&&k!==""||(Y=!1);Y&&(L.diagnostics={runnable:Q,programLog:U,vertexShader:{log:N,prefix:y},fragmentShader:{log:k,prefix:m}})}i.deleteShader(_),i.deleteShader(S),w=new $i(i,f),R=(function(U,N){let k={},Q=U.getProgramParameter(N,U.ACTIVE_ATTRIBUTES);for(let Y=0;Y<Q;Y++){let ee=U.getActiveAttrib(N,Y),K=ee.name,V=1;ee.type===U.FLOAT_MAT2&&(V=2),ee.type===U.FLOAT_MAT3&&(V=3),ee.type===U.FLOAT_MAT4&&(V=4),k[K]={type:ee.type,location:U.getAttribLocation(N,K),locationSize:V}}return k})(i,f)}let w,R;i.attachShader(f,_),i.attachShader(f,S),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),this.getUniforms=function(){return w===void 0&&A(this),w},this.getAttributes=function(){return R===void 0&&A(this),R};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(f,Lp)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ip++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=_,this.fragmentShader=S,this}var Gp=0,Go=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vo(e),t.set(e,n)),n}},Vo=class{constructor(e){this.id=Gp++,this.code=e,this.usedTimes=0}};function Vp(r,e,t,n,i,s,a){let o=new Gr,l=new Go,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,p=i.vertexTextures,d=i.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(f){return f===0?"uv":`uv${f}`}return{getParameters:function(f,y,m,x,M){let E=x.fog,_=M.geometry,S=f.isMeshStandardMaterial?x.environment:null,A=(f.isMeshStandardMaterial?t:e).get(f.envMap||S),w=A&&A.mapping===da?A.image.height:null,R=v[f.type];f.precision!==null&&(d=i.getMaxPrecision(f.precision),d!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",d,"instead."));let O=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,L=O!==void 0?O.length:0,U,N,k,Q,Y=0;if(_.morphAttributes.position!==void 0&&(Y=1),_.morphAttributes.normal!==void 0&&(Y=2),_.morphAttributes.color!==void 0&&(Y=3),R){let lt=Tn[R];U=lt.vertexShader,N=lt.fragmentShader}else U=f.vertexShader,N=f.fragmentShader,l.update(f),k=l.getVertexShaderID(f),Q=l.getFragmentShaderID(f);let ee=r.getRenderTarget(),K=M.isInstancedMesh===!0,V=M.isBatchedMesh===!0,j=!!f.map,re=!!f.matcap,b=!!A,T=!!f.aoMap,B=!!f.lightMap,$=!!f.bumpMap,D=!!f.normalMap,Z=!!f.displacementMap,F=!!f.emissiveMap,G=!!f.metalnessMap,H=!!f.roughnessMap,se=f.anisotropy>0,ne=f.clearcoat>0,C=f.iridescence>0,oe=f.sheen>0,z=f.transmission>0,X=se&&!!f.anisotropyMap,W=ne&&!!f.clearcoatMap,ue=ne&&!!f.clearcoatNormalMap,pe=ne&&!!f.clearcoatRoughnessMap,_e=C&&!!f.iridescenceMap,Ue=C&&!!f.iridescenceThicknessMap,ae=oe&&!!f.sheenColorMap,ge=oe&&!!f.sheenRoughnessMap,Le=!!f.specularMap,ke=!!f.specularColorMap,be=!!f.specularIntensityMap,Oe=z&&!!f.transmissionMap,Re=z&&!!f.thicknessMap,ht=!!f.gradientMap,gt=!!f.alphaMap,dt=f.alphaTest>0,at=!!f.alphaHash,ot=!!f.extensions,vt=!!_.attributes.uv1,le=!!_.attributes.uv2,Et=!!_.attributes.uv3,wt=Jn;return f.toneMapped&&(ee!==null&&ee.isXRRenderTarget!==!0||(wt=r.toneMapping)),{isWebGL2:h,shaderID:R,shaderType:f.type,shaderName:f.name,vertexShader:U,fragmentShader:N,defines:f.defines,customVertexShaderID:k,customFragmentShaderID:Q,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:d,batching:V,instancing:K,instancingColor:K&&M.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Bn,map:j,matcap:re,envMap:b,envMapMode:b&&A.mapping,envMapCubeUVHeight:w,aoMap:T,lightMap:B,bumpMap:$,normalMap:D,displacementMap:p&&Z,emissiveMap:F,normalMapObjectSpace:D&&f.normalMapType===1,normalMapTangentSpace:D&&f.normalMapType===0,metalnessMap:G,roughnessMap:H,anisotropy:se,anisotropyMap:X,clearcoat:ne,clearcoatMap:W,clearcoatNormalMap:ue,clearcoatRoughnessMap:pe,iridescence:C,iridescenceMap:_e,iridescenceThicknessMap:Ue,sheen:oe,sheenColorMap:ae,sheenRoughnessMap:ge,specularMap:Le,specularColorMap:ke,specularIntensityMap:be,transmission:z,transmissionMap:Oe,thicknessMap:Re,gradientMap:ht,opaque:f.transparent===!1&&f.blending===1,alphaMap:gt,alphaTest:dt,alphaHash:at,combine:f.combine,mapUv:j&&g(f.map.channel),aoMapUv:T&&g(f.aoMap.channel),lightMapUv:B&&g(f.lightMap.channel),bumpMapUv:$&&g(f.bumpMap.channel),normalMapUv:D&&g(f.normalMap.channel),displacementMapUv:Z&&g(f.displacementMap.channel),emissiveMapUv:F&&g(f.emissiveMap.channel),metalnessMapUv:G&&g(f.metalnessMap.channel),roughnessMapUv:H&&g(f.roughnessMap.channel),anisotropyMapUv:X&&g(f.anisotropyMap.channel),clearcoatMapUv:W&&g(f.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(f.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&g(f.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&g(f.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&g(f.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(f.sheenRoughnessMap.channel),specularMapUv:Le&&g(f.specularMap.channel),specularColorMapUv:ke&&g(f.specularColorMap.channel),specularIntensityMapUv:be&&g(f.specularIntensityMap.channel),transmissionMapUv:Oe&&g(f.transmissionMap.channel),thicknessMapUv:Re&&g(f.thicknessMap.channel),alphaMapUv:gt&&g(f.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(D||se),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,vertexUv1s:vt,vertexUv2s:le,vertexUv3s:Et,pointsUvs:M.isPoints===!0&&!!_.attributes.uv&&(j||gt),fog:!!E,useFog:f.fog===!0,fogExp2:E&&E.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:M.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:Y,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&m.length>0,shadowMapType:r.shadowMap.type,toneMapping:wt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:j&&f.map.isVideoTexture===!0&&ut.getTransfer(f.map.colorSpace)===xt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===qt,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:ot&&f.extensions.derivatives===!0,extensionFragDepth:ot&&f.extensions.fragDepth===!0,extensionDrawBuffers:ot&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ot&&f.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()}},getProgramCacheKey:function(f){let y=[];if(f.shaderID?y.push(f.shaderID):(y.push(f.customVertexShaderID),y.push(f.customFragmentShaderID)),f.defines!==void 0)for(let m in f.defines)y.push(m),y.push(f.defines[m]);return f.isRawShaderMaterial===!1&&((function(m,x){m.push(x.precision),m.push(x.outputColorSpace),m.push(x.envMapMode),m.push(x.envMapCubeUVHeight),m.push(x.mapUv),m.push(x.alphaMapUv),m.push(x.lightMapUv),m.push(x.aoMapUv),m.push(x.bumpMapUv),m.push(x.normalMapUv),m.push(x.displacementMapUv),m.push(x.emissiveMapUv),m.push(x.metalnessMapUv),m.push(x.roughnessMapUv),m.push(x.anisotropyMapUv),m.push(x.clearcoatMapUv),m.push(x.clearcoatNormalMapUv),m.push(x.clearcoatRoughnessMapUv),m.push(x.iridescenceMapUv),m.push(x.iridescenceThicknessMapUv),m.push(x.sheenColorMapUv),m.push(x.sheenRoughnessMapUv),m.push(x.specularMapUv),m.push(x.specularColorMapUv),m.push(x.specularIntensityMapUv),m.push(x.transmissionMapUv),m.push(x.thicknessMapUv),m.push(x.combine),m.push(x.fogExp2),m.push(x.sizeAttenuation),m.push(x.morphTargetsCount),m.push(x.morphAttributeCount),m.push(x.numDirLights),m.push(x.numPointLights),m.push(x.numSpotLights),m.push(x.numSpotLightMaps),m.push(x.numHemiLights),m.push(x.numRectAreaLights),m.push(x.numDirLightShadows),m.push(x.numPointLightShadows),m.push(x.numSpotLightShadows),m.push(x.numSpotLightShadowsWithMaps),m.push(x.numLightProbes),m.push(x.shadowMapType),m.push(x.toneMapping),m.push(x.numClippingPlanes),m.push(x.numClipIntersection),m.push(x.depthPacking)})(y,f),(function(m,x){o.disableAll(),x.isWebGL2&&o.enable(0),x.supportsVertexTextures&&o.enable(1),x.instancing&&o.enable(2),x.instancingColor&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),m.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.useLegacyLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),m.push(o.mask)})(y,f),y.push(r.outputColorSpace)),y.push(f.customProgramCacheKey),y.join()},getUniforms:function(f){let y=v[f.type],m;if(y){let x=Tn[y];m=Ad.clone(x.uniforms)}else m=f.uniforms;return m},acquireProgram:function(f,y){let m;for(let x=0,M=c.length;x<M;x++){let E=c[x];if(E.cacheKey===y){m=E,++m.usedTimes;break}}return m===void 0&&(m=new kp(r,y,f,s),c.push(m)),m},releaseProgram:function(f){if(--f.usedTimes==0){let y=c.indexOf(f);c[y]=c[c.length-1],c.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:c,dispose:function(){l.dispose()}}}function Hp(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Wp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function _h(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Mh(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let p=r[e];return p===void 0?(p={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=p):(p.id=a.id,p.object=a,p.geometry=o,p.material=l,p.groupOrder=c,p.renderOrder=a.renderOrder,p.z=h,p.group=u),e++,p}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let p=s(a,o,l,c,h,u);l.transmission>0?n.push(p):l.transparent===!0?i.push(p):t.push(p)},unshift:function(a,o,l,c,h,u){let p=s(a,o,l,c,h,u);l.transmission>0?n.unshift(p):l.transparent===!0?i.unshift(p):t.unshift(p)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Wp),n.length>1&&n.sort(o||_h),i.length>1&&i.sort(o||_h)}}}function Xp(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new Mh,r.set(e,[i])):t>=n.length?(i=new Mh,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function jp(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ze};break;case"SpotLight":t={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new P,halfWidth:new P,halfHeight:new P}}return r[e.id]=t,t}}}var qp=0;function Yp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Zp(r,e){let t=new jp,n=(function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let s=new P,a=new Ze,o=new Ze;return{setup:function(l,c){let h=0,u=0,p=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,v=0,g=0,f=0,y=0,m=0,x=0,M=0,E=0,_=0,S=0;l.sort(Yp);let A=c===!0?Math.PI:1;for(let R=0,O=l.length;R<O;R++){let L=l[R],U=L.color,N=L.intensity,k=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=U.r*N*A,u+=U.g*N*A,p+=U.b*N*A;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],N);S++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*A),L.castShadow){let ee=L.shadow,K=n.get(L);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,i.directionalShadow[d]=K,i.directionalShadowMap[d]=Q,i.directionalShadowMatrix[d]=L.shadow.matrix,m++}i.directional[d]=Y,d++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(U).multiplyScalar(N*A),Y.distance=k,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[g]=Y;let ee=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,ee.updateMatrices(L),L.castShadow&&_++),i.spotLightMatrix[g]=ee.matrix,L.castShadow){let K=n.get(L);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,i.spotShadow[g]=K,i.spotShadowMap[g]=Q,M++}g++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(U).multiplyScalar(N),Y.halfWidth.set(.5*L.width,0,0),Y.halfHeight.set(0,.5*L.height,0),i.rectArea[f]=Y,f++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*A),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let ee=L.shadow,K=n.get(L);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,K.shadowCameraNear=ee.camera.near,K.shadowCameraFar=ee.camera.far,i.pointShadow[v]=K,i.pointShadowMap[v]=Q,i.pointShadowMatrix[v]=L.shadow.matrix,x++}i.point[v]=Y,v++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(N*A),Y.groundColor.copy(L.groundColor).multiplyScalar(N*A),i.hemi[y]=Y,y++}}f>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=p;let w=i.hash;w.directionalLength===d&&w.pointLength===v&&w.spotLength===g&&w.rectAreaLength===f&&w.hemiLength===y&&w.numDirectionalShadows===m&&w.numPointShadows===x&&w.numSpotShadows===M&&w.numSpotMaps===E&&w.numLightProbes===S||(i.directional.length=d,i.spot.length=g,i.rectArea.length=f,i.point.length=v,i.hemi.length=y,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+E-_,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=_,i.numLightProbes=S,w.directionalLength=d,w.pointLength=v,w.spotLength=g,w.rectAreaLength=f,w.hemiLength=y,w.numDirectionalShadows=m,w.numPointShadows=x,w.numSpotShadows=M,w.numSpotMaps=E,w.numLightProbes=S,i.version=qp++)},setupView:function(l,c){let h=0,u=0,p=0,d=0,v=0,g=c.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){let m=l[f];if(m.isDirectionalLight){let x=i.directional[h];x.direction.setFromMatrixPosition(m.matrixWorld),s.setFromMatrixPosition(m.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(m.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(m.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(m.matrixWorld),s.setFromMatrixPosition(m.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),p++}else if(m.isRectAreaLight){let x=i.rectArea[d];x.position.setFromMatrixPosition(m.matrixWorld),x.position.applyMatrix4(g),o.identity(),a.copy(m.matrixWorld),a.premultiply(g),o.extractRotation(a),x.halfWidth.set(.5*m.width,0,0),x.halfHeight.set(0,.5*m.height,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),d++}else if(m.isPointLight){let x=i.point[u];x.position.setFromMatrixPosition(m.matrixWorld),x.position.applyMatrix4(g),u++}else if(m.isHemisphereLight){let x=i.hemi[v];x.direction.setFromMatrixPosition(m.matrixWorld),x.direction.transformDirection(g),v++}}},state:i}}function bh(r,e){let t=new Zp(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function Jp(r,e){let t=new WeakMap;return{get:function(n,i=0){let s=t.get(n),a;return s===void 0?(a=new bh(r,e),t.set(n,[a])):i>=s.length?(a=new bh(r,e),s.push(a)):a=s[i],a},dispose:function(){t=new WeakMap}}}var Ho=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wo=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Kp(r,e,t){let n=new sr,i=new ye,s=new ye,a=new Rt,o=new Ho({depthPacking:3201}),l=new Wo,c={},h=t.maxTextureSize,u={[$n]:qt,[qt]:$n,2:2},p=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let v=new _t;v.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Fe(v,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zh;let y=this.type;function m(_,S){let A=e.update(g);p.defines.VSM_SAMPLES!==_.blurSamples&&(p.defines.VSM_SAMPLES=_.blurSamples,d.defines.VSM_SAMPLES=_.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new kn(i.x,i.y)),p.uniforms.shadow_pass.value=_.map.texture,p.uniforms.resolution.value=_.mapSize,p.uniforms.radius.value=_.radius,r.setRenderTarget(_.mapPass),r.clear(),r.renderBufferDirect(S,null,A,p,g,null),d.uniforms.shadow_pass.value=_.mapPass.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,r.setRenderTarget(_.map),r.clear(),r.renderBufferDirect(S,null,A,d,g,null)}function x(_,S,A,w){let R=null,O=A.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(O!==void 0)R=O;else if(R=A.isPointLight===!0?l:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let L=R.uuid,U=S.uuid,N=c[L];N===void 0&&(N={},c[L]=N);let k=N[U];k===void 0&&(k=R.clone(),N[U]=k,S.addEventListener("dispose",E)),R=k}return R.visible=S.visible,R.wireframe=S.wireframe,R.side=w===zn?S.shadowSide!==null?S.shadowSide:S.side:S.shadowSide!==null?S.shadowSide:u[S.side],R.alphaMap=S.alphaMap,R.alphaTest=S.alphaTest,R.map=S.map,R.clipShadows=S.clipShadows,R.clippingPlanes=S.clippingPlanes,R.clipIntersection=S.clipIntersection,R.displacementMap=S.displacementMap,R.displacementScale=S.displacementScale,R.displacementBias=S.displacementBias,R.wireframeLinewidth=S.wireframeLinewidth,R.linewidth=S.linewidth,A.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(r.properties.get(R).light=A),R}function M(_,S,A,w,R){if(_.visible===!1)return;if(_.layers.test(S.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&R===zn)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,_.matrixWorld);let L=e.update(_),U=_.material;if(Array.isArray(U)){let N=L.groups;for(let k=0,Q=N.length;k<Q;k++){let Y=N[k],ee=U[Y.materialIndex];if(ee&&ee.visible){let K=x(_,ee,w,R);_.onBeforeShadow(r,_,S,A,L,K,Y),r.renderBufferDirect(A,null,L,K,_,Y),_.onAfterShadow(r,_,S,A,L,K,Y)}}}else if(U.visible){let N=x(_,U,w,R);_.onBeforeShadow(r,_,S,A,L,N,null),r.renderBufferDirect(A,null,L,N,_,null),_.onAfterShadow(r,_,S,A,L,N,null)}}let O=_.children;for(let L=0,U=O.length;L<U;L++)M(O[L],S,A,w,R)}function E(_){_.target.removeEventListener("dispose",E);for(let S in c){let A=c[S],w=_.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}this.render=function(_,S,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||_.length===0)return;let w=r.getRenderTarget(),R=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),L=r.state;L.setBlending(0),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=y!==zn&&this.type===zn,N=y===zn&&this.type!==zn;for(let k=0,Q=_.length;k<Q;k++){let Y=_[k],ee=Y.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;i.copy(ee.mapSize);let K=ee.getFrameExtents();if(i.multiply(K),s.copy(ee.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,ee.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,ee.mapSize.y=s.y)),ee.map===null||U===!0||N===!0){let j=this.type!==zn?{minFilter:Xt,magFilter:Xt}:{};ee.map!==null&&ee.map.dispose(),ee.map=new kn(i.x,i.y,j),ee.map.texture.name=Y.name+".shadowMap",ee.camera.updateProjectionMatrix()}r.setRenderTarget(ee.map),r.clear();let V=ee.getViewportCount();for(let j=0;j<V;j++){let re=ee.getViewport(j);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),L.viewport(a),ee.updateMatrices(Y,j),n=ee.getFrustum(),M(S,A,ee.camera,Y,this.type)}ee.isPointLightShadow!==!0&&this.type===zn&&m(ee,A),ee.needsUpdate=!1}y=this.type,f.needsUpdate=!1,r.setRenderTarget(w,R,O)}}function $p(r,e,t){let n=t.isWebGL2,i=new function(){let C=!1,oe=new Rt,z=null,X=new Rt(0,0,0,0);return{setMask:function(W){z===W||C||(r.colorMask(W,W,W,W),z=W)},setLocked:function(W){C=W},setClear:function(W,ue,pe,_e,Ue){Ue===!0&&(W*=_e,ue*=_e,pe*=_e),oe.set(W,ue,pe,_e),X.equals(oe)===!1&&(r.clearColor(W,ue,pe,_e),X.copy(oe))},reset:function(){C=!1,z=null,X.set(-1,0,0,0)}}},s=new function(){let C=!1,oe=null,z=null,X=null;return{setTest:function(W){W?$(r.DEPTH_TEST):D(r.DEPTH_TEST)},setMask:function(W){oe===W||C||(r.depthMask(W),oe=W)},setFunc:function(W){if(z!==W){switch(W){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}z=W}},setLocked:function(W){C=W},setClear:function(W){X!==W&&(r.clearDepth(W),X=W)},reset:function(){C=!1,oe=null,z=null,X=null}}},a=new function(){let C=!1,oe=null,z=null,X=null,W=null,ue=null,pe=null,_e=null,Ue=null;return{setTest:function(ae){C||(ae?$(r.STENCIL_TEST):D(r.STENCIL_TEST))},setMask:function(ae){oe===ae||C||(r.stencilMask(ae),oe=ae)},setFunc:function(ae,ge,Le){z===ae&&X===ge&&W===Le||(r.stencilFunc(ae,ge,Le),z=ae,X=ge,W=Le)},setOp:function(ae,ge,Le){ue===ae&&pe===ge&&_e===Le||(r.stencilOp(ae,ge,Le),ue=ae,pe=ge,_e=Le)},setLocked:function(ae){C=ae},setClear:function(ae){Ue!==ae&&(r.clearStencil(ae),Ue=ae)},reset:function(){C=!1,oe=null,z=null,X=null,W=null,ue=null,pe=null,_e=null,Ue=null}}},o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,p=[],d=null,v=!1,g=null,f=null,y=null,m=null,x=null,M=null,E=null,_=new ze(0,0,0),S=0,A=!1,w=null,R=null,O=null,L=null,U=null,N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Q=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=Q>=2);let ee=null,K={},V=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),re=new Rt().fromArray(V),b=new Rt().fromArray(j);function T(C,oe,z,X){let W=new Uint8Array(4),ue=r.createTexture();r.bindTexture(C,ue),r.texParameteri(C,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(C,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let pe=0;pe<z;pe++)!n||C!==r.TEXTURE_3D&&C!==r.TEXTURE_2D_ARRAY?r.texImage2D(oe+pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,W):r.texImage3D(oe,0,r.RGBA,1,1,X,0,r.RGBA,r.UNSIGNED_BYTE,W);return ue}let B={};function $(C){c[C]!==!0&&(r.enable(C),c[C]=!0)}function D(C){c[C]!==!1&&(r.disable(C),c[C]=!1)}B[r.TEXTURE_2D]=T(r.TEXTURE_2D,r.TEXTURE_2D,1),B[r.TEXTURE_CUBE_MAP]=T(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(B[r.TEXTURE_2D_ARRAY]=T(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),B[r.TEXTURE_3D]=T(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),$(r.DEPTH_TEST),s.setFunc(3),H(!1),se(1),$(r.CULL_FACE),G(0);let Z={[mi]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(n)Z[103]=r.MIN,Z[104]=r.MAX;else{let C=e.get("EXT_blend_minmax");C!==null&&(Z[103]=C.MIN_EXT,Z[104]=C.MAX_EXT)}let F={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[wo]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[To]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function G(C,oe,z,X,W,ue,pe,_e,Ue,ae){if(C!==0){if(v===!1&&($(r.BLEND),v=!0),C===5)W=W||oe,ue=ue||z,pe=pe||X,oe===f&&W===x||(r.blendEquationSeparate(Z[oe],Z[W]),f=oe,x=W),z===y&&X===m&&ue===M&&pe===E||(r.blendFuncSeparate(F[z],F[X],F[ue],F[pe]),y=z,m=X,M=ue,E=pe),_e.equals(_)!==!1&&Ue===S||(r.blendColor(_e.r,_e.g,_e.b,Ue),_.copy(_e),S=Ue),g=C,A=!1;else if(C!==g||ae!==A){if(f===mi&&x===mi||(r.blendEquation(r.FUNC_ADD),f=mi,x=mi),ae)switch(C){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C)}else switch(C){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C)}y=null,m=null,M=null,E=null,_.set(0,0,0),S=0,g=C,A=ae}}else v===!0&&(D(r.BLEND),v=!1)}function H(C){w!==C&&(C?r.frontFace(r.CW):r.frontFace(r.CCW),w=C)}function se(C){C!==0?($(r.CULL_FACE),C!==R&&(C===1?r.cullFace(r.BACK):C===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):D(r.CULL_FACE),R=C}function ne(C,oe,z){C?($(r.POLYGON_OFFSET_FILL),L===oe&&U===z||(r.polygonOffset(oe,z),L=oe,U=z)):D(r.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:s,stencil:a},enable:$,disable:D,bindFramebuffer:function(C,oe){return h[C]!==oe&&(r.bindFramebuffer(C,oe),h[C]=oe,n&&(C===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=oe),C===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=oe)),!0)},drawBuffers:function(C,oe){let z=p,X=!1;if(C)if(z=u.get(oe),z===void 0&&(z=[],u.set(oe,z)),C.isWebGLMultipleRenderTargets){let W=C.texture;if(z.length!==W.length||z[0]!==r.COLOR_ATTACHMENT0){for(let ue=0,pe=W.length;ue<pe;ue++)z[ue]=r.COLOR_ATTACHMENT0+ue;z.length=W.length,X=!0}}else z[0]!==r.COLOR_ATTACHMENT0&&(z[0]=r.COLOR_ATTACHMENT0,X=!0);else z[0]!==r.BACK&&(z[0]=r.BACK,X=!0);X&&(t.isWebGL2?r.drawBuffers(z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))},useProgram:function(C){return d!==C&&(r.useProgram(C),d=C,!0)},setBlending:G,setMaterial:function(C,oe){C.side===2?D(r.CULL_FACE):$(r.CULL_FACE);let z=C.side===qt;oe&&(z=!z),H(z),C.blending===1&&C.transparent===!1?G(0):G(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),i.setMask(C.colorWrite);let X=C.stencilWrite;a.setTest(X),X&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ne(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?$(r.SAMPLE_ALPHA_TO_COVERAGE):D(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:H,setCullFace:se,setLineWidth:function(C){C!==O&&(k&&r.lineWidth(C),O=C)},setPolygonOffset:ne,setScissorTest:function(C){C?$(r.SCISSOR_TEST):D(r.SCISSOR_TEST)},activeTexture:function(C){C===void 0&&(C=r.TEXTURE0+N-1),ee!==C&&(r.activeTexture(C),ee=C)},bindTexture:function(C,oe,z){z===void 0&&(z=ee===null?r.TEXTURE0+N-1:ee);let X=K[z];X===void 0&&(X={type:void 0,texture:void 0},K[z]=X),X.type===C&&X.texture===oe||(ee!==z&&(r.activeTexture(z),ee=z),r.bindTexture(C,oe||B[C]),X.type=C,X.texture=oe)},unbindTexture:function(){let C=K[ee];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}},updateUBOMapping:function(C,oe){let z=l.get(oe);z===void 0&&(z=new WeakMap,l.set(oe,z));let X=z.get(C);X===void 0&&(X=r.getUniformBlockIndex(oe,C.name),z.set(C,X))},uniformBlockBinding:function(C,oe){let z=l.get(oe).get(C);o.get(oe)!==z&&(r.uniformBlockBinding(oe,z,C.__bindingPointIndex),o.set(oe,z))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}},scissor:function(C){re.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),re.copy(C))},viewport:function(C){b.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),b.copy(C))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},ee=null,K={},h={},u=new WeakMap,p=[],d=null,v=!1,g=null,f=null,y=null,m=null,x=null,M=null,E=null,_=new ze(0,0,0),S=0,A=!1,w=null,R=null,O=null,L=null,U=null,re.set(0,0,r.canvas.width,r.canvas.height),b.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}function Qp(r,e,t,n,i,s,a){let o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,T){return d?new OffscreenCanvas(b,T):js("canvas")}function g(b,T,B,$){let D=1;if((b.width>$||b.height>$)&&(D=$/Math.max(b.width,b.height)),D<1||T===!0){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let Z=T?Xs:Math.floor,F=Z(D*b.width),G=Z(D*b.height);u===void 0&&(u=v(F,G));let H=B?v(F,G):u;return H.width=F,H.height=G,H.getContext("2d").drawImage(b,0,0,F,G),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+F+"x"+G+")."),H}return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b}return b}function f(b){return Io(b.width)&&Io(b.height)}function y(b,T){return b.generateMipmaps&&T&&b.minFilter!==Xt&&b.minFilter!==_n}function m(b){r.generateMipmap(b)}function x(b,T,B,$,D=!1){if(o===!1)return T;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=T;if(T===r.RED&&(B===r.FLOAT&&(Z=r.R32F),B===r.HALF_FLOAT&&(Z=r.R16F),B===r.UNSIGNED_BYTE&&(Z=r.R8)),T===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(Z=r.R8UI),B===r.UNSIGNED_SHORT&&(Z=r.R16UI),B===r.UNSIGNED_INT&&(Z=r.R32UI),B===r.BYTE&&(Z=r.R8I),B===r.SHORT&&(Z=r.R16I),B===r.INT&&(Z=r.R32I)),T===r.RG&&(B===r.FLOAT&&(Z=r.RG32F),B===r.HALF_FLOAT&&(Z=r.RG16F),B===r.UNSIGNED_BYTE&&(Z=r.RG8)),T===r.RGBA){let F=D?Gs:ut.getTransfer($);B===r.FLOAT&&(Z=r.RGBA32F),B===r.HALF_FLOAT&&(Z=r.RGBA16F),B===r.UNSIGNED_BYTE&&(Z=F===xt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return Z!==r.R16F&&Z!==r.R32F&&Z!==r.RG16F&&Z!==r.RG32F&&Z!==r.RGBA16F&&Z!==r.RGBA32F||e.get("EXT_color_buffer_float"),Z}function M(b,T,B){return y(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==Xt&&b.minFilter!==_n?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function E(b){return b===Xt||b===lc||b===Ga?r.NEAREST:r.LINEAR}function _(b){let T=b.target;T.removeEventListener("dispose",_),(function(B){let $=n.get(B);if($.__webglInit===void 0)return;let D=B.source,Z=p.get(D);if(Z){let F=Z[$.__cacheKey];F.usedTimes--,F.usedTimes===0&&A(B),Object.keys(Z).length===0&&p.delete(D)}n.remove(B)})(T),T.isVideoTexture&&h.delete(T)}function S(b){let T=b.target;T.removeEventListener("dispose",S),(function(B){let $=B.texture,D=n.get(B),Z=n.get($);if(Z.__webglTexture!==void 0&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(D.__webglFramebuffer[F]))for(let G=0;G<D.__webglFramebuffer[F].length;G++)r.deleteFramebuffer(D.__webglFramebuffer[F][G]);else r.deleteFramebuffer(D.__webglFramebuffer[F]);D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer[F])}else{if(Array.isArray(D.__webglFramebuffer))for(let F=0;F<D.__webglFramebuffer.length;F++)r.deleteFramebuffer(D.__webglFramebuffer[F]);else r.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&r.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let F=0;F<D.__webglColorRenderbuffer.length;F++)D.__webglColorRenderbuffer[F]&&r.deleteRenderbuffer(D.__webglColorRenderbuffer[F]);D.__webglDepthRenderbuffer&&r.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(B.isWebGLMultipleRenderTargets)for(let F=0,G=$.length;F<G;F++){let H=n.get($[F]);H.__webglTexture&&(r.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove($[F])}n.remove($),n.remove(B)})(T)}function A(b){let T=n.get(b);r.deleteTexture(T.__webglTexture);let B=b.source;delete p.get(B)[T.__cacheKey],a.memory.textures--}let w=0;function R(b,T){let B=n.get(b);if(b.isVideoTexture&&(function($){let D=a.render.frame;h.get($)!==D&&(h.set($,D),$.update())})(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){let $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if($.complete!==!1)return void Q(B,b,T);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+T)}let O={[Co]:r.REPEAT,[Fn]:r.CLAMP_TO_EDGE,[Ro]:r.MIRRORED_REPEAT},L={[Xt]:r.NEAREST,[lc]:r.NEAREST_MIPMAP_NEAREST,[Ga]:r.NEAREST_MIPMAP_LINEAR,[_n]:r.LINEAR,[ud]:r.LINEAR_MIPMAP_NEAREST,[Fs]:r.LINEAR_MIPMAP_LINEAR},U={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function N(b,T,B){if(B?(r.texParameteri(b,r.TEXTURE_WRAP_S,O[T.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,O[T.wrapT]),b!==r.TEXTURE_3D&&b!==r.TEXTURE_2D_ARRAY||r.texParameteri(b,r.TEXTURE_WRAP_R,O[T.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,L[T.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,L[T.minFilter])):(r.texParameteri(b,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(b,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),b!==r.TEXTURE_3D&&b!==r.TEXTURE_2D_ARRAY||r.texParameteri(b,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),T.wrapS===Fn&&T.wrapT===Fn||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,r.TEXTURE_MAG_FILTER,E(T.magFilter)),r.texParameteri(b,r.TEXTURE_MIN_FILTER,E(T.minFilter)),T.minFilter!==Xt&&T.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let $=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Xt||T.minFilter!==Ga&&T.minFilter!==Fs||T.type===Zn&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===Br&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function k(b,T){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",_));let $=T.source,D=p.get($);D===void 0&&(D={},p.set($,D));let Z=(function(F){let G=[];return G.push(F.wrapS),G.push(F.wrapT),G.push(F.wrapR||0),G.push(F.magFilter),G.push(F.minFilter),G.push(F.anisotropy),G.push(F.internalFormat),G.push(F.format),G.push(F.type),G.push(F.generateMipmaps),G.push(F.premultiplyAlpha),G.push(F.flipY),G.push(F.unpackAlignment),G.push(F.colorSpace),G.join()})(T);if(Z!==b.__cacheKey){D[Z]===void 0&&(D[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),D[Z].usedTimes++;let F=D[b.__cacheKey];F!==void 0&&(D[b.__cacheKey].usedTimes--,F.usedTimes===0&&A(T)),b.__cacheKey=Z,b.__webglTexture=D[Z].texture}return B}function Q(b,T,B){let $=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&($=r.TEXTURE_3D);let D=k(b,T),Z=T.source;t.bindTexture($,b.__webglTexture,r.TEXTURE0+B);let F=n.get(Z);if(Z.version!==F.__version||D===!0){t.activeTexture(r.TEXTURE0+B);let G=ut.getPrimaries(ut.workingColorSpace),H=T.colorSpace===An?null:ut.getPrimaries(T.colorSpace),se=T.colorSpace===An||G===H?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ne=(function(ge){return!o&&(ge.wrapS!==Fn||ge.wrapT!==Fn||ge.minFilter!==Xt&&ge.minFilter!==_n)})(T)&&f(T.image)===!1,C=g(T.image,ne,!1,i.maxTextureSize);C=re(T,C);let oe=f(C)||o,z=s.convert(T.format,T.colorSpace),X,W=s.convert(T.type),ue=x(T.internalFormat,z,W,T.colorSpace,T.isVideoTexture);N($,T,oe);let pe=T.mipmaps,_e=o&&T.isVideoTexture!==!0&&ue!==jh,Ue=F.__version===void 0||D===!0,ae=M(T,C,oe);if(T.isDepthTexture)ue=r.DEPTH_COMPONENT,o?ue=T.type===Zn?r.DEPTH_COMPONENT32F:T.type===Yn?r.DEPTH_COMPONENT24:T.type===_i?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:T.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Mi&&ue===r.DEPTH_COMPONENT&&T.type!==wl&&T.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Yn,W=s.convert(T.type)),T.format===tr&&ue===r.DEPTH_COMPONENT&&(ue=r.DEPTH_STENCIL,T.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=_i,W=s.convert(T.type))),Ue&&(_e?t.texStorage2D(r.TEXTURE_2D,1,ue,C.width,C.height):t.texImage2D(r.TEXTURE_2D,0,ue,C.width,C.height,0,z,W,null));else if(T.isDataTexture)if(pe.length>0&&oe){_e&&Ue&&t.texStorage2D(r.TEXTURE_2D,ae,ue,pe[0].width,pe[0].height);for(let ge=0,Le=pe.length;ge<Le;ge++)X=pe[ge],_e?t.texSubImage2D(r.TEXTURE_2D,ge,0,0,X.width,X.height,z,W,X.data):t.texImage2D(r.TEXTURE_2D,ge,ue,X.width,X.height,0,z,W,X.data);T.generateMipmaps=!1}else _e?(Ue&&t.texStorage2D(r.TEXTURE_2D,ae,ue,C.width,C.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,C.width,C.height,z,W,C.data)):t.texImage2D(r.TEXTURE_2D,0,ue,C.width,C.height,0,z,W,C.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){_e&&Ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,ue,pe[0].width,pe[0].height,C.depth);for(let ge=0,Le=pe.length;ge<Le;ge++)X=pe[ge],T.format!==En?z!==null?_e?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,X.width,X.height,C.depth,z,X.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ge,ue,X.width,X.height,C.depth,0,X.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,X.width,X.height,C.depth,z,W,X.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ge,ue,X.width,X.height,C.depth,0,z,W,X.data)}else{_e&&Ue&&t.texStorage2D(r.TEXTURE_2D,ae,ue,pe[0].width,pe[0].height);for(let ge=0,Le=pe.length;ge<Le;ge++)X=pe[ge],T.format!==En?z!==null?_e?t.compressedTexSubImage2D(r.TEXTURE_2D,ge,0,0,X.width,X.height,z,X.data):t.compressedTexImage2D(r.TEXTURE_2D,ge,ue,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?t.texSubImage2D(r.TEXTURE_2D,ge,0,0,X.width,X.height,z,W,X.data):t.texImage2D(r.TEXTURE_2D,ge,ue,X.width,X.height,0,z,W,X.data)}else if(T.isDataArrayTexture)_e?(Ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,ue,C.width,C.height,C.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,C.width,C.height,C.depth,z,W,C.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ue,C.width,C.height,C.depth,0,z,W,C.data);else if(T.isData3DTexture)_e?(Ue&&t.texStorage3D(r.TEXTURE_3D,ae,ue,C.width,C.height,C.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,C.width,C.height,C.depth,z,W,C.data)):t.texImage3D(r.TEXTURE_3D,0,ue,C.width,C.height,C.depth,0,z,W,C.data);else if(T.isFramebufferTexture){if(Ue)if(_e)t.texStorage2D(r.TEXTURE_2D,ae,ue,C.width,C.height);else{let ge=C.width,Le=C.height;for(let ke=0;ke<ae;ke++)t.texImage2D(r.TEXTURE_2D,ke,ue,ge,Le,0,z,W,null),ge>>=1,Le>>=1}}else if(pe.length>0&&oe){_e&&Ue&&t.texStorage2D(r.TEXTURE_2D,ae,ue,pe[0].width,pe[0].height);for(let ge=0,Le=pe.length;ge<Le;ge++)X=pe[ge],_e?t.texSubImage2D(r.TEXTURE_2D,ge,0,0,z,W,X):t.texImage2D(r.TEXTURE_2D,ge,ue,z,W,X);T.generateMipmaps=!1}else _e?(Ue&&t.texStorage2D(r.TEXTURE_2D,ae,ue,C.width,C.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,z,W,C)):t.texImage2D(r.TEXTURE_2D,0,ue,z,W,C);y(T,oe)&&m($),F.__version=Z.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function Y(b,T,B,$,D,Z){let F=s.convert(B.format,B.colorSpace),G=s.convert(B.type),H=x(B.internalFormat,F,G,B.colorSpace);if(!n.get(T).__hasExternalTextures){let se=Math.max(1,T.width>>Z),ne=Math.max(1,T.height>>Z);D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?t.texImage3D(D,Z,H,se,ne,T.depth,0,F,G,null):t.texImage2D(D,Z,H,se,ne,0,F,G,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),j(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,D,n.get(B).__webglTexture,0,V(T)):(D===r.TEXTURE_2D||D>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&D<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,D,n.get(B).__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ee(b,T,B){if(r.bindRenderbuffer(r.RENDERBUFFER,b),T.depthBuffer&&!T.stencilBuffer){let $=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(B||j(T)){let D=T.depthTexture;D&&D.isDepthTexture&&(D.type===Zn?$=r.DEPTH_COMPONENT32F:D.type===Yn&&($=r.DEPTH_COMPONENT24));let Z=V(T);j(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,$,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,$,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,$,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,b)}else if(T.depthBuffer&&T.stencilBuffer){let $=V(T);B&&j(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$,r.DEPTH24_STENCIL8,T.width,T.height):j(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,b)}else{let $=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let D=0;D<$.length;D++){let Z=$[D],F=s.convert(Z.format,Z.colorSpace),G=s.convert(Z.type),H=x(Z.internalFormat,F,G,Z.colorSpace),se=V(T);B&&j(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,H,T.width,T.height):j(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,H,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,H,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function K(b){let T=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");(function($,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,$),!D.depthTexture||!D.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(D.depthTexture).__webglTexture&&D.depthTexture.image.width===D.width&&D.depthTexture.image.height===D.height||(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),R(D.depthTexture,0);let Z=n.get(D.depthTexture).__webglTexture,F=V(D);if(D.depthTexture.format===Mi)j(D)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,F):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else{if(D.depthTexture.format!==tr)throw new Error("Unknown depthTexture format");j(D)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,F):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0)}})(T.__webglFramebuffer,b)}else if(B){T.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[$]),T.__webglDepthbuffer[$]=r.createRenderbuffer(),ee(T.__webglDepthbuffer[$],b,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),ee(T.__webglDepthbuffer,b,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function V(b){return Math.min(i.maxSamples,b.samples)}function j(b){let T=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function re(b,T){let B=b.colorSpace,$=b.format,D=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Po||B!==Bn&&B!==An&&(ut.getTransfer(B)===xt?o===!1?e.has("EXT_sRGB")===!0&&$===En?(b.format=Po,b.minFilter=_n,b.generateMipmaps=!1):T=qs.sRGBToLinear(T):$===En&&D===yi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}this.allocateTextureUnit=function(){let b=w;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),w+=1,b},this.resetTextureUnits=function(){w=0},this.setTexture2D=R,this.setTexture2DArray=function(b,T){let B=n.get(b);b.version>0&&B.__version!==b.version?Q(B,b,T):t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+T)},this.setTexture3D=function(b,T){let B=n.get(b);b.version>0&&B.__version!==b.version?Q(B,b,T):t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+T)},this.setTextureCube=function(b,T){let B=n.get(b);b.version>0&&B.__version!==b.version?(function($,D,Z){if(D.image.length!==6)return;let F=k($,D),G=D.source;t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+Z);let H=n.get(G);if(G.version!==H.__version||F===!0){t.activeTexture(r.TEXTURE0+Z);let se=ut.getPrimaries(ut.workingColorSpace),ne=D.colorSpace===An?null:ut.getPrimaries(D.colorSpace),C=D.colorSpace===An||se===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);let oe=D.isCompressedTexture||D.image[0].isCompressedTexture,z=D.image[0]&&D.image[0].isDataTexture,X=[];for(let be=0;be<6;be++)X[be]=oe||z?z?D.image[be].image:D.image[be]:g(D.image[be],!1,!0,i.maxCubemapSize),X[be]=re(D,X[be]);let W=X[0],ue=f(W)||o,pe=s.convert(D.format,D.colorSpace),_e=s.convert(D.type),Ue=x(D.internalFormat,pe,_e,D.colorSpace),ae=o&&D.isVideoTexture!==!0,ge=H.__version===void 0||F===!0,Le,ke=M(D,W,ue);if(N(r.TEXTURE_CUBE_MAP,D,ue),oe){ae&&ge&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,Ue,W.width,W.height);for(let be=0;be<6;be++){Le=X[be].mipmaps;for(let Oe=0;Oe<Le.length;Oe++){let Re=Le[Oe];D.format!==En?pe!==null?ae?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe,0,0,Re.width,Re.height,pe,Re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe,Ue,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe,0,0,Re.width,Re.height,pe,_e,Re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe,Ue,Re.width,Re.height,0,pe,_e,Re.data)}}}else{Le=D.mipmaps,ae&&ge&&(Le.length>0&&ke++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,Ue,X[0].width,X[0].height));for(let be=0;be<6;be++)if(z){ae?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,X[be].width,X[be].height,pe,_e,X[be].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ue,X[be].width,X[be].height,0,pe,_e,X[be].data);for(let Oe=0;Oe<Le.length;Oe++){let Re=Le[Oe].image[be].image;ae?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe+1,0,0,Re.width,Re.height,pe,_e,Re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe+1,Ue,Re.width,Re.height,0,pe,_e,Re.data)}}else{ae?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,pe,_e,X[be]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ue,pe,_e,X[be]);for(let Oe=0;Oe<Le.length;Oe++){let Re=Le[Oe];ae?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe+1,0,0,pe,_e,Re.image[be]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe+1,Ue,pe,_e,Re.image[be])}}}y(D,ue)&&m(r.TEXTURE_CUBE_MAP),H.__version=G.version,D.onUpdate&&D.onUpdate(D)}$.__version=D.version})(B,b,T):t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+T)},this.rebindTextures=function(b,T,B){let $=n.get(b);T!==void 0&&Y($.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&K(b)},this.setupRenderTarget=function(b){let T=b.texture,B=n.get(b),$=n.get(T);b.addEventListener("dispose",S),b.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=T.version,a.memory.textures++);let D=b.isWebGLCubeRenderTarget===!0,Z=b.isWebGLMultipleRenderTargets===!0,F=f(b)||o;if(D){B.__webglFramebuffer=[];for(let G=0;G<6;G++)if(o&&T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[G]=[];for(let H=0;H<T.mipmaps.length;H++)B.__webglFramebuffer[G][H]=r.createFramebuffer()}else B.__webglFramebuffer[G]=r.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let G=0;G<T.mipmaps.length;G++)B.__webglFramebuffer[G]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(Z)if(i.drawBuffers){let G=b.texture;for(let H=0,se=G.length;H<se;H++){let ne=n.get(G[H]);ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&j(b)===!1){let G=Z?T:[T];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let H=0;H<G.length;H++){let se=G[H];B.__webglColorRenderbuffer[H]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[H]);let ne=s.convert(se.format,se.colorSpace),C=s.convert(se.type),oe=x(se.internalFormat,ne,C,se.colorSpace,b.isXRRenderTarget===!0),z=V(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,z,oe,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+H,r.RENDERBUFFER,B.__webglColorRenderbuffer[H])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),ee(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(D){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),N(r.TEXTURE_CUBE_MAP,T,F);for(let G=0;G<6;G++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let H=0;H<T.mipmaps.length;H++)Y(B.__webglFramebuffer[G][H],b,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+G,H);else Y(B.__webglFramebuffer[G],b,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);y(T,F)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){let G=b.texture;for(let H=0,se=G.length;H<se;H++){let ne=G[H],C=n.get(ne);t.bindTexture(r.TEXTURE_2D,C.__webglTexture),N(r.TEXTURE_2D,ne,F),Y(B.__webglFramebuffer,b,ne,r.COLOR_ATTACHMENT0+H,r.TEXTURE_2D,0),y(ne,F)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let G=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?G=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(G,$.__webglTexture),N(G,T,F),o&&T.mipmaps&&T.mipmaps.length>0)for(let H=0;H<T.mipmaps.length;H++)Y(B.__webglFramebuffer[H],b,T,r.COLOR_ATTACHMENT0,G,H);else Y(B.__webglFramebuffer,b,T,r.COLOR_ATTACHMENT0,G,0);y(T,F)&&m(G),t.unbindTexture()}b.depthBuffer&&K(b)},this.updateRenderTargetMipmap=function(b){let T=f(b)||o,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let $=0,D=B.length;$<D;$++){let Z=B[$];if(y(Z,T)){let F=b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,G=n.get(Z).__webglTexture;t.bindTexture(F,G),m(F),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(b){if(o&&b.samples>0&&j(b)===!1){let T=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,$=b.height,D=r.COLOR_BUFFER_BIT,Z=[],F=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,G=n.get(b),H=b.isWebGLMultipleRenderTargets===!0;if(H)for(let se=0;se<T.length;se++)t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,G.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,G.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,G.__webglFramebuffer);for(let se=0;se<T.length;se++){Z.push(r.COLOR_ATTACHMENT0+se),b.depthBuffer&&Z.push(F);let ne=G.__ignoreDepthValues!==void 0&&G.__ignoreDepthValues;if(ne===!1&&(b.depthBuffer&&(D|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&(D|=r.STENCIL_BUFFER_BIT)),H&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,G.__webglColorRenderbuffer[se]),ne===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[F]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[F])),H){let C=n.get(T[se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,C,0)}r.blitFramebuffer(0,0,B,$,0,0,B,$,D,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),H)for(let se=0;se<T.length;se++){t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,G.__webglColorRenderbuffer[se]);let ne=n.get(T[se]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,G.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,G.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=j}function ef(r,e,t){let n=t.isWebGL2;return{convert:function(i,s=""){let a,o=ut.getTransfer(s);if(i===yi)return r.UNSIGNED_BYTE;if(i===Gh)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Vh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===wl)return r.UNSIGNED_SHORT;if(i===kh)return r.INT;if(i===Yn)return r.UNSIGNED_INT;if(i===Zn)return r.FLOAT;if(i===Br)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===1021)return r.ALPHA;if(i===En)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===Mi)return r.DEPTH_COMPONENT;if(i===tr)return r.DEPTH_STENCIL;if(i===Po)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===1028)return r.RED;if(i===Hh)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===Wh)return r.RG_INTEGER;if(i===Xh)return r.RGBA_INTEGER;if(i===Va||i===Ha||i===Wa||i===Xa)if(o===xt){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===Va)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===Va)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ha)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===cc||i===hc||i===uc||i===dc){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===cc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===jh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===pc||i===fc){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===pc)return o===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===fc)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(i===mc||i===gc||i===vc||i===xc||i===yc||i===_c||i===Mc||i===bc||i===Sc||i===wc||i===Tc||i===Ec||i===Ac||i===Cc){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===mc)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gc)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vc)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yc)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_c)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mc)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sc)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wc)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tc)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ec)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ac)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cc)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===ja||i===Rc||i===Pc){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(i===ja)return o===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===Lc||i===Ic||i===Uc){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(i===ja)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Lc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ic)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===_i?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}var Xo=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Xe=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},tf={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let f=t.getJointPose(g,n),y=this._getHandJoint(c,g);f!==null&&(y.matrix.fromArray(f.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=f.radius),y.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,v=.005;c.inputState.pinching&&p>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jo=class extends Qn{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,d=null,v=null,g=t.getContextAttributes(),f=null,y=null,m=[],x=[],M=new ye,E=null,_=new Kt;_.layers.enable(1),_.viewport=new Rt;let S=new Kt;S.layers.enable(2),S.viewport=new Rt;let A=[_,S],w=new Xo;w.layers.enable(1),w.layers.enable(2);let R=null,O=null;function L(V){let j=x.indexOf(V.inputSource);if(j===-1)return;let re=m[j];re!==void 0&&(re.update(V.inputSource,V.frame,c||a),re.dispatchEvent({type:V.type,data:V.inputSource}))}function U(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",N);for(let V=0;V<m.length;V++){let j=x[V];j!==null&&(x[V]=null,m[V].disconnect(j))}R=null,O=null,e.setRenderTarget(f),d=null,p=null,u=null,i=null,y=null,K.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}function N(V){for(let j=0;j<V.removed.length;j++){let re=V.removed[j],b=x.indexOf(re);b>=0&&(x[b]=null,m[b].disconnect(re))}for(let j=0;j<V.added.length;j++){let re=V.added[j],b=x.indexOf(re);if(b===-1){for(let B=0;B<m.length;B++){if(B>=x.length){x.push(re),b=B;break}if(x[B]===null){x[B]=re,b=B;break}}if(b===-1)break}let T=m[b];T&&T.connect(re)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=m[V];return j===void 0&&(j=new Nr,m[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=m[V];return j===void 0&&(j=new Nr,m[V]=j),j.getGripSpace()},this.getHand=function(V){let j=m[V];return j===void 0&&(j=new Nr,m[V]=j),j.getHandSpace()},this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",U),i.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:i.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new kn(d.framebufferWidth,d.framebufferHeight,{format:En,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let j=null,re=null,b=null;g.depth&&(b=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=g.stencil?tr:Mi,re=g.stencil?_i:Yn);let T={colorFormat:t.RGBA8,depthFormat:b,scaleFactor:s};u=new XRWebGLBinding(i,t),p=u.createProjectionLayer(T),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new kn(p.textureWidth,p.textureHeight,{format:En,type:yi,depthTexture:new ea(p.textureWidth,p.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0}),e.properties.get(y).__ignoreDepthValues=p.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};let k=new P,Q=new P;function Y(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;w.near=S.near=_.near=V.near,w.far=S.far=_.far=V.far,R===w.near&&O===w.far||(i.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,O=w.far);let j=V.parent,re=w.cameras;Y(w,j);for(let b=0;b<re.length;b++)Y(re[b],j);re.length===2?(function(b,T,B){k.setFromMatrixPosition(T.matrixWorld),Q.setFromMatrixPosition(B.matrixWorld);let $=k.distanceTo(Q),D=T.projectionMatrix.elements,Z=B.projectionMatrix.elements,F=D[14]/(D[10]-1),G=D[14]/(D[10]+1),H=(D[9]+1)/D[5],se=(D[9]-1)/D[5],ne=(D[8]-1)/D[0],C=(Z[8]+1)/Z[0],oe=F*ne,z=F*C,X=$/(-ne+C),W=X*-ne;T.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(W),b.translateZ(X),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();let ue=F+X,pe=G+X,_e=oe-W,Ue=z+($-W),ae=H*G/pe*ue,ge=se*G/pe*ue;b.projectionMatrix.makePerspective(_e,Ue,ae,ge,ue,pe),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()})(w,_,S):w.projectionMatrix.copy(_.projectionMatrix),(function(b,T,B){B===null?b.matrix.copy(T.matrixWorld):(b.matrix.copy(B.matrixWorld),b.matrix.invert(),b.matrix.multiply(T.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(T.projectionMatrix),b.projectionMatrixInverse.copy(T.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=2*kr*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)})(V,w,j)},this.getCamera=function(){return w},this.getFoveation=function(){if(p!==null||d!==null)return l},this.setFoveation=function(V){l=V,p!==null&&(p.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)};let ee=null,K=new $h;K.setAnimationLoop((function(V,j){if(h=j.getViewerPose(c||a),v=j,h!==null){let re=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let b=!1;re.length!==w.cameras.length&&(w.cameras.length=0,b=!0);for(let T=0;T<re.length;T++){let B=re[T],$=null;if(d!==null)$=d.getViewport(B);else{let Z=u.getViewSubImage(p,B);$=Z.viewport,T===0&&(e.setRenderTargetTextures(y,Z.colorTexture,p.ignoreDepthValues?void 0:Z.depthStencilTexture),e.setRenderTarget(y))}let D=A[T];D===void 0&&(D=new Kt,D.layers.enable(T),D.viewport=new Rt,A[T]=D),D.matrix.fromArray(B.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(B.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set($.x,$.y,$.width,$.height),T===0&&(w.matrix.copy(D.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),b===!0&&w.cameras.push(D)}}for(let re=0;re<m.length;re++){let b=x[re],T=m[re];b!==null&&T!==void 0&&T.update(b,j,c||a)}ee&&ee(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),v=null})),this.setAnimationLoop=function(V){ee=V},this.dispose=function(){}}};function nf(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===qt&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===qt&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(i.envMap.value=a,i.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap){i.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,i.lightMapTransform)}s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Kh(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===qt&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(c,h,u,p){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*p,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function rf(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(u,p,d,v){let g=u.value,f=p+"_"+d;if(v[f]===void 0)return v[f]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let y=v[f];if(typeof g=="number"||typeof g=="boolean"){if(y!==g)return v[f]=g,!0}else if(y.equals(g)===!1)return y.copy(g),!0}return!1}function c(u){let p={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(p.boundary=4,p.storage=4):u.isVector2?(p.boundary=8,p.storage=8):u.isVector3||u.isColor?(p.boundary=16,p.storage=12):u.isVector4?(p.boundary=16,p.storage=16):u.isMatrix3?(p.boundary=48,p.storage=48):u.isMatrix4?(p.boundary=64,p.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),p}function h(u){let p=u.target;p.removeEventListener("dispose",h);let d=a.indexOf(p.__bindingPointIndex);a.splice(d,1),r.deleteBuffer(i[p.id]),delete i[p.id],delete s[p.id]}return{bind:function(u,p){let d=p.program;n.uniformBlockBinding(u,d)},update:function(u,p){let d=i[u.id];d===void 0&&((function(f){let y=f.uniforms,m=0,x=16;for(let E=0,_=y.length;E<_;E++){let S=Array.isArray(y[E])?y[E]:[y[E]];for(let A=0,w=S.length;A<w;A++){let R=S[A],O=Array.isArray(R.value)?R.value:[R.value];for(let L=0,U=O.length;L<U;L++){let N=c(O[L]),k=m%x;k!==0&&x-k<N.boundary&&(m+=x-k),R.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=m,m+=N.storage}}}let M=m%x;M>0&&(m+=x-M),f.__size=m,f.__cache={}})(u),d=(function(f){let y=(function(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=y;let m=r.createBuffer(),x=f.__size,M=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,m),r.bufferData(r.UNIFORM_BUFFER,x,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,m),m})(u),i[u.id]=d,u.addEventListener("dispose",h));let v=p.program;n.updateUBOMapping(u,v);let g=e.render.frame;s[u.id]!==g&&((function(f){let y=i[f.id],m=f.uniforms,x=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let M=0,E=m.length;M<E;M++){let _=Array.isArray(m[M])?m[M]:[m[M]];for(let S=0,A=_.length;S<A;S++){let w=_[S];if(l(w,M,S,x)===!0){let R=w.__offset,O=Array.isArray(w.value)?w.value:[w.value],L=0;for(let U=0;U<O.length;U++){let N=O[U],k=c(N);typeof N=="number"||typeof N=="boolean"?(w.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,R+L,w.__data)):N.isMatrix3?(w.__data[0]=N.elements[0],w.__data[1]=N.elements[1],w.__data[2]=N.elements[2],w.__data[3]=0,w.__data[4]=N.elements[3],w.__data[5]=N.elements[4],w.__data[6]=N.elements[5],w.__data[7]=0,w.__data[8]=N.elements[6],w.__data[9]=N.elements[7],w.__data[10]=N.elements[8],w.__data[11]=0):(N.toArray(w.__data,L),L+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,R,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=g)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var wi=class{constructor(e={}){let{canvas:t=dd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,p;this.isWebGLRenderer=!0,p=n!==null?n.getContextAttributes().alpha:a;let d=new Uint32Array(4),v=new Int32Array(4),g=null,f=null,y=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this._useLegacyLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1;let x=this,M=!1,E=0,_=0,S=null,A=-1,w=null,R=new Rt,O=new Rt,L=null,U=new ze(0),N=0,k=t.width,Q=t.height,Y=1,ee=null,K=null,V=new Rt(0,0,k,Q),j=new Rt(0,0,k,Q),re=!1,b=new sr,T=!1,B=!1,$=null,D=new Ze,Z=new ye,F=new P,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function H(){return S===null?Y:1}let se,ne,C,oe,z,X,W,ue,pe,_e,Ue,ae,ge,Le,ke,be,Oe,Re,ht,gt,dt,at,ot,vt,le=n;function Et(I,te){for(let de=0;de<I.length;de++){let he=I[de],ce=t.getContext(he,te);if(ce!==null)return ce}return null}try{let I={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",ie,!1),le===null){let te=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&te.shift(),le=Et(te,I),le===null)throw Et(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&le instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),le.getShaderPrecisionFormat===void 0&&(le.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}function wt(){se=new Fd(le),ne=new Dd(le,se,e),se.init(ne),at=new ef(le,se,ne),C=new $p(le,se,ne),oe=new Gd(le),z=new Hp,X=new Qp(le,se,C,z,ne,at,oe),W=new Od(x),ue=new zd(x),pe=new Pd(le,ne),ot=new Id(le,se,pe,ne),_e=new Bd(le,pe,oe,ot),Ue=new Xd(le,_e,pe,oe),ht=new Wd(le,ne,X),be=new Nd(z),ae=new Vp(x,W,ue,se,ne,ot,be),ge=new nf(x,z),Le=new Xp,ke=new Jp(se,ne),Re=new Ld(x,W,ue,C,Ue,p,l),Oe=new Kp(x,Ue,ne),vt=new rf(le,oe,ne,C),gt=new Ud(le,se,oe,ne),dt=new kd(le,se,oe,ne),oe.programs=ae.programs,x.capabilities=ne,x.extensions=se,x.properties=z,x.renderLists=Le,x.shadowMap=Oe,x.state=C,x.info=oe}wt();let lt=new jo(x,le);function q(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let I=oe.autoReset,te=Oe.enabled,de=Oe.autoUpdate,he=Oe.needsUpdate,ce=Oe.type;wt(),oe.autoReset=I,Oe.enabled=te,Oe.autoUpdate=de,Oe.needsUpdate=he,Oe.type=ce}function ie(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function me(I){let te=I.target;te.removeEventListener("dispose",me),(function(de){(function(he){let ce=z.get(he).programs;ce!==void 0&&(ce.forEach((function(ve){ae.releaseProgram(ve)})),he.isShaderMaterial&&ae.releaseShaderCache(he))})(de),z.remove(de)})(te)}function xe(I,te,de){I.transparent===!0&&I.side===2&&I.forceSinglePass===!1?(I.side=qt,I.needsUpdate=!0,Ge(I,te,de),I.side=$n,I.needsUpdate=!0,Ge(I,te,de),I.side=2):Ge(I,te,de)}this.xr=lt,this.getContext=function(){return le},this.getContextAttributes=function(){return le.getContextAttributes()},this.forceContextLoss=function(){let I=se.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=se.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(I){I!==void 0&&(Y=I,this.setSize(k,Q,!1))},this.getSize=function(I){return I.set(k,Q)},this.setSize=function(I,te,de=!0){lt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(k=I,Q=te,t.width=Math.floor(I*Y),t.height=Math.floor(te*Y),de===!0&&(t.style.width=I+"px",t.style.height=te+"px"),this.setViewport(0,0,I,te))},this.getDrawingBufferSize=function(I){return I.set(k*Y,Q*Y).floor()},this.setDrawingBufferSize=function(I,te,de){k=I,Q=te,Y=de,t.width=Math.floor(I*de),t.height=Math.floor(te*de),this.setViewport(0,0,I,te)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(V)},this.setViewport=function(I,te,de,he){I.isVector4?V.set(I.x,I.y,I.z,I.w):V.set(I,te,de,he),C.viewport(R.copy(V).multiplyScalar(Y).floor())},this.getScissor=function(I){return I.copy(j)},this.setScissor=function(I,te,de,he){I.isVector4?j.set(I.x,I.y,I.z,I.w):j.set(I,te,de,he),C.scissor(O.copy(j).multiplyScalar(Y).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(I){C.setScissorTest(re=I)},this.setOpaqueSort=function(I){ee=I},this.setTransparentSort=function(I){K=I},this.getClearColor=function(I){return I.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(I=!0,te=!0,de=!0){let he=0;if(I){let ce=!1;if(S!==null){let ve=S.texture.format;ce=ve===Xh||ve===Wh||ve===Hh}if(ce){let ve=S.texture.type,Ee=ve===yi||ve===Yn||ve===wl||ve===_i||ve===Gh||ve===Vh,De=Re.getClearColor(),Ne=Re.getClearAlpha(),He=De.r,We=De.g,qe=De.b;Ee?(d[0]=He,d[1]=We,d[2]=qe,d[3]=Ne,le.clearBufferuiv(le.COLOR,0,d)):(v[0]=He,v[1]=We,v[2]=qe,v[3]=Ne,le.clearBufferiv(le.COLOR,0,v))}else he|=le.COLOR_BUFFER_BIT}te&&(he|=le.DEPTH_BUFFER_BIT),de&&(he|=le.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),Le.dispose(),ke.dispose(),z.dispose(),W.dispose(),ue.dispose(),Ue.dispose(),ot.dispose(),vt.dispose(),ae.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Be),lt.removeEventListener("sessionend",fe),$&&($.dispose(),$=null),Pe.stop()},this.renderBufferDirect=function(I,te,de,he,ce,ve){te===null&&(te=G);let Ee=ce.isMesh&&ce.matrixWorld.determinant()<0,De=(function(Lt,nn,jt,nt,it){nn.isScene!==!0&&(nn=G),X.resetTextureUnits();let Sr=nn.fog,Oa=nt.isMeshStandardMaterial?nn.environment:null,ju=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Bn,ss=(nt.isMeshStandardMaterial?ue:W).get(nt.envMap||Oa),qu=nt.vertexColors===!0&&!!jt.attributes.color&&jt.attributes.color.itemSize===4,Yu=!!jt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Zu=!!jt.morphAttributes.position,Ju=!!jt.morphAttributes.normal,Ku=!!jt.morphAttributes.color,tc=Jn;nt.toneMapped&&(S!==null&&S.isXRRenderTarget!==!0||(tc=x.toneMapping));let nc=jt.morphAttributes.position||jt.morphAttributes.normal||jt.morphAttributes.color,$u=nc!==void 0?nc.length:0,st=z.get(nt),Qu=f.state.lights;if(T===!0&&(B===!0||Lt!==w)){let rn=Lt===w&&nt.id===A;be.setState(nt,Lt,rn)}let mn=!1;nt.version===st.__version?st.needsLights&&st.lightsStateVersion!==Qu.state.version||st.outputColorSpace!==ju||it.isBatchedMesh&&st.batching===!1?mn=!0:it.isBatchedMesh||st.batching!==!0?it.isInstancedMesh&&st.instancing===!1?mn=!0:it.isInstancedMesh||st.instancing!==!0?it.isSkinnedMesh&&st.skinning===!1?mn=!0:it.isSkinnedMesh||st.skinning!==!0?it.isInstancedMesh&&st.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&st.instancingColor===!1&&it.instanceColor!==null||st.envMap!==ss||nt.fog===!0&&st.fog!==Sr?mn=!0:st.numClippingPlanes===void 0||st.numClippingPlanes===be.numPlanes&&st.numIntersection===be.numIntersection?(st.vertexAlphas!==qu||st.vertexTangents!==Yu||st.morphTargets!==Zu||st.morphNormals!==Ju||st.morphColors!==Ku||st.toneMapping!==tc||ne.isWebGL2===!0&&st.morphTargetsCount!==$u)&&(mn=!0):mn=!0:mn=!0:mn=!0:mn=!0:(mn=!0,st.__version=nt.version);let oi=st.currentProgram;mn===!0&&(oi=Ge(nt,nn,it));let ic=!1,wr=!1,za=!1,Bt=oi.getUniforms(),li=st.uniforms;if(C.useProgram(oi.program)&&(ic=!0,wr=!0,za=!0),nt.id!==A&&(A=nt.id,wr=!0),ic||w!==Lt){Bt.setValue(le,"projectionMatrix",Lt.projectionMatrix),Bt.setValue(le,"viewMatrix",Lt.matrixWorldInverse);let rn=Bt.map.cameraPosition;rn!==void 0&&rn.setValue(le,F.setFromMatrixPosition(Lt.matrixWorld)),ne.logarithmicDepthBuffer&&Bt.setValue(le,"logDepthBufFC",2/(Math.log(Lt.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Bt.setValue(le,"isOrthographic",Lt.isOrthographicCamera===!0),w!==Lt&&(w=Lt,wr=!0,za=!0)}if(it.isSkinnedMesh){Bt.setOptional(le,it,"bindMatrix"),Bt.setOptional(le,it,"bindMatrixInverse");let rn=it.skeleton;rn&&(ne.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Bt.setValue(le,"boneTexture",rn.boneTexture,X)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}it.isBatchedMesh&&(Bt.setOptional(le,it,"batchingTexture"),Bt.setValue(le,"batchingTexture",it._matricesTexture,X));let Fa=jt.morphAttributes;(Fa.position!==void 0||Fa.normal!==void 0||Fa.color!==void 0&&ne.isWebGL2===!0)&&ht.update(it,jt,oi),(wr||st.receiveShadow!==it.receiveShadow)&&(st.receiveShadow=it.receiveShadow,Bt.setValue(le,"receiveShadow",it.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(li.envMap.value=ss,li.flipEnvMap.value=ss.isCubeTexture&&ss.isRenderTargetTexture===!1?-1:1),wr&&(Bt.setValue(le,"toneMappingExposure",x.toneMappingExposure),st.needsLights&&(gn=za,(wn=li).ambientLightColor.needsUpdate=gn,wn.lightProbe.needsUpdate=gn,wn.directionalLights.needsUpdate=gn,wn.directionalLightShadows.needsUpdate=gn,wn.pointLights.needsUpdate=gn,wn.pointLightShadows.needsUpdate=gn,wn.spotLights.needsUpdate=gn,wn.spotLightShadows.needsUpdate=gn,wn.rectAreaLights.needsUpdate=gn,wn.hemisphereLights.needsUpdate=gn),Sr&&nt.fog===!0&&ge.refreshFogUniforms(li,Sr),ge.refreshMaterialUniforms(li,nt,Y,Q,$),$i.upload(le,je(st),li,X));var wn,gn;if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&($i.upload(le,je(st),li,X),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Bt.setValue(le,"center",it.center),Bt.setValue(le,"modelViewMatrix",it.modelViewMatrix),Bt.setValue(le,"normalMatrix",it.normalMatrix),Bt.setValue(le,"modelMatrix",it.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){let rn=nt.uniformsGroups;for(let Ba=0,ed=rn.length;Ba<ed;Ba++)if(ne.isWebGL2){let rc=rn[Ba];vt.update(rc,oi),vt.bind(rc,oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return oi})(I,te,de,he,ce);C.setMaterial(he,Ee);let Ne=de.index,He=1;if(he.wireframe===!0){if(Ne=_e.getWireframeAttribute(de),Ne===void 0)return;He=2}let We=de.drawRange,qe=de.attributes.position,ct=We.start*He,Ot=(We.start+We.count)*He;ve!==null&&(ct=Math.max(ct,ve.start*He),Ot=Math.min(Ot,(ve.start+ve.count)*He)),Ne!==null?(ct=Math.max(ct,0),Ot=Math.min(Ot,Ne.count)):qe!=null&&(ct=Math.max(ct,0),Ot=Math.min(Ot,qe.count));let Ft=Ot-ct;if(Ft<0||Ft===1/0)return;let fn;ot.setup(ce,he,De,de,Ne);let pt=gt;if(Ne!==null&&(fn=pe.get(Ne),pt=dt,pt.setIndex(fn)),ce.isMesh)he.wireframe===!0?(C.setLineWidth(he.wireframeLinewidth*H()),pt.setMode(le.LINES)):pt.setMode(le.TRIANGLES);else if(ce.isLine){let Lt=he.linewidth;Lt===void 0&&(Lt=1),C.setLineWidth(Lt*H()),ce.isLineSegments?pt.setMode(le.LINES):ce.isLineLoop?pt.setMode(le.LINE_LOOP):pt.setMode(le.LINE_STRIP)}else ce.isPoints?pt.setMode(le.POINTS):ce.isSprite&&pt.setMode(le.TRIANGLES);if(ce.isBatchedMesh)pt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else if(ce.isInstancedMesh)pt.renderInstances(ct,Ft,ce.count);else if(de.isInstancedBufferGeometry){let Lt=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,nn=Math.min(de.instanceCount,Lt);pt.renderInstances(ct,Ft,nn)}else pt.render(ct,Ft)},this.compile=function(I,te,de=null){de===null&&(de=I),f=ke.get(de),f.init(),m.push(f),de.traverseVisible((function(ce){ce.isLight&&ce.layers.test(te.layers)&&(f.pushLight(ce),ce.castShadow&&f.pushShadow(ce))})),I!==de&&I.traverseVisible((function(ce){ce.isLight&&ce.layers.test(te.layers)&&(f.pushLight(ce),ce.castShadow&&f.pushShadow(ce))})),f.setupLights(x._useLegacyLights);let he=new Set;return I.traverse((function(ce){let ve=ce.material;if(ve)if(Array.isArray(ve))for(let Ee=0;Ee<ve.length;Ee++){let De=ve[Ee];xe(De,de,ce),he.add(De)}else xe(ve,de,ce),he.add(ve)})),m.pop(),f=null,he},this.compileAsync=function(I,te,de=null){let he=this.compile(I,te,de);return new Promise((ce=>{function ve(){he.forEach((function(Ee){z.get(Ee).currentProgram.isReady()&&he.delete(Ee)})),he.size!==0?setTimeout(ve,10):ce(I)}se.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)}))};let Te=null;function Be(){Pe.stop()}function fe(){Pe.start()}let Pe=new $h;function Me(I,te,de,he){if(I.visible===!1)return;if(I.layers.test(te.layers)){if(I.isGroup)de=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(te);else if(I.isLight)f.pushLight(I),I.castShadow&&f.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||b.intersectsSprite(I)){he&&F.setFromMatrixPosition(I.matrixWorld).applyMatrix4(D);let ve=Ue.update(I),Ee=I.material;Ee.visible&&g.push(I,ve,Ee,de,F.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||b.intersectsObject(I))){let ve=Ue.update(I),Ee=I.material;if(he&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),F.copy(I.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),F.copy(ve.boundingSphere.center)),F.applyMatrix4(I.matrixWorld).applyMatrix4(D)),Array.isArray(Ee)){let De=ve.groups;for(let Ne=0,He=De.length;Ne<He;Ne++){let We=De[Ne],qe=Ee[We.materialIndex];qe&&qe.visible&&g.push(I,ve,qe,de,F.z,We)}}else Ee.visible&&g.push(I,ve,Ee,de,F.z,null)}}let ce=I.children;for(let ve=0,Ee=ce.length;ve<Ee;ve++)Me(ce[ve],te,de,he)}function Ae(I,te,de,he){let ce=I.opaque,ve=I.transmissive,Ee=I.transparent;f.setupLightsView(de),T===!0&&be.setGlobalState(x.clippingPlanes,de),ve.length>0&&(function(De,Ne,He,We){if((He.isScene===!0?He.overrideMaterial:null)!==null)return;let ct=ne.isWebGL2;$===null&&($=new kn(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")?Br:yi,minFilter:Fs,samples:ct?4:0})),x.getDrawingBufferSize(Z),ct?$.setSize(Z.x,Z.y):$.setSize(Xs(Z.x),Xs(Z.y));let Ot=x.getRenderTarget();x.setRenderTarget($),x.getClearColor(U),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();let Ft=x.toneMapping;x.toneMapping=Jn,Ve(De,He,We),X.updateMultisampleRenderTarget($),X.updateRenderTargetMipmap($);let fn=!1;for(let pt=0,Lt=Ne.length;pt<Lt;pt++){let nn=Ne[pt],jt=nn.object,nt=nn.geometry,it=nn.material,Sr=nn.group;if(it.side===2&&jt.layers.test(We.layers)){let Oa=it.side;it.side=qt,it.needsUpdate=!0,tt(jt,He,We,nt,it,Sr),it.side=Oa,it.needsUpdate=!0,fn=!0}}fn===!0&&(X.updateMultisampleRenderTarget($),X.updateRenderTargetMipmap($)),x.setRenderTarget(Ot),x.setClearColor(U,N),x.toneMapping=Ft})(ce,ve,te,de),he&&C.viewport(R.copy(he)),ce.length>0&&Ve(ce,te,de),ve.length>0&&Ve(ve,te,de),Ee.length>0&&Ve(Ee,te,de),C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function Ve(I,te,de){let he=te.isScene===!0?te.overrideMaterial:null;for(let ce=0,ve=I.length;ce<ve;ce++){let Ee=I[ce],De=Ee.object,Ne=Ee.geometry,He=he===null?Ee.material:he,We=Ee.group;De.layers.test(de.layers)&&tt(De,te,de,Ne,He,We)}}function tt(I,te,de,he,ce,ve){I.onBeforeRender(x,te,de,he,ce,ve),I.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ce.onBeforeRender(x,te,de,he,I,ve),ce.transparent===!0&&ce.side===2&&ce.forceSinglePass===!1?(ce.side=qt,ce.needsUpdate=!0,x.renderBufferDirect(de,te,he,ce,I,ve),ce.side=$n,ce.needsUpdate=!0,x.renderBufferDirect(de,te,he,ce,I,ve),ce.side=2):x.renderBufferDirect(de,te,he,ce,I,ve),I.onAfterRender(x,te,de,he,ce,ve)}function Ge(I,te,de){te.isScene!==!0&&(te=G);let he=z.get(I),ce=f.state.lights,ve=f.state.shadowsArray,Ee=ce.state.version,De=ae.getParameters(I,ce.state,ve,te,de),Ne=ae.getProgramCacheKey(De),He=he.programs;he.environment=I.isMeshStandardMaterial?te.environment:null,he.fog=te.fog,he.envMap=(I.isMeshStandardMaterial?ue:W).get(I.envMap||he.environment),He===void 0&&(I.addEventListener("dispose",me),He=new Map,he.programs=He);let We=He.get(Ne);if(We!==void 0){if(he.currentProgram===We&&he.lightsStateVersion===Ee)return Se(I,De),We}else De.uniforms=ae.getUniforms(I),I.onBuild(de,De,x),I.onBeforeCompile(De,x),We=ae.acquireProgram(De,Ne),He.set(Ne,We),he.uniforms=De.uniforms;let qe=he.uniforms;return(I.isShaderMaterial||I.isRawShaderMaterial)&&I.clipping!==!0||(qe.clippingPlanes=be.uniform),Se(I,De),he.needsLights=(function(ct){return ct.isMeshLambertMaterial||ct.isMeshToonMaterial||ct.isMeshPhongMaterial||ct.isMeshStandardMaterial||ct.isShadowMaterial||ct.isShaderMaterial&&ct.lights===!0})(I),he.lightsStateVersion=Ee,he.needsLights&&(qe.ambientLightColor.value=ce.state.ambient,qe.lightProbe.value=ce.state.probe,qe.directionalLights.value=ce.state.directional,qe.directionalLightShadows.value=ce.state.directionalShadow,qe.spotLights.value=ce.state.spot,qe.spotLightShadows.value=ce.state.spotShadow,qe.rectAreaLights.value=ce.state.rectArea,qe.ltc_1.value=ce.state.rectAreaLTC1,qe.ltc_2.value=ce.state.rectAreaLTC2,qe.pointLights.value=ce.state.point,qe.pointLightShadows.value=ce.state.pointShadow,qe.hemisphereLights.value=ce.state.hemi,qe.directionalShadowMap.value=ce.state.directionalShadowMap,qe.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,qe.spotShadowMap.value=ce.state.spotShadowMap,qe.spotLightMatrix.value=ce.state.spotLightMatrix,qe.spotLightMap.value=ce.state.spotLightMap,qe.pointShadowMap.value=ce.state.pointShadowMap,qe.pointShadowMatrix.value=ce.state.pointShadowMatrix),he.currentProgram=We,he.uniformsList=null,We}function je(I){if(I.uniformsList===null){let te=I.currentProgram.getUniforms();I.uniformsList=$i.seqWithValue(te.seq,I.uniforms)}return I.uniformsList}function Se(I,te){let de=z.get(I);de.outputColorSpace=te.outputColorSpace,de.batching=te.batching,de.instancing=te.instancing,de.instancingColor=te.instancingColor,de.skinning=te.skinning,de.morphTargets=te.morphTargets,de.morphNormals=te.morphNormals,de.morphColors=te.morphColors,de.morphTargetsCount=te.morphTargetsCount,de.numClippingPlanes=te.numClippingPlanes,de.numIntersection=te.numClipIntersection,de.vertexAlphas=te.vertexAlphas,de.vertexTangents=te.vertexTangents,de.toneMapping=te.toneMapping}Pe.setAnimationLoop((function(I){Te&&Te(I)})),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(I){Te=I,lt.setAnimationLoop(I),I===null?Pe.stop():Pe.start()},lt.addEventListener("sessionstart",Be),lt.addEventListener("sessionend",fe),this.render=function(I,te){if(te!==void 0&&te.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(te),te=lt.getCamera()),I.isScene===!0&&I.onBeforeRender(x,I,te,S),f=ke.get(I,m.length),f.init(),m.push(f),D.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),b.setFromProjectionMatrix(D),B=this.localClippingEnabled,T=be.init(this.clippingPlanes,B),g=Le.get(I,y.length),g.init(),y.push(g),Me(I,te,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ee,K),this.info.render.frame++,T===!0&&be.beginShadows();let de=f.state.shadowsArray;if(Oe.render(de,I,te),T===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Re.render(g,I),f.setupLights(x._useLegacyLights),te.isArrayCamera){let he=te.cameras;for(let ce=0,ve=he.length;ce<ve;ce++){let Ee=he[ce];Ae(g,I,Ee,Ee.viewport)}}else Ae(g,I,te);S!==null&&(X.updateMultisampleRenderTarget(S),X.updateRenderTargetMipmap(S)),I.isScene===!0&&I.onAfterRender(x,I,te),ot.resetDefaultState(),A=-1,w=null,m.pop(),f=m.length>0?m[m.length-1]:null,y.pop(),g=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(I,te,de){z.get(I.texture).__webglTexture=te,z.get(I.depthTexture).__webglTexture=de;let he=z.get(I);he.__hasExternalTextures=!0,he.__hasExternalTextures&&(he.__autoAllocateDepthBuffer=de===void 0,he.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,te){let de=z.get(I);de.__webglFramebuffer=te,de.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(I,te=0,de=0){S=I,E=te,_=de;let he=!0,ce=null,ve=!1,Ee=!1;if(I){let De=z.get(I);De.__useDefaultFramebuffer!==void 0?(C.bindFramebuffer(le.FRAMEBUFFER,null),he=!1):De.__webglFramebuffer===void 0?X.setupRenderTarget(I):De.__hasExternalTextures&&X.rebindTextures(I,z.get(I.texture).__webglTexture,z.get(I.depthTexture).__webglTexture);let Ne=I.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ee=!0);let He=z.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(ce=Array.isArray(He[te])?He[te][de]:He[te],ve=!0):ce=ne.isWebGL2&&I.samples>0&&X.useMultisampledRTT(I)===!1?z.get(I).__webglMultisampledFramebuffer:Array.isArray(He)?He[de]:He,R.copy(I.viewport),O.copy(I.scissor),L=I.scissorTest}else R.copy(V).multiplyScalar(Y).floor(),O.copy(j).multiplyScalar(Y).floor(),L=re;if(C.bindFramebuffer(le.FRAMEBUFFER,ce)&&ne.drawBuffers&&he&&C.drawBuffers(I,ce),C.viewport(R),C.scissor(O),C.setScissorTest(L),ve){let De=z.get(I.texture);le.framebufferTexture2D(le.FRAMEBUFFER,le.COLOR_ATTACHMENT0,le.TEXTURE_CUBE_MAP_POSITIVE_X+te,De.__webglTexture,de)}else if(Ee){let De=z.get(I.texture),Ne=te||0;le.framebufferTextureLayer(le.FRAMEBUFFER,le.COLOR_ATTACHMENT0,De.__webglTexture,de||0,Ne)}A=-1},this.readRenderTargetPixels=function(I,te,de,he,ce,ve,Ee){if(!I||!I.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=z.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De){C.bindFramebuffer(le.FRAMEBUFFER,De);try{let Ne=I.texture,He=Ne.format,We=Ne.type;if(He!==En&&at.convert(He)!==le.getParameter(le.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let qe=We===Br&&(se.has("EXT_color_buffer_half_float")||ne.isWebGL2&&se.has("EXT_color_buffer_float"));if(!(We===yi||at.convert(We)===le.getParameter(le.IMPLEMENTATION_COLOR_READ_TYPE)||We===Zn&&(ne.isWebGL2||se.has("OES_texture_float")||se.has("WEBGL_color_buffer_float"))||qe))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");te>=0&&te<=I.width-he&&de>=0&&de<=I.height-ce&&le.readPixels(te,de,he,ce,at.convert(He),at.convert(We),ve)}finally{let Ne=S!==null?z.get(S).__webglFramebuffer:null;C.bindFramebuffer(le.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(I,te,de=0){let he=Math.pow(2,-de),ce=Math.floor(te.image.width*he),ve=Math.floor(te.image.height*he);X.setTexture2D(te,0),le.copyTexSubImage2D(le.TEXTURE_2D,de,0,0,I.x,I.y,ce,ve),C.unbindTexture()},this.copyTextureToTexture=function(I,te,de,he=0){let ce=te.image.width,ve=te.image.height,Ee=at.convert(de.format),De=at.convert(de.type);X.setTexture2D(de,0),le.pixelStorei(le.UNPACK_FLIP_Y_WEBGL,de.flipY),le.pixelStorei(le.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),le.pixelStorei(le.UNPACK_ALIGNMENT,de.unpackAlignment),te.isDataTexture?le.texSubImage2D(le.TEXTURE_2D,he,I.x,I.y,ce,ve,Ee,De,te.image.data):te.isCompressedTexture?le.compressedTexSubImage2D(le.TEXTURE_2D,he,I.x,I.y,te.mipmaps[0].width,te.mipmaps[0].height,Ee,te.mipmaps[0].data):le.texSubImage2D(le.TEXTURE_2D,he,I.x,I.y,Ee,De,te.image),he===0&&de.generateMipmaps&&le.generateMipmap(le.TEXTURE_2D),C.unbindTexture()},this.copyTextureToTexture3D=function(I,te,de,he,ce=0){if(x.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let ve=I.max.x-I.min.x+1,Ee=I.max.y-I.min.y+1,De=I.max.z-I.min.z+1,Ne=at.convert(he.format),He=at.convert(he.type),We;if(he.isData3DTexture)X.setTexture3D(he,0),We=le.TEXTURE_3D;else{if(!he.isDataArrayTexture&&!he.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");X.setTexture2DArray(he,0),We=le.TEXTURE_2D_ARRAY}le.pixelStorei(le.UNPACK_FLIP_Y_WEBGL,he.flipY),le.pixelStorei(le.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),le.pixelStorei(le.UNPACK_ALIGNMENT,he.unpackAlignment);let qe=le.getParameter(le.UNPACK_ROW_LENGTH),ct=le.getParameter(le.UNPACK_IMAGE_HEIGHT),Ot=le.getParameter(le.UNPACK_SKIP_PIXELS),Ft=le.getParameter(le.UNPACK_SKIP_ROWS),fn=le.getParameter(le.UNPACK_SKIP_IMAGES),pt=de.isCompressedTexture?de.mipmaps[ce]:de.image;le.pixelStorei(le.UNPACK_ROW_LENGTH,pt.width),le.pixelStorei(le.UNPACK_IMAGE_HEIGHT,pt.height),le.pixelStorei(le.UNPACK_SKIP_PIXELS,I.min.x),le.pixelStorei(le.UNPACK_SKIP_ROWS,I.min.y),le.pixelStorei(le.UNPACK_SKIP_IMAGES,I.min.z),de.isDataTexture||de.isData3DTexture?le.texSubImage3D(We,ce,te.x,te.y,te.z,ve,Ee,De,Ne,He,pt.data):de.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),le.compressedTexSubImage3D(We,ce,te.x,te.y,te.z,ve,Ee,De,Ne,pt.data)):le.texSubImage3D(We,ce,te.x,te.y,te.z,ve,Ee,De,Ne,He,pt),le.pixelStorei(le.UNPACK_ROW_LENGTH,qe),le.pixelStorei(le.UNPACK_IMAGE_HEIGHT,ct),le.pixelStorei(le.UNPACK_SKIP_PIXELS,Ot),le.pixelStorei(le.UNPACK_SKIP_ROWS,Ft),le.pixelStorei(le.UNPACK_SKIP_IMAGES,fn),ce===0&&he.generateMipmaps&&le.generateMipmap(We),C.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?X.setTextureCube(I,0):I.isData3DTexture?X.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?X.setTexture2DArray(I,0):X.setTexture2D(I,0),C.unbindTexture()},this.resetState=function(){E=0,_=0,S=null,C.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Tl?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===pa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yt?bi:qh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===bi?yt:Bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},qo=class extends wi{};qo.prototype.isWebGL1Renderer=!0;var ta=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var or=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Jf=new P;var Kf=new P,$f=new P,Qf=new P,em=new ye,tm=new ye,nm=new Ze,im=new P,rm=new P,sm=new P,am=new ye,om=new ye,lm=new ye;var cm=new P,hm=new P;var um=new P,dm=new Rt,pm=new Rt,fm=new P,mm=new Ze,gm=new P,vm=new en,xm=new Ze,ym=new Si;var _m=new Ze,Mm=new Ze;var na=class extends $t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qi=new Ze,Sh=new Ze,Rs=[],wh=new Qt,sf=new Ze,Lr=new Fe,Ir=new en,Cn=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new na(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,sf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),wh.copy(e.boundingBox).applyMatrix4(qi),this.boundingBox.union(wh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new en),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),Ir.copy(e.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),e.ray.intersectsSphere(Ir)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,qi),Sh.multiplyMatrices(n,qi),Lr.matrixWorld=Sh,Lr.raycast(e,Rs);for(let a=0,o=Rs.length;a<o;a++){let l=Rs[a];l.instanceId=s,l.object=this,t.push(l)}Rs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new na(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Yo=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var bm=new Ze,Sm=new Ze,wm=new Ze,Tm=new Ze,Em=new sr,Am=new Qt,Cm=new en,Rm=new P,Pm=new Yo,Lm=new Fe;var Hr=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Th=new P,Eh=new P,Ah=new Ze,vo=new Si,Ps=new en,ia=class extends ft{constructor(e=new _t,t=new Hr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Th.fromBufferAttribute(t,i-1),Eh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Th.distanceTo(Eh);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(i),Ps.radius+=s,e.ray.intersectsSphere(Ps)===!1)return;Ah.copy(i).invert(),vo.copy(e.ray).applyMatrix4(Ah);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,h=new P,u=new P,p=new P,d=this.isLineSegments?2:1,v=n.index,g=n.attributes.position;if(v!==null)for(let f=Math.max(0,a.start),y=Math.min(v.count,a.start+a.count)-1;f<y;f+=d){let m=v.getX(f),x=v.getX(f+1);if(c.fromBufferAttribute(g,m),h.fromBufferAttribute(g,x),vo.distanceSqToSegment(c,h,p,u)>l)continue;p.applyMatrix4(this.matrixWorld);let M=e.ray.origin.distanceTo(p);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:f,face:null,faceIndex:null,object:this})}else for(let f=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count)-1;f<y;f+=d){if(c.fromBufferAttribute(g,f),h.fromBufferAttribute(g,f+1),vo.distanceSqToSegment(c,h,p,u)>l)continue;p.applyMatrix4(this.matrixWorld);let m=e.ray.origin.distanceTo(p);m<e.near||m>e.far||t.push({distance:m,point:u.clone().applyMatrix4(this.matrixWorld),index:f,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}},Im=new P,Um=new P;var Dm=new Ze,Nm=new Si,Om=new en,zm=new P;var on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new ye:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new P,i=[],s=[],a=[],o=new P,l=new Ze;for(let d=0;d<=e;d++){let v=d/e;i[d]=this.getTangentAt(v,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(Nt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,v))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Nt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(i[v],d*v)),a[v].crossVectors(i[v],s[v])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Wr=class extends on{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new ye,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*h-d*u+this.aX,c=p*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zo=class extends Wr{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Al(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let p=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;p*=h,d*=h,i(a,o,p,d)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var Ls=new P,xo=new Al,yo=new Al,_o=new Al,Jo=class extends on{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(Ls.subVectors(i[0],i[1]).add(i[0]),o=Ls);let u=i[c%s],p=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(Ls.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=Ls),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,v=Math.pow(o.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(p),d),f=Math.pow(p.distanceToSquared(l),d);g<1e-4&&(g=1),v<1e-4&&(v=g),f<1e-4&&(f=g),xo.initNonuniformCatmullRom(o.x,u.x,p.x,l.x,v,g,f),yo.initNonuniformCatmullRom(o.y,u.y,p.y,l.y,v,g,f),_o.initNonuniformCatmullRom(o.z,u.z,p.z,l.z,v,g,f)}else this.curveType==="catmullrom"&&(xo.initCatmullRom(o.x,u.x,p.x,l.x,this.tension),yo.initCatmullRom(o.y,u.y,p.y,l.y,this.tension),_o.initCatmullRom(o.z,u.z,p.z,l.z,this.tension));return n.set(xo.calc(h),yo.calc(h),_o.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ch(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function Or(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function zr(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var ra=class extends on{constructor(e=new ye,t=new ye,n=new ye,i=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ye){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(zr(e,i.x,s.x,a.x,o.x),zr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xr=class extends on{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(zr(e,i.x,s.x,a.x,o.x),zr(e,i.y,s.y,a.y,o.y),zr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends on{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ko=class extends on{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends on{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Or(e,i.x,s.x,a.x),Or(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends on{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Or(e,i.x,s.x,a.x),Or(e,i.y,s.y,a.y),Or(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Ch(o,l.x,c.x,h.x,u.x),Ch(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ye().fromArray(i))}return this}},ca=Object.freeze({__proto__:null,ArcCurve:Zo,CatmullRomCurve3:Jo,CubicBezierCurve:ra,CubicBezierCurve3:Xr,EllipseCurve:Wr,LineCurve:sa,LineCurve3:Ko,QuadraticBezierCurve:aa,QuadraticBezierCurve3:oa,SplineCurve:la}),$o=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ca[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new ca[i.type]().fromJSON(i))}return this}},jr=class extends $o{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new sa(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new aa(this.currentPoint.clone(),new ye(e,t),new ye(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new ra(this.currentPoint.clone(),new ye(e,t),new ye(n,i),new ye(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new la(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new Wr(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ha=class r extends _t{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Nt(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new P,p=new ye,d=new P,v=new P,g=new P,f=0,y=0;for(let m=0;m<=e.length-1;m++)switch(m){case 0:f=e[m+1].x-e[m].x,y=e[m+1].y-e[m].y,d.x=1*y,d.y=-f,d.z=0*y,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:f=e[m+1].x-e[m].x,y=e[m+1].y-e[m].y,d.x=1*y,d.y=-f,d.z=0*y,v.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(v)}for(let m=0;m<=t;m++){let x=n+m*h*i,M=Math.sin(x),E=Math.cos(x);for(let _=0;_<=e.length-1;_++){u.x=e[_].x*M,u.y=e[_].y,u.z=e[_].x*E,a.push(u.x,u.y,u.z),p.x=m/t,p.y=_/(e.length-1),o.push(p.x,p.y);let S=l[3*_+0]*M,A=l[3*_+1],w=l[3*_+0]*E;c.push(S,A,w)}}for(let m=0;m<t;m++)for(let x=0;x<e.length-1;x++){let M=x+m*e.length,E=M,_=M+e.length,S=M+e.length+1,A=M+1;s.push(E,_,A),s.push(S,A,_)}this.setIndex(s),this.setAttribute("position",new Ye(a,3)),this.setAttribute("uv",new Ye(o,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Qo=class r extends ha{constructor(e=1,t=1,n=4,i=8){let s=new jr;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Rn=class r extends _t{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new P,h=new ye;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ln=class r extends _t{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],p=[],d=[],v=0,g=[],f=n/2,y=0;function m(x){let M=v,E=new ye,_=new P,S=0,A=x===!0?e:t,w=x===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,f*w,0),p.push(0,w,0),d.push(.5,.5),v++;let R=v;for(let O=0;O<=i;O++){let L=O/i*l+o,U=Math.cos(L),N=Math.sin(L);_.x=A*N,_.y=f*w,_.z=A*U,u.push(_.x,_.y,_.z),p.push(0,w,0),E.x=.5*U+.5,E.y=.5*N*w+.5,d.push(E.x,E.y),v++}for(let O=0;O<i;O++){let L=M+O,U=R+O;x===!0?h.push(U,U+1,L):h.push(U+1,U,L),S+=3}c.addGroup(y,S,x===!0?1:2),y+=S}(function(){let x=new P,M=new P,E=0,_=(t-e)/n;for(let S=0;S<=s;S++){let A=[],w=S/s,R=w*(t-e)+e;for(let O=0;O<=i;O++){let L=O/i,U=L*l+o,N=Math.sin(U),k=Math.cos(U);M.x=R*N,M.y=-w*n+f,M.z=R*k,u.push(M.x,M.y,M.z),x.set(N,_,k).normalize(),p.push(x.x,x.y,x.z),d.push(L,1-w),A.push(v++)}g.push(A)}for(let S=0;S<i;S++)for(let A=0;A<s;A++){let w=g[A][S],R=g[A+1][S],O=g[A+1][S+1],L=g[A][S+1];h.push(w,R,L),h.push(R,O,L),E+=6}c.addGroup(y,E,0),y+=E})(),a===!1&&(e>0&&m(!0),t>0&&m(!1)),this.setIndex(h),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(p,3)),this.setAttribute("uv",new Ye(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},el=class r extends ln{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ti=class r extends _t{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(p,d,v,g){let f=g+1,y=[];for(let m=0;m<=f;m++){y[m]=[];let x=p.clone().lerp(v,m/f),M=d.clone().lerp(v,m/f),E=f-m;for(let _=0;_<=E;_++)y[m][_]=_===0&&m===f?x:x.clone().lerp(M,_/E)}for(let m=0;m<f;m++)for(let x=0;x<2*(f-m)-1;x++){let M=Math.floor(x/2);x%2==0?(l(y[m][M+1]),l(y[m+1][M]),l(y[m][M])):(l(y[m][M+1]),l(y[m+1][M+1]),l(y[m+1][M]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,d){let v=3*p;d.x=e[v+0],d.y=e[v+1],d.z=e[v+2]}function h(p,d,v,g){g<0&&p.x===1&&(a[d]=p.x-1),v.x===0&&v.z===0&&(a[d]=g/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}(function(p){let d=new P,v=new P,g=new P;for(let f=0;f<t.length;f+=3)c(t[f+0],d),c(t[f+1],v),c(t[f+2],g),o(d,v,g,p)})(i),(function(p){let d=new P;for(let v=0;v<s.length;v+=3)d.x=s[v+0],d.y=s[v+1],d.z=s[v+2],d.normalize().multiplyScalar(p),s[v+0]=d.x,s[v+1]=d.y,s[v+2]=d.z})(n),(function(){let p=new P;for(let v=0;v<s.length;v+=3){p.x=s[v+0],p.y=s[v+1],p.z=s[v+2];let g=u(p)/2/Math.PI+.5,f=(d=p,Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))/Math.PI+.5);a.push(g,1-f)}var d;(function(){let v=new P,g=new P,f=new P,y=new P,m=new ye,x=new ye,M=new ye;for(let E=0,_=0;E<s.length;E+=9,_+=6){v.set(s[E+0],s[E+1],s[E+2]),g.set(s[E+3],s[E+4],s[E+5]),f.set(s[E+6],s[E+7],s[E+8]),m.set(a[_+0],a[_+1]),x.set(a[_+2],a[_+3]),M.set(a[_+4],a[_+5]),y.copy(v).add(g).add(f).divideScalar(3);let S=u(y);h(m,_+0,v,S),h(x,_+2,g,S),h(M,_+4,f,S)}})(),(function(){for(let v=0;v<a.length;v+=6){let g=a[v+0],f=a[v+2],y=a[v+4],m=Math.max(g,f,y),x=Math.min(g,f,y);m>.9&&x<.1&&(g<.2&&(a[v+0]+=1),f<.2&&(a[v+2]+=1),y<.2&&(a[v+4]+=1))}})()})(),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(s.slice(),3)),this.setAttribute("uv",new Ye(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},tl=class r extends Ti{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Is=new P,Us=new P,Mo=new P,Ds=new xi,nl=class extends _t{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Ji*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),p={},d=[];for(let v=0;v<l;v+=3){a?(c[0]=a.getX(v),c[1]=a.getX(v+1),c[2]=a.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);let{a:g,b:f,c:y}=Ds;if(g.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),y.fromBufferAttribute(o,c[2]),Ds.getNormal(Mo),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,u[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let m=0;m<3;m++){let x=(m+1)%3,M=u[m],E=u[x],_=Ds[h[m]],S=Ds[h[x]],A=`${M}_${E}`,w=`${E}_${M}`;w in p&&p[w]?(Mo.dot(p[w].normal)<=s&&(d.push(_.x,_.y,_.z),d.push(S.x,S.y,S.z)),p[w]=null):A in p||(p[A]={index0:c[m],index1:c[x],normal:Mo.clone()})}}for(let v in p)if(p[v]){let{index0:g,index1:f}=p[v];Is.fromBufferAttribute(o,g),Us.fromBufferAttribute(o,f),d.push(Is.x,Is.y,Is.z),d.push(Us.x,Us.y,Us.z)}this.setAttribute("position",new Ye(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ni=class extends jr{constructor(e){super(e),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new jr().fromJSON(i))}return this}},af=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Rh(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,p,d;if(n&&(s=(function(v,g,f,y){let m=[],x,M,E,_,S;for(x=0,M=g.length;x<M;x++)E=g[x]*y,_=x<M-1?g[x+1]*y:v.length,S=Rh(v,E,_,y,!1),S===S.next&&(S.steiner=!0),m.push(ff(S));for(m.sort(uf),x=0;x<m.length;x++)f=df(m[x],f);return f})(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let v=t;v<i;v+=t)u=r[v],p=r[v+1],u<o&&(o=u),p<l&&(l=p),u>c&&(c=u),p>h&&(h=p);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return qr(s,a,t,o,l,d,0),a};function Rh(r,e,t,n,i){let s,a;if(i===(function(o,l,c,h){let u=0;for(let p=l,d=c-h;p<c;p+=h)u+=(o[d]-o[p])*(o[p+1]+o[d+1]),d=p;return u})(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Ph(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Ph(s,r[s],r[s+1],a);return a&&ma(a,a.next)&&(Zr(a),a=a.next),a}function Ei(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!ma(n,n.next)&&St(n.prev,n,n.next)!==0)n=n.next;else{if(Zr(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function qr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(h,u,p,d){let v=h;do v.z===0&&(v.z=il(v.x,v.y,u,p,d)),v.prevZ=v.prev,v.nextZ=v.next,v=v.next;while(v!==h);v.prevZ.nextZ=null,v.prevZ=null,(function(g){let f,y,m,x,M,E,_,S,A=1;do{for(y=g,g=null,M=null,E=0;y;){for(E++,m=y,_=0,f=0;f<A&&(_++,m=m.nextZ,m);f++);for(S=A;_>0||S>0&&m;)_!==0&&(S===0||!m||y.z<=m.z)?(x=y,y=y.nextZ,_--):(x=m,m=m.nextZ,S--),M?M.nextZ=x:g=x,x.prevZ=M,M=x;y=m}M.nextZ=null,A*=2}while(E>1)})(v)})(r,n,i,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?lf(r,n,i,s):of(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Zr(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?qr(r=cf(Ei(r),e,t),e,t,n,i,s,2):a===2&&hf(r,e,t,n,i,s):qr(Ei(r),e,t,n,i,s,1);break}}function of(r){let e=r.prev,t=r,n=r.next;if(St(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,p=i>s?i>a?i:a:s>a?s:a,d=o>l?o>c?o:c:l>c?l:c,v=n.next;for(;v!==e;){if(v.x>=h&&v.x<=p&&v.y>=u&&v.y<=d&&Zi(i,o,s,l,a,c,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function lf(r,e,t,n){let i=r.prev,s=r,a=r.next;if(St(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,p=a.y,d=o<l?o<c?o:c:l<c?l:c,v=h<u?h<p?h:p:u<p?u:p,g=o>l?o>c?o:c:l>c?l:c,f=h>u?h>p?h:p:u>p?u:p,y=il(d,v,e,t,n),m=il(g,f,e,t,n),x=r.prevZ,M=r.nextZ;for(;x&&x.z>=y&&M&&M.z<=m;){if(x.x>=d&&x.x<=g&&x.y>=v&&x.y<=f&&x!==i&&x!==a&&Zi(o,h,l,u,c,p,x.x,x.y)&&St(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=d&&M.x<=g&&M.y>=v&&M.y<=f&&M!==i&&M!==a&&Zi(o,h,l,u,c,p,M.x,M.y)&&St(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=y;){if(x.x>=d&&x.x<=g&&x.y>=v&&x.y<=f&&x!==i&&x!==a&&Zi(o,h,l,u,c,p,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=m;){if(M.x>=d&&M.x<=g&&M.y>=v&&M.y<=f&&M!==i&&M!==a&&Zi(o,h,l,u,c,p,M.x,M.y)&&St(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function cf(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!ma(i,s)&&ru(i,n,n.next,s)&&Yr(i,s)&&Yr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Zr(n),Zr(n.next),n=r=s),n=n.next}while(n!==r);return Ei(n)}function hf(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mf(a,o)){let l=su(a,o);return a=Ei(a,a.next),l=Ei(l,l.next),qr(a,e,t,n,i,s,0),void qr(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function uf(r,e){return r.x-e.x}function df(r,e){let t=(function(i,s){let a,o=s,l=-1/0,c=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let f=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=c&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,p=a.x,d=a.y,v,g=1/0;o=a;do c>=o.x&&o.x>=p&&c!==o.x&&Zi(h<d?c:l,h,p,d,h<d?l:c,h,o.x,o.y)&&(v=Math.abs(h-o.y)/(c-o.x),Yr(o,i)&&(v<g||v===g&&(o.x>a.x||o.x===a.x&&pf(a,o)))&&(a=o,g=v)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let n=su(t,r);return Ei(n,n.next),Ei(t,t.next)}function pf(r,e){return St(r.prev,r,e.prev)<0&&St(e.next,r,r.next)<0}function il(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function ff(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Zi(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function mf(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&ru(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(Yr(r,e)&&Yr(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(St(r.prev,r,e.prev)||St(r,e.prev,e))||ma(r,e)&&St(r.prev,r,r.next)>0&&St(e.prev,e,e.next)>0)}function St(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ma(r,e){return r.x===e.x&&r.y===e.y}function ru(r,e,t,n){let i=Os(St(r,e,t)),s=Os(St(r,e,n)),a=Os(St(t,n,r)),o=Os(St(t,n,e));return i!==s&&a!==o||!(i!==0||!Ns(r,t,e))||!(s!==0||!Ns(r,n,e))||!(a!==0||!Ns(t,r,n))||!(o!==0||!Ns(t,e,n))}function Ns(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Os(r){return r>0?1:r<0?-1:0}function Yr(r,e){return St(r.prev,r,r.next)<0?St(r,e,r.next)>=0&&St(r,r.prev,e)>=0:St(r,e,r.prev)<0||St(r,r.next,e)<0}function su(r,e){let t=new rl(r.i,r.x,r.y),n=new rl(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ph(r,e,t,n){let i=new rl(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function rl(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Kn=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Lh(e),Ih(n,e);let a=e.length;t.forEach(Lh);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Ih(n,t[l]);let o=af(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Lh(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Ih(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var sl=class r extends _t{constructor(e=new ni([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled===void 0||t.bevelEnabled,d=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:gf,x,M,E,_,S,A=!1;y&&(x=y.getSpacedPoints(h),A=!0,p=!1,M=y.computeFrenetFrames(h,!1),E=new P,_=new P,S=new P),p||(f=0,d=0,v=0,g=0);let w=o.extractPoints(c),R=w.shape,O=w.holes;if(!Kn.isClockWise(R)){R=R.reverse();for(let F=0,G=O.length;F<G;F++){let H=O[F];Kn.isClockWise(H)&&(O[F]=H.reverse())}}let L=Kn.triangulateShape(R,O),U=R;for(let F=0,G=O.length;F<G;F++){let H=O[F];R=R.concat(H)}function N(F,G,H){return G||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(G,H)}let k=R.length,Q=L.length;function Y(F,G,H){let se,ne,C,oe=F.x-G.x,z=F.y-G.y,X=H.x-F.x,W=H.y-F.y,ue=oe*oe+z*z,pe=oe*W-z*X;if(Math.abs(pe)>Number.EPSILON){let _e=Math.sqrt(ue),Ue=Math.sqrt(X*X+W*W),ae=G.x-z/_e,ge=G.y+oe/_e,Le=((H.x-W/Ue-ae)*W-(H.y+X/Ue-ge)*X)/(oe*W-z*X);se=ae+oe*Le-F.x,ne=ge+z*Le-F.y;let ke=se*se+ne*ne;if(ke<=2)return new ye(se,ne);C=Math.sqrt(ke/2)}else{let _e=!1;oe>Number.EPSILON?X>Number.EPSILON&&(_e=!0):oe<-Number.EPSILON?X<-Number.EPSILON&&(_e=!0):Math.sign(z)===Math.sign(W)&&(_e=!0),_e?(se=-z,ne=oe,C=Math.sqrt(ue)):(se=oe,ne=z,C=Math.sqrt(ue/2))}return new ye(se/C,ne/C)}let ee=[];for(let F=0,G=U.length,H=G-1,se=F+1;F<G;F++,H++,se++)H===G&&(H=0),se===G&&(se=0),ee[F]=Y(U[F],U[H],U[se]);let K=[],V,j=ee.concat();for(let F=0,G=O.length;F<G;F++){let H=O[F];V=[];for(let se=0,ne=H.length,C=ne-1,oe=se+1;se<ne;se++,C++,oe++)C===ne&&(C=0),oe===ne&&(oe=0),V[se]=Y(H[se],H[C],H[oe]);K.push(V),j=j.concat(V)}for(let F=0;F<f;F++){let G=F/f,H=d*Math.cos(G*Math.PI/2),se=v*Math.sin(G*Math.PI/2)+g;for(let ne=0,C=U.length;ne<C;ne++){let oe=N(U[ne],ee[ne],se);T(oe.x,oe.y,-H)}for(let ne=0,C=O.length;ne<C;ne++){let oe=O[ne];V=K[ne];for(let z=0,X=oe.length;z<X;z++){let W=N(oe[z],V[z],se);T(W.x,W.y,-H)}}}let re=v+g;for(let F=0;F<k;F++){let G=p?N(R[F],j[F],re):R[F];A?(_.copy(M.normals[0]).multiplyScalar(G.x),E.copy(M.binormals[0]).multiplyScalar(G.y),S.copy(x[0]).add(_).add(E),T(S.x,S.y,S.z)):T(G.x,G.y,0)}for(let F=1;F<=h;F++)for(let G=0;G<k;G++){let H=p?N(R[G],j[G],re):R[G];A?(_.copy(M.normals[F]).multiplyScalar(H.x),E.copy(M.binormals[F]).multiplyScalar(H.y),S.copy(x[F]).add(_).add(E),T(S.x,S.y,S.z)):T(H.x,H.y,u/h*F)}for(let F=f-1;F>=0;F--){let G=F/f,H=d*Math.cos(G*Math.PI/2),se=v*Math.sin(G*Math.PI/2)+g;for(let ne=0,C=U.length;ne<C;ne++){let oe=N(U[ne],ee[ne],se);T(oe.x,oe.y,u+H)}for(let ne=0,C=O.length;ne<C;ne++){let oe=O[ne];V=K[ne];for(let z=0,X=oe.length;z<X;z++){let W=N(oe[z],V[z],se);A?T(W.x,W.y+x[h-1].y,x[h-1].x+H):T(W.x,W.y,u+H)}}}function b(F,G){let H=F.length;for(;--H>=0;){let se=H,ne=H-1;ne<0&&(ne=F.length-1);for(let C=0,oe=h+2*f;C<oe;C++){let z=k*C,X=k*(C+1);$(G+se+z,G+ne+z,G+ne+X,G+se+X)}}}function T(F,G,H){l.push(F),l.push(G),l.push(H)}function B(F,G,H){D(F),D(G),D(H);let se=i.length/3,ne=m.generateTopUV(n,i,se-3,se-2,se-1);Z(ne[0]),Z(ne[1]),Z(ne[2])}function $(F,G,H,se){D(F),D(G),D(se),D(G),D(H),D(se);let ne=i.length/3,C=m.generateSideWallUV(n,i,ne-6,ne-3,ne-2,ne-1);Z(C[0]),Z(C[1]),Z(C[3]),Z(C[1]),Z(C[2]),Z(C[3])}function D(F){i.push(l[3*F+0]),i.push(l[3*F+1]),i.push(l[3*F+2])}function Z(F){s.push(F.x),s.push(F.y)}(function(){let F=i.length/3;if(p){let G=0,H=k*G;for(let se=0;se<Q;se++){let ne=L[se];B(ne[2]+H,ne[1]+H,ne[0]+H)}G=h+2*f,H=k*G;for(let se=0;se<Q;se++){let ne=L[se];B(ne[0]+H,ne[1]+H,ne[2]+H)}}else{for(let G=0;G<Q;G++){let H=L[G];B(H[2],H[1],H[0])}for(let G=0;G<Q;G++){let H=L[G];B(H[0]+k*h,H[1]+k*h,H[2]+k*h)}}n.addGroup(F,i.length/3-F,0)})(),(function(){let F=i.length/3,G=0;b(U,G),G+=U.length;for(let H=0,se=O.length;H<se;H++){let ne=O[H];b(ne,G),G+=ne.length}n.addGroup(F,i.length/3-F,1)})()}this.setAttribute("position",new Ye(i,3)),this.setAttribute("uv",new Ye(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ca[i.type]().fromJSON(i)),new r(n,e.options)}},gf={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new ye(s,a),new ye(o,l),new ye(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],p=e[3*i],d=e[3*i+1],v=e[3*i+2],g=e[3*s],f=e[3*s+1],y=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ye(a,1-l),new ye(c,1-u),new ye(p,1-v),new ye(g,1-y)]:[new ye(o,1-l),new ye(h,1-u),new ye(d,1-v),new ye(f,1-y)]}},al=class r extends Ti{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ai=class r extends Ti{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},zt=class r extends _t{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,p=(t-e)/(i=Math.max(1,i)),d=new P,v=new ye;for(let g=0;g<=i;g++){for(let f=0;f<=n;f++){let y=s+f/n*a;d.x=u*Math.cos(y),d.y=u*Math.sin(y),l.push(d.x,d.y,d.z),c.push(0,0,1),v.x=(d.x/t+1)/2,v.y=(d.y/t+1)/2,h.push(v.x,v.y)}u+=p}for(let g=0;g<i;g++){let f=g*(n+1);for(let y=0;y<n;y++){let m=y+f,x=m,M=m+n+1,E=m+n+2,_=m+1;o.push(x,M,_),o.push(M,E,_)}}this.setIndex(o),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ci=class r extends _t{constructor(e=new ni([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,p=h.extractPoints(t),d=p.shape,v=p.holes;Kn.isClockWise(d)===!1&&(d=d.reverse());for(let f=0,y=v.length;f<y;f++){let m=v[f];Kn.isClockWise(m)===!0&&(v[f]=m.reverse())}let g=Kn.triangulateShape(d,v);for(let f=0,y=v.length;f<y;f++){let m=v[f];d=d.concat(m)}for(let f=0,y=d.length;f<y;f++){let m=d[f];i.push(m.x,m.y,0),s.push(0,0,1),a.push(m.x,m.y)}for(let f=0,y=g.length;f<y;f++){let m=g[f],x=m[0]+u,M=m[1]+u,E=m[2]+u;n.push(x,M,E),l+=3}}this.setIndex(n),this.setAttribute("position",new Ye(i,3)),this.setAttribute("normal",new Ye(s,3)),this.setAttribute("uv",new Ye(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Sn=class r extends _t{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,p=new P,d=[],v=[],g=[],f=[];for(let y=0;y<=n;y++){let m=[],x=y/n,M=0;y===0&&a===0?M=.5/t:y===n&&l===Math.PI&&(M=-.5/t);for(let E=0;E<=t;E++){let _=E/t;u.x=-e*Math.cos(i+_*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+_*s)*Math.sin(a+x*o),v.push(u.x,u.y,u.z),p.copy(u).normalize(),g.push(p.x,p.y,p.z),f.push(_+M,1-x),m.push(c++)}h.push(m)}for(let y=0;y<n;y++)for(let m=0;m<t;m++){let x=h[y][m+1],M=h[y][m],E=h[y+1][m],_=h[y+1][m+1];(y!==0||a>0)&&d.push(x,M,_),(y!==n-1||l<Math.PI)&&d.push(M,E,_)}this.setIndex(d),this.setAttribute("position",new Ye(v,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ol=class r extends Ti{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ri=class r extends _t{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new P,u=new P,p=new P;for(let d=0;d<=n;d++)for(let v=0;v<=i;v++){let g=v/i*s,f=d/n*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(g),u.y=(e+t*Math.cos(f))*Math.sin(g),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(v/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let v=1;v<=i;v++){let g=(i+1)*d+v-1,f=(i+1)*(d-1)+v-1,y=(i+1)*(d-1)+v,m=(i+1)*d+v;a.push(g,f,m),a.push(f,y,m)}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ll=class r extends _t{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new P,p=new P,d=new P,v=new P,g=new P,f=new P,y=new P;for(let x=0;x<=n;++x){let M=x/n*s*Math.PI*2;m(M,s,a,e,d),m(M+.01,s,a,e,v),f.subVectors(v,d),y.addVectors(v,d),g.crossVectors(f,y),y.crossVectors(g,f),g.normalize(),y.normalize();for(let E=0;E<=i;++E){let _=E/i*Math.PI*2,S=-t*Math.cos(_),A=t*Math.sin(_);u.x=d.x+(S*y.x+A*g.x),u.y=d.y+(S*y.y+A*g.y),u.z=d.z+(S*y.z+A*g.z),l.push(u.x,u.y,u.z),p.subVectors(u,d).normalize(),c.push(p.x,p.y,p.z),h.push(x/n),h.push(E/i)}}for(let x=1;x<=n;x++)for(let M=1;M<=i;M++){let E=(i+1)*(x-1)+(M-1),_=(i+1)*x+(M-1),S=(i+1)*x+M,A=(i+1)*(x-1)+M;o.push(E,_,A),o.push(_,S,A)}function m(x,M,E,_,S){let A=Math.cos(x),w=Math.sin(x),R=E/M*x,O=Math.cos(R);S.x=_*(2+O)*.5*A,S.y=_*(2+O)*w*.5,S.z=_*Math.sin(R)*.5}this.setIndex(o),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},cl=class r extends _t{constructor(e=new oa(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new ye,h=new P,u=[],p=[],d=[],v=[];function g(f){h=e.getPointAt(f/t,h);let y=a.normals[f],m=a.binormals[f];for(let x=0;x<=i;x++){let M=x/i*Math.PI*2,E=Math.sin(M),_=-Math.cos(M);l.x=_*y.x+E*m.x,l.y=_*y.y+E*m.y,l.z=_*y.z+E*m.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)g(f);g(s===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let y=0;y<=i;y++)c.x=f/t,c.y=y/i,d.push(c.x,c.y)})(),(function(){for(let f=1;f<=t;f++)for(let y=1;y<=i;y++){let m=(i+1)*(f-1)+(y-1),x=(i+1)*f+(y-1),M=(i+1)*f+y,E=(i+1)*(f-1)+y;v.push(m,x,E),v.push(x,M,E)}})()})(),this.setIndex(v),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(p,3)),this.setAttribute("uv",new Ye(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new ca[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},hl=class extends _t{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new P,s=new P;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],p=u.start;for(let d=p,v=p+u.count;d<v;d+=3)for(let g=0;g<3;g++){let f=o.getX(d+g),y=o.getX(d+(g+1)%3);i.fromBufferAttribute(a,f),s.fromBufferAttribute(a,y),Uh(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Uh(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ye(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Uh(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var Fm=Object.freeze({__proto__:null,BoxGeometry:At,CapsuleGeometry:Qo,CircleGeometry:Rn,ConeGeometry:el,CylinderGeometry:ln,DodecahedronGeometry:tl,EdgesGeometry:nl,ExtrudeGeometry:sl,IcosahedronGeometry:al,LatheGeometry:ha,OctahedronGeometry:Ai,PlaneGeometry:ar,PolyhedronGeometry:Ti,RingGeometry:zt,ShapeGeometry:Ci,SphereGeometry:Sn,TetrahedronGeometry:ol,TorusGeometry:Ri,TorusKnotGeometry:ll,TubeGeometry:cl,WireframeGeometry:hl});var rt=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function zs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function vf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var lr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ul=class extends lr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dc,endingEnd:Dc}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nc:s=e,o=2*t-n;break;case Oc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nc:a=e,l=2*n-t;break;case Oc:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,v=(n-t)/(i-t),g=v*v,f=g*v,y=-p*f+2*p*g-p*v,m=(1+p)*f+(-1.5-2*p)*g+(-.5+p)*v+1,x=(-1-d)*f+(1.5+d)*g+.5*v,M=d*f-d*g;for(let E=0;E!==o;++E)s[E]=y*a[h+E]+m*a[c+E]+x*a[l+E]+M*a[u+E];return s}},dl=class extends lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let p=0;p!==o;++p)s[p]=a[c+p]*u+a[l+p]*h;return s}},pl=class extends lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},bn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zs(t,this.TimeBufferType),this.values=zs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zs(e.times,Array),values:zs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ul(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bs:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&vf(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qa,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,p=h+n;for(let d=0;d!==n;++d){let v=t[h+d];if(v!==t[u+d]||v!==t[p+d]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};bn.prototype.TimeBufferType=Float32Array,bn.prototype.ValueBufferType=Float32Array,bn.prototype.DefaultInterpolation=ks;var gi=class extends bn{};gi.prototype.ValueTypeName="bool",gi.prototype.ValueBufferType=Array,gi.prototype.DefaultInterpolation=Bs,gi.prototype.InterpolantFactoryMethodLinear=void 0,gi.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends bn{};fl.prototype.ValueTypeName="color";var ml=class extends bn{};ml.prototype.ValueTypeName="number";var gl=class extends lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Yt.slerpFlat(s,0,a,c-o,a,c,l);return s}},Fr=class extends bn{InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}};Fr.prototype.ValueTypeName="quaternion",Fr.prototype.DefaultInterpolation=ks,Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends bn{};vi.prototype.ValueTypeName="string",vi.prototype.ValueBufferType=Array,vi.prototype.DefaultInterpolation=Bs,vi.prototype.InterpolantFactoryMethodLinear=void 0,vi.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends bn{};vl.prototype.ValueTypeName="vector";var xl=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let d=c[u],v=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return v}return null}}},xf=new xl,yl=class{constructor(e){this.manager=e!==void 0?e:xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(i,s){n.load(e,i,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ua=class extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},cr=class extends ua{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},bo=new Ze,Dh=new P,Nh=new P,_l=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Dh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dh),Nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nh),t.updateMatrixWorld(),bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Bm=new Ze,km=new P,Gm=new P;var Ml=class extends _l{constructor(){super(new ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Ml}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Vm=new Ze,Hm=new Ze,Wm=new Ze;var Xm=new P,jm=new Yt,qm=new P,Ym=new P;var Zm=new P,Jm=new Yt,Km=new P,$m=new P;var Cl="\\[\\]\\.:\\/",yf=new RegExp("["+Cl+"]","g"),So="[^"+Cl+"]",_f="[^"+Cl.replace("\\.","")+"]",Mf=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",So)+/(WCOD+)?/.source.replace("WCOD",_f)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",So)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",So)+"$"),bf=["material","materials","bones","map"],Mt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yf,"")}static parseTrackName(e){let t=Mf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);bf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=class{constructor(r,e,t){let n=t||Mt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray],Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qm=new Float32Array(1);var Jr=class{constructor(e,t,n=0,i=1/0){this.ray=new Si(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return bl(e,this,n,t),n.sort(Oh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)bl(e[i],this,n,t);return n.sort(Oh),n}};function Oh(r,e){return r.distance-e.distance}function bl(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){let i=r.children;for(let s=0,a=i.length;s<a;s++)bl(i[s],e,t,!0)}}var eg=new ye;var tg=new P,ng=new P;var ig=new P;var rg=new P,sg=new Ze,ag=new Ze;var og=new P,lg=new ze,cg=new ze;var hg=new P,ug=new P,dg=new P;var pg=new P,fg=new Vr;var mg=new Qt;var gg=new P;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function tn(r,e="look",t="traveler"){let n=new Xe,i=new Xe;r.add(n),n.add(i);let s;function a(R,O,L,U,N,k,Q){let Y=new Fe(new At(U,N,k),new rt({color:Q}));return Y.position.set(R,O,L),Y.castShadow=!0,s&&(Y.name=s),i.add(Y),Y}let o=t==="flower-clasp",l=t==="angler",c=t==="child";if(c)for(let[R,O,L,U,N]of[[.16,1.1,.27,.82,11167899],[.46,1.4,.48,1.03,13732539],[.76,1.18,.23,.88,14985678],[.9,.84,.1,.62,15778526]])a(0,R,0,O,L,U*.7,N),a(0,R,0,O*.82,L,U,N);else a(0,.48,0,1.32,.66,1.03,o?9157810:l?7576243:15969650),a(0,.9,0,1.09,.32,.9,o?11195846:l?9482180:16762254),a(0,.16,0,1.07,.28,.9,o?7511961:l?5799062:15308899);let h=[];for(let R of[-.27,.27]){let O=a(R,c?.57:.64,.53,c?.16:.13,c?.19:.17,.08,4405558),L=a(R-.02,c?.62:.69,.578,.05,.05,.02,16773070);h.push({eye:O,glint:L}),a(R*1.55,c?.4:.46,.528,.17,.09,.05,c?15184542:15632768)}let u=a(0,c?.42:.48,.54,.12,.065,.05,8408387);if(o){s="kerchief",a(0,1.055,-.06,1.11,.13,.84,15982516),a(0,1.14,-.09,.84,.09,.66,16772299),a(0,.93,-.46,1.03,.24,.14,15059612),a(-.39,.81,-.49,.22,.24,.13,15982516).rotation.z=-.29;for(let R=0;R<5;R++){let O=R*2*Math.PI/5;a(.47+Math.sin(O)*.12,1.09+Math.cos(O)*.11,.37+Math.cos(O)*.06,.16,.14,.14,R%2?10337773:11652599)}a(.47,1.1,.45,.11,.11,.1,16768133)}else if(c){s="feather";for(let[R,O,L,U]of[[.35,.9,-.4,1],[.49,.84,-.85,.72]]){let N=new Xe;N.position.set(R,O,.11),N.rotation.z=L,N.scale.setScalar(U),i.add(N);for(let[k,Q,Y,ee,K]of[[0,.13,.065,.29,13146977],[.02,.32,.15,.27,16773846],[.06,.46,.17,.19,16775140],[.09,.58,.1,.11,16776175]]){let V=a(k,Q,0,Y,ee,.1,K);N.add(V)}}a(.36,.89,.15,.18,.13,.13,14789976)}else{if(t==="traveler"&&(s="scarf",a(0,.34,0,1.335,.11,1.045,10337773),a(-.44,.27,.54,.18,.22,.07,11652599).rotation.z=-.24),s==="scarf"){for(let R=0;R<4;R++)a(-.52+R*.05,.153,.559,.021,.065,.018,13162468);a(0,.366,.526,1.27,.016,.012,12176864)}s=null,a(0,1.11,0,.12,.22,.12,6837817),a(.15,1.23,0,.34,.12,.19,7837006)}let p;if(t==="angler"){let U=function(Q,Y,ee,K,V){let j=new Fe(new At(Y,ee,K),new rt({color:V,roughness:.76}));j.position.y=Q,j.castShadow=!0,L.add(j)};s="hat";for(let Q=-4;Q<=4;Q++){let Y=Q*.137,ee=[1.35,1.33,1.26,1.11,.86][Math.abs(Q)];a(0,1.132,Y,ee,.12,.14,Q%2?14662005:14069609)}for(let Q=-3;Q<=3;Q++){let Y=[.95,.93,.84,.67][Math.abs(Q)];a(0,1.278,Q*.114,Y,.22,.117,14332779),a(0,1.401,Q*.105,Y*.89,.036,.108,15189121),a(0,1.216,Q*.114,Y+.018,.044,.12,11240531)}a(.31,1.203,.522,.34,.023,.2,8559003),a(.31,1.15,.618,.34,.106,.018,7901073);for(let Q of[.225,.385])a(Q,1.225,.51,.038,.024,.115,16770745).rotation.y=-.22;s=null;let R=new Xe;R.name="bottle",i.add(R);let O=a(.63,.5,.28,.07,.35,.08,10585175);R.add(O),O.rotation.z=.21;let L=new Xe;R.add(L),L.position.set(.69,.3,.3),L.rotation.z=.15,U(0,.24,.3,.19,5734252),U(.16,.18,.07,.15,6720374),U(.23,.095,.12,.1,5734252),U(.3,.1,.055,.105,11768422),U(-.144,.207,.026,.165,4746848),U(.112,.206,.04,.17,6588020),U(.273,.118,.028,.115,7903618),U(-.014,.245,.088,.195,14796696);let N=new P,k=new Yt;p=Q=>{N.setFromMatrixColumn(Q.matrixWorld,0),i.getWorldQuaternion(k),N.applyQuaternion(k.invert()),R.rotation.y=Math.atan2(-N.z,N.x);let Y=.66*Math.abs(N.x)+.515*Math.abs(N.z);R.position.copy(N).multiplyScalar(Y+.06-.69)}}let d=0,v=0,g=0,f=0,y=0,m=1+Math.random()*3,x=2+Math.random()*4,M=0,E=1,_=0,S=Math.random()*Math.PI*2,A=0,w=0;return{root:n,body:i,placeFlask:p,get grounded(){return A===0},jump(R=5.2){A===0&&(w=R)},update(R,O,L,U=!1,N=!1){let k=Math.hypot(O,L)>.001,Q=S,Y=A>0;S=(S+R*(k?13:3))%(2*Math.PI),k&&(n.rotation.y=Math.atan2(O,L)),w-=15*R,A=Math.max(0,A+w*R),A||(w=0);let ee=Math.sin(S)*(k?.09:.027)+w*.014;if(i.scale.set(1-ee*.5,1+ee,1-ee*.5),i.position.y=A+(k?(1-Math.cos(S))*.07:0),N){k?_=(_+Math.hypot(O,L)/1.95)%1:_>0&&(_+=R/.27,_>=1&&(_=0));let D=Math.sin(Math.PI*_)**2;i.position.y=A+.24*D,_>0&&(i.scale.y=.91+.17*D,i.scale.x=1.045-.085*D)}else _=0;m-=R,m<-.2&&(m=2.4+Math.random()*3.6);let K=n.userData.speechFace,V=1-Math.exp(-12*R);d+=(+(K==="smile")-d)*V,v+=(+(K==="puzzled")-v)*V,g+=(+(K==="surprised")-g)*V,f+=(+!!K-f)*V,y=K?y+R:0;let j=(.5-.5*Math.cos(y*14))*(.5+.5*Math.cos(y*4));u.scale.set(1+.65*d-.35*v-.25*g,1+1.2*f*j+.9*g,1);let b=(m<0?1-.92*Math.sin(-m/.2*Math.PI):1)*(1-.55*d+.2*g);for(let{eye:D,glint:Z}of h)D.rotation.z=Math.sign(D.position.x)*(.2*d+.12*v),D.scale.y=b,Z.scale.y=b,Z.position.y=.64+.05*b;k||A>0||U||K?(M=0,x=Math.max(x,1)):M>0?M=Math.max(0,M-R):(x-=R)<=0&&(M=1.7,x=4+Math.random()*4,E=Math.random()<.5?-1:1);let T=Math.sin(Math.PI*M/1.7)**2;i.rotation.y+=(E*T*(e==="pond"?.08:.32)-i.rotation.y)*V,i.rotation.x+=((e==="pond"?.19:-.12)*T+.07*d-.16*g-i.rotation.x)*V,i.rotation.z+=(E*T*.075+.22*v-i.rotation.z)*V;let B=n.userData.reachCue;if(B){B.time+=R;let D=B.time;if(D>=0){let Z=Ce.smoothstep(D,0,.23)*(1-Ce.smoothstep(D,.86,1.22)),F=B.yaw-n.rotation.y;i.rotation.y=Math.atan2(Math.sin(F),Math.cos(F))*Z;let G=Math.sin(Math.PI*Ce.clamp((D-.1)/.2,0,1)),H=Ce.clamp((D-.3)/.5,0,1),se=4*H*(1-H),ne=Math.sin(Math.PI*Ce.clamp((D-.8)/.17,0,1));i.position.y+=.56*se,i.scale.y*=1-.17*G+.12*se-.12*ne,i.scale.x*=1+.09*G+.06*ne,D>=1.22&&delete n.userData.reachCue}}let $=n.userData.tossPose;return $&&(i.position.y+=$.lift,i.scale.y*=1+$.stretch,i.scale.x*=1-$.stretch*.45),k&&A===0&&(Y||S<Q)}}}var pr=r=>.92*Math.max(r.scale.x,r.scale.z);function au(r,e,t,n,i){return ga(r,r.position.x,r.position.z,e,t,n,i)}function Kr(r,e,t,n){return n.every(i=>i===r||Math.hypot(e-i.position.x,t-i.position.z)>=pr(r)+pr(i)-1e-7)}function $r(r,e,t,n,i){let s=r.position,a=(c,h)=>i(c,h)&&Kr(r,c,h,n);if(!a(s.x,s.z)&&!Kr(r,s.x,s.z,n)){for(let c=.15;c<=4;c+=.15)for(let h=0;h<32;h++){let u=s.x+c*Math.cos(h*Math.PI/16),p=s.z+c*Math.sin(h*Math.PI/16);if(a(u,p)){s.x=u,s.z=p;return}}return}let o=s.x+e,l=s.z+t;for(let c of n){if(c===r)continue;let h=o-c.position.x,u=l-c.position.z,p=Math.hypot(h,u),d=pr(r)+pr(c);p>0&&p<d&&(o=c.position.x+h*d/p,l=c.position.z+u*d/p)}if(a(o,l)){s.x=o,s.z=l;return}a(s.x+e,s.z)&&(s.x+=e),a(s.x,s.z+t)&&(s.z+=t)}function ga(r,e,t,n,i,s,a){let o=n-e,l=i-t,c=o*o+l*l;for(let u of s){if(r===u)continue;let p=u.position.x-e,d=u.position.z-t,v=c?Math.max(0,Math.min(1,(p*o+d*l)/c)):0,g=pr(r)+pr(u)-1e-7;if(Math.hypot(p-v*o,d-v*l)<g&&(Math.hypot(p,d)>=g||p*o+d*l>0||c===0))return!1}let h=Math.max(1,Math.ceil(Math.sqrt(c)/.035));for(let u=1;u<=h;u++)if(!a(e+o*u/h,t+l*u/h))return!1;return!0}function fr(r,e,t,n,i){let s=r.position;return ga(r,s.x,s.z,e,t,n,i)?[[e,t]]:Rl(r,e,t,n,i,!0)}function Rl(r,e,t,n,i,s=!1){let{x:a,z:o}=r.position,l=.24,c=[],h=new Map([["0,0",0]]);function u(f){f.priority=f.cost+Math.hypot(e-a-f.i*l,t-o-f.j*l);let y=0,m=c.length;for(;y<m;){let x=y+m>>1;c[x].priority>f.priority?y=x+1:m=x}c.splice(y,0,f)}u({i:0,j:0,parent:null,cost:0});let p=(f,y)=>i(f,y)&&Kr(r,f,y,n),d=s&&!p(e,t),v=Math.max(36,Math.ceil(Math.abs(e-a)/l)+10),g=Math.max(36,Math.ceil(Math.abs(t-o)/l)+10);for(;c.length;){let f=c.pop();if(f.cost>h.get(f.i+","+f.j))continue;let y=a+f.i*l,m=o+f.j*l,x=Math.hypot(y-e,m-t);if(d?x<=2&&p(y,m):x<l&&ga(r,y,m,e,t,n,i)){let M=d?[]:[[e,t]];d&&!f.parent&&M.push([y,m]);for(let E=f;E.parent;E=E.parent)M.push([a+E.i*l,o+E.j*l]);return M.reverse()}for(let[M,E]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]]){let _=f.i+M,S=f.j+E,A=_+","+S,w=f.cost+Math.hypot(M,E)*l;Math.abs(_)>v||Math.abs(S)>g||w+1e-9>=(h.get(A)??1/0)||ga(r,y,m,a+_*l,o+S*l,n,i)&&(h.set(A,w),u({i:_,j:S,parent:f,cost:w}))}}return[]}var $e={shore:3.6,tip:8.1,center:4,width:4.4,height:.27,plankStep:.5};function ii(r,e,t=0){return r>=$e.shore+t&&r<=$e.tip-t&&Math.abs(e-$e.center)<=$e.width/2-t}function Pl(r){return $e.height*Math.min(1,(r-$e.shore)/.7)}function Ll(r,e,t=0){if(!ii(r,e,-t))return 0;let n=Math.round(($e.tip-$e.shore)/$e.plankStep)-1,i=Math.min(n,Math.floor((r+t-$e.shore)/$e.plankStep));return Pl($e.shore+(i+.5)*$e.plankStep)}function ri(r){let e=r.position;e.y=Ll(e.x,e.z,.64*Math.max(r.scale.x,r.scale.z))}function ou(r,e,t,n,i){let s=new Xe;s.visible=!1,r.add(s);let a=new P(9,21,26),o=new Map,l=new Set,c=new Map,h=new P,u=new P,p=document.querySelector("#recollection"),d=p.querySelector("p"),v=p.querySelector(".rec-line"),g=p.querySelector(".rec-action"),f=document.querySelector("#cloud-curtain"),y=null,m=0,x=0,M=null,E,_,S,A,w=!1,R=()=>y?.steps[m];function O(re,b){re.rotation.y=Math.atan2(b.position.x-re.position.x,b.position.z-re.position.z)}function L(re){return new P(...Tr[re])}function U(){x=0,v.hidden=g.hidden=!0;let re=R();if(!re){V(!0);return}for(let{root:T}of E.values())delete T.userData.speechFace;let b=E.get(re.a).root;if(re.op==="shot"&&(d.textContent=y.title),re.op==="walk"){let T=L(re.b);c.set(re.a,fr(b,T.x,T.z,_,t)),d.textContent="跟上"+re.a}if(re.op==="meet"&&(M=re.a,d.textContent="去找"+M),re.op==="say"){let T=E.get(re.a==="阿团"?M:"阿团").root;O(b,T),O(T,b),b.userData.speechFace=re.b,v.textContent=re.text,v.hidden=!1,d.textContent="",g.textContent="下一句 · E",g.hidden=!1}}function N(){m++,U()}function k(){if(!y||w)return;let re=R();(re.op==="say"&&x>.24||re.op==="meet"&&E.get("阿团").root.position.distanceTo(E.get(re.a).root.position)<2.85)&&N()}g.onclick=k;function Q(re){if(!(!y&&!w)&&(w||/^Digit/.test(re.code)||["Space","KeyE","Escape","KeyW","KeyA","KeyS","KeyD","ArrowLeft","ArrowRight","ArrowDown","ArrowUp","KeyF"].includes(re.code))){if(re.stopImmediatePropagation(),re.preventDefault(),!y||w)return;if(re.type==="keyup"){l.delete(re.code);return}if(l.add(re.code),re.repeat)return;(re.code==="KeyE"||re.code==="Space")&&k(),re.code==="Escape"&&V(!1)}}for(let re of["keydown","keyup"])window.addEventListener(re,Q,!0);window.addEventListener("blur",()=>l.clear());let Y=re=>new Promise(b=>setTimeout(b,re));async function ee(re){w=!0,f.hidden=!1,f.getBoundingClientRect(),f.classList.add("cover");let b=matchMedia("(prefers-reduced-motion:reduce)").matches?30:580;try{await Y(b),re(),await Y(100)}finally{f.classList.remove("cover"),await Y(b),f.hidden=!0,w=!1}}function K(re){if(!(y||w))return ee(()=>{S={position:e.position.clone(),rotation:e.quaternion.clone(),zoom:e.zoom},A=n().map(b=>[b,b.visible]);for(let[b]of A)b.visible=!1;y=re,m=0,M=null,E=new Map,c.clear(),l.clear();for(let[b,T]of re.cast){o.has(b)||o.set(b,tn(s,b==="草帽"?"pond":"look",ka[b]));let B=o.get(b);B.root.visible=!0,B.root.rotation.y=.2,B.root.position.copy(L(T)),ri(B.root),B.root.scale.setScalar(b==="阿团"?1:.84),E.set(b,B)}_=[...E.values()].map(b=>b.root),s.visible=!0,p.hidden=!1,document.body.classList.add("in-memory"),h.copy(E.get(R().a).root.position),U()})}function V(re){!y||w||ee(()=>{let b=y;y=null,l.clear(),c.clear(),p.hidden=!0,s.visible=!1;for(let{root:T}of o.values())T.visible=!1,delete T.userData.speechFace;for(let[T,B]of A)T.visible=B;e.position.copy(S.position),e.quaternion.copy(S.rotation),e.zoom=S.zoom,e.updateProjectionMatrix(),document.body.classList.remove("in-memory"),i(b,re)})}p.querySelector(".rec-leave").onclick=()=>V(!1);function j(re){if(!y)return;let b=R();if(!b)return;x+=re;let T=E.get("阿团").root,B=E.get(b.a).root;for(let[D,Z]of E){let F=Z.root,G=F.position,H=G.x,se=G.z;if(!w&&b.op==="walk"&&D===b.a){let ne=c.get(D);if(ne?.length){let[C,oe]=ne[0],z=C-H,X=oe-se,W=Math.hypot(z,X),ue=Math.min(1,re*2.1/(W||1));if($r(F,z*ue,X*ue,_,t),Math.hypot(C-G.x,oe-G.z)<.08)ne.shift();else if(Math.hypot(H-G.x,se-G.z)<.002){let pe=L(b.b);c.set(D,fr(F,pe.x,pe.z,_,t))}}else{let C=L(b.b);G.distanceTo(C)>1.35&&c.set(D,fr(F,C.x,C.z,_,t))}}if(!w&&D==="阿团"&&["walk","meet"].includes(b.op)){let ne=(X,W)=>Number(l.has(X)||l.has(W)),C=ne("KeyD","ArrowRight")-ne("KeyA","ArrowLeft"),oe=ne("KeyS","ArrowDown")-ne("KeyW","ArrowUp"),z=re*4.6/(Math.hypot(C,oe)||1);$r(F,C*z,oe*z,_,t)}ri(F),Z.update(re,G.x-H,G.z-se,b.op==="say")}let $=u.copy(b.op==="shot"?B.position:T.position);b.op!=="shot"&&B!==T&&B.position.distanceTo(T.position)<9&&$.lerp(B.position,.32),$.y+=.75,h.lerp($,1-Math.exp(-4*re)),e.position.copy(h).add(a),e.lookAt(h),e.zoom=Ce.damp(e.zoom,(e.right-e.left)/(b.op==="say"?10:15),5,re),e.updateProjectionMatrix(),e.updateMatrixWorld(),b.op==="say"&&(u.copy(B.position),u.y+=1.65,u.project(e),v.style.left=(u.x+1)*50+"%",v.style.top=(1-u.y)*50+"%"),b.op==="meet"&&(g.hidden=T.position.distanceTo(B.position)>=2.85,g.textContent="交谈 · E"),!w&&(b.op==="shot"&&x>1.45||b.op==="walk"&&!c.get(b.a)?.length&&B.position.distanceTo(L(b.b))<1.35)&&N()}return{enter:K,update:j,get active(){return!!y||w}}}var si=100,va=[["apple","枝头"],["garden","田垄"],["angle","池畔"],["courtMemory","林间"]];function lu(r,e,t){let n=document.createElement("button");n.className="memory-jar",n.innerHTML=`<svg class="memory-vial" viewBox="0 0 48 56" aria-hidden="true">
  <defs>
   <linearGradient id="vial-glass" x2="1" y2=".7" gradientUnits="objectBoundingBox">
    <stop stop-color="#a1b5a3"/><stop offset=".38" stop-color="#596e66"/><stop offset=".8" stop-color="#384e4b"/><stop offset="1" stop-color="#8a9e88"/>
   </linearGradient>
   <linearGradient id="vial-amber" x2="0" y2="1">
    <stop stop-color="#f4d38b"/><stop offset=".23" stop-color="#c6a766"/><stop offset="1" stop-color="#93774d"/>
   </linearGradient>
   <clipPath id="vial-interior"><path d="M18 17h12v4q0 2 4 5 5 4 5 11v6q0 6-7 7H16q-7-1-7-7v-6q0-7 5-11 4-3 4-5z"/></clipPath>
  </defs>
  <path d="M16 13h16v7q0 2 4 5 6 5 6 12v6q0 9-9 10H15Q6 52 6 43v-6q0-7 6-12 4-3 4-5z" fill="url(#vial-glass)" stroke="#ead9ad" stroke-width="1.6"/>
  <g clip-path="url(#vial-interior)">
   <g class="vial-fill"><path d="M7 0Q16-2 24 0t17 0v38H7z" fill="url(#vial-amber)"/><path d="M8 0q8-2 16 0t16 0" fill="none" stroke="#ffdf9e" stroke-width="1.5"/></g>
   <path d="M21 47q5-7 3-13" fill="none" stroke="#a7bc89" stroke-width="1.7"/>
   <path d="M23 43q-6 0-7-5 6 0 7 5m1-2q1-5 7-5-1 5-7 5" fill="#b6c791"/>
   <g transform="translate(24 32)" fill="#a8ceed" stroke="#739bab" stroke-width=".55">
    <ellipse cy="-3.5" rx="2.65" ry="3.35"/><ellipse cy="-3.5" rx="2.65" ry="3.35" transform="rotate(72)"/><ellipse cy="-3.5" rx="2.65" ry="3.35" transform="rotate(144)"/><ellipse cy="-3.5" rx="2.65" ry="3.35" transform="rotate(216)"/><ellipse cy="-3.5" rx="2.65" ry="3.35" transform="rotate(288)"/>
    <circle r="1.9" fill="#ffda84" stroke="#ab894e"/>
   </g>
  </g>
  <path d="M12 31q-3 4-2 10m3 6q1.5 2 4 2" fill="none" stroke="#fff6da" opacity=".73" stroke-width="1.7" stroke-linecap="round"/>
  <path d="m17 5 1 9h12l1-9z" fill="#b48a5f" stroke="#765d44"/><path d="M17 5q7-3 14 0-6 3-14 0" fill="#dcc398"/>
  <rect x="14.5" y="12.5" width="19" height="4.5" rx="2" fill="#b7c4ae" stroke="#ecddba" stroke-width="1.2"/>
 </svg><span>拾忆瓶<small></small></span>`;let i=document.createElement("span");i.id="memory-jar-help",i.className="memory-help",i.setAttribute("role","tooltip"),i.textContent=`这个世界存在一些异象，在阿棠的引导下，逐渐修复它们吧！
与世界的交互，会凝聚记忆点到“拾忆瓶”中，也许，可以挖掘一段全新的剧情......`,n.append(i),n.setAttribute("aria-describedby",i.id);let s=document.createElement("section");s.className="memory-progress",s.hidden=!0;let a=document.createElement("strong");a.textContent="主线进度",s.append(a),s.setAttribute("aria-live","polite");let o=va.map(([,g])=>{let f=document.createElement("span");return f.textContent=g,s.append(f),f});document.body.append(n,s);let l=Math.min(si,Math.max(0,Number(r)||0)),c=0;function h(){n.querySelector(".vial-fill").setAttribute("transform","translate(0 "+(53-34*l/si)+")"),n.dataset.full=String(l===si),n.setAttribute("aria-label","拾忆瓶，"+l+" / "+si+(l===si?"，点击查看":"")),n.querySelector("small").textContent=l===si?"100 / 100 记忆点":l+" / "+si}n.onclick=t;let u=new Set(e),p=new P;function d(g,f){if(l>=si)return;l++,h(),p.set(g.x,(g.y??0)+.55,g.z).project(f);let y=(1+p.x)*innerWidth/2,m=(1-p.y)*innerHeight/2,x=n.firstChild.getBoundingClientRect(),M=x.left+x.width/2-y,E=x.top+x.height/2-m,_=document.createElement("i");_.className="memory-light",_.style.left=y+"px",_.style.top=m+"px",document.body.append(_),_.style.setProperty("--heading",Math.atan2(E,M)+"rad");let S=_.animate([{opacity:1,transform:"translate(0,0) scale(1.15)"},{opacity:1,transform:"translate("+M*.18+"px,"+(E*.18-16)+"px) scale(1)",offset:.24},{opacity:1,transform:"translate("+M*.62+"px,"+(E*.62-22)+"px) scale(.92)",offset:.68},{opacity:.85,transform:"translate("+M+"px,"+E+"px) scale(.65)"}],{duration:620,easing:"linear"});S.onfinish=()=>{_.remove(),n.firstChild.animate([{filter:"brightness(1.5)"},{filter:"none"}],{duration:260})}}function v(g,f){c>0&&(c=Math.max(0,c-f),c||(s.hidden=!0)),va.some(([y])=>g.includes(y)&&!u.has(y))&&(s.hidden=!1,o.forEach((y,m)=>{let x=va[m][0];y.classList.toggle("done",u.has(x))}),s.getBoundingClientRect(),o.forEach((y,m)=>{let x=va[m][0];g.includes(x)&&(u.add(x),y.classList.add("done"))}),c=6)}return h(),{gain:d,update:v,spend(){l=0,h()},get points(){return l}}}var bt,gr,Il,mr=0,xa=0,Vn=!1;try{Vn=localStorage.getItem("orchard.muted")==="yes"}catch{}var ya=r=>440*2**((r-69)/12);function Pn(r,e,t,n,i="sine",s=e){let a=bt.createOscillator(),o=bt.createGain();a.type=i,a.frequency.setValueAtTime(e,r),a.frequency.exponentialRampToValueAtTime(s,r+t),o.gain.setValueAtTime(1e-4,r),o.gain.exponentialRampToValueAtTime(n,r+.012),o.gain.exponentialRampToValueAtTime(1e-4,r+t),a.connect(o).connect(gr),a.start(r),a.stop(r+t+.02),a.onended=()=>{a.disconnect(),o.disconnect()}}function cn(r,e,t,n){let i=bt.createBufferSource(),s=bt.createBiquadFilter(),a=bt.createGain();i.buffer=Il,i.loop=!0,s.type="bandpass",s.frequency.value=t,s.Q.value=.8,a.gain.setValueAtTime(1e-4,r),a.gain.linearRampToValueAtTime(n,r+.018),a.gain.exponentialRampToValueAtTime(1e-4,r+e),i.connect(s).connect(a).connect(gr),i.start(r),i.stop(r+e),i.onended=()=>{i.disconnect(),s.disconnect(),a.disconnect()}}var cu=[[50,57,66],[47,54,62],[43,50,59],[45,52,61],[50,57,66],[54,61,69],[43,50,59],[45,52,62]],Sf=[[74,0,76,78,0,0],[73,0,0,71,69,0],[67,71,0,74,0,76],[73,0,69,0,0,0],[74,0,76,81,0,78],[76,0,73,69,0,0],[71,0,74,78,76,0],[73,0,0,74,0,0]];function hu(){if(!bt||bt.state!=="running"||document.hidden)return;let r=bt.currentTime;if(mr<r&&(mr=r+.04),mr>r+.3)return;let e=cu[xa],t=.34;for(let[n,i]of[e[0],e[1],e[2],e[1],e[2],e[1]].entries())Pn(mr+n*t,ya(i),n?.6:1.2,n?.028:.058,"triangle");Sf[xa].forEach((n,i)=>{if(n){let s=mr+i*t;Pn(s,ya(n),.94,.068),Pn(s,ya(n+12),.31,.012)}}),mr+=6*t,xa=(xa+1)%cu.length}function du(r){function e(){if(!bt){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;bt=new n,gr=bt.createGain(),gr.gain.value=Vn?0:.72,gr.connect(bt.destination),Il=bt.createBuffer(1,bt.sampleRate,bt.sampleRate);let i=Il.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;setInterval(hu,100)}bt.state!=="running"&&bt.resume().then(hu).catch(()=>{})}function t(){r.textContent=Vn?"声音 · 关":"声音 · 开",r.setAttribute("aria-pressed",String(!Vn))}t(),r.onclick=()=>{Vn=!Vn,e(),gr?.gain.setTargetAtTime(Vn?0:.72,bt.currentTime,.035),t();try{localStorage.setItem("orchard.muted",Vn?"yes":"no")}catch{}},addEventListener("pointerdown",e,{capture:!0}),addEventListener("keydown",e,{capture:!0}),document.addEventListener("visibilitychange",()=>{document.hidden?bt?.suspend():bt&&bt.resume().catch(()=>{})})}var uu=new Map;function Tt(r,e=0){if(!bt||bt.state!=="running"||Vn)return;let t=bt.currentTime;if(t-(uu.get(r)??-1)<.07)return;uu.set(r,t);let n=(i,s,a=.34,o=.13)=>Pn(t+i,ya(s),a,o);switch(r){case"header":Pn(t,245+e*75,.11+.11*e,.16+e*.19,"sine",76),cn(t,.065+e*.065,1350+e*700,.13+e*.16),e>.66&&n(.02,79,.2,.07);break;case"score":case"missPoint":(r==="score"?[74,78,81]:[69,66]).forEach((i,s)=>n(s*.105,i));break;case"serve":Pn(t,330,.13,.14,"triangle",175);break;case"fruit":cn(t,.16,2900,.17),n(.03,83);break;case"flower":case"pickup":n(0,r==="flower"?78:74),n(.072,r==="flower"?83:81,.23,.09);break;case"search":cn(t,.27,1650,.19),cn(t+.23,.32,2350,.12);break;case"pull":cn(t,.15,750,.23),Pn(t,175,.1,.14,"triangle",280);break;case"sow":cn(t,.085,1900,.15);break;case"water":cn(t,.26,2600,.22);break;case"cast":cn(t,.24,3400,.17);break;case"bite":cn(t,.24,1150,.22),n(.08,86,.21);break;case"catch":cn(t,.38,1700,.24),[74,78,83].forEach((i,s)=>n(.04+s*.08,i));break;case"wing":cn(t,.15,1700,.16),cn(t+.09,.14,2200,.12),Pn(t+.06,1800,.13,.07,"sine",2480);break;case"reel":Pn(t,540,.045,.055,"triangle",340);break;case"escape":Pn(t,370,.21,.1,"triangle",185);break}}var wf=new At(1,1,1);function hn(r){let e=new Map,t=new ft;function n(s,a,o,l,c,h,u){let p=e.get(u)||[];e.set(u,p),t.position.set(s,a+c/2,o),t.scale.set(l,c,h),t.updateMatrix();let d=t.matrix.clone();return p.push(d),d}function i(s){for(let[a,o]of e){let l=new Cn(wf,new rt({color:a,roughness:1}),o.length);o.forEach((c,h)=>l.setMatrixAt(h,c)),l.castShadow=l.receiveShadow=!0,r.add(l),s?.(l,o)}}return{box:n,finish:i}}function _a(r,e,t){let n=(s,a,o,l,c,h,u)=>r(e+s,a,t+o,l,c,h,u);n(0,0,0,6,.5,4.8,9732712),n(0,.5,0,5.7,3,4.5,16768156);for(let s of[-2.75,2.75])n(s,.45,2.25,.24,3.15,.25,8672308);n(0,.5,2.31,1.18,2.2,.16,7950651),n(.36,1.42,2.42,.13,.13,.1,16760404);for(let s of[-1.85,1.85]){n(s,1.3,2.32,1.08,1.22,.16,7884342),n(s,1.46,2.42,.84,.91,.1,9160386),n(s,1.45,2.49,.1,.94,.08,16771242),n(s,1.87,2.49,.85,.1,.08,16771242),n(s,1.13,2.52,1.35,.24,.43,10839107);for(let a=-1;a<=1;a++)n(s+a*.34,1.37,2.54,.22,.26,.22,14977652)}let i=[12342334,13001798,13594704,12146240,13197639];for(let s=0;s<12;s++){let a=5.7-s*.45,o=3.45+s*.16;n(0,o,0,6.75,.18,a,i[0]);for(let l of[-1,1])for(let c=0;c<16;c++)n(-3.14+c*.418,o+.14,l*(a/2-.13),.407,.09,.32,i[(c*7+s*3+c*s)%5])}for(let s=0;s<7;s++)n(-2.7+s*.9,3.18,2.34,.14,.29,.28,8479557);for(let s of[-1.85,1.85])for(let a of[-1,1])for(let o=0;o<5;o++)n(s+a*.7,1.4+o*.19,2.38,.26,.16,.12,7574657);n(1.9,4.25,-.65,.72,1.6,.76,9074024),n(1.9,5.78,-.65,.91,.23,.92,11838347);for(let s=0;s<2;s++)n(0,0,2.75+s*.49,2.05,.45-s*.18,.58,11574139)}function vr(r,e,t,n,i){let s=(o,l,c,h,u,p,d)=>r(e+o*n,l*n,t+c*n,h*n,u*n,p*n,d);s(0,0,0,.66,2,.69,8871998),s(-.36,1.24,0,.65,.35,.34,8871998);let a=[5669452,6721104,7904855,8956254,9876843];for(let o=-3;o<=3;o++)for(let l=-3;l<=3;l++){let c=Math.sin((o*13+l*19+e*5+t)*12.8)*.22,h=(o*o+l*l)/12+c;if(h>1.13)continue;let u=1.64+h*.34,p=3.96-h*1.26+c;s(o*.44,u,l*.44,.455,p-u,.455,a[Math.min(3,Math.floor((1-h)*1.6+2+c*3))]||a[1]),s(o*.44,p,l*.44,.454,.12,.454,a[c>.04?4:3])}if(i)for(let[o,l,c]of Ul)Qr((h,u,p,...d)=>s(o+h,l+u,c+p,...d))}var Ul=[[-.88,2.25,1.13],[.45,2.6,1.5],[1.48,2.38,.34]];function Qr(r){let e=[.09,.132,.158,.173,.172,.16,.135,.092],t=[12144192,14048837,14906704,15503716];for(let n=0;n<e.length;n++){let i=e[n],s=.026;for(let a=-6;a<=6;a++){let o=a*s;if(Math.abs(o)>=i)continue;let l=Math.max(s,Math.round(Math.sqrt(i*i-o*o)/s)*s*2),c=n===7&&Math.abs(a)<2?.022:0,h=a<0&&n>2?2:n<2?0:1;r(o,n*.038,0,s,.038-c,l,t[h]),a===-3&&n>=4&&n<=6&&r(o,n*.038+.003,l/2,s,.025,.006,t[3])}}r(0,.275,0,.033,.092,.032,7820090),r(.014,.353,0,.032,.027,.032,7820090),r(.047,.331,0,.075,.017,.045,7967059),r(.092,.342,0,.048,.015,.031,10004324)}var Tf=[1.35,-2.48],Ma=[Tf],pu=[[-37,-37,-28,-21],[-36,-35,-32,-17],[-34,-33,-35,-13],[-32,-31,-37,-10],[-30,-29,-39,-8],[-28,-27,-40,-7],[-26,-25,-41,-5],[-24,-23,-42,0],[-22,-21,-43,4],[-20,-18,-43,8],[-17,-15,-44,12],[-14,-12,-45,15],[-11,-10,-44,17],[-9,-9,-43,18],[-8,-7,-46,19],[-6,-4,-47,20],[-3,-2,-48,21],[-1,0,-48,21],[1,2,-48,20],[3,5,-47,21],[6,7,-46,21],[8,8,-45,21],[9,10,-42,20],[11,11,-35,19],[12,12,5,18],[13,13,8,16]],fu=pu[0][0];function mu(r){return pu.find(([e,t])=>r>=e&&r<=t)}function un(r,e){let t=mu(Math.round(e));return!!t&&Math.round(r)>=t[2]&&Math.round(r)<=t[3]}var Dl=[[-8,0],[-12,0],[-16,-1],[-19,-3],[-21,-6],[-21,-11.5]];function ba(r,e){let t=1/0;for(let n=1;n<Dl.length;n++){let[i,s]=Dl[n-1],[a,o]=Dl[n],l=a-i,c=o-s,h=Math.max(0,Math.min(1,((r-i)*l+(e-s)*c)/(l*l+c*c)));t=Math.min(t,Math.hypot(r-i-h*l,e-s-h*c))}return t}var es=38;function Nl(r){if(r<8||r>es)return null;let e=Math.max(0,r-34);return[r,r,-54+e,33-e]}function gu(r){return Nl(r)||mu(r)}function vu(r,e,t,n,i,s,a,o,l,c){for(let h=0;h<s;h++){let u=a+h*Math.PI*2/s,p=Math.cos(u),d=Math.sin(u);r(e+p*i*.56,t,n+d*i*.56,i*.83,i*.23,i*.62,o).makeRotationY(-u).scale({x:i*.83,y:i*.23,z:i*.62}).setPosition(e+p*i*.56,t+i*.115,n+d*i*.56),r(e+p*i*.87,t+i*.13,n+d*i*.87,i*.38,i*.17,i*.38,l)}r(e,t+i*.16,n,i*.5,i*.21,i*.5,c),r(e-i*.06,t+i*.37,n,i*.2,i*.08,i*.2,16770978)}function xr(r,e,t,n){r.markFlower?.(n>.64?"黄野花":n>.32?"白野花":"粉野花");let i=n>.64?[15977321,16770457]:n>.32?[15328462,16774883]:[14654106,15907771];r(e,0,t,.029,.24,.032,7770190),r(e-.032,.08,t,.075,.021,.037,9085548),r(e+.028,.14,t-.012,.066,.023,.04,8558439),vu(r,e,.23,t,.11,6,n*3,...i,14395987)}function Sa(r,e,t,n){r.markFlower?.("勿忘我");let i=[8762599,9882093,8888027][Math.floor(n*3)];for(let s=0;s<3;s++){let a=n*6+s*2.4,o=e+.11*Math.cos(a),l=t+.11*Math.sin(a),c=.23+.08*s;r(o,0,l,.027,c,.027,7771243),r(o+.037,.09,l,.096,.026,.05,9414521),r(o+.088,.106,l,.043,.018,.032,10531979),vu(r,o,c,l,.113,5,a,i,11982572,16109424)}}var ai=[[-14,-2],[-18,1],[-23.4,-4.8],[-15.6,5.7],[-25,-2],[-38,4.5],[-43,-4]],Ie={x:-21,z:-19,width:8.4,length:15,serveOffset:4.6,netClearance:.85};function Ol(r,e,t,n){let i=(s,a,o,l)=>r(e,s*n,t,a*n,o*n,a*n,l);i(0,.4,2.2,7956553);for(let s=0;s<3;s++)for(let a=0;a<3;a++)i(1+s*.82+a*.29,2.4-s*.59-a*.28,.36,[5339226,6456937,7574642][s])}function xu(r,e,t){let n=[[-12.6,-7.7,1.05],[-15.4,-8.1,1.27],[-17.9,-7,.91],[-20.7,-6.8,1.12],[-21.8,-3.5,1.2],[-18.1,-3.1,.78],[-15.8,-4.6,.9],[-12.6,-4.8,.75],[-21.8,.1,1.05],[-20.9,2.9,.81],[-16.1,1.5,1.06],[-13.3,2.8,.74],[-19.1,5.6,1.06],[-16.8,7.4,.87],[-14,7.1,.76]];for(let a=0;a<8;a++)for(let o=0;o<6;o++){let l=Math.sin(a*4.7+o*1.6),c=-23-a*3.1+l*.85,h=-8.4+o*3.25+Math.sin(o+a*2)*.9;if(!un(c-1.2,h-1.2)||!un(c+1.2,h+1.2)||Math.abs(c-Ie.x)<7&&Math.abs(h-Ie.z)<Ie.length/2+1.8||Math.abs(h-1.7*Math.sin(c*.48))<1.5||ai.some(([d,v])=>Math.hypot(c-d,h-v)<1.7))continue;let u=.82+.3*(1+l),p=h>Ie.z+Ie.length/2&&Math.abs(c-Ie.x)<6;n.push([c,h,p?Math.min(u,.5):u])}let i=8703;function s(){return i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296}for(let a=0;a<1500;a++){let o=-15+s()*36,l=-28+s()*26,c=-12+Math.max(0,o+2)*.52+Math.sin(o*.67)*.7;if(l>c||![-1,1].every(p=>[-1,1].every(d=>un(o+p,l+d))))continue;let u=(c-l<2?.65:.88)+s()*.34;n.some(([p,d,v])=>Math.hypot(p-o,d-l)<1.45*(v+u))||n.push([o,l,u])}for(let a=0;a<2200;a++){let o=-45+s()*38,l=-37+s()*27,c=.76+s()*.5;o>-15&&l>-28||Math.abs(o-Ie.x)<Ie.width/2+2.4&&Math.abs(l-Ie.z)<Ie.length/2+2.4||[-1,1].every(h=>[-1,1].every(u=>un(o+h,l+u)))&&(n.some(([h,u,p])=>Math.hypot(o-h,l-u)<1.48*(c+p))||n.push([o,l,c]))}for(let a=0;14+a*3.2<es;a++)for(let o=0;o<25;o++){let l=-52+o*3.45+a%2*1.6+(s()-.5)*1.2,c=14+a*3.2+(s()-.5)*1.25+Math.sin(l*.32)*1.1+(l>4?2:0),h=Nl(Math.round(c));if(!h||l<h[2]+1.4||l>h[3]-1.4)continue;let u=(a===0?.55:a===1?.8:.94)+s()*.32;n.push([l,c,u])}n.forEach(([a,o,l],c)=>{Math.abs(a-Ie.x)<Ie.width/2+1.8&&Math.abs(o-Ie.z)<Ie.length/2+1.5||ba(a,o)<1.6+1.5*l||(c%3===0?Ol(r,a,o,l):vr(r,a,o,l,!1),t(a,o,.95*l,.95*l))});for(let[a,o]of ai)for(let l=0;l<8;l++){let c=l*2.4,h=.22+.065*l,u=a+Math.cos(c)*h,p=o+Math.sin(c)*h;xr(e.at(u,p),u,p,l%4===0?.45:.16)}}var et={林间小径:[-19,0,-3],球场近端:[Ie.x,0,Ie.z+Ie.length/2+1],球后阿团站位:[Ie.x+Ie.width/2-1.05,0,Ie.z+1.25],球后小羽站位:[Ie.x+Ie.width/2-1.05,0,Ie.z-1.25],场边等候处:[Ie.x+Ie.width/2+.95,0,Ie.z-Ie.length*.28],林间球场对面:[Ie.x,0,Ie.z-Ie.serveOffset],门前花丛:[-7.55,.42,-3.35],果树旁小路:[4,0,-2.7],池边芦苇:[4.15,0,5.35],菜园收获处:[-9.65,.3,3],菜园水管:[-7.8,.14,1.9],菜园入口:[-7.8,0,1.35],菜园来客站位:[-10.55,0,.85],菜园右篱外:[-4.75,0,.75],果树西侧路面:[-.8,0,0],池西路口:[3.8,0,0],屋前岔路:[-5,0,0],门前路标:[-5,0,-1.75],糖树路标:[1.55,0,-1.12],苹果屋门前:[-5,0,-3],码头钓位:[$e.tip-.9,$e.height,$e.center-.98],玩家钓位:[$e.tip-.9,$e.height,$e.center+.98],池面鱼群:[12.8,0,7.2],抛竿水面:[$e.tip+1.2,-.12,$e.center+.98]},[Ef,,Af]=et.场边等候处,wa={场边等候处:Math.atan2(Ie.x-Ef,Ie.z-Af)};function yu(r,e,t=()=>{}){let{x:n,z:i}=Ie,s=Ie.width/2-.55,a=Ie.length/2-.55,o=Ie.serveOffset,l=.95,c=4.55,h=hn(r),u=h.box;for(let fe of[-1,1])u(n,.02,i+fe*Ie.length/2,Ie.width,.03,.055,14339493),u(n+fe*Ie.width/2,.02,i,.055,.03,Ie.length,14339493);for(let fe=-5;fe<=5;fe++)u(n+fe*.72,.02,i,.37,.028,.04,14339493);for(let fe of[-1,1])u(n+fe*Ie.width/2,0,i,.12,1.27,.12,10714449);u(n,1.15,i,Ie.width,.055,.048,15851438);for(let fe=0;fe<3;fe++)u(n,.48+fe*.22,i,Ie.width,.024,.024,12429705);for(let fe=0;fe<=24;fe++)u(n-Ie.width/2+fe*Ie.width/24,.48,i,.02,.68,.02,12891284);h.finish();let p=tn(r,"look","child");p.root.scale.setScalar(.8),p.root.position.set(n,0,i-o);let d=new Fe(new Sn(.24,12,8),new rt({color:16758893,flatShading:!0})),v=new Fe(new Ri(.235,.018,5,16),new rt({color:16772027}));d.add(v),r.add(d);function g(fe,Pe,Me){let Ae=new Fe(fe,new mt({color:Pe,transparent:!0,opacity:Me,depthWrite:!1}));return Ae.rotation.x=-Math.PI/2,r.add(Ae),Ae}let f=new Xe;r.add(f),f.visible=!1,f.rotation.x=-Math.atan2(20,22);let y=new mt({color:16770211,transparent:!0,depthWrite:!1}),m=new Fe(new zt(.26,.31,32),y);f.add(m);let x=new mt({color:16773575,transparent:!0,depthWrite:!1}),M=new Rn(.09,6);for(let fe=0;fe<8;fe++){let Pe=fe*Math.PI/4+.18,Me=new Fe(M,x);Me.position.set(.44*Math.cos(Pe),.44*Math.sin(Pe),.015),Me.rotation.z=Pe,Me.scale.set(1.45,.54,1),f.add(Me)}let E=matchMedia("(prefers-reduced-motion: reduce)").matches,_=new ze(16755784),S=new ze(12379306),A=1/0,w=0,R=.25,O=!1;function L(fe,Pe=!1){Tt("header",fe),O=Pe,w=fe,A=0,R=.22+.18*fe,f.position.copy(d.position),f.visible=!0;for(let Me=1;Me<f.children.length;Me++)f.children[Me].visible=fe>=.65||Me%2===0}function U(fe){if(!f.visible)return;let Pe=Math.min(1,A/R),Me=(1-Pe)**2;f.scale.setScalar((.62+1.05*w)*(1+1.35*(1-Me))),y.opacity=.85*Me,x.opacity=Me;let Ae=(.17+.27*w)*Math.cos(Math.PI*2*Pe)*Me;d.scale.set(1+Ae,1-Ae,1+Ae*.35),d.material.emissive.setHex(16757571),d.material.emissiveIntensity=w*Me,ue.target.y=.25+(E?0:.15*w*Math.sin(2*Math.PI*Pe)*Me),Pe===1&&(f.visible=!1),A+=fe}let N=g(new zt(l-.09,l,40),16768389,1),k=g(new Rn(l,40),16770726,.28),Q=g(new zt(.72,.88,44),16768920,.9);Q.position.set(n,.065,i+o),Q.visible=!1;let Y=!1,ee=0,K=g(new Rn(.22,16),7891019,.35),V=document.createElement("div");V.className="farm-tools rally",V.hidden=!0;let j=document.createElement("span"),re=document.createElement("button"),b=document.createElement("button"),T=document.querySelector("#game-hud");b.textContent="离开",b.hidden=!0,T.querySelector(".hud-actions").prepend(b),V.append(j,re),document.body.append(V);let B=document.createElement("div");B.className="rally-score",B.hidden=!0,T.prepend(B),B.innerHTML="<span>阿团 <b>0</b></span><i>·</i><span><b>0</b> 小羽</span>";let $=B.querySelectorAll("b"),D=document.createElement("div");D.className="rally-result",D.hidden=!0,D.setAttribute("role","status"),document.body.append(D);let Z=g(new zt(.29,.36,32),16767619,.9);Z.visible=!1;let F=!1;function G(){if(pe==="celebrate")for(let fe of[e,p.root])delete fe.userData.speechFace,fe.rotation.z=0;D.hidden=!0,Z.visible=!1}let H=7,se=0,ne=0,C=!1,oe=0,z=new Set,X=new P,W=new P,ue={target:new P(n,.25,i),height:10},pe="idle",_e=0,Ue=0,ae=!1,ge=0,Le=0,ke="",be=1,Oe=1,Re=0,ht=0,gt="",dt=!1,at=0,ot=0,vt=.77;function le(fe,Pe,Me){dt=!0,at+=fe/1.38,at>=1&&(at%=1,ot=vt,vt=(Math.random()-.5)*1.95,Pe.distanceTo(Me)<9&&Tt("header",.1));let Ae=at,Ve=Ce.smoothstep(Ae,.09,.85),tt=Ce.lerp(ot,vt,Ve);Me.x=n+tt,Me.z=i-o+.18*Math.sin(tt*2),Me.y=.22*Math.max(0,Math.cos(Ae*Math.PI*2))**3,d.position.set(n+Ce.lerp(ot,vt,Ae),1.27+1.85*4*Ae*(1-Ae),Me.z),d.rotation.z+=fe*2.1,wt(!0)}function Et(){z.clear(),ge=0}function wt(fe){d.visible=K.visible=fe}function lt(){Et(),Q.visible=!1,pe="ready",se=ne=0,C=!1,Le=0,ke="",be=Oe=1,e.position.set(n,0,i+o),e.rotation.y=Math.PI,p.root.position.set(n,0,i-o),p.root.rotation.y=0,d.position.set(n,1.2,i-o),wt(!0),Te()}function q(fe=!1){G(),Y=!0,f.visible=!1,A=1/0,ue.target.y=.25,d.scale.setScalar(1),d.material.emissiveIntensity=0,pe="idle",be=Oe=1,e.position.y=p.root.position.y=0,Et(),wt(!1),N.visible=k.visible=!1,fe!==!0&&p.root.position.set(n,0,i-o),Te()}function J(fe,Pe=0){oe=Ce.clamp(Pe,0,1),pe=fe?"incoming":"return",_e=0,ae=!1,ge=0,X.copy(d.position);let Me=Math.min(1,Math.max(0,Le-2)/6),Ae=n+(Math.random()*2-1)*s;fe&&Math.abs(Ae-e.position.x)<.95&&(Ae=e.position.x>n?e.position.x-1.5:e.position.x+1.5);let Ve=fe?Ce.lerp(1.05,a,Math.random()):Ce.lerp(Ie.netClearance,a,oe);W.set(Ae,fe?1.78:1.48,i+(fe?Ve:-Ve));let tt=fe?e.position:p.root.position,Ge=W.x-tt.x,je=W.z-tt.z,Se=Math.hypot(Ge,je);if(fe){Ue=1.95-.22*Me;let I=c*(Ue-(Le<2?.7:.32));Se>I&&(W.x=tt.x+Ge*I/Se,W.z=tt.z+je*I/Se)}else Ue=1.84-.5*oe,Re=.16+.09*oe,ht=0;N.position.set(W.x,.07,W.z),k.position.set(W.x,.06,W.z),N.visible=k.visible=fe}function ie(fe,Pe){Tt(fe?"score":"missPoint"),C=fe,fe?se++:ne++;let Me=Math.max(se,ne)>=H&&Math.abs(se-ne)>=2;Me&&Pe?.(),F=Me,pe="celebrate",_e=0,ke=(fe?"阿团":"小羽")+(Me?"赢了这局！":"得 1 分"),d.position.y=.24,N.visible=k.visible=!1,ge=0,ae=!1,Z.position.set(d.position.x,.08,d.position.z),Z.visible=!0,D.textContent=(fe?"阿团":"小羽")+"得分　+1",D.hidden=!1,$[fe?0:1].animate([{transform:"scale(.85)"},{transform:"scale(1.65)",color:"#ffe08a",offset:.32},{transform:"scale(1)"}],{duration:680}),e.userData.speechFace=fe?"smile":"surprised",p.root.userData.speechFace=fe?"surprised":"smile"}function me(){if(pe==="over")lt();else if(pe==="ready"||pe==="point"){Tt("serve"),Le=0;let fe=C?e:p.root;d.position.copy(fe.position),d.position.y=C?1.7:1.4,C?be=0:Oe=0,J(!C)}Te()}function xe(){let fe=e.position;return Math.hypot(fe.x-N.position.x,fe.z-N.position.z)<=l}function Te(){let fe="";pe==="incoming"&&!ae&&(xe()?fe=ge>0?"保持按住，等球过来":"按住空格蓄力":fe="跑进接球圈");let Pe=[pe,se,ne,ke,fe].join();if(Pe===gt)return;gt=Pe;let Me=["ready","point","over"].includes(pe);V.hidden=!fe&&!Me&&!(pe==="returnToServe"&&ke),b.hidden=pe==="idle"||Be(),re.hidden=!Me,B.hidden=pe==="idle",$[0].textContent=se,$[1].textContent=ne,B.dataset.scorer=se+ne?C?"home":"away":"",re.textContent=pe==="over"?"再来一局":(C?"阿团":"小羽")+"发球",j.textContent=fe||(["returnToServe","point","over"].includes(pe)?ke:"")}function Be(){return pe==="gather"||pe==="celebrate"&&F}return re.onclick=me,b.onclick=()=>{Be()||q()},addEventListener("keydown",fe=>{if(!(pe==="idle"||document.querySelector("dialog[open]"))){if(fe.code==="Escape"){Be()||q();return}["KeyA","KeyD","KeyW","KeyS","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"].includes(fe.code)&&(fe.preventDefault(),z.add(fe.code),fe.code==="Space"&&!fe.repeat&&["ready","point","over"].includes(pe)&&me())}}),addEventListener("keyup",fe=>z.delete(fe.code)),addEventListener("blur",Et),q(),{memoryProps:[d,K,Q],start:lt,clearInput:Et,get recoil(){return O&&f.visible?(.08+.24*w)*Math.cos(A*22)*Math.exp(-A*12):0},get crouch(){return pe==="incoming"&&!ae?ge:0},companion:p.root,get active(){return pe!=="idle"},get view(){return pe==="idle"?null:ue},update(fe,Pe,Me=!1,Ae=null,Ve=null,tt=!1){let Ge=e.position,je=p.root.position,Se=je.x,I=je.z,te=Math.hypot(Ge.x-n,Ge.z-i-o)<.82;if(Q.visible=pe==="idle"&&Me,ee+=fe,Q.scale.setScalar(1+.05*Math.sin(ee*3)),Q.visible&&Pe&&te&&!Y&&lt(),Y=te,pe==="idle"&&tt?le(fe,Ge,je):dt&&(dt=!1,at=0,ot=0,vt=.77,pe==="idle"&&(je.set(n,0,i-o),wt(!1))),pe==="celebrate"){_e+=fe;let he=Math.min(1,_e/.62);Z.scale.setScalar(.65+2.4*he),Z.material.opacity=.9*(1-he),d.position.y=.24+.32*Math.sin(Math.PI*he)*(1-he),_e>=2.1&&(G(),pe=F?Ae?"gather":"over":"returnToServe")}if(pe==="gather"){let he=(Ee,[De,,Ne])=>{let He=De-Ee.x,We=Ne-Ee.z,qe=Math.hypot(He,We),ct=qe?Math.min(1,c*fe/qe):1;return Ee.x+=He*ct,Ee.z+=We*ct,ct===1},ce=he(Ge,et.球后阿团站位),ve=he(je,et.球后小羽站位);ce&&ve&&(q(!0),Ae?.())}if(pe==="returnToServe"){let he=function(Ee,De){let Ne=n-Ee.position.x,He=De-Ee.position.z,We=Math.hypot(Ne,He),qe=We?Math.min(1,c*fe/We):1;return Ee.position.x+=Ne*qe,Ee.position.z+=He*qe,qe===1},ce=he(e,i+o),ve=he(p.root,i-o);ce&&ve&&(pe="point",d.position.copy(C?Ge:je),d.position.y=1.4)}if(["incoming","return"].includes(pe)&&be>=.54){let he=(De,Ne,He,We)=>Number(z.has(De)||z.has(Ne))-Number(z.has(He)||z.has(We)),ce=he("KeyD","ArrowRight","KeyA","ArrowLeft"),ve=he("KeyS","ArrowDown","KeyW","ArrowUp"),Ee=c*fe/Math.max(1,Math.hypot(ce,ve));Ge.x=Ce.clamp(Ge.x+ce*Ee,n-s,n+s),Ge.z=Ce.clamp(Ge.z+ve*Ee,i+Ie.netClearance,i+a)}if(pe==="incoming"||pe==="return"){_e+=fe;let he=Math.min(1,_e/Ue),ce=pe==="incoming";if(ce){if(Oe>.54){let Ee=n-je.x,De=i-o-je.z,Ne=Math.min(1,.7*fe/Math.max(.001,Math.hypot(Ee,De)));je.x+=Ee*Ne,je.z+=De*Ne}let ve=xe();ae||(ge=ve&&z.has("Space")?Math.min(1,ge+fe/.9):0,ge>0&&Ue-_e<=.25&&(ae=!0,be=0,W.x=Ge.x,W.z=Ge.z)),k.material.opacity=.22+.36*ge,ge||ae?N.material.color.copy(S).lerp(_,ge):N.material.color.setHex(16768389),k.material.color.copy(N.material.color)}else{let ve=W.x-je.x,Ee=W.z-je.z,De=Ce.clamp(_e-Re,0,fe),Ne=Math.min(1,4.25*De/Math.max(.001,Math.hypot(ve,Ee)));je.x+=ve*Ne,je.z+=Ee*Ne,ht+=Math.hypot(ve*Ne,Ee*Ne),!ae&&Ue-_e<=.25&&Math.hypot(ve,Ee)<1.4&&(ae=!0,Oe=0)}if(d.position.lerpVectors(X,W,he),d.position.y+=(2.1-.4*oe)*4*he*(1-he),d.rotation.z+=fe*3,he===1)if(ce&&ae)L(ge,!0),t(Ge),Le++,J(!1,ge);else if(!ce&&Math.hypot(je.x-W.x,je.z-W.z)<=l){let ve=(.02+.4*Ce.smoothstep(ht,1,6))*(Le<=2?.5:1),Ee=Math.min(.65,Math.max(0,Le-5)*.08),De=ve+(1-ve)*Ee;if(Math.random()<De){pe="deflected",_e=0,X.copy(d.position);let Ne=je.x>n?-1:1;W.set(je.x+Ne*.95,.24,je.z-.35),N.visible=k.visible=!1}else L(.22),J(!0)}else ie(!ce,Ve)}else if(pe==="deflected"){_e+=fe;let he=Math.min(1,_e/.58);d.position.lerpVectors(X,W,he),d.position.y+=.35*4*he*(1-he),d.rotation.z+=fe*8,he===1&&ie(!0,Ve)}be+=fe,Oe+=fe;let de=he=>he<.54?.7*Math.sin(Math.PI*he/.54):0;if(pe!=="idle"&&(Ge.y=de(be)),dt||(je.y=de(Oe)),pe==="celebrate"){let he=C?e:p.root,ce=C?p.root:e,ve=Math.min(1,Math.max(0,_e-.12)/.92);he.position.y+=.5*Math.abs(Math.sin(2*Math.PI*ve))*(1-.4*ve),ce.rotation.z=.19*Math.sin(Math.PI*Math.min(1,_e/1.35))}p.update(fe,je.x-Se,je.z-I,!1,!0),pe!=="idle"&&je.x===Se&&je.z===I&&(p.root.rotation.y=0),U(fe),K.position.set(d.position.x,.045,d.position.z),K.scale.setScalar(1-d.position.y*.09),Te()}}}function Fl(r){let e=[13188931,14437455,15095892,15294037];for(let t=-14;t<=14;t++)for(let n=-12;n<=12;n++){let i=t*.23,s=n*.23,a=Math.hypot(i/3.22,s/2.76);if(a>1)continue;let o=Math.sqrt(1-a*a),l=Math.cos(Math.atan2(i/3.22,s/2.76)*5),c=2.65+2.65*o-.83*Math.exp(-a*a*12)+.16*l*(1-a),h=Math.max(0,1.55-2.75*o);r(i,h,s,.235,c-h,.235,e[Math.min(3,Math.floor((1-a)*3)+ +(l>.3))])}for(let t=0;t<5;t++)r(0,4.15+t*.29,0,.36,.36,.37,7685678);for(let t of[-1,1])for(let n=0;n<7;n++){let i=n/6;r(t*(.12+n*.19),5.45+.32*Math.sin(i*Math.PI),-.06-n*.055,.25,.16,.16+.65*Math.sin(i*Math.PI),n%3?6725707:8566352)}r(0,0,2.25,1.64,2.26,.98,10051908),r(0,0,2.63,1.28,2.23,.3,9260339),r(0,.09,2.83,.99,1.99,.14,16042885);for(let t=0;t<4;t++)r((t-1.5)*.25,.14,2.91,.024,1.87,.04,12552535);r(.34,.91,2.96,.13,.13,.1,6898472);for(let t of[-1.64,1.64])r(t,1.53,2.31,1.03,1.03,.39,16243370),r(t,1.65,2.53,.79,.79,.08,7582126),r(t,1.65,2.59,.09,.79,.07,16772550),r(t,2,2.59,.79,.09,.07,16772550);r(0,0,3.05,1.7,.17,.55,12689794)}function Ta(r,e){r(0,-.49,.035,.115,.62,.12,16113590);let t=.041;for(let n=-7;n<=7;n++)for(let i=-7;i<=7;i++){let s=Math.hypot(n,i)/7;if(s>1.04)continue;let a=Math.cos(Math.atan2(i,n)+s*10.5);r(n*t,.24+i*t,0,t*1.02,t*1.02,.09+.075*(1-s),a>0?e:16772038)}}function ts(r){let e=[];return r((t,n,i,s,a,o,l)=>e.push({x:t,y:n+a/2,z:i,w:s,h:a,d:o,color:new ze(l)})),e.sort((t,n)=>t.y-n.y||t.x-n.x||t.z-n.z)}var Cf=new At(1,1,1),Rf=new rt({roughness:1});function zl(r,e,t,n,i){let s=Math.max(n.length,i.length),a=new Cn(Cf,Rf,s);a.position.set(e,0,t),a.castShadow=a.receiveShadow=!0,a.boundingSphere=new en(new P(0,3,0),9),r.add(a);let o=new ft,l=new ze,c=Ce.lerp,h=-1;return u=>{let p=Ce.smoothstep(u,0,1);if(p!==h){h=p;for(let d=0;d<s;d++){let v=n[Math.floor(d*n.length/s)],g=i[Math.floor(d*i.length/s)];o.position.set(c(v.x,g.x,p),c(v.y,g.y,p)+Math.sin(p*Math.PI)*.25,c(v.z,g.z,p)),o.scale.set(c(v.w,g.w,p),c(v.h,g.h,p),c(v.d,g.d,p)),o.updateMatrix(),a.setMatrixAt(d,o.matrix),a.setColorAt(d,l.lerpColors(v.color,g.color,p))}a.instanceMatrix.needsUpdate=!0,a.instanceColor.needsUpdate=!0}}}function _u(r){let e=new Xe,t=ts(n=>Ta(n,14452880));return zl(e,0,0,t,t)(0),r.add(e),e.visible=!1,e}function Ea(r,e=[]){let t=zl(r,-5,-7,ts(Fl),ts(i=>_a(i,0,0))),n=Ma.map(([i,s],a)=>{let l=new Xe;l.position.set(i,0,s),l.scale.setScalar(1.02),r.add(l);let c=hn(l);vr(c.box,0,0,1,!1),c.finish();let h=[14452880,14986857,11835590],u=Ul.map(([p,d,v],g)=>{let f=new Xe;f.position.set(p*1.22,d-.08,v*1.32+.16),l.add(f),f.rotation.y=g===2?Math.PI/2:0;let y=zl(f,0,0,ts(x=>Ta(x,h[g])),ts(Qr)),m={twig:f,home:f.position.clone(),treeX:i,treeZ:s,size:1.02,kind:"candy"};return e.push(m),x=>{m.kind=x>=.5?"apple":"candy",y(x)}});return p=>u.forEach(d=>d(p))});return i=>{let s=i*3*1.3;return t(s),n.forEach((a,o)=>a(i*3*1.3-o*.045)),s>=1}}function Aa(r){let e=_u(r),t=new P,n=new P,i=new P,s=.18,a=1.08,o=1.38,l=2.25,c,h,u=l;return{get inFlight(){return u<o},start(p,d){c=p,h=d,u=0,i.subVectors(d.position,p.position).setY(0).normalize(),t.copy(p.position).addScaledVector(i,.55*p.scale.z),t.y+=.95*p.scale.y,n.copy(d.position).addScaledVector(i,-.58*d.scale.z),n.y+=.96*d.scale.y,e.position.copy(t),e.visible=!0,e.scale.setScalar(1);for(let v of[p,d])v.userData.tossPose={lift:0,stretch:0}},update(p){if(u>=l)return!1;let d=u;u=Math.min(l,u+p);let v=Ce.clamp((u-s)/(a-s),0,1),g=4*v*(1-v);e.position.lerpVectors(t,n,v),e.position.y+=g*(.86+.14*t.distanceTo(n)),e.rotation.z=-.4+v*(Math.PI*2+.65);let f=Math.sin(Math.PI*Math.min(1,u/s)),y=Math.sin(Math.PI*Ce.clamp((u-s)/.32,0,1));c.userData.tossPose.lift=.16*y,c.userData.tossPose.stretch=-.14*f+.12*y;let m=Math.sin(Math.PI*Ce.clamp((u-a+.24)/.3,0,1)),x=Math.sin(Math.PI*Ce.clamp((u-a)/.3,0,1));return h.userData.tossPose.lift=.17*m,h.userData.tossPose.stretch=.09*m-.19*x,u>=a&&(e.position.y+=.17*m-.12*x),e.scale.setScalar(1-Ce.smoothstep(u,l-.22,l)),u===l&&(e.visible=!1,delete c.userData.tossPose,delete h.userData.tossPose),d<o&&u>=o}}}function Ca(r){let e=hn(r),t=[],n=[],i=new Map;function s(g,f,y=null){let m={x:g,z:f,tiltX:0,tiltZ:0,wind:0,phase:g*.42+f*.24,parts:[],pose:y};t.push(m);let x=(...M)=>{let E=e.box(...M);return i.set(E,m),E};return x.markFlower=M=>{m.name=M,m.key=g.toFixed(3)+","+f.toFixed(3),n.push(m)},x}function a(){e.finish((g,f)=>{g.instanceMatrix.setUsage(Yh),!!i.get(f[0]).pose&&(g.userData.gardenCrop=!0),f.forEach((m,x)=>i.get(m).parts.push({mesh:g,index:x,rest:m})),g.computeBoundingSphere(),g.boundingSphere.radius+=.8}),i.clear()}let o=new Ze,l=new Ze,c=new ir,h=new P,u=new Set,p=0,d=0;function v(g,f,y){p+=g;let m=p>=d;m&&(d=p+1/24);let x=1.18,M=1-Math.exp(-g*18),E=1-Math.exp(-g*5);u.clear();for(let _ of t){if(_.hidden||_.pick){if(_.hidden&&_.vanished)continue;if(_.hidden)o.makeScale(0,0,0),_.vanished=!0;else{let{t:U,hand:N}=_.pick,k=1-.82*U;o.makeScale(k,k,k),o.setPosition((1-U)*_.x+U*N.x-k*_.x,U*N.y+.32*Math.sin(Math.PI*U),(1-U)*_.z+U*N.z-k*_.z)}for(let{mesh:U,index:N,rest:k}of _.parts)U.setMatrixAt(N,l.multiplyMatrices(o,k)),u.add(U);continue}if(_.vanished&&(_.vanished=!1,_.tiltX=.02),_.pose){if(!_.pose.dirty)continue;for(let{mesh:U,index:N,rest:k}of _.parts){let Q=1-_.pose.dip*.24;l.copy(k);for(let Y of[1,5,9])l.elements[Y]*=Q;l.elements[13]*=Q,_.pose.harvested&&l.makeScale(0,0,0),U.setMatrixAt(N,l),u.add(U)}_.pose.dirty=!1;continue}let S=_.x-f.x,A=_.z-f.z,w=Math.hypot(S,A),R=Math.max(0,1-w/x)*Math.max(0,1-y/.6);if(m){let U=.5+.5*Math.sin(p*.73-_.phase);_.wind=(.052+.105*U)*Math.sin(p*1.8-_.phase)+.023*Math.sin(p*2.9+_.z*.87)}if(!m&&!R&&!_.tiltX&&!_.tiltZ)continue;let O=R?M:E,L=1.05*R/Math.max(.09,w);_.tiltX+=(L*A-_.tiltX)*O,_.tiltZ+=(-L*S-_.tiltZ)*O,!R&&Math.abs(_.tiltX)+Math.abs(_.tiltZ)<.002&&(_.tiltX=_.tiltZ=0),o.makeRotationFromEuler(c.set(_.tiltX+_.wind*.45,0,_.tiltZ-_.wind)),h.set(-_.x,0,-_.z).applyMatrix4(o),o.setPosition(h.x+_.x,h.y,h.z+_.z);for(let{mesh:U,index:N,rest:k}of _.parts)U.setMatrixAt(N,l.multiplyMatrices(o,k)),u.add(U)}for(let _ of u)_.instanceMatrix.needsUpdate=!0}return{at:s,finish:a,brush:v,flowers:n}}var Mu={15239222:7904082,16098123:10730087,5537346:12934214,7837261:15172444};function Ra(r,e){let t=new rt({color:6853253});for(let i=0;i<2;i++){let s=new Fe(new Ri(.28+i*.08,.046,6,20),t);s.rotation.x=Math.PI/2,s.position.copy(e),s.position.x-=.5,r.add(s)}let n=new Fe(new ln(.085,.065,.39,8),new rt({color:11701336}));return r.add(n),n}function bu(r){let e=new Cn(new Sn(1,7,5),new mt({color:12117994,transparent:!0,opacity:.86}),88);e.frustumCulled=!1,e.visible=!1,r.add(e);let t=new ft;function n(i,s,a){for(let o=0;o<e.count;o++){let l=o<72,c=o%6,h=c*Math.PI/3,u=l?(Math.floor(o/6)/12+c*.089+a*1.65)%1:(o/16+a*2.8)%1;if(l){t.position.lerpVectors(i,s,u),t.position.y+=4*u*(1-u)*(.36+.15*Math.hypot(s.x-i.x,s.z-i.z));let d=.11+.28*u;t.position.x+=Math.cos(h)*d,t.position.z+=Math.sin(h)*d}else{let d=o*2.4;t.position.copy(s),t.position.x+=Math.cos(d)*u*.46,t.position.z+=Math.sin(d)*u*.46,t.position.y+=.27*Math.sin(u*Math.PI)}let p=l?.041:.049*(1-u);t.rotation.set(0,0,0),t.scale.set(p,l?p*1.35:p,p),t.updateMatrix(),e.setMatrixAt(o,t.matrix)}e.instanceMatrix.needsUpdate=!0}return e.userData.draw=n,e}var Pf=new P(0,1,0);function Su(r,e,t,n,i,s,a,o,l,c){let h=new P(i,s,a),u=h.length(),p=new P(e+i/2,t+s/2,n+a/2);r(p.x,p.y-u/2,p.z,o,u,l,c).compose(p,new Yt().setFromUnitVectors(Pf,h.normalize()),new P(o,u,l))}function Bl(r,e,t,n,i=0){r(e,t,n,.065,.12,.06,15239222),r(e,t+.12,n,.14,.15,.13,15239222),r(e,t+.27,n,.23,.16,.2,15239222),r(e,t+.43,n,.3,.13,.26,15239222);let s=t+.56;r(e,s,n,.14,.025,.13,16098123);for(let a=0;a<5;a++){let o=i+a*2*Math.PI/5,l=.28*Math.cos(o),c=.28*Math.sin(o),h=.3+.14*Math.sin(i+a),u=a%2?5537346:7837261;Su(r,e,s,n,l,h,c,.045,.045,u);for(let p of[-1,1])Su(r,e+l*.45,s+h*.45,n+c*.45,l*.38+c*.28*p,h*.34,c*.38-l*.28*p,.08,.07,u)}}function Pa(r,e,t=[]){for(let n=0;n<5;n++){let i=3+n*1.24;for(let s of[-9.65,-5.95])r(s,0,i,2.15,.1,.85,9528899),r(s,.1,i,2.02,.07,.66,10844754);for(let s=0;s<6;s++){let a=(s<3?-9.65:-5.95)+(s%3-1)*.7,o=s*2.4+n,l=i+.08*Math.sin(o),c=(s+n)%3===0,h={wet:0,dip:0,dirty:!1},u=e.at(a,l,h);t.push({x:a,z:l,ripe:c,pose:h}),Bl(u,a,.17,l,o)}}}var Vt={carrot:{name:"胡萝卜",seconds:14},wheat:{name:"小麦",seconds:18},tomato:{name:"番茄",seconds:22}};function wu(r,e){return{activeTool:r&&"activeTool"in r?r.activeTool:"收获",slotOrder:Array.isArray(r?.slotOrder)?[...r.slotOrder]:[],plots:Array.from({length:e},(t,n)=>r?.plots?.[n]??(r?.plots?null:{kind:"carrot",starter:!0})),seeds:{wheat:0,tomato:0,...r?.seeds,carrot:Math.max(r?.seeds?.carrot??0,r?.plots&&!r.plots.some(t=>t?.kind==="carrot")&&r.pickedRegrownCarrot===void 0?1:0)},gardenCues:{...r?.gardenCues},pickedRegrownCarrot:!!r?.pickedRegrownCarrot,bloomTimes:{...r?.bloomTimes},harvest:{...r?.harvest},cooldowns:{...r?.cooldowns}}}function ns(r,e){return!!r&&(r.starter||r.wateredAt>0&&e-r.wateredAt>=Vt[r.kind].seconds*1e3)}function kl(r,e,t,n){let i=r.plots[e];if(t==="收获"){if(!ns(i,n))return!1;let s=Vt[i.kind].name;r.seeds[i.kind]++,!i.starter&&i.kind==="carrot"&&(r.pickedRegrownCarrot=!0),r.harvest[s]=(r.harvest[s]??0)+1,r.plots[e]=null}else if(t==="浇水"){if(!i||i.starter||i.wateredAt)return!1;i.wateredAt=n}else{if(i||!Vt[t]||!r.seeds[t])return!1;r.seeds[t]--,r.plots[e]={kind:t,wateredAt:0}}return!0}function Tu(r,e){return r?r.starter?1:r.wateredAt?.18+.82*Math.min(1,Math.max(0,(e-r.wateredAt)/(Vt[r.kind].seconds*1e3))):.12:0}function La(r,e){let t=r.plots;if(t.some(i=>i?.starter))return"harvest";if(t.some(i=>!i))return r.seeds.carrot?"sow":"seeds";if(t.some(i=>!i.wateredAt))return"water";let n=t.filter(i=>i.kind==="carrot");return n.length?n.some(i=>ns(i,e))?"pull":"grow":"space"}function Gl(r){let e=new Xe,{box:t,finish:n}=hn(e);if(r==="carrot")Bl(t,0,0,0);else if(r==="wheat")for(let i=0;i<3;i++){let s=(i-1)*.13,a=Math.sin(i*3)*.09,o=.42+i*.07;t(s,0,a,.04,o,.04,10262098);for(let l=0;l<5;l++)t(s+.035*(l%2?1:-1),o+l*.055,a,.11,.09,.09,14923347)}else{t(0,0,0,.06,.52,.06,5864003);for(let i=0;i<5;i++){let s=i*2.4,a=Math.cos(s)*.14,o=Math.sin(s)*.14;t(a,.23+i*.045,o,.18,.07,.14,7771723),r==="tomato"&&i%2===0&&(t(a,.12+i*.045,o,.2,.17,.18,13720384),t(a,.29+i*.045,o,.09,.025,.08,6652998))}}return n(),e}function Eu(r,e,t,n,i,s,a=[],o=()=>{}){let l=Object.keys(Vt),c=Object.fromEntries(l.map(J=>[J,Gl(J)])),h=document.createElement("section");h.className="farm-tools",h.hidden=!0;let u=document.createElement("div");u.className="harvest-demo",u.hidden=!0,u.innerHTML='<i class="sweep-track" aria-hidden="true"><i class="sweep-mouse"></i></i><span>按住鼠标左键，划过成熟的作物</span>',h.append(u);let p=u.querySelector("span"),d=u.querySelector(".sweep-track"),v=new Map,g=new Map(l.map(J=>[Vt[J].name+"种子",J]));for(let J of["收获","浇水"]){let ie=document.createElement("button");ie.textContent=J,ie.onclick=()=>{i.activeTool=J,n.refreshInventory()},v.set(J,ie),h.append(ie)}let f=document.createElement("button");f.className="farm-action",f.hidden=!0,document.body.append(h,f);let y=ai.map(([J,ie])=>{let me=new Fe(new Ai(.16),new mt({color:16768134}));return me.position.set(J,.72,ie),r.add(me),me}),m=new P(...et.菜园水管),x=Ra(r,m);x.position.copy(m),x.position.x-=.08,x.rotation.z=-1.15;let M=bu(r),E=new P,_=new P,S=new P(0,1,0),A=new P,w=new rt({color:14003300,flatShading:!0}),R=new Fe(new ln(.21,.08,.19,10),w);R.position.y=.26,x.add(R);let O=new rt({color:4552298,flatShading:!0}),L=new Fe(new At(.25,.24,.25),new rt({color:15973505}));r.add(L),L.visible=!1;let U=new Cn(new ln(.065,.065,1,7),O,16);U.frustumCulled=!1,U.visible=!1,r.add(U);let N=new ft,k=new P,Q=new P,Y=new P,ee=0,K=0;function V(J){K=Math.max(0,K-J);let ie=D&&Z&&i.activeTool==="浇水",me=ie&&K>0;if(!ie&&!L.visible)return;if(L.visible=U.visible=ie,M.visible=me,!ie){x.position.copy(m),x.position.x-=.08,x.rotation.set(0,0,-1.15);return}ee+=J,me&&(t.rotation.y=Math.atan2(E.x-t.position.x,E.z-t.position.z));let xe=t.children[0];L.position.copy(t.position),L.position.x+=.68,L.position.y+=.81+xe.position.y,L.position.z+=.4,x.position.copy(L.position),x.position.y+=.09,me?(A.subVectors(E,x.position),A.y+=1.45+.6*Math.hypot(A.x,A.z),A.normalize()):A.set(.65,.7,.3).normalize(),x.quaternion.setFromUnitVectors(S,A),_.copy(x.position).addScaledVector(A,.36),k.copy(m),k.x-=.5;for(let Te=1;Te<=U.count;Te++){let Be=Te/U.count;Q.copy(m),Q.x-=.5,Q.lerp(L.position,Be),Q.x+=.42*Math.sin(Be*Math.PI*2),Q.y=.13+(L.position.y-.13)*Be**5,Y.subVectors(Q,k),N.position.lerpVectors(k,Q,.5),N.scale.set(1,Y.length()+.025,1),N.quaternion.setFromUnitVectors(S,Y.normalize()),N.updateMatrix(),U.setMatrixAt(Te-1,N.matrix),k.copy(Q)}U.instanceMatrix.needsUpdate=!0,me&&M.userData.draw(_,E,ee)}let j=new At(.54,.025,.46),re=[11962721,7952960].map(J=>new rt({color:J})),b=e.map(J=>{let ie=new Fe(j,re[0]);ie.position.set(J.x,.185,J.z),r.add(ie);let me=new Fe(new zt(.13,.18,10),new mt({transparent:!0,depthWrite:!1,side:ur}));return me.rotation.x=-Math.PI/2,me.position.set(J.x,.22,J.z),me.visible=!1,r.add(me),{soil:ie,flash:me,until:0,object:null,kind:null}});function T(J){let ie=new Fe(new zt(.69,.77,48),new mt({color:16768920,transparent:!0,opacity:.93,depthWrite:!1}));ie.rotation.x=-Math.PI/2,ie.position.set(...J),ie.position.y+=.065,ie.visible=!1,r.add(ie);let me=!1,xe=0;return(Te,Be,fe,Pe=!1)=>{let Me=Math.hypot(Be.x-ie.position.x,Be.z-ie.position.z)<.78;return Me?!fe&&!Pe&&(me=!0):me=!1,ie.visible=fe&&!me,xe+=Te,ie.scale.setScalar(1+.04*Math.sin(xe*3)),!fe||!Me||me?!1:(me=!0,ie.visible=!1,!0)}}let B=T(et.菜园入口),$=T(et.玩家钓位),D=!1,Z=!1,F=-1,G=null,H=null,se=null,ne=new Xe;r.add(ne),ne.visible=!1;let C=new At(.11,.18,.09),oe=new rt({color:14990710});for(let J=0;J<3;J++){let ie=new Fe(C,oe);ie.position.set((J-1)*.14,J===1?.1:0,.03*J),ie.rotation.z=(J-1)*.6,ne.add(ie)}let z=3.5,X=.65,W=null,ue=null,pe=null;function _e(J,ie){pe=null;let me=1.4;for(let Pe of a){if(Pe.hidden=(i.bloomTimes[Pe.key]??0)>ie,Pe.hidden||Pe.pick)continue;let Me=Math.hypot(t.position.x-Pe.x,t.position.z-Pe.z);Me<me&&(me=Me,pe=Pe)}if(!ue)return;let xe=ue;xe.elapsed+=J;let Te=Math.min(1,xe.elapsed/.48),Be=t.children[0];Be&&(Be.scale.y*=1-.18*Math.sin(Math.PI*Te));let fe=xe.pick.hand.set(.3,.55,.4);(Be??t).localToWorld(fe),xe.pick.t=Ce.smoothstep(Te,.22,1),!(Te<1)&&(i.harvest[xe.name]=(i.harvest[xe.name]??0)+1,i.bloomTimes[xe.key]=ie+4e4,xe.hidden=!0,xe.pick=null,ue=null,Tt("flower"),n.refreshInventory(),o(xe),n.think(xe.name+" × 1"))}function Ue(J){let ie=W;if(!ie)return;ie.time+=J;let[me,xe]=ai[ie.index],Te=t.position,Be=Math.min(1,ie.time/(z-X)),fe=Math.PI*2*3*Be,Pe=Math.sin(Math.PI*Be)**.65,Me=Pe*(.63-.37*Math.cos(fe));ie.brush.set(me+.32*Math.sin(fe)*Pe,0,xe+.12*Math.sin(fe*2)*Pe),t.children[0]&&(t.children[0].rotation.x=.32*Me,t.children[0].scale.y*=1-.13*Me);let Ae=Ce.clamp((ie.time-z+X)/X,0,1);ne.visible=Ae>0&&Ae<1,ne.position.set(Ce.lerp(me,Te.x,Ae),.3+.62*Ae+.72*Math.sin(Math.PI*Ae),Ce.lerp(xe,Te.z,Ae)),ne.scale.setScalar(1-.68*Ae),ne.rotation.y=Ae*3,Ae===1&&(i.seeds[ie.kind]+=ie.n,i.cooldowns[ie.index]=Date.now()+4e4,n.refreshInventory(),Tt("pickup"),o({x:me,z:xe}),n.think(Vt[ie.kind].name+"种子 × "+ie.n),W=null)}let ae=new Map,ge=new P,Le=new P,ke=0;function be(J){let ie=i.plots[J];if(ae.has(J)||!ns(ie,Date.now()))return;let{x:me,z:xe}=e[J],Te=c[ie.kind].clone();Tt("pull"),ie.lifting=!0;let fe=ie.kind==="carrot"&&!ie.starter?-.3:.17;Te.position.set(me,fe,xe),r.add(Te),ae.set(J,{model:Te,base:fe,time:0,landed:!1,travel:.38+.035*Math.min(9,Math.hypot(me-t.position.x,xe-t.position.z))})}i.plots.forEach((J,ie)=>{J?.lifting&&be(ie)});function Oe(J){let ie=t.children[0];ge.set(.34,.56,.38),(ie??t).localToWorld(ge);let me=!1;for(let[xe,Te]of ae){Te.time+=J;let{x:Be,z:fe}=e[xe],Pe=Te.model,Me=Ce.smoothstep(Te.time,0,.23),Ae=Ce.smootherstep(Te.time,.23,.23+Te.travel);if(Le.set(Be,Te.base+.8*Me,fe),Pe.position.lerpVectors(Le,ge,Ae),Pe.position.y+=.64*Math.sin(Math.PI*Ae),Pe.rotation.z=.16*Math.sin(Me*Math.PI*2)+.68*Ae,Ae<1)continue;if(!Te.landed){let tt=i.plots[xe];kl(i,xe,"收获",Date.now())&&(me=!0,o(e[xe]),tt.kind==="carrot"&&!tt.starter&&n.gardenActive&&n.finishGardenHarvest()),Te.landed=!0,ke=.22}let Ve=Ce.smoothstep(Te.time,.35+Te.travel,.53+Te.travel);Pe.scale.setScalar(1-Ve),Ve===1&&(r.remove(Pe),Pe.traverse(tt=>{tt.isInstancedMesh&&tt.dispose()}),ae.delete(xe))}if(me&&(Tt("pickup"),n.refreshInventory()),ke>0&&ie){ke=Math.max(0,ke-J);let xe=Math.sin(Math.PI*ke/.22);ie.scale.y*=1-.09*xe,ie.scale.x*=1+.05*xe}}let Re=new Jr,ht=new ye,gt=new an(new P(0,1,0),-.25);function dt(){H=null,se=null}function at(){if(H===null||!G||!D||!Z)return;let J=g.get(i.activeTool)??i.activeTool;if(!v.has(J)&&!Vt[J])return;Re.setFromCamera(ht,G);let ie=Re.ray.intersectPlane(gt,new P);if(!ie)return;J==="浇水"&&(E.copy(ie),K=.25);let me=se??ie,xe=ie.x-me.x,Te=ie.z-me.z,Be=xe*xe+Te*Te,fe=Date.now();e.forEach(({x:Pe,z:Me},Ae)=>{let Ve=Be?Ce.clamp(((Pe-me.x)*xe+(Me-me.z)*Te)/Be,0,1):0;if(!(Math.hypot(Pe-me.x-xe*Ve,Me-me.z-Te*Ve)>=.51)){if(J==="收获"){!ae.has(Ae)&&ns(i.plots[Ae],fe)&&be(Ae);return}kl(i,Ae,J,fe)&&(Tt(J==="浇水"?"water":"sow"),n.refreshInventory(),b[Ae].until=J==="浇水"?0:fe+360,b[Ae].flash.material.color.setHex(16768913))}}),se=ie}function ot(J){let ie=s.getBoundingClientRect();ht.set((J.clientX-ie.left)/ie.width*2-1,1-(J.clientY-ie.top)/ie.height*2),at()}s.addEventListener("pointerdown",J=>{!D||!Z||J.button!==0||H!==null||(H=J.pointerId,s.setPointerCapture(H),ot(J))}),s.addEventListener("pointermove",J=>{H===J.pointerId&&ot(J)});for(let J of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(J,ie=>{ie.pointerId===H&&dt()});function vt(){if(!(W||ue||!D||n.busy||document.querySelector("#game-menu").open))if(F>=0&&Date.now()>=(i.cooldowns[F]??0)){let J=l[Math.floor(Math.random()*l.length)],ie=4+Math.floor(Math.random()*4),[me,xe]=ai[F];t.rotation.y=Math.atan2(me-t.position.x,xe-t.position.z),Tt("search"),W={index:F,kind:J,n:ie,time:0,brush:new P(me,0,xe)},f.hidden=!0}else pe&&!pe.hidden&&(ue=pe,ue.elapsed=0,ue.pick={t:0,hand:new P},t.rotation.y=Math.atan2(ue.x-t.position.x,ue.z-t.position.z),f.hidden=!0)}f.onclick=vt,addEventListener("keydown",J=>{J.code==="KeyF"&&!J.repeat&&vt()});let le=null,Et=null,wt=null;function lt(J){let ie=J==="sow"&&i.activeTool!==Vt.carrot.name+"种子"?document.querySelector(".item-slot:enabled .carrot-seed")?.closest("button"):null;if(ie!==wt&&(wt?.classList.remove("seed-cue"),ie?.classList.add("seed-cue"),wt=ie),J===le)return;if(Et?.cancel(),Et=null,!J||J==="sow"||i.gardenCues[J]){le=J;return}let me=v.get({harvest:"收获",water:"浇水",pull:"收获"}[J]);if(!me)return;let xe="inset 0 0 0 2px #ffdd91, 0 0 10px 2px #eac576",Te=matchMedia("(prefers-reduced-motion: reduce)").matches;Et=me.animate(Te?[{boxShadow:xe},{boxShadow:xe}]:[{boxShadow:"none"},{boxShadow:xe,offset:.45},{boxShadow:"none"}],{duration:Te?1800:850,iterations:Te?1:3,easing:"ease-in-out"}),le=J,i.gardenCues[J]=!0}function q(J,ie){J.textContent!==ie&&(J.textContent=ie)}return{cancel:dt,get searching(){return!!W||!!ue},get brushPosition(){return W&&W.time<z-X?W.brush:null},get spraying(){return H!==null},update(J,ie,me,xe=J){Ue(xe),Oe(J),G=ie,D=me;let Te=t.position,Be=Date.now();_e(J,Be),!(Te.x>=-12.7&&Te.x<=-3&&Te.z>=.55&&Te.z<=10.3)||!n.gardenActive&&!n.gardenReplayReady?Z=!1:n.gardenActive&&(Z=!0);let Pe=me&&!W&&!ue;if(B(J,Te,Pe&&n.gardenReplayReady&&!Z)&&(Z=!0),$(J,Te,Pe&&n.fishingReady,n.fishingTrial)&&n.enterFishing(),!me||!Z?dt():at(),V(J),h.hidden=!me||!Z,h.hidden&&lt(null),!h.hidden){let Ae=i.activeTool,Ve=n.gardenActive?La(i,Be):Ae==="收获"?"harvest":Ae==="浇水"?"water":g.has(Ae)||Vt[Ae]?"sow":null;lt(n.gardenActive&&["harvest","sow","water","pull"].includes(Ve)?Ve:null),u.hidden=!Ve,d.hidden=!["harvest","pull","sow","water"].includes(Ve),Ve&&q(p,{harvest:"按住左键，划过成熟的作物收获",sow:n.gardenActive?"选中胡萝卜种子，按住左键划过空畦播种":"按住左键，划过空畦播种",water:"选中浇水，按住左键划过菜畦",pull:"选中收获，按住左键划过成熟的胡萝卜",grow:"等胡萝卜长大",seeds:"去林子找胡萝卜种子",space:"收下成熟的作物，腾出菜畦"}[Ve]);for(let[tt,Ge]of v)Ge.setAttribute("aria-pressed",String(i.activeTool===tt))}F=-1;let Me=1.65;y.forEach((Ae,Ve)=>{Ae.visible=Ve!==W?.index&&Be>=(i.cooldowns[Ve]??0),Ae.position.y=.7+.09*Math.sin(Be*.002+Ve),Ae.rotation.y=Be*8e-4;let tt=Math.hypot(Te.x-Ae.position.x,Te.z-Ae.position.z);Ae.visible&&tt<Me&&(Me=tt,F=Ve)}),f.hidden=!!W||!!ue||!me||F<0&&!pe,f.hidden||q(f,F>=0?"F · 调查草丛":"F · 摘"+pe.name),e.forEach((Ae,Ve)=>{let tt=i.plots[Ve]?.lifting?null:i.plots[Ve],Ge=b[Ve],je=!!tt?.starter;Ae.pose.harvested!==!je&&Object.assign(Ae.pose,{harvested:!je,wet:1,dirty:!0});let Se=tt&&!je?tt.kind:null;Ge.kind!==Se&&(Ge.object&&(r.remove(Ge.object),Ge.object=null),Se&&(Ge.object=c[Se].clone(),Ge.object.position.set(Ae.x,.2,Ae.z),r.add(Ge.object)),Ge.kind=Se),Ge.soil.visible=!!Se,Ge.soil.material=re[tt?.wateredAt?1:0];let I=Math.max(0,(Ge.until-Be)/360);if(Ge.flash.visible=I>0,I&&(Ge.flash.scale.setScalar(2-I),Ge.flash.material.opacity=.8*I),Ge.object){let te=Tu(tt,Be);Ge.object.scale.setScalar(te),Se==="carrot"&&(Ge.object.position.y=.2-.5*te)}})}}}function Au(r,e=Ca(r),t=[]){let{box:n,finish:i}=hn(r),s=[],a=5241;function o(){return a=a*1664525+1013904223>>>0,a/4294967296}function l(x,M,E,_){s.push([x-E/2,M-_/2,x+E/2,M+_/2])}let c=(x,M)=>((x-12.5)/7.5)**2+((M-5.8)/5.8)**2<1+Math.sin(M*1.5)*.08,h=(x,M)=>Math.abs(M)<=1&&x>=-8&&x<=4||x>=-6&&x<=-4&&M<1&&M>=-6||x===-8&&M===2||x>=3&&x<=4&&M>=0&&M<=5||M>=Ie.z+Ie.length/2&&ba(x,M)<=1.15,u=-1.7,p=-.64,d=-.45;for(let x=fu;x<=es;x++){let[,,M,E]=gu(x),_=E-M+1,S=(M+E)/2;n(S,u,x,_,p-u,1,12092504),n(S,p,x,_,d-p,1,13214058);for(let A=M;A<=E;A++){let w=c(A,x),R=h(A,x),O=o();n(A,d,x,1,w?.18:.45,1,(w?[6860719,7584443,7321014]:R?[14402706,14600600,14798237]:[11189616,11715960,11321203])[Math.floor(O*3)]),R&&!w&&O<.52&&n(A+O-.3,.001,x+.16,.09+O*.22,.018,.078,13284235);let N=Math.abs(A-Ie.x)<Ie.width/2+.3&&Math.abs(x-Ie.z)<Ie.length/2+.3||A>=-11.5&&A<=-4.1&&x>=1.95&&x<=9.15;if(!N&&!R&&!w&&!ii(A,x,-.45)&&O<.17){let k=e.at(A,x);for(let Q=0;Q<3;Q++)k(A+Q*.12-.12,0,x+Math.sin(Q)*.1,.048,.12+Q*.055,.055,8887906)}w?(O<.16&&n(A,-.26,x,.53,.03,.08,11526350),l(A,x,1,1)):!N&&!R&&!ii(A+.2,x,-.45)&&O<.12&&e.at(A+.2,x)(A+.2,0,x,.09,.2,.09,9282649)}}l(-5,-7,6,4.8);for(let[x,M]of Ma)l(x,M,.9,.9);xu(n,e,l),Pa(n,e,t);let v=new Set;function g(x,M,E,_){Vl(n,x,M,E,_,v),l((x+E)/2,(M+_)/2,Math.abs(E-x)+.2,Math.abs(_-M)+.2)}g(-11.35,1.95,-8.85,1.95),g(-6.75,1.95,-4.25,1.95),g(-11.35,1.95,-11.35,9.15),g(-4.25,1.95,-4.25,9.15),g(-11.35,9.15,-4.25,9.15),n(-7.8,.016,5.25,1.49,.017,7.54,12954492),Hl(n);let f=$e.center+$e.width/2+1.25;for(let x of[4.9,5.3,5.7])e.at(x,f)(x,0,f,.14,.65+o()*.42,.16,7902279);for(let x=4;x<=21;x++)for(let M=-1;M<=12;M++)!c(x,M)||c(x-1,M)&&c(x+1,M)&&c(x,M+1)&&c(x,M-1)||(n(x,-.268,M,.84,.022,.78,9028527),o()<.36&&!ii(x,M,-.1)&&Wl(n,x,M));let y=[],m=[[-8,9.86,1.65,.46,.07,13,.85],[-5.35,9.91,.72,.32,-.16,5,.82],[-12.08,6.25,1.36,.38,1.52,9,.13],[-10.35,-3.46,1.05,.48,-.56,8,.17],[1.65,2.9,.83,.43,-.4,6,.48],[2,6.95,.71,.37,.35,4,.51]];for(let[x,M,E,_,S,A,w]of m){let R=0;for(let O=0;O<A*24&&R<A;O++){let L=o()**.65,U=o()*Math.PI*2,N=E*L*Math.cos(U),k=_*L*Math.sin(U),Q=x+N*Math.cos(S)-k*Math.sin(S),Y=M+N*Math.sin(S)+k*Math.cos(S);Q>-11.72&&Q<-3.88&&Y>1.57&&Y<9.5||ii(Q,Y,-.55)||y.some(([K,V])=>Math.hypot(K-Q,V-Y)<.27)||![-.2,.2].every(K=>[-.2,.2].every(V=>un(Q+K,Y+V)&&!h(Math.round(Q+K),Math.round(Y+V))&&!c(Math.round(Q+K),Math.round(Y+V))))||(xr(e.at(Q,Y),Q,Y,w+(o()-.5)*.15),y.push([Q,Y]),R++)}}for(let[x,M,E,_,S]of[[-7.55,-3.35,.95,.76,26],[-2.45,-3.35,.95,.76,26],[-8.85,-5.2,.53,1,9],[-1.15,-5.2,.53,1,9],[3.35,-2.15,.72,.43,8],[4.65,-3.12,.5,.33,4],[5.36,1.35,.56,.31,7],[4.2,6.92,.58,.4,5],[-11.95,2.9,.38,.4,3],[-3.36,7.12,.4,.4,2],[-10.5,9.87,.34,.28,2],[-1.6,1.96,.35,.29,2],[-1.55,-8.83,.35,.35,2],[-9.72,-7.6,.41,.3,2],[6.52,-1.58,.36,.32,2],[14.42,-1.07,.33,.26,2],[20.46,6.8,.3,.42,2],[13.6,12.36,.35,.24,2],[6.65,10.25,.28,.28,1]])for(let A=0;A<S;A++){let w=A*2.4+o()*.35,R=Math.sqrt((A+.5)/S),O=x+E*R*Math.cos(w),L=M+_*R*Math.sin(w);[-.24,.24].every(N=>[-.24,.24].every(k=>{let Q=Math.round(O+N),Y=Math.round(L+k);return un(O+N,L+k)&&!h(Q,Y)&&!c(Q,Y)}))&&!ii(O,L,-.45)&&!y.some(([N,k])=>Math.hypot(O-N,L-k)<.3)&&Sa(e.at(O,L),O,L,o())}return e.finish(),i(),(x,M)=>(Math.abs(M-Ie.z)>=Ie.netClearance||Math.abs(x-Ie.x)>=Ie.width/2+Ie.netClearance)&&un(x-.55,M-.55)&&un(x+.55,M-.55)&&un(x-.55,M+.55)&&un(x+.55,M+.55)&&(!s.some(([E,_,S,A])=>x>E-.28&&x<S+.28&&M>_-.28&&M<A+.28)||ii(x,M,.28))}function Vl(r,e,t,n,i,s=new Set){let a=n-e,o=i-t,l=Math.ceil(Math.hypot(a,o)/1.45);for(let c=0;c<=l;c++){let h=e+a*c/l,u=t+o*c/l,p=h.toFixed(3)+","+u.toFixed(3);if(!s.has(p)){s.add(p),r(h,0,u,.2,.78,.2,10780245),r(h,.78,u,.18,.04,.18,12162669);for(let d of[.28,.6])r(h+.1,d,u+.1,.026,.029,.026,8415304)}}for(let c of[.24,.56])r(e+a/2,c,t+o/2,Math.abs(a)||.11,.11,Math.abs(o)||.11,12884839)}function Hl(r){for(let e=0;e<($e.tip-$e.shore)/$e.plankStep;e++){let t=$e.shore+(e+.5)*$e.plankStep,n=Pl(t);r(t,n-.17,$e.center,.48,.17,$e.width,e%3===0?13213547:12424286);for(let i of[-1,1])r(t,n+.001,$e.center+i*($e.width/2-.27),.045,.009,.045,9596749);e%2===0&&r(t-.12,n+.001,$e.center+(e%3-1)*.65,.019,.006,.45,11371607)}for(let e of[$e.shore+1.3,$e.tip-.2])for(let t of[-1,1])r(e,-.42,$e.center+t*($e.width/2-.18),.22,.68,.22,9465929)}function Wl(r,e,t){r(e,-.24,t,.055,.64,.055,7838296),r(e,.35,t,.095,.21,.095,10056526),r(e,.56,t,.066,.044,.069,11307363),r(e,.6,t,.025,.047,.025,8480840);for(let n of[-1,1])r(e+n*.039,-.12,t,.057,.29,.035,8953959),r(e+n*.074,.13,t,.038,.17,.032,9940594)}function Lf(r,e){let t=[],n=[];function s([o,l,c,h],u){let p=u*2*Math.PI/10;t.push(o,h+l*Math.sin(p),c*Math.cos(p))}for(let o=1;o<r.length;o++)for(let l=0;l<10;l++){let c=Math.sin((l+.5)*2*Math.PI/10),h=new ze(e[c>.72?0:c<-.28?2:1]);for(let[u,p]of[[o-1,l],[o,l],[o,l+1],[o-1,l],[o,l+1],[o-1,l+1]])s(r[u],p),n.push(h.r,h.g,h.b)}let a=new _t;return a.setAttribute("position",new Ye(t,3)),a.setAttribute("color",new Ye(n,3)),a.computeVertexNormals(),a}function yr(r,e){let t=new Xe,n=new Xe,i=new Xe,s=e.name==="珍珠金鱼",a=e.name==="白条",o=s?15505483:a?7708585:13271446,l=s?16770989:a?15069933:16766396,c=s?16100709:a?11324881:15309216,h=[[-.86,0,0,.01],[-.75,.12,.11,.01],[-.45,.29,.23,.02],[.03,s?.46:.38,s?.41:.3,0],[.43,.32,.26,0],[.73,.22,.19,-.01],[.9,0,0,-.025]];n.add(new Fe(Lf(h,[o,e.color,l]),new rt({vertexColors:!0,flatShading:!0})));function u(g,f,y,m=0){let x=new ni;f.forEach(([E,_],S)=>S?x.lineTo(E,_):x.moveTo(E,_)),x.closePath();let M=new Fe(new Ci(x),new rt({color:y,side:ur}));return M.position.z=m,g.add(M),M}if(i.position.x=-.76,n.add(i),s)for(let g of[-1,1]){let f=u(i,[[0,.06],[-.35,.34],[-.64,.32],[-.58,.03],[-.72,-.23],[-.4,-.31],[-.12,-.12]],c);f.rotation.y=g*.48,f.rotation.z=g*.09}else u(i,[[.03,.08],[-.55,a?.43:.32],[-.42,.08],[-.26,0],[-.48,-.32],[-.15,-.16],[.03,-.08]],c);u(n,[[-.45,.18],[-.32,s?.68:.53],[.08,.43],[.26,.26]],o);let p=new Sn(1,8,6),d=new Map;function v(g,f,y,m,x,M,E){d.has(E)||d.set(E,new rt({color:E,flatShading:!0}));let _=new Fe(p,d.get(E));_.position.set(g,f,y),_.scale.set(m,x,M),n.add(_)}for(let g of[-1,1]){let f=u(n,[[.31,.01],[-.11,-.06],[-.21,-.24],[.07,-.19]],c,g*.25);if(f.rotation.y=g*.46,v(.59,.07,g*.212,.105,.115,.057,l),v(.61,.08,g*.253,.068,.076,.03,4801608),v(.63,.108,g*.277,.023,.026,.012,16775135),s)for(let[y,m,x]of[[-.28,.11,.3],[-.07,.19,.345],[.15,.13,.35],[-.19,-.06,.34],[.06,-.05,.39]])v(y,m,g*x,.083,.079,.041,l);else{u(n,[[-.69,.055],[-.36,.09],[.24,.08],[.33,.043],[-.36,.008]],a?15268340:9869488,g*.012);for(let[y,m,x]of[[-.55,.18,.19],[-.28,.264,.18],[0,.292,.17],[.22,.28,.14]])v(y,.047,g*m,x,a?.033:.043,.023,a?15268340:10000812)}}return t.userData.swim=g=>{i.rotation.y=.31*Math.sin(g*(a?8:s?4:5.5))},t.add(n),n.scale.set(...e.shape),r.add(t),t}var Cu="chestnut-creek.fish-album.v1",Ia="chestnut-creek.harvest.v1";function Ru(r,e,t,n=localStorage){let i=document.createElement("nav");i.className="item-bar",i.setAttribute("aria-label","物品栏");let s=document.createElement("div");s.className="item-tip",s.hidden=!0,s.innerHTML="<strong></strong><p></p>",i.append(s),document.body.append(i);let a=0,o={};try{let A=Number(n?.getItem(Cu));Number.isInteger(A)&&(a=Math.max(0,Math.min(A,r.length))),Object.assign(o,JSON.parse(n?.getItem(Ia)))}catch{}let l=A=>Number.isSafeInteger(o[A])?o[A]:0,c=A=>t?.harvest[Vt[A].name]??0,h=["candy","apple","carrot"].map(A=>({...e.get(A),kind:A,name:Vt[A]?.name??e.get(A).name,amount:()=>l(A)+(A==="carrot"?c(A):0)})),u={kind:"wheat",name:"小麦",verse:"细秆擎金穗，穗头向风低。",amount:()=>c("wheat")},p={kind:"tomato",name:"番茄",verse:"青枝垂小果，红透叶阴间。",amount:()=>c("tomato")},d=Object.entries(Vt).map(([A,w])=>({kind:"seed "+A+"-seed",name:w.name+"种子",verse:"播入空畦，浇水后约 "+w.seconds+" 秒成熟。",amount:()=>t?.seeds[A]??0})),v=r.map((A,w)=>({...A,kind:"fish",amount:()=>+(w<a)+(t?.harvest[A.name]??0)})),g=["勿忘我","粉野花","白野花","黄野花"].map((A,w)=>({name:A,kind:"wildflower",color:["#a3c9ef","#efa7a2","#f1ebd5","#ebc86d"][w],verse:["五瓣落晴蓝，一心留浅金。","粉瓣低垂，风过轻颤。","素瓣围金蕊，微风拂草间。","一簇浅金，开在小径边。"][w],amount:()=>t?.harvest[A]??0})),f=[...h,u,...v,p,...d,...g],y=[],m=[],x=new Map(f.map(A=>[A.name,A])),M=f.map((A,w)=>t?.slotOrder?.[w]??null);function E(A){s.hidden=A===null,A!==null&&(s.firstChild.textContent=M[A],s.lastChild.textContent=x.get(M[A]).verse)}f.forEach((A,w)=>{let R=document.createElement("button");R.type="button",R.className="item-slot",R.onpointerenter=O=>{!R.disabled&&O.pointerType!=="touch"&&E(w)},R.onpointerleave=()=>E(null),R.onfocus=()=>E(w),R.onblur=()=>E(null),R.onclick=()=>{t&&(t.activeTool=M[w]),_(),E(w)},i.append(R),y.push(R)});function _(){let A=new Set;M.forEach((w,R)=>{!x.get(w)?.amount()||A.has(w)?M[R]=null:A.add(w)});for(let w of f)w.amount()>0&&!A.has(w.name)&&(M[M.indexOf(null)]=w.name,A.add(w.name));i.style.gridTemplateColumns="repeat("+Math.max(11,M.findLastIndex(Boolean)+1)+",minmax(0,1fr))",t&&(t.slotOrder=M,x.has(t.activeTool)&&!A.has(t.activeTool)&&(t.activeTool=null)),M.forEach((w,R)=>{let O=x.get(w),L=O?.amount()??0,U=(w??"")+"|"+L;if(y[R].hidden=R>=11&&!M.slice(R).some(Boolean),y[R].setAttribute("aria-pressed",String(!!w&&w===t?.activeTool)),U===m[R])return;m[R]=U;let N=y[R];if(N.disabled=L<1,N.replaceChildren(),N.setAttribute("aria-label",L?O.name+" × "+L:"空格"),!L){s.firstChild.textContent&&!A.has(s.firstChild.textContent)&&E(null);return}let k=document.createElement("i"),Q=document.createElement("b");O.kind==="fish"?(k.className="specimen",k.style.setProperty("--ink","#"+O.color.toString(16).padStart(6,"0")),k.style.width=O.shape[0]*62+"%",k.style.height=O.shape[1]*29+"%"):(k.className="harvest-icon "+O.kind,O.color&&k.style.setProperty("--petals",O.color)),Q.className="item-amount",Q.textContent=L,N.append(k,Q)})}_(),document.addEventListener("pointerdown",A=>{i.contains(A.target)||E(null)}),addEventListener("keydown",A=>{if(A.code==="Escape"&&E(null),!A.repeat&&/^Digit[1-9]$/.test(A.code)&&!document.querySelector("dialog[open]")&&!document.body.classList.contains("opening")){let w=y[Number(A.code.slice(-1))-1];w.disabled||(w.click(),E(null))}});function S(){_();try{n?.setItem(Ia,JSON.stringify(o))}catch{}}return{refresh:_,get count(){return a},hasItem(A,w=1){return l(A)+(A==="carrot"?c(A):0)>=w},hasGiven(A){return o.gifts?.[A]===!0},giveOnce(A,w){o.gifts?.[w]||!h.some(R=>R.kind===A)||!this.hasItem(A)||(l(A)?o[A]--:t.harvest[Vt[A].name]--,o.gifts={...o.gifts,[w]:!0},S())},collect(A){if(h.some(w=>w.kind===A))return o[A]=l(A)+1,S(),o[A]},record(A){if(!(A!==a||A>=r.length)){a++,_();try{n?.setItem(Cu,String(a))}catch{}}}}}var _r=[{name:"鳑鲏",color:16165804,shape:[.83,1,1],speed:.8,swing:.23,ripple:.045},{name:"白条",color:10082015,shape:[1.22,.53,.64],speed:1.62,swing:.24,ripple:.08},{name:"珍珠金鱼",color:16764784,shape:[.72,1.48,1.32],speed:1.05,swing:.25,ripple:.13}];function Pu(r,e,t,{releases:n,specimens:i,items:s},a=!1,o,l,c,h,u,p=()=>{}){let d=_r.map(ae=>{if(!i.has(ae.name))throw Error("orchard.dsl 缺少 specimen "+ae.name);return{...ae,...i.get(ae.name)}}),v=et.玩家钓位,g=[],f=et.抛竿水面,y=Ru(d,s,h,u),m=tn(r,"pond","angler");m.root.rotation.y=1;let{cork:x,line:M}=Xl(r),E=new Xe,_=new ft,S=new P,A=new P;e.add(E),E.position.set(-.5,.64,.32);let w=new Xe;E.add(w);let R=new rt({color:13344870,flatShading:!0}),O=new rt({color:6902593,flatShading:!0});function L(ae,ge,Le,ke,be){let Oe=new Fe(new ln(Le,ge,ke,7),be);Oe.position.y=ke/2,ae.add(Oe)}L(w,.088,.079,.43,O),L(w,.059,.041,1.15,R);let U=new Xe;U.position.y=1.15,w.add(U),L(U,.043,.019,.85,R);let N=new Fe(new ln(.058,.058,.085,7),O);N.position.y=.02,U.add(N),_.position.y=.85,U.add(_);function k(ae,ge){w.rotation.x=ae,U.rotation.x=ge,_.getWorldPosition(S)}let Q=document.createElement("section");Q.className="angling",Q.hidden=!0,Q.innerHTML='<strong></strong><p></p><div class="track"><i></i><b aria-hidden="true"></b></div><progress aria-label="收线进度" max="1"></progress><nav><button class="action"></button><button class="leave">离开</button></nav>',document.body.append(Q);let Y=ae=>Q.querySelector(ae),ee=Y(".action"),K=Y(".track"),V=Y("progress"),j=0,re=!1,b=null,T="idle",B=!1,$=0,D=.5,Z=.45,F=y.count,G=d.map(ae=>{let ge=yr(r,ae);return ge.scale.setScalar(.63),ge.visible=!1,ge}),H=new Fe(new zt(.86,1,24),new mt({color:16773070,transparent:!0,depthWrite:!1,side:ur}));H.rotation.x=-Math.PI/2,H.visible=!1,r.add(H);let se=new P,ne=new P,C={target:new P,height:9},oe=0;function z(ae,ge){H.visible=ge<1,H.position.set(ae.x,-.245,ae.z),H.scale.setScalar(.16+1.35*ge),H.material.opacity=.8*(1-ge)}function X(ae=x.position){let ge=M.geometry.attributes.position;ge.setXYZ(0,S.x,S.y,S.z),ge.setXYZ(1,ae.x,ae.y,ae.z),ge.needsUpdate=!0,M.frustumCulled=!1}function W(ae,ge="",Le="",ke=""){ae==="cast"?Tt("cast"):ae==="reel"?Tt("bite"):ae==="landing"?Tt("catch"):ae==="miss"&&Tt("escape"),E.visible=["cast","reel","landing"].includes(ae),ae==="cast"&&(k(-.37,0),A.copy(S)),T=ae,oe=0,Q.dataset.phase=ae,B=!1;let be=["approach","cast","landing"].includes(ae);Q.hidden=ae==="idle"||be,ae==="idle"&&(H.visible=!1,G.forEach(Oe=>Oe.visible=!1)),Y("strong").textContent=ge,Y("p").textContent=Le,ee.textContent=ke,Y(".leave").hidden=ae==="caught"||ae==="done",K.hidden=V.hidden=ae!=="reel",x.visible=ae==="reel"||ae==="cast",M.visible=E.visible}let ue=a||y.count>0;function pe(){if(re||(ue=!0),$=0,D=.5,Z=.45,Q.style.setProperty("--fish","#"+d[j].color.toString(16)),g=l(v[0],v[2]),!g.length){W("idle");return}W("approach")}function _e(){W("reel","收线","按住向右，松开向左，让鱼留在浮框里。","按住收线"),V.value=Z}function Ue(){if(T==="invite"||T==="miss")pe();else if(T==="caught"){if(G[j].visible=!1,re){W("idle");return}let ae=n.get(F)??"「"+t.chat.find(ge=>ge.condition==="catch"&&Number(ge.value)===F).pair[1]+"」";W("done",t.name,ae,"收起鱼竿")}else T==="done"&&W("idle")}return ee.onclick=Ue,Y(".leave").onclick=()=>W("idle"),ee.onpointerdown=ae=>{T==="reel"&&(B=!0,ee.setPointerCapture(ae.pointerId))},ee.onpointerup=ee.onpointercancel=()=>{B=!1},addEventListener("keydown",ae=>{T!=="idle"&&(ae.code==="Escape"&&W("idle"),ae.code==="Space"&&(ae.preventDefault(),T==="reel"?B=!0:ae.repeat||Ue()))}),addEventListener("keyup",ae=>{ae.code==="Space"&&(B=!1)}),addEventListener("blur",()=>B=!1),W("idle"),{refreshInventory:y.refresh,giveOnce:y.giveOnce,hasGiven:y.hasGiven,hasItem:y.hasItem,collect:ae=>y.collect(ae),get started(){return ue},get view(){if(!["cast","reel","landing","caught","miss"].includes(T))return null;let ae=["landing","caught"].includes(T);return C.target.set(f[0]+.3,.5,f[2]),ae&&C.target.lerp(G[j].position,.6),C.height=ae?6.8:9,C},character:m.root,placeFlask:m.placeFlask,get caught(){return F},get active(){return T!=="idle"},near:()=>e.position.distanceTo(m.root.position)<3,get complete(){return F===d.length},reset(){F=y.count,W("idle")},takeLanding(){let ae=b;return b=null,ae},freeCast(){T==="idle"&&(re=!0,j=Math.floor(Math.random()*d.length),pe())},invite(){if(re=!1,j=F,F===d.length){W("done",t.name,"它把鱼竿横在膝盖上，晾着湿漉漉的帽子。","告别");return}W("invite",t.name,"「"+d[j].clue+"」","接过鱼竿")},update(ae,ge,Le=!1){if(m.update(ae,0,0,Le||T!=="idle"),oe+=ae,T==="approach"){let[Re,ht]=g[0],gt=e.position,dt=Re-gt.x,at=ht-gt.z,ot=Math.hypot(dt,at),vt=ot?Math.min(1,ae*3.5/ot):1;ot>.01&&(e.rotation.y=Math.atan2(dt,at)),o(dt*vt,at*vt),Math.hypot(Re-gt.x,ht-gt.z)<.001&&g.shift(),g.length||(e.rotation.y=Math.atan2(f[0]-gt.x,f[2]-gt.z),W("cast"));return}if(T==="cast"){let Re=Math.min(1,oe/.95);k(Ce.lerp(-.37,.98,Ce.smoothstep(Re,0,.5)),.09*Math.sin(Re*Math.PI)),x.position.set(Ce.lerp(A.x,f[0]+1,Re),Ce.lerp(A.y,f[1],Re)+1.5*Math.sin(Re*Math.PI),Ce.lerp(A.z,f[2],Re)),X(),Re===1&&_e();return}if(T==="landing"||T==="caught"){let Re=G[j];if(Re.visible=!0,e.localToWorld(ne.set(0,1.12,.83)),T==="landing"){let ht=Math.min(1,oe/1.45),gt=Ce.smoothstep(ht,0,1);if(Re.position.lerpVectors(se,ne,gt),Re.position.y+=2.6*Math.sin(ht*Math.PI),Re.rotation.z=-.65*Math.cos(ht*Math.PI),z(se,Math.min(1,oe/.85)),k(.98-.78*Math.sin(.5*Math.PI*ht),.3*(1-ht)),X(Re.position),ht===1){let dt=d[j];W("caught","已获得 · "+dt.name,dt.verse,"继续")}}else Re.position.copy(ne),Re.position.y+=.05*Math.sin(ge*4);return}if(T!=="reel")return;B&&Math.floor(($+ae)*4)!==Math.floor($*4)&&Tt("reel"),$+=ae;let ke=d[j],be=.5+ke.swing*Math.sin($*ke.speed)+ke.ripple*Math.sin($*2.03+F);D=Ce.clamp(D+(B?.62:-.5)*ae,.15,.85);let Oe=Math.abs(D-be)<=.15;Z=Ce.clamp(Z+ae*(Oe?.17:-.092),0,1),Y("i").style.left=(D-.15)*100+"%",Y("b").style.left=be*100+"%",K.classList.toggle("aligned",Oe),V.value=Z,x.position.set(f[0]+be*2,f[1]+Math.sin(ge*8)*.06,f[2]),k(.95+(B?-.12:0),.14+.11*Math.sin($*6)),X(),Z===1&&(se.copy(x.position),p(se),G[j].position.copy(se),b=j,re?(c(d[j].name),y.refresh()):(y.record(F),F++),W("landing")),Z===0&&W("miss","鱼挣脱了","水纹绕了个圈。它还在附近。","再试一次")}}}function Xl(r){let e=new Fe(new At(.18,.22,.18),new rt({color:15097681}));r.add(e);let t=new ia(new _t().setFromPoints([new P,new P]),new Hr({color:6773064}));return r.add(t),{cork:e,line:t}}function Lu(r,e=()=>{}){let t=[[-11.35,6.6,.82],[-4.25,6.6,.82],[-11.35,1.95,.82],[-4.25,1.95,.82],[-9.1,8.1,0],[-3.1,4.3,0],[-8.8,-2.9,0],[-2.7,-3.1,0],[1.8,2.4,0],[3.8,7.1,0],[6.6,10,0],[1.5,8.6,0]],n=(a,o)=>a+Math.random()*(o-a),i=new Set,s=[[0,5998731],[7,12157020,{x:-2.25,z:-1.55,yaw:-.85}],[10,7506854]].map(([a,o,l])=>{let{root:c,torso:h,neck:u,wings:p}=jl(r,o),d=a,v=[d],g=null,f=0,y=0,m=()=>t[d][2]>0?n(22,34):n(16,26),x=m(),M="rest",E=0,_=n(.8,2.1),S=n(-.42,.42),A=n(27,32),w=l?.yaw??n(-Math.PI,Math.PI),R=n(0,6),O=new P,L=new P,U=new P,[N,k,Q]=t[d];c.position.set(l?.x??N,Q,l?.z??k),c.rotation.y=w,i.add(d);function Y(K,V){let j=c.position.clone(),re=-1/0,b=null;for(let z=0;z<t.length;z++){if(i.has(z))continue;let[X,W]=t[z],ue=Math.hypot(X-j.x,W-j.z),pe=Math.hypot(X-K.x,W-K.z);if(pe<2.8)continue;let _e=n(0,9)-Math.abs(ue-(V?8:5))*.65-(v.includes(z)?10:0)+(V?Math.min(pe,12)*.65:0);_e>re&&(re=_e,b=z)}if(b===null)return;i.delete(d),d=b,i.add(d),v=[d,...v].slice(0,3);let[T,B,$]=t[d],D=$===0?.45:0,Z=new P(T+n(-D,D),$,B+n(-D,D)),F=Z.x-j.x,G=Z.z-j.z,H=Math.hypot(F,G)||1,se=n(-1.25,1.25),ne=n(1.2,2.2)+H*.17,C=j.clone().lerp(Z,.27),oe=j.clone().lerp(Z,.76);if(V){Tt("wing"),e(j);let z=j.x-K.x,X=j.z-K.z,W=Math.hypot(z,X);W>.05&&(C.x=j.x+z/W*2,C.z=j.z+X/W*2)}C.x-=G/H*se,C.z+=F/H*se,C.y+=ne*(V?1.45:1),oe.x-=G/H*se,oe.z+=F/H*se,oe.y+=ne*.7,g=new Xr(j,C,oe,Z),f=0,y=.48+H/n(V?6:4,V?8:6)}function ee(){E=0,O.copy(c.position),w=c.rotation.y+n(-1.3,1.3);let K=Math.random();if(M=t[d][2]===0?K<.09?"hop":K<.45?"peck":K<.63?"look":"rest":K<.32?"look":"rest",M==="rest"&&(w=c.rotation.y,S=n(.24,.5)*(Math.random()<.5?-1:1)),_=M==="hop"?.36:M==="peck"?.84:M==="rest"?n(1.1,2.5):n(1.1,2.4),M==="hop"){let[V,j]=v.length===1&&l?[l.x,l.z]:t[d];L.set(Ce.clamp(O.x+Math.sin(w)*.32,V-.55,V+.55),0,Ce.clamp(O.z+Math.cos(w)*.32,j-.55,j+.55))}}return(K,V,j)=>{let re=0;if(!g){x-=K;let b=Math.hypot(c.position.x-j.x,c.position.z-j.z)<1.45;(b||x<=0&&E+K>=_)&&Y(j,b)}if(g){f+=K;let b=Math.min(1,f/y);g.getPoint(b,c.position),g.getTangent(b,U),c.rotation.y=Math.atan2(U.x,U.z),h.rotation.x=-U.y*.3,u.rotation.set(0,0,0),re=b>.42&&b<.68?.23:1,b===1&&(g=null,x=m(),ee())}else{E+=K,E>=_&&(M==="hop"&&c.position.copy(L),ee());let b=E/_,T=w-c.rotation.y,B=M==="rest"?Math.sin(b*Math.PI)**2:0;if(u.rotation.y=S*B,M==="peck"){let $=Math.atan2(Math.sin(T),Math.cos(T));c.rotation.y+=Math.sign($)*Math.min(Math.abs($),K*7);let D=Ce.smootherstep(b,.34,.51)*(1-Ce.smootherstep(b,.57,.86));h.rotation.x=.19*D,u.rotation.x=D}else c.rotation.y+=Math.atan2(Math.sin(T),Math.cos(T))*(1-Math.exp(-5*K)),h.rotation.x=0,u.rotation.x=-.09*B;M==="hop"&&(c.position.lerpVectors(O,L,b),c.position.y+=Math.sin(b*Math.PI)*.18)}R+=K*A,p.forEach((b,T)=>b.rotation.z=(T?1:-1)*(.24+re*Math.sin(R)*1.1))}});return(a,o,l)=>s.forEach(c=>c(a,o,l))}var If=new At;function jl(r,e){let t=new Xe;r.add(t);let n=new Xe,i=new Xe;t.add(n),n.add(i),i.position.set(0,.32,.095);function s(o,l,c,h,u,p,d,v=n){let g=new Fe(If,new rt({color:d}));return g.position.set(o,l,c),g.scale.set(h,u,p),g.castShadow=!0,v.add(g),g}s(0,.24,0,.31,.24,.46,e),s(0,.345,-.015,.255,.1,.38,e),s(0,.157,.07,.245,.12,.3,13942166),s(0,.14,.085,.26,.21,.23,e,i),s(0,.245,.077,.21,.055,.18,e,i),s(0,.092,.174,.2,.081,.092,14732713,i),s(0,.125,.23,.102,.064,.1,14065750,i),s(0,.12,.294,.069,.034,.047,15778681,i);for(let o of[-1,1])s(o*.128,.167,.148,.033,.054,.058,3685433,i),s(o*.148,.18,.161,.009,.015,.014,16771517,i),s(o*.059,.059,.058,.026,.087,.031,10716512),s(o*.059,.022,.094,.053,.023,.095,11770224),s(o*.055,.228,-.3,.093,.055,.3,e).rotation.x=-.14;let a=[-1,1].map(o=>{let l=new Xe;l.position.set(o*.15,.29,0),n.add(l),s(o*.025,0,-.035,.075,.115,.27,6781319,l);for(let c=0;c<3;c++){let h=s(o*(.05+c*.012),-.025-c*.017,-.065-c*.047,.042,.045,.21-c*.015,c===1?8491417:5532027,l);h.rotation.x=-.17}return l});return{root:t,torso:n,neck:i,wings:a}}var ql=new Map,Mr;function Uf(r,e){let t=new Xe,n=hn(t),i=n.box,s=()=>{};if(["traveler","flower-clasp","angler","child"].includes(r)){let g=tn(t,r==="angler"?"pond":"look",r),f=new Xe;f.position.set(r==="traveler"?1.4:-1.4,0,0);let y=r==="traveler"||r==="flower-clasp"?Aa(t):null,m=[null,"smile","puzzled","surprised","talk",null,null];y&&m.push(null);let x=2.35,M=0,E=-1;s=_=>{let S=Math.floor(_/x)%m.length,A=Math.min(.12,Math.max(0,_-M));M=_,g.root.userData.speechFace=m[S],S===6&&S!==E&&((r==="traveler"||r==="child")&&g.jump(3),r==="flower-clasp"&&(g.root.userData.reachCue={time:0,yaw:-.55})),y&&(S===7&&E!==S&&y.start(r==="traveler"?g.root:f,r==="traveler"?f:g.root),y.update(A)),g.update(A,S===5?.075:0,S===5?.13:0,S>0&&S<5,!0),g.root.rotation.y=S===5?.36:.12,r==="angler"&&S===6&&(g.body.rotation.x=.33*Math.sin(Math.PI*(_%x)/x)),E=S}}else if(r==="flower")e==="勿忘我"?Sa(i,0,0,.42):xr(i,0,0,{粉野花:0,白野花:.5,黄野花:.9}[e]);else if(r==="woodTree")vr(i,0,0,1,!1);else if(r==="pine")Ol(i,0,0,1);else if(r==="tomato"||r==="wheat")t.add(Gl(r));else if(r==="reed")Wl(i,0,0);else if(r==="tree"){let g=new Xe;Ea(g)(e==="苹果树"?1:0),t.add(g.children.find(f=>f.isGroup))}else if(r==="house")Fl(i);else if(r==="candy")Ta(i,{粉色棒棒糖:14452880,杏黄棒棒糖:14986857,淡紫棒棒糖:11835590}[e]);else if(r==="cottage")_a(i,0,0);else if(r==="apple")Qr(i);else if(r==="bed"||r==="carrot"||r==="dryCarrot"){let g=new Ze,f=!0;Pa(r==="bed"?i:()=>{},{at(){let m=r==="bed"||f;return f=!1,m?r==="dryCarrot"?(x,M,E,_,S,A,w)=>i(x,M,E,_,S,A,Mu[w]??w):i:()=>g}})}else if(["fish","round","slender"].includes(r))s=yr(t,_r.find(f=>f.name===e)).userData.swim;else if(r==="meadow"){let g=[11189616,11715960,11321203];for(let f=-1;f<=1;f++)for(let y=-1;y<=1;y++){let m=new ze(g[(f+2*y+6)%3]),x={};m.getHSL(x,yt),e==="淡紫草地"&&m.setHSL(.76,.16,.46+x.l*.48,yt),e==="灰粉草地"&&m.setHSL(.88,.1,.38+x.l*.57,yt),i(f,-.45,y,1,.45,1,m.getHex())}}else if(r==="bird"){let{root:g,neck:f}=jl(t,{栗色小鸟:12157020,青灰小鸟:5998731,蓝灰小鸟:7506854}[e]);g.rotation.y=.65,s=y=>{f.rotation.x=.55*Math.max(0,Math.sin(y*2.4))**5}}else if(r==="pier")Hl(i);else if(r==="fence")Vl(i,-2,0,2,0);else if(r==="hose"){let g=Ra(t,new P);g.position.set(-.08,.07,0),g.rotation.z=-1.15}else if(r==="float"){let{line:g}=Xl(t);g.geometry.setFromPoints([new P(-.37,.58,0),new P])}else{let g=e==="花头巾"?"kerchief":r,f={kerchief:"flower-clasp",hat:"angler",bottle:"angler",scarf:"traveler"}[g];if(!f)throw Error("未知图鉴模型 "+e);let{body:y}=tn(new Xe,"look",f);t.add(...y.children.filter(m=>m.name===g))}n.finish();let a=new Qt().setFromObject(t);if(a.isEmpty())throw Error("图鉴模型为空 "+e);let o=a.getCenter(new P),l=new Xe;t.position.sub(o),l.add(t);let c=new or;c.add(l,new cr(16774100,13089438,2.05));let h=new hr(16772036,2);h.position.set(-25,47,17),c.add(h);let u=new ti(-1,1,1,-1,.01,300);u.position.set(.37,.56,1).normalize().multiplyScalar(60),u.lookAt(0,0,0),u.updateMatrixWorld();let d=a.clone().translate(o.clone().negate()).applyMatrix4(u.matrixWorldInverse).getSize(new P),v=Math.max(d.y,d.x*360/660)*(["child","traveler","flower-clasp","angler"].includes(r)?1.75:1.25);return u.top=v/2,u.bottom=-v/2,u.right=v*660/720,u.left=-u.right,u.updateProjectionMatrix(),{scene:c,camera:u,pose(g){l.rotation.y=.15*Math.sin(g*.85),s(g)}}}function Iu(r,e,t,n=!1){Mr||(Mr=new wi({alpha:!0,antialias:!0}),Mr.setSize(330,180,!1),Mr.setClearColor(0,0)),ql.has(t)||ql.set(t,Uf(e,t));let i=ql.get(t),s=r.getContext("2d");r.width=330,r.height=180;let a=0,o=-1/0,l=performance.now(),c=n&&!matchMedia("(prefers-reduced-motion: reduce)").matches;function h(u){if(u-o<50){a=requestAnimationFrame(h);return}o=u,i.pose(c?(u-l)/1e3:0),Mr.render(i.scene,i.camera),s.clearRect(0,0,330,180),s.drawImage(Mr.domElement,0,0),c&&(a=requestAnimationFrame(h))}return h(l),()=>cancelAnimationFrame(a)}function Uu(r){let e={角色:[["阿团","主屋门前","领巾兜着风，枝头一颗红。","traveler"],["阿棠","果树旁的小路","巾角一朵蓝，回身等在花阴里。","flower-clasp"],["草帽","池边栈桥","一顶晴阴遮半日，一竿斜影入清波。","angler"],["小羽","林间球场","额上一双羽，追着金丸过草尖。","child"]],花草树木:[["勿忘我","主屋门边","五瓣浅蓝，围住一点鹅黄。","flower"],["粉野花","菜园外、屋旁","细茎挑浅粉，花小未齐草。","flower"],["白野花","通往栈桥的小路旁","一星白露，日高犹在花间。","flower"],["黄野花","菜园后篱外","篱边三两点，晴日落成花。","flower"],["芦苇","池边、桥侧","一穗临波，风来先点水。","reed"],["林间阔叶树","西边树林","枝影交叠处，留一径野花。","woodTree"],["松树","西边树林","一层新针绿，一层旧针青。","pine"],["棒棒糖树","屋前岔路","枝头绕白丝，蜜色垂青叶。","tree"],["苹果树","屋前岔路","枝低因果重，手近叶先摇。","tree"],["淡紫草地","农庄草地","草尖浮淡紫，恰似暮云低。","meadow"],["灰粉草地","农庄草地","草上胭脂薄，一痕分小径。","meadow"],["青草地","农庄草地","春色齐到脚边，小径从中穿过。","meadow"]],果蔬糖果:[["粉色棒棒糖","树梢",r.items.get("candy").verse,"candy"],["杏黄棒棒糖","树梢",r.items.get("candy").verse,"candy"],["淡紫棒棒糖","树梢",r.items.get("candy").verse,"candy"],["苹果","果树",r.items.get("apple").verse,"apple"],["小麦","菜园","细秆擎金穗，穗头向风低。","wheat"],["番茄","菜园","青枝垂小果，红透叶阴间。","tomato"],["胡萝卜","菜园",r.items.get("carrot").verse,"carrot"]],鱼和鸟:[["鳑鲏","池塘",r.specimens.get("鳑鲏").verse,"fish"],["白条","池塘",r.specimens.get("白条").verse,"slender"],["珍珠金鱼","池塘",r.specimens.get("珍珠金鱼").verse,"round"],["栗色小鸟","屋前、田边","栗羽沾晨露，阶前啄两声。","bird"],["青灰小鸟","菜园、池畔","青羽歇篱头，半随苔色隐。","bird"],["蓝灰小鸟","池畔、田边","一翅烟蓝，轻轻掠过田塍。","bird"]],场景器物:[["苹果屋","主屋","红果开双窗，屋顶一枝梗。","house"],["红瓦小屋","主屋","瓦上晴光暖，花影上窗棂。","cottage"],["木栈桥","池边","岸到桥头尽，双竿向水斜。","pier"],["鱼线与浮漂","栈桥钓位","一线垂青荇，微红忽点波。","float"],["浇水软管","菜园入口","闲时盘作环，举手一畦雨。","hose"],["菜畦与田埂","菜园","两畦分一径，鞋底带新泥。","bed"],["木篱笆","菜园四周","疏篱留一缺，恰与小径逢。","fence"],["补丁草帽","草帽身上","帽檐缺处，两针青布补晴天。","hat"],["小酒瓶","草帽身上","绿瓶系短绳，一晃酒香来。","bottle"],["花头巾","阿棠身上","素巾收鬓角，一朵浅蓝偏。","hat"],["蓝围巾","阿团身上","一结系晴蓝，流苏先识风。","scarf"]]},t=document.querySelector("#game-menu"),n=document.querySelector("#menu-home"),i=document.querySelector("#field-guide"),s=i.querySelector("nav"),a=i.querySelector("#album-grid"),o=i.querySelector("#album-pages"),l=i.querySelector("#album-tip"),c=document.querySelector("#open-guide"),h=document.querySelector("#back-to-menu"),u=o.querySelector("#page-prev"),p=o.querySelector("#page-next"),d=6,v=Object.keys(e)[0],g=0,f=[],y=null;function m(){y?.removeAttribute("aria-describedby"),y=null,l.hidden=!0}function x(S,A){let w=t.getBoundingClientRect(),R=10;l.style.left=Math.max(w.left+R,Math.min(S+14,w.right-l.offsetWidth-R))+"px";let O=A+18+l.offsetHeight>w.bottom-R?A-l.offsetHeight-12:A+18;l.style.top=Math.max(w.top+R,O)+"px"}function M(){m();for(let S of f)S();f=[]}function E(){let S=e[v],A=Math.ceil(S.length/d);M(),a.replaceChildren();for(let[w,R,O,L]of S.slice(g*d,(g+1)*d)){let Y=function(K,V){y!==U&&(m(),l.textContent=O,l.hidden=!1,y=U,U.setAttribute("aria-describedby","album-tip")),x(K,V)},ee=function(){let K=U.getBoundingClientRect();Y(K.left+K.width/2,K.bottom-8)},U=document.createElement("button"),N=document.createElement("canvas"),k=document.createElement("span"),Q=document.createElement("small");N.setAttribute("aria-hidden","true"),k.textContent=w,Q.textContent=R,U.append(N,k,Q),a.append(U),f.push(Iu(N,L,w,!0)),U.onpointermove=K=>{K.pointerType!=="touch"&&Y(K.clientX,K.clientY)},U.onpointerenter=U.onpointermove,U.onpointerleave=K=>{K.pointerType!=="touch"&&y===U&&m()},U.onfocus=()=>{U.matches(":focus-visible")&&ee()},U.onblur=()=>{y===U&&m()},U.onclick=()=>{y!==U&&ee()}}o.hidden=A<=1,u.disabled=g===0,p.disabled=g===A-1,o.querySelector("span").textContent=g+1+" / "+A;for(let w of s.children)w.setAttribute("aria-pressed",String(w.textContent===v))}u.onclick=()=>{g--,E(),u.disabled&&p.focus()},p.onclick=()=>{g++,E(),p.disabled&&u.focus()};for(let S of Object.keys(e)){let A=document.createElement("button");A.textContent=S,A.onclick=()=>{v=S,g=0,E()},s.append(A)}function _(){M(),i.hidden=!0,n.hidden=!1,t.setAttribute("aria-labelledby","menu-name"),c.focus()}c.onclick=()=>{n.hidden=!0,i.hidden=!1,t.setAttribute("aria-labelledby","guide-name"),v=Object.keys(e)[0],g=0,E(),h.focus()},h.onclick=_,t.addEventListener("cancel",S=>{i.hidden||(S.preventDefault(),_())})}function Du(r,e,t){let n=new Set(t),i=new P,s=r.tutorials.map(h=>{let u=document.createElement("span");return u.className="quest-mark",u.append(document.createElement("i")),u.style.setProperty("--pulse",r.guidance.pulse+"s"),u.hidden=!0,document.body.append(u),{...h,mark:u,burst:0,point:new P(...e[h.place])}}),a=document.createElement("span");a.className="tutorial-caption",a.setAttribute("role","status"),a.hidden=!0,document.body.append(a);let o=null,l=0;function c(h,u,p,d){i.copy(u),i.y+=p,i.project(d),h.style.left=(1+i.x)*innerWidth/2+"px",h.style.top=(1-i.y)*innerHeight/2+"px"}return{seen:n,update(h,u,p,d,v){d&&o&&(l-=h)<=0&&(o=null);for(let g of s){g.burst=Math.max(0,g.burst-h);let f=Math.hypot(u.x-g.point.x,u.z-g.point.z);if(d&&!o&&!n.has(g.id)&&f<=g.radius){o=g,g.burst=.44,l=3.4,g.mark.classList.add("scattered");for(let y=0;y<6;y++){let m=document.createElement("b"),x=y*Math.PI/3;m.style.setProperty("--dx",Math.cos(x)*19+"px"),m.style.setProperty("--dy",Math.sin(x)*14-4+"px"),g.mark.append(m)}n.add(g.id),a.textContent=g.text}g.mark.hidden=!d||n.has(g.id)&&!g.burst||f>g.radius+2.5,g.mark.hidden||(c(g.mark,g.point,.35,p),g.mark.style.setProperty("--marker-scale",innerHeight*p.zoom/(p.top-p.bottom)/v))}if(a.hidden=!d||!o,!a.hidden){let g=3.4-l;a.style.opacity=Math.min(1,l/.4,Math.max(0,(g-.18)/.24))}}}}function Nu(r,e,t,n){let i=new Fe(new zt(.54,.63,48),new mt({color:16771255,transparent:!0,opacity:.5,depthWrite:!1}));i.rotation.x=-Math.PI/2,r.add(i),i.visible=!1;let s=document.createElement("div");s.className="harvest-tip",s.hidden=!0,s.textContent="按住空格蓄力 · 松开起跳",document.body.append(s);let a=new Map;for(let w of t){let R=w.twig.parent;a.has(R)||a.set(R,[]),a.get(R).push(w)}let o=new P,l=new P,c=null,h=null,u=!1,p=!1,d=0;function v(){let w=e.root.position;for(let R of a.keys())if(Math.hypot(R.position.x-w.x,R.position.z-w.z)<2.85*R.scale.x)return R;return null}let g=new Map,f=new Xe,y=new Sn(.065,6,4);for(let w of[16772546,15319727,16770236,15849138,16772300])f.add(new Fe(y,new mt({color:w})));r.add(f),f.visible=!1;let m=1,x="",M=0;function E(w){Tt("fruit"),w.harvesting=!0,m=0,w.twig.getWorldPosition(f.position),f.position.y+=.12,f.visible=!0;let R=w.twig.children[0],O=R.material;R.material=O.clone(),R.material.transparent=!0,g.set(w,{age:0,kind:w.kind,banked:!1,original:O})}function _(w){m+=w;let R=Math.min(m/.34,1);if(f.visible=R<1,!f.visible)return;f.children.forEach((L,U)=>{let N=U*2.4,k=.13+.41*R;L.position.set(Math.cos(N)*k,.09+(.48+U*.035)*Math.sin(R*Math.PI*.85),Math.sin(N)*k),L.scale.setScalar(1-R*R)});let O=Math.sin(R*Math.PI*2)*(1-R)*.18;e.body.scale.x*=1+O,e.body.scale.z*=1+O,e.body.scale.y*=1-O}function S(w){let R=e.root.position,O=w.home,L=w.size,U=R.x-w.treeX-O.x*L,N=R.z-w.treeZ-O.z*L,k=R.y+e.body.position.y,Q=O.y*L;return Math.hypot(U,N)<.7&&k+1.08>=Q+.03&&k<Q+.55}function A(w){for(let[R,O]of g){O.age+=w;let L=R.twig,U=O.age;if(U<.17){let N=U/.17;L.rotation.z=.24*Math.sin(N*Math.PI*2)*(1-N),L.position.y=R.home.y+.12*Math.sin(N*Math.PI)}else if(U<1.05){let N=Ce.smoothstep(U,.17,.62),k=Ce.smoothstep(U,.68,1.05);e.body.getWorldPosition(l),l.x+=.57*(1-k),l.y+=1.12-.54*k,L.parent.worldToLocal(l),L.position.lerpVectors(R.home,l,N),L.position.y+=.22*Math.sin(Math.PI*N),L.rotation.z=.24*N,L.scale.setScalar(1-.7*k),L.children[0].material.opacity=1-k}else{if(!O.banked){let k=L.children[0];k.material.dispose(),k.material=O.original;let Q=n(O.kind);O.banked=!0,Q&&(x=(O.kind==="apple"?"苹果":"棒棒糖")+"　"+Q,M=1.5)}L.position.copy(R.home),L.rotation.z=0;let N=Ce.smoothstep(U,8,8.65);L.visible=N>0,L.scale.setScalar(N),N===1&&(R.harvesting=!1,g.delete(R))}}}return{hold(){return v()?(e.grounded&&(h=0),!0):!1},release(){h!==null&&(v()&&e.grounded&&(e.jump(5.2+4.5*h),u=!0,p=!1),h=null)},cancel(){h=null},update(w,R,O){d+=w,M=Math.max(0,M-w),A(w);let L=O?v():null;if(L!==c&&(c=L,h=null),O||(h=null,u=!1),u&&e.grounded&&(u=!1),u&&c&&!p){let N=a.get(c).find(k=>!g.has(k)&&S(k));N&&(E(N),p=!0)}_(w),h!==null&&(h=Math.min(1,h+w/1.05));let U=e.root.position;i.visible=!!c,c&&(i.position.set(U.x,U.y+.025,U.z),i.scale.setScalar(.9+(h??0)*.42+.035*Math.sin(d*4)),i.material.opacity=.45+(h??0)*.45,h!==null&&(e.body.scale.x*=1+h*.15,e.body.scale.z*=1+h*.15,e.body.scale.y*=1-h*.22)),s.hidden=!O||M<=0&&(!c||h===null),s.hidden||(o.copy(U),o.y+=1.75+e.body.position.y,o.project(R),s.style.left=(1+o.x)*innerWidth/2+"px",s.style.top=(1-o.y)*innerHeight/2+"px",s.style.opacity=M>0?Math.min(1,M/.25):1,s.textContent=M>0?x:h===1?"松开空格 · 起跳":"蓄力中"+"·".repeat(1+Math.floor(h*3)))}}}function Ou(r){let e=new Map,t=new Map,n=new Map,i=[],s=[],a=new Map,o=[],l=[],c={icon:"star",pulse:1.8,edge:"arrow",reach:3.1},h=null,u=null,p=!1,d=0;function v(f,y){if(!f)throw Error("orchard.dsl 第 "+d+" 行："+y)}for(let f of r.split(/\r?\n/)){d++;let y=f.trim();if(!y||y.startsWith("#"))continue;let m;if(/^\s/.test(f)&&p){m=y.match(/^shot ([\d.]+) (\S+) width=([\d.]+) guide=(on|off)(?: thought="([^"]+)")?$/),v(m,"无法识别开场镜头");let x=Number(m[1]),M=m[2].split("+"),E=Number(m[3]);v(Number.isFinite(x)&&(o.length?x>o.at(-1).time:x===0),"镜头时间应从零开始并递增"),v(E>0&&Number.isFinite(E),"镜头宽度须为正数"),v(M.every(_=>_==="player"||n.has(_)||Object.hasOwn(et,_)),"镜头目标未定义"),o.push({time:x,targets:M,width:E,guide:m[4]==="on",thought:m[5]});continue}if(p=!1,y==="on new_game:"){v(!o.length,"重复开场"),p=!0,u=null;continue}if(m=y.match(/^tutorial (\w+) at (\S+) radius=([\d.]+) "([^"]+)"$/)){let[,x,M,E,_]=m;v(Object.hasOwn(et,M)&&Number(E)>0&&Number.isFinite(Number(E)),"无效的新手引导位置或范围"),v(!l.some(S=>S.id===x),"重复的新手引导"),l.push({id:x,place:M,radius:Number(E),text:_}),u=null;continue}if(m=y.match(/^guidance icon=(star|dot) pulse=([\d.]+) edge=(arrow|off)(?: reach=([\d.]+))?$/)){v(Number(m[2])>0&&Number.isFinite(Number(m[2])),"呼吸周期须为正数");let x=Number(m[4]??3.1);v(Number.isFinite(x)&&x>0,"交谈距离须为正数"),c={icon:m[1],pulse:Number(m[2]),edge:m[3],reach:x},u=null;continue}if(/^\s/.test(f)&&u){(m=y.match(/^say (\S+)(?: face=(smile|puzzled|surprised))? "([^"]+)"(?: toss (candy) to (\S+)| reach (candy))?(?: to (\S+)(?: observers=listener)?)?$/))?(v(m[1]===h||m[1]===u.actor||u.automatic&&n.has(m[1]),"未知的发言人"),m[4]&&v(t.has(m[4])&&m[5]!==m[1]&&(m[5]===h||m[5]===u.actor),"抛接双方须在当前对话中"),u.automatic&&v(m[7]&&m[7]!==m[1]&&(m[7]===h||n.has(m[7])),"自动对白需要指定交谈对象"),u.lines.push({speaker:m[1],face:m[2],text:m[3],tossTo:m[5],reachFor:m[6],listener:m[7],watchListener:y.endsWith(" observers=listener")})):(m=y.match(/^guide place (\S+)$/))?(v(Object.hasOwn(et,m[1]),"未知引导地点"),u.guidePlace=m[1]):(m=y.match(/^remind (\S+) (\w+) "([^"]+)"$/))?(v(u.cropHarvest&&n.has(m[1]),"未知提醒角色"),u.adviser=m[1],(u.advice??={})[m[2]]=m[3]):(m=y.match(/^guide item (\w+)$/))?(v(t.has(m[1]),"未知引导物品"),u.guideItem=m[1]):(m=y.match(/^need (\w+)(?: ([1-9]\d*))? "([^"]+)"$/))?(v(t.has(m[1]),"未知物品"),u.need=m[1],u.quantity=Number(m[2]||1),u.reminder=m[3]):(m=y.match(/^scenery ([1-3])$/))?u.phase=Number(m[1]):(m=y.match(/^walk (.+)$/))?(u.walk=m[1].trim().split(/\s+/),u.walk[0]==="as"&&(u.walk.shift(),u.walkActor=u.walk.shift(),v(n.has(u.walkActor),"未知带路角色")),v(u.walk.every(x=>Object.hasOwn(et,x)),"行走路线含未知地点")):(m=y.match(/^on_arrival "([^"]+)"$/))?(v(u.automatic&&u.walk&&!u.arrivalLine,"到达对白须接在带路之后"),u.arrivalLine=m[1]):(m=y.match(/^return_home (.+)$/))?(v(u.automatic&&u.walk,"独自返程须接在带路之后"),u.returnHome=[...m[1].trim().split(/\s+/),n.get(u.actor).home],v(u.returnHome.every(x=>Object.hasOwn(et,x)),"独自返程含未知地点")):(m=y.match(/^harvest garden "([^"]+)"$/))?(u.harvestGarden=!0,u.reminder=m[1]):y==="fish"?u.fish=!0:v(!1,"未知动作 "+y);continue}u=null,(m=y.match(/^player (\S+)$/))?(v(!h&&!n.has(m[1]),"重复角色"),h=m[1]):(m=y.match(/^item (candy|apple|carrot) (\S+) "([^"]+)"$/))?(v(!t.has(m[1]),"重复物品"),t.set(m[1],{kind:m[1],name:m[2],verse:m[3]})):(m=y.match(/^wait_thought (\S+) "([^"]+)"$/))?(v(n.has(m[1]),"未知带路角色"),n.get(m[1]).waitThought=m[2]):(m=y.match(/^prompt (\S+) "([^"]+)"$/))?(v(n.has(m[1]),"未知角色"),n.get(m[1]).prompt=m[2]):(m=y.match(/^actor (\S+) = scene\("(flower-clasp|angler|child)"\) at (\S+)(?: facing=(-?\d+(?:\.\d+)?))?$/))?(v(m[1]!==h&&!n.has(m[1])&&Object.hasOwn(et,m[3]),"重复角色或未知地点"),n.set(m[1],{name:m[1],model:m[2],home:m[3],facing:Number(m[4]||0)*Math.PI/180,chat:[]})):(m=y.match(/^on (?:interact|match_end|carrot_harvest) (\S+) id=(\w+)(?: after=(\w+))? at (\S+):$/))?(v((n.has(m[1])||y.startsWith("on carrot_harvest "+h+" "))&&Object.hasOwn(et,m[4]),"未知角色或地点"),v(!i.some(x=>x.id===m[2]),"重复事件 ID"),u={automatic:y.startsWith("on match_end "),cropHarvest:y.startsWith("on carrot_harvest "),actor:m[1],id:m[2],after:m[3],place:m[4],lines:[],row:d},i.push(u)):(m=y.match(/^chat (\S+) (after|catch)=(\w+)(?: pool=(started|catch[1-9]\d*|after\.\w+))?(?: ask="([^"]+)")? "([^"]+)" "([^"]+)"$/))?(v(n.has(m[1]),"未知角色"),n.get(m[1]).chat.push({condition:m[2],value:m[3],pool:m[4],ask:m[5],pair:m.slice(6),row:d})):(m=y.match(/^overhear (\w+) (\S+) (\S+) "([^"]+)"$/))?(v(n.has(m[2])&&n.has(m[3]),"未知角色"),s.push({event:m[1],speaker:m[2],listener:m[3],words:m[4],row:d})):(m=y.match(/^release ([1-9]\d*) "([^"]+)"$/))?a.set(Number(m[1]),m[2]):(m=y.match(/^specimen (\S+) "([^"]+)" "([^"]+)"$/))?(v(!e.has(m[1]),"重复鱼类"),e.set(m[1],{clue:m[2],verse:m[3]})):v(!1,"无法识别 "+y)}let g=new Set;for(let f of i)d=f.row,v(!f.guideItem||f.guideItem===f.need,"引导物品须与收集条件一致"),v(!f.after||g.has(f.after),"前置事件须在此事件之前声明"),v(f.fish?!f.phase:f.lines.some(y=>y.speaker===f.actor),"事件需要对白或钓鱼动作"),g.add(f.id);for(let f of n.values()){v(f.chat.length,"角色缺少闲聊 "+f.name);for(let y of f.chat)d=y.row,y.pool?.startsWith("after.")&&v(g.has(y.pool.slice(6)),"未知闲聊阶段"),v(y.condition==="after"?g.has(y.value):/^[1-9]\d*$/.test(y.value),"无效的解锁条件")}for(let f of s)d=f.row,v(g.has(f.event),"未知旁听事件");return{items:t,playerName:h,actors:n,events:i,ambient:s,releases:a,specimens:e,opening:o,guidance:c,tutorials:l}}function zu(r){let e=new Rn(1,10);e.rotateX(-Math.PI/2);let t=1.25,n=Array.from({length:3},()=>{let s=new mt({color:11243122,transparent:!0,depthWrite:!1}),a=new Fe(e,s);return a.visible=!1,r.add(a),{mesh:a,age:t}}),i=0;return(s,a,o,l)=>{for(let p of n){if(!p.mesh.visible)continue;p.age+=s;let d=Math.max(0,1-p.age/t);p.mesh.material.opacity=.38*d,p.mesh.scale.set(.35*(.8+.2*d),1,.24*(.8+.2*d)),p.mesh.visible=d>0}if(!o)return;let{mesh:c}=n[i];n[i].age=0,i=(i+1)%n.length;let{x:h,z:u}=a;c.position.set(h,Ll(h,u)+.014,u),c.rotation.y=l,c.scale.set(.35,1,.24),c.material.opacity=.38,c.visible=!0}}function Fu(r,e){let t=new ni;r.forEach(([i,s],a)=>a?t.lineTo(i,-s):t.moveTo(i,-s)),t.closePath();let n=new Ci(t);return n.rotateX(-Math.PI/2),new Fe(n,e)}function Bu(r,e,t,n){let i=yr(r,e),s=1-t*.18;i.scale.setScalar(s);let a=new Set;i.traverse(w=>{w.material&&a.add(w.material)});for(let w of a)w.transparent=!0;let{ink:o,shade:l,tail:c}=Df(r,e,s),h=-.22,u=new Fe(new zt(.92,1,28),new mt({color:14152412,transparent:!0,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.visible=!1,r.add(u);let p=1/0,d=!1,v=!1,g=new ye,f=new ye,y=new ye,m=new ye,x=!1,M=0,E=1,_=t*2.3;function S(){let w=Math.random()*2*Math.PI,R=Math.sqrt(Math.random());m.set(n[0]+3.4*R*Math.cos(w),n[2]-.55+2.25*R*Math.sin(w)),g.copy(y),f.multiplyScalar(-1).addScaledVector(g,2),y.copy(f).lerp(m,.5),E=Math.max(.9,(g.distanceTo(f)+f.distanceTo(y))/(.55+Math.random()*.65)),M=0}let A=0;return(w,R,O,L=!1)=>{L&&(A=8),A=Math.max(0,A-w),_+=w;let U=R*.23+t*1.9,N=Ce.smoothstep(O,1+t*.09,1.76+t*.09);if(x){M>=1&&S(),M=Math.min(1,M+w*(.76+.38*Math.sin(_*1.17)+.14*Math.sin(_*.43))/E);let k=M,Q=1-k;l.position.x=Q*Q*g.x+2*Q*k*f.x+k*k*y.x,l.position.z=Q*Q*g.y+2*Q*k*f.y+k*k*y.y;let Y=Q*(f.x-g.x)+k*(y.x-f.x),ee=Q*(f.y-g.y)+k*(y.y-f.y);l.rotation.y=Math.atan2(-ee,Y),c.rotation.y=.27*Math.sin(_*5.1),l.visible=A<1,o.opacity=(.32+.05*Math.sin(_*.72))*(1-Math.min(1,A))}else{i.userData.swim(_),i.position.set(n[0]+Math.sin(U)*2.4,Ce.lerp(1.45+t*.26+Math.sin(_*1.6)*.22,h-.2,N),n[2]+Math.cos(U)*1.25),i.rotation.y=Math.atan2(Math.sin(U)*1.25,Math.cos(U)*2.4),i.rotation.z=-Math.sin(N*Math.PI)*.55;let k=Math.max(0,i.position.y-h),Q=Ce.smoothstep(N,.83,1);N<.8&&(d=!0),d&&!v&&k<.07&&(v=!0,p=0,u.visible=!0,u.position.set(i.position.x,h+.012,i.position.z));for(let Y of a)Y.opacity=1-Q;l.position.set(i.position.x+k*.24,h,i.position.z+k*.14),l.rotation.y=i.rotation.y,c.rotation.y=.2*Math.sin(_*5.1),o.opacity=Ce.lerp(.42,.3,Q),N===1&&(x=!0,i.visible=!1,y.set(l.position.x,l.position.z),f.set(y.x-.5*Math.cos(l.rotation.y),y.y+.5*Math.sin(l.rotation.y)),S())}if(u.visible){p+=w;let k=Math.min(1,p/1.05);u.scale.setScalar(s*(.2+1.15*k)),u.material.opacity=.72*(1-k),u.visible=k<1}return x}}function Df(r,e,t=1){let n=new mt({color:3238248,transparent:!0,depthWrite:!1}),i=new Xe;r.add(i);let s=Fu([[.95,0],[.59,.24],[.1,.33],[-.42,.24],[-.83,.06],[-.83,-.06],[-.42,-.24],[.1,-.33],[.59,-.24]],n),a=Fu([[0,0],[-.43,.22],[-.32,0],[-.43,-.22]],n);return a.position.x=-.8,i.add(s,a),i.scale.set(t*e.shape[0],1,t*(e.shape[1]+e.shape[2])/2),{shade:i,tail:a,ink:n}}function ku(r,e,t,n,i=e.rotation.y,s=()=>!0){let a=0,o=0;return e.rotation.y=i,{name:r,root:e,rest(l,c,h=i){if(c){o=0;return}o+=l,o>=2&&Yl(e,h,1.8*l)},watch(l,c,h){o=0,Yl(e,Math.atan2(l-e.position.x,c-e.position.z),5*h)},chat(){for(let l=0;l<t.length;l++){let c=a;if(a=(a+1)%t.length,s(c))return{index:c,text:t[c][n(c)?1:0]}}return{index:-1,text:"……"}}}}function Nf(r,e,t){let n=e.position.x-r.position.x,i=e.position.z-r.position.z;return Math.hypot(n,i)<.02?!0:Yl(r,Math.atan2(n,i),5*t)}function Yl(r,e,t){let n=e-r.rotation.y,i=Math.atan2(Math.sin(n),Math.cos(n));return r.rotation.y+=Math.sign(i)*Math.min(Math.abs(i),t),Math.abs(i)<=t}function Gu(){let r=null,e=[];return{get turning(){return!!r},includes(t){return e.includes(t)},begin(t,n,i,s=[],a=t){e=[t,n,...s],r={gazes:[[t,n],[n,t],...s.map(o=>[o,a])],onFacing:i}},update(t){if(!r)return;let{gazes:n,onFacing:i}=r,s=!0;for(let[a,o]of n)Nf(a,o,t)||(s=!1);s&&(r=null,i())}}}function Vu(r,e,t,n,i,s,a,o=null,l=()=>!1,c=()=>{}){let h=!!o,u=a?[e,a]:[e],p=(q,J)=>{$r(e,q,J,u,i),ri(e)},d=new Set(Array.isArray(n?.completed)?n.completed:["apple","pond","door"].slice(0,Math.max(0,Math.min(3,Number(n?.step)||0))));d.has("pond")&&d.add("gardenIntro"),d.delete("door")&&d.add("toCourt"),d.delete("homeward")&&d.add("toCourt");for(let q of[...t.events].reverse())d.has(q.id)&&q.after&&d.add(q.after);let v=[...t.actors.values()].find(q=>q.model==="angler"),g=Pu(r,e,v,t,n?.fishingStarted,p,(q,J)=>Rl(e,q,J,u,i),q=>{s.harvest[q]=(s.harvest[q]??0)+1},s,h?null:void 0,c);function f(){return Math.max(0,...t.events.filter(q=>d.has(q.id)).map(q=>q.phase||0))}let y=et.池面鱼群,m=!1,x=[],M=t.events.find(q=>q.cropHarvest),E=()=>d.has(M.id),_=[],S=Ea(r,_),A=S(0);r.traverse(q=>{if(!q.isInstancedMesh||q.userData.gardenCrop)return;let J=q.material.color,ie=J.clone(),me={};ie.getHSL(me,yt);let xe=[15239222,16098123].includes(ie.getHex());if(!xe&&(me.h<.155||me.h>.39))return;let Te=new ze().setHSL(.76,.16,.46+me.l*.48,yt),Be=new ze().setHSL(.88,.1,.38+me.l*.57,yt);xe&&(Te.setHex(14064808),Be.setHex(15119276)),x.push({color:J,violet:Te,heather:Be,natural:ie})});let w=Aa(r),R=null;d.has("apple")&&g.hasItem("candy",2)&&g.giveOnce("candy","apple");let O=Lu(r,c),L=_r.map((q,J)=>Bu(r,q,J,y)),U=new Xe,N=new Ai(.09),k=new mt({color:16773060}),Q=new P(9,21,26).normalize(),Y=[],ee=new P,K=412;function V(){return K=Math.imul(K,1664525)+1013904223>>>0,K/4294967296}for(let q=0;U.children.length<68&&q<2e3;q++){ee.set(-8+20*V(),1+3.9*V(),-3+10*V());let J=ee.clone().projectOnPlane(Q);if(Y.some(me=>me.distanceToSquared(J)<1.05*1.05))continue;Y.push(J);let ie=new Fe(N,k);ie.position.copy(ee),U.add(ie)}r.add(U);let j=document.createElement("aside"),re=document.createElement("span"),b=document.createElement("button"),T=new P;b.className="talk-key",b.textContent="E",b.hidden=!0,b.setAttribute("aria-label","交谈"),j.className="speech-bubble",j.setAttribute("role","status"),j.hidden=!0,j.append(re),document.body.append(j,b);let B=f()/3,$="",D=0,Z="",F=0,G=null,H=null,se=!1,ne=0,C=new Set,oe=Gu(),z=new Map,X=new Map;for(let q of t.actors.values()){let J;if(q.model==="child")J=a;else if(q.model==="angler")J=g.character;else{let me=tn(r,"look",q.model);J=me.root,J.scale.set(.81,.86,.81),X.set(J,me)}u.includes(J)||u.push(J);let ie=ku(q.name,J,q.chat.map(me=>me.pair),me=>{let xe=q.chat[me];return xe.condition==="catch"?g.caught>=Number(xe.value):d.has(xe.value)},q.facing,me=>{let xe=q.chat[me].pool;return xe?xe.startsWith("after.")?d.has(xe.slice(6)):xe==="started"?g.started:g.caught>=Number(xe.slice(5)):!0});z.set(q.name,ie)}function W(q){return!d.has(q.id)&&(!q.after||d.has(q.after))}let ue=t.events.find(q=>q.automatic),pe=!1,_e=!!(ue&&d.has(ue.id)),Ue=Number(_e),ae=null,ge=new Map,Le=new Set,ke=t.events.map(q=>({id:q.id,guidePlace:q.guidePlace,walkActor:q.walkActor,actor:q.cropHarvest?{root:e}:z.get(q.actor),lines:q.lines,pending:()=>!q.cropHarvest&&!q.automatic&&W(q)&&(q.id!=="courtInvite"||be(z.get(ue.actor),ue.place))&&be(z.get(q.actor),q.place)&&(!q.fish||m&&!g.complete),reminder:q.reminder,guideItem:q.guideItem,harvestGarden:q.harvestGarden,available(){return this.pending()&&(!q.harvestGarden||E())&&(!q.need||g.hasGiven(q.id)||g.hasItem(q.need,q.quantity))},finish(){q.fish?g.invite():(d.add(q.id),q.walk&&ge.set(z.get(q.walkActor)||this.actor,{route:[...q.walk],task:this,hinted:!1}))}}));for(let q of ke){let J=document.createElement("span");J.className="quest-mark",J.dataset.icon=t.guidance.icon,J.append(document.createElement("i")),J.style.setProperty("--pulse",t.guidance.pulse+"s"),J.hidden=!0,J.setAttribute("aria-hidden","true"),document.body.append(J),q.mark=J}function be(q,J){let[ie,,me]=et[J];return!ge.has(q)&&(q.arrivedAt===J||Math.hypot(q.root.position.x-ie,q.root.position.z-me)<.02)}function Oe(){for(let q of t.actors.values()){let J=t.events.filter(xe=>(xe.walkActor||xe.actor)===q.name&&d.has(xe.id)).at(-1),ie=z.get(q.name),me=J?.walk?.at(-1)||J?.place||q.home;ie.root.position.set(...et[me]),ie.arrivedAt=me,wa[me]!==void 0&&(ie.root.rotation.y=wa[me])}}function Re(q,J){let ie=z.get(ue.actor),me=q==="escort"?ue.walk:ue.returnHome;ae={stage:q,waypoint:J},Le.delete(ie),ge.set(ie,{route:me.slice(J),task:q==="escort"?ke.find(xe=>xe.id===ue.id):null,solo:q==="solo",homeTrip:!0})}function ht(q,J){let ie=q.root.position,me=ge.get(q),xe=me?.route;if(!xe||$||H)return;if(me.homeTrip&&!xe.length){if(e.position.distanceTo(ie)>2.8||oe.turning||l()||g.active)return;let ce=()=>Re("solo",0);ue.arrivalLine?oe.begin(q.root,e,()=>dt(q,ue.arrivalLine,ce,"smile")):ce();return}let Te=ie.distanceTo(e.position),Be=et[xe.at(-1)],fe=Math.hypot(e.position.x-Be[0],e.position.z-Be[2])+1<Math.hypot(ie.x-Be[0],ie.z-Be[2]);if(!me.solo&&Te>5.5&&!fe&&!Le.has(q)){Le.add(q);let ce=t.actors.get(q.name).waitThought;ce&&!me.hinted&&(Z=ce,F=3.5,me.hinted=!0)}if(Le.has(q)){if(Te>3.5&&!fe){let ce=Math.atan2(e.position.x-ie.x,e.position.z-ie.z)-q.root.rotation.y,ve=Math.atan2(Math.sin(ce),Math.cos(ce));q.root.rotation.y+=Math.sign(ve)*Math.min(Math.abs(ve),J*3);return}Le.delete(q)}let Pe=xe[0],[Me,Ae,Ve]=et[Pe];if(me.retry=Math.max(0,(me.retry??0)-J),!me.steps?.length){if(me.retry)return;if(me.steps=fr(q.root,Me,Ve,u,i),!me.steps.length){me.retry=.35;return}}let[tt,Ge]=me.steps[0],je=tt-ie.x,Se=Ge-ie.z,I=Math.hypot(je,Se),te=I?Math.min(1,2.7*J/I):1,de=ie.x+je*te,he=ie.z+Se*te;if(!au(q.root,de,he,u,i)){me.steps=null,me.retry=.12;return}if(ie.x=de,ie.z=he,te===1&&(me.steps.shift(),!me.steps.length)){if(Math.hypot(ie.x-Me,ie.z-Ve)>.02&&i(Me,Ve)&&Kr(q.root,Me,Ve,u))return;if(ie.y=Ae,xe.shift(),me.homeTrip&&ae.waypoint++,!xe.length){if(q.arrivedAt=Pe,me.homeTrip&&!me.solo)return;ge.delete(q),me.homeTrip&&(ae=null,d.add("returnedHome"))}}}function gt(){let q=null,J=t.guidance.reach;for(let ie of z.values()){if(ge.has(ie))continue;let me=Math.hypot(e.position.x-ie.root.position.x,e.position.z-ie.root.position.z);me<J&&(q=ie,J=me)}return q}function dt(q,J,ie=null,me="talk"){G=q.root,G.userData.speechFace=me,$=J,D=Math.max(2.2,.65+J.length*.16),H=ie}function at(){if(l())return;let q=gt();!q||g.active||!se&&(oe.turning||$||H)||(G&&delete G.userData.speechFace,se=!1,$="",D=0,Z="",oe.begin(q.root,e,()=>{let J=ke.find(Me=>Me.actor===q&&Me.available()),ie=J?null:ke.find(Me=>Me.actor===q&&Me.reminder&&Me.pending()),me=q.name===M.adviser&&W(M)?M.advice[La(s,Date.now())]:null,xe=J||ie||me?null:q.chat(),Te=t.actors.get(q.name),Be=J?J.lines:me?[{speaker:q.name,text:me}]:ie?[{speaker:t.playerName,text:t.actors.get(q.name).prompt},{speaker:q.name,text:ie.reminder}]:[{speaker:t.playerName,text:Te.chat[xe.index]?.ask??Te.prompt},{speaker:q.name,text:xe.text}].filter(Me=>Me.text),fe=0;function Pe(){let Me=Be[fe++];if(Me){let Ae=Me.speaker===t.playerName?{root:e}:q;if(dt(Ae,Me.text,Pe,Me.face),Me.reachFor){let Ve=Ae.root.position,tt=1/0;for(let Ge of _){if(Ge.kind!==Me.reachFor||Ge.harvesting)continue;Ge.twig.getWorldPosition(T);let je=T.x-Ve.x,Se=T.z-Ve.z,I=Math.hypot(je,Se);I>=tt||(tt=I,Ae.root.userData.reachCue={yaw:Math.atan2(je,Se),time:-Math.max(0,D-1.35)})}}if(Me.tossTo){let Ve=Me.tossTo===t.playerName?e:q.root;w.start(Ae.root,Ve),J&&Ae.root===e&&(R=()=>g.giveOnce("candy",J.id)),D=0}}else Be.length&&c(q.root.position),J?.finish()}Pe()}))}function ot(){if(!ue||!W(ue)||pe)return;pe=!0;let q=z.get(ue.actor).root,J=a,ie=0;function me(){let xe=ue.lines[ie++];if(!xe){d.add(ue.id),pe=!1,ue.returnHome&&Re("escort",0);return}let Te=xe.speaker===t.playerName?e:z.get(xe.speaker).root,Be=xe.listener===t.playerName?e:z.get(xe.listener).root,fe=[q,J,e].filter(Pe=>Pe!==Te&&Pe!==Be);oe.begin(Te,Be,()=>{ie===ue.lines.length&&(_e=!0),dt({root:Te},xe.text,me,xe.face)},fe,xe.watchListener?Be:Te)}me()}if(b.onclick=at,addEventListener("keydown",q=>{!h&&q.code==="KeyE"&&!q.repeat&&at()}),Oe(),!h&&ue?.returnHome&&d.has(ue.id)){let q=z.get(ue.actor);if(d.has("returnedHome"))q.arrivedAt=t.actors.get(q.name).home,q.root.position.set(...et[q.arrivedAt]);else{let J=n?.homeTrip,ie=J?.stage==="solo"?"solo":"escort",me=ie==="solo"?ue.returnHome:ue.walk,xe=Math.min(Math.max(0,Math.trunc(J?.waypoint)||0),me.length-(ie==="solo"?1:0)),Te=et[xe?me[xe-1]:ie==="solo"?ue.walk.at(-1):ue.place];q.root.position.set(...Te),J&&Number.isFinite(J.x)&&Number.isFinite(J.z)&&i(J.x,J.z)&&q.root.position.set(J.x,0,J.z),q.arrivedAt=null,Re(ie,xe)}}!h&&ue&&W(ue)&&d.has("matchDecided")&&(e.position.set(...et.球后阿团站位),a.position.set(...et.球后小羽站位),ot()),p(0,0);let vt=new ze(15722982),le=new ze(16248281);r.fog=new ta(vt,.013);let Et=r.children.find(q=>q.geometry?.type==="PlaneGeometry"),wt=Et.material.color.clone(),lt=new ze(14278611);return{castRoots:[...z.values()].map(q=>q.root),movePlayer:p,beginAftermath:ot,matchDecided(){d.add("matchDecided")},get childPracticing(){return!h&&!d.has("courtInvite")&&!(d.has("toCourt")&&be(z.get(ue.actor),ue.place))},get awaitingMatch(){return!!ue&&W(ue)&&!h},get homeTrip(){if(!ae)return null;let{x:q,z:J}=z.get(ue.actor).root.position;return{...ae,x:q,z:J}},get courtReady(){return d.has("courtInvite")&&(!ue||d.has(ue.id)||be(z.get(ue.actor),ue.place))},get courtSceneView(){return pe?{target:z.get(ue.actor).root.position,height:8}:null},refreshInventory:g.refreshInventory,get gardenActive(){return W(M)},get gardenDone(){return E()},get gardenReplayReady(){return o==="garden"||E()},get fishingTrial(){return o==="fishing"},get fishingReady(){return m&&!g.active&&(o==="fishing"||d.has("angle"))},enterFishing(){!this.fishingReady||this.busy||g.freeCast()},finishGardenHarvest(){W(M)&&(ke.find(q=>q.id===M.id).finish(),this.think(M.lines[0].text))},harvestSites:_,collect(q){c(e.position);let J=g.collect(q),ie=t.events.find(me=>me.need===q&&W(me));if(ie?.quantity>1&&J<=ie.quantity)return J+" / "+ie.quantity},get showingThought(){return!!Z},think(q){Z=q,F=Math.max(3,1+q.length*.16)},actorPosition(q){return z.get(q).root.position},get fishingStarted(){return g.started},get fishingView(){return g.view},get completed(){return[...d]},get visibleMilestones(){return[...d].filter(q=>q!=="apple"||A)},get busy(){return g.active||(oe.turning||!!$||!!H)&&!se},update(q,J,ie,me){if(g.complete)for(let Se of t.events)Se.fish&&W(Se)&&d.add(Se.id);if(w.update(q)&&R&&(R(),R=null),D=Math.max(0,D-q),!D&&$&&!w.inFlight)delete G.userData.speechFace,$="",se=!1,H&&(D=.7);else if(!D&&!$&&H){let Se=H;H=null,Se()}let xe=t.ambient.find(Se=>{if(C.has(Se)||!ke[t.events.findIndex(de=>de.id===Se.event)].available())return!1;let I=z.get(Se.speaker),te=z.get(Se.listener);return I.root.position.distanceTo(te.root.position)<3&&e.position.distanceTo(I.root.position)<6});if(xe&&!H&&!$&&!oe.turning&&!g.active){if(ne+=q,ne>1.5){C.add(xe),se=!0;let Se=z.get(xe.speaker),I=z.get(xe.listener);oe.begin(Se.root,I.root,()=>dt(Se,xe.words))}}else ne=0;oe.update(q),B=Ce.damp(B,f()/3,1.15,q),A=S(B);let Te=Math.min(3,B*3);Ue=Ce.damp(Ue,Number(_e),1.25,q);let Be=Ue;for(let{color:Se,violet:I,heather:te,natural:de}of x)Se.lerpColors(I,te,Math.min(1,Te)).lerp(de,Be);r.fog.color.lerpColors(vt,le,B),r.fog.density=.013*(1-B),Et.material.color.lerpColors(lt,wt,B);let fe=Math.max(0,1-B*3);U.visible=fe>.01,U.position.y=Math.sin(J*.6)*.2,U.visible&&U.children.forEach((Se,I)=>Se.scale.setScalar(fe*(1+.4*Math.sin(J*1.7+I))));let Pe=0,Me=g.takeLanding();for(let[Se,I]of L.entries())I(q,J,Te,Se===Me)&&Pe++;m=f()>=2&&Pe===L.length;let Ae=oe.turning||!!$||!!H;g.update(q,J,Ae),O(q,J,e.position);for(let Se of z.values()){let I=Se.root.position,te=I.x,de=I.z;ht(Se,q),X.has(Se.root)&&ri(Se.root);let he=Ae&&oe.includes(Se.root),ce=he||ge.has(Se)||I.x!==te||I.z!==de||Se.root===g.character&&g.active,ve=l()&&Se.name===ue?.actor&&be(Se,ue.place)&&!he;ve?Se.watch((e.position.x+a.position.x)/2,(e.position.z+a.position.z)/2,q):Se.rest(q,ce,wa[Se.arrivedAt]),X.get(Se.root)?.update(q,I.x-te,I.z-de,he||ve)}g.placeFlask(ie);let Ve=gt(),tt=!!$||!!H||oe.turning,Ge=innerHeight*ie.zoom/(ie.top-ie.bottom),je=Ge/me;for(let Se of ke){let{actor:I,mark:te}=Se,de=z.get(Se.walkActor)||I,he=ge.get(de)?.task===Se,ce=Se.guidePlace&&W(M);if(te.hidden=l()||Se.id==="courtInvite"&&I.root.position.distanceTo(e.position)>7||g.active||!he&&(tt||!ce&&!Se.pending()),te.hidden)continue;if(ce)T.set(...et[Se.guidePlace]),T.y+=.85;else if(he||Se.available()){Se.target=null;let Ot=he?de:I;T.copy(Ot.root.position),T.y+=1.5*Ot.root.scale.y}else if(Se.harvestGarden)T.set(...et.菜园收获处),T.y+=.55;else{let Ot=Ft=>Ft&&Ft.kind===Se.guideItem&&!Ft.harvesting;if(!Ot(Se.target)){Se.target=null;let Ft=1/0;for(let fn of _){if(!Ot(fn))continue;fn.twig.getWorldPosition(T);let pt=Math.hypot(T.x-e.position.x,T.z-e.position.z);pt<Ft&&(Ft=pt,Se.target=fn)}}if(!Se.target){te.hidden=!0;continue}Se.target.twig.getWorldPosition(T),T.y+=.6*Se.target.size}T.project(ie);let ve=(1+T.x)*innerWidth/2,Ee=(1-T.y)*innerHeight/2-4*je,De=ve<20*je||ve>innerWidth-20*je||Ee<45*je||Ee>innerHeight-14;if(te.classList.toggle("edge",De),De&&t.guidance.edge==="off"){te.hidden=!0;continue}let Ne=innerWidth/2,He=innerHeight/2,We=ve-Ne,qe=Ee-He,ct=De?Math.min(1,(Ne-24)/Math.max(.001,Math.abs(We)),(He-(qe>0?84:50))/Math.max(.001,Math.abs(qe))):1;te.style.left=Ne+We*ct+"px",te.style.top=He+qe*ct+"px",te.style.setProperty("--bearing",Math.atan2(qe,We)+"rad"),te.style.setProperty("--marker-scale",De?1:je)}if(F-=q,(F<=0||$)&&(Z=""),j.classList.toggle("thought",!!Z&&!$),j.hidden=g.active||!($||Z),!j.hidden){re.textContent=$||Z;let Se=$?G:e;T.copy(Se.position),T.y+=1.5*Se.scale.y,T.project(ie),j.style.left=(1+T.x)*innerWidth/2+"px",j.style.top=(1-T.y)*innerHeight/2+"px"}if(b.hidden=l()||g.active||!Ve||tt&&!se||oe.turning,!b.hidden){T.copy(Ve.root.position),T.y+=.85*Ve.root.scale.y,T.project(ie);let Se=(T.x+1)*innerWidth/2+.83*Ve.root.scale.x*Ge+5,I=(1-T.y)*innerHeight/2;b.style.setProperty("--marker-scale",je),b.style.left=Se+"px",b.style.top=I+"px"}}}}du(document.querySelector("#sound-toggle"));var Kl={candy:{name:"树下摘糖",at:[1.8,-1.15]},apple:{name:"摘苹果",at:[1.8,-1.15],after:["apple"]},garden:{name:"菜园种植",at:[et.菜园入口[0],et.菜园入口[2]]},forage:{name:"草丛调查",at:ai[0]},fishing:{name:"池塘钓鱼",at:[7.2,4.98],after:["pond"]},rally:{name:"林间顶球",at:[Ie.x+1.8,Ie.z+Ie.serveOffset]}},pn=new URL(location.href),Ln=Object.hasOwn(Kl,pn.searchParams.get("trial"))?pn.searchParams.get("trial"):null,$l="chestnut-creek.world.v1",Hu="chestnut-creek.fish-album.v1",dn=document.querySelector("#game-menu"),Zl=document.querySelector("#menu-button");function Of(r,e){let t=new wi({antialias:!0});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.shadowMap.enabled=!0,t.shadowMap.type=Sl,document.querySelector("#world").append(t.domElement);let n=new or;n.background=new ze(14280402),n.add(new cr(16774100,13089438,2.05));let i=new hr(16772036,2);i.position.set(-25,47,17),i.castShadow=!0,Object.assign(i.shadow.camera,{left:-42,right:42,top:40,bottom:-40,far:110}),i.shadow.mapSize.set(2048,2048),i.shadow.normalBias=.025,n.add(i);let s=new Fe(new ar(300,300),new rt({color:13425608}));s.rotation.x=-Math.PI/2,s.position.y=-1.73,s.receiveShadow=!0,n.add(s);let a=Ca(n),o=[],l=Au(n,a,o),c=tn(n);c.root.position.set(...et.苹果屋门前),r&&Number.isFinite(r.x)&&Number.isFinite(r.z)&&l(r.x,r.z)&&c.root.position.set(r.x,0,r.z);let h=zu(n),u=wu(r?.farm,o.length);if(Ln==="garden")for(let z of Object.keys(u.seeds))u.seeds[z]=10;let p=z=>g.gain(z,S),d=yu(n,c.root,p),v=Vu(n,c.root,br,r,l,u,d.companion,Ln,()=>d.active,p),g=lu(r?.memoryPoints,v.completed,Jl.jar),f=Eu(n,o,c.root,v,u,t.domElement,a.flowers,p),y=Du(br,et,r?.tutorials??(r?.completed?.length?["move",...r.completed.includes("apple")?["jump"]:[]]:[])),m=r?.pendingMemory??null,x=[...r?.memoryAlbum??[]],M="",E=0;function _(){if(Ln)return;let{x:z,z:X}=c.root.position,W=JSON.stringify({x:z,z:X,completed:v.completed,homeTrip:v.homeTrip,memoryPoints:g.points,memoryAlbum:x,pendingMemory:m,tutorials:[...y.seen],farm:u,fishingStarted:v.fishingStarted});if(W!==M)try{localStorage.setItem($l,W),M=W}catch{}}_(),addEventListener("pagehide",_),document.addEventListener("visibilitychange",()=>{document.hidden&&_()});let S=new ti,A=new P,w=new P(9,21,26),R=15,O=R,L=0,U=!1,N=ou(n,S,l,()=>[c.root,...v.castRoots,...d.memoryProps],(z,X)=>{X&&!U&&(x.push(z.source),m=null,g.spend(),_()),ne()});Jl.bind({list:x,trial:Ln,get pending(){return m},remember(z){m=z,_()},points:()=>g.points,unlocked:()=>v.completed.includes("returnedHome"),busy:()=>b||v.busy||d.active||N.active||f.searching,begin(z,X){dn.open&&dn.close(),ne(),U=X,N.enter(z)}});let k=new P(0,20,22),Q=new P(4,12,24),Y=new P,ee=new P,K=9,V=0,j=br.opening.map(z=>{let X=new P;for(let W of z.targets)W==="player"?X.add(c.root.position):br.actors.has(W)?X.add(v.actorPosition(W)):X.add(new P(...et[W]));return X.divideScalar(z.targets.length),X.y+=.65,{...z,center:X}}),re=matchMedia("(prefers-reduced-motion: reduce)").matches,b=e&&j.length>0,T=null,B=0,$=j.at(-1);document.body.classList.toggle("opening",b),b&&document.body.style.setProperty("--opening-veil","1");function D(){let z=innerWidth/innerHeight,X=Math.max(R,R*1.2/z);Object.assign(S,{left:-X*z/2,right:X*z/2,top:X/2,bottom:-X/2,near:.1,far:150}),S.updateProjectionMatrix(),t.setSize(innerWidth,innerHeight)}D();let Z=innerHeight/(S.top-S.bottom),F=$?.width??S.right-S.left;S.zoom=(S.right-S.left)/F,S.updateProjectionMatrix(),addEventListener("resize",D),addEventListener("wheel",z=>{N.active||b||dn.open||document.querySelector("#memory-window").open||v.busy||d.active||v.fishingView||(O=Ce.clamp(O+Math.sign(z.deltaY),11,18))},{passive:!0});let G=Nu(n,c,v.harvestSites,v.collect),H=new Set,se=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];addEventListener("keydown",z=>{!b&&!d.active&&!f.searching&&!v.busy&&se.includes(z.code)&&(z.preventDefault(),H.add(z.code),z.code==="Space"&&!f.spraying&&!z.repeat&&!G.hold()&&c.jump())}),addEventListener("keyup",z=>{H.delete(z.code),z.code==="Space"&&!d.active&&!b&&!v.busy&&!dn.open&&G.release()});function ne(){d.clearInput(),H.clear(),G.cancel(),f.cancel()}addEventListener("blur",ne),document.addEventListener("visibilitychange",()=>{oe=performance.now()});let C=(...z)=>Number(!b&&!d.active&&!f.searching&&!v.busy&&z.some(X=>H.has(X))),oe=performance.now();Zl.hidden=!1,Zl.onclick=()=>{_(),ne(),dn.showModal()},t.setAnimationLoop(z=>{let X=(z-oe)/1e3,W=Math.min(.04,X);if(oe=z,dn.open||document.hidden||document.querySelector("#memory-window").open)return;if(N.active){N.update(W),t.render(n,S);return}z>=E&&(_(),E=z+500);let ue=C("KeyD","ArrowRight")-C("KeyA","ArrowLeft"),pe=C("KeyS","ArrowDown")-C("KeyW","ArrowUp"),_e=5*W/(Math.hypot(ue,pe)||1),Ue=ue*_e,ae=pe*_e,ge=c.root.position,Le=ge.x,ke=ge.z;(Ue||ae)&&v.movePlayer(Ue,ae),ri(c.root),d.update(W,!b&&!v.busy,Ln==="rally"||v.courtReady,v.awaitingMatch?v.beginAftermath:null,v.awaitingMatch?()=>{v.matchDecided(),_()}:null,v.childPracticing);let be=c.update(W,ge.x-Le,ge.z-ke,!1,d.active);d.active&&ge.x===Le&&ge.z===ke&&(c.root.rotation.y=Math.PI),d.crouch&&(c.body.scale.y*=1-.22*d.crouch),d.recoil&&(c.body.scale.y*=1-d.recoil,c.body.scale.x*=1+d.recoil*.65),a.brush(W,f.brushPosition??ge,f.brushPosition?0:c.body.position.y),h(W,ge,be,c.root.rotation.y);let Oe=v.fishingView;Oe&&(O=R);let Re=d.view??v.courtSceneView??Oe;Re&&(ee.copy(Re.target),K=Re.height),L=Ce.damp(L,Re?1:0,3.8,W),!Re&&L<.001&&(L=0),A.set(ge.x,ge.y+.65,ge.z).lerp(ee,L),V=Ce.damp(V,d.active?1:0,6,W),Y.lerpVectors(w,Q,L).lerp(k,V);let ht=S.right-S.left,gt=F*O/R,dt=ht*K/R,at=Math.max(10.5,14*ht/(S.top-S.bottom)),ot=ht/Ce.lerp(Ce.lerp(gt,dt,L),at,V);if(b){T??=z;let vt=(z-T)/1e3,le=re?$.time:vt;for(;B<j.length&&j[B].time<=le;){let J=j[B++];J.thought&&v.think(J.thought)}let Et=j.findIndex(J=>J.time>le),wt=Et<0?$:j[Et-1],lt=Et<0?$:j[Et],q=wt===lt?1:Ce.smootherstep(le,wt.time,lt.time);A.lerpVectors(wt.center,lt.center,q),S.zoom=ht/Ce.lerp(wt.width,lt.width,q),document.body.style.setProperty("--opening-veil",1-Ce.smoothstep(vt,0,.35)),document.body.classList.toggle("guide-reveal",wt.guide),le>=$.time&&vt>=.35&&!v.showingThought&&(b=!1,document.body.classList.remove("opening","guide-reveal"))}else S.zoom=Ce.damp(S.zoom,ot,6,W);S.updateProjectionMatrix(),S.position.copy(A).add(Y),S.lookAt(A),S.updateMatrixWorld(),v.update(W,z/1e3,S,Z),G.update(W,S,!d.active&&!b&&!v.busy),f.update(W,S,!d.active&&!b&&!v.busy,X),y.update(W,ge,S,!Ln&&!d.active&&!b&&!v.busy,Z),g.update(v.visibleMilestones,W),t.render(n,S)})}var Ua=!1,is=null,Wu=!1;try{is=JSON.parse(localStorage.getItem($l)),Wu=!!is||Number(localStorage.getItem(Hu))>0}catch{}var Na=document.querySelector("#continue");Na.disabled=!Wu;function Da(r,e=!1){if(dn.open&&dn.close(),!Ua)try{Of(r,e),Ua=!0,Na.disabled=!1}catch(t){throw document.querySelector("#error").textContent="3D 场景启动失败："+t.message,t}Zl.blur()}Na.onclick=()=>Da(is);var zf=document.querySelector("#main-actions"),rs=document.querySelector("#practice-actions");function Ql(r){zf.hidden=r,rs.hidden=!r,(r?rs.firstChild:document.querySelector("#open-practice")).focus()}document.querySelector("#open-practice").onclick=()=>Ql(!0);for(let[r,e]of Object.entries(Kl)){let t=document.createElement("button");t.textContent=e.name,t.onclick=()=>{pn.searchParams.set("trial",r),pn.searchParams.delete("start"),location.assign(pn)},rs.append(t)}var ec=document.createElement("button");ec.textContent="返回";ec.onclick=()=>Ql(!1);rs.append(ec);dn.addEventListener("cancel",r=>{rs.hidden||(r.preventDefault(),Ql(!1))});Ln&&(document.body.classList.add("trial-mode"),document.querySelector("#new-game span").textContent="退出试玩",Na.firstChild.textContent="继续试玩");function Xu(){try{localStorage.removeItem($l),localStorage.removeItem(Hu),localStorage.removeItem(Ia)}catch{}Da(null,!0)}document.querySelector("#new-game").onclick=()=>{if(Ln){pn.searchParams.delete("trial"),location.assign(pn);return}Ua?(pn.searchParams.set("start","new"),location.replace(pn)):Xu()};dn.addEventListener("cancel",r=>{Ua||r.preventDefault()});for(let r of["keydown","keyup"])window.addEventListener(r,e=>{(dn.open||document.querySelector("#memory-window").open||document.body.classList.contains("opening"))&&e.stopImmediatePropagation()},!0);var br,Jl;try{if(br=Ou(await as("orchard.dsl")),Jl=await oc({saved:is,launch:()=>Da(is)}),Uu(br),Ln){let{at:r,after:e=[]}=Kl[Ln];Da({x:r[0],z:r[1],completed:e,tutorials:["move","jump"]})}else pn.searchParams.get("start")==="new"?(pn.searchParams.delete("start"),history.replaceState(null,"",pn),Xu()):dn.showModal()}catch(r){throw document.querySelector("#error").textContent=r.message,r}
