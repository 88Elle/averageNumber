var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Bведите третье число');

if((a < b) && (a > c)){
    alert(a);
}else if((a > b) && (b > c)){
    alert(b);
}else if((c < a) && (c > b)){
    alert(c);
}else{
    alert('Математика')
}