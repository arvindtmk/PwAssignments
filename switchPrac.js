let a = 70;
let b = 60;
let c = 58;


function totalScore(stuGrade = a+b+c)
{
    switch (true)
    {
        case stuGrade <= 100:
            console.log("Lowest score")
            break;
        case stuGrade > 100 && stuGrade <= 200:
            console.log("Average score")
            break;
        case stuGrade > 275:
            console.log("Highest score")
            break;
        default:
            console.log("No grade")
            break;
    }
}

totalScore()