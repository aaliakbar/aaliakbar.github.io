function selectFacebook() {
    var checkBox = document.getElementById("facebook_cb");
    var text =  document.getElementsByClassName("facebook");
    if (checkBox.checked == true){
        $('.facebook').show();
    } else {
       $('.facebook').hide();
    }
}
function selectLinkedin() {
    var checkBox1 = document.getElementById("linkedin_cb");
    var text1 =  document.getElementsByClassName("linkedin");
    if (checkBox1.checked == true){
        $('.linkedin').show();
    } else {
       $('.linkedin').hide();
    }
}
function selectTwitter() {
    var checkBox2 = document.getElementById("twitter_cb");
    var text2 =  document.getElementsByClassName("twitter");
    if (checkBox2.checked == true){
        $('.twitter').show();
    } else {
       $('.twitter').hide();
    }
}
// JavaScript Document
window.onload = function() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];;
    var date = new Date();
    document.getElementById('date').value = months[date.getMonth()] +' '+ days[date.getDay()] +' '+ date.getDate() +' '+ date.getFullYear(); }; $(document).ready(function () { var mutualLicense = jQuery('#mutual_license'); var select = this.value; mutualLicense.change(function () {
    if ($(this).val() == 'mutual_license_yes') {
        $('.mutual_license').show();
    }
    else $('.mutual_license').hide(); // hide div if value is not "custom"
        })
});
$(document).ready(function () {
var disclaimerType = jQuery('#selectPosition'); var select = this.value; disclaimerType.change(function () {
    if ($(this).val() == 'advisor') {
        $('.advisor_disclaimer').show();
                $('.associate_disclaimer').hide();
                $('.advisor_disclaimer_pq').hide();
                $('.associate_disclaimer_pq').hide();
                $('.manager_disclaimer').hide();
                $('.manager_disclaimer_pq').hide();
                $("#position,#position_LI,#position_TW").text("advisor");
    }
        else if ($(this).val() == 'Advisor_PQ') {
        $('.advisor_disclaimer').hide();
                $('.associate_disclaimer').hide();
                $('.advisor_disclaimer_pq').show();
                $('.associate_disclaimer_pq').hide();
                $('.manager_disclaimer').hide();
                $('.manager_disclaimer_pq').hide();
                $("#position,#position_LI,#position_TW").text("advisor");
    }
        else if ($(this).val() == 'Associate_Advisor') {
         $('.advisor_disclaimer').hide();
                $('.associate_disclaimer').show();
                $('.advisor_disclaimer_pq').hide();
                $('.associate_disclaimer_pq').hide();
                $('.manager_disclaimer_pq').hide();
                $('.manager_disclaimer').hide();
                $("#position,#position_LI").text("associate advisor");
                $("#position_TW").text("Advisor");

    }
        else if ($(this).val() == 'Associate_Advisor_PQ') {
          $('.advisor_disclaimer').hide();
                $('.associate_disclaimer').hide();
                $('.advisor_disclaimer_pq').hide();
                $('.associate_disclaimer_pq').show();
                $('.manager_disclaimer_pq').hide();
                $('.manager_disclaimer').hide();
                $("#position,#position_LI").text("associate advisor");
                $("#position_TW").text("Advisor");
    }
        else if ($(this).val() == 'Manager') {
          $('.advisor_disclaimer').hide();
                $('.associate_disclaimer').hide();
                $('.advisor_disclaimer_pq').hide();
                $('.associate_disclaimer_pq').hide();
                $('.manager_disclaimer_pq').hide();
                $('.manager_disclaimer').show();
                $("#position,#position_LI,#position_TW").text("Manager");
    }
        else if ($(this).val() == 'Manager_PQ') {
          $('.advisor_disclaimer').hide();
                $('.associate_disclaimer').hide();
                $('.advisor_disclaimer_pq').hide();
                $('.associate_disclaimer_pq').hide();
                $('.manager_disclaimer_pq').show();
                $('.manager_disclaimer').hide();
                $("#position,#position_LI,#position_TW").text("Manager");
    }
    else $('.advisor_disclaimer').hide();  // hide div if value is not "custom"
        })
});
$(document).ready(function () {
$("#firstname").blur(function(){
    $("#first_name").text(this.value);
        $("#first_name_LI").text(this.value);
        })
});
$(document).ready(function () {
$("#lastname").blur(function(){
    $("#last_name").text(this.value);
        $("#last_name_LI").text(this.value);
        })
});
$(document).ready(function () {
$("#lastname").blur(function(){
    $("#last_name").text(this.value);
        $("#last_name_LI").text(this.value);
        })
});
$(document).ready(function () {
$("#mac_sac").blur(function(){
    $("#macsac").text(this.value);
    $("#macsac_FB").text(this.value);
    $("#macsac_LI").text(this.value);
    $("#macsac_LI_PQ").text(this.value);
        })
});
$(document).ready(function(){
    $("#FB_Help1").click(function(){
        $("#FBHelp1").toggle();
    });
});
$(document).ready(function(){
    $("#FB_Help2").click(function(){
        $("#FBHelp2").toggle();
    });
});
$(document).ready(function(){
    $("#FB_Help3").click(function(){
        $("#FBHelp3").toggle();
    });
});
$(document).ready(function(){
    $("#LI_Help1").click(function(){
        $("#LIHelp1").toggle();
    });
});
$(document).ready(function(){
    $("#LI_Help2").click(function(){
        $("#LIHelp2").toggle();
    });
});
$(document).ready(function(){
    $("#LI_Help3").click(function(){
        $("#LIHelp3").toggle();
    });
});
$(document).ready(function(){
    $("#LI_Help6").click(function(){
        $("#LIHelp6").toggle();
    });
});
