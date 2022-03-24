"use strict";(self.webpackChunkpsp_ufu=self.webpackChunkpsp_ufu||[]).push([[1160],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return p}});var o=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,t=function(e,a){if(null==e)return{};var n,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=o.createContext({}),c=function(e){var a=o.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=c(e.components);return o.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=t,v=m["".concat(l,".").concat(p)]||m[p]||u[p]||r;return n?o.createElement(v,i(i({ref:a},d),{},{components:n})):o.createElement(v,i({ref:a},d))}));function p(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,a,n){n.d(a,{Z:function(){return t}});var o=n(7294);function t(e){var a=e.children,n=e.hidden,t=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:t},a)}},9877:function(e,a,n){n.d(a,{Z:function(){return d}});var o=n(7462),t=n(7294),r=n(2389),i=n(3725),s=n(6010),l="tabItem_LplD";function c(e){var a,n,r,c=e.lazy,d=e.block,u=e.defaultValue,m=e.values,p=e.groupId,v=e.className,f=t.Children.map(e.children,(function(e){if((0,t.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:f.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),h=(0,i.lx)(k,(function(e,a){return e.value===a.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(a=null!=u?u:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(r=f[0])?void 0:r.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),y=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,t.useState)(b),P=w[0],x=w[1],C=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var E=y[p];null!=E&&E!==P&&k.some((function(e){return e.value===E}))&&x(E)}var S=function(e){var a=e.currentTarget,n=C.indexOf(a),o=k[n].value;o!==P&&(O(a),x(o),null!=p&&N(p,o))},T=function(e){var a,n=null;switch(e.key){case"ArrowRight":var o=C.indexOf(e.currentTarget)+1;n=C[o]||C[0];break;case"ArrowLeft":var t=C.indexOf(e.currentTarget)-1;n=C[t]||C[C.length-1]}null==(a=n)||a.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},v)},k.map((function(e){var a=e.value,n=e.label,r=e.attributes;return t.createElement("li",(0,o.Z)({role:"tab",tabIndex:P===a?0:-1,"aria-selected":P===a,key:a,ref:function(e){return C.push(e)},onKeyDown:T,onFocus:S,onClick:S},r,{className:(0,s.Z)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":P===a})}),null!=n?n:a)}))),c?(0,t.cloneElement)(f.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==P})}))))}function d(e){var a=(0,r.Z)();return t.createElement(c,(0,o.Z)({key:String(a)},e))}},2679:function(e,a,n){n.r(a),n.d(a,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return v}});var o=n(7462),t=n(3366),r=(n(7294),n(3905)),i=n(4996),s=n(9877),l=n(8215),c=["components"],d={id:"syncMotor",title:"Compensador S\xedncrono",sidebar_label:"Compensador S\xedncrono"},u=void 0,m={unversionedId:"syncMotor",id:"syncMotor",title:"Compensador S\xedncrono",description:"Uma m\xe1quina s\xedncrona operando sem carga mec\xe2nica e fornecendo ou absorvendo energia reativa. [tradu\xe7\xe3o livre - IEC 60050](",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/syncMotor.md",sourceDirName:".",slug:"/syncMotor",permalink:"/PSP/pt/docs/syncMotor",editUrl:"https://github.com/Thales1330/PSP/tree/master/docusaurus/docs/syncMotor.md",tags:[],version:"current",frontMatter:{id:"syncMotor",title:"Compensador S\xedncrono",sidebar_label:"Compensador S\xedncrono"},sidebar:"docs",previous:{title:"Gerador S\xedncrono",permalink:"/PSP/pt/docs/syncGenerator"},next:{title:"Motor de Indu\xe7\xe3o",permalink:"/PSP/pt/docs/indMotor"}},p={},v=[{value:"Compensador S\xedncrono no PSP-UFU",id:"compensador-s\xedncrono-no-psp-ufu",level:2},{value:"Formul\xe1rio de edi\xe7\xe3o dos compensadores s\xedncronos",id:"formul\xe1rio-de-edi\xe7\xe3o-dos-compensadores-s\xedncronos",level:2},{value:"Nome",id:"nome",level:4},{value:"Pot\xeancia nominal",id:"pot\xeancia-nominal",level:4},{value:"Pot\xeancias ativa e reativa",id:"pot\xeancias-ativa-e-reativa",level:4},{value:"Pot\xeancias reativas m\xe1xima e m\xednima",id:"pot\xeancias-reativas-m\xe1xima-e-m\xednima",level:4},{value:"Utilizar pot\xeancia nominal como base",id:"utilizar-pot\xeancia-nominal-como-base",level:4},{value:"Imped\xe2ncias de sequ\xeancia",id:"imped\xe2ncias-de-sequ\xeancia",level:4},{value:"Imped\xe2ncia de aterramento",id:"imped\xe2ncia-de-aterramento",level:4},{value:"Neutro aterrado",id:"neutro-aterrado",level:4}],f={toc:v};function k(e){var a=e.components,n=(0,t.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("link",{rel:"stylesheet",href:(0,i.Z)("katex/katex.min.css")}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Uma m\xe1quina s\xedncrona operando sem carga mec\xe2nica e fornecendo ou absorvendo energia reativa. ",(0,r.kt)("a",{parentName:"p",href:"http://www.electropedia.org/iev/iev.nsf/display?openform&ievref=411-34-03"},(0,r.kt)("em",{parentName:"a"},"tradu\xe7\xe3o livre")," - IEC 60050"),".")),(0,r.kt)("h2",{id:"compensador-s\xedncrono-no-psp-ufu"},"Compensador S\xedncrono no PSP-UFU"),(0,r.kt)("p",null,"O compensador s\xedncrono nada mais \xe9 que um motor s\xedncrono operando sem carga em seu eixo com o intuito de fornecer ou absorver pot\xeancia reativa na rede. Em rela\xe7\xe3o ao ",(0,r.kt)("a",{parentName:"p",href:"powerFlow"},"fluxo de carga"),", no PSP-UFU esse elemento tem comportamento id\xeantico ao ",(0,r.kt)("a",{parentName:"p",href:"syncGenerator"},"gerador s\xedncrono"),", por\xe9m a sua pot\xeancia ativa \xe9 inserida nos algoritmos de solu\xe7\xe3o com sinal negativo."),(0,r.kt)("p",null,"Sua parametriza\xe7\xe3o para o estudo de ",(0,r.kt)("a",{parentName:"p",href:"powerFlow"},"fluxo de carga"),", ",(0,r.kt)("a",{parentName:"p",href:"fault"},"falta")," e ",(0,r.kt)("a",{parentName:"p",href:"harmonics"},"harm\xf4nicos")," \xe9 id\xeantica ao ",(0,r.kt)("a",{parentName:"p",href:"syncGenerator"},"gerador s\xedncrono"),"."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Cuidado!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"O compensador s\xedncrono ",(0,r.kt)("strong",{parentName:"p"},"n\xe3o foi implementado no estudo de ",(0,r.kt)("a",{parentName:"strong",href:"stability"},"estabilidade"))," e sua presen\xe7a no circuito pode causar erros durante os c\xe1lculos."),(0,r.kt)("p",{parentName:"div"},"N\xe3o inclua esse elemento para os estudos de ",(0,r.kt)("a",{parentName:"p",href:"stability"},"estabilidade"),". Vers\xf5es futuras do PSP-UFU ir\xe3o contemplar esse elemento para esse estudo."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Dica")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\xc9 poss\xedvel utilizar um ",(0,r.kt)("a",{parentName:"p",href:"syncGenerator"},"gerador s\xedncrono")," com pot\xeancia ativa ",(0,r.kt)("em",{parentName:"p"},"nula")," ou ",(0,r.kt)("em",{parentName:"p"},"negativa")," para representar o compensador s\xedncrono nos estudos de ",(0,r.kt)("a",{parentName:"p",href:"stability"},"estabilidade"),"."))),(0,r.kt)("h2",{id:"formul\xe1rio-de-edi\xe7\xe3o-dos-compensadores-s\xedncronos"},"Formul\xe1rio de edi\xe7\xe3o dos compensadores s\xedncronos"),(0,r.kt)("p",null,"A imagem abaixo apresenta o formul\xe1rio de inser\xe7\xe3o/altera\xe7\xe3o de dados dos compensadores s\xedncronos:"),(0,r.kt)("div",null,(0,r.kt)("center",null,(0,r.kt)("img",{src:(0,i.Z)("images/syncMotorForm.png"),alt:"Formul\xe1rio dos compensadores s\xedncronos no PSP-UFU",title:"Formul\xe1rio dos compensadores s\xedncronos no PSP-UFU"}))),(0,r.kt)(s.Z,{groupId:"syncMotor-tabs",defaultValue:"general",values:[{label:"Geral",value:"general"},{label:"Falta",value:"fault"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"general",mdxType:"TabItem"},(0,r.kt)("h4",{id:"nome"},"Nome"),(0,r.kt)("p",null,"Identifica\xe7\xe3o do elemento el\xe9trico. Podem ser inseridos quaisquer n\xfameros de caracteres no padr\xe3o ",(0,r.kt)("a",{parentName:"p",href:"https://pt.wikipedia.org/wiki/Unicode"},"Unicode"),"."),(0,r.kt)("p",null,"Todos os componentes de pot\xeancia do PSP-UFU possuem esse campo."),(0,r.kt)("h4",{id:"pot\xeancia-nominal"},"Pot\xeancia nominal"),(0,r.kt)("p",null,"Pot\xeancia nominal do compensador, inserida em MVA, kVA ou VA."),(0,r.kt)("p",null,'Esse campo \xe9 especialmente importante caso a op\xe7\xe3o "Utilizar a pot\xeancia nominal como base" esteja marcada.'),(0,r.kt)("h4",{id:"pot\xeancias-ativa-e-reativa"},"Pot\xeancias ativa e reativa"),(0,r.kt)("p",null,"Pot\xeancias ativa (inserida em W, kW, MW ou p.u.) e reativa (inserida em var, kvar, Mvar ou p.u.) do compensador."),(0,r.kt)("p",null,"Caso a barra conectada seja PV o valor de pot\xeancia reativa ser\xe1 ignorado e caso seja de refer\xeancia ambos os valores inseridos ser\xe3o desprezados."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Aten\xe7\xe3o!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Caso mais de um compensador esteja conectado na mesma barra, os valores de pot\xeancia reativa (nas barras de refer\xeancia e PV) e ativa (nas barras de refer\xeancia) s\xe3o igualmente distribu\xeddas, respeitando os limites individuais de pot\xeancia reativa."))),(0,r.kt)("h4",{id:"pot\xeancias-reativas-m\xe1xima-e-m\xednima"},"Pot\xeancias reativas m\xe1xima e m\xednima"),(0,r.kt)("p",null,"Limites de pot\xeancia reativa m\xe1xima e m\xednima do compensador para controle de tens\xe3o em barras PV. Caso esses valores sejam ultrapassados, o reativo gerado pela unidade ser\xe1 limitado ao valor inserido e a barra conectada ser\xe1 transformada em PQ, n\xe3o controlando a tens\xe3o estabelecida."),(0,r.kt)("h4",{id:"utilizar-pot\xeancia-nominal-como-base"},"Utilizar pot\xeancia nominal como base"),(0,r.kt)("p",null,"Caso essa op\xe7\xe3o seja marcada, o programa ir\xe1 utilizar a pot\xeancia nominal do compensador como base para a convers\xe3o das unidades, inclusive aqueles no formul\xe1rio de estabilidade, caso contr\xe1rio ser\xe1 usada a ",(0,r.kt)("a",{parentName:"p",href:"simulationConfig"},"pot\xeancia base do sistema"),".")),(0,r.kt)(l.Z,{value:"fault",mdxType:"TabItem"},(0,r.kt)("h4",{id:"imped\xe2ncias-de-sequ\xeancia"},"Imped\xe2ncias de sequ\xeancia"),(0,r.kt)("p",null,"Valores de resist\xeancia e reat\xe2ncia para c\xe1lculo das correntes de falta. S\xe3o inseridos dados de sequ\xeancia positiva, negativa e zero."),(0,r.kt)("h4",{id:"imped\xe2ncia-de-aterramento"},"Imped\xe2ncia de aterramento"),(0,r.kt)("p",null,"Valores utilizados para o c\xe1lculo das correntes de falta do tipo fase-terra e fase-fase-terra. Caso o neutro do gerador n\xe3o seja aterrado, o valor inserido nesse campo \xe9 ignorado."),(0,r.kt)("h4",{id:"neutro-aterrado"},"Neutro aterrado"),(0,r.kt)("p",null,"Indica se o neutro do gerador \xe9 aterrado."))))}k.isMDXComponent=!0}}]);