function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5pIxFtGExo3":
        Script1();
        break;
      case "617sqWwYsjF":
        Script2();
        break;
      case "6NMN3v7Lbbn":
        Script3();
        break;
      case "6oIGDy00apR":
        Script4();
        break;
      case "6NNjq2A7z4U":
        Script5();
        break;
      case "6Z4S7V7nHQU":
        Script6();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script5()
{
  $("#tab-customlink").show();
}

function Script6()
{
  window.print();
}

