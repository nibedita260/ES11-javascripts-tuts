//String.matchAll() is a nice alternative to using RegExp.exec() in a while loop with the g flag enabled. That's all there's to it. 
//It returns an iterator (not to be confused with full-blown arrays) that contains all the match results - including capturing groups.

const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";
const resultsArr = [...str.matchAll(regexp)]; // convert iterator to an array

resultsArr[0]; // ["test1", "e", "st1", "1"]
resultsArr[0]; // ["test2", "e", "st2", "2"]

console.log(resultsArr)