function fancyArr(arr,sym,rev){
    if(rev == true){
        for(var i=arr.length-1;i>=0;i--){
            console.log(i,sym,arr[i]);
        }
    }else{
        for(var i=0;i<arr.length;i++){
            console.log(i,sym,arr[i]);
        }
    }
}
fancyArr(["here","is","a","fancy","array"],"->",false);
console.log("----------------\n");
fancyArr(["here","is","a","fancy","array","backwards"],"->",true);


// var arr = [ "James", "Jill", "Jane", "Jack" ];
// function fancyArr(){
// for (var i=0; i<arr.length; i++ ){
//   console.log(i,"->", arr[i]);
//   }
// }
// fancyArr();