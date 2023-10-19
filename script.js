
        // Function to detect the user's browser and version
        function detectBrowser() {
            var browserInfo = "Browser: " + navigator.appName + "<br>Version: " + navigator.appVersion;

            // Display the information in the browser-info div
            document.getElementById("browser-info").innerHTML = browserInfo;
        }

        // Call the detectBrowser function when the page loads
        window.onload = detectBrowser;
    </script>
