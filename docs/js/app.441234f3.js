(function(e){function t(t){for(var n,i,s=t[0],c=t[1],u=t[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var m=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("8a23"),o=a.n(n);o.a},2565:function(e,t,a){"use strict";var n=a("a5e6"),o=a.n(n);o.a},"3a19":function(e,t,a){},"54dc":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("app-navigation"),a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("router-view")],1)],1),a("v-footer",{attrs:{app:""}},[a("span",[e._v("© PokéTrackr 2019")])])],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("v-navigation-drawer",{attrs:{persistent:"",app:"",clipped:"","disable-resize-watcher":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-pokeball")])],1),a("v-list-item-content",[a("router-link",{staticStyle:{textDecoration:"none",color:"white"},attrs:{to:"/"}},[a("v-list-item-title",[e._v("Pokemon")])],1)],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-view-dashboard")])],1),a("v-list-item-content",[a("router-link",{staticStyle:{textDecoration:"none",color:"white"},attrs:{to:"/team"}},[a("v-list-item-title",[e._v("Team Summary")])],1)],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-trophy-outline")])],1),a("v-list-item-content",[a("router-link",{staticStyle:{textDecoration:"none",color:"white"},attrs:{to:"/leaderboard"}},[a("v-list-item-title",[e._v("Leaderboard")])],1)],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-information-outline")])],1),a("v-list-item-content",[a("router-link",{staticStyle:{textDecoration:"none",color:"white"},attrs:{to:"/about"}},[a("v-list-item-title",[e._v("About")])],1)],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"","clipped-left":""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("PokéTrackr")]),a("v-spacer",{staticClass:"hidden-sm-and-down"}),a("div",{staticClass:"hidden-sm-and-down"},[a("v-btn",{on:{click:function(t){return e.login()}}},[e._v("Sign In")])],1),a("div",[a("v-btn",{on:{click:function(t){return e.logout()}}},[e._v(" Logout")])],1)],1)],1)},s=[],c=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),u=a("2f62");function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){Object(c["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p={name:"AppNavigation",data:function(){return{appTitle:"PokéTrackr",drawer:!0}},computed:l({isAuthenticated:function(){return this.$store.getters.isAuthenticated}},Object(u["b"])(["signInAction","signOutAction"])),methods:{login:function(){this.$store.dispatch("signInAction")},logout:function(){this.$store.dispatch("signOutAction")}}},d=p,f=a("2877"),h=a("6544"),v=a.n(h),A=a("40dc"),k=a("5bc1"),g=a("8336"),b=a("132d"),P=a("8860"),w=a("da13"),x=a("1800"),y=a("5d23"),T=a("f774"),O=a("2fa4"),L=a("2a7f"),C=Object(f["a"])(d,i,s,!1,null,"b0ce6e24",null),j=C.exports;v()(C,{VAppBar:A["a"],VAppBarNavIcon:k["a"],VBtn:g["a"],VIcon:b["a"],VList:P["a"],VListItem:w["a"],VListItemAction:x["a"],VListItemContent:y["a"],VListItemTitle:y["c"],VNavigationDrawer:T["a"],VSpacer:O["a"],VToolbarTitle:L["a"]});var D={name:"App",components:{AppNavigation:j},props:{source:String},data:function(){return{drawer:null}},created:function(){this.$vuetify.theme.dark=!0}},_=D,I=(a("034f"),a("7496")),V=a("a523"),U=a("a75b"),E=a("553a"),R=Object(f["a"])(_,o,r,!1,null,null,null),B=R.exports;v()(R,{VApp:I["a"],VContainer:V["a"],VContent:U["a"],VFooter:E["a"]});var S=a("8c4f"),M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"select-pokemon-page"},[a("div",{staticClass:"select-pokemon-content"},[a("pokemon-list",{attrs:{"pokemon-list":e.statePokemonDataList,team:e.stateTeamPokemonList,pokedex:e.statePokedexList},on:{deleteFromTeam:e.deleteFromTeam,addToTeam:e.addToTeam}}),a("team-summary",{attrs:{"pokemon-list":e.statePokemonDataList,team:e.stateTeamPokemonList},on:{addToTeam:e.addToTeam,eraseTeamPokemonList:e.eraseTeamPokemonList}})],1)])},Q=[],F=(a("d3b7"),a("96cf"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pokemon-list"},[a("h3",[e._v("Choose your Pokémon")]),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg11:""}},[a("v-row",e._l(e.pokemonList,(function(t,n){return a("v-col",{key:t.url,attrs:{cols:"12",sm:"3"}},[a("v-card",{staticClass:"pokemon-list-item mx-auto ml-6",attrs:{"min-width":"250","max-width":"250","min-height":"250","max-height":"250",outlined:""}},[a("v-card-text",{staticClass:"text-center"},[a("div",{staticClass:"pokeIndex mt-3"},[e._v(" "+e._s(n+1+". "))]),(e.team.includes(t.name),a("i")),a("v-responsive",{staticClass:"pt-4"},[a("a",[e.caught?e._e():a("img",{attrs:{src:e.uimage,width:"24px",height:"24px",align:"left"},on:{click:function(t){return e.addToPokedex(n)}}}),e.caught?a("img",{attrs:{src:e.cimage,width:"24px",height:"24px",align:"left"},on:{click:function(t){return e.addToPokedex(n)}}}):e._e()]),a("img",{key:t.url,attrs:{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(n+1)+".png",width:"130px",alt:"Pokemon"}})]),a("div",{staticClass:"subheading",staticStyle:{"font-size":"20px"}},[e._v(e._s(t.name))]),a("v-list-item-subtitle"),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.team.includes(t.name),expression:"!team.includes(pokemon.name)"}],class:{"is-disabled":6===e.teamListLength},attrs:{text:""},on:{click:function(a){return e.setTeam(t.name)}}},[e._v("Add to Team")]),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.team.includes(t.name),expression:"team.includes(pokemon.name)"}],staticClass:"removeBtn",attrs:{text:""},on:{click:function(a){return e.setTeam(t.name)}}},[e._v("Remove")])],1)],1)],1)],1)})),1)],1)],1)],1)}),N=[],W=(a("caad"),a("c975"),a("2532"),{name:"PokemonList",data:function(){return{caught:!1,uimage:a("e38e"),cimage:a("f8e0")}},props:{pokemonList:{type:Array,required:!0},team:{type:Array,required:!0},pokedex:{type:Array,required:!0}},computed:{teamListLength:function(){return this.team.length},pokedexLength:function(){return this.pokedex.length}},methods:{setTeam:function(e){if(this.team.includes(e)){var t=this.team.indexOf(e);this.$emit("deleteFromTeam",t)}else this.teamListLength<6&&this.$emit("addToTeam",e)},addToPokedex:function(e){this.$emit("addToPokedex",e),this.caught?this.caught=!1:this.caught=!0}}}),Z=W,Y=(a("57e6"),a("b0af")),z=a("99d9"),G=a("62ad"),q=a("0e8f"),J=a("a722"),K=a("6b53"),X=a("0fd9"),H=Object(f["a"])(Z,F,N,!1,null,"3b0dbdb2",null),$=H.exports;v()(H,{VBtn:g["a"],VCard:Y["a"],VCardActions:z["a"],VCardText:z["b"],VCol:G["a"],VFlex:q["a"],VLayout:J["a"],VListItemSubtitle:y["b"],VResponsive:K["a"],VRow:X["a"]});var ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-card",{staticClass:"mr-5",attrs:{width:"400px"}},[a("div",{staticClass:"ml-5 mt-5"},[a("br"),a("h2",[e._v("Your current Pokémon team")]),a("br"),e._l(e.team,(function(t,n){return a("p",{key:n,staticClass:"chosen-pokemon",staticStyle:{"font-size":"20px"}},[e._v(" "+e._s(t)+" ")])})),e.teamListLength>1&&e.teamListLength<e.maximumList?a("p",[e._v(" You can add "+e._s(e.maximumList-e.teamListLength)+" more Pokémon ")]):e._e(),e.teamListLength>5?a("p",[e._v(" Your list is full! ")]):e._e(),e.teamListLength>0?a("p",[a("button",{staticClass:"clearBtn",on:{click:e.emptyTeamPokemonList}},[e._v(" Clear team ")])]):e._e(),e.teamListLength>0?a("v-btn",[a("router-link",{attrs:{to:"/team"}},[e._v(" View your Pokémon team ")])],1):e._e()],2)]),a("v-card",{staticClass:"mr-5",attrs:{width:"400px"}},[a("div",{staticClass:"text-center ml-5 mt-6 mr-5"},[a("h2",[e._v("Challenges")]),a("br"),a("h4",[e._v("Catch 5 Pokémon")]),a("br"),a("v-progress-linear",{attrs:{color:"amber",height:"20",reactive:""},model:{value:e.challenge1,callback:function(t){e.challenge1=t},expression:"challenge1"}}),a("div",{staticClass:"text-center"}),a("br"),a("h4",[e._v("Obtain a legendary Pokémon")]),a("v-progress-circular",{attrs:{value:0}}),a("h4",[e._v("Catch a Pikachu")]),a("v-progress-circular",{attrs:{value:100,color:"amber"}})],1)])],1)},te=[],ae=(a("b0c0"),{name:"TeamSummary",props:{pokemonList:{type:Array,required:!0},team:{type:Array,required:!0}},data:function(){return{maximumList:6,challenge1:60}},computed:{teamListLength:function(){return this.team.length}},methods:{startInterval:function(){var e=this,t=window.setInterval(a,500);function a(){e.team.ListLength<e.maximumList?e.pickRandomPokemon():clearInterval(t)}},pickRandomPokemon:function(){var e=this.pokemonList.filter((function(e){return!this.team.includes(e.name)}),this),t=Math.floor(Math.random()*Math.floor(e.length));this.$emit("addTeam",e[t].name)},emptyTeamPokemonList:function(){this.$emit("eraseTeamPokemonList")}}}),ne=ae,oe=(a("2565"),a("490a")),re=a("8e36"),ie=Object(f["a"])(ne,ee,te,!1,null,"f56eace0",null),se=ie.exports;function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(a),!0).forEach((function(t){Object(c["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}v()(ie,{VBtn:g["a"],VCard:Y["a"],VContainer:V["a"],VProgressCircular:oe["a"],VProgressLinear:re["a"]});var me={components:{PokemonList:$,TeamSummary:se},computed:ue({},Object(u["c"])(["statePokemonDataList","stateTeamPokemonList","statePokedexList"])),created:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.getPokemonData());case 2:e=t.sent,this.setPokemonData(e);case 4:case"end":return t.stop()}}),null,this)},methods:ue({getPokemonData:function(){var e,t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(fetch("https://pokeapi.co/api/v2/pokemon?limit=151"));case 2:return e=a.sent,a.next=5,regeneratorRuntime.awrap(e.json());case 5:return t=a.sent,a.abrupt("return",t.results);case 7:case"end":return a.stop()}}))}},Object(u["b"])(["setPokemonData","addToTeam","deleteFromTeam","eraseTeamPokemonList","addToPokedex"]))},le=me,pe=(a("920b"),Object(f["a"])(le,M,Q,!1,null,"5a16e081",null)),de=pe.exports,fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"overview-team-pokemon__title"},[e._v(" Your Pokémon team ")]),a("router-link",{attrs:{to:"/"}},[e._v(" Go back ")]),a("div",{staticClass:"overview-team-pokemon"},e._l(e.stateTeamPokemonList,(function(e,t){return a("pokemon-card",{key:t,attrs:{"pokemon-name":e}})})),1)],1)},he=[],ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"mb-2",attrs:{width:"90%"}},[e.pokemonData&&e.pokemonDescription?a("div",[a("div",{staticClass:"ml-6 mr-6"},[a("img",{attrs:{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+e.pokemonData.id+".png",alt:e.pokemonData.name,width:"120px"}})]),a("div",{staticClass:"pokemon-card__text ml-5 mr-5"},[a("p",[e._v("Name: "+e._s(e.capitalizeFirst(e.pokemonData.name)))]),a("p",[e._v("No. "+e._s(e.pokemonData.id))]),a("p",[e._v(" Type: "),e._l(e.pokemonData.types,(function(t,n){return a("span",{key:"type"+n},[e._v(" "+e._s(e.capitalizeFirst(t.type.name))+", ")])}))],2),a("p",[e._v(e._s(e.pokemonDescription[0].flavor_text))])])]):e._e()])},Ae=[],ke=(a("fb6a"),{name:"PokemonCard",props:{pokemonName:{type:String,default:""}},data:function(){return{pokemonData:null,pokemonDescription:null}},created:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.pokemonName){e.next=7;break}return e.next=3,regeneratorRuntime.awrap(this.getDataSpecificPokemon(this.pokemonName));case 3:return this.pokemonData=e.sent,e.next=6,regeneratorRuntime.awrap(this.getPokemonDescription(this.pokemonData));case 6:this.pokemonDescription=e.sent;case 7:case"end":return e.stop()}}),null,this)},methods:{getDataSpecificPokemon:function(e){var t,a;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(fetch("https://pokeapi.co/api/v2/pokemon/".concat(e,"/")));case 2:return t=n.sent,n.next=5,regeneratorRuntime.awrap(t.json());case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}))},getPokemonDescription:function(e){var t,a;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(fetch("".concat(e.species.url)));case 2:return t=n.sent,n.next=5,regeneratorRuntime.awrap(t.json());case 5:return a=n.sent,n.abrupt("return",a.flavor_text_entries.filter((function(e){return"en"===e.language.name})));case 7:case"end":return n.stop()}}))},capitalizeFirst:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}}),ge=ke,be=(a("9219"),Object(f["a"])(ge,ve,Ae,!1,null,"883f9fee",null)),Pe=be.exports;function we(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function xe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?we(Object(a),!0).forEach((function(t){Object(c["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):we(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}v()(be,{VCard:Y["a"]});var ye={components:{PokemonCard:Pe},computed:xe({},Object(u["c"])(["stateTeamPokemonList"]))},Te=ye,Oe=(a("8ae0"),Object(f["a"])(Te,fe,he,!1,null,"4d5f2af7",null)),Le=Oe.exports,Ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Leaderboard")},je=[],De=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"leaderboard",staticStyle:{width:"1000px",height:"90%"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.users}})],1)},_e=[],Ie={name:"Leaderboard",data:function(){return{headers:[{text:"Name",align:"left",sortable:!1,value:"name"},{text:"Pokemon Caught",value:"pokedex"},{text:"Rank",value:"rank"}],users:[{name:"Eric L",pokedex:151,rank:"Pokemon Master"},{name:"Ash Ketchum",pokedex:130,rank:"Ace Trainer"},{name:"Walter White",pokedex:99,rank:"Ace Trainer"},{name:"Billy Rae Cyrus",pokedex:70,rank:"Cool Trainer"},{name:"John Doe",pokedex:50,rank:"Youngster"},{name:"Will Smith",pokedex:25,rank:"Schoolkid"},{name:"Michael Jordan",pokedex:23,rank:"Jr. Trainer"},{name:"Donald Trump",pokedex:1,rank:"Preschooler"}]}}},Ve=Ie,Ue=a("8fea"),Ee=Object(f["a"])(Ve,De,_e,!1,null,null,null),Re=Ee.exports;v()(Ee,{VDataTable:Ue["a"]});var Be={components:{Leaderboard:Re}},Se=Be,Me=Object(f["a"])(Se,Ce,je,!1,null,null,null),Qe=Me.exports,Fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("About")},Ne=[],We=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("img",{staticClass:"pokeimg",attrs:{src:e.aboutimg}}),a("v-card",{attrs:{height:"580",width:"400"}},[a("v-card-text",{staticClass:"mt-6"},[a("h3",[e._v("Hello!"),a("br"),e._v(" My name is Eric and I am a student at Waukesha County Technical College. This Pokémon app was made using Vuex and the data is from PokéAPI, a free resource for Pokémon data!"),a("br"),a("a",{attrs:{href:"https://pokeapi.co/"}},[e._v("https://pokeapi.co/")])])])],1)],1)],1)},Ze=[],Ye={name:"About",data:function(){return{aboutimg:a("f69a")}}},ze=Ye,Ge=(a("84bf"),Object(f["a"])(ze,We,Ze,!1,null,"19544632",null)),qe=Ge.exports;v()(Ge,{VCard:Y["a"],VCardText:z["b"],VRow:X["a"]});var Je={components:{About:qe}},Ke=Je,Xe=Object(f["a"])(Ke,Fe,Ne,!1,null,null,null),He=Xe.exports;n["a"].use(S["a"]);var $e=[{path:"/",name:"home",component:de},{path:"/team",name:"team",component:Le},{path:"/leaderboard",name:"leaderboard",component:Qe},{path:"/about",name:"about",component:He}],et=new S["a"]({mode:"history",base:"/",routes:$e}),tt=et,at=(a("a434"),a("8aa5")),nt={apiKey:"AIzaSyB8X0VGjQs0C8VOa7MXmusmazcFCiTHqzc",authDomain:"pokedex-b6c10.firebaseapp.com",databaseURL:"https://pokedex-b6c10.firebaseio.com",projectId:"pokedex-b6c10",storageBucket:"pokedex-b6c10.appspot.com",messagingSenderId:"874300013713",appId:"1:874300013713:web:f493d241613ddcdf3c1330"};at["initializeApp"](nt);var ot=at,rt=a("0ff2");n["a"].prototype.$firebase=ot,n["a"].use(u["a"]),n["a"].use(rt),n["a"].use(ot);var it=new u["a"].Store({modules:{firebase:ot},state:{statePokemonDataList:[],stateTeamPokemonList:[],statePokedexList:[],user:{data:null}},actions:{setPokemonData:function(e,t){e.commit("setPokemonData",t)},setTeamPokemonList:function(e,t){e.commit("setTeamPokemonList",t)},addToTeam:function(e,t){e.commit("addToTeam",t)},deleteFromTeam:function(e,t){e.commit("deleteFromTeam",t)},eraseTeamPokemonList:function(e){e.commit("eraseTeamPokemonList")},addToPokedex:function(e,t){e.commit("Pokedex",t)},signInAction:function(e,t){e.commit;var a=new ot.auth.GoogleAuthProvider;ot.auth().signInWithPopup(a).then((function(e){var a=e.user;if(a){var n=a.displayName,o=a.email,r=a.uid,i={displayName:n,email:o,uid:r};console.log(n),console.log(o),console.log(r),t.commit("setUser",i)}else t.commit("setUser",{})})).catch((function(e){console.error(e)}))},signOutAction:function(){ot.auth().signOut().then((function(){})).catch((function(e){console.log(e)}))},setUser:function(e,t){e.commit("setUser",t)}},mutations:{setPokemonData:function(e,t){e.statePokemonDataList=t},setTeamPokemonList:function(e,t){e.stateTeamPokemonList=t},addToTeam:function(e,t){e.stateTeamPokemonList.push(t)},deleteFromTeam:function(e,t){e.stateTeamPokemonList.splice(t,1)},eraseTeamPokemonList:function(e){e.stateTeamPokemonList=[]},addToPokedex:function(e,t){e.statePokedexList.push(t)},setUser:function(e,t){e.user=t},removeUser:function(e){e.user=null}},getters:{isLoggedIn:function(e){return"uid"in e.user},allPokemon:function(e){e.stateTeamPokemonList},pokedex:function(e){e.statePokedexList},status:function(e){return e.status},user:function(e){return e.user},error:function(e){return e.error}}}),st=a("f309");n["a"].use(st["a"]);var ct=new st["a"]({});n["a"].config.productionTip=!1,n["a"].use(rt),new n["a"]({router:tt,store:it,vuetify:ct,render:function(e){return e(B)}}).$mount("#app")},"57e6":function(e,t,a){"use strict";var n=a("3a19"),o=a.n(n);o.a},"84bf":function(e,t,a){"use strict";var n=a("d770"),o=a.n(n);o.a},"8a23":function(e,t,a){},"8ae0":function(e,t,a){"use strict";var n=a("54dc"),o=a.n(n);o.a},"920b":function(e,t,a){"use strict";var n=a("9940"),o=a.n(n);o.a},9219:function(e,t,a){"use strict";var n=a("fe7a"),o=a.n(n);o.a},9940:function(e,t,a){},a5e6:function(e,t,a){},d770:function(e,t,a){},e38e:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjDBABKSZeZAkzAAACPElEQVRIx53VS0iUURQH8J8S5GQ+2lQKUaZiqaFBVLSqdgVtgoqsbYtW7WpTGD11cNOu1KBFGUSboMcmapfVxhdRoFQ+0pEsIhx1poUtZsz0+yadzuqe8z//c+8995xzc4RJoUP2qrNJMX74rMcLT/wMuuYELFXOOi5iQKcxo3KUKLFHuWkdmvX7h0S0SJpw3tYAVu2CCUlReZnoFfpMu6gw4wZFLpnWozwMrDduyA5LyU7DYuqDu4/rsnZJOqzVLbbwFHm6jdiwLDqUGtQnMm9oMWPbsulQJyE6p1RJasqKDlFJlanlbaMKsg5QaEx7ahF3KWs6XBVXwAmzIWUDW93w3CrHrA/Fa8w6Rpt3ofBRU4Y0yfXY/gxneO8Wbz0IgbaIu2tlWttoQnWI10Ovc5UZCIFOm3BKIq2NijsT4tWvbIVCB1QEoP0emf6j/fLMEWtwzyOXVaXtlYpyM9wux0IkYwfy1bUQa7tBq/5o+Ya1hnhdN86b0CTWSuhIh8h336QtoUnspDXDM56UMOSOO4bNOBzq88FNGjIWUo02vXq1hj4htWYdTZXyZf8j18StTiVs7L+aKaYttayU1Jx1gBaJ+fqJSqjLir594QzJ0+VLViNtSO/fI41yMd3WLYu+TreYzYvNdWKG7VqSvtuIWPiFy/WYcUVxRnKxq2Z0BXefk4iopG8a1QSwWo2+S2ha2FjBz7XSOQ0iPnplzChKldqjzJQOzYunRzAAFDhon3pl6e/9ky4vPTUZdP0NsIGefdCn1jIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTItMTZUMDE6NDE6MzgrMDA6MDAuGwqiAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTEyLTE2VDAxOjQxOjM4KzAwOjAwX0ayHgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},f69a:function(e,t,a){e.exports=a.p+"img/wall.47a12856.jpg"},f8e0:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADdAAAA3QFwU6IHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAVxQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAgAABAQECAUFBAQECAUFBgYGCwcIAwMDCAQEAgICAwMDAwMDAgICBQMDBQMDBQIDFBQUHx8fDAwMDw8PFhYWJiYmAwMDBQUFBwMEEgYIFQcKHAkNKAwSAAAAAwICBAICBAQECAgICQgICgQFEA8PEgUIEwUIGhoaHgkNJSQlLQoRLS0tLhIYMA0UPDw8Pj4+QkBAQkJCQ0FBRkZGSUlJTU1NTxIeT09PUBIfVBMgVlZWWBQiWUxPXRonXl5eYGBgZGRkaWlpa2trbGxscBkrchksc3NzdBoteRsve3h4fxwxgB0xgx0yix81kZGRlCE5pqKiqKioqyZCrKysr6+vsbGxtra2uLi4vb29vr6+wsLCxixMxk1mx8fHyC1Nyy1OzMvLzMzM0C5Q09PT1C9R1M7P2TFT4DJW5TNY6jRa8TZd90Vp/zlieDmXlQAAACR0Uk5TAAYXLUaClJXEx8nM3+Tn6vX19vf3+Pn6+vv7+/v9/f7+/v7+QrrXDAAAAbJJREFUGBl1wQtXEkEYBuB3ht3hDsrV+wU3Iy28ZFEqpBZihpKpZWKaRbZ+ZErz/89p5TAjCvs8uMMM4Q8nk2G/MBi6cW/CmtuoHBxUNuashJfjPmamJvYbsq2xP5EyGTrw4PheU3Zo7o0HOTRPNHMhH7jIRD1o49GlG9nlZinK0cKCmWvZw3UmyHDLnL6UPV1Om3Dw1K50sZviALyTTemiOekFWKIqXVUTDIbVkNpV5d2/H02pNSwDYkpqX2cev6e3P+WdKQH/mlSuZl5+I6Lfz/9KZc2PcFUqHx59J4f95JNUqmEkFwrK0xfU8upZ4c0v+bngWEgiNp9XZovUUpzNv/7y52PeMR9DqExKKWeTw86VSCmH4Fsm5SS7ahPZq9kTUpZ9EAOkHWZzxWIue0jagIBh1Ug7XV9cXD8lrWYZYP1lclXuZ4AYqpOL+pAAwOOb5GIzzuEwR4+pp+NRE7dYIH1GPZylAwwtPDJyTl3ORyIcbZ5I+ogeOEpHPNB4YGyrTh3qW2MBjg7MjA9u16ittj0YNxnu46LPGl4p7eyUVoatPsHRjRnCF4rFQj5hMGj/AUmzGvT1wd+dAAAAAElFTkSuQmCC"},fe7a:function(e,t,a){}});
//# sourceMappingURL=app.441234f3.js.map