console.log("učitan index.js");
const input_technology=document.querySelector('input[name="technology"]');
const add_btn=document.querySelector("#add");
const remove_all_btn=document.querySelector("#remove-all");
const card_container=document.querySelector("#card-container");

add_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(input_technology.value){
        var card = document.createElement("div");
        card.classList.add("card");
        card.innerText=input_technology.value;
        card_container.appendChild(card);
        input_technology.value="";
    }
    else{
        alert('Please try again. New tehnology is required.')
    }
})

remove_all_btn.addEventListener('click',()=>{
    var cards=document.querySelectorAll(".card");
    cards.forEach(one_card => {
        one_card.remove();
    });
    //card_container.innerHTML=""; drugi način
})