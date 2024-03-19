function determineGrade(score) {
    if (score >= 70 && score <= 100) {
        return "A";
    } else if (score >= 60 && score < 70) {
        return "B";
    } else if (score >= 50 && score < 60) {
        return "C";
    } else if (score >= 40 && score < 50) {
        return "D";
    } else if (score >= 0 && score < 40) {
        return "F";
    } else {
        return "Invalid score";
    }
}

const score = 75; // You can change this value to test different scores
const grade = determineGrade(score);
console.log(`With a score of ${score}, the student's grade is: ${grade}`);