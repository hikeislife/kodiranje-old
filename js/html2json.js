escapeBad=()=>{let a=document.querySelector("#insertf").value;const b=["\u0107","\u0111","\u0161","\u017E","\u010D","\u0160","\u0106","\u0110","\u017D","\u010C","\u010E","\xF4","\u03BB","\"","(\\r\\n|\\r|\\n)","\\/"],c=["\\u0107","\\u0111","\\u0161","\\u017E","\\u010D","\\u0160","\\u0106","\\u0110","\\u017D","\\u010C","\\u010E","\\u00F4","\\u03BB","\\\"","\\r\\n","\\/"];for(let d=0;d<b.length;d++)a=a.replace(RegExp(b[d],"g"),c[d]);const d=document.querySelector("#result");d.value=`${a}`},clearField=()=>{document.querySelector("#insertf").value="",document.querySelector("#result").value=""};