const inputSlider = document.querySelector("[data-lengthSlider]")
const lengthDisplay = document.querySelector("[data-lengthNumber]")
const passwordDisplay = document.querySelector("[data-passwordDisplay]")

const copyBtn = document.querySelector("[data-copy]")
const copyMsg = document.querySelector("[data-copyMsg]")

const uppercaseCheck = document.querySelector("#uppercase")
const lowercaseCheck = document.querySelector("#lowercase")
const symbolCheck = document.querySelector("#symbols")
const numberCheck = document.querySelector("#numbers")

const indicator = document.querySelector("[data-indicator]")
const generateBtn = document.querySelector(".generate-button")
const allCheckbox = document.querySelectorAll("input[type=checkbox]")
const symbols = '~`!@#$%^&*()_+{[}]|:;"<,>.?/' ;

let password = "";
let passwordLength = 10;
let checkCount = 0;

handleSlider()
// set passwordLength
function handleSlider(){
    inputSlider.value = passwordLength
    lengthDisplay.textContent = passwordLength
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function getRandomNumber() {
    return getRandomInteger(0, 9)
}

function generateLowercase() {
    return String.fromCharCode(getRandomInteger(97, 123))
}

function generateUppercase() {
    return String.fromCharCode(getRandomInteger(65, 91))
}

function generateSymbol() {
    const randomNum = getRandomInteger(0, symbols.length)
    return symbols.charAt(randomNum)
}

function calcStrength() {
    let hasUpper = false
    let hasLower = false
    let hasNum = false
    let hasSym = false
    if (uppercaseCheck.checked) hasUpper = true
    if (lowercaseCheck.checked) hasLower = true
    if (numberCheck.checked) hasNum = true
    if (symbolCheck.checked) hasSym = true

    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0")
    }else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6) {
        setIndicator("#ff0")
    }else{
        setIndicator("#f00")
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.textContent = "Copied";
    } catch (error) {
        copyMsg.textContent = "Failed"
    }
    copyMsg.classList.add("active")

    setInterval(() => {
        copyMsg.classList.remove("active")
    }, 2000);
}

function shufflePassword(array) {
    //fisher yates methods
    for (let i = array.length-1; i > 0 ; i--) {
        const j = Math.floor(Math.random()* (i+1))
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckboxChange() {
    checkCount = 0;
    allCheckbox.forEach((checkbox) => {
        if (checkbox.checked) {
            checkCount++;
        }
    })
    // special case
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider()
    }
}

allCheckbox.forEach((checkbox)=> {
    checkbox.addEventListener("change", handleCheckboxChange)
})

inputSlider.addEventListener("input", (e)=> {
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener("click", ()=> {
    if (passwordDisplay.value) {
        copyContent();
    }
})

generateBtn.addEventListener("click", ()=> {
    if (checkCount <= 0) return;

    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider()
    }

    password = "";
    // create password as mentioned inside checkboxes
    // if (uppercaseCheck.checked) {
    //     password += generateUppercase();
    // }
    // if (lowercaseCheck.checked) {
    //     password += generateLowercase();
    // }
    // if (numberCheck.checked) {
    //     password += getRandomNumber();
    // }
    // if (symbolCheck.checked) {
    //     password += generateSymbol();
    // }

    let functionArr = [];
    if (uppercaseCheck.checked) {
        functionArr.push(generateUppercase)
    }
    if (lowercaseCheck.checked) {
        functionArr.push(generateLowercase)
    }
    if (numberCheck.checked) {
        functionArr.push(getRandomNumber)
    }
    if (symbolCheck.checked) {
        functionArr.push(generateSymbol)
    }
    // compulsory addition
    for(let i=0; i<functionArr.length; i++){
        password += functionArr[i]();
    }
    // remaining addition
    for(let i=0; i< (passwordLength - functionArr.length); i++){
        let randomIndex = getRandomInteger(0, functionArr.length);
        password += functionArr[randomIndex]();
    }

    password = shufflePassword(Array.from(password))


    // for (let i = 0; i < passwordLength; i++) {
    //     password = password += functionArr[getRandomInteger(0, functionArr.length)]();
        
    // }

    passwordDisplay.value = password;
    calcStrength()
})

