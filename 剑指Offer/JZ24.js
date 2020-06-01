/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // 双指针法
	var pre = null;
	var cur = head;
	while (head) {
		cur = head.next;
		head.next = pre;
		pre = head;
		head = cur;
	}
	return pre;
};
// var reverseList = function (head) {
// 	var temp = [];
// 	while (head) {
// 		temp.push({
// 			val: head.val,
// 			next: null,
// 		});
// 		head = head.next;
// 	}
// 	if (temp.length === 0) return head;
// 	return temp.reduce((pre, cur) => {
// 		cur.next = pre;
// 		return cur;
// 	});
// };
var test = {
	val: 1,
	next: {
		val: 2,
		next: {
			val: 3,
			next: null,
		},
	},
};
var temp = reverseList(test);
console.log(temp);
