import{u as f,D as t,_ as i}from"./CheckBox.9b1fb507.js";import{e as x,j as v,o as r,c as s,u as l,a,b as e,t as b,k as _,F as D,l as g,m as C,n as F,d}from"./vendor.f6214265.js";const A={key:0,class:"text-center"},S={key:1,class:"text-center"},p=x({props:{checkBoxItem:null},setup(o){f();const c=v(!1);function n(u){c.value=u.isSelected}return(u,h)=>(r(),s(D,null,[o.checkBoxItem.labelDir===l(t).right?(r(),s("div",A,[a(i,{checkBoxItem:o.checkBoxItem,onIsSelected:n},null,8,["checkBoxItem"]),e("p",null,"The model data : "+b(c.value),1)])):_("",!0),o.checkBoxItem.labelDir===l(t).left?(r(),s("div",S,[a(i,{checkBoxItem:o.checkBoxItem,onIsSelected:n},null,8,["checkBoxItem"]),e("p",null,"The model data : "+b(c.value),1)])):_("",!0)],64))}}),y={class:"text-center"},B=x({props:{checkGroupData:null},setup(o){const c=g([]);function n(u){let h=0,k=c.find((m,I)=>(h=I,m===u.value));u.isSelected&&!k&&c.push(u.value),u.isSelected||c.splice(h,1)}return(u,h)=>(r(),s("div",y,[(r(!0),s(D,null,C(o.checkGroupData.checkItems,(k,m)=>(r(),F(i,{key:m,checkBoxItem:k,onIsSelected:n},null,8,["checkBoxItem"]))),128)),e("p",null,"The model data : "+b(l(c)),1)]))}}),E=e("h2",{class:"text-center text-2xl"},"CheckBox\u5C55\u793A\u5340",-1),G={class:"m-5 text-center"},$=e("p",null,[e("i",{class:"bi bi-trophy-fill"}),d("\u53EF\u9078\u64C7label\u4F4D\u7F6E\u5728\u5DE6\u6216\u53F3")],-1),T={class:"m-5 text-center"},V=e("p",null,[e("i",{class:"bi bi-trophy-fill"}),d("\u986F\u793Amodel data")],-1),N={class:"m-5 text-center"},j=e("p",null,[e("i",{class:"bi bi-trophy-fill"}),d("\u591A\u500B\u4F7F\u7528\u6642\uFF0C\u7D81\u5B9AArray\u6578\u503C")],-1),L={class:"m-5 text-center"},O=e("p",null,[e("i",{class:"bi bi-trophy-fill"}),d("\u81EA\u8A02\u7FA9\u52FE\u9078\u6846\u6846\u7684\u984F\u8272")],-1),w=x({setup(o){return(c,n)=>(r(),s("section",null,[E,e("div",G,[$,a(i,{checkBoxItem:{labelDir:l(t).right,labelStr:"\u53F3\u908A\u7684\u6A19\u7C64",value:""}},null,8,["checkBoxItem"]),a(i,{checkBoxItem:{labelDir:l(t).left,labelStr:"\u5DE6\u908A\u7684\u6A19\u7C64aa",value:"",style:{backgroundColor:"red",color:"black"}}},null,8,["checkBoxItem"])]),e("div",T,[V,a(p,{checkBoxItem:{labelDir:l(t).right,labelStr:"\u53F3\u908A\u7684\u6A19\u7C64",value:""}},null,8,["checkBoxItem"]),a(p,{checkBoxItem:{labelDir:l(t).left,labelStr:"\u5DE6\u908A\u7684\u6A19\u7C64",value:""}},null,8,["checkBoxItem"])]),e("div",N,[j,a(B,{checkGroupData:{checkItems:[{labelStr:"Dog",labelDir:l(t).right,value:"dog"},{labelStr:"Cat",labelDir:l(t).right,value:"cat"}]}},null,8,["checkGroupData"])]),e("div",L,[O,a(B,{checkGroupData:{checkItems:[{labelStr:"Red",labelDir:l(t).right,value:"red",style:{backgroundColor:"red",color:"black"}},{labelStr:"Green",labelDir:l(t).left,value:"green",style:{backgroundColor:"green",color:"black"}},{labelStr:"Orange",labelDir:l(t).right,value:"orange",style:{backgroundColor:"orange",color:"black"}}]}},null,8,["checkGroupData"])])]))}});export{w as default};
