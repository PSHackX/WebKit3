# 🛠️ WebKit3

Welcome to **WebKit3**, a sleek, minimalist, and lightweight multi-payload local host designed specifically for the **PlayStation 3** browser environment. 

This project is optimized to run smoothly on legacy consoles without exhausting system memory (RAM), featuring a clean cyber-dark theme and dynamic system firmware detection.

## 🚀 Features

* 📱 **Automatic Detection:** Instantly identifies if you are running the page on a PS3, PS4, or a PC/Linux testing environment.
* 📦 **Modular Architecture:** Payloads are split into individual external JavaScript files to ensure clean execution and prevent browser freezing.
* 🛡️ **Open Source:** Fully licensed under the GPL-2.0 standard.

## 📂 Included Payloads

1. **Load Bin Loader:** Opens up network listeners (Default Port: `9020`) to receive external `.bin` payloads wirelessly from your PC or smartphone.
2. **Launch PS3HEN:** Triggers local storage verification to safely load and initialize the PS3HEN environment from your USB storage (`/dev_usb000/`).
3. **Run App2USB:** Intercepts system storage paths to redirect game installations and data straight to an external USB hard drive.
4. **Enable Spoof:** Reads a localized configuration file (`spoof.cfg`) to safely mask your current system firmware version.

## 🛠️ How to Use Locally

### On PC / Testing Environment
1. Clone or download this repository to your computer.
2. Open `index.html` using any modern browser (like Firefox or Chrome).
3. *Note for Firefox users:* If external scripts are blocked locally due to CORS policies, toggle `privacy.file_unique_origin` to `false` inside `about:config` for local testing.

### On PlayStation 3 / PlayStation 4
1. Format a USB flash drive to **FAT32** (using an MBR partition table).
2. Copy `index.html`, all `.js` files, and your `spoof.cfg` directly to the root of the USB drive.
3. Plug the USB drive into the rightmost port of your console.
4. Open the console's Internet Browser and type the following local URL:
   * **PS3:** `file:///usb000/index.html`
   * **PS4:** `file:///mnt/usb0/index.html`
5. Bookmark the page for fast access!

## 📄 License

This project is licensed under the **GNU General Public License v2.0** - see the [LICENSE](LICENSE) file for details.

---
*Developed by PSHackX. Built for learning web structures, system detection, and legacy browser optimization.*
