function sendMail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "sopor223@gmail.com",
	Password : "jvlmytdgptecndgq",
	To : 'marsosacabrera11@gmail.com',
	From : "sopor223@gmail.com",
	Subject : "Mi linda princesa",
	Body : "Me siento mal"
	}).then(
		message => alert("Le llego el mail a Martin, te recuerdo que te quiere mucho")
	);
}
function sendMail2() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "sopor223@gmail.com",
	Password : "jvlmytdgptecndgq",
	To : 'marsosacabrera11@gmail.com',
	From : "sopor223@gmail.com",
	Subject : "Mi linda princesa",
	Body : "Me siento muy bien"
	}).then(
		message => alert("Le llego el mail a Martin, te recuerdo que te quiere mucho")
	);
}

function sendMail3() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "sopor223@gmail.com",
	Password : "jvlmytdgptecndgq",
	To : 'marsosacabrera11@gmail.com',
	From : "sopor223@gmail.com",
	Subject : "Mi linda princesa",
	Body : "Me siento mas o menos"
	}).then(
		message => alert("Le llego el mail a Martin, te recuerdo que te quiere mucho")
	);
}
