(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{cAcB:function(n,l,t){"use strict";t.r(l);var u=t("8Y7J"),i=t("VYMa");class e{constructor(n){this.viewContainerRef=n}}var o=t("/WaZ");class s{constructor(n,l){this.componentFactoryResolver=n,this.store=l,this.isSignUp=!0,this.isLoading=!1,this.error=null}ngOnInit(){this.storeSubscription=this.store.select("auth").subscribe(n=>{const{loading:l,authError:t}=n;this.isLoading=l,this.error=t,this.error&&this.showErrorAlert(this.error)})}ngOnDestroy(){this.storeSubscription&&this.storeSubscription.unsubscribe(),this.closeSubscription&&this.closeSubscription.unsubscribe()}onSwitchMode(){this.isSignUp=!this.isSignUp}onSubmit(n){if(n.invalid)return;this.isLoading=!0;const{email:l,password:t}=n.value;this.store.dispatch(this.isSignUp?new o.n({email:l,password:t}):new o.k({email:l,password:t})),n.reset()}onCloseAlert(){this.store.dispatch(new o.h)}showErrorAlert(n){const l=this.componentFactoryResolver.resolveComponentFactory(i.a),t=this.alertHost.viewContainerRef;t.clear();const u=t.createComponent(l);u.instance.message=n,this.closeSubscription=u.instance.close.subscribe(()=>{this.closeSubscription.unsubscribe(),t.clear()})}}class a{}var r=t("pMnS"),d=t("4BU0");class b{constructor(){}ngOnInit(){}}var c=u.kb({encapsulation:0,styles:[["@-webkit-keyframes lds-spinner{0%{opacity:1}100%{opacity:0}}@keyframes lds-spinner{0%{opacity:1}100%{opacity:0}}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{left:94px;top:48px;position:absolute;-webkit-animation:1s linear infinite lds-spinner;animation:1s linear infinite lds-spinner;background:#00aeec;width:12px;height:24px;border-radius:40%;-webkit-transform-origin:6px 52px;transform-origin:6px 52px}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-.9166666667s;animation-delay:-.9166666667s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){-webkit-transform:rotate(30deg);transform:rotate(30deg);-webkit-animation-delay:-.8333333333s;animation-delay:-.8333333333s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-.6666666667s;animation-delay:-.6666666667s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5){-webkit-transform:rotate(120deg);transform:rotate(120deg);-webkit-animation-delay:-.5833333333s;animation-delay:-.5833333333s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6){-webkit-transform:rotate(150deg);transform:rotate(150deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7){-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-.4166666667s;animation-delay:-.4166666667s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8){-webkit-transform:rotate(210deg);transform:rotate(210deg);-webkit-animation-delay:-.3333333333s;animation-delay:-.3333333333s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9){-webkit-transform:rotate(240deg);transform:rotate(240deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10){-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-.1666666667s;animation-delay:-.1666666667s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11){-webkit-transform:rotate(300deg);transform:rotate(300deg);-webkit-animation-delay:-83.3333333ms;animation-delay:-83.3333333ms}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12){-webkit-transform:rotate(330deg);transform:rotate(330deg);-webkit-animation-delay:0s;animation-delay:0s}.lds-spinner[_ngcontent-%COMP%]{position:relative;width:200px!important;height:200px!important;-webkit-transform:translate(-100px,-100px) scale(1) translate(100px,100px);transform:translate(-100px,-100px) scale(1) translate(100px,100px)}"]],data:{}});function m(n){return u.Db(0,[(n()(),u.mb(0,0,null,null,12,"div",[["class","lds-spinner m-auto"]],null,null,null,null,null)),(n()(),u.mb(1,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.mb(2,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.mb(3,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.mb(4,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.mb(5,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.mb(6,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.mb(7,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.mb(8,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.mb(9,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.mb(10,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.mb(11,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.mb(12,0,null,null,0,"div",[],null,null,null,null,null))],null,null)}var g=t("s7LF"),p=t("SVse"),v=t("DQLy"),h=u.kb({encapsulation:0,styles:[[""]],data:{}});function f(n){return u.Db(0,[(n()(),u.cb(0,null,null,0))],null,null)}function y(n){return u.Db(0,[(n()(),u.mb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),u.mb(1,0,null,null,1,"app-loading-spinner",[],null,null,null,m,c)),u.lb(2,114688,null,0,b,[],null,null)],function(n,l){n(l,2,0)},null)}function w(n){return u.Db(0,[(n()(),u.mb(0,0,null,null,33,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,t){var i=!0,e=n.component;return"submit"===l&&(i=!1!==u.vb(n,2).onSubmit(t)&&i),"reset"===l&&(i=!1!==u.vb(n,2).onReset()&&i),"ngSubmit"===l&&(i=!1!==e.onSubmit(u.vb(n,2))&&i),i},null,null)),u.lb(1,16384,null,0,g.D,[],null,null),u.lb(2,4210688,[["authForm",4]],0,g.t,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),u.yb(2048,null,g.b,null,[g.t]),u.lb(4,16384,null,0,g.s,[[4,g.b]],null,null),(n()(),u.mb(5,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u.mb(6,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(n()(),u.Bb(-1,null,["E-mail"])),(n()(),u.mb(8,0,null,null,8,"input",[["class","form-control"],["email",""],["for","email"],["name","email"],["ngModel",""],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var i=!0;return"input"===l&&(i=!1!==u.vb(n,9)._handleInput(t.target.value)&&i),"blur"===l&&(i=!1!==u.vb(n,9).onTouched()&&i),"compositionstart"===l&&(i=!1!==u.vb(n,9)._compositionStart()&&i),"compositionend"===l&&(i=!1!==u.vb(n,9)._compositionEnd(t.target.value)&&i),i},null,null)),u.lb(9,16384,null,0,g.c,[u.B,u.k,[2,g.a]],null,null),u.lb(10,16384,null,0,g.y,[],{required:[0,"required"]},null),u.lb(11,16384,null,0,g.d,[],{email:[0,"email"]},null),u.yb(1024,null,g.o,function(n,l){return[n,l]},[g.y,g.d]),u.yb(1024,null,g.p,function(n){return[n]},[g.c]),u.lb(14,671744,null,0,g.u,[[2,g.b],[6,g.o],[8,null],[6,g.p]],{name:[0,"name"],model:[1,"model"]},null),u.yb(2048,null,g.q,null,[g.u]),u.lb(16,16384,null,0,g.r,[[4,g.q]],null,null),(n()(),u.mb(17,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u.mb(18,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(n()(),u.Bb(-1,null,["Password"])),(n()(),u.mb(20,0,null,null,8,"input",[["autocomplete","password"],["class","form-control"],["for","password"],["minlength","6"],["name","password"],["ngModel",""],["required",""],["type","password"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var i=!0;return"input"===l&&(i=!1!==u.vb(n,21)._handleInput(t.target.value)&&i),"blur"===l&&(i=!1!==u.vb(n,21).onTouched()&&i),"compositionstart"===l&&(i=!1!==u.vb(n,21)._compositionStart()&&i),"compositionend"===l&&(i=!1!==u.vb(n,21)._compositionEnd(t.target.value)&&i),i},null,null)),u.lb(21,16384,null,0,g.c,[u.B,u.k,[2,g.a]],null,null),u.lb(22,16384,null,0,g.y,[],{required:[0,"required"]},null),u.lb(23,540672,null,0,g.n,[],{minlength:[0,"minlength"]},null),u.yb(1024,null,g.o,function(n,l){return[n,l]},[g.y,g.n]),u.yb(1024,null,g.p,function(n){return[n]},[g.c]),u.lb(26,671744,null,0,g.u,[[2,g.b],[6,g.o],[8,null],[6,g.p]],{name:[0,"name"],model:[1,"model"]},null),u.yb(2048,null,g.q,null,[g.u]),u.lb(28,16384,null,0,g.r,[[4,g.q]],null,null),(n()(),u.mb(29,0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u.mb(30,0,null,null,1,"button",[["class","btn btn-primary mr-3"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),u.Bb(31,null,[" "," "])),(n()(),u.mb(32,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.onSwitchMode()&&u),u},null,null)),(n()(),u.Bb(33,null,[" Switch to "," "]))],function(n,l){n(l,10,0,""),n(l,11,0,""),n(l,14,0,"email",""),n(l,22,0,""),n(l,23,0,"6"),n(l,26,0,"password","")},function(n,l){var t=l.component;n(l,0,0,u.vb(l,4).ngClassUntouched,u.vb(l,4).ngClassTouched,u.vb(l,4).ngClassPristine,u.vb(l,4).ngClassDirty,u.vb(l,4).ngClassValid,u.vb(l,4).ngClassInvalid,u.vb(l,4).ngClassPending),n(l,8,0,u.vb(l,10).required?"":null,u.vb(l,16).ngClassUntouched,u.vb(l,16).ngClassTouched,u.vb(l,16).ngClassPristine,u.vb(l,16).ngClassDirty,u.vb(l,16).ngClassValid,u.vb(l,16).ngClassInvalid,u.vb(l,16).ngClassPending),n(l,20,0,u.vb(l,22).required?"":null,u.vb(l,23).minlength?u.vb(l,23).minlength:null,u.vb(l,28).ngClassUntouched,u.vb(l,28).ngClassTouched,u.vb(l,28).ngClassPristine,u.vb(l,28).ngClassDirty,u.vb(l,28).ngClassValid,u.vb(l,28).ngClassInvalid,u.vb(l,28).ngClassPending),n(l,30,0,u.vb(l,2).invalid),n(l,31,0,t.isSignUp?"Sign Up":"Login"),n(l,33,0,t.isSignUp?"Login":"Sign Up")})}function C(n){return u.Db(0,[u.zb(671088640,1,{alertHost:0}),(n()(),u.mb(1,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(n()(),u.mb(2,0,null,null,6,"div",[["class","col"]],null,null,null,null,null)),(n()(),u.cb(16777216,null,null,1,null,f)),u.lb(4,16384,[[1,4]],0,e,[u.M],null,null),(n()(),u.cb(16777216,null,null,1,null,y)),u.lb(6,16384,null,0,p.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(n()(),u.cb(16777216,null,null,1,null,w)),u.lb(8,16384,null,0,p.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,6,0,t.isLoading),n(l,8,0,!t.isLoading)},null)}function k(n){return u.Db(0,[(n()(),u.mb(0,0,null,null,1,"app-auth",[],null,null,null,C,h)),u.lb(1,245760,null,0,s,[u.j,v.m],null,null)],function(n,l){n(l,1,0)},null)}var M=u.ib("app-auth",s,k,{},{},[]),P=t("iInd"),_=t("PCNd");t.d(l,"AuthModuleNgFactory",function(){return O});var O=u.jb(a,[],function(n){return u.tb([u.ub(512,u.j,u.X,[[8,[r.a,d.a,M]],[3,u.j],u.v]),u.ub(4608,g.B,g.B,[]),u.ub(4608,p.l,p.k,[u.s,[2,p.s]]),u.ub(1073742336,g.A,g.A,[]),u.ub(1073742336,g.m,g.m,[]),u.ub(1073742336,P.s,P.s,[[2,P.y],[2,P.o]]),u.ub(1073742336,p.c,p.c,[]),u.ub(1073742336,_.a,_.a,[]),u.ub(1073742336,a,a,[]),u.ub(1024,P.m,function(){return[[{path:"",component:s}]]},[])])})}}]);