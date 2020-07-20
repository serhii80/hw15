function showModal() {
    document.querySelector(".modal").classList.add("modal_open");
    document.body.style.overflow = "hidden";
	document.querySelector(".modal_text").innerHTML = `
		<p>Name: ${localStorage.getItem("name_hw15")}<br />
		Email: ${localStorage.getItem("email_hw15")}<br />
		Registration date: ${localStorage.getItem("date_hw15")}
	`;
};

function closeModal() {
    document.querySelector(".modal").classList.remove("modal_open");  
    document.body.style.overflow = "";    
};

function deleteUser() {
	localStorage.removeItem("name_hw15");
    localStorage.removeItem("email_hw15");
    localStorage.removeItem("password_hw15");
    localStorage.removeItem("date_hw15");
	window.location.replace("autorization.html");
}