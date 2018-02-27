function load() {
    //  localStorage.clear();
    var lid = 647;
    if(localStorage.getItem("lidhatirla") ) { 
       lid = localStorage.getItem("lidhatirla");
    }
   
    var tchatirlaname='';
    var tchatirlapassword='' ;
  //  alert("bb"); 
    if(localStorage.getItem("tchatirlaname") && localStorage.getItem("tchatirlaname")!== null  ) { 
        tchatirlaname = localStorage.getItem("tchatirlaname");
        tchatirlapassword = localStorage.getItem("tchatirlapassword"); 
        lid = localStorage.getItem("lidhatirla"); 
        document.getElementById("selectLanguage").selectedIndex =lid;
    } else { 
        localStorage.clear();
        localStorage.setItem("tchatirlaname", tchatirlaname);
        localStorage.setItem("tchatirlapassword", tchatirlapassword);
        localStorage.setItem("lidhatirla", lid);
    }
     
    if (tchatirlaname !== null) {
        //alert("bb");
        document.getElementById("name").value = tchatirlaname;
        document.getElementById("password").value = tchatirlapassword; 
        document.getElementById("test2").checked = true;
        document.getElementById("selectLanguage").selectedIndex =lid;
    }
  
    localStorage.setItem("lid", lid);
 //   alert(lid);
    var alan1x1 = "";
    var alan1x2 = "";
    var alan1x3 = "";
    var alan1x4 = "";
  
    var iletisim1 = "";
    var iletisim2 = "";
    var iletisim3 = "";
    var iletisim4 = "";
  
    var alert1x1 = "";
    var alert1x2 = "";
    var alert1x3 = "";
    var alert1x4 = "";
    var alert1x5 = "";
    var alert1x6 = "";
    var alert1x7 = "";
    try {
        $.ajax({
            url: 'http://mobile.okulsis.net:8280/Slim_Proxy_okulsis_v4/SlimProxyBoot.php?url=fillComboBoxTsql_syslanguage&lid=' + lid + '',
            type: 'GET',
            dataType: 'json',
            crossDomain: true,
            success: function (data) {
                
                var j;
                var id ;
             //   var dataSet = [];
             //   var properties = []; 
                //$('#location').empty();
                for (var j = 0; j < data.length; j++) {
                    var dil = data[j].language;
                    var id = data[j].id;
                    var url = data[j].url;  
                  //  localStorage.setItem("lid", lid);
                    var background = "background- image:url(" + url + ")"; 
                    if (lid == data[j].id) { 
                        alan1x1 =  data[j].alan1;
                        alan1x2 =  data[j].alan2;
                        alan1x3 =  data[j].alan3;
                        alan1x4 =  data[j].alan4; 
                        alert1x1 =  data[j].alert1; 
                        alert1x2 =  data[j].alert2; 
                        alert1x3 =  data[j].alert3; 
                        alert1x4 =  data[j].alert4;
                        alert1x5 =  data[j].alert5;
                        alert1x6 =  data[j].alert6; 
                        alert1x7 =  data[j].alert7; 
                        iletisim1 = data[j].iletisim1;
                        iletisim2 = data[j].iletisim2;
                        iletisim3 = data[j].iletisim3;
                        iletisim4 = data[j].iletisim4; 
                        localStorage.setItem("alan1x1", alan1x1);
                        localStorage.setItem("alan1x2", alan1x2);
                        localStorage.setItem("alan1x3", alan1x3);
                        localStorage.setItem("alan1x4", alan1x4); 
                        localStorage.setItem("alert1x1", alert1x1);
                        localStorage.setItem("alert1x2", alert1x2);
                        localStorage.setItem("alert1x3", alert1x3);
                        localStorage.setItem("alert1x4", alert1x4);
                        localStorage.setItem("alert1x5", alert1x5);
                        localStorage.setItem("alert1x6", alert1x6);
                        localStorage.setItem("alert1x7", alert1x7);
                        
                        localStorage.setItem("iletisim1", iletisim1);
                        localStorage.setItem("iletisim2", iletisim2);
                        localStorage.setItem("iletisim3", iletisim3);
                        localStorage.setItem("iletisim4", iletisim4); 
                        
                        document.getElementById("name").placeholder = alan1x1; 
                        document.getElementById("password").placeholder = alan1x2;
                        document.getElementById("button1").value = alan1x3;
                        document.getElementById("test2label").innerHTML = alan1x4;
                    }
                    $('#selectLanguage').append("<option style=" + url + "  value=" + id + ">" + dil + "</option>");
                }
                  
                var row = lid; 
                $("#selectLanguage").on('change', function () { 
                    lid = this.value;  
                    localStorage.setItem("lid", lid);
                    var row = lid;
                    for (var i = 0; i < data.length; i++) { 
                        if (row == data[i].id) { 
                         //   alert(lid); 
                            alan1x1 =  data[i].alan1;
                            alan1x2 =  data[i].alan2;
                            alan1x3 =  data[i].alan3;
                            alan1x4 =  data[i].alan4; 
                            alert1x1 =  data[i].alert1; 
                            alert1x2 =  data[i].alert2; 
                            alert1x3 =  data[i].alert3; 
                            alert1x4 =  data[i].alert4;
                            alert1x5 =  data[i].alert5;
                            alert1x6 =  data[i].alert6; 
                            alert1x7 =  data[i].alert7;
                            iletisim1 = data[i].iletisim1;
                            iletisim2 = data[i].iletisim2;
                            iletisim3 = data[i].iletisim3;
                            iletisim4 = data[i].iletisim4; 
                            localStorage.setItem("alan1x1", alan1x1);
                            localStorage.setItem("alan1x2", alan1x2);
                            localStorage.setItem("alan1x3", alan1x3);
                            localStorage.setItem("alan1x4", alan1x4);
                            localStorage.setItem("alert1x1", alert1x1);
                            localStorage.setItem("alert1x2", alert1x2);
                            localStorage.setItem("alert1x3", alert1x3);
                            localStorage.setItem("alert1x4", alert1x4);
                            localStorage.setItem("alert1x5", alert1x5);
                            localStorage.setItem("alert1x6", alert1x6);
                            localStorage.setItem("alert1x7", alert1x7);
                            localStorage.setItem("iletisim1", iletisim1);
                            localStorage.setItem("iletisim2", iletisim2);
                            localStorage.setItem("iletisim3", iletisim3);
                            localStorage.setItem("iletisim4", iletisim4); 
                            document.getElementById("name").placeholder = alan1x1; 
                            document.getElementById("password").placeholder = alan1x2;
                            document.getElementById("button1").value = alan1x3;
                            document.getElementById("test2label").innerHTML = alan1x4;
                        }
                    } 

                });
                for (var z = 0; z < data.length; z++) { 
                    var id = data[z].id;  
                    if (lid == data[z].id) {  
                        document.getElementById("selectLanguage").options[z].selected = true; 
                    } 
                } 

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Hata" + errorThrown);
            }
        }
                
    );
       
    } catch (e) {
        alert(e);
    }


}
$(document).ready(function () {
    
;    $('input[id^="button"]').click(function () {
    if ($("#name").val() == '') {
        alert(localStorage.getItem("alert1x1"));
        return false;
    }

    if ($("#password").val() == '') {
        alert(localStorage.getItem("alert1x2"));
        return false;
    }
        username = $("#name").val();
        sifre = $("#password").val();
     //   var ip = localStorage.getItem("proxy");
        $.ajax({
            url: 'http://mobile.okulsis.net:8280/Slim_Proxy_okulsis/SlimProxyBoot.php?&url=gnlKullaniciFindForLoginByTcKimlikNo_mbllogin',
            data: {
                tc: $("#name").val(),
                sifre: $("#password").val(),
            },
            type: 'Get',
            dataType: 'json',
            success: function (data) { 
                var gelen = data[0].adsoyad;
                var kisiid = data[0].KisiID;
                var okulid = data[0].okulid;
                var description = data[0].description;
                var KullaniciKontrol = data[0].KullaniciKontrol;
                document.getElementsByTagName("P")[0].innerHTML = gelen;
                localStorage.setItem("tc", username);
                localStorage.setItem("KullaniciAdi", gelen);
                localStorage.setItem("gelenid", kisiid, "okulid", okulid);
                var add = localStorage.getItem("KullaniciAdi");
              //  alert(KullaniciKontrol);
                if (KullaniciKontrol > 0) {
                   window.location.href = "selectScholl.html";
                }
                else {
                    alert(description);
                } 
            },
            error: function (textStatus, errorThrown) {
                Success = false;//doesnt goes here
                alert(localStorage.getItem("alert1x3"));
            }
        });

    })
   
})
function limit(element) {
    var max_chars = 11;

    if (element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}