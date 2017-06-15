var dynamics_sel = document.getElementById('dynamics_sel').children,
	dynamics_inr = document.getElementById('dynamics_inr').children,
	Len = dynamics_sel.length;
dynamics_sel[0].setAttribute("class","active");
dynamics_inr[0].setAttribute("class","block");
for (var i = 0; i < Len; i++) {
	dynamics_sel[i].index = i;
	dynamics_sel[i].addEventListener("click",function(){
		for (var i = 0; i < Len; i++) {
			dynamics_sel[i].setAttribute("class","")
			dynamics_inr[i].setAttribute("class","")
		}
		this.setAttribute("class","active")
		dynamics_inr[this.index].setAttribute("class","block")
	},false)
}