/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
	var _return = [];
	while (head) {
        _return.push(head.val);
		head = head.next;
	}
    _return.reverse();
	return _return;
};
