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

const wifiStatus = document.querySelector("#isWifi span");
const wifiStatusIcon = document.querySelector("#isWifi i");
const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection || 0;
function updateConnectionStatus() {
    let message = "";
    let iconClassName;
    console.log(conn);
    if (!conn) { message = "no data"; }
    if (typeof (conn.type) != "undefined") {
        if (conn.type === "wifi") {
            message = "wifi";
            iconClassName = "fa-solid fa-wifi"
        } else {
            message = "no info";
            iconClassName = "";
        }

    } else if (typeof (conn.effectiveType) != "undefined") {
        message = conn.effectiveType;
        iconClassName = "fa-solid fa-signal"
    } else {
        message = "no info";
        iconClassName = "";
    }
    console.log(wifiStatus.innerText)
    wifiStatus.innerText = message;
    wifiStatusIcon.className = iconClassName;
}

updateConnectionStatus();
conn.addEventListener("change", updateConnectionStatus)

// 배터리 관련 status
const batteryStatus = document.querySelector("#battery span");
const chargeStatus = document.querySelector("#battery div:last-child");
const updateBatteryStatus = (battery) => {
    batteryStatus.innerText = parseInt(battery.level * 100).toString() + "%";
}
const updateChargeStatus = (battery) => {
    if (!battery.charging) {
        chargeStatus.classList.add("hidden");
    } else {
        chargeStatus.classList.remove("hidden");
    }
}
navigator.getBattery().then((battery) => {
    updateBatteryStatus(battery);
    updateChargeStatus(battery);
    battery.addEventListener("onchargingchange", () => updateChargeStatus(battery));
    battery.addEventListener("onlevelchange", () => updateBatteryStatus(battery));
});
