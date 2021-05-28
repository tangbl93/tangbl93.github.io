(self.webpackChunktangbl_93_github_io=self.webpackChunktangbl_93_github_io||[]).push([[1392],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},516:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i={sidebar_position:10},l={unversionedId:"dart/dart-tour-enums",id:"dart/dart-tour-enums",isDocsHomePage:!1,title:"Dart tour: 10\u3001\u679a\u4e3e",description:"\u4f7f\u7528\u5173\u952e\u5b57 enum \u6765\u5b9a\u4e49\u679a\u4e3e\u7c7b\u578b\u3002",source:"@site/docs/dart/dart-tour-enums.md",sourceDirName:"dart",slug:"/dart/dart-tour-enums",permalink:"/docs/dart/dart-tour-enums",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Dart tour: 9\u3001\u7c7b",permalink:"/docs/dart/dart-tour-classes"},next:{title:"Dart tour: 11\u3001Mixin",permalink:"/docs/dart/dart-tour-mixin"}},u=[],p={toc:u};function c(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f7f\u7528\u5173\u952e\u5b57 enum \u6765\u5b9a\u4e49\u679a\u4e3e\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// \u53ef\u4ee5\u5728\u58f0\u660e\u679a\u4e3e\u7c7b\u578b\u65f6\u4f7f\u7528 \u5c3e\u968f\u9017\u53f7\nenum Color { red, green, blue, }\n")),(0,a.kt)("p",null,"\u6bcf\u4e00\u4e2a\u679a\u4e3e\u503c\u90fd\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," \u6210\u5458\u53d8\u91cf\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Getter")," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u5c06\u4f1a\u8fd4\u56de\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u4e3a\u57fa\u51c6\u7d22\u5f15\u7684\u4f4d\u7f6e\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"assert(Color.red.index == 0);\nassert(Color.green.index == 1);\nassert(Color.blue.index == 2);\n")),(0,a.kt)("p",null,"\u60f3\u8981\u83b7\u5f97\u5168\u90e8\u7684\u679a\u4e3e\u503c\uff0c\u4f7f\u7528\u679a\u4e3e\u7c7b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"values")," \u65b9\u6cd5\u83b7\u53d6\u5305\u542b\u5b83\u4eec\u7684\u5217\u8868\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"List<Color> colors = Color.values;\nassert(colors[2] == Color.blue);\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Switch")," \u8bed\u53e5\u4e2d\u4f7f\u7528\u679a\u4e3e\uff0c\u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662f\u5fc5\u987b\u5904\u7406\u679a\u4e3e\u503c\u7684\u6bcf\u4e00\u79cd\u60c5\u51b5\uff0c\u5373\u6bcf\u4e00\u4e2a\u679a\u4e3e\u503c\u90fd\u5fc5\u987b\u6210\u4e3a\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"case")," \u5b50\u53e5\uff0c\u4e0d\u7136\u4f1a\u51fa\u73b0\u8b66\u544a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"var aColor = Color.blue;\n\nswitch (aColor) {\n  case Color.red:\n    print('\u7ea2\u5982\u73ab\u7470\uff01');\n    break;\n  case Color.green:\n    print('\u7eff\u5982\u8349\u539f\uff01');\n    break;\n  default: // \u6ca1\u6709\u8be5\u8bed\u53e5\u4f1a\u51fa\u73b0\u8b66\u544a\u3002\n    print(aColor); // 'Color.blue'\n}\n")),(0,a.kt)("p",null,"\u679a\u4e3e\u7c7b\u578b\u6709\u5982\u4e0b\u4e24\u4e2a\u9650\u5236\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u80fd\u5b50\u7c7b\u5316(",(0,a.kt)("inlineCode",{parentName:"li"},"subclass"),")\uff0c\u6df7\u5408(",(0,a.kt)("inlineCode",{parentName:"li"},"mixin"),")\u6216\u5b9e\u73b0(",(0,a.kt)("inlineCode",{parentName:"li"},"implement"),")\u679a\u4e3e\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u80fd\u663e\u5f0f\u5730\u5b9e\u4f8b\u5316\u4e00\u4e2a\u679a\u4e3e\u7c7b\u3002")))}c.isMDXComponent=!0}}]);