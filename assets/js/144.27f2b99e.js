(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{643:function(e,n,t){"use strict";t.r(n);var i={data:function(){return{editActive:!1,edit:null,editProp:{},users:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}]}}},a=t(1),s=Object(a.a)(i,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("vs-table",{scopedSlots:e._u([{key:"thead",fn:function(){return[t("vs-tr",[t("vs-th",[e._v("\n          Name\n        ")]),e._v(" "),t("vs-th",[e._v("\n          Email\n        ")]),e._v(" "),t("vs-th",[e._v("\n          Id\n        ")])],1)]},proxy:!0},{key:"tbody",fn:function(){return e._l(e.users,(function(n,i){return t("vs-tr",{key:i},[t("vs-td",{attrs:{edit:""},on:{click:function(t){e.edit=n,e.editProp="name",e.editActive=!0}}},[e._v("\n          "+e._s(n.name)+"\n        ")]),e._v(" "),t("vs-td",{attrs:{edit:""},on:{click:function(t){e.edit=n,e.editProp="email",e.editActive=!0}}},[e._v("\n         "+e._s(n.email)+"\n        ")]),e._v(" "),t("vs-td",[e._v("\n         "+e._s(n.id)+"\n        ")])],1)}))},proxy:!0}])}),e._v(" "),t("vs-dialog",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n        Change Prop "+e._s(e.editProp)+"\n    ")]},proxy:!0}]),model:{value:e.editActive,callback:function(n){e.editActive=n},expression:"editActive"}},[e._v(" "),"email"==e.editProp?t("vs-input",{on:{keypress:function(n){if(!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter"))return null;e.editActive=!1}},model:{value:e.edit[e.editProp],callback:function(n){e.$set(e.edit,e.editProp,n)},expression:"edit[editProp]"}}):e._e(),e._v(" "),"name"==e.editProp?t("vs-select",{attrs:{block:"",placeholder:"Select"},on:{change:function(n){e.editActive=!1}},model:{value:e.edit[e.editProp],callback:function(n){e.$set(e.edit,e.editProp,n)},expression:"edit[editProp]"}},[t("vs-option",{attrs:{label:"Vuesax",value:"Vuesax"}},[e._v("\n        Vuesax\n      ")]),e._v(" "),t("vs-option",{attrs:{label:"Vue",value:"Vuejs"}},[e._v("\n        Vue\n      ")]),e._v(" "),t("vs-option",{attrs:{label:"Javascript",value:"Javascript"}},[e._v("\n        Javascript\n      ")]),e._v(" "),t("vs-option",{attrs:{disabled:"",label:"Sass",value:"Sass"}},[e._v("\n        Sass\n      ")]),e._v(" "),t("vs-option",{attrs:{label:"Typescript",value:"Typescript"}},[e._v("\n        Typescript\n      ")]),e._v(" "),t("vs-option",{attrs:{label:"Webpack",value:"Webpack"}},[e._v("\n        Webpack\n      ")]),e._v(" "),t("vs-option",{attrs:{label:"Nodejs",value:"Nodejs"}},[e._v("\n        Nodejs\n      ")])],1):e._e()],1)],1)}),[],!1,null,null,null);n.default=s.exports}}]);