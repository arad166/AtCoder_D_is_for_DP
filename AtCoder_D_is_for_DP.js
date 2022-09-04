// ==UserScript==
// @name        AtCoder D is for DP
// @namespace   http://tampermonkey.net/
// @version     1.0
// @description D問題をDP問題にします(問題ページのみ)
// @author      arad
// @match       https://atcoder.jp/contests/*/tasks/*
// @license     MIT
// ==/UserScript==

var h2s = document.getElementsByClassName('h2');
var length = h2s.length;
for(var i = 0;i < length;i++){
    if(h2s[i].textContent.substring(4,5) === 'D'){
       h2s[i].innerHTML = h2s[i].innerHTML.replace('D - ','DP - ');
    }
}