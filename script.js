const dateTimeDiv = document.getElementById("dateTime")
// console.log(dateTimeDiv);

const getCurrentDay = () =>{
    var weekday = new Array(7);

    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';
    let currentTime = new Date();

    return weekday[currentTime.getDay()];
}

const getCurrentTime =()=>{

    var monthArr = new Array(12);

    monthArr[0] = 'January';
    monthArr[1] = 'February';
    monthArr[2] = 'March';
    monthArr[3] = 'April';
    monthArr[4] = 'May';
    monthArr[5] = 'June';
    monthArr[6] = 'July';
    monthArr[7] = 'August';
    monthArr[8] = 'September';
    monthArr[9] = 'October';
    monthArr[10] = 'November';
    monthArr[11] = 'December';

    var date = new Date();
    var month = date.getMonth();
    var dateNum = date.getDate();

    let hours = date.getHours();
    let mins = date.getMinutes();

    let timeIndication = "AM";

    if(hours > 11){
        timeIndication = "PM";
        if(hours > 12) hours -=12;
    }

    if(mins < 10)
    {
        mins = "0" + mins
    }

    let returnEle = monthArr[month] + " " + dateNum + "|" + " " + hours + ":" + mins + " " + timeIndication

    return returnEle

}

dateTimeDiv.innerHTML = getCurrentDay() + " | " + getCurrentTime()
// getCurrentDay()
getCurrentTime()
// console.log(new Date(), "dfgf");