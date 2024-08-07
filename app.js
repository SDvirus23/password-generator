const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

const passbox = document.getElementById("para-box");
const totalchar = document.getElementById("total-char");
const upperinput = document.getElementById("upper-case");
const lowerinput = document.getElementById("lower-case");
const symboleinput = document.getElementById("symbol");
const numberinput = document.getElementById("number");
const btn = document.getElementById("btn");

const getrandomedata = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};
const turncatestring = (str, num) => {
    if (str.length > num) {
        let substr = str.substring(0, num);
        return substr;
    }
    return str;
};
const getpassword = (password = "") => {
  if (upperinput.checked) {
    password += getrandomedata(upperSet);
  }
  if (lowerinput.checked) {
    password += getrandomedata(lowerSet);
  }
  if (symboleinput.checked) {
    password += getrandomedata(symbolSet);
  }
  if (numberinput.checked) {
    password += getrandomedata(numberSet);
  }
  if (password.length < totalchar.value) {
    return getpassword(password);
  }
  console.log(password);
  passbox.innerText = turncatestring(password, totalchar.value);
  navigator.clipboard.writeText(password);
};

getpassword();


btn.addEventListener("click", ()=>{
    getpassword();
});
