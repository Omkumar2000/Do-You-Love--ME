let img=document.querySelector("img")
let btn2=document.querySelector("#btn2")
let btn=document.querySelector("#btn")
let h1=document.createElement("h1")
let h1text=document.createTextNode("I LOVE U")
img.src="https://i.pinimg.com/originals/a8/69/77/a869775850cced0e2ca0193c83b487a1.gif"
//@Button 1 
btn.addEventListener("click",()=>
{
    let body= document.querySelector("body")
   body.style.backgroundImage="url('https://i.pinimg.com/originals/90/94/72/9094720f9794cd486f0a04634501d02d.jpg')"
   body.style.backgroundRepeat="none"
   body.style.backgroundSize="cover"
   img.setAttribute("id","heart")
    img.src="https://gifdb.com/images/high/bear-hug-love-you-so-much-fu43j8pa7rdgjfl5.gif"
    console.log(img);
    h1.appendChild(h1text)
    body.append(h1)
    btn2.style.margin=`${0}vw`
})  
//@Button 2 
btn2.addEventListener("click",()=>{
    let backgroundimg=["https://www.desktopbackground.org/download/2560x1600/2015/02/12/901889_i-am-sorry-wallpapers-daily-backgrounds-in-hd_2560x1700_h.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBsnUlo5LUKdhl2dz2pfj2-tdGmhbQyiIHWx9EQngodSWy6JuEsvT_XXkyevQF2ht00I&usqp=CAU"]
    let bgarr=Math.floor(Math.random()*2)
    let body=document.querySelector("body")
    body.style.backgroundImage=`url(${backgroundimg[bgarr]})`
    body.style.backgroundRepeat="none"
    body.style.backgroundSize="cover"
    // images
    let imaarr=["https://i.pinimg.com/originals/4a/43/8e/4a438efd410d45c5d7b83c78bc6390e0.gif","https://i.pinimg.com/originals/8c/37/95/8c37959f07d6bfe9336e7e6ca947a1dd.gif","https://i.pinimg.com/originals/ba/05/84/ba05848aa94062e65b730304a4c20cfb.gif"]
    let arrimg=Math.floor(Math.random()*3)
    img.src=`${imaarr[arrimg]}`
    //margin button
    let arr=["-","+"]
    let num=Math.floor(Math.random()*30)
    let num1=Math.floor(Math.random()*30)
    let num2=Math.floor(Math.random()*30)
    let num3=Math.floor(Math.random()*50)
    let arri=Math.floor(Math.random()*2)
    btn2.style.margin=`${arr[arri]}${num}vh ${arr[arri]}${num1}vh ${arr[arri]}${num2}vw ${arr[arri]}${num3}vw`
    img.removeAttribute("id")
    h1.removeChild(h1text)

})
