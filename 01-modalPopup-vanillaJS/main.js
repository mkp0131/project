const btnModal = document.getElementById("btnModal");
const modalPopup = document.getElementById("modalPopup");
const btnModalClose = document.getElementById("btnModalClose");

btnModal.addEventListener('click',function(e) {
	modalPopup.classList.add("on");
});
modalPopup.addEventListener('click',function(e) {
	if ( e.target.classList.contains('modal_popup') ){
		modalPopup.classList.remove("on");
	};
});
btnModalClose.addEventListener('click',function(e) {
	modalPopup.classList.remove("on");
});