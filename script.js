var url = "https://raw.githubusercontent.com/d13571/datafile/main/Best%20Selling%20Video%20Games.csv";

var gamename = getColumn(url,1);
var sales = getColumn(url,2);
var platforms = getColumn(url,3);
var initialreleasedate =getColumn(url,4);
var developer = getColumn(url,5);
var publisher = getColumn(url,6);


function getsales(selectedgame,selecteddeveloper,selectedpublisher){
  var matchingsales = [];
  var matchingname = [];
  for(i=0; i<gamename.length; i++){
    if((gamename[i]==selectedgame)&&(developer[i]==selecteddeveloper)&&(publisher[i]==selectedpublisher)){
      matchingname.push(gamename[i])
      matchingsales.push(sales[i])
    }
  }
  console.log(matchingname);
  console.log(matchingsales);
}


function getgame(releasedate,selectedplatform){
  var matchingname = [];
  for(i=0; i<gamename.length; i++){
    if((platforms[i] == selectedplatform)&&(initialreleasedate[i].includes(releasedate))){
      matchingname.push(gamename[i]);
    }
  }
  console.log(matchingname);
}

function bestsellinggame(){
  var matchingname = "";
  var bestselling =0;
    for(i=0; i<gamename.length; i++){
    if(Number(sales[i])>bestselling){
      console.log(sales[i]);
      bestselling=sales[i]; 
      matchingname=gamename[i];
    }
  }
  console.log(matchingname);
  console.log(bestselling);
}


function getdeveloper() {
  var uniquedeveloper = [];
  for(i=0; i<developer.length; i++){
    if(!uniquedeveloper.includes(developer[i]))
    uniquedeveloper.push(developer[i])
  }
  console.log(uniquedeveloper)
}

function getplatform(){
  var platform = [];
  for(i=0; i<developer.length; i++){
    if(!platform.includes(platforms[i]))
    platform.push(platforms[i])
  }
  console.log(platform)
}
