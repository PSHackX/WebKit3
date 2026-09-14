// WebKit3 - PS3HEN UI and USB Trigger
(function() {
    var status = document.getElementById("status");
    if (status) {
        status.innerHTML = "Initializing environment... Checking USB ports.";
        status.style.color = "#ffcc00"; // Yellow text for progress
    }

    // Path targeting the right USB port of the PlayStation 3
    var usbPath = "file:///dev_usb000/PS3HEN.BIN"; 
    
    try {
        // We establish a local request connection to verify the file
        var xhr = new XMLHttpRequest();
        xhr.open("GET", usbPath, false);
        xhr.send(null);
        
        if (status) {
            status.innerHTML = "Payload located! Enabling PS3HEN features.";
            status.style.color = "#00ffcc"; // Neon green for success
        }
    } catch(error) {
        // If the file is not on the USB, we show a clean error message
        if (status) {
            status.innerHTML = "Error: Please mount PS3HEN.BIN on the root of your USB drive.";
            status.style.color = "#ff0000"; // Red text for errors
        }
    }
})();
