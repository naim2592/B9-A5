const A1=document.getElementById('A1')
const A2=document.getElementById('A2')
const addLi=document.getElementById('add-li')
const noSeat=document.getElementById('no-seat')
const disInput=document.getElementById('dis-input')
const disBtn=document.getElementById('dis-btn')
const totallAmount=document.getElementById('totall-amount')
const grandTotall=document.getElementById('grand-totall')
const newRow=document.getElementById('new-row')
const inputPhone=document.getElementById('input-phone')
const nextBtn=document.getElementById('next-btn')





// const increaseValue=document.getElementById('increase-number').innerText
// console.log(increaseValue);

function turnIntoValue(id){
     
    const inText=document.getElementById(id).innerText
    const value=parseFloat(inText)
    return value
    
}


 let totall=0;
 let seatNumber=[]
function btnClicked(id){
    if(seatNumber.includes(id.innerText)){
        alert('the seat has booked')
        return
    }
    if(seatNumber.length>=3){
       disBtn.removeAttribute("disabled")
       disInput.removeAttribute("disabled")
    }
     if(seatNumber.length===4){
        alert('maximum seat added')
        return
    }
    id.classList.add('bg-[#1DD100]');
    id.classList.add('text-white');
    id.classList.add('hover:bg-[#1DD100]');
    const decreaseNumber=turnIntoValue('decrease-number')
    const increaseNumber=turnIntoValue('increase-number')
    seatNumber.push(id.innerText)
    
    // const totallSeat=increaseNumber+seatNumber.length
    const remainSeat=decreaseNumber-1
    document.getElementById('increase-number').innerText=seatNumber.length
    document.getElementById('decrease-number').innerText=remainSeat
    totall+=550
    totallAmount.innerText=totall
    // cupon
    
    // another
    noSeat.classList.add('hidden')

    addLi.innerHTML+=`
           <div class="flex justify-between">
             <p>${id.innerText}</p>
             <p>Economy</p>
             <p>550</p>
           </div>
    `

    if(seatNumber.length>=0){
      inputPhone.removeAttribute("disabled")
      // inputPhone.classList.add('hidden')
   }  
}

if(grandTotall.innerText==='***'){
   inputPhone.setAttribute("disabled",true)
   // inputPhone.classList.add('hidden')
}


A1.addEventListener('click',function(){
   btnClicked(A1)
})
A2.addEventListener('click',function(){
   btnClicked(A2)
})
A3.addEventListener('click',function(){
   btnClicked(A3)
})
A4.addEventListener('click',function(){
   btnClicked(A4)
})
B1.addEventListener('click',function(){
   btnClicked(B1)
})
// copon part
disBtn.addEventListener('click',function(){
    if(disInput.value!=='NEW15' && disInput.value!=='COUPLE20'){
        alert('THIS COUPON IS INVALID')
        return
    }
    else if(disInput.value==='NEW15'){
        
       grandTotall.innerText=totall-(totall*0.15);
    }
    else if(disInput.value==='COUPLE20'){
        
       grandTotall.innerText=totall-(totall*0.20);
    }
    disBtn.classList.add("hidden")
    disInput.classList.add("hidden")
    newRow.innerHTML+=`
        <p class="font-medium">Discount</p>
        <p class="font-medium">BDT ${grandTotall.innerText}</p>
    `
})
// jgkl


// nxt btn
inputPhone.addEventListener('keyup',function(event){
    let input =event.target.value
    console.log(input)
    if(input.length>=11){
      nextBtn.removeAttribute("disabled")
    }
})
document.getElementById('continue-btn').addEventListener('click',function(){
   window.location.reload()
})
