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

num="463482"
non_prime=" "
prime="";
for(n of num){
    if(n>1){
     a=true;
for(i=2;i<n;i++){
    if(n%i==0){
        a=false
        non_prime+=n
        break
    }
}
if(a)
  prime=prime+n
}
}
console.log(prime)
console.log(non_prime)
max=Number(prime[0])
max1=Number(non_prime[0])
for(i=1;i<=prime.length;i++){
    if(prime[i]>max){
        max=prime[i]
    }
}
for(i=1;i<=non_prime;i++){
    if(non_prime[i]>max1){
        max1=non_prime[i]
    }
}
console.log("maximum prime is",max)
console.log("maximum non_prime is",max1)
