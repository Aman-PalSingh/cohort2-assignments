/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let str1Obj = {};
  let str2Obj = {};
  if(str1.length != str2.length){
    return false;
  }
  for(let i = 0; i <str1.length;i++){
      if(str1Obj[str1[i]] == undefined){
        str1Obj[str1[i]] = 1;
      }else
      str1Obj[str1[i]] += 1;
    }
    for(let i = 0; i <str1.length;i++){
      if(str2Obj[str2[i]] == undefined){
        str2Obj[str2[i]] = 1;
      }else
      str2Obj[str2[i]] += 1;
    }
    console.log(str1Obj);
    console.log(str2Obj);
    for(let key in str1Obj){
       if(!str2Obj.hasOwnProperty(key) || str1Obj[key] != str2Obj[key]){
        return false
       }
    }
    return true;
}

module.exports = isAnagram;
//isAnagram("Debit Card", "Bad Credit");
