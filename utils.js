function setValue(option, value)
{
	localStorage[option] = value;
}

function getValue(option, defaultValue, setIfNotPresent)
{
	if(localStorage[option] == null)
	{
		if (setIfNotPresent || false)
			setValue(option, defaultValue);
		return defaultValue;
	}
	return localStorage[option];
}

function getEventId(e)
{
	if (!e) var e = window.event;
	var sender = (typeof(window.event) != "undefined") ? e.srcElement : e.target;
	return sender.id;
}

// Extracts a domain name from a URL
function extractDomainFromURL(url)
{
	if(!url)
		return "";

	var x = url.substr(url.indexOf("://") + 3);
	x = x.substr(0, x.indexOf("/"));
	x = x.substr(x.indexOf("@") + 1);
	if (x.indexOf("[") == 0 && x.indexOf("]") > 0)
	{
		x = x.substring(1,x.indexOf("]"));
	}
	else
	{
		colPos = x.indexOf(":");
		if (colPos >= 0)
			x = x.substr(0, colPos);
	}
	return x.replace(/^www\./, "");
}