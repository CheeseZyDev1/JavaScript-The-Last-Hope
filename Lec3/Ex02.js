function showname(value){
    var show ;
    for(var i = 0 ; i < value.length ; i++){
        console.log(value[i]);
        show = value[i];
        for(var v = 0 ; v < show.length ; v++){
            console.log(show[v]);
        }
    }
   
}

let furniture = ['Table','Chairs','Chouch'];
console.log(showname(furniture));