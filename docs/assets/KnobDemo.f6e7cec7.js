import{u as A}from"./useComponentControl.d25fc789.js";import{j as i,y as w,d as N,z as B,l as V,k as K,o as I,c as j,i as o,t as g,u as h,b as x,a as _}from"./vendor.e629ce87.js";function q(){const{addKnob:k}=A(),p=k(),l=i({min:0,max:100,innerSize:{width:"50px",height:"50px"},outerSize:{width:"100px",height:"100px"},outerColorStyle:{backgroundColor:"gray",color:"green",barColor:"green"},innerColorStyle:{backgroundColor:"blue",color:"black"},textSize:"16px"}),a=w(()=>l.value.max),d=w(()=>l.value.min),y=w(()=>a.value-d.value),u=i(d.value);function S(e){e.min&&(l.value.min=e.min),e.max&&(l.value.max=e.max),e.innerColorStyle&&(l.value.innerColorStyle=e.innerColorStyle),e.outerColorStyle&&(l.value.outerColorStyle=e.outerColorStyle),e.innerSize&&(l.value.innerSize=e.innerSize),e.outerSize&&(l.value.outerSize=e.outerSize),e.textSize&&l.value.innerColorStyle&&(l.value.innerColorStyle.color=e.textSize)}function s(e,t){b(e,t),c(e,t),v(t)}function v(e){const t=l.value.textSize;e.style.fontSize=t}function b(e,t){console.log(e,t);const r=l.value.innerColorStyle,m=l.value.outerColorStyle,f=m==null?void 0:m.backgroundColor,C=m==null?void 0:m.barColor;t.style.backgroundColor=r==null?void 0:r.backgroundColor,t.style.color=r==null?void 0:r.color,e.style.background=`conic-gradient(${C} 0, ${C} 0%, ${f} 0%, ${f})`}function c(e,t){var r,m,f,C;e.style.width=(r=l.value.outerSize)==null?void 0:r.width,e.style.height=(m=l.value.outerSize)==null?void 0:m.height,t.style.width=(f=l.value.innerSize)==null?void 0:f.width,t.style.height=(C=l.value.innerSize)==null?void 0:C.height}function n(e,t){var C,$;if(console.log(t),u.value<d.value||u.value>a.value)return;u.value+=e,u.value+e<d.value&&(u.value+=d.value-u.value),u.value+e>a.value&&(u.value+=a.value-u.value);const r=(C=l.value.outerColorStyle)==null?void 0:C.backgroundColor,m=($=l.value.outerColorStyle)==null?void 0:$.barColor,f=u.value/y.value*100;t.style.background=`conic-gradient(${m} 0, ${m} ${f}%, ${r} 0%, ${r})`}return{setKnobValue:n,displayCount:u,loadKnobOption:S,id:p,max:a,knobOptionObj:l,setKnobStyle:s}}const F=["id"],T=["id"],z=N({props:{addNum:null,knobOption:null},emits:["isCompleted"],setup(k,{emit:p}){const l=k,a=i(null),d=i(null),{loadKnobOption:y,displayCount:u,setKnobValue:S,id:s,max:v,setKnobStyle:b}=q();l.knobOption&&y(l.knobOption);const{addNum:c}=B(l),n=i(!1);V(c,()=>{let t=v.value;u.value>t+1||(a.value&&S(l.addNum.addnum,a.value),e())});function e(){let t=v.value;if(u.value<t){n.value=!1;let r={id:s,isCompleted:n.value};p("isCompleted",r);return}if(u.value==t&&!n.value){n.value=!0;let r={id:s,isCompleted:n.value};p("isCompleted",r)}}return K(()=>{a.value&&d.value&&b(a.value,d.value)}),(t,r)=>(I(),j("div",{id:`circle-knob-${h(s)}`,ref_key:"circleKnob",ref:a,class:"circle-progress relative flex justify-center items-center"},[o("div",{id:`circle-knob-inner-${h(s)}`,ref_key:"circleKnobInner",ref:d,class:"circle-progress-inner absolute flex justify-center items-center"},g(h(u)),9,T)],8,F))}}),D={class:"w-1/2 mr-auto ml-auto"},M=o("h2",{class:"text-center text-2xl"},"knob\u5C55\u793A\u5340",-1),O=o("h3",null,[o("i",{class:"bi bi-trophy-fill"}),x("\u5713\u5F62knob")],-1),R={class:"flex"},G={class:"m-5"},H=o("i",{class:"bi bi-check2-square"},null,-1),J={class:"m-5"},L=o("i",{class:"bi bi-check2-square"},null,-1),P=o("i",{class:"bi bi-check2-square"},null,-1),Q=o("h3",null,[o("i",{class:"bi bi-trophy-fill"}),x("\u5C0F\u61C9\u7528")],-1),U=o("i",{class:"bi bi-check2-square"},null,-1),Y=N({setup(k){const p=i(!1),l=i(!1),a=i(!1),d=i(!1);let y=i({addnum:0}),u=i({addnum:0}),S=i({addnum:0}),s=i({addnum:0});K(()=>{setInterval(()=>{y.value={addnum:1}},100),setInterval(()=>{u.value={addnum:1}},50),setInterval(()=>{S.value={addnum:1}},500)});function v(c){switch(c.id){case"0":p.value=c.isCompleted;break;case"1":l.value=c.isCompleted;break;case"2":a.value=c.isCompleted;break;case"3":d.value=c.isCompleted;break}}function b(c){switch(c){case"+1":s.value={addnum:1};break;case"+2":s.value={addnum:2};break;case"+5":s.value={addnum:5};break;case"-2":s.value={addnum:-2};break;case"-1":s.value={addnum:-1};break}}return(c,n)=>(I(),j("section",D,[M,o("div",null,[O,o("div",R,[o("div",G,[o("p",null,[H,x("\u5B8C\u6210\u9032\u5EA6\u5426 : "+g(p.value),1)]),_(z,{class:"m-6",onIsCompleted:v,addNum:h(y),knobOption:{innerColorStyle:{color:"yellow",backgroundColor:"blue"}}},null,8,["addNum"])]),o("div",J,[o("p",null,[L,x("\u5B8C\u6210\u9032\u5EA6\u5426 : "+g(l.value),1)]),_(z,{class:"m-10",onIsCompleted:v,addNum:h(u),knobOption:{outerColorStyle:{color:"yellow",barColor:"red",backgroundColor:"yellow"},innerColorStyle:{color:"white",backgroundColor:"gray"},innerSize:{width:"100px",height:"100px"},outerSize:{width:"200px",height:"50px"}}},null,8,["addNum"])]),o("div",null,[o("p",null,[P,x("\u5B8C\u6210\u9032\u5EA6\u5426 : "+g(a.value),1)]),_(z,{onIsCompleted:v,addNum:h(S),knobOption:{outerColorStyle:{color:"gray",barColor:"white",backgroundColor:"palegoldenrod"},outerSize:{width:"300px",height:"300px"},innerSize:{width:"200px",height:"200px"},textSize:"7rem"}},null,8,["addNum"])])])]),o("div",null,[Q,o("p",null,[U,x("\u5B8C\u6210\u9032\u5EA6\u5426 : "+g(d.value),1)]),_(z,{onIsCompleted:v,addNum:h(s),knobOption:{min:0,max:30}},null,8,["addNum"]),o("button",{class:"mr-5 border-black border-solid border-2",onClick:n[0]||(n[0]=e=>b("+5"))}," +5 "),o("button",{class:"mr-5 border-black border-solid border-2",onClick:n[1]||(n[1]=e=>b("+2"))}," +2 "),o("button",{class:"mr-5 border-black border-solid border-2",onClick:n[2]||(n[2]=e=>b("-2"))}," -2 "),o("button",{class:"mr-5 border-black border-solid border-2",onClick:n[3]||(n[3]=e=>b("-1"))}," -1 "),o("button",{class:"mr-5 border-black border-solid border-2",onClick:n[4]||(n[4]=e=>b("+1"))}," +1 ")])]))}});export{Y as default};