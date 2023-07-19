//making input variable by giving it id of the inputbox that we make in html
let input = document.getElementById('inputBox');

//making button variable by calling all the buttons at a time via queryselector
let buttons = document.querySelectorAll('button');
//ek empty var 
let string = "";
let arr = Array.from(buttons);

//humne ek loop bnaya hai firstly usme button pass honge har,thn humne ek eventlistner banaya hai which is click 
//jab bhi click kiya jaega koi bhi button e value pass kardi jaegi
arr.forEach(button => {
   
    button.addEventListener('click', (e) => {
        //agar e {=} hai toh hum evaluate kardenge string me jo bhi hoga
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;

        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;

        } else if (e.target.innerHTML == 'DEL') {
            //agar del hai toh subtring lenelge which is one length of the existig string
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {

            //{=} ke alawa agar kuch hoga toh hum use apni string me add karte jaenge
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

//funtion writing type
//arrow fucntion => use for shortening the length { braces are used whn whn function is multiline}
//decleration //expresion

//target -> {to select all the css/many  tags at a time}humne queryselector ko use karliya hai toh get all button functioning
//humne event lagaya button pr ki jb bhi click ho kam yeh karo.

//target ka use isliyeh kiyah hai bcs we dont know ki konsa button tag use hoga soo..

