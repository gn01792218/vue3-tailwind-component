import{_ as n}from"./DemoSlot.7e5c4b2a.js";import{e as s,o as a,c,b as t,t as r,a as o,w as d}from"./vendor.cf682cf3.js";const f={class:"card card1 w-[300px] relative overflow-hidden"},u=t("div",{class:"card-img w-full transition-transform duration-500"},[t("img",{class:"w-full",src:"https://picsum.photos/id/683/600/400",alt:"demopicture"})],-1),p={class:"card-content w-full h-full absolute flex flex-col items-center justify-center top-0 left-0 text-white p-5 transition-all duration-500 opacity-0"},h={class:"uppercase text-lg"},_={class:"capitalize"},b=s({props:{card:null},setup(e){return(i,l)=>(a(),c("div",f,[u,t("div",p,[t("h1",h,r(e.card.caption),1),t("span",_,r(e.card.description),1)])]))}}),x={class:"card card2 w-[300px] relative overflow-hidden before:absolute before:z-[1] before:left-0 before:top-0 before:w-[30px] before:h-[30px] before:border-l-4 before:border-t-4 before:border-yellow-400 before:transition-transform before:duration-300 before:opacity-0 after:absolute after:right-0 after:bottom-0 after:w-[30px] after:h-[30px] after:border-r-4 after:border-b-4 after:border-yellow-400 after:transition-transform after:duration-300 after:opacity-0 hover:before:rotate-[360deg] hover:before:opacity-100 hover:after:rotate-[360deg] hover:after:opacity-100"},m=t("div",{class:"card-img w-full transition-transform duration-300"},[t("img",{class:"w-full",src:"https://picsum.photos/id/680/600/400",alt:"demopicture"})],-1),w={class:"card-content w-full h-full absolute flex flex-col items-center justify-center top-0 left-0 text-white p-5 transition-all duration-300 translate-x-[-100%] opacity-0"},v={class:"uppercase text-lg"},$={class:"capitalize"},y=s({props:{card:null},setup(e){return(i,l)=>(a(),c("div",x,[m,t("div",w,[t("h1",v,r(e.card.caption),1),t("span",$,r(e.card.description),1)])]))}}),g={class:"card3 w-[300px] relative overflow-hidden border-4 rounded-sm"},F=t("div",{class:"card-img w-full transition-transform duration-300"},[t("img",{class:"w-full",src:"https://picsum.photos/id/686/600/400",alt:"demopicture"})],-1),A={class:"card-content w-full h-full absolute flex flex-col items-center justify-center top-0 left-0 text-white p-5 transition-all duration-300 translate-x-[-100%] bg-black"},j={class:"uppercase text-lg"},z={class:"capitalize"},P=s({props:{card:null},setup(e){return(i,l)=>(a(),c("div",g,[F,t("div",A,[t("h1",j,r(e.card.caption),1),t("span",z,r(e.card.description),1)])]))}}),T={class:"card4 w-[300px] relative overflow-hidden rounded-lg"},k=t("div",{class:"card-img w-full transition-transform duration-200"},[t("img",{class:"w-full",src:"https://picsum.photos/id/68/600/400",alt:"demopicture"})],-1),C={class:"card-content w-full h-[30%] absolute flex flex-col items-center justify-center bottom-0 left-0 text-white p-1 transition-all duration-200 translate-y-[100%] bg-black"},B={class:"uppercase text-lg"},D={class:"capitalize"},E=s({props:{card:null},setup(e){return(i,l)=>(a(),c("div",T,[k,t("div",C,[t("h1",B,r(e.card.caption),1),t("span",D,r(e.card.description),1)])]))}}),N={class:"card5 w-[300px] relative overflow-hidden before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-cyan-900 before:opacity-0 before:transition-transform before:duration-300 before:translate-y-full hover:before:opacity-50 hover:before:translate-y-0"},V=t("div",{class:"card-img w-full transition-transform duration-200"},[t("img",{class:"w-full",src:"https://picsum.photos/id/675/600/400",alt:"demopicture"})],-1),R={class:"card-content w-full h-full absolute flex flex-col items-center justify-center bottom-0 left-0 text-white p-5 transition-all duration-200 translate-y-[-10%] opacity-0"},S={class:"uppercase text-lg"},q={class:"capitalize relative before:absolute before:z-[-1] before:left-0 before:top-0 before:w-full before:h-full before:bg-amber-700 before:opacity-50"},G=s({props:{card:null},setup(e){return(i,l)=>(a(),c("div",N,[V,t("div",R,[t("h1",S,r(e.card.caption),1),t("span",q,r(e.card.description),1)])]))}}),H={class:"card6 w-[450px] h-[300px] relative overflow-hidden before:absolute before:w-[150%] before:h-[250%] before:left-0 before:top-0 before:bg-[#2d3436] before:opacity-80 before:transition before:duration-300 before:translate-x-[350px] before:translate-y-[250px] before:rotate-45 hover:before:translate-x-[-50px] hover:before:translate-y-[-250px]"},I=t("div",{class:"w-full h-full"},[t("img",{class:"w-full h-full",src:"https://picsum.photos/id/4/600/400",alt:""})],-1),J={class:"card-content absolute top-0 left-0 w-full h-full flex flex-col justify-around text-white text-left"},K={class:"text-center bg-[rgba(0,0,0,0.8)] p-2 translate-x-[200px] translate-y-[-200px] transition-transform"},L={class:"w-[80%] self-center text-center transition-all text-sm translate-x-[-200px] translate-y-[200px]"},M=t("a",{href:"#",class:"w-[150px] bg-black self-center transition-all p-2 text-center translate-y-[100px]"},"Read more",-1),O=s({props:{card:null},setup(e){return(i,l)=>(a(),c("div",H,[I,t("div",J,[t("h2",K,r(e.card.caption),1),t("p",L,r(e.card.description),1),M])]))}}),Q={class:"text-center w-full"},U=t("h1",{class:"text-slot-400 text-2xl mb-10"},"Cards\u81EA\u88FD\u7D44\u4EF6\u5C55\u793A",-1),W={class:"w-full flex flex-wrap justify-center"},Z=s({setup(e){return(i,l)=>(a(),c("div",Q,[U,t("div",W,[o(n,{title:"card\u6A23\u5F0F1"},{default:d(()=>[o(b,{card:{caption:"This is a Picture!",description:"add some description to card now~!"}})]),_:1}),o(n,{title:"card\u6A23\u5F0F2"},{default:d(()=>[o(y,{card:{caption:"This is a Picture!",description:"add some description to card now~!"}})]),_:1}),o(n,{title:"card\u6A23\u5F0F3"},{default:d(()=>[o(P,{card:{caption:"This is a Picture!",description:"add some description to card now~!"}})]),_:1}),o(n,{title:"card\u6A23\u5F0F4"},{default:d(()=>[o(E,{card:{caption:"This is a Picture!",description:"add some description to card now~!"}})]),_:1}),o(n,{title:"card\u6A23\u5F0F5"},{default:d(()=>[o(G,{card:{caption:"This is a Picture!",description:"add some description to card now~!"}})]),_:1}),o(n,{title:"card\u6A23\u5F0F6"},{default:d(()=>[o(O,{card:{caption:"This is a Picture!",description:"add some description to card now~!and see more...\u3002add some description to card now~!and see more...\u3002add some description to card now~!and see more..."}},null,8,["card"])]),_:1})])]))}});export{Z as default};
