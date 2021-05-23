//Create variables here
var dog,sadDog,happyDog;
var foodObj;
var foods , foodStock;
var fedTime , lastFed , feed , addFood;

function preload(){
  sadDog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");

	//load images here
}

function setup() {
  database = firebase = firebase.database()
	createCanvas(1000, 400);
  
  foodObj = new Food();

  foodStock = database.ref('Food');
  foodStock.on("value" , readStock);

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("Feed the dog");
  feed.position(700 , 95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}



function draw() {  
  background(46,139,87);

  foodObj.display();

fedTime = database.ref("FeedTime");
  fedTime.on("value , function" (data))
    
  


 drawSprites()
  //add styles here
}

  function feedDog(){
    dog.addImage(happyDog);

    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
    database.ref('/').update({
      Food: foodObj.getFoodStock(),
      FeedTime : hour()
     })
  }

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food : foodS
  })
}
function readStock(data){


}
