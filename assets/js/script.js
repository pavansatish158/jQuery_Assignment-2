
   // Tabs display on selection

$(document).ready(function() {
    $(".nav-tabs a").click(function() {
        $(this).tab('show');
    });
    $('.nav-tabs a').on('shown.bs.tab', function(event) {
        var x = $(event.target).text(); // active tab
        var y = $(event.relatedTarget).text(); // previous tab
    });
});
    // Type-a-head for area names 
$(function() {
    var availableTags = [
        "100 Buildings Center",
       
        "50 Buildings Center",

        "ADB Road",

        "APSP",

        "Ashok Nagar",

        "Atchampet Junction",

        "Atchutapuram",

        "Ayodyanagar",

        "Balaji Cheruvu",

        "Beach Road",

        "Bhanugudi Junction",

        "Bhaskar Nagar",

        "Big Market Street",

        "Cheediga",

        "Cinema Hall Road",

        "Collectorate",

        "Commercial Road",

        "Commercial Tax Colony",

        "Court Office",

        "Dairyform Center",

        "Drivers Colony",

        "Dummulapeta",

        "Dwaraka Nagar",

        "Endowments Colony",

        "Engineering College",

        "Gaigolupadu",

        "Gandhi Nagar",

        "Ganganapalli",

        "Gangaraju Nagar",

        "Ganjamvari Street",
        
        "Godari Gunta",

        "Gold Market Center",

        "Government Hospital",

        "Income Tax Colony",

        "Indrapalem",

        "J Ramaraopeta",

        "Jagannaickpur",

        "Jawahar Street",

        "Kacheripeta",

        "Karnamgari Junction",

        "Kondayyapalem",

        "Kovvada",

        "LB Nagar",

        "Madhav Nagar",

        "Madhavapatnam",

        "Madura Nagar",

        "Maha Lakshmi Nagar",

        "Main Road",

        "Majestic Street",

        "Mehar Nagar",

        "MSN Charities",
        
        "Nadakuduru",
        
        "Nagamallithota Junction",

        "Narasannanagar",

        "Nemam",

        "NFCL Road",

        "Ontimamidi Junction",

        "Others",

        "Others Karapa",

        "Others Phitapuram",

        "P R College Road",

        "Pallamraju Nagar",

        "Panasapadu",

        "Penuguduru",

        "Penumarthy Road",

        "Police Quarters",

        "Postal Colony",

        "Pratap Nagar",

        "Pulavarthy Vari Street",

        "R R Road",
        
        "Railway Station Road",

        "Rajeswari Nagar",

        "Ramakrishnaraopeta",

        "Ramanayyapeta",

        "Ramaraopeta",

        "Rameswaram",

        "Rammohanraja Nagar",

        "Rayudupalem",

        "Recharlapeta",

        "Repur",

        "RTC Complex Road",

        "RTO Office Road",

        "S Atchutapuram",

        "Salipeta",

        "Sambhamurthy Nagar",

        "Santhinagar",

        "Sarpavaram Junction",

        "Sarpavaram Village",
        
        "Sasikanthnagar",

        "Siddartha Nagar",

        "Sri Nagar",

        "Sriram Nagar",

        "Suresh Nagar",

        "Suryanarayanapuram",

        "Suryaraopet",

        "Tammavaram",

        "Temple Street",

        "Tilak Street",

        "Timmapuram",

        "Turangi",

        "Vakalapudi",

        "Valasapakala",

        "Venkat Nagar",

        "Vidyut Nagar",

        "Vydya Nagar",
        
        "Wharf Road"
    ];
    $("#automplete-6").autocomplete({
        source: availableTags
    });
    $("#automplete-6").autocomplete("option", "position", {
        my: "right+70 top+100",
        at: "right top"
    })
});



        // light box for movie images
$(document).ready(function() {
    var time = 400; //set time
    // storing src attribute in empty array
    var arrayImages = [];
    // push all src attribute in array
    $('.thumb_gallery').each(function() {
        var attrSrc = $(this).attr('src');
        arrayImages.push(attrSrc);
    });
    var firstItem = arrayImages[0]; // taking first item in array
    var lastItem = arrayImages[arrayImages.length - 1]; // taking last item in array
    var htmlImg1 = '<div class="container_img"><div class="closebtn">&#x2715;</div><div class="con-ac-ar"><span class="previousImage">&#x276C;</span><img class="activePopUpImg" src="'
    var htmlImg2 = '"><span class="nextImage">&#x276D;</span></div>'
        //function openPopUpImage
    function openPopUpImage() {
            for (var i = 0; i < arrayImages.length; i++) {
                var attr_src = $(this).attr('src');
                if (arrayImages[i] == attr_src) {
                    $('#background_overlay').html(htmlImg1 + arrayImages[i] + htmlImg2);
                    $('#background_overlay').fadeIn(time);
                }
            }
        }
        // next Image function
    function nextImage() {
            var currentImage = $('.activePopUpImg').attr('src');
            for (var i = 0; i < arrayImages.length; i++) {
                if (currentImage == arrayImages[i] && currentImage !== lastItem) {
                    $('#background_overlay').html(htmlImg1 + arrayImages[i + 1] + htmlImg2);
                }
            }
        }
        // previousImage function
    function previousImage() {
            var currentImage = $('.activePopUpImg').attr('src');
            for (var i = 0; i < arrayImages.length; i++) {
                if (currentImage == arrayImages[i] && currentImage !== firstItem) {
                    $('#background_overlay').html(htmlImg1 + arrayImages[i - 1] + htmlImg2);
                }
            }
        }
        // open image
    $('.thumb_gallery').click(openPopUpImage);
    //close image
    $(document).on('click', '.closebtn', function() {
        $('#background_overlay').fadeOut(time);
    });
    //next Image
    $(document).on('click', '.nextImage', nextImage);
    //previous Image
    $(document).on('click', '.previousImage', previousImage);
    //keyboard  
    $(document).keydown(function(e) {
        e = e || window.event;
        if (e.keyCode == '37') { //arrow left key
            previousImage();
        } else if (e.keyCode == '39') { //arrow right key 
            nextImage();
        } else if (e.keyCode == '27') { // esc key
            $('#background_overlay').fadeOut(time);
        }
    });
});



       // Image slider's Prevous,Next buttons
$(document).ready(function() {
    var divs = $('.slider>div');
    var now = 0; // currently shown div
    divs.hide().first().show(); // hide all divs except first
    $("button[name=next]").click(function() {
        divs.eq(now).hide();
        now = (now + 1 < divs.length) ? now + 1 : 0;
        divs.eq(now).show(); // show next
    });
    $("button[name=prev]").click(function() {
        divs.eq(now).hide();
        now = (now > 0) ? now - 1 : divs.length - 1;
        divs.eq(now).show(); // show previous
    });
});

      // Tooltip 
$("#jobs").hover(function() {
    $(this).css('cursor', 'pointer').attr('title', 'Please subscribe for latest job alerts.');
}, function() {
    $(this).css('cursor', 'auto');
});

// modal pop up
$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
        e.preventDefault();
    });
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
        e.preventDefault();
    });
});

// star rating
$(document).ready(function() {

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function() {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function(e) {
            if (e < onStar) {
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function() {
        $(this).parent().children('li.star').each(function(e) {
            $(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    $('#stars li').on('click', function() {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }

        // Response message for the selected star
        var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
        var msg = "";
        if (ratingValue > 1) {
            msg = "Thanks! You rated us " + ratingValue + " stars.";
        } else {
            msg = "We will improve ourselves. You rated us " + ratingValue + " stars.";
        }
        responseMessage(msg);
    });
});
function responseMessage(msg) {
    $('.success-box').fadeIn(200);
    $('.success-box div.text-message').html("<span>" + msg + "</span>");
}