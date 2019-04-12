var str;

//先將id=demo的內容讀出來
str = document.getElementById('demo').innerHTML

//把str後面加上'demo'放回id=demo的內容裡
document.getElementById('demo').innerHTML = str + 'demo'