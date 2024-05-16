//program to print day of the week by taking number from 1 to 7 using switch statement.
function dayofWeek(val){
    let day = ""
    switch (val){
    case 1: 
    day = "Monday";
    break;
    
    case 2: 
    day = "Tuesday";
    break;
    
    
    case 3: 
    day = "Wednesday";
    break;
    
    
    case 4: 
    day = "Thrusday";
    break;
    
    case 5: 
    day = "Friday";
    break;
    
    case 6: 
    day = "Saturday";
    break;
    
    case 7: 
    day = "Sunday";
    break;
    
    default:
     day="Error"
    }
    return day;
    }
    
    console.log(dayofWeek(10));
    