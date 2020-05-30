/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s=s.trim()
    if(!s) return false
    return !isNaN(s)
};
// var isNumber = function (s) {
// 	var flags = ["+", "-", ".", "e"];
// 	s = s.trim();
// 	var strArr = Array.from(s);
// 	if (strArr.filter((str) => !flags.includes(str)).length === 0) return false;
// 	var tempArr = new Array();
// 	for (var i = 0; i < strArr.length; i++) {
// 		var str = strArr[i];
// 		var num;
// 		// 尝试将这位字符解析成数字
// 		num = parseInt(str);
// 		if (!num && num !== 0) {
// 			// 如果这个字符既不是数字又不是表示数字所需的特殊字符,那么就应该返回false
// 			if (!flags.includes(str)) return false;
// 			// 或者这个字符在整个段中已经出现了两次
// 			if (tempArr.find((value) => value.symbol === str)) return false;
// 			// 或者两个不同的字符相互粘连
// 			if (tempArr.length > 0 && tempArr[tempArr.length - 1].index === i - 1) {
// 				var last = tempArr[tempArr.length - 1];
// 				// 如果不是+.或者-.的形式
// 				if (!(flags.indexOf(last.symbol) < 2 && last.index === 0 && flags.indexOf(str) === 2)) {
// 					if (!(flags.indexOf(last.symbol) === 2 && last.index !== 0 && flags.indexOf(str) === 3)) {
// 						if (!flags.indexOf(last.symbol === 3 && flags.indexOf(str) < 2)) {
// 							return false;
// 						}
// 					}
// 				}
// 			}
// 			// 如果这个被允许的特殊字符在首位或者在末尾
// 			if (flags.indexOf(str) > 2 && (i == 0 || i === strArr.length - 1)) return false;
// 			if (flags.indexOf(str) < 2 && i !== 0) return false;
// 			// 记录特殊字符出现的次数
// 			tempArr.push({
// 				symbol: str,
// 				index: i,
// 			});
// 		}
// 	}
// 	if (strArr.includes(".") && strArr.includes("e") && s.indexOf(".") > s.indexOf("e")) return false;
// 	return true;
// };
console.log(isNumber("+6e+5"));
