const btn_a = document.querySelector('#nand-gate-a-btn');
const btn_b = document.querySelector('#nand-gate-b-btn');
const wire_a = document.querySelector('#wire-a');
const wire_b = document.querySelector('#wire-b');
const wire_c = document.querySelector('#wire-c');

let a_off = false;
let b_off = false;
[btn_a, btn_b].forEach(btn => {
	btn.addEventListener('click', () => {
		if (btn === btn_a) {
			a_off
			? (wire_a.style.borderColor = 'goldenrod')
			: (wire_a.style.borderColor = 'yellow');
		} else {
			b_off
			? (wire_b.style.borderColor = 'goldenrod')
			: (wire_b.style.borderColor = 'yellow');
		}

		btn === btn_a ? (a_off = !a_off) : (b_off = !b_off);
		if (a_off && b_off) {
			wire_c.style.borderColor = 'goldenrod';
		} else {
			wire_c.style.borderColor = 'yellow';
		}

		btn.textContent = btn.textContent === 'off' ? 'on' : 'off';
	});
});

