
function printRange(start, end, skip)
{
if(!skip){skip = 1;}
 if(!end){end = 0;}

if (start < end){
  for (var start=start; start < end; start+=skip ){
  
  console.log(start);
    }
}
else if(start > end){
    for(var start=start; start>end;start-=skip){
    console.log(start);
        }
    }

  
  }
printRange(0,56,9);
printRange(-20,-15,2); 
printRange(4,8);
printRange(4); 
