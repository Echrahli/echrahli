document.getElementById("downloadButton").addEventListener("click", function() {
    var apkFolderPath = "./apk/"; // Replace with the path to your APK folder
    var apkFileName = "E-chrahli.apk"; // Replace with the name of your APK file
    var downloadUrl = apkFolderPath + apkFileName;
    window.location.href = downloadUrl;
  });
  