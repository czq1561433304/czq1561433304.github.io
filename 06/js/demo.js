function show_prompt() {
	var product = prompt("请输入您想找到的产品", "在这里填写您想要找到的产品类型，水果，蔬菜，农副产品，花卉");
	switch (product) {
		case "水果":
			document.getElementById("result").innerHTML = "<div align='center'><img src='images/sg1.jpg'><br/><img src='images/sg2.jpg'><br/><img src='images/sg3.jpg'></div>";
			break;
		case "蔬菜":
			document.getElementById("result").innerHTML = "<div align='center'><img src='images/sc1.jpg'><br/><img src='images/sc2.jpg'><br/><img src='images/sc3.jpg'></div>";
			break;
		case "农副产品":
			document.getElementById("result").innerHTML = "<div align='center'><img src='images/nf1.jpg'><br/></div>";
			break;
		case "花卉":
			document.getElementById("result").innerHTML = "<div align='center'><img src='images/hh1.jpg'><br/><img src='images/hh2.jpg'><br/><img src='images/hh3.jpg'></div>";
			break;
		default: alert('请检查是不是输入错误了？');
	
	}
}
function warming() {

	alert('还没开始就放弃\n还不赶紧点测试？');
} 
