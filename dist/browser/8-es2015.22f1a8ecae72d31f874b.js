(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ZPmh:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),o=u("s7LF"),s=u("SVse"),r=u("9rNa"),a=u("sPvp");class b{constructor(l){this.store=l,this.editMode=!1}ngOnInit(){this.store.select("shoppingList").subscribe(l=>{-1!==l.selectedIngredientIndex?(this.editMode=!0,this.currentIngredient=l.selectedIngredient,this.form.setValue({name:this.currentIngredient.name,amount:this.currentIngredient.amount})):this.editMode=!1})}ngOnDestroy(){this.store.dispatch(new a.j)}onFormSubmit(){const{name:l,amount:n}=this.form.value,u=new r.a(l,n);this.store.dispatch(this.editMode?new a.l(u):new a.c(u)),this.clearForm()}clearForm(){this.editMode=!1,this.form.reset(),this.store.dispatch(new a.j)}onCancel(){this.clearForm()}onDelete(){this.store.dispatch(new a.f),this.clearForm()}}var c=u("DQLy"),d=t.kb({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.Db(0,[(l()(),t.mb(0,0,null,null,1,"button",[["class","btn btn-danger mr-1"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onDelete()&&t),t}),null,null)),(l()(),t.Bb(-1,null,["Delete"]))],null,null)}function g(l){return t.Db(0,[t.zb(671088640,1,{form:0}),(l()(),t.mb(1,0,null,null,41,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.mb(2,0,null,null,40,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.mb(3,0,null,null,39,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,i=l.component;return"submit"===n&&(e=!1!==t.vb(l,5).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.vb(l,5).onReset()&&e),"ngSubmit"===n&&(e=!1!==i.onFormSubmit()&&e),e}),null,null)),t.lb(4,16384,null,0,o.D,[],null,null),t.lb(5,4210688,[[1,4],["f",4]],0,o.t,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.yb(2048,null,o.b,null,[o.t]),t.lb(7,16384,null,0,o.s,[[4,o.b]],null,null),(l()(),t.mb(8,0,null,null,26,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),t.mb(9,0,null,null,11,"div",[["class","col-sm-5"]],null,null,null,null,null)),(l()(),t.mb(10,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.mb(11,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Name"])),(l()(),t.mb(13,0,null,null,7,"input",[["class","form-control"],["id","name"],["name","name"],["ngModel",""],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.vb(l,14)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.vb(l,14).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.vb(l,14)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.vb(l,14)._compositionEnd(u.target.value)&&e),e}),null,null)),t.lb(14,16384,null,0,o.c,[t.B,t.k,[2,o.a]],null,null),t.lb(15,16384,null,0,o.y,[],{required:[0,"required"]},null),t.yb(1024,null,o.o,(function(l){return[l]}),[o.y]),t.yb(1024,null,o.p,(function(l){return[l]}),[o.c]),t.lb(18,671744,null,0,o.u,[[2,o.b],[6,o.o],[8,null],[6,o.p]],{name:[0,"name"],model:[1,"model"]},null),t.yb(2048,null,o.q,null,[o.u]),t.lb(20,16384,null,0,o.r,[[4,o.q]],null,null),(l()(),t.mb(21,0,null,null,13,"div",[["class","col-sm-2"]],null,null,null,null,null)),(l()(),t.mb(22,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.mb(23,0,null,null,1,"label",[["for","amount"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Amount"])),(l()(),t.mb(25,0,null,null,9,"input",[["class","form-control"],["id","amount"],["name","amount"],["ngModel",""],["pattern","^[1-9]+[0-9]*$"],["required",""],["type","number"]],[[1,"required",0],[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.vb(l,26)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.vb(l,26).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.vb(l,26)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.vb(l,26)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.vb(l,27).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.vb(l,27).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.vb(l,27).onTouched()&&e),e}),null,null)),t.lb(26,16384,null,0,o.c,[t.B,t.k,[2,o.a]],null,null),t.lb(27,16384,null,0,o.v,[t.B,t.k],null,null),t.lb(28,16384,null,0,o.y,[],{required:[0,"required"]},null),t.lb(29,540672,null,0,o.w,[],{pattern:[0,"pattern"]},null),t.yb(1024,null,o.o,(function(l,n){return[l,n]}),[o.y,o.w]),t.yb(1024,null,o.p,(function(l,n){return[l,n]}),[o.c,o.v]),t.lb(32,671744,null,0,o.u,[[2,o.b],[6,o.o],[8,null],[6,o.p]],{name:[0,"name"],model:[1,"model"]},null),t.yb(2048,null,o.q,null,[o.u]),t.lb(34,16384,null,0,o.r,[[4,o.q]],null,null),(l()(),t.mb(35,0,null,null,7,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),t.mb(36,0,null,null,6,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.mb(37,0,null,null,1,"button",[["class","btn btn-success mr-1"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.Bb(38,null,["",""])),(l()(),t.mb(39,0,null,null,1,"button",[["class","btn btn-primary mr-1"],["type","reset"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onCancel()&&t),t}),null,null)),(l()(),t.Bb(-1,null,["Clear"])),(l()(),t.cb(16777216,null,null,1,null,m)),t.lb(42,16384,null,0,s.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,15,0,""),l(n,18,0,"name",""),l(n,28,0,""),l(n,29,0,"^[1-9]+[0-9]*$"),l(n,32,0,"amount",""),l(n,42,0,u.editMode)}),(function(l,n){var u=n.component;l(n,3,0,t.vb(n,7).ngClassUntouched,t.vb(n,7).ngClassTouched,t.vb(n,7).ngClassPristine,t.vb(n,7).ngClassDirty,t.vb(n,7).ngClassValid,t.vb(n,7).ngClassInvalid,t.vb(n,7).ngClassPending),l(n,13,0,t.vb(n,15).required?"":null,t.vb(n,20).ngClassUntouched,t.vb(n,20).ngClassTouched,t.vb(n,20).ngClassPristine,t.vb(n,20).ngClassDirty,t.vb(n,20).ngClassValid,t.vb(n,20).ngClassInvalid,t.vb(n,20).ngClassPending),l(n,25,0,t.vb(n,28).required?"":null,t.vb(n,29).pattern?t.vb(n,29).pattern:null,t.vb(n,34).ngClassUntouched,t.vb(n,34).ngClassTouched,t.vb(n,34).ngClassPristine,t.vb(n,34).ngClassDirty,t.vb(n,34).ngClassValid,t.vb(n,34).ngClassInvalid,t.vb(n,34).ngClassPending),l(n,37,0,t.vb(n,5).invalid),l(n,38,0,u.editMode?"Update":"Add")}))}class p{constructor(l){this.store=l}ngOnInit(){this.ingredients=this.store.select("shoppingList")}editItem(l){this.store.dispatch(new a.i(l))}}var v=t.kb({encapsulation:0,styles:[["li[_ngcontent-%COMP%]:hover{cursor:pointer}"]],data:{}});function h(l){return t.Db(0,[(l()(),t.mb(0,0,null,null,1,"li",[["class","list-group-item"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.editItem(l.context.index)&&t),t}),null,null)),(l()(),t.Bb(1,null,[" "," (",") "]))],null,(function(l,n){l(n,1,0,n.context.$implicit.name,n.context.$implicit.amount)}))}function f(l){return t.Db(0,[(l()(),t.mb(0,0,null,null,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.mb(1,0,null,null,7,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.mb(2,0,null,null,1,"app-shopping-edit",[],null,null,null,g,d)),t.lb(3,245760,null,0,b,[c.m],null,null),(l()(),t.mb(4,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.mb(5,0,null,null,3,"ul",[["class","list-group"]],null,null,null,null,null)),(l()(),t.cb(16777216,null,null,2,null,h)),t.lb(7,278528,null,0,s.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.xb(131072,s.b,[t.h])],(function(l,n){var u=n.component;l(n,3,0),l(n,7,0,t.Cb(n,7,0,t.vb(n,8).transform(u.ingredients)).ingredients)}),null)}function y(l){return t.Db(0,[(l()(),t.mb(0,0,null,null,1,"app-shopping-list",[],null,null,null,f,v)),t.lb(1,114688,null,0,p,[c.m],null,null)],(function(l,n){l(n,1,0)}),null)}var C=t.ib("app-shopping-list",p,y,{},{},[]),w=u("iInd");class I{}u.d(n,"ShoppingListModuleNgFactory",(function(){return q}));var q=t.jb(e,[],(function(l){return t.tb([t.ub(512,t.j,t.X,[[8,[i.a,C]],[3,t.j],t.v]),t.ub(4608,s.l,s.k,[t.s,[2,s.s]]),t.ub(4608,o.B,o.B,[]),t.ub(1073742336,w.s,w.s,[[2,w.y],[2,w.o]]),t.ub(1073742336,s.c,s.c,[]),t.ub(1073742336,o.A,o.A,[]),t.ub(1073742336,o.m,o.m,[]),t.ub(1073742336,I,I,[]),t.ub(1073742336,e,e,[]),t.ub(1024,w.m,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);