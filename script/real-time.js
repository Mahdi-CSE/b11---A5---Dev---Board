
// getting day
function gettingDay(){
    const now = new Date();
    const days = ['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
    const day = now.getDay();
    return `${days[day]} ,`;
}
// getting time
function gettingDate(){
    const currentTime = new Date();
    const months = ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sept','Oct','Nov','Dec'];
    const month = currentTime.getMonth();
    const date = currentTime.getDate();
    const year = currentTime.getFullYear();
    return `${months[month]} ${date} ${year}`;
}

// getting time
function gettingTime(){
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    let amOrPm;
    if(hour < 12){
        amOrPm = "AM";
    }else{
        amOrPm = "PM";
    }
    return `${hour}:${min}:${sec} ${amOrPm}`;
}

console.log(gettingTime());

const currentDay = gettingElementById("day");
currentDay.innerText = gettingDay();

const currentTime = gettingElementById("date");
currentTime.innerText = gettingDate();