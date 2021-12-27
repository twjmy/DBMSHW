var durl = 'https://docs.google.com/spreadsheets/d/14EmAtA2MFDr34XSFIAOMbpnLwtBDqIs6XixaNSFO9JM'//我們試算表的網址
var gid = {'論文':'829588965', //試算表下面可切換標籤頁的固有編號 
           '地址':'58835050',
           '排名':'217704505'
		   '學校':'1358831441'}
var tq = "select * where A like '%范耀中%'"
console.log(`${durl}/gviz/tq?gid=${gid['論文']}&tqx=out:html&tq=${encodeURIComponent(tq)}`);//查詢結果網址