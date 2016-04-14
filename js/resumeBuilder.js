
var bio={
 "name":"Nicki Chen",
 "role":"Web Developer",
 "contacts":[{
 	"mobile":"(817) 213-6190",
 	"email":"chenwebsolutions@gmail.com",
 	"github":"ncmochacity",
 	"location":"Dallas,TX"
 }],
 "welcomeMessage":"You made it to my resume page! Thanks for stopping by!",
 "skills":[
  "UX","awesomeness","WordPress development","writing","design"
 ],
 "bioPic":"images/fry.jpg" 
 
 
}
bio.display=function(){
	var formattedName=HTMLheaderName.replace("%data%",bio.name);
	var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage=HTMLbioPic.replace("%data%",bio.bioPic);
	var formattedMessage=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedImage);
	$("#header").append(formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills){
		var formattedSkills=HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}

	for(contact in bio.contacts){
		var formattedMobile=HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail=HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedGithub=HTMLgithub.replace("%data%",bio.contacts[contact].github);
		var formattedLocation=HTMLlocation.replace("%data%",bio.contacts[contact].location);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
		$("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
	}
}
var education={
	"schools":[
     {
       "name":"University of Texas at Arlington",
       "city":"Arlington,TX",
       "degree":"Bachelors",
       "majors":"Psychology",
       "dates":2011,
       "url":"http://example.com"	
     }
	],
	"onlineCourses":[
     {
     	"title":"Javascript Crash Course",
     	"school":"Udacity",
     	"dates":2016,
     	"url":"https://udacity.com/course/ud804"
     }
	]
}
education.display=function(){
	for(item in education.schools){
		var formattedSchool=HTMLschoolName.replace("%data%",education.schools[item].name);
		$("#education").append(HTMLschoolStart);
    }
}
var work={
	"jobs":[
     {
       "employer":"NC Web Design",
       "title":"UI Developer",
       "dates":"December 2012-Future",
       "description":"Responsible for crafting user-centric websites utilizing front-end technologies,responsive framework and jQuery to help clients with increasing traffic."
     }
	]
}

var projects={
	"projects":[
     {
     	"title":"Portfolio",
     	"dates":2016,
     	"description":"The first portfolio project was created with Bootstrap responsive framework with HTML5 semantics for showcasing Udacity projects."
     }
	]
}
projects.display=function(){
	for(project in projects.projects){
	   $("#projects").append(HTMLprojectStart);
       var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
       $(".project-entry:last").append(formattedTitle);
       var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
       $(".project-entry:last").append(formattedDates);
       var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
       $(".project-entry:last").append(formattedDescription);

       	for(image in projects.projects[project].images){
       		var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
       		$(".project-entry:last").append(formattedImage);
       	}
	}
}

function displayWork(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle=formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();

function inName(name){
	name=name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+
	name[0].slice(1).toLowerCase();

	return name[0] + name[1];
}
projects.display();
bio.display();
education.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

