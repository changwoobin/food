var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'v5ULwZNX2iXk3YugX6m7qKJZBrYgLBR1YEjXLru%2F53FX6BWBLPuqwWQRFUL8kMi2iydGfx9fHzYFpJS4z1IFEw%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('desc_kor') + '=' + encodeURIComponent('바나나칩'); /**/
queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        console.log(JSON.parse(xhr.responseText));
    }
};

xhr.send('');