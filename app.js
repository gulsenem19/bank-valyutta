const input = document.querySelector('input') 
const deyer = document.querySelector('.deyer') 
const a = document.querySelectorAll('.alis-azn ul li') 
const b = document.querySelectorAll('.satis-azn ul li') 
const kalk = document.querySelector('.kalkulyator p')
const sag = document.querySelector('.sag')
let c = 'RUB'; 
let v = 'USD'; 


function bank(){
    fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=USD`)
.then(response=>response.json()) 
.then(data=>( 
    // deyer.innerHTML = input.value*data.rates 
    kalk.innerHTML = `1 RUB = ${(Object.values(data.rates)[0])} USD`,  
    sag.innerHTML = `1 USD = ${1/(Object.values(data.rates)[0])} RUB`  
)) 
}

input.addEventListener("keyup",function(){ 
fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=USD`)

.then(response=>response.json()) 
.then(data=>( 
    // deyer.innerHTML = input.value*data.rates 
    deyer.innerHTML=input.value*(Object.values(data.rates)[0])
)) 
})

for(let i =0;i<a.length;i++){ 
    a[i].addEventListener("click",function(){ 
        c=(a[i].textContent) 
        fetch(`https://api.exchangerate.host/latest?base=${c}&symbols=${v}`) 
        .then(response=>response.json()) 
        .then(data=>( 
            // deyer.innerHTML = input.value*data.rates 
            deyer.innerHTML=input.value*(Object.values(data.rates)[0]),
            kalk.innerHTML =`1${c} = ${Object.values(data.rates)[0]} ${v}`,
            sag.innerHTML =`1${v} = ${1/Object.values(data.rates)[0]} ${c}`

            
        )) 
        
        
       
}) 
} 
for(let i =0;i<b.length;i++){ 
b[i].addEventListener("click",function(){ 
    v =(b[i].textContent)
    fetch(`https://api.exchangerate.host/latest?base=${c}&symbols=${v}`) 
        .then(response=>response.json()) 
        .then(data=>( 
            deyer.innerHTML=input.value*(Object.values(data.rates)[0]),
            kalk.innerHTML =`1${c} = ${Object.values(data.rates)[0]} ${v}`,
            sag.innerHTML =`1${v} = ${1/Object.values(data.rates)[0]} ${c}`

        )) 
       
}) 
}




for(var i = 0; i < a.length; i++)
{
    a[i].onclick = function(){
        
        // remove class from sibling
        
        var el = a[0];
        while(el)
        {
            if(el.tagName === "LI"){
                //remove class
                el.classList.remove("cevril");
                
            }
            // pass to the new sibling
            el = el.nextSibling;
        }
        
      this.classList.add("cevril");  
    }
}

for(var i = 0; i < b.length; i++)
{
    b[i].onclick = function(){
        
        // remove class from sibling
        
        var el = b[0];
        while(el)
        {
            if(el.tagName === "LI"){
                //remove class
                el.classList.remove("cevril");
                
            }
            // pass to the new sibling
            el = el.nextSibling;
        }
        
      this.classList.add("cevril");  
    }
}



function hasNetwork(online){
    console.log(online)
}

window.addEventListener("load",()=>{
    hasNetwork(navigator.onLine);

  

    window.addEventListener("offline",()=>{
        hasNetwork("internet baglantisi yoxdu...");
    })


})

