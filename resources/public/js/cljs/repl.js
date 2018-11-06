// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18022){
var map__18023 = p__18022;
var map__18023__$1 = ((((!((map__18023 == null)))?(((((map__18023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18023):map__18023);
var m = map__18023__$1;
var n = cljs.core.get.call(null,map__18023__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18023__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5635__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5635__auto__)){
var ns = temp__5635__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18025_18047 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18026_18048 = null;
var count__18027_18049 = (0);
var i__18028_18050 = (0);
while(true){
if((i__18028_18050 < count__18027_18049)){
var f_18051 = cljs.core._nth.call(null,chunk__18026_18048,i__18028_18050);
cljs.core.println.call(null,"  ",f_18051);


var G__18052 = seq__18025_18047;
var G__18053 = chunk__18026_18048;
var G__18054 = count__18027_18049;
var G__18055 = (i__18028_18050 + (1));
seq__18025_18047 = G__18052;
chunk__18026_18048 = G__18053;
count__18027_18049 = G__18054;
i__18028_18050 = G__18055;
continue;
} else {
var temp__5635__auto___18056 = cljs.core.seq.call(null,seq__18025_18047);
if(temp__5635__auto___18056){
var seq__18025_18057__$1 = temp__5635__auto___18056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18025_18057__$1)){
var c__4351__auto___18058 = cljs.core.chunk_first.call(null,seq__18025_18057__$1);
var G__18059 = cljs.core.chunk_rest.call(null,seq__18025_18057__$1);
var G__18060 = c__4351__auto___18058;
var G__18061 = cljs.core.count.call(null,c__4351__auto___18058);
var G__18062 = (0);
seq__18025_18047 = G__18059;
chunk__18026_18048 = G__18060;
count__18027_18049 = G__18061;
i__18028_18050 = G__18062;
continue;
} else {
var f_18063 = cljs.core.first.call(null,seq__18025_18057__$1);
cljs.core.println.call(null,"  ",f_18063);


var G__18064 = cljs.core.next.call(null,seq__18025_18057__$1);
var G__18065 = null;
var G__18066 = (0);
var G__18067 = (0);
seq__18025_18047 = G__18064;
chunk__18026_18048 = G__18065;
count__18027_18049 = G__18066;
i__18028_18050 = G__18067;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18068 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18068);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18068)))?cljs.core.second.call(null,arglists_18068):arglists_18068));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18029_18069 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18030_18070 = null;
var count__18031_18071 = (0);
var i__18032_18072 = (0);
while(true){
if((i__18032_18072 < count__18031_18071)){
var vec__18033_18073 = cljs.core._nth.call(null,chunk__18030_18070,i__18032_18072);
var name_18074 = cljs.core.nth.call(null,vec__18033_18073,(0),null);
var map__18036_18075 = cljs.core.nth.call(null,vec__18033_18073,(1),null);
var map__18036_18076__$1 = ((((!((map__18036_18075 == null)))?(((((map__18036_18075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18036_18075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18036_18075):map__18036_18075);
var doc_18077 = cljs.core.get.call(null,map__18036_18076__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18078 = cljs.core.get.call(null,map__18036_18076__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18074);

cljs.core.println.call(null," ",arglists_18078);

if(cljs.core.truth_(doc_18077)){
cljs.core.println.call(null," ",doc_18077);
} else {
}


var G__18079 = seq__18029_18069;
var G__18080 = chunk__18030_18070;
var G__18081 = count__18031_18071;
var G__18082 = (i__18032_18072 + (1));
seq__18029_18069 = G__18079;
chunk__18030_18070 = G__18080;
count__18031_18071 = G__18081;
i__18032_18072 = G__18082;
continue;
} else {
var temp__5635__auto___18083 = cljs.core.seq.call(null,seq__18029_18069);
if(temp__5635__auto___18083){
var seq__18029_18084__$1 = temp__5635__auto___18083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18029_18084__$1)){
var c__4351__auto___18085 = cljs.core.chunk_first.call(null,seq__18029_18084__$1);
var G__18086 = cljs.core.chunk_rest.call(null,seq__18029_18084__$1);
var G__18087 = c__4351__auto___18085;
var G__18088 = cljs.core.count.call(null,c__4351__auto___18085);
var G__18089 = (0);
seq__18029_18069 = G__18086;
chunk__18030_18070 = G__18087;
count__18031_18071 = G__18088;
i__18032_18072 = G__18089;
continue;
} else {
var vec__18038_18090 = cljs.core.first.call(null,seq__18029_18084__$1);
var name_18091 = cljs.core.nth.call(null,vec__18038_18090,(0),null);
var map__18041_18092 = cljs.core.nth.call(null,vec__18038_18090,(1),null);
var map__18041_18093__$1 = ((((!((map__18041_18092 == null)))?(((((map__18041_18092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18041_18092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18041_18092):map__18041_18092);
var doc_18094 = cljs.core.get.call(null,map__18041_18093__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18095 = cljs.core.get.call(null,map__18041_18093__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18091);

cljs.core.println.call(null," ",arglists_18095);

if(cljs.core.truth_(doc_18094)){
cljs.core.println.call(null," ",doc_18094);
} else {
}


var G__18096 = cljs.core.next.call(null,seq__18029_18084__$1);
var G__18097 = null;
var G__18098 = (0);
var G__18099 = (0);
seq__18029_18069 = G__18096;
chunk__18030_18070 = G__18097;
count__18031_18071 = G__18098;
i__18032_18072 = G__18099;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5635__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5635__auto__)){
var fnspec = temp__5635__auto__;
cljs.core.print.call(null,"Spec");

var seq__18043 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18044 = null;
var count__18045 = (0);
var i__18046 = (0);
while(true){
if((i__18046 < count__18045)){
var role = cljs.core._nth.call(null,chunk__18044,i__18046);
var temp__5635__auto___18100__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5635__auto___18100__$1)){
var spec_18101 = temp__5635__auto___18100__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18101));
} else {
}


var G__18102 = seq__18043;
var G__18103 = chunk__18044;
var G__18104 = count__18045;
var G__18105 = (i__18046 + (1));
seq__18043 = G__18102;
chunk__18044 = G__18103;
count__18045 = G__18104;
i__18046 = G__18105;
continue;
} else {
var temp__5635__auto____$1 = cljs.core.seq.call(null,seq__18043);
if(temp__5635__auto____$1){
var seq__18043__$1 = temp__5635__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18043__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__18043__$1);
var G__18106 = cljs.core.chunk_rest.call(null,seq__18043__$1);
var G__18107 = c__4351__auto__;
var G__18108 = cljs.core.count.call(null,c__4351__auto__);
var G__18109 = (0);
seq__18043 = G__18106;
chunk__18044 = G__18107;
count__18045 = G__18108;
i__18046 = G__18109;
continue;
} else {
var role = cljs.core.first.call(null,seq__18043__$1);
var temp__5635__auto___18110__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5635__auto___18110__$2)){
var spec_18111 = temp__5635__auto___18110__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18111));
} else {
}


var G__18112 = cljs.core.next.call(null,seq__18043__$1);
var G__18113 = null;
var G__18114 = (0);
var G__18115 = (0);
seq__18043 = G__18112;
chunk__18044 = G__18113;
count__18045 = G__18114;
i__18046 = G__18115;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1541436393965
