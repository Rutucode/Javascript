//Write a program accept marks of 5 subjects calculate the percentage and display grade of student from percentage( grade : Distinction, first class, second class, pass, fail)
let marks = [43, 56, 64, 72, 54];
function avarage(marks){
    var sumOfMarks = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] ;
    
    avg = sumOfMarks/5;
    
    return avg;
}
function grade(percent){
    if(percent>100 || percent <0 ){
        return error;
    }
    if (percent >= 85){
        return distinction;
    } 
    else if (percent >= 75){
        return "first class";
    }
      else if (percent >= 65){
        return "second class";
    }
      else if (percent >= 45){
        return "third class";
    }
      else if (percent >= 35){
        return "pass";
    }
    else{
        return "fail";
    }
}
let percentage = avarage(marks);
console.log (grade(82));
