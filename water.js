function waterTank(a){
    let n=a.length;
    let left=0;
    let right=n-1;
    let res=0;
    let maxLeft=0;
    let maxRight=0;
    while(left <= right){
      if(a[left] <= a[right]){
        if(a[left]>=maxLeft){
          maxLeft=a[left];
        }else{
          res+=maxLeft -a[left];
          
        }
        left++;
      }else{
        if(a[right] >=maxRight){
          maxRight = a[right]
        }else{
          res+=maxRight -a[right];
          
        }
        right--;
      }
    }
    return res
  

   }
   
  console.log( waterTank([0,4,0,0,0,6,0,6,4,0])) 

  
