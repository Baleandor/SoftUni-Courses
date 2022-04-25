function daysofweek(days){
    if(days < 1 || days > 7){
        console.log('Invalid day!');
    }else {
        let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        let index = days - 1;
        console.log(day[index]);
    }
}