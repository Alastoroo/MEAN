var filename = "index.js"

var hello = function(name){
  console.log("Hello " + name);
};

var intro = function(){
  console.log("Je suis un fichier node qui se nomme " + filename);
};

module.exports = {
  hello : hello,
  intro : intro
};
