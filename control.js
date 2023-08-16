
function openTab(evt, tabName) {
  // Lấy tất cả các tab và ẩn chúng
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  // Lấy tất cả các button và xóa lớp "active" khỏi chúng
  var buttons = document.getElementsByClassName("tablink");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(" active", "");
  }

  // Hiển thị tab được chọn và đặt lớp "active" cho button
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC01Id-GPBbZy7DxHVUMRE6eWkpcPi5UNo",
    authDomain: "ck-iot-ntd.firebaseapp.com",
    databaseURL: "https://ck-iot-ntd-default-rtdb.firebaseio.com/",
    projectId: "ck-iot-ntd",
    storageBucket: "ck-iot-ntd.appspot.com",
    messagingSenderId: "129614232746",
    appId: "1:129614232746:web:17eff593866611ca48a4d3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var sliderND = document.getElementById("sliderND");
var imgND = document.getElementById("imgND");
var valueND = document.getElementById("valueND")



firebase.database().ref("/CK-IoT/PhongKhach/nhietdo").on("value",function(snapshot){
    console.log(snapshot.val())
    var nd = snapshot.val();  
    valueND.innerHTML = nd;
    sliderND.value = nd;
    imgND.style.opacity = sliderND.value/100;
    console.log(nd);
  });


sliderND.oninput = function(){
  var newND = sliderND.value;
  firebase.database().ref("/CK-IoT/PhongKhach").update({"nhietdo":newND});
  valueND.innerHTML = newND;
  sliderND.style.background = "linear-gradient(to right, #4CAF50 0%, #4CAF50 " + this.value + "%, #ddd " + this.value + "%, #ddd 100%)";
  imgND.style.opacity = sliderND.value/100;
}

var sliderDA = document.getElementById("sliderDA");
var imgDA = document.getElementById("imgDA");
var valueDA = document.getElementById("valueDA")

firebase.database().ref("/CK-IoT/PhongKhach/doam").on("value",function(snapshot){
  console.log(snapshot.val())
  var da = snapshot.val();  
  valueDA.innerHTML = da;
  sliderDA.value = da;
  imgDA.style.opacity = sliderDA.value/100;
  console.log(da);
});


sliderDA.oninput = function(){
var newDA = sliderDA.value;
firebase.database().ref("/CK-IoT/PhongKhach").update({"doam":newDA});
valueDA.innerHTML = newDA;
imgDA.style.opacity = sliderDA.value/100;
}



var lock = document.getElementById("lock");
var wifi = document.getElementById("wifi");
var condition = document.getElementById("condition");
var vacuum = document.getElementById("vacuum");
var lamp = document.getElementById("lamp");
var tv = document.getElementById("tv");

firebase.database().ref("/CK-IoT/PhongKhach/lock").on("value",function(snapshot){
  console.log(snapshot.val())
  var datalock = snapshot.val();
  if(datalock == "ON") lock.checked = true; 
  else lock.checked = false;
});

lock.onchange = function() {
  if (lock.checked) {
    firebase.database().ref("/CK-IoT/PhongKhach").update({"lock":"ON"});
  } else {
    firebase.database().ref("/CK-IoT/PhongKhach").update({"lock":"OFF"});
  }
}
 
firebase.database().ref("/CK-IoT/PhongKhach/wifi").on("value",function(snapshot){
  console.log(snapshot.val())
  var datawifi = snapshot.val();
  if(datawifi == "ON") wifi.checked = true; 
  else wifi.checked = false;
});

wifi.onchange = function() {
  if (wifi.checked) {
    firebase.database().ref("/CK-IoT/PhongKhach").update({"wifi":"ON"});
  } else {
    firebase.database().ref("/CK-IoT/PhongKhach").update({"wifi":"OFF"});
  }
}

firebase.database().ref("/CK-IoT/PhongKhach/condition").on("value",function(snapshot){
  console.log(snapshot.val())
  var datacondi = snapshot.val();
  if(datacondi == "ON") condition.checked = true; 
  else condition.checked = false;
});

condition.onchange = function() {
  if (condition.checked) {
    firebase.database().ref("/CK-IoT/PhongKhach").update({"condition":"ON"});
  } else {
    firebase.database().ref("/CK-IoT/PhongKhach").update({"condition":"OFF"});
  }
}

firebase.database().ref("/CK-IoT/PhongKhach/vacuum").on("value",function(snapshot){
  console.log(snapshot.val())
  var datavacuum = snapshot.val();
  if(datavacuum == "ON") vacuum.checked = true; 
  else vacuum.checked = false;
});

vacuum.onchange = function() {
  if (vacuum.checked) {
    firebase.database().ref("/CK-IoT/PhongKhach").update({"vacuum":"ON"});
  } else {
    firebase.database().ref("/CK-IoT/PhongKhach").update({"vacuum":"OFF"});
  }
}

firebase.database().ref("/CK-IoT/PhongKhach/lamp").on("value",function(snapshot){
  console.log(snapshot.val())
  var datalamp = snapshot.val();
  if(datalamp == "ON") lamp.checked = true; 
  else lamp.checked = false;
});

lamp.onchange = function() {
  if (lamp.checked) {
    firebase.database().ref("/CK-IoT/PhongKhach").update({"lamp":"ON"});
  } else {
    firebase.database().ref("/CK-IoT/PhongKhach").update({"lamp":"OFF"});
  }
}

firebase.database().ref("/CK-IoT/PhongKhach/tv").on("value",function(snapshot){
  console.log(snapshot.val())
  var datatv = snapshot.val();
  if(datatv == "ON") tv.checked = true; 
  else tv.checked = false;
});

tv.onchange = function() {
  if (tv.checked) {
    firebase.database().ref("/CK-IoT/PhongKhach").update({"tv":"ON"});
  } else {
    firebase.database().ref("/CK-IoT/PhongKhach").update({"tv":"OFF"});
  }
}


var fan = document.getElementById("fan");
var btnFan = document.getElementById("btn-fan");
var count = 0;

firebase.database().ref("/CK-IoT/PhongNgu/fan").on("value",function(snapshot){
  console.log(snapshot.val())
  var datafan = snapshot.val();
  if(datafan == "ON") fan.style.animation = "spin 1s linear infinite"; 
  else fan.style.animation = "";
});

btnFan.onclick = function() {
  if(count == 0)
    {
      fan.style.animation = "spin 1s linear infinite";
      firebase.database().ref("/CK-IoT/PhongNgu").update({"fan":"ON"});
      count = 1;
    }
  else{
    fan.style.animation = "";
    firebase.database().ref("/CK-IoT/PhongNgu").update({"fan":"OFF"});
    count = 0;
  } 
  }
  
var lamp1 = document.getElementById("lamp1")

  firebase.database().ref("/CK-IoT/PhongNgu/lamp").on("value",function(snapshot){
    console.log(snapshot.val())
    var datalamp1 = snapshot.val();
    if(datalamp1 == "ON") lamp1.checked = true; 
    else lamp1.checked = false;
  });
  
  lamp1.onchange = function() {
    if (lamp1.checked) {
      firebase.database().ref("/CK-IoT/PhongNgu").update({"lamp":"ON"});
    } else {
      firebase.database().ref("/CK-IoT/PhongNgu").update({"lamp":"OFF"});
    }
  }

  var condition1 = document.getElementById("condition1")
  firebase.database().ref("/CK-IoT/PhongNgu/condition").on("value",function(snapshot){
    console.log(snapshot.val())
    var datacondi1 = snapshot.val();
    if(datacondi1 == "ON") condition1.checked = true; 
    else condition1.checked = false;
  });
  
  condition1.onchange = function() {
    if (condition1.checked) {
      firebase.database().ref("/CK-IoT/PhongNgu").update({"condition":"ON"});
    } else {
      firebase.database().ref("/CK-IoT/PhongNgu").update({"condition":"OFF"});
    }
  }


  var sliderND1 = document.getElementById("sliderND1");
  var imgND1 = document.getElementById("imgND1");
  var valueND1 = document.getElementById("valueND1")
    
  firebase.database().ref("/CK-IoT/PhongBep/nhietdo").on("value",function(snapshot){
      console.log(snapshot.val())
      var nd1 = snapshot.val();  
      valueND1.innerHTML = nd1;
      sliderND1.value = nd1;
      imgND1.style.opacity = sliderND1.value/100;
      console.log(nd1);
    });
  
  
  sliderND1.oninput = function(){
    var newND1 = sliderND1.value;
    firebase.database().ref("/CK-IoT/PhongBep").update({"nhietdo":newND1});
    valueND1.innerHTML = newND1;
    imgND1.style.opacity = sliderND1.value/100;
  }
  
  var sliderDA1 = document.getElementById("sliderDA1");
  var imgDA1 = document.getElementById("imgDA1");
  var valueDA1 = document.getElementById("valueDA1")
  
  firebase.database().ref("/CK-IoT/PhongBep/doam").on("value",function(snapshot){
    console.log(snapshot.val())
    var da1 = snapshot.val();  
    valueDA1.innerHTML = da1;
    sliderDA1.value = da1;
    imgDA1.style.opacity = sliderDA1.value/100;
    console.log(da1);
  });
  
  
  sliderDA1.oninput = function(){
  var newDA1 = sliderDA1.value;
  firebase.database().ref("/CK-IoT/PhongBep").update({"doam":newDA1});
  valueDA1.innerHTML = newDA1;
  imgDA1.style.opacity = sliderDA1.value/100;
  }

  var sliderGAS1 = document.getElementById("sliderGAS1");
  var imgGAS1 = document.getElementById("imgGAS1");
  var valueGAS1 = document.getElementById("valueGAS1")
  
  firebase.database().ref("/CK-IoT/PhongBep/gas").on("value",function(snapshot){
    console.log(snapshot.val())
    var gas1 = snapshot.val();  
    valueGAS1.innerHTML = gas1;
    sliderGAS1.value = gas1;
    imgGAS1.style.opacity = sliderGAS1.value/100;
    console.log(gas1);
  });
  
  
  sliderGAS1.oninput = function(){
  var newGAS1 = sliderGAS1.value;
  firebase.database().ref("/CK-IoT/PhongBep").update({"gas":newGAS1});
  valueGAS1.innerHTML = newGAS1;
  imgGAS1.style.opacity = sliderGAS1.value/1000;
  }