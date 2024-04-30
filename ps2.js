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