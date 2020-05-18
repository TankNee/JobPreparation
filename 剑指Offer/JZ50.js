/**
 *
 * @param {string} s
 */
var firstUniqChar = function (s) {
	const arr = Array.from(s);
	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		if (s.lastIndexOf(element) === index) {
			return element;
		} else {
			var reg = new RegExp(element, "g");
			s = s.replace(reg, " ");
		}
	}
	return " ";
};
firstUniqChar("ddjjccmmxxiaakkssuiu");
