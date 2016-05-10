/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name" class="text-center text-uppercase">%data%</h1>';
var HTMLheaderRole = '<br><span class="role text-center text-uppercase">%data%</span><span class="lnr lnr-code"></span>';

var HTMLcontactGeneric = '<li class="flex-item"><span>%contact%</span><span class="text-uppercase">%data%</span></li>';
var HTMLFacebook = '<li class="flex-item"><a href="https://www.facebook.com/N-C-Web-Design-1374398246183996/" title="Facebook"><i class="icon-facebook icomoon-group"></i></a></li>';
var HTMLemail = '<li class="flex-item"><a href="mailto:chenwebsolutions@gmail.com" title="email me" class="emailme"><span class="email"></span><span class="text-uppercase email-me">%data%</span></a></li>';
var HTMLtwitter = '<li class="flex-item"><a href="https://twitter.com/nchenwebtech" title="twitter"><i class="icon-twitter icomoon-group"></i></a></li>';
var HTMLgithub = '<li class="flex-item"><a href="https://github.com/ncmochacity" title="Github"><i class="icon-github icomoon-group"></i></a></li>';
var HTMLblog = '<li class="flex-item"><a href="https://donutsbean.tumblr.com/" title="my tumblr blog" class="tumblr-blog"><span class="blog"></span><span>%data%</span></a></li>';
var HTMLlocation = '<li class="flex-item"><span class="location"></span><span class="text-uppercase">%data%</span></li>';
var HTMLLinkedIn='<li class="flex-item"><a href="https://www.linkedin.com/in/nicki-chen-1b7781a7" title="LinkedIn"><i class="icon-linkedin2 icomoon-group"></i></a></li>';
var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry col-md-4"></div>';
var HTMLworkEmployer = '<div class="img-description work-description"><span class="caption"><div class="clock work-clock"></div><div class="date-month text-uppercase">%month%</div><div class="date-year">%year%</div><a href="%url%" class="text-uppercase title fancybox-thumb" data-fancybox-group="work-gallery" rel="fancybox-thumb" title="%title%">%data%</a></span><div class="job text-uppercase">-%job%</div><div class="text-section">%description%</div><div class="map"></div><div class="location-text text-uppercase text-center">%location%</div></div>';
var HTMLworkTitle = ' %data%</a></span></div>';
var HTMLworkDescription = '<p class="text-section">%data%</p>';
var HTMLworkDates='<div class="dates">%data%</div>';
var HTMLworkImage='<a href="%url%" target="_blank" title="%title%" class="fancybox-thumb" rel="fancybox-thumb"><img class="img-responsive portfolio-img" alt="work images" src="%data%"></a>';

var HTMLprojectStart = '<div class="project-entry col-md-4"></div>';
var HTMLprojectTitle = '<div class="img-description"><span class="caption"><div class="clock"></div><div class="date-month" >%month%</div><div class="date-year">%year%</div><a href="%url%" target="_blank" class="text-uppercase title fancybox-thumb" data-fancybox-group="gallery" rel="fancybox-thumb" title="%title%">%data%</a></span><p class="description">%description%</p></div>';
var HTMLprojectImage = '<a href="%url%" target="_blank" title="%title%" class="fancybox-thumb" rel="fancybox-thumb"><img class="img-responsive portfolio-img" alt="portfolio pictures"src="%data%" ></a>';
var HTMLlink='<a href="%url%" target="_blank"></a>';
var HTMLprojectDates='<div class="dates">%data%</div>';
var HTMLschoolStart = '<div class="education-entry col-md-6"></div>';
var HTMLschoolStartDates='<div class="dates">%data%</div>';
var HTMLschool='<div class="college text-center"><h3 class="academics text-uppercase text-center">Academics</h3></div>';
var HTMLschoolName = '<div class="school-icon"></div><a href="#" class="school text-uppercase text-center" title="%title%">%data%</a>';
var HTMLschoolDegree = ' <span class="degree text-uppercase">-- %data%</span>';
var HTMLschoolDates = '<div class="date-month text-uppercase">%month%</div><div class="date-year text-uppercase">%year%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<span class="major text-uppercase text-center"><br>Major: %data%</span>';
var HTMLonlineStart='<div class="online-entry col-md-6"></div>';
var HTMLonlineClasses = '<div class="online-heading text-center"><h3 class="online-class text-uppercase">Online Classes</h3><div class="screen"></div></div>';
var HTMLonlineTitle = '<a href="%url%" target="_blank" class="online-title text-uppercase text-center" title="%title%">%data%<span class="arrow-right text-center"></span>';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="calendar text-center"></div><div class="date-month text-uppercase text-center">%month%</div><div class="date-year text-center">%year%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName(name) || function(){};
    $('#name').html(iName);  
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x=loc.pageX;
  var y=loc.pageY;
  logClicks(loc.pageX, loc.pageY);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {
  
  console.log("initializeMap");
  var locations;
  var mapOptions = {
    zoom:13,
    center: new google.maps.LatLng(32.97598,-96.869088),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel:false,
    disableDefaultUI:true,
    navigationControl:false,
    mapTypeControl:false,
    scaleControl:false,
    styles:[
      {
        "stylers":[
          { "gamma" :1 },
          { "saturation":-41 },
          { "hue": "#00ffb3" },
          { "lightness":1 }
        ] 
      },{
        "featureType": "road.highway",
        "stylers": [
          { "saturation": -41 },
          { "lightness": 1 }
        ]
      },{
        "featureType":"poi",
        "stylers": [
          { "visibility": "simplified" }
        ]
      },{
        "featureType": "water",
        "stylers":  [
          { "visibility": "on"},
          { "saturation": -41 },
          { "lightness": 1 }
        ]
      }
    ]
  }
  //end of mapOptions
  
  
  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {
    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts[0].location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }
    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name,
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {
    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for(var place in locations){

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    };
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();
   
  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}


// Calls the initializeMap() function when the page loads
//window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  map.fitBounds(mapBounds);
});
