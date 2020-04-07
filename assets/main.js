document.getElementById('issueInputForm').addEventListener('submit', saveIsue);

function saveIssue(e){
    var issueDesc = 
}


function fetchIssues() {

    var issues = JSON.parse(localStorage.getItem('issues'));
    var issuesList = document.getElementById('issuesList');

    issuesList.innerHTML = '';

    for (var i = 0; i < issues.length; i++) {
        var id = issues[i].id;
        var desc = issues[i].description;
        var severtity = issues[i].severtity;
        var asssignedTo = issues[i].asssignedTo;
        var status = issues[i].status;

        issuesList.innerHTML += '<div class="well">'+
                                '<h6>Issues ID: ' + id + '</h6>'+
                                '<p><span class="label-info">' + status + '<span></p>' + '<h3>' + desc + '</h3>' + '<p><span class="glyphicon glyphicon-time"></span>' + severtity + '</p>' + '<p><span class="glyphicon glyphicon-user"></span>' + asssignedTo + '</p>' + '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>' + '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>' + '</div>';
    }
};