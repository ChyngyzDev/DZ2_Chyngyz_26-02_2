let inputTablo1 = document.querySelector('#tablo1');
let inputTablo2 = document.querySelector('#tablo2');
let inputNumber = document.querySelector('#number');
let btn1 = document.querySelector('#start');
let btn2 = document.querySelector('#reset');
let count = 0;

function updateCounter() {
  count++;
  inputTablo2.innerHTML = count;
  console.log(count);
  if (count === 30) {
    clearInterval(intervalId);
    inputTablo1.innerHTML = 'Счетчик остановлен!';
    inputTablo1.style.color = "red";
  }else{
    inputTablo1.innerHTML = 'Счетчик запущен!';
    inputTablo1.style.color = "#03f838";
  }
}

function startInterval() {
  intervalId = setInterval(updateCounter, 1000);
}

btn1.addEventListener('click', startInterval);

btn2.onclick = function () {
  count=0;
  inputTablo2.innerHTML = count;
  if (count === 0) {
    inputTablo1.innerHTML = 'Счетчик обнулен!';
    inputTablo1.style.color = "#f0f404";
  }
};