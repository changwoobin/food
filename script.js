function onclickEvent() {
    const menu = document.querySelector(".checking")
    if(menu.style.display=='none'){ 		
    	menu.style.display = 'block'; 	
    }else{ 		
    	menu.style.display = 'none'; 	
    } 
}


function search() {
    const input = document.querySelector(".searchvalue")

    name = input.value
    input.innerHTML = ''
    var i
    var list = [] 
    for (i = 1; i <= 10; i++)
    {
        var checkbox = document.querySelector(`.element${i}`)

        if (checkbox.checked == true) {
            list.push(i)
        }
    }

    var xhr = new XMLHttpRequest();
    var url = 'http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1'; /*URL*/
    var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'v5ULwZNX2iXk3YugX6m7qKJZBrYgLBR1YEjXLru%2F53FX6BWBLPuqwWQRFUL8kMi2iydGfx9fHzYFpJS4z1IFEw%3D%3D'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('desc_kor') + '=' + encodeURIComponent(name); /**/
    queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            const sect = document.querySelector("section")
            sect.innerHTML = ''
            const data = JSON.parse(xhr.responseText)
            const items = data.body.items

            console.log(items)
            items.forEach(element => {
                var div = document.createElement('div')
                var value = ''
                list.forEach(num => {
                    switch(num) {
                        case 1:
                            if (element.SERVING_WT == 'N/A'){
                                value = value + "1회제공량 (g): " + "제공하지 않음" + '<br>'
                                break
                            }
                            value = value + "1회제공량 (g): " + element.SERVING_WT + '<br>'
                            break
                        case 2:
                            if (element.NUTR_CONT1 == 'N/A'){
                                value = value + "열량 (kcal): " + "제공하지 않음" + '<br>'
                                break
                            }
                            value = value + "열량 (kcal): " + element.NUTR_CONT1 + '<br>'
                            break
                        case 3:
                            if (element.NUTR_CONT2 == 'N/A'){
                                value = value + "탄수화물 (g): " + "제공하지 않음" + '<br>'
                                break
                            }
                            value = value + "탄수화물 (g): " + element.NUTR_CONT2 + '<br>'
                            break
                        case 4:
                            if (element.NUTR_CONT3 == 'N/A'){
                                value = value + "단백질 (g): " + "제공하지 않음" + '<br>'
                                break
                            }
                            value = value + "단백질 (g): "+element.NUTR_CONT3 + '<br>'
                            break
                        case 5:
                            if (element.NUTR_CONT4 == 'N/A'){
                                value = value + "지방 (g): " + "제공하지 않음" + '<br>'
                                break
                            }
                            value = value + "지방 (g): "+element.NUTR_CONT4 + '<br>'
                            break
                        case 6:
                            if (element.NUTR_CONT5 == 'N/A'){
                                value = value + "당류 (g): " + "제공하지 않음" + '<br>'
                                break
                            }
                            value = value + "당류 (g): "+element.NUTR_CONT5 + '<br>'
                            break
                        case 7:
                            if (element.NUTR_CONT6 == 'N/A'){
                                value = value + "나트륨 (mg): " + "제공하지 않음" + '<br>'
                                break
                            }
                            value = value + "나트륨 (mg): "+element.NUTR_CONT6 + '<br>'
                            break
                        case 8:
                            if (element.NUTR_CONT7 == 'N/A'){
                                value = value + "콜레스테롤 (mg): " + "제공하지 않음" + '<br>'
                                break
                            }
                            value = value + "콜레스테롤 (mg): "+element.NUTR_CONT7 + '<br>'
                            break
                        case 9:
                            if (element.NUTR_CONT8 == 'N/A'){
                                value = value + "포화지방산 (g): " + "제공하지 않음" + '<br>'
                                break
                            }
                            value = value + "포화지방산 (g): "+element.NUTR_CONT8 + '<br>'
                            break
                        case 10: 
                            if (element.NUTR_CONT9 == 'N/A'){
                                value = value + "트랜스지방산 (g): " + "제공하지 않음" + '<br>'
                                break
                            }
                            value = value + "트랜스지방산 (g): "+element.NUTR_CONT9 + '<br>'
                            break       
                    }
                })
                div.innerHTML = element.DESC_KOR + '<br>' + value
                sect.appendChild(div)
            });
        }
    };

    xhr.send('');
}
