//if homepage redirect to first page
if(location.href == 'http://www.mspaintadventures.com/' || location.href == 'http://www.mspaintadventures.com/?s=6')
{
  location.href = 'http://www.mspaintadventures.com/?s=6&p=001901';
}
//if on comic and enabled
if(location.href.indexOf('http://www.mspaintadventures.com/?s=6&p=') > -1 && getCookie("cleanup") == "true")
{
  $("[background = 'http://cdn.mspaintadventures.com/images/bannerframe.png']").parent().parent().parent().parent().parent().remove();
  $("img[src='http://cdn.mspaintadventures.com/images/news.png']").parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().remove();
}