/* function getPin(){
    const random = Math.round(Math.random()*10000)
    const pin = random + '';
    if(pin.length === 4){
        return pin;
    }
    else{
        console.log('this number',pin, 'is not 4 digit')
        return getPin();
    }
}
 */
document.getElementById('generate-btn').addEventListener('click',function(){
    const pin = getPin();
    setById('pin-holder',pin)
})

document.getElementById('calculator').addEventListener('click',function(event){
const number = event.target.innerText
const previousValue = getInputValueById('screen');
if(isNaN(number)){
    if(number == '<'){
        const split = previousValue.split('');
        split.pop();
        const joined = split.join('')
        setById('screen',joined);
    }
    else if(number == 'C'){
        setById('screen','')
    }
}
else{

const newValue = previousValue + number;
setById('screen',newValue);
}
})

document.getElementById('submit-btn').addEventListener('click',function(){
    const secretPin = getInputValueById('pin-holder');
    const userPin = getInputValueById('screen');
    const success = document.getElementById('success');
    const failur = document.getElementById('failur');
    if(secretPin === userPin){
        success.style.display = 'block';
        failur.style.display = 'none'
    }
    else{
        failur.style.display = 'block'
        success.style.display = 'none';
       
    //    const count = actionLeft();
    //    setById('action-count',count)
    const actionElement = document.getElementById('action-count');
        const actionElementString = actionElement.innerText;
        let action = parseFloat(actionElementString);
        if(action > 0){
            action = action - 1;
            console.log(action);
        }
    }
})