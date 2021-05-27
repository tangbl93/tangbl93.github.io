(self.webpackChunktangbl_93_github_io=self.webpackChunktangbl_93_github_io||[]).push([[1521],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return s}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,k=d["".concat(p,".").concat(s)]||d[s]||c[s]||a;return n?o.createElement(k,l(l({ref:t},m),{},{components:n})):o.createElement(k,l({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6574:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return m}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),l={title:"mdBook \u642d\u5efa\u8bb0\u5f55",tags:["mdBook"]},i={permalink:"/blog/2021/05/01/mdbook",editUrl:"https://github.com/tangbl93/tangbl93.github.io/blog/2021-05-01-mdbook.md",source:"@site/blog/2021-05-01-mdbook.md",title:"mdBook \u642d\u5efa\u8bb0\u5f55",description:"mdBook is a utility to create modern online books from Markdown files.",date:"2021-05-01T00:00:00.000Z",formattedDate:"May 1, 2021",tags:[{label:"mdBook",permalink:"/blog/tags/md-book"}],readingTime:.97,truncated:!1},p=[{value:"1. \u5b89\u88c5 mdBook",id:"1-\u5b89\u88c5-mdbook",children:[]},{value:"2. \u521d\u59cb\u5316",id:"2-\u521d\u59cb\u5316",children:[]},{value:"3. mdBook \u57fa\u7840\u914d\u7f6e",id:"3-mdbook-\u57fa\u7840\u914d\u7f6e",children:[]},{value:"4. \u67e5\u770b\u3001\u751f\u6210\u5728\u7ebf\u6587\u6863",id:"4-\u67e5\u770b\u3001\u751f\u6210\u5728\u7ebf\u6587\u6863",children:[]},{value:"5. \u96c6\u6210 GitHub Actions &amp; GitHub Pages",id:"5-\u96c6\u6210-github-actions--github-pages",children:[]}],u={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"mdBook is a utility to create modern online books from Markdown files.")),(0,a.kt)("p",null,"\u672c\u6587\u8bb0\u5f55\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/mdBook"},"mdBook")," \u642d\u5efa\u5728\u7ebf\u6587\u6863\u7684\u8fc7\u7a0b\u3002"),(0,a.kt)("h2",{id:"1-\u5b89\u88c5-mdbook"},"1. \u5b89\u88c5 mdBook"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/mdBook#Installation"},"https://github.com/rust-lang/mdBook#Installation"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install mdbook\n")),(0,a.kt)("h2",{id:"2-\u521d\u59cb\u5316"},"2. \u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u5728\u6839\u76ee\u5f55\u4e0b\u8dd1\u521d\u59cb\u5316\u547d\u4ee4\uff0c\u7136\u540e\u6309\u7740\u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mdbook init \n\n# \u4e0b\u8fb9\u7684\u5185\u5bb9\u662f\u547d\u4ee4\u884c\u63d0\u793a\u4e0e\u8f93\u5165\u7684\u503c\nDo you want a .gitignore to be created? (y/n)\n> y\nWhat title would you like to give the book? \n> blog\n")),(0,a.kt)("p",null,"\u6b64\u547d\u4ee4\u8fd0\u884c\u8fd0\u884c\u7ed3\u675f\u540e\uff0c\u5728\u6587\u4ef6\u5939\u4e2d\u4f1a\u591a\u51fa: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src")," \u6587\u4ef6\u5939"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".gitignore")," \u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"book.toml")," \u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"book")," \u6587\u4ef6\u5939(\u7f16\u8bd1\u540e\u751f\u6210)")),(0,a.kt)("h2",{id:"3-mdbook-\u57fa\u7840\u914d\u7f6e"},"3. mdBook \u57fa\u7840\u914d\u7f6e"),(0,a.kt)("p",null,"\u4e0d\u60f3\u6253\u4e71\u539f\u672c\u7684\u6587\u4ef6\u7ed3\u6784\uff0c\u5c31\u5220\u9664\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," \u6587\u4ef6\u5939\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"mdBook")," \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"SUMMARY.md")," \u6587\u4ef6\u8bfb\u53d6\u6587\u6863\u7ed3\u6784\uff0c\u4f46\u4e4b\u524d\u5df2\u7ecf\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md")," \u7f16\u5199\u8fc7\u3002\u4e8e\u662f\u901a\u8fc7\u751f\u6210\u94fe\u63a5\u7684\u65b9\u5f0f\u89e3\u51b3: ",(0,a.kt)("inlineCode",{parentName:"p"},"ln -s README.md SUMMARY.md"),"\uff0c\u907f\u514d\u91cd\u590d\u5de5\u4f5c\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u8fd8\u989d\u5916\u94fe\u63a5 ",(0,a.kt)("inlineCode",{parentName:"p"},"ln -s README.md index.md"),"\uff0c\u4e4b\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"SUMMARY.md")," \u4e2d\u6dfb\u52a0\u6761\u76ee\uff0c\u624d\u53ef\u4ee5\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),"\u3002"),(0,a.kt)("p",null,"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"book.toml")," \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"title"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'src = "./"  # \u4fee\u6539\u4e3a\u4ece\u6839\u76ee\u5f55\u8bfb\u53d6\u535a\u5ba2\u5185\u5bb9\ntitle = ""  # \u7531\u4e8e\u5728\u7ebf\u6587\u6863\u4e2d\u7684\u6807\u9898\u4e0d\u592a\u7f8e\u89c2\u3002\u4e2a\u4eba\u5c06\u5176\u79fb\u9664\n')),(0,a.kt)("h2",{id:"4-\u67e5\u770b\u3001\u751f\u6210\u5728\u7ebf\u6587\u6863"},"4. \u67e5\u770b\u3001\u751f\u6210\u5728\u7ebf\u6587\u6863"),(0,a.kt)("p",null,"\u8be5\u547d\u4ee4\u8fd0\u884c\u540e\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," \u4e2d\u67e5\u770b\u5728\u7ebf\u6587\u6863\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mdbook serve\n")),(0,a.kt)("p",null,"\u8be5\u547d\u4ee4\u8fd0\u884c\u540e\u4f1a\u751f\u6210\u9759\u6001\u7f51\u9875\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"book")," \u6587\u4ef6\u5939\u4e2d\u3002\u53ef\u4ee5\u7528\u6765\u4e0a\u4f20\u670d\u52a1\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mdbook build\n")),(0,a.kt)("h2",{id:"5-\u96c6\u6210-github-actions--github-pages"},"5. \u96c6\u6210 GitHub Actions & GitHub Pages"),(0,a.kt)("p",null,"\u4e3b\u8981\u4f9d\u8d56 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/peaceiris/actions-mdbook#getting-started"},"actions-mdbook")," \u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u5728\u6839\u76ee\u5f55\u4e0b\u65b0\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows/mdBook.yml")," \u6587\u4ef6\uff0c\u4e4b\u540e\u5c06\u4ee5\u4e0b\u5185\u5bb9\u590d\u5236\u5230\u6587\u4ef6\u4e2d:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: mdBook\n\non:\n  push:\n    branches:\n      - master\n\njobs:\n  deploy:\n    runs-on: macos-latest\n    steps:\n      - uses: actions/checkout@v2\n\n      - name: Setup mdBook\n        uses: peaceiris/actions-mdbook@v1\n        with:\n          mdbook-version: 'latest'\n\n      - run: mdbook build\n\n      - name: Deploy\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./book\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728\u9879\u76ee\u7684\u8bbe\u7f6e\u4e2d\u8bbe\u7f6e\u597d\u5bf9\u5e94\u7684\u5206\u652f\uff0c\u7b49\u5230 Action \u8fd0\u884c\u6210\u529f\u5c31\u53ef\u4ee5\u5728\u94fe\u63a5\u4e2d\u770b\u5230\u5728\u7ebf\u6587\u6863\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub Pages",src:n(2070).Z})))}m.isMDXComponent=!0},2070:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mdbook-gh-pages-4fd9cded4d179d39f57d15dc943e734a.png"}}]);