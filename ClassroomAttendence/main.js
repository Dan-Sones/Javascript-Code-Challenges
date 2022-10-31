function getStudents(Classroom) {
    let {hasTeachingAssistant, classList} = Classroom;

    let teacher, teachingAssistant, students;

    if (hasTeachingAssistant) {
        [teacher, teachingAssistant, ...students] = classList;
    } else {
        [teacher, ...students] = classList;
    }

    return students;
}

console.log(getStudents({
    hasTeachingAssistant: true, classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
}));
