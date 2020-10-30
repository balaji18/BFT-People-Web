var myExtObject = (function() {

    return {
        loadFlag: function(country) {

            if (country == "") {
                $("#phone").intlTelInput({
                    autoPlaceholder: "off",
                    dropdownContainer: "body",
                    initialCountry: isSpectrum?"ng":"in",
                    separateDialCode: true,
                    utilsScript: "/assets/js/utils.js"
                });
            } else {

                $("#phone").intlTelInput({
                    autoPlaceholder: "off",
                    dropdownContainer: "body",
                    initialCountry: country.trim(),
                    separateDialCode: true,
                    utilsScript: "assets/js/utils.js"
                });
            }

        },

        loadFlagForRegister: function(country) {
            $("#register-phone").intlTelInput({
                autoPlaceholder: "off",
                dropdownContainer: "body",
                initialCountry: isSpectrum?"ng":"in",
                separateDialCode: true,
                utilsScript: "assets/js/utils.js"
            });
        },

        loadFlagForNewRegister: function(country) {
            $("#newregister-phone").intlTelInput({
                autoPlaceholder: "off",
                dropdownContainer: "body",
                initialCountry: isSpectrum?"ng":"in",
                separateDialCode: true,
                utilsScript: "assets/js/utils.js"
            });
        },

        getCountryCode: function() {
            const countryDetails = $('#selected-flag').attr("title");
            return countryDetails;
        },

        loadFlagForInvite: function(country) {
            // alert(country);
            $("#invite-phone").intlTelInput({
                autoPlaceholder: "off",
                dropdownContainer: "body",
                initialCountry: isSpectrum?"ng":"in",
                separateDialCode: true,
                utilsScript: "/assets/js/utils.js"
            });


        },

        loadFlagForEdit: function(country) {
           // console.log("In js : " + country);
            $("#mobile-edit").intlTelInput({
                autoPlaceholder: "off",
                dropdownContainer: "body",
                onlyCountries: [country],
                initialCountry: country,
                separateDialCode: true,
                utilsScript: "/assets/js/utils.js"
            });
        },



        DetectAndServe: function() {

            if (getMobileOperatingSystem() == "Android") {
                // window.location.href = "market://details?id=com.odigolive";
                window.location.href = "https://play.google.com/store/apps/details?id=com.odigolive";

            }
            if (getMobileOperatingSystem() == "iOS" ) {
                window.location.href = "https://itunes.apple.com/in/app/odigolive/id1335537656?mt=8";
            }

            if (getMobileOperatingSystem() == "Mac" ) {
                window.location.href = "https://itunes.apple.com/us/app/odigolive/id1335537656?ls=1&mt=8";
            }
            if (getMobileOperatingSystem() == "unknown") {
                // window.location.href = "https://play.google.com/store/apps/details?id=com.odigolive";
                window.location.href = "https://www.odigolive.com";
            }
        },

        setTabFocus: function() {
            if ($(window).width() <= 420) {

                $('.nav-tabs a[data-target="#mobile"]').tab('show');
            } else {

                $('.nav-tabs a[data-target="#web"]').tab('show');
            }
        },

        archiveGroup: function(divId) {
            $("#div-" + divId).hide();
        },

        toastMsg: function() {
            $('.toast-msg').fadeIn(300).delay(5000).fadeOut(300);
        },

        changeFocus: function(id) {
            document.getElementById(id).focus();
        },



        getCountryName: function(country) {
            var subArray;
            var countryShortName = "";
            for (var i = 0; i < allCountries.length; i++) {
                subArray = allCountries[i];
                if (subArray.name.trim().toUpperCase() === country.trim().toUpperCase()) {
                    countryShortName = subArray.iso2;
                }
            }
            this.loadFlagForEdit(countryShortName);
            countryShortName = "";

        },

        loadWebCam: function(type) {

            var player;
            if (type == "video") {
                player = videojs('attach-video', {
                    controls: true,
                    loop: false,
                    width: 400,
                    height: 250,

                    plugins: {
                        record: {
                            image: false,
                            audio: true,
                            video: true,
                            maxLength: 120,
                            debug: true,
                            audioEngine: 'recordrtc',
                            videoMimeType: 'video/webm'
                        }
                    }
                });
            } else if (type == "audio") {
               // console.log("Record Audio");
                player = videojs('attach-audio', {
                    controls: true,
                    width: 400,
                    height: 70,
                    plugins: {
                        wavesurfer: {
                            src: "live",
                            waveColor: "#71D3D3",
                            progressColor: "#2E732D",
                            debug: true,
                            cursorWidth: 1,
                            msDisplayMax: 60,
                            hideScrollbar: false
                        },
                        record: {
                            audio: true,
                            video: false,
                            maxLength: 20,
                            debug: true
                        }
                    }
                });
            } else {
                player = videojs("attach-image", {
                    controls: true,
                    width: 400,
                    height: 250,
                    controlBar: {
                        volumeMenuButton: false,
                        fullscreenToggle: false
                    },
                    plugins: {
                        record: {
                            image: true,
                            debug: true
                        }
                    }
                });

            }
            return player;
        },

        downloadFile: function(fileUrl) {
            var res;
           // console.log("fileUrl : " + fileUrl);
            // window.location = fileUrl;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", fileUrl);
            xhr.responseType = "blob";
            xhr.onload = function() {
                if (xhr.status && xhr.status === 200) {
                    savePdf(xhr.response, "dropboxFile");
                    //console.log("res:"+res);
                }
            };
            xhr.send();

            // return key;
        },

        getDropBoxFile: function() {
            var file = localStorage.getItem("dropboxFile");
            return file;
        },

        getDate: function() {
            var time = new Date();
            var day = time.getDate();
            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            var months = month[time.getMonth()];
            var year = time.getFullYear();
            return day + " " + months + " " + year
        },


        loadCalenderForContent: function(id) {
           $('#' + id).datepicker({
                autoclose: true,
                startDate: '-0m',
                dateFormat: 'dd-mm-yy'
            });
        },

        loadClock: function(id) {
            $('#' + id).clockpicker({
                autoclose: true,
                placement: 'top',
                align: 'left',
            });
        },
        loadClockForDueDate: function(id) {
            $('#' + id).clockpicker({
                autoclose: true,
                placement: 'bottom',
                align: 'left',
            });
        },

        loadClockForAttendanceConfig: function(id) {
            $('#' + id).clockpicker({
                autoclose: true,
                placement: 'bottom',
                align: 'left'
            })
        },

        findBwoser: function() {
            var browser = "";
            if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
                browser = 'opera';
            } else if (navigator.userAgent.indexOf("Chrome") != -1) {
                browser = 'chrome';
            } else if (navigator.userAgent.indexOf("Safari") != -1) {
                browser = 'safari';
            } else if (navigator.userAgent.indexOf("Firefox") != -1) {
                browser = 'firefox';
            } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
            {
                browser = 'IE';
            } else {
                browser = "NIL";
            }

            return browser;

        },

        getFormatedDate: function(data) {
           // console.log(data);
            var dataArr;
            var type;
            if(data.includes("/")){
                dataArr = data.split("/");
                type = "slash";
            }

            if(data.includes("-")){
                 dataArr= data.split("-");
                 type = "hiphan";

            }

            if (dataArr != "" && dataArr != null) {
                var index = Math.round(dataArr[1])
                var month = [];
                month[1] = "JAN";
                month[2] = "FEB";
                month[3] = "MAR";
                month[4] = "APR";
                month[5] = "MAY";
                month[6] = "JUN";
                month[7] = "JUL";
                month[8] = "AUG";
                month[9] = "SEP";
                month[10] = "OCT";
                month[11] = "NOV";
                month[12] = "DEC";
            }
            if(type == "slash"){
                return dataArr[0] + " " + month[index] + " " + dataArr[2]
            }else{
                return dataArr[2] + " " + month[index] + " " + dataArr[0]

            }

        },

        getWebinarDate: function(data) {
            // console.log(data);
            var dataArr;
            var type;

            dataArr= data.split("-");


            if (dataArr != "" && dataArr != null) {
                var index = Math.round(dataArr[1]);
                var month = [];
                month[1] = "JAN";
                month[2] = "FEB";
                month[3] = "MAR";
                month[4] = "APR";
                month[5] = "MAY";
                month[6] = "JUN";
                month[7] = "JUL";
                month[8] = "AUG";
                month[9] = "SEP";
                month[10] = "OCT";
                month[11] = "NOV";
                month[12] = "DEC";
            }
            return dataArr[2] + " " + month[index] + " " + dataArr[0]
        },

        loadVideoForRemarks: function() {
            var player;
            player = videojs('video-remark', {
                controls: true,
                loop: false,
                width: 400,
                height: 250,
                plugins: {
                    record: {
                        image: false,
                        audio: true,
                        video: true,
                        maxLength: 120,
                        debug: true,
                        audioEngine: 'recordrtc',
                        videoMimeType: 'video/webm'
                    }
                }
            });
            return player;
        },

        stopMedia: function() {
            $("video").each(function() {
                $(this).get(0).pause();
            });
            $("audio").each(function(){
                $(this).get(0).pause();
            });
        },

        indexedDbSupports: function() {
           window.indexedDB = window.indexedDB ||
               window.mozIndexedDB ||
               window.webkitIndexedDB ||
               window.msIndexedDB;
           if (window.indexedDB) {
              return true;
           } else {
               return false;
           }
        },

        objToArray: function(obj) {
             var arr = [];
             arr = obj.entries();
        },

        getOptionsValue:function(name) {
            var data = [];
            var checkboxes = document.getElementsByName(name);
            for (var i=0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    data.push(checkboxes[i].value);
                }
            }
            return data;
        },

        timeConvert: function(time) {
            // Check correct time format and split into components
            time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

            if (time.length > 1) { // If time format correct
                time = time.slice (1);  // Remove full string match value
                time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
                time[0] = +time[0] % 12 || 12; // Adjust hours
            }
            return time.join (''); // return adjusted time or original string
        }
    }


})(myExtObject || {});


var featurePageAnimation = (function() {
    return {
        loadAnimation: function() {}
    }
})(featurePageAnimation || {});


function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera || navigator.platform;
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    if(/Mac/.test(userAgent)) {
        return 'Mac'
    }
    return "unknown";
}

var workerPath = 'https://archive.org/download/ffmpeg_asm/ffmpeg_asm.js';
var worker;

function processInWebWorker() {
    var blob = URL.createObjectURL(new Blob(['importScripts("' + workerPath + '");var now = Date.now;function print(text) {postMessage({"type" : "stdout","data" : text});};onmessage = function(event) {var message = event.data;if (message.type === "command") {var Module = {print: print,printErr: print,files: message.files || [],arguments: message.arguments || [],TOTAL_MEMORY: message.TOTAL_MEMORY || false};postMessage({"type" : "start","data" : Module.arguments.join(" ")});postMessage({"type" : "stdout","data" : "Received command: " +Module.arguments.join(" ") +((Module.TOTAL_MEMORY) ? ".  Processing with " + Module.TOTAL_MEMORY + " bits." : "")});var time = now();var result = ffmpeg_run(Module);var totalTime = now() - time;postMessage({"type" : "stdout","data" : "Finished processing (took " + totalTime + "ms)"});postMessage({"type" : "done","data" : result,"time" : totalTime});}};postMessage({"type" : "ready"});'], {
        type: 'application/javascript'
    }));
    var worker = new Worker(blob);
    URL.revokeObjectURL(blob);
    return worker;
}

function PostBlob(blob) {
    var video = document.createElement('video');
    video.controls = true;
    var source = document.createElement('source');
    source.src = URL.createObjectURL(blob);
    source.type = 'video/mp4; codecs=mpeg4';
    video.appendChild(source);
    video.download = 'Play mp4 in VLC Player.mp4';
    inner.appendChild(document.createElement('hr'));
    var h2 = document.createElement('h2');
    h2.innerHTML = '<a href="' + source.src + '" target="_blank" download="Play mp4 in VLC Player.mp4" style="font-size:200%;color:red;">Download Converted mp4 and play in VLC player!</a>';
    inner.appendChild(h2);
    h2.style.display = 'block';
    inner.appendChild(video);
    video.tabIndex = 0;
    video.focus();
    video.play();
    document.querySelector('#record-video').disabled = false;
}

function savePdf(pdf, key) {
    var result;
    var fileReader = new FileReader();

    fileReader.onload = function(evt) {
        result = evt.target.result;
        try {
            localStorage.setItem(key, result);
        } catch (e) {
           // console.log("Storage failed: " + e);
        }
    };
    fileReader.readAsDataURL(pdf);
}

function showPosition(position) {
    var latlong = position.coords.latitude + "," + position.coords.longitude;
    return latlong;
}

var elmt = document.getElementById('chatText');
