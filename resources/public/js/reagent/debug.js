// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__18209__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__18209 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18211__i = 0, G__18211__a = new Array(arguments.length -  0);
while (G__18211__i < G__18211__a.length) {G__18211__a[G__18211__i] = arguments[G__18211__i + 0]; ++G__18211__i;}
  args = new cljs.core.IndexedSeq(G__18211__a,0,null);
} 
return G__18209__delegate.call(this,args);};
G__18209.cljs$lang$maxFixedArity = 0;
G__18209.cljs$lang$applyTo = (function (arglist__18212){
var args = cljs.core.seq(arglist__18212);
return G__18209__delegate(args);
});
G__18209.cljs$core$IFn$_invoke$arity$variadic = G__18209__delegate;
return G__18209;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__18215__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__18215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18217__i = 0, G__18217__a = new Array(arguments.length -  0);
while (G__18217__i < G__18217__a.length) {G__18217__a[G__18217__i] = arguments[G__18217__i + 0]; ++G__18217__i;}
  args = new cljs.core.IndexedSeq(G__18217__a,0,null);
} 
return G__18215__delegate.call(this,args);};
G__18215.cljs$lang$maxFixedArity = 0;
G__18215.cljs$lang$applyTo = (function (arglist__18218){
var args = cljs.core.seq(arglist__18218);
return G__18215__delegate(args);
});
G__18215.cljs$core$IFn$_invoke$arity$variadic = G__18215__delegate;
return G__18215;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1541436518004
