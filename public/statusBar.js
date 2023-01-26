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
    wifiStatus.innerText = message;
    wifiStatusIcon.className = iconClassName;
}

updateConnectionStatus();
conn.addEventListener("change", updateConnectionStatus)

// 배터리 관련 status
const updateBatteryStatus = (battery) => {
    const batteryStatus = document.querySelector("#battery span");
    const batteryStatusIcon = document.querySelector("#battery i");
    const chargeStatus = document.querySelector("#battery i:last-child");
    console.log(batteryStatusIcon)
    const batteryPercentage = parseInt(battery.level * 100);
    batteryStatus.innerText = batteryPercentage.toString() + "%"
    if (battery.charging) {
        chargeStatus.className = "fa-solid fa-bolt";
    } else {
        chargeStatus.className = "";
        batteryStatusIcon.className = batteryPercentage > 80
            ? "fa-solid fa-battery-full"
            : batteryPercentage > 60
                ? "fa-solid fa-battery-three-quarters"
                : batteryPercentage > 40
                    ? "fa-solid fa-battery-three-quarters"
                    : batteryPercentage > 10
                        ? "fa-solid fa-battery-quarter"
                        : "fa-solid fa-battery-empty"
    }
}

navigator.getBattery().then((battery) => {
    updateBatteryStatus(battery);
    battery.onchargingchange = () => updateBatteryStatus(battery);
    battery.onlevelchange = () => updateBatteryStatus(battery);
});
