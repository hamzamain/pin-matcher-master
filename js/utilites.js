function generatePin(){
    // console.log()
    let pin = Math.round(Math.random()*10000);
    pin = pin + '';
    if(pin.length === 4){
        return pin;
    }
   else{
    console.log('not 4 digite', pin)
    return generatePin();
   }
}
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const confirmPin = pin / 1000;
    if(confirmPin >= 1){
        return pin;
    }
    else{
        console.log('not 4 digite', pin)
        return getPin();
    }
}
function setById(fieldId,newValue){
    const field = document.getElementById(fieldId);
    field.value = newValue;
}
function getInputValueById(fieldId){
    const field = document.getElementById(fieldId);
    const fieldValue = field.value;
    return fieldValue;
}
function getTextValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}
function actionLeft(){
    const action = getTextValueById('action-count');
    const actionLeft = action - 1;
    // console.log(action,actionLeft)
    // const element = document.getElementById('action-count');
    if(actionLeft > 0){
        const submitBtn = document.getElementById('submit-btn');
    }
    else{
        submitBtn.setAttribute('disabled',true);
    }
    element.innerText =actionLeft;

}