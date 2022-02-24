var url = "https://raw.githubusercontent.com/d13571/datafile/main/Best%20Selling%20Video%20Games.csv";

var gamename = getColumn(url,1);
var sales = getColumn(url,2);
var platforms = getColumn(url,3);
var initialreleasedate =getColumn(url,4);
var developer = getColumn(url,5);
var publisher = getColumn(url,6);

//if the game,developer and publisher match the selected one
//if yes push it into a list
//print the list
function getsales(selectedgame,selecteddeveloper,selectedpublisher){
  var matchingsales = [];
  var matchingname = [];

  for(i=0; i<gamename.length; i++){
    if((gamename[i]==selectedgame)&&

(developer[i]==selecteddeveloper)&&(publisher[i]==selectedpublisher)){

      matchingname.push(gamename[i])
      matchingsales.push(sales[i])
    }
  }

  console.log(matchingname);
  console.log(matchingsales);
}

//decide if the release date and platform is the selected one
//if yes push it into a list if no do nothing
//print the list 
function getgame(releasedate,selectedplatform){
  var matchingname = [];
  
  for(i=0; i<gamename.length; i++){
    
    if((platforms[i] == selectedplatform)&&(initialreleasedate[i].includes(releasedate))){
      
      matchingname.push(gamename[i]);
    }
  }
 
  console.log(matchingname);
}
//if the sales are greater than the variable best sale
//if year change the best sale to the current numebr and the gamename to the current name
//print the result
function bestsellinggame(){
  var matchingname = "";
  var bestselling =0;

    for(i=0; i<gamename.length; i++){
    if(Number(sales[i])>bestselling){

      bestselling=sales[i]; 
      matchingname=gamename[i];

    }
      
  }
  console.log(matchingname);
  console.log(bestselling);

}

//determine if the developer is a unique one
//if yes push it into a list
//print the list
function getdeveloper() {
  var uniquedeveloper = [];

  for(i=0; i<developer.length; i++){

    if(!uniquedeveloper.includes(developer[i]))
    uniquedeveloper.push(developer[i])
  }
  console.log(uniquedeveloper)

}

  // is the platfrom equals to the selected platform
// if yes push the platfrom into a list
//print the platform 
function platformgame(selectedplatform){
  var platform = [];
  for(i=0; i<platforms.length; i++){

    if(platforms[i]=selectedplatform){

      platform.push(gamename[i])

    }
  }
console.log(platform)

}
