
const divTime = document.querySelector("#time");

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    divTime.innerText = `${hours}:${minutes}`;
}
// 시간을 매분 바뀌게 해야 되기때문에 setInterval 기능을 활용해야한다
updateTime();
setInterval(updateTime, 5000);