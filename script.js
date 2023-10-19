function displayBrowserInfo() {
            var browserName = navigator.appName;
            var browserVersion = navigator.appVersion;
            
            // Create a message with the browser name and version
            var message = "You are using " + browserName + " version " + browserVersion;

            // Display the information in the browser-info div
            var browserInfoDiv = document.getElementById("browser-info");
            browserInfoDiv.innerHTML = message;
        }

        // Call the displayBrowserInfo function when the page loads
        window.onload = displayBrowserInfo;
