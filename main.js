const $btn__generate_password = document.getElementById(
	"btn__generate_password"
);

$btn__generate_password.addEventListener("click", () => {
	alert(`
  Your password is: 
  ${generatePassword(
		lengthPassword,
		includeLettersUpperCase,
		includeLettersLowerCase,
		includeNumber,
		includeSymbol
	)}`);
});

const symbols = "!'#$%&,()*+'-./:;<=>?@[]~^_{|}";
const lettersUpperCase = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const lettersLowerCase = "abcdefghijklmnñopqrstuvwxyz";
const numbers = "0123456789";

function generatePassword(
	length,
	includeLettersLowerCase,
	includeLettersUpperCase,
	includeNumber,
	includeSymbol
) {
	let password = "";
	let allChareters = "";

	allChareters += includeLettersLowerCase ? lettersLowerCase : "";
	allChareters += includeLettersUpperCase ? lettersUpperCase : "";
	allChareters += includeNumber ? numbers : "";
	allChareters += includeSymbol ? symbols : "";
	for (let i = 0; i <= length; i++) {
		let randomIndex = Math.floor(Math.random() * allChareters.length);
		password += allChareters[randomIndex];
	}
	return password;
}

let lengthPassword = 10;
let includeLettersUpperCase = true;
let includeLettersLowerCase = true;
let includeNumber = true;
let includeSymbol = true;

let passwordGenerate = generatePassword(
	lengthPassword,
	includeLettersUpperCase,
	includeLettersLowerCase,
	includeNumber,
	includeSymbol
);

// alert(`Your new password is: ${passwordGenerate}`);
