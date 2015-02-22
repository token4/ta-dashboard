(function() {
	var app = angular.module('TAstatus', []);

	app.controller('ManualController', function(){
		//After loading in JSON, sort by not completed first, and rest by request time
		this.manualStats = data;
		this.hideCompleted = true;


		for (i=0; i<this.manualStats.length; i++) {
			var company = this.manualStats[i];
			var minsElapsed = (new Date().getTime() - new Date(company.initial_request_time).getTime()) / (1000 * 60);
			var expectedSurveysProcessed = minsElapsed * 100000/60;
			var percentComplete1 = Math.min(expectedSurveysProcessed, company.total_surveys_processed)/company.total_surveys_requested * 100;
			company.percent_complete_1 = Math.floor(percentComplete1).toString() + '%';
			var percentComplete2 = Math.max(expectedSurveysProcessed, company.total_surveys_processed)/company.total_surveys_requested * 100 - percentComplete1;
			company.percent_complete_2 = Math.floor(percentComplete2).toString() + '%';
			company.exceeding_expected = expectedSurveysProcessed < company.total_surveys_processed;

		}

	});

	var data = [
  {
    "company_url": "https:\/\/altayer.medallia.eu\/altayer\/",
    "company_name": "Altayer",
    "initial_request_time": 1424379931542,
    "is_completed": true,
    "surveys_per_hour": 0,
    "total_surveys_processed": 7680,
    "total_surveys_requested": 10000,
    "warning": [
      "surveys_per_hour"
    ],
    "completion_time": 1424380613889
  },
  {
    "company_url": "https:\/\/falabella.medallia.com\/falabella\/",
    "company_name": "Falabella",
    "initial_request_time": 1424473437762,
    "is_completed": true,
    "surveys_per_hour": 311.54772524532,
    "total_surveys_processed": 105522,
    "total_surveys_requested": 1000000,
    "warning": [
      "surveys_per_hour"
    ],
    "completion_time": 1424474151539
  },
  {
    "company_url": "https:\/\/o2.medallia.eu\/o2\/",
    "company_name": "O2",
    "initial_request_time": 1424277968127,
    "is_completed": false,
    "surveys_per_hour": 233.56210262003,
    "total_surveys_processed": 10707351,
    "total_surveys_requested": 11111111,
    "warning": [
      "surveys_per_hour"
    ]
  },
  {
    "company_url": "https:\/\/login14.medallia.com\/westernunion\/",
    "company_name": "Western Union",
    "initial_request_time": 1424282467894,
    "is_completed": true,
    "surveys_per_hour": 0,
    "total_surveys_processed": 352869,
    "total_surveys_requested": 1000000,
    "warning": [
      "surveys_per_hour"
    ],
    "completion_time": 1424289249412
  }
];


})();