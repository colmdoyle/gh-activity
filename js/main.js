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
		$.each(activities, function() {
			console.log(this);
			switch(this.type)
			{
				case 'WatchEvent':
					verb = 'starred';
					break;
				case 'PushEvent':
					verb = 'pushed a commit to';
					break;
				default:
					verb = 'did something';
					break;
			}
			var individualstory = '<div class="row" id="individual-story-'+ this.id + '">';
			individualstory += '<div class="span5">';
			individualstory += '<p>' + this.actor.login + ' ' + verb + ' ' + this.repo.name + '</p>';
			individualstory += '</div>';
			individualstory += '</div>';
			$('#activities-container').append(individualstory);
			$('#individual-story-' + this.id).fadeIn(3000);
		});
}

jsonp('https://api.github.com/users/' + user, 'callback_user');
jsonp('https://api.github.com/users/' + user + '/events', 'callback_events');
