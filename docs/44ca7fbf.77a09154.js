(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{123:function(e,a,t){"use strict";var n=t(0),c=t(20);a.a=function(){const e=Object(n.useContext)(c.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},124:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return j}));var n=t(0),c=t.n(n);function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){m(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var p=c.a.createContext({}),o=function(e){var a=c.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},i=function(e){var a=o(e.components);return c.a.createElement(p.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return c.a.createElement(c.a.Fragment,{},a)}},O=c.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,m=e.originalType,b=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),i=o(t),O=n,j=i["".concat(b,".").concat(O)]||i[O]||l[O]||m;return t?c.a.createElement(j,r(r({ref:a},p),{},{components:t})):c.a.createElement(j,r({ref:a},p))}));function j(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var m=t.length,b=new Array(m);b[0]=O;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,b[1]=r;for(var p=2;p<m;p++)b[p]=t[p];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},125:function(e,a,t){"use strict";t.d(a,"b",(function(){return m})),t.d(a,"a",(function(){return b}));var n=t(123),c=t(126);function m(){const{siteConfig:{baseUrl:e="/",url:a}={}}=Object(n.a)();return{withBaseUrl:(t,n)=>function(e,a,t,{forcePrependBaseUrl:n=!1,absolute:m=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(c.b)(t))return t;if(n)return a+t;const b=!t.startsWith(a)?a+t.replace(/^\//,""):t;return m?e+b:b}(a,e,t,n)}}function b(e,a={}){const{withBaseUrl:t}=m();return t(e,a)}},126:function(e,a,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function c(e){return void 0!==e&&!n(e)}t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return c}))},127:function(e,a,t){"use strict";function n(e){var a,t,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(c&&(c+=" "),c+=t);else for(a in e)e[a]&&(c&&(c+=" "),c+=a);return c}a.a=function(){for(var e,a,t=0,c="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(c&&(c+=" "),c+=a);return c}},128:function(e,a,t){"use strict";var n=t(0);const c=Object(n.createContext)(void 0);a.a=c},129:function(e,a,t){"use strict";var n=t(0),c=t(128);a.a=function(){const e=Object(n.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},130:function(e,a,t){"use strict";var n=t(0),c=t.n(n),m=t(129),b=t(127),r=t(47),s=t.n(r);const p=37,o=39;a.a=function(e){const{block:a,children:t,defaultValue:r,values:i,groupId:l}=e,{tabGroupChoices:O,setTabGroupChoices:j}=Object(m.a)(),[d,N]=Object(n.useState)(r);if(null!=l){const e=O[l];null!=e&&e!==d&&i.some(a=>a.value===e)&&N(e)}const u=e=>{N(e),null!=l&&j(l,e)},h=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":a})},i.map(({value:e,label:a})=>c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===e,className:Object(b.a)("tabs__item",s.a.tabItem,{"tabs__item--active":d===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,a,t)=>{switch(t.keyCode){case o:((e,a)=>{const t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()})(e,a);break;case p:((e,a)=>{const t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,a)}})(h,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},a))),c.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter(e=>e.props.value===d)[0]))}},131:function(e,a,t){"use strict";var n=t(0),c=t.n(n);a.a=function(e){return c.a.createElement("div",null,e.children)}},73:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return p})),t.d(a,"default",(function(){return i}));var n=t(2),c=t(6),m=(t(0),t(124)),b=t(125),r=(t(130),t(131),{id:"text",title:"Texto Vinculado",sidebar_label:"Texto Vinculado"}),s={unversionedId:"text",id:"text",isDocsHomePage:!1,title:"Texto Vinculado",description:"O elemento de texto vinculado (ao elemento de pot\xeancia) pode ser inserido no editor de elementos de pot\xeancia. Esse elemento de texto pode ser vinculado a in\xfameros resultados e par\xe2metros do sistema de pot\xeancia.",source:"@site/docs\\text.md",permalink:"/PSP/docs/text",editUrl:"https://github.com/Thales1330/PSP/tree/master/docusaurus/docs/text.md",sidebar_label:"Texto Vinculado",sidebar:"docs",previous:{title:"Configura\xe7\xf5es da Simula\xe7\xe3o",permalink:"/PSP/docs/simulationConfig"},next:{title:"Relat\xf3rios Tabulares",permalink:"/PSP/docs/tabularReport"}},p=[{value:"Inserindo elementos de texto no PSP-UFU",id:"inserindo-elementos-de-texto-no-psp-ufu",children:[]},{value:"Formul\xe1rio de edi\xe7\xe3o de dados do elemento de texto",id:"formul\xe1rio-de-edi\xe7\xe3o-de-dados-do-elemento-de-texto",children:[]}],o={rightToc:p};function i(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(m.b)("wrapper",Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(m.b)("link",{rel:"stylesheet",href:Object(b.a)("katex/katex.min.css")}),Object(m.b)("p",null,"O elemento de texto vinculado (ao elemento de pot\xeancia) pode ser inserido no editor de ",Object(m.b)("a",Object(n.a)({parentName:"p"},{href:"powerEditor"}),"elementos de pot\xeancia"),". Esse elemento de texto pode ser vinculado a in\xfameros resultados e par\xe2metros do sistema de pot\xeancia."),Object(m.b)("p",null,"Esse elemento \xe9 \xfatil para identifica\xe7\xe3o e an\xe1lise dos resultados de elementos de pot\xeancia."),Object(m.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(m.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(m.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(m.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Dica")),Object(m.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(m.b)("p",{parentName:"div"},"Outra aplica\xe7\xe3o importante \xe9 a atualiza\xe7\xe3o de seu valor ao aplicar a \u201csolu\xe7\xe3o cont\xednua\u201d no projeto, auxiliando na visualiza\xe7\xe3o das mudan\xe7as de estado da rede el\xe9trica."),Object(m.b)("p",{parentName:"div"},"Tamb\xe9m pode-se utilizar os resultados apresentados por esses elementos juntamente com o diagrama unifilar na cria\xe7\xe3o de relat\xf3rios do projeto."))),Object(m.b)("div",null,Object(m.b)("center",null,Object(m.b)("img",{src:Object(b.a)("images/textExp.png"),alt:"Exemplo do elemento de texto no PSP-UFU",title:"Exemplo de elemento de texto no PSP-UFU"}))),Object(m.b)("h2",{id:"inserindo-elementos-de-texto-no-psp-ufu"},"Inserindo elementos de texto no PSP-UFU"),Object(m.b)("p",null,"Por meio do submenu ",Object(m.b)("strong",{parentName:"p"},"Ferramentas")," pode-se inserir os elementos de texto, como \xe9 apresentado na imagem abaixo."),Object(m.b)("div",null,Object(m.b)("center",null,Object(m.b)("img",{src:Object(b.a)("images/addTextElement.svg"),alt:"Adicionar elementos de texto",title:"Adicionar elementos de texto"}))),Object(m.b)("p",null,'Ao selecionar o bot\xe3o "Texto" ou utilizar a ',Object(m.b)("strong",{parentName:"p"},'tecla de atalho "A"'),", o usu\xe1rio deve clicar na posi\xe7\xe3o desejada da ",Object(m.b)("a",Object(n.a)({parentName:"p"},{href:"powerEditor"}),"\xe1rea de trabalho"),'. Com isso, ser\xe1 adicionado um elemento tempor\xe1rio com o valor "Texto". Para parametrizar esse elemento clique duas vezes sobre ele.'),Object(m.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(m.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(m.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(m.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Aten\xe7\xe3o")),Object(m.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(m.b)("p",{parentName:"div"},"O elemento de texto, assim como os ",Object(m.b)("a",Object(n.a)({parentName:"p"},{href:"controlEditor"}),"elementos de controle")," n\xe3o exibem automaticamente o formul\xe1rio de edi\xe7\xe3o de dados ao inseri-lo pela primeira vez."))),Object(m.b)("h2",{id:"formul\xe1rio-de-edi\xe7\xe3o-de-dados-do-elemento-de-texto"},"Formul\xe1rio de edi\xe7\xe3o de dados do elemento de texto"),Object(m.b)("p",null,"A figura abaixo apresenta o formul\xe1rio de edi\xe7\xe3o de dados desse componente gr\xe1fico."),Object(m.b)("div",null,Object(m.b)("center",null,Object(m.b)("img",{src:Object(b.a)("images/textForm.png"),alt:"Formul\xe1rio do elemento de texto no PSP-UFU",title:"Formul\xe1rio do elemento de texto no PSP-UFU"}))),Object(m.b)("p",null,"Sua parametriza\xe7\xe3o \xe9 realizada por campos que associam o componente aos elementos el\xe9tricos de pot\xeancia, al\xe9m do formato dos resultados num\xe9ricos. Os campos s\xe3o liberados a medida que os dados anteriores s\xe3o inseridos e uma mensagem de erro \xe9 apresentada ao usu\xe1rio caso algum par\xe2metro necess\xe1rio n\xe3o seja preenchido."),Object(m.b)("p",null,"O processo de associa\xe7\xe3o se inicia na escolha do tipo de elemento de pot\xeancia ser\xe1 vinculado ao texto. Em seguida \xe9 exibida uma lista com o nome de todos os componentes previamente inseridos no editor de elementos de pot\xeancia do tipo definido no campo anterior, associando, assim, o texto ao elemento."),Object(m.b)("p",null,"Em \u201cTipo de texto\u201d define-se qual ser\xe1 a sa\xedda apresentada. Tal campo depende do tipo de elemento selecionado, como mostra a tabela abaixo. Alguns outros dados s\xe3o necess\xe1rios para os elementos de ramo, como barra de origem e destino, com o intuito de representar o fluxo correto de pot\xeancia e corrente. Finalmente o usu\xe1rio deve inserir a quantidade de casas decimais para dados num\xe9ricos. A pr\xe9-visualiza\xe7\xe3o pode ser observada no formul\xe1rio."),Object(m.b)("table",null,Object(m.b)("thead",{parentName:"table"},Object(m.b)("tr",{parentName:"thead"},Object(m.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Elemento de pot\xeancia"),Object(m.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tipo de texto"),Object(m.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unidades dispon\xedveis"))),Object(m.b)("tbody",{parentName:"table"},Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(m.b)("a",Object(n.a)({parentName:"td"},{href:"bus"}),"Barra")),Object(m.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Nome",Object(m.b)("br",null),"Tens\xe3o",Object(m.b)("br",null),"\xc2ngulo",Object(m.b)("br",null),"Corrente de falta",Object(m.b)("br",null),"Tens\xe3o de falta",Object(m.b)("br",null),"N\xedvel de curto-circuito",Object(m.b)("br",null),"THD de tens\xe3o"),Object(m.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-",Object(m.b)("br",null),Object(m.b)("span",Object(n.a)({parentName:"td"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"p"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),".")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"p.u.")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"p"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."))))),", V, kV",Object(m.b)("br",null),"Graus, Radianos",Object(m.b)("br",null),Object(m.b)("span",Object(n.a)({parentName:"td"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"p"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),".")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"p.u.")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"p"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."))))),", A, kA",Object(m.b)("br",null),Object(m.b)("span",Object(n.a)({parentName:"td"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"p"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),".")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"p.u.")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"p"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."))))),", V, kV",Object(m.b)("br",null),Object(m.b)("span",Object(n.a)({parentName:"td"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"p"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),".")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"p.u.")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"p"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."))))),", VA, kVA, MVA",Object(m.b)("br",null),"%")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(m.b)("a",Object(n.a)({parentName:"td"},{href:"syncGenerator"}),"Gerador")),Object(m.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Nome",Object(m.b)("br",null),"Pot\xeancia ativa",Object(m.b)("br",null),"Pot\xeancia reativa",Object(m.b)("br",null),"Corrente de falta"),Object(m.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-",Object(m.b)("br",null),Object(m.b)("span",Object(n.a)({parentName:"td"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"p"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),".")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"p.u.")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"p"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."))))),", W, kW, MW",Object(m.b)("br",null),Object(m.b)("span",Object(n.a)({parentName:"td"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"p"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),".")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"p.u.")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"p"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."))))),", var, kvar, Mvar",Object(m.b)("br",null),Object(m.b)("span",Object(n.a)({parentName:"td"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"p"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),".")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"p.u.")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"p"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."))))),", A, kA")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(m.b)("a",Object(n.a)({parentName:"td"},{href:"line"}),"Linha")," e ",Object(m.b)("a",Object(n.a)({parentName:"td"},{href:"transformer"}),"transformador")),Object(m.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Nome",Object(m.b)("br",null),"Fluxo de pot\xeancia ativo",Object(m.b)("br",null),"Fluxo de pot\xeancia reativo",Object(m.b)("br",null),"Perdas",Object(m.b)("br",null),"Corrente",Object(m.b)("br",null),"Corrente de falta"),Object(m.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-",Object(m.b)("br",null),Object(m.b)("span",Object(n.a)({parentName:"td"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"p"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),".")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"p.u.")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"p"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."))))),", W, kW, MW",Object(m.b)("br",null),Object(m.b)("span",Object(n.a)({parentName:"td"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"p"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),".")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"p.u.")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"p"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."))))),", var, kvar, Mvar",Object(m.b)("br",null),Object(m.b)("span",Object(n.a)({parentName:"td"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"p"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),".")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"p.u.")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"p"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."))))),", W, kW, MW",Object(m.b)("br",null),Object(m.b)("span",Object(n.a)({parentName:"td"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"p"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),".")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"p.u.")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"p"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."))))),", A, kA",Object(m.b)("br",null),Object(m.b)("span",Object(n.a)({parentName:"td"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"p"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),".")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"p.u.")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"p"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."))))),", A, kA")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(m.b)("a",Object(n.a)({parentName:"td"},{href:"load"}),"Carga"),", ",Object(m.b)("a",Object(n.a)({parentName:"td"},{href:"indMotor"}),"Motor de indu\xe7\xe3o"),Object(m.b)("br",null),"e ",Object(m.b)("a",Object(n.a)({parentName:"td"},{href:"syncMotor"}),"Compensador s\xedncrono")),Object(m.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Nome",Object(m.b)("br",null),"Pot\xeancia ativa",Object(m.b)("br",null),"Pot\xeancia reativa"),Object(m.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-",Object(m.b)("br",null),Object(m.b)("span",Object(n.a)({parentName:"td"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"p"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),".")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"p.u.")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"p"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."))))),", W, kW, MW",Object(m.b)("br",null),Object(m.b)("span",Object(n.a)({parentName:"td"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"p"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),".")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"p.u.")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"p"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."))))),", var, kvar, Mvar")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(m.b)("a",Object(n.a)({parentName:"td"},{href:"capacitor"}),"Capacitor")," e ",Object(m.b)("a",Object(n.a)({parentName:"td"},{href:"inductor"}),"Indutor")),Object(m.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Nome",Object(m.b)("br",null),"Pot\xeancia reativa"),Object(m.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-",Object(m.b)("br",null),Object(m.b)("span",Object(n.a)({parentName:"td"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"p"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),".")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"p.u.")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"p"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."))))),", var, kvar, Mvar")))),Object(m.b)("div",{className:"admonition admonition-info alert alert--info"},Object(m.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(m.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(m.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Informa\xe7\xe3o")),Object(m.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(m.b)("p",{parentName:"div"},"Uma vez inseridos, esses elementos de texto podem ser manipulados da ",Object(m.b)("a",Object(n.a)({parentName:"p"},{href:"cadTools"}),"mesma forma que os elementos de pot\xeancia"),"."))))}i.isMDXComponent=!0}}]);