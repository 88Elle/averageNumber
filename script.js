var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Bведите третье число');

if((b <a  && a < c) || (c < a && a < b)){
    alert('Среднее число ' + a);
}else if((a < b && b < c) || (c < b && b < a)){
    alert('Среднее число ' + b);
}else if((a < c && c < b) || (b < c && c < a)){
    alert('Среднее число ' + c);
}else {
    alert('Математика')
}
