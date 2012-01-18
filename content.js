(function() {
	chrome.extension.sendRequest({do: "getState"}, function(response) {
	    if (response.result == 1) {
			document.addEventListener("beforeload", function(event) {
				var blocklist = [
					"apis.google.com",
					"plusone.google.com",
					"ssl.gstatic.com",
					"connect.facebook.net",
					"www.facebook.com",
					"static.ak.fbcdn.net",
					"meebo.com",
					"s.meebocdn.net",
					"platform.twitter.com",
					"cdn.api.twitter.com",
					"api.twitter.com",
					"widgets.twimg.com",
					"s7.addthis.com",
					"platform.linkedin.com",
					"www.stumbleupon.com",
					"cdn.wibiya.com",
					"w.sharethis.com",
					"tweetmeme.com",
					"www.reddit.com",
					"widgets.digg.com",
					"platform.tumblr.com",
					//"mediacdn.disqus.com",
					"userapi.com", 
					"vkontakte.ru", 
					"vk.com",
					"cdn.connect.mail.ru",
					"api.tweetmeme.com",
					"stg.odnoklassniki.ru",
					"yandex.st",
					"www.linkwithin.com",
					"un1.adriver.ru",
					"www.tns-counter.ru",
					"openstat.net",
					"stcounter.com",
					"counter.rambler.ru",
					"www.google-analytics.com",
					"ad.adriver.ru",
					"content.adriver.ru",
					"feeds.feedburner.com",
					"counter.yadro.ru",
					"favicon.yandex.net",
					"top100-images.rambler.ru"
				]

				var re = /(?:https?:)?\/\/([^\/]+)/i;
				var result = re.exec(event.url);
				if (result && (result.length > 1) && (blocklist.indexOf(result[1]) > -1)) {
					event.preventDefault();
				}
			}, true);
		};
	});
}());
//http://code.google.com/chrome/extensions/samples.html#
//http://habrahabr.ru/blogs/google_chrome/75639/