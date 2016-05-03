var bio = {
    "name": "Nicki Chen",
    "role": "Front-end Developer |" + " " + "UI Developer",
    "contacts": [{
        "facebook": "Facebook",
        "twitter":"@nchenwebtech",
        "email": "chenwebsolutions@gmail.com",
        "github": "Github",
        "location": "I Live in Dallas, TX",
        "blog":"Nicki Chen Web Space",
        "linkedin":"LinkedIn"
    }],
    "welcomeMessage": "Howdy, I'm Nicki Chen ( @nchenwebtech) , I'm a front-end developer from Dallas, Texas. I solve things visually and love creating various things for the web. I love coding! ",
    "skills": [
        "UX", "awesomeness", "WordPress development", "writing", "design"
    ],
    "bioPic": "images/self-small.jpg"
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
    
    for (var contact in bio.contacts) {
        var formattedFacebook = HTMLFacebook.replace("%data%", bio.contacts[contact].facebook);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
        var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts[contact].twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
        var formattedBlog=HTMLblog.replace("%data%",bio.contacts[contact].blog);
        var formattedLinkedin=HTMLLinkedIn.replace("%data%",bio.contacts[contact].linkedin);
        $("#footerContacts").append(formattedLocation,formattedEmail,formattedBlog);
        $("#rightContacts").append(formattedFacebook,formattedTwitter,formattedGithub,formattedLinkedin);
    }
}
var education = {
    "schools": [{
        "name": "University of Texas at Arlington",
        "location": "Arlington,TX",
        "degree": "Bachelors",
        "majors": "Psychology",
        "month":"Dec",
        "year":"2011",
        "url": "http://example.com"
    }],
    "onlineCourses": [{
    	"title":"Intro to HTML and CSS",
    	"school": "Udacity",
    	"month":"Mar",
    	"year":"2016",
    	"url":"https://www.udacity.com/course/intro-to-html-and-css--ud304"
    },
    {
    	"title":"How to use Git and Github",
    	"school":"Udacity",
    	"month":"Mar",
    	"year":"2016",
    	"url":"https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    },
    {
    	"title": "Responsive Web Design Fundamentals",
    	"school":"Udacity",
    	"month":"Mar",
    	"year":"2016",
    	"url":"https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    },
    {
    	"title":"Responsive Images",
    	"school":"Udacity",
    	"month":"Mar",
    	"year":"2016",
    	"url":"https://www.udacity.com/course/responsive-images--ud882"
    },
    {
        "title": "Javascript Crash Course",
        "school": "Udacity",
        "month": "Apr",
        "year":"2016",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
    	"title":"Intro to jQuery",
    	"school":"Udacity",
    	"month":"Apr",
    	"year":"2016",
    	"url":"https://www.udacity.com/course/intro-to-jquery--ud245"
    }]

}
education.display = function() {
	if(education.schools.length>0) {
		
	    for (var item in education.schools) {
	    	$("#education").append(HTMLschool);
	    	$("#education").append(HTMLschoolStart);
	        var formattedName = HTMLschoolName.replace("%data%", education.schools[item].name);
	            formattedName=formattedName.replace("%title%",education.schools[item].name);
	        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
	        var formattedDates = HTMLschoolDates.replace("%month%", education.schools[item].month);
	            formattedDates=formattedDates.replace("%year%",education.schools[item].year);
	        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[item].majors);
	        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[item].location);
	        $(".education-entry:last").append(formattedName, formattedDegree, formattedDates, formattedMajors, formattedLocation);
	    }
    }
    if(education.onlineCourses.length > 0){
    	$("#education").append(HTMLonlineClasses);
    	for(var item in education.onlineCourses){
    		$("#education").append(HTMLonlineStart);
    		var formattedOnlineTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[item].title);
    		    formattedOnlineTitle=formattedOnlineTitle.replace("%title%",education.onlineCourses[item].title);
    		formattedOnlineTitle=formattedOnlineTitle.replace("%url%",education.onlineCourses[item].url);
    		var formattedOnlineSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[item].school);
    		var formattedOnlineDates=HTMLonlineDates.replace("%month%",education.onlineCourses[item].month);
    		    formattedOnlineDates=formattedOnlineDates.replace("%year%",education.onlineCourses[item].year);
    		$(".online-entry:last").append(formattedOnlineTitle,formattedOnlineDates);

    	}
    }
}

var work = {
    "jobs": [
    {
    	"employer":"100-Day-Code-Challenge",
    	"title":"Web Developer in-training",
    	"location":"web",
    	"month":"May",
    	"year":"2014",
    	"description":"I coded daily web apps for a streak of 100 Days.",
    	"images":["images/watches-small.png"],
    	"url":"images/watches-medium.png",
    	"link":"http://donutsbean.tumblr.com"

    },
    {
        "employer": "NC Web Design",
        "title": "UI Developer",
		"location": "Carrollton",
        "month":"Dec",
        "year":"2014",
        "description": "Develop and code anything with the web",
        "images":["images/work-small.jpg"],
        "url":"images/work-medium.jpg",
        "link":"https://www.facebook.com/N-C-Web-Design-1374398246183996/"
    },{
    	"employer":"Bravelearner LLC",
    	"title":"Social Media Specialist",
    	"location":"Dallas",
    	"month":"May",
    	"year":"2015",
    	"description":"Create weekly content and grphics on Facebook.",
    	"images":["images/bravelearner-small.jpg"],
    	"url":"images/bravelearner-medium.jpg",
    	"link":"https://www.facebook.com/Brave-Learner-LLC-839328876174646/"
    }]
}

var projects = {
    "projects": [
    {
    	"title":"Color This",
    	"month":"Feb",
    	"year":"2013",
    	"description":"First Regular Expression project I created during my 100-Day-Code-Challenge.",
    	"images":["images/color-small.jpg"],
    	"url":"images/color-medium.jpg"
    },
    {
    	"title":"Soy Foundation Redesign Project",
    	"month":"Oct",
    	"year":"2013",
    	"description":"WordPress development for World Soy Foundation",
    	"images":["images/soy-small.jpg"],
    	"url":"images/soy-medium.jpg"
    },
    {
    	"title":"Help International",
    	"month":"Mar",
    	"year":"2014",
    	"description":"WordPress redesign project for Help-International Inc",
    	"images":["images/help-international-small.png"],
    	"url":"images/help-international-medium.png"
    },
    
    {
        "title": "Graphic design",
        "month": "Mar",
        "year":"2015",
        "description": "Creative design studio made with Photoshop.",
        "images": ["images/creative-small.png"],
        "url":"images/creative-medium.png"
    },{
    	"title":"Portfolio Redesign",
    	"month":"Mar",
    	"year":"2015",
    	"description": "Redesign project focued on the UI and UX design with rich content. ",
    	"images":["images/redesign-small.png"],
    	"url":"images/redesign-medium.png"
    },{
    	"title":"Flat Design UI Kit",
    	"month":"May",
    	"year":"2015",
    	"description":"Flat Design UI Kit was created for Mobile App design free for downloads.",
    	"images":["images/UI-kit-small.jpg"],
    	"url":"images/UI-kit-medium.jpg"
    }]
}
projects.display = function() {
   if(!projects || !projects.projects){
	return;
   }
    for (var type in projects.projects) {
        $("#projects").append(HTMLprojectStart);
	var $el = $(".project-entry:last");
	var project = projects.projects[type];
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        	formattedTitle=formattedTitle.replace("%url%",project.url);
        	formattedTitle=formattedTitle.replace("%description%",project.description);
        	formattedTitle=formattedTitle.replace("%month%",project.month);
        	formattedTitle=formattedTitle.replace("%year%",project.year);
        $el.append(formattedTitle);

        for (var image in project.images) {
            var formattedImage = HTMLprojectImage.replace("%data%", project.images[image]);
            formattedImage=formattedImage.replace("%url%",project.url);
            formattedImage=formattedImage.replace("%title%",project.title);
            $el.append(formattedImage);
        }
        
    }
}

work.display = function() {
    if(!work || !work.jobs){
    	return;
    }
    work.jobs.forEach(function(job){
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            formattedEmployer=formattedEmployer.replace("%url%",job.link);
            formattedEmployer=formattedEmployer.replace("%title%",job.employer);
            formattedEmployer=formattedEmployer.replace("%month%",job.month);
            formattedEmployer=formattedEmployer.replace("%year%",job.year);
            formattedEmployer=formattedEmployer.replace("%location%",job.location);
            formattedEmployer=formattedEmployer.replace("%job%",job.title);
            formattedEmployer=formattedEmployer.replace("%description%",job.description);
        var formattedImage=HTMLworkImage.replace("%data%",job.images);
            formattedImage=formattedImage.replace("%url%",job.url);
            formattedImage=formattedImage.replace("%title%",job.employer);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last")
            .append(formattedEmployer)
	        .append(formattedImage);
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
		color:"#ff9987",
		highlight:"#f62e32",
		label:"HTML",
		labelcolor:"red"
	},
	{
		value:9,
		color:"rgba(117, 230, 209, 0.98)",
		highlight:"rgb(52,218,187)",
		label:"CSS",
		labelcolor:"green"
	},
	{
		value:6,
		color:"#47DCF7",
		highlight:"#3be2ff",
		label:"WordPress",
		labelcolor:"light blue"

	},
	{
		value:6,
		color:"#9068be",
		highlight:"#9068be",
		label:"jQuery",
		labelcolor:"purple"
	},
	{
		value:5,
		color:"#e1d8c9 ",
		highlight:"#cfc0a8",
		label:"Git",
		labelcolor:"dark green"
	},
	{
		value:5,
		color:"#ffd587",
		highlight:"#FFC870",
		label:"Javascript",
		labelcolor:"orange"
	}
];
function chartLabel(){
	for(var skill in pieData){
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
