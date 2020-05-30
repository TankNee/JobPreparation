/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 快慢指针解法
var getKthFromEnd = function (head, k) {
	var quickPointer = head,
		slowPointer = head;
	while (quickPointer && k !== 0) {
		// 让快指针比慢指针领先k位，这样当快指针到达最后一位时，慢指针刚好到达倒数第k位
		quickPointer = quickPointer.next;
		k--;
	}
	while (quickPointer) {
		quickPointer = quickPointer.next;
		slowPointer = slowPointer.next;
	}
	return slowPointer;
};

// var getKthFromEnd = function(head, k) {
//     if(!head) return head;
//     var nodes = [];
//     while(head){
//         nodes.push(head);
//         head = head.next;
//     }
//     return nodes[nodes.length-k];
// };
