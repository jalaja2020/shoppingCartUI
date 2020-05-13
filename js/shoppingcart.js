function validateUser(){
    var userName = document.getElementById("userName").value; 
    var userMobile = document.getElementById("userMobile").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
   
    if(userName=="" || userName==null){
        alert("Please Enter User Name");
        return false;
    }
    else if(userMobile ==null || userMobile ==""){
        alert("Please Enter mobile");
        return false;
    }
    else if(userEmail ==null || userEmail ==""){
        alert("Please Enter email ");
        return false;
    }else if(userPassword == null  ||  userPassword==""){
        alert("please Enter password");
        return false;
    }
   // window.location.href="ProductDetails.html?userEmail="+userEmail+"&userPassword="+userPassword;
   window.location.href="UserSignIn.html"
  }
  
  function addUser(){
      
    var userName = document.getElementById("userName").value; 
    var userMobile = document.getElementById("userMobile").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var obj = {userName : userName, userMobile : userMobile , userEmail : userEmail , userPassword:userPassword };
    console.log(obj);

    var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    alert("data inserted successfuly");
                   console.log(this.responseText);
                }
             };
            xhttp.open("Post", "http://localhost:3000/users", true);
            xhttp.setRequestHeader("Content-type","application/json");
            xhttp.send(JSON.stringify(obj));
  } 
  function validateProduct(){
    var productId = document.getElementById("productId").value; 
    var productName = document.getElementById("productName").value;
    var productPrice = document.getElementById("productPrice").value;
    var productReivew = document.getElementById("productReivew").value;
  
    if(productId=="" || productId==null){
        alert("Please Enter product id");
        return false;
    }
    else if(productName ==null || productName ==""){
        alert("Please Enter product name");
        return false;
    }
    else if(productPrice ==null || productPrice ==""){
        alert("Please Enter product price ");
        return false;
    }else if(productReivew == null  ||  productReivew==""){
        alert("please Enter product quantity");
        return false;
    }
  }

  function addProduct(){
    var productId = document.getElementById("productId").value; 
    var productName = document.getElementById("productName").value;
    var productPrice = document.getElementById("productPrice").value;
    var productReivew = document.getElementById("productReivew").value;
    var obj = {productId : productId, productName : productName , productPrice : productPrice , productReivew:productReivew };
    console.log(obj);  

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("data inserted successfuly");
           console.log(this.responseText);
        }
     };
    xhttp.open("Post", "http://localhost:3000/products", true);
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.send(JSON.stringify(obj));
  } 

  
function getData() {
    
	var tableEl = document.getElementsByTagName('table');
    if (tableEl[0] !== undefined) {
        tableEl[0].remove()
    }
	
    var httpReq;
    if(window.XMLHttpRequest) {
        httpReq = new XMLHttpRequest();
    }
    else{
        httpReq = new ActiveXObject("")
    }
    httpReq.onreadystatechange = function() {

        if(this.readyState ===4 && this.status === 200){
            console.log(this.response);
            tablecreateProducts(this.response);
        }
    }
    httpReq.open('get', 'http://localhost:3000/products', true);
    httpReq.send();
}
function tablecreateProducts(response){
    debugger;
   
	
	var body = document.getElementsByTagName('body')[0];
	var table = document.createElement('table');
	table.setAttribute("border", "1");
	
	
    var tbody = document.createElement('tbody');
    var thead = document.createElement('thead');
    var headTr = document.createElement('tr');
    
    var headTd1 = document.createElement('td');
    var headTd1text = document.createTextNode ("Id");
    headTd1.appendChild(headTd1text);
    
    var headTd2 = document.createElement('td');
    var headTd2text = document.createTextNode ("productId");
    headTd2.appendChild(headTd2text);
    
    var headTd3 = document.createElement('td');
    var headTd3text = document.createTextNode("productName");
    headTd3.appendChild(headTd3text);

    var headTd4 = document.createElement('td');
    var headTd4text = document.createTextNode("productPrice");
    headTd4.appendChild(headTd4text);

    var headTd5 = document.createElement('td');
    var headTd5text = document.createTextNode("productReivew");
    headTd5.appendChild(headTd5text);

    var headTd6 = document.createElement('td');
    var headTd6text = document.createTextNode ("addcart");
    headTd6.appendChild(headTd6text);
    
    

    headTr.appendChild(headTd1);
    headTr.appendChild(headTd2);
    headTr.appendChild(headTd3);
    headTr.appendChild(headTd4);
    headTr.appendChild(headTd5);
    headTr.appendChild(headTd6);


    
    thead.appendChild(headTr);
    var data = JSON.parse(response);
    console.log(data);
    var len = data.length;
    
    if(len > 0 ){
    for(var i=0; i<len;i++){
        var tbodyTr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td1Text = document.createTextNode(data[i].id);
        td1.appendChild(td1Text);

        var td2 = document.createElement('td');
        
        var td2Text = document.createTextNode(data[i].productId);
        td2.appendChild(td2Text);

        var td3 = document.createElement('td');
        var td3Text = document.createTextNode(data[i].productName);
        td3.appendChild(td3Text);

        var td4 = document.createElement('td');
        var td4Text = document.createTextNode(data[i].productPrice);
        td4.appendChild(td4Text);

        var td5 = document.createElement('td');
        var td5Text = document.createTextNode(data[i].productReivew);
        td5.appendChild(td5Text);

        
        //Update
        var td7=document.createElement('td');
        var updatebutton=document.createElement('button');
        var updatebuttontxt=document.createTextNode("addCart");
        updatebutton.addEventListener("click",function(){
            var data=this.parentElement.parentElement.cells;
            console.log("data: "+data[0].innerHTML+" "+data[1].innerHTML+"  "+data[2].innerHTML+" "+data[3].innerHTML+" "+data[4].innerHTML);
          
            var userId = localStorage.getItem("userIdvalue");
           
           var obj = {productId : data[1].innerHTML, productName : data[2].innerHTML , productPrice : data[3].innerHTML , productReivew:data[4].innerHTML }; 
          
           localStorage.setItem("productDetails", JSON.stringify(obj));
          window.location.href="CartDetails.html";        	
        })
        
        updatebutton.appendChild(updatebuttontxt);
        td7.appendChild(updatebutton);
        tbodyTr.appendChild(td1);
        tbodyTr.appendChild(td2);
        tbodyTr.appendChild(td3);
        tbodyTr.appendChild(td4);
        tbodyTr.appendChild(td5);
       
        tbodyTr.appendChild(td7);
        tbody.appendChild(tbodyTr); 
    }
    }
    else{
        var data = document.createElement("h4");
        var noData = document.createTextNode("No data Found")
        data.appendChild(noData);
        tbody.appendChild(data);
    }
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    body.appendChild(table);
	
}


 
function displayUser() {
    
	var tableEl = document.getElementsByTagName('table');
    if (tableEl[0] !== undefined) {
        tableEl[0].remove()
    }
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var obj = { userEmail : userEmail , userPassword:userPassword };
    console.log(obj);

    var httpReq;
    if(window.XMLHttpRequest) {
        httpReq = new XMLHttpRequest();
    }
    else{
        httpReq = new ActiveXObject("")
    }
    httpReq.onreadystatechange = function() {

        if(this.readyState ===4 && this.status === 200){
            console.log(this.response);
            tablecreate(this.response);
        }
    }
    httpReq.open('get', 'http://localhost:3000/users?userEmail='+userEmail+'&userPassword='+userPassword, true);
    httpReq.send();
}
function tablecreate(response){
    debugger;
    
	
	var body = document.getElementsByTagName('body')[0];
	var table = document.createElement('table');
	table.setAttribute("border", "1");
	
	
    var tbody = document.createElement('tbody');
    var thead = document.createElement('thead');
    var headTr = document.createElement('tr');
    
    var headTd1 = document.createElement('td');
    var headTd1text = document.createTextNode ("Id");
    headTd1.appendChild(headTd1text);
    
    var headTd2 = document.createElement('td');
    var headTd2text = document.createTextNode ("userName");
    headTd2.appendChild(headTd2text);
    
    var headTd3 = document.createElement('td');
    var headTd3text = document.createTextNode("userMobile");
    headTd3.appendChild(headTd3text);

    var headTd4 = document.createElement('td');
    var headTd4text = document.createTextNode("userEmail");
    headTd4.appendChild(headTd4text);

    var headTd5 = document.createElement('td');
    var headTd5text = document.createTextNode("userPassword");
    headTd5.appendChild(headTd5text);

    var headTd6 = document.createElement('td');
    var headTd6text = document.createTextNode ("addcart");
    headTd6.appendChild(headTd6text);
    headTr.appendChild(headTd1);
    headTr.appendChild(headTd2);
    headTr.appendChild(headTd3);
    headTr.appendChild(headTd4);
    headTr.appendChild(headTd5);
    headTr.appendChild(headTd6); 
    thead.appendChild(headTr);
    var data = JSON.parse(response);
    var len = data.length;
    
    if(len > 0 ){
    for(var i=0; i<len;i++){
        var tbodyTr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td1Text = document.createTextNode(data[i].id);
        td1.appendChild(td1Text);

        var td2 = document.createElement('td');
        var td2Text = document.createTextNode(data[i].userName);
        td2.appendChild(td2Text);

        var td3 = document.createElement('td');
        var td3Text = document.createTextNode(data[i].userMobile);
        td3.appendChild(td3Text);

        var td4 = document.createElement('td');
        var td4Text = document.createTextNode(data[i].userEmail);
        td4.appendChild(td4Text);

        var td5 = document.createElement('td');
        var td5Text = document.createTextNode(data[i].userPassword);
        td5.appendChild(td5Text);
        //Update
        var td7=document.createElement('td');
        var updatebutton=document.createElement('button');
        var updatebuttontxt=document.createTextNode("FindProducts");
        updatebutton.addEventListener("click",function(){
            var data=this.parentElement.parentElement.cells;
            console.log("data: "+data[0].innerHTML+" "+data[1].innerHTML+"  "+data[2].innerHTML+" "+data[3].innerHTML+" "+data[4].innerHTML);
            document.getElementById("userIdvalue").value=data[0].innerHTML;
            localStorage.setItem("userIdvalue", data[0].innerHTML);
            addNewProductsToCart();
        })
        
        updatebutton.appendChild(updatebuttontxt);
        td7.appendChild(updatebutton);
        tbodyTr.appendChild(td1);
        tbodyTr.appendChild(td2);
        tbodyTr.appendChild(td3);
        tbodyTr.appendChild(td4);
        tbodyTr.appendChild(td5);
       
        tbodyTr.appendChild(td7);
        tbody.appendChild(tbodyTr); 
    }
    }
    else{
        var data = document.createElement("h4");
        var noData = document.createTextNode("No data Found")
        data.appendChild(noData);
        tbody.appendChild(data);
    }
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    body.appendChild(table);
	
}
function getSelectedProduct(){
   
    var data=JSON.parse(localStorage.getItem("productDetails"));
    var cartUserId = localStorage.getItem("userIdvalue");
    console.log("data: "+data.productName);
    document.getElementById("productId").value=data.productId;
    document.getElementById("productName").value=data.productName;
    document.getElementById("userId").value=cartUserId;
    document.getElementById("productPrice").value=data.productPrice;  
}
function addCart(){
   
    
    var productId = document.getElementById("productId").value; 
    var productName = document.getElementById("productName").value;
    var userId = document.getElementById("userId").value;
    var productPrice = document.getElementById("productPrice").value;
    var prodQty = document.getElementById("prodQty").value;
    var productPrice1 = parseInt(productPrice)*parseInt(prodQty);
    var productpricedetails = productPrice1+"";
    var obj = {productId : productId, productName : productName , userId : userId , productPrice:productpricedetails,prodQty:prodQty};
    console.log(obj);  

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("data inserted successfuly");
           console.log(this.responseText);
        }
     };
    xhttp.open("Post", "http://localhost:3000/carts", true);
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.send(JSON.stringify(obj));
}

  
function getDataCarts() {
    
	var tableEl = document.getElementsByTagName('table');
    if (tableEl[0] !== undefined) {
        tableEl[0].remove()
    }
	
    var httpReq;
    if(window.XMLHttpRequest) {
        httpReq = new XMLHttpRequest();
    }
    else{
        httpReq = new ActiveXObject("")
    }
    httpReq.onreadystatechange = function() {

        if(this.readyState ===4 && this.status === 200){
            console.log(this.response);
            localStorage.setItem("cartlist",this.response);
            tablecreatecarts(this.response);
        }
    }
   
    httpReq.open('get', 'http://localhost:3000/carts?userId='+localStorage.getItem("userIdvalue"), true);
    httpReq.send();
}
function tablecreatecarts(response){
    debugger;
   
	
	var body = document.getElementsByTagName('body')[0];
	var table = document.createElement('table');
	table.setAttribute("border", "1");
	
	
    var tbody = document.createElement('tbody');
    var thead = document.createElement('thead');
    var headTr = document.createElement('tr');
    
    var headTd1 = document.createElement('td');
    var headTd1text = document.createTextNode ("Id");
    headTd1.appendChild(headTd1text);
    
    var headTd2 = document.createElement('td');
    var headTd2text = document.createTextNode ("productId");
    headTd2.appendChild(headTd2text);
    
    var headTd3 = document.createElement('td');
    var headTd3text = document.createTextNode("productName");
    headTd3.appendChild(headTd3text);

    var headTd4 = document.createElement('td');
    var headTd4text = document.createTextNode("userId");
    headTd4.appendChild(headTd4text);

    var headTd5 = document.createElement('td');
    var headTd5text = document.createTextNode("productPrice");
    headTd5.appendChild(headTd5text);

    var headTd6 = document.createElement('td');
    var headTd6text = document.createTextNode ("prodQty");
    headTd6.appendChild(headTd6text);
    
    

    headTr.appendChild(headTd1);
    headTr.appendChild(headTd2);
    headTr.appendChild(headTd3);
    headTr.appendChild(headTd4);
    headTr.appendChild(headTd5);
    headTr.appendChild(headTd6);


    
    thead.appendChild(headTr);
    var data = JSON.parse(response);
    console.log(data);
    var len = data.length;
    
    if(len > 0 ){
    for(var i=0; i<len;i++){
        var tbodyTr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td1Text = document.createTextNode(data[i].id);
        td1.appendChild(td1Text);

        var td2 = document.createElement('td');
        
        var td2Text = document.createTextNode(data[i].productId);
        td2.appendChild(td2Text);

        var td3 = document.createElement('td');
        var td3Text = document.createTextNode(data[i].productName);
        td3.appendChild(td3Text);

        var td4 = document.createElement('td');
        var td4Text = document.createTextNode(data[i].userId);
        td4.appendChild(td4Text);

        var td5 = document.createElement('td');
        var td5Text = document.createTextNode(data[i].productPrice);
        td5.appendChild(td5Text);

        var td6 = document.createElement('td');
        var td6Text = document.createTextNode(data[i].prodQty);
        td6.appendChild(td6Text);
        tbodyTr.appendChild(td1);
        tbodyTr.appendChild(td2);
        tbodyTr.appendChild(td3);
        tbodyTr.appendChild(td4);
        tbodyTr.appendChild(td5);
       
        tbodyTr.appendChild(td6);
        tbody.appendChild(tbodyTr); 
    }
    }
    else{
        var data = document.createElement("h4");
        var noData = document.createTextNode("No data Found")
        data.appendChild(noData);
        tbody.appendChild(data);
    }
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    body.appendChild(table);
	
}
function addNewProductsToCart(){
    window.location.href="ProductDetails.html";
}
function placeOrderData(){

    var cartlist = JSON.parse(localStorage.getItem("cartlist"));
    console.log("cartlist :=>"+cartlist.length);
    var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
alert(dateTime);
   for (i in cartlist) {
       
        var orderObj = {
            productId : cartlist[i].productId, 
            productName : cartlist[i].productName , 
            userId :cartlist[i].userId,
            productPrice:cartlist[i].productPrice,
            orderDate : dateTime.toString()
        };
        
      placeOrder(orderObj);
    }// window.location.href="PlaceOrder.html";
}

function placeOrder(orderObj) {
    var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    alert("data inserted successfuly");
                   console.log(this.responseText);
                }
             };
            xhttp.open("Post", "http://localhost:3000/orders", true);
            xhttp.setRequestHeader("Content-type","application/json");
            xhttp.send(JSON.stringify(orderObj));
   
}
function deleteAddCartDetails(){
    
    var xmlhttp;
    if(window.XMLHttpRequest){
    xmlhttp=new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange= function(){
        if(this.status === 200 && this.readyState===4){
            alert("Deleted Successfully");
        }
    }
    xmlhttp.open("DELETE", "http://localhost:3000/carts", true);
    xmlhttp.setRequestHeader('Content-type','application/json');
    xmlhttp.send(null);
    
}
