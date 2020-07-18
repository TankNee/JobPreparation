/**
 *
 * @param {number[]} front
 * @param {number[]} middle
 */
const recreateTree = (front, middle) => {
    if (front.length !== middle.length) {
        return null;
    } else if (front.length === 0) {
        return null;
    } else if (front.length === 1) {
        return {value: front[0], left: null, right: null};
    }
    const rootNode = front[0];
    const rootIndex = middle.findIndex((n) => n === rootNode);

    const leftMiddle = middle.slice(0, rootIndex);
    const rightMiddle = middle.slice(rootIndex + 1);

    const leftFront = front.slice(1, leftMiddle.length + 1);
    const rightFront = front.slice(leftMiddle.length + 1);
    const node = {
        value: rootNode,
        left: recreateTree(leftFront, leftMiddle),
        right: recreateTree(rightFront, rightMiddle)
    };
    return node;
};
