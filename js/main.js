// Read a page's GET URL variables and return them as an associative array.
// Source: http://jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
var params = function () {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}()
var user = params.user,
    repo = params.repo,
    head = document.getElementsByTagName('head')[0],
    gravatar = document.getElementById('gravatar');
    username = document.getElementById('gh-username');
    reponums = document.getElementById('gh-repo-nums');


// Add commas to numbers
function addCommas(n) {
  return String(n).replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}

function jsonp(path, callback_var) {
  var el = document.createElement('script');
  el.src = path + '?callback=' + callback_var;
  head.insertBefore(el, head.firstChild);
}

function callback_user(obj) {
    gravatar.innerHTML = '<img src="' + obj.data.avatar_url + '"/>';
    username.innerHTML = obj.data.name;
    reponums.innerHTML = addCommas(obj.data.public_repos) + ' public repositories';
}

function callback_events(obj) {
	var activities = obj.data;
	activities = activities.reverse();
		$.each(activities, function(index) {
			console.log(this);
			switch(this.type)
			{
				case 'CommitCommentEvent':
					// !TODO
					sentence = 'Not Set';
					break;
				case 'CreateEvent':
					verb = 'created a ';
					object_type = this.payload.ref_type;
					repo_name = this.repo.name;
					repo_url = 'https://github.com/' + repo_name;
					repo_link = '<a href="' + repo_url + '">' + repo_name + '</a>';
					sentence = this.actor.login + ' ' + verb + object_type + ' at ' + repo_link; 
					break;
				case 'DeleteEvent':
					verb = 'deleted a ';
					object_type = this.payload.ref_type;
					repo_name = this.repo.name;
					repo_url = 'https://github.com/' + repo_name;
					repo_link = '<a href="' + repo_url + '">' + repo_name + '</a>';
					sentence = this.actor.login + ' ' + verb + object_type + ' at ' + repo_link; 
					break;
				case 'DownloadEvent':
					verb = 'uploaded ';
					file_name = this.payload.download.name;
					repo_name = this.repo.name;
					repo_url = 'https://github.com/' + repo_name;
					repo_link = '<a href="' + repo_url + '">' + repo_name + '</a>';
					sentence = this.actor.login + ' ' + verb + object_type + ' to ' + repo_link; 
					break;
				case 'FollowEvent':
					verb = 'started following ';
					followed_user = this.payload.target.name;
					user_url = 'https://github.com/' + followed_user;
					user_link = '<a href="' + user_url + '">' + followed_user + '</a>';
					sentence = this.actor.login + ' ' + verb + user_link; 
					break;
				case 'ForkEvent':
					verb = 'forked ';
					
					source_repo_name = this.repo.name;
					source_repo_url = 'https://github.com/' + source_repo_name;
					source_repo_link = '<a href="' + source_repo_url + '">' + source_repo_name + '</a>';
					
					dest_repo_name = this.payload.forkee.full_name;
					dest_repo_url = 'https://github.com/' + dest_repo_name;
					dest_repo_link = '<a href="' + dest_repo_url + '">' + dest_repo_name + '</a>';
					
					sentence = this.actor.login + ' ' + verb + repo_link; 
					break;
				case 'ForkApplyEvent':
					// !TODO
					sentence = 'Not Set';
					break;
				case 'GistEvent':
					verb = this.payload.action + 'd ';
					gist_name = 'gist: ' + this.payload.gist.id;
					gist_url = this.payload.html_url;
					gist_link = '<a href="' + gist_url + '">' + gist_name + '</a>';
					sentence = this.actor.login + ' ' + verb + gist_link; 
					break;
				case 'IssueCommentEvent':
					verb = 'commented on issue';
					issue_name = this.payload.issue.title;
					issue_link = '<a href="' + this.payload.issue.html_url + '">' + issue_name + '</a>';

					repo_name = this.repo.name;
					repo_url = 'https://github.com/' + repo_name;
					repo_link = '<a href="' + repo_url + '">' + repo_name + '</a>';

					sentence = this.actor.login + ' ' + verb + ' ' + issue_link + ' at ' + repo_link;
					break;
				case 'IssuesEvent':
					verb = this.payload.action + ' issue';
					issue_name = this.payload.issue.title;
					issue_link = '<a href="' + this.payload.issue.html_url + '">' + issue_name + '</a>';

					repo_name = this.repo.name;
					repo_url = 'https://github.com/' + repo_name;
					repo_link = '<a href="' + repo_url + '">' + repo_name + '</a>';

					sentence = this.actor.login + ' ' + verb + ' ' + issue_link + ' at ' + repo_link;
					break;
				case 'MemberEvent':
					verb = this.payload.action + ' ';
					
					member_name = this.payload.member.login;
					
					repo_name = this.repo.name;
					repo_url = 'https://github.com/' + repo_name;
					repo_link = '<a href="' + repo_url + '">' + repo_name + '</a>';
					
					sentence = this.actor.login + ' ' + verb + ' ' + member_name + ' to ' + repo_link; 
					break;
				case 'PublicEvent':
					verb = 'open sourced ';
					repo_name = this.repo.name;
					repo_url = 'https://github.com/' + repo_name;
					repo_link = '<a href="' + repo_url + '">' + repo_name + '</a>';
					sentence = this.actor.login + ' ' + verb + repo_link; 
					break;
				case 'PullRequestEvent':
					// !TODO
					sentence = 'Not Set';
					break;
				case 'PullRequestReviewCommentEvent':
					// !TODO
					sentence = 'Not Set';
					break;
				case 'PushEvent':
					verb = 'pushed a commit to ';
					repo_name = this.repo.name;
					repo_url = 'https://github.com/' + repo_name;
					repo_link = '<a href="' + repo_url + '">' + repo_name + '</a>';
					sentence = this.actor.login + ' ' + verb + repo_link; 
					break;
				case 'TeamAddEvent':
					// !TODO
					sentence = 'Not Set';
					break;
				case 'WatchEvent':
					verb = 'starred ';
					repo_name = this.repo.name;
					repo_url = 'https://github.com/' + repo_name;
					repo_link = '<a href="' + repo_url + '"> ' + repo_name + '</a>';
					sentence = this.actor.login + ' ' + verb + repo_link; 
					break;
				default:
					verb = 'did something with ';
					repo_name = this.repo.name;
					repo_url = 'https://github.com/' + repo_name;
					repo_link = '<a href="' + repo_url + '"> ' + repo_name + '</a>';
					sentence = this.actor.login + ' ' + verb + repo_link; 
					break;
			}
			var individualstory = '<div class="row" id="individual-story-'+ this.id + '">';
			individualstory += '<div class="span3">';
			individualstory += '<p>' + sentence + '</p>';
			individualstory += '</div>';
			individualstory += '</div>';
			$(individualstory).hide().prependTo('#activities-container').delay(index * 200).slideDown('fast');
		});
}

jsonp('https://api.github.com/users/' + user, 'callback_user');
jsonp('https://api.github.com/users/' + user + '/events', 'callback_events');
