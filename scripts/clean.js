//if homepage redirect to first page
if(location.href == 'http://www.mspaintadventures.com/' || location.href == 'http://www.mspaintadventures.com/?s=6')
{
  location.href = 'http://www.mspaintadventures.com/?s=6&p=001901';
}
//if on comic and enabled
if(location.href.indexOf('http://www.mspaintadventures.com/') > -1 && getCookie("cleanup") == "true")
{
	if(location.href.includes('http://www.mspaintadventures.com/ACT6ACT5ACT1x2COMBO.php')){
			$("[background = 'images/bannerframeX2.png']").parent().parent().parent().parent().parent().remove();
			$("img[src='images/sponsors.png']").parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().remove();
	}
	else{
		$("[background = 'http://cdn.mspaintadventures.com/images/bannerframe.png']").parent().parent().parent().parent().parent().remove();
		$("img[src='http://cdn.mspaintadventures.com/images/news.png']").parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().remove();
	}
}