n="46537"
prime=" "
for(k of n){
    if(k>1){
        c=true
        for(i=2;i<k;i++){
            if(k%i==0){
                c=false
                break
            }
            
        }
        
    }
    if(c){
        prime=prime+k
    
    }
    
}
console.log(prime)
max=Number(prime[0])
for(i=1;i<=prime.length;i++){
    if(prime[i]>max){
        max=prime[i]
    }
}
console.log("biggest prime is:",max)

num="5497351"
prime="";
for(n of num){
    if(n>1){
     a=true;
for(i=2;i<n;i++){
    if(n%i==0){
        a=false
        break
    }
}
if(a)
  prime=prime+n
}
}
console.log(prime)
max=Number(prime[0])
min=Number(prime[0])
for(i=1;i<=prime.length;i++){
    if(prime[i]>max){
        max=prime[i]
    }
    if(prime[i]<min){
        min=prime[i]
    }
}
console.log("maximum prime is",max)
console.log(" minimum prime is",min)
console.log(Number(max)+Number(min))
