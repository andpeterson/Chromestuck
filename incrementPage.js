//arrow keys
//    38
//37  40   39

/*to add: 
  type in page numbers
  displays current page
  choice pages (multiple paths)
  links in text (key = starting character of link text)
  cookies last longer than session
  cant open a new popup if one is already open
  change name of characters
  pages left/ page num/ estimated time on popup/ next animation
  popup waits for the page to load before loading
  style popup (Assign page nums to characters)
  Auto Key shutoff on flash game
*/

const CTRL_KEY = 17 // CTRL
const ALT_KEY = 18 // ALT

const SAVE_KEY = 83 // S
const LOAD_KEY = 76 // L
const RESTART_ECS_KEY = 27 //ESC
const RESTART_R_KEY = 82 //R

const AUTO_KEY = 65 // A
const DELETE_DATA_KEY = 68 //D
const MAP_KEY = 77 // M
const PESTER_LOG_KEY = 191 // /

const RIGHT_KEY = 39  
const LEFT_KEY = 37
const UP_KEY = 38
const DOWN_KEY = 40

var pester_log_state = 0; //current state of the pesterlog

/*var isCtrl = false; 
$(document).keyup(function (e) { 
  if(e.which == CTRL_KEY) isCtrl=false; 
}).keydown(function (e) {
  if(e.which == CTRL_KEY) isCtrl=true;
  if(e.which == 83 && isCtrl == true) 
  { //run code for CTRL+S -- ie, save! 
    return false; 
  }
}); */
//increment page
if(getCookie("keys") == "true") //if the keys weren't disabled
{
  $(document).keydown(function(e){
    if(event.altKey)
    {
      switch(e.keyCode)
      {
        //Alt Keys Codes
        case SAVE_KEY: SaveProgres(); break;
        case LOAD_KEY: LoadProgres(); break;
        case RESTART_R_KEY: StartOver(); break;  
        case AUTO_KEY: AutoSaveProgress(); break;
        case DELETE_DATA_KEY: DeleteGameData(); break;
        case MAP_KEY: OpenMap(); break;
      }
    }
    else
    {
      switch(e.keyCode)
      {
        case RIGHT_KEY: IncrementPage(); break;
        case LEFT_KEY: DecrementPage(); break;
        case PESTER_LOG_KEY: SwitchPesterlogState(); break;
        case RESTART_ESC_KEY: StartOver(); break;
      }
    }
  });
}

function IncrementPage()
{
  location.href = ($("[width='600'][border='0'][align='center'][cellpadding='0'][cellspacing='0'][bgcolor='#EEEEEE']").find("a").attr("href"));
}

function DecrementPage()
{
  location.href = ($("a:contains('Go Back')").attr("href"));
}

function SwitchPesterlogState()
{
  if($(".button").length == 0)
  {
    alert("There are no PesterLogs on this page");
  }
  else if(pester_log_state == 0)
  {
    $(".button:first").parent().attr("style", "display: none");
    $(".button:last").parent().parent().removeAttr("style");
    pester_log_state = 1;
  }
  else if(pester_log_state == 1)
  {
    $("button:first").parent().removeAttr("style");
    $("button:last").parent().parent().attr("style", "display: none");
    pester_log_state = 0;
  }
}

function SaveProgres()
{
  location.href = ($("a:contains('Save Game')").attr("href"));
}

function LoadProgres()
{
  location.href = ($("a:contains('Load Game')").attr("href"));
}

function StartOver()
{
  location.href = ($("a:contains('Start Over')").attr("href"));
}

function AutoSaveProgress()
{
  location.href = ($("a:contains('Auto-Save!')").attr("href"));
}

function DeleteGameData()
{
  location.href = ($("a:contains('Delete Game Data')").attr("href"));
}

function OpenMap()
{
  location.href = ($("a:contains('MAP')").attr("href"));
}