let wordFunction=()=>{
let text="абажур Аббревиатура абитуриент абонемент аборт абракадабра абсент  авария авгур * автокефалия агальма агломерат аграф * адепт адмирал * ажиотаж бабочка багатель базилика байдарка байховый"
let symbol="*,"
let word =text.split("").filter(item=>symbol.indexOf(item)===-1).join("").toLowerCase().split(" ").filter(item=>item.length>5);
let wordLength=word.length
let randomIndex=Math.floor(Math.random()*wordLength)
let resout=word[randomIndex]
return resout
}
let word=wordFunction()
let letters = [];
let atemps =5;
document.querySelector(".start").onclick = function () {
word=wordFunction()
  let out =""
  
  for (let i = 0; i < word.length; i++) {
    out = out + "*";
  }
  document.querySelector(".start").innerHTML="новая игра"
  document.querySelector(".word").value =out
  letters = [];
  document.querySelector(".letter").value =""
  document.querySelector(".letter").focus()
  atemps=5
  document.querySelector("span").innerHTML=atemps
  document.querySelector(".letter").disabled=false
  document.querySelector(".check").disabled=false
};
document.querySelector(".check").onclick = function () {
  let letter = document.querySelector(".letter").value;
  let inGame = document.querySelector(".word").value;
  if (inGame != "") {
    console.log(inGame);
    letters.push(letter);
    let out = "";
    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      if (letters.indexOf(char) != -1) {
        out = out + char;
      } else {
        out = out + "*";
      }
      console.log(char);
    }
    if (word.indexOf(letter) == -1) {
      atemps = atemps - 1;
      document.querySelector("span").innerHTML = atemps;
    }
    document.querySelector(".word").value = out;
    if (word == out) {
      document.querySelector(".letter").disabled = true;
      document.querySelector(".check").disabled = true;
    }
  } else {
    document.querySelector("span").innerHTML = "";
  }
  if (atemps == 0) {
    document.querySelector(".letter").disabled = true;
    document.querySelector(".check").disabled = true;
  }

  document.querySelector(".letter").value = "";
  document.querySelector(".letter").focus();
  // console.log(out)
};


/*document.querySelector(".check").onclick = function () {
  let letter = document.querySelector(".letter").value
  let inGame =document.querySelector(".word").value
if (inGame!="") {
  console.log(inGame);
  letters.push(letter);
  let out = "";
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
   
    
      
      if (letters.indexOf(char)!=-1) {
        out = out + char;
      
    } else {
      out = out + "*";
    }
    console.log(char);
  }
  if (word.indexOf(letter)==-1) {
    atemps=atemps-1 
    document.querySelector("span").innerHTML=atemps
  }
  document.querySelector(".word").value=out
  if (word==out) {
    document.querySelector(".letter").disabled=true
  document.querySelector(".check").disabled=true
  }else{
    document.querySelector("span").innerHTML=atemps
  } 
  if(atemps==0){
    document.querySelector(".letter").disabled=true;
    document.querySelector("check").disabled=true;
}
document.querySelector(".letter").value="";
document.querySelector(".letter").focus();
}
}*/