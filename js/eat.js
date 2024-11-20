var old_hour = "";

name_lst = {
    1:"早",
    2:"午",
    3:"晚",
    4:"上午",
    5:"下午",
    6:"夜间",
}
introduce_dict = {
    1:"早饭",
    2:"午餐（又名午饭、中餐、中饭等等），是指大约在中午或者之后一段时间所用的一餐，一般集中在下午一点至两点。在中国大陆，午餐的用餐时间通常是上午十一点至下午一点的两个小时。人们认为中餐是一天中最重要的一餐，也是食物和能量的主要补充，有所谓“早餐吃得好，中餐吃得饱，晚餐吃得少”的说法。",
    3:"作为一天中的最后一餐，通常是一天中最具家庭和社会意义的餐饮时刻之一。它不仅为人们提供了身体所需的营养和能量，更是一个家人团聚、朋友交流的温馨时刻",

    4:"",
    5:"下午加餐，通常指的是在午餐和晚餐之间增加的一次小餐。这一餐的目的主要是为了补充能量、维持血糖稳定，以及满足身体在下午时段对营养的需求。对于许多人来说，特别是那些需要长时间工作或学习的人，下午加餐是非常必要的。",
    6:"夜间加餐是指在晚上，特别是在睡前半小时至一小时内，进行的一次额外的饮食摄入"
}
good_lst = {
    1:["高纤维食物"],
    2:[""],
    3:[""],
    4:["上午加餐应选择营养丰富、易于消化和吸收的食物"],
    5:["水果",
        "奶类制品",
        "糕点",],
    6:[
        "清淡易消化的食物",
        "低热量的食物",
        "富含膳食纤维的食物",
        "富含营养的食物"
    ],
}
bed_lst = {
    1:["高糖食物"],
    2:[""],
    3:["过度油腻、辛辣、刺激性强或者过甜的食物"],
    4:[""],
    5:[""],
    6:["油腻、辛辣、刺激的食物"],
}
food_lst = {
    1:["全麦面包","燕麦片","馒头","粥类","杂粮","豆浆","脱脂牛奶","鸡蛋"],
    2:[""],
    3:["烤鱼","烤鸭","烧烤","馄饨","面条","拉面","火锅",],
    4:["苹果","香蕉","橙子","核桃","杏仁","纯牛奶","无糖酸奶","黄瓜","生菜","鸡蛋","燕麦","红薯"],
    5:[""],
    6:["4214","1223"],
}
// 可以向服务器请求食物
function knowName_var(){
    let name_var;
    let now = new Date();  
    let hours = now.getHours();  
    switch(hours){
        case 20:case 21:case 22:
        case 23:case 0:case 1:
        case 2:case 3:case 4:
           name_var = 6;  
            break
        case 5:case 6:case 7:case 8:
            name_var = 1; 
            break
        case 9:case 10:
            name_var = 4; 
            break
        case 11:case 12:case 13:
            name_var = 2;
            break
        case 14:case 15:case 16:
            name_var = 5;
            break
        case 17:case 18:case 19:
            name_var = 3;
            break
    }
    return name_var;
}
function init(bb= false) {  
    var p = document.getElementById("eat_p");
    var now = new Date();  
    var hours = now.getHours();  
    if (old_hour != hours){
        old_hour = hours;
    } else if(hours == old_hour) {
        return 0;
    } else return 0;
    var tex = "";  
    var name_var = knowName_var(); 

    tex = name_lst[name_var];
    if (name_var <= 3) random()?tex += "饭":tex= tex + "餐";
    name_var<=3?tex+="吃什么":tex+="加餐";
    document.title = tex; 
    p.textContent = tex; 

    var introduce = document.getElementById("introduce_p");
    var god = document.getElementById("good");
    var bed = document.getElementById("bed");
    introduce_str = introduce_dict[name_var];
/////////introduce
    if (introduce_str.length != 0){
        introduce.textContent = introduce_str;
    } else {
        removeOfId("introduce_p");
        removeOfId("introduce_title");
        removeOfId("introduce_ul");
    }
///////////// bed
    var good_ltem_lst = good_lst[name_var];
    good_ltem_lst = removeEmptyAndWhitespaceElements(good_ltem_lst);
    if(good_ltem_lst.length !== 0){  
        for (var i = 0; i < good_ltem_lst.length; i++) {    
            var listItem = document.createElement('li');   
            listItem.textContent = good_ltem_lst[i];   
            god.appendChild(listItem);   
        }  
    } else {  
        removeOfId("good_title");
        removeOfId("good");
    }
 ////// bed  
 var bed_ltem_lst = bed_lst[name_var];
 bed_ltem_lst = removeEmptyAndWhitespaceElements(bed_ltem_lst);
 if(bed_ltem_lst.length !== 0){  
     for (var i = 0; i < bed_ltem_lst.length; i++) {    
         var listItem = document.createElement('li');   
         listItem.textContent = bed_ltem_lst[i];   
         bed.appendChild(listItem);   
     }  
 } else {  
     removeOfId("bed_title");
     removeOfId("bed");
 }
        return name_var
};

function removeOfId(id_str){
    var element = document.getElementById(id_str);  
        if (element) {  
            // 获取元素的父元素  
            var parent = element.parentNode;                
            // 使用removeChild方法删除元素  
            parent.removeChild(element);  
        } 
}
function random(){
    var bo;
    Math.random() < 0.5 ? bo = false : bo = true;
    return bo;
};
function getRandomInt(min, max) {  
    min = Math.ceil(min);  
    max = Math.floor(max);  
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}
function removeEmptyAndWhitespaceElements(lst) {  
    // 使用 filter 方法遍历数组，并返回一个新数组，其中不包含空字符串或只包含空白字符的字符串  
    return lst.filter(function(item) {  
        // 检查元素是否为字符串类型  
        if (typeof item === 'string') {  
            // 使用 trim 方法去除字符串两端的空白字符，并检查是否非空  
            return item.trim() !== '';  
        }  
        // 如果元素不是字符串，我们假设它是有效的（除非你有其他特定的过滤条件）  
        // 返回 true 以保留非字符串元素  
        return true;  
    });  
} 

function for_str(id, str_len = 1, timeInSeconds = 5, text) {  
    // 获取DOM元素  
    var p = document.getElementById(id);  
    if (!p) {  
        console.error('Element not found with id:', id);  
        return;  
    }  
  
    // 初始字符串  
    var st = text;  
    var startTime = Date.now(); // 记录开始时间  
    var shouldStop = false; // 用于标记是否应该停止迭代  
  
    // 迭代函数  
    function iterate() {  
        if (shouldStop) {  
            return; // 如果应该停止，则直接返回  
        }  
  
        // 如果已经完成了足够的迭代次数，或者字符串长度不足以移动str_len个字符，则停止迭代  
        if (st.length < str_len) {  
            return;  
        }  
  
        // 截取前str_len个字符，并追加到末尾  
        var prefix = st.substring(0, str_len);  
        st = st.substring(str_len) + prefix;  
  
        // 更新DOM元素文本  
        p.textContent = st;  
  
        // 检查是否超过了指定时间  
        var elapsedTime = Date.now() - startTime;  
        if (elapsedTime >= timeInSeconds * 1000) {  
            shouldStop = true; // 超过时间，设置停止标记  
            return; // 停止迭代  
        }  
  
        // 设置下一次迭代的时间  
        var interval = 1000 / (str_len / st.length * timeInSeconds); // 根据str_len和总时间动态计算  
        if (interval < 20) { // 最小间隔设为20毫秒，防止浏览器无法处理过快的更新  
            interval = 20;  
        }  
  
        // 如果还有迭代剩余（这里我们假设无限迭代直到字符串长度不足以移动str_len个字符或超时），则继续迭代  
        setTimeout(iterate, interval);  
    }  
  
    // 开始迭代  
    iterate();  
} 

function eat_btn_slot(){
    let name_var = knowName_var();
    let fod = food_lst[name_var];
    let fd = "";
    for (let i = 0; i < fod.length; i++) {  
        if (fod[i] !== null && fod[i] !== '') {  // 检查元素是否为空（null或空字符串）  
            fd = fd + " " + fod[i];  
        }  else {
            fd = fd + " ?";
        }
    }
    let div = document.getElementById('food_show');  
    var pTags = div.querySelectorAll('p');
    let times = getRandomInt(1,16);
    pTags.forEach(function(pTag) {  
        let id = pTag.id;  
        if (id) { // 检查id是否存在  
            for_str(id,getRandomInt(1,fd.length),times,fd);
        }  
    });
};

document.addEventListener('DOMContentLoaded', (event) => {  
    init(false);
});
