var gradeAssignerRevisited = function(number) {
    if (number > 89) {
    return "A";
  } else if (number > 79) {
    return "B";
  } else if (number > 69) {
    return "C";
  } else if (number > 59) {
    return "D";
  } else {
    return "F";
  }
}

for ( i = 60; i <= 100; i++ ) {
  if ( i <= 89 ) {
    console.log("A score of " + i + " gives a " + gradeAssignerRevisited(i) + ".");
  } else {
    console.log("A score of " + i + " gives an " + gradeAssignerRevisited(i) + ".");
  }
}