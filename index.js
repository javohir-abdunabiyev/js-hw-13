let students = [
    {
        id: 1,
        name: "MuhammadAli",
        course: "Frontend",
        startDate: "2023-12-02",
        scores: [
            {
                theme: "HTML",
                score: 7
            },
            {
                theme: "CSS",
                score: 8
            },
            {
                theme: "JS",
                score: 4
            },
        ]
    },
    {
        id: 2,
        name: "Javohir",
        course: "Frontend",
        startDate: "2023-12-10",
        scores: [
            {
                theme: "HTML",
                score: 4
            },
            {
                theme: "CSS",
                score: 9
            },
            {
                theme: "JS",
                score: 6
            },
        ]
    },
    {
        id: 3,
        name: "Munir",
        course: "Frontend",
        startDate: "2023-10-29",
        scores: [
            {
                theme: "digital",
                score: 7
            },
            {
                theme: "HTML",
                score: 9
            },
            {
                theme: "CSS",
                score: 5
            },
            {
                theme: "JS",
                score: 7
            },
        ]
    },
    {
        id: 4,
        name: "Jahonbek",
        course: "Frontend",
        startDate: "2023-10-29",
        scores: [
            {
                theme: "digital",
                score: 6
            },
            {
                theme: "HTML",
                score: 7
            },
            {
                theme: "CSS",
                score: 6
            },
            {
                theme: "JS",
                score: 8
            },
        ]
    },
]



for(let item of students) { 
        item.averageScore = item.scores.reduce((a, b) => a + b.score, 0)
        item.averageScore = (item.averageScore / item.scores.length).toFixed(2)
        let varience = Date.parse(new Date()) - Date.parse(item.startDate)
        item.durationOfstudy = Math.round((varience / 1000) / 60 / 60 / 24 / 30) + "/month"
}

console.table(students)

let smartest = students[0]

for(let i = 0; i < students.length; i++) {
    if(students[i].averageScore > smartest.averageScore) {
        smartest = students[i]
    }
}
console.log("smartest", smartest);


let longer = students[0]
let less = students[0]
for(let i = 0; i < students.length; i++) {
    if(students[i].durationOfstudy > longer.durationOfstudy) {
        longer = students[i]
    } else {
        for(let i = 0; i < students.length; i++) {
            if(students[i].durationOfstudy < less.durationOfstudy) {
                less = students[i]
            }
        }
    }
}
console.log("Дольше всех учится", longer);
console.log("Меньше всех учится", less);