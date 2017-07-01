'use strict';

angular.module('myContacts.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

//Contact Controller
.controller('ContactsCtrl', ['$scope',  function($scope) {
  var user_Id = 1;
	$scope.contacts =  [
        {
            'id':0,
            'name': 'Mark Green',
            'company': 'JP Morgan',
            'email':'mark@jpm.com',
            'mobile_phone': '000-234-23423',
            'home_phone': '2312-32432-324',
            'work_phone': '000-234234-234',
            'street_address': '10 Downing Streeet',
            'city': 'New York',
            'state': 'New York',
            'zipcode': '10001'
        },{
            'id':1,
            'name': 'James Nash',
            'company': 'Morgan Stanley',
            'email':'james@ms.com',
            'mobile_phone': '000-234-23423',
            'home_phone': '2312-32432-324',
            'work_phone': '000-234234-234',
            'street_address': '10 Downing Streeet',
            'city': 'New York',
            'state': 'New York',
            'zipcode': '10001'
        },{
            'id':2,
            'name': 'Paul King',
            'company': 'Deloitte',
            'email':'paul@deloitte.com',
            'mobile_phone': '000-234-23423',
            'home_phone': '2312-32432-324',
            'work_phone': '000-234234-234',
            'street_address': '10 Downing Streeet',
            'city': 'New York',
            'state': 'New York',
            'zipcode': '10001'
        },{
            'id':3,
            'name': 'Stephen Greg',
            'company': 'Bank of America',
            'email':'stephen@ba.com',
            'mobile_phone': '000-234-23423',
            'home_phone': '2312-32432-324',
            'work_phone': '000-234234-234',
            'street_address': '10 Downing Streeet',
            'city': 'New York',
            'state': 'New York',
            'zipcode': '10001'
        },{
            'id':4,
            'name': 'Monica Adam',
            'company': 'City Bank',
            'email':'monica@citi.com',
            'mobile_phone': '000-234-23423',
            'home_phone': '2312-32432-324',
            'work_phone': '000-234234-234',
            'street_address': '10 Downing Streeet',
            'city': 'New York',
            'state': 'New York',
            'zipcode': '10001'
        },
    ];
	console.log($scope.contacts);

	//Sumbit Contacts
  $scope.addFormSubmit = function(){
		console.log('Adding Contact....');
    var i = 0;
        if($scope.newcontact.id == null) {
             $scope.newcontact.id = user_Id++;
             $scope.contacts.push($scope.newcontact);
        } else {
             for(i in $scope.contacts) {
                    if($scope.contacts[i].id == $scope.newcontact.id) {
                        $scope.contacts[i] = $scope.newcontact;
                    }
             }
        }
        $scope.newcontact = {};
        console.log($scope.newcontact);
        console.log($scope.contacts);
    }

    //Delete Contact
    $scope.removeContact = function(id) {
      $scope.contactShow = false;
      var i = 0;
      for(i in $scope.contacts) {
          if($scope.contacts[i].id == id) {
              $scope.contacts.splice(i,1);
              $scope.newcontact = {};
          }
      }
  		console.log('Removing Contact...');
  		$scope.msg = "Contact Removed";
    }

	//Show Edit Form
	$scope.showEditForm = function(id){
		$scope.addFormShow = true;
    console.log($scope.contacts);
    var i = 0;
    for(i in $scope.contacts) {
        if($scope.contacts[i].id == id) {
            $scope.newcontact = angular.copy($scope.contacts[i]);
        }
    }
	}

	//Show Contact
	$scope.showContact = function(id){
		console.log('Getting Contact...');
    var i = 0;
    for(i in $scope.contacts) {
        if($scope.contacts[i].id == id) {
            $scope.newcontact = angular.copy($scope.contacts[i]);
        }
    }
		$scope.contactShow = true;
	}

//Clear $scope Fields
function clearFields(){
  console.log('Clearing All Fields...');
  $scope.name = '';
  $scope.email = '';
  $scope.company = '';
  $scope.mobile_phone = '';
  $scope.home_phone = '';
  $scope.work_phone = '';
  $scope.street_address = '';
  $scope.city = '';
  $scope.state = '';
  $scope.zipcode = '';
}

//Show Add Form
$scope.showAddForm = function(){
  $scope.addFormShow = true;
}

//Hide Forms
$scope.hide = function(){
  $scope.addFormShow = false;
  $scope.contactShow = false;
}
}]);
