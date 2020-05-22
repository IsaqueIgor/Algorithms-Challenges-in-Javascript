var maxPathSum = function(root) {
    let sum = root.val;
    const dfs = (node) => {
        if (!node) return 0;
        const left = Math.max(dfs(node.left), 0),
              right = Math.max(dfs(node.right), 0);
        sum = Math.max(left + right + node.val, sum);
        return Math.max(left, right) + node.val;
    }
    dfs(root);
    return sum;
};