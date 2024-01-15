let btn = document.querySelector(".text-button");
btn.addEventListener("click" , check)


function check(){
    console.log("clicked")
    let text = document.getElementById("textarea").value;

    if(text === ""){
        alert("Enter Some text");
        return;
    }
    else{
        let color = document.getElementById('color');
        let card = document.createElement('div');

        card.classList.add("card");

        let para = document.createElement("p");
        para.innerText = text;
        card.innerHTML = `<button class="btn2"> X </button>`;
        card.append(para);
        card.style.backgroundColor = color.value;
        document.querySelector(".rightcontainer").append(card);

        let ans = document.getElementById("textarea");
        ans.value="";
        document.querySelector("#note").style.display = "none";
    }
    let close = document.querySelector('.rightcontainer');
    close.addEventListener("click" , (e)=>{
        if(e.target.innerText === "X"){
            e.target.parentElement.remove();
        }
    })

}