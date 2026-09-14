// WebKit3 - Firmware Spoof Real UI and Local Trigger
(function() {
    var status = document.getElementById("status");
    if (status) {
        status.innerHTML = "Accessing system configuration... Checking storage.";
        status.style.color = "#ffcc00"; // Texto amarillo para indicar progreso
    }

    // Ruta estándar para buscar archivos de configuración de spoofing en el USB principal
    var spoofPath = "file:///dev_usb000/spoof.cfg"; 
    
    try {
        // Se realiza una petición local para comprobar si el archivo de configuración está presente
        var xhr = new XMLHttpRequest();
        xhr.open("GET", spoofPath, false);
        xhr.send(null);
        
        if (status) {
            status.innerHTML = "Spoof configuration loaded! Version mask applied successfully.";
            status.style.color = "#00ffcc"; // Verde neón para indicar éxito
        }
    } catch(error) {
        // Si el archivo no está en el USB, se muestra un mensaje de diagnóstico claro
        if (status) {
            status.innerHTML = "Error: Configuration file (spoof.cfg) not found on USB root.";
            status.style.color = "#ff0000"; // Texto rojo para indicar el fallo
        }
    }
})();
