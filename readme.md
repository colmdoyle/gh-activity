# Unofficial GitHub activity widget

This Activity widget allows you to show events related to users and individual repositories on any webpage you choose. It displays

* The Gravatar associated with the user or repo
* The user's name
* The number of GitHub Followers a user has _or_ the number of times a repo has been forked
* All public events associated with that user _or_ repo

## Usage

The widget can be included by simply using an `iframe` with the following format -

``` html
<iframe allowtransparency="true" frameborder="0" scrolling="no" seamless="seamless" 
src="http://colmdoyle.github.io/gh-activity/gh-activity.html?user=colmdoyle&type=user" width="300" height="300"></iframe>
```

### Fields

`user` - GitHub username __required__

`repo` - Github repository you want to display __required for `type` repo__

`type` - What activity you want to display `user` or `repo` __required__

## Samples

__Activity by [colmdoyle](https://github.com/colmdoyle)__

``` html
<iframe allowtransparency="true" frameborder="0" scrolling="no" seamless="seamless" 
src="http://colmdoyle.github.io/gh-activity/gh-activity.html?user=colmdoyle&type=user" width="300" height="300"></iframe>
```

__Activity on the [gh-activity](https://github.com/colmdoyle/gh-activity) repo__

``` html
<iframe allowtransparency="true" frameborder="0" scrolling="no" seamless="seamless" 
src="http://colmdoyle.github.io/gh-activity/gh-activity.html?user=colmdoyle&repo=gh-activity&type=repo" width="300" height="300"></iframe>
```

## Author

__Colm Doyle__

* <http://fb.me/colmdoyle>
* <http://twitter.com/colmisainmdom>
* <http://github.com/colmdoyle>

## Acknowledgements

This widget was inspired by a mix of [Mark Otto](http://github.com/mdo)'s [GitHub Buttons](http://ghbtns.com/) and [Facebook](http://github.com/facebook)'s [Activity Feed](https://developers.facebook.com/docs/reference/plugins/activity/)

Also, the following plugins/frameworks are used and acknowledged in the code.

* [jQuery](https://github.com/jquery/jquery)
* [FitText.js](https://github.com/davatron5000/FitText.js)
* [Timeago](https://github.com/rmm5t/jquery-timeago)
* [Font Awesome](http://fortawesome.github.com/Font-Awesome/)
* [Bootstrap](http://twitter.github.com/bootstrap/index.html)

## License

Copyright 2012 Colm Doyle

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at <http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.