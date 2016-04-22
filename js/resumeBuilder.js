var bio = {
    "name": "Nicki Chen",
    "role": "Front-end Developer |" + " " + "UI Developer",
    "contacts": [{
        "mobile": "(817) 213-6190",
        "email": "chenwebsolutions@gmail.com",
        "github": "ncmochacity",
        "location": "Dallas,TX"
    }],
    "welcomeMessage": "Howdy, I'm Nicki Chen ( @nchenwebtech) , I'm a front-end developer from Dallas, Texas. I solve things visually and love creating various things for the web. I love coding! ",
    "skills": [
        "UX", "awesomeness", "WordPress development", "writing", "design"
    ],
    "bioPic": "images/self.jpg"
}
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedImage);
    
    for (contact in bio.contacts) {
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        
    }
}
var education = {
    "schools": [{
        "name": "University of Texas at Arlington",
        "location": "Arlington,TX",
        "degree": "Bachelors",
        "majors": "Psychology",
        "dates": 2011,
        "url": "http://example.com"
    }],
    "onlineCourses": [{
    	"title":"Intro to HTML and CSS",
    	"school": "Udacity",
    	"dates":"February 2016 - March 2016",
    	"url":"https://www.udacity.com/course/intro-to-html-and-css--ud304"
    },
    {
    	"title":"How to use Git and Github",
    	"school":"Udacity",
    	"dates":"March 2016",
    	"url":"https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    },
    {
    	"title": "Responsive Web Design Fundamentals",
    	"school":"Udacity",
    	"dates":"March 2016",
    	"url":"https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    },
    {
    	"title":"Responsive Images",
    	"school":"Udacity",
    	"dates":"March 2016",
    	"url":"https://www.udacity.com/course/responsive-images--ud882"
    },
    {
        "title": "Javascript Crash Course",
        "school": "Udacity",
        "dates": "April 2016",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
    	"title":"Intro to jQuery",
    	"school":"Udacity",
    	"dates":"April 2016",
    	"url":"https://www.udacity.com/course/intro-to-jquery--ud245"
    }]

}
education.display = function() {
    for (item in education.schools) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[item].name);
        $("#education").append(HTMLschoolStart);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[item].dates);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[item].majors);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[item].location);
        $(".education-entry:last").append(formattedName, formattedDegree, formattedDates, formattedMajors, formattedLocation);
    }
    if(education.onlineCourses.length > 0){
    	$("#education").append(HTMLonlineClasses);
    	for(item in education.onlineCourses){
    		$("#education").append(HTMLschoolStart);
    		var formattedOnlineTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[item].title);
    		formattedOnlineTitle=formattedOnlineTitle.replace("%url%",education.onlineCourses[item].url);
    		var formattedOnlineSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[item].school);
    		var formattedOnlineDates=HTMLonlineDates.replace("%data%",education.onlineCourses[item].dates);
    		$(".education-entry:last").append(formattedOnlineTitle,formattedOnlineSchool,formattedOnlineDates);

    	}
    }
}

var work = {
    "jobs": [{
        "employer": "NC Web Design",
        "title": "UI Developer",
        "dates": "December 2012-Future",
        "description": "Responsible for crafting user-centric websites utilizing front-end technologies,responsive framework and jQuery to help clients with increasing traffic."
    }]
}

var projects = {
    "projects": [
    {
    	"title":"Soy Foundation Redesign Project",
    	"dates":"Octobor,2013",
    	"description":"This is my first freelance work that utilized my front-end knowledge and WordPress skills to transform an outdated company page design with greater traffic to the site",
    	"images":["images/soy.jpg"]	
    },
    {
    	"title":"iPad Mockup",
    	"dates":"March,2014",
    	"description":"This is my Illustrator project that I created to display one of my client works. It was a fun project that enabled me to improve my Illustrator skills for graphics",
    	"images":["images/ipad.jpg"]
    },
    {

    	"title":"Mario Angular Web App",
    	"dates":"April,2014",
    	"description":"Mario Web App was a fun personal project built with Angular JS library to allow users to move the Mario character with arrow keys."

    },
    {
    	"title":"Mario Angular Web App",
    	"dates":"April,2014",
    	"description":"Mario Web App was a fun personal project built with Angular JS library to allow users to move the Mario character with arrow keys."

    },
    {
        "title": "Portfolio",
        "dates": "March,2016",
        "description": "The first portfolio project was created with Bootstrap responsive framework with HTML5 semantics for showcasing Udacity projects.",
        "images": ["images/portfolio.jpg"]
    },
    {
    	"title":"Online Resume",
    	"dates":"April, 2016",
    	"description":"My Online Resume Project built with Bootstrap, Javascript, jQuery,CSS3 and HTML5 with a focus on SEO improvements.  ",
    	"images":["images/DSC_0105.JPG"]
    },
    
    {
    	"title":"Neighborhood Map",
    	"dates":"June,2016",
    	"description":"My Online Resume Project built with Bootstrap, Javascript, jQuery,CSS3 and HTML5 with a focus on SEO improvements.",
    	"images":["images/DSC_0105.JPG"]
    }
    ,{
    	"title":"Online Resume",
    	"dates":"April,2016", 
    	"description":"My Online Resume Project built with Bootstrap, Javascript",
    	"images":["images/DSC_0105.JPG"]

    }]
}
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        
        
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").prepend(formattedDates);
        for (image in projects.projects[project].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);

        }
        
        

    }
}

work.display = function() {
	// for (job in work.jobs) {
 //        $("#workExperience").append(HTMLworkStart);
 //        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 //        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
 //        var formattedEmployerTitle = formattedEmployer + formattedTitle;
 //        $(".work-entry:last").append(formattedEmployerTitle);
 //        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
 //        $(".work-entry:last").append(formattedDates);
 //        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
 //        $(".work-entry:last").append(formattedDescription);
 //    }
 	if(!work || !work.jobs){
 		return;
 	}
    work.jobs.forEach(function(job){
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployerTitle)
	        .append(formattedDates)
	        .append(formattedDescription);
    });
}

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();

    return name[0] + name[1];
}
var pieData=[
	{
		value:7,
		color:"#F7464A",
		highlight:"#FF5A5E",
		label:"HTML",
		labelcolor:"red"
	},
	{
		value:9,
		color:"#6ed3cf",
		highlight:"#5AD3D1",
		label:"CSS",
		labelcolor:"green"
	},
	{
		value:6,
		color:"#fae596",
		highlight:"#FFC870",
		label:"WordPress",
		labelcolor:"yellow"

	},
	{
		value:5,
		color:"#c2cfa3",
		highlight:"#A8B3C5",
		label:"Git",
		labelcolor:"dark green"
	},
	{
		value:5,
		color:"#FDB45C",
		highlight:"#FFC870",
		label:"Javascript",
		labelcolor:"orange"
	}
];
function chartLabel(){
	for(skill in pieData){
		var skillLabel=pieData[skill].label;
		var skillLabelColor=pieData[skill].labelcolor;
		var skillHTML='<span class="label ' + skillLabelColor + '">' + skillLabel + '</span>';
	$(".skills-view").append(skillHTML);
	}
	
}
window.onload=function(){
	var ctx=document.getElementById("my-chart").getContext("2d");
	window.myDoughnutChart=new Chart(ctx).Doughnut(pieData);
	chartLabel();
};
work.display();
projects.display();
bio.display();
education.display();
$("#mapDiv").append(googleMap);
