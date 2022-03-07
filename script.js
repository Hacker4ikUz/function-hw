function vozrast(age) {
    if(age >= 18){
        return true
    }else {
        return false
    }
}
let age = prompt('Сколько тебе лет?')
if(vozrast(age)){
    alert('Теперь у тебя есть доступ')
}else{
    alert('STOP!')
}


// a + b )
let a = +prompt('Первое число')
let b = +prompt('Второе число')
function calc(a,b) {
    return a + b;    
}
let res = (a,b)
document.write(res)

// Вернуть длинное имя |
// https://github.com/Hacker4ikUz/js-max-name