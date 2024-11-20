
const lunar = require('chinese-lunar');

    function showTimeMsg(){  
        var timeElement = document.getElementById("firstPageText");  //h1
        setInterval(function() {  
            var now = new Date();  
            var hours = now.getHours();  
            var minutes = now.getMinutes().toString().padStart(2, '0'); // 转换为两位数并补零  
            //var seconds = now.getSeconds().toString().padStart(2, '0'); // 转换为两位数并补零  
            var currentTime = hours + '时' + minutes + '分';// + seconds + '秒'; // 使用空格分隔 
            
                var st1 = "";
            switch(hours){
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    st1 = "你好";break;
                case 5:
                case 6:st1 = "早安";break;
                case 7:
                case 8:
                    st1 = "早上好";break;
                case 9:
                case 10:
                    st1 = "上午好";break;
                case 11:
                case 12:
                case 13:
                    st1 = "中午好";break;
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                    st1 = "下午好";break;
                case 19:
                case 20:
                case 21:
                case 22:
                    st1 = "晚上好";break;
                case 23:
                    st1 = "晚安";break;
                default:
                    st1 = "你好";
            }
            var hol = "。";//节日

            var year = now.getFullYear();  
            var month = now.getMonth() + 1; // getMonth() 返回的是从0开始的月份，所以需要加1  
            var day = now.getDate();
            var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];  
            var ind = now.getDay();
            var week = weeks[ind];  
            var Sun = "今天是" + year +"年"+month+"月" + day + "日" + "，";
            var Lan = "农历XXXX年XX月XX";
            var week = week + "。";
            
            timeElement.innerHTML = st1+"，" + Sun + week+"<br/>" + Lan + hol +"<br/>"+ "现在是北京时间" + currentTime;  
        }, 1000); // 每1000毫秒（1秒）执行一次  
    };
    function setDate() {  
        const currentDate = new Date();  

        const secondsRatio = currentDate.getSeconds() / 60;  
        const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;  
        const hoursRatio = ((minutesRatio + currentDate.getHours()) % 12) / 12;  

        transformHand('.second-hand', secondsRatio);  
        transformHand('.minute-hand', minutesRatio);  
        transformHand('.hour-hand', hoursRatio);  
    }  

    function transformHand(element, ratio) {  
        const deg = ratio * 360;  
        const hand = document.querySelector(element);  
        hand.style.transform = `rotate(${deg}deg)`;  
    }  
 
    document.addEventListener('DOMContentLoaded', (event) => {  
        showTimeMsg();  
        setInterval(setDate, 1000);  
        setDate(); // 初始设置时间  
         
    });
     