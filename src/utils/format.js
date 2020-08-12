const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Químicas",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades
function getSubject(subjectNumber){
    const position = +subjectNumber -1
    return subjects[position]
}

function convertHourToMinutes(time) {
    const [ hour, minutes ] =  time.split(':') //separa ex. 09:20 em hour = 09 e minutes = 20 
      return Number(hour * 60) + Number(minutes) //
    
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHourToMinutes
}