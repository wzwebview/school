var interaction_select_li = document.getElementById('interaction_select').getElementsByTagName('li'),
	interaction_content_li = document.getElementById('interaction_content').getElementsByTagName('li'),
	Len = interaction_select_li.length;
for (var i = 0; i < Len; i++) {
	interaction_select_li[i].index = i; 
	interaction_select_li[i].addEventListener("click",function(){
		for (var i = 0; i < Len; i++) {
			interaction_select_li[i].setAttribute("class","");
			interaction_content_li[i].setAttribute("class","hidden");
		}
		this.setAttribute("class","active");
		interaction_content_li[this.index].setAttribute("class","");
	},false)
}