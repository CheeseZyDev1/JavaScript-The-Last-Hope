function Seachnumber(value){
    var check = [0,0,0,0,0,0,0,0,0,0];
    var shownumbermessing = "";
    var number =0;
  for(var i  = 0 ; i < value.length; i++){
      number = parseInt(value[i]);
    for(var index = 0 ; index < 10 ; index++){
        if(parseInt(value[i] === index)){
            check[index]++;
        }
    }
  }
  for(var i = 0 ; i < 10 ; i++){
    if(i === 9){
       
    }
    else{
    switch(check[i]){
        case 0 : 
    }
}
}
}
console.log(Seachnumber("123456789888"));