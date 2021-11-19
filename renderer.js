
(function setDefaultDate(){
    const arrInputDate=document.querySelectorAll('input[type="date"]');
    const date=new Date();
    arrInputDate.forEach(elem=>elem.value=date.toISOString().substring(0, 10));
})();

(function setCurrentDate(){
    const elem=document.querySelector(".currentDate");
    let timerId = setTimeout(function tick() {
        elem.textContent=new Date().toLocaleString().split(",").join("  ");
        timerId = setTimeout(tick, 1000); 
    }, 0);
})();

const button=document.querySelector(".button");
const [elemDateManufacture,elemDate,elemDateExpiration]=document.querySelectorAll('input[type="date"]');
const [elemShelfLife,elemCountDaysPassed,elemPercentage]=document.querySelectorAll('input[type="text"]');

button.addEventListener("click",e=>{
    const dateManufacture=elemDateManufacture.value;
    const date=elemDate.value;
    const dateExpiration=elemDateExpiration.value;

    if(dateManufacture===dateExpiration) {
        alert("Дата изготовления не может совпадать с датой окончания");
        return;
    }
    elemCountDaysPassed.value=(new Date(date)-new Date(dateManufacture))/(1000*3600*24)+1;
    elemShelfLife.value=(new Date(dateExpiration)-new Date(dateManufacture))/(1000*3600*24);
    elemPercentage.value=(elemCountDaysPassed.value*100/((new Date(dateExpiration)-new Date(dateManufacture))/(1000*3600*24))).toFixed(2)+"%";
});