function domainName(url) {
  //your code here
  var resstr = "";
  var a = url.indexOf(":"); // add three to it
  var b = url.indexOf("."); // ending
  console.log("line 6", b);
  if (url[0] === "h" && url[8] !== "w") {
    var resstr = url.substring(a + 3, b);
    console.log("line 9", resstr);
    return url.substring(a + 3, b);
  } else {
    if (url[3] !== "p" && url[2] !== "w") {
      var resstr = url.substring(0, b);
      return resstr;
    }
    var c = url.indexOf(".", b + 1);
    console.log("line 13", c);
    var resstr = url.substring(b + 1, c);
    console.log("line 15", resstr);
    return resstr;
  }
}
domainName("http://google.com");
// , "google");
domainName("http://google.co.jp");
// , "google");
domainName("www.xakep.ru");
// , "xakep");
domainName("https://youtube.com");
// , "youtube");
domainName("www.icann.org/");
