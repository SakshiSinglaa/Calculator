let button = document.querySelectorAll('button');
let input = document.getElementById('inputBox');

for(let value of button){
    value.addEventListener('click' , function(event){
        let btnText = event.target.innerText;
        if(btnText === 'AC'){
            input.value = "";
        }

        else if(btnText === 'C'){
            input.value = this.innerText.length-1;
        }

        else if(btnText === '='){
            try{
                input.value = eval(input.value);
            }
            catch(err){
                input.value = 'Invalid';
            }
        }
        else{
            inputBox.value += btnText;
        }
    })
}
