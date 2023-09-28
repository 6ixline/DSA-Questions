function Queue() {
	var a = [],
		b = 0;
	this.getLength = function() {
		return a.length - b;
	};
	this.isEmpty = function() {
		return 0 == a.length;
	};
	this.enqueue = function(b) {
		a.push(b);
	};
	this.dequeue = function() {
		if (0 != a.length) {
			var c = a[b];
			2 * ++b >= a.length && ((a = a.slice(b)), (b = 0));
			return c;
		}
	};
	this.peek = function() {
		return 0 < a.length ? a[b] : void 0;
	};
}

const MAX = 105;
let mat;
let visited;
let max_x, max_y;

function dist(x, y, x1, y1, r) {
	if ((x - x1) * (x - x1) + (y - y1) * (y - y1) <= r * r) {
		return true;
	}
	return false;
}

function valid(x, y) {
	if (
		x >= 0 &&
		x <= max_x &&
		y >= 0 &&
		y <= max_y &&
		mat[x][y] == 0 &&
		visited[x][y] == 0
	) {
		return true;
	}
	return false;
}

function solve(x, y, N, R, X_cord, Y_cord) {
    mat = new Array(MAX).fill(0).map(() => new Array(MAX).fill(0));
    visited = new Array(MAX).fill(0).map(() => new Array(MAX).fill(0));
    max_x = x;
    max_y = y;
    let v = [];
    for (let i = 0; i < N; i++) {
        v.push([X_cord[i], Y_cord[i]]);
    }
    for (let i = 0; i <= x + 1; i++) {
        for (let j = 0; j <= y + 1; j++) {
            let flag = true;
            for (let k = 0; k < N; k++) {
                if (dist(i, j, v[k][0], v[k][1], R)) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                mat[i][j] = 0;
            } else {
                mat[i][j] = 1;
            }
        }
    }
    if (mat[0][0] == 1 || mat[x][y] == 1) {
        let ret = "NO";
        return ret;
    } else {
        visited[0][0] = 1;

        let q = new Queue();
        q.enqueue([0, 0]);
        let dest1 = x;
        let dest2 = y;
        while (!q.isEmpty()) {
            let p1 = q.dequeue();
            let x = p1[0];
            let y = p1[1];

            if (x == dest1 && y == dest2) {
                let ret = "YES";
                return ret;
            }
            if (valid(x - 1, y)) {
                visited[x - 1][y] = 1;
                q.enqueue([x - 1, y]);
            }
            if (valid(x, y - 1)) {
                visited[x][y - 1] = 1;
                q.enqueue([x, y - 1]);
            }
            if (valid(x + 1, y)) {
                visited[x + 1][y] = 1;
                q.enqueue([x + 1, y]);
            }
            if (valid(x, y + 1)) {
                visited[x][y + 1] = 1;
                q.enqueue([x, y + 1]);
            }
            if (valid(x + 1, y + 1)) {
                visited[x + 1][y + 1] = 1;
                q.enqueue([x + 1, y + 1]);
            }
            if (valid(x + 1, y - 1)) {
                visited[x + 1][y - 1] = 1;
                q.enqueue([x + 1, y - 1]);
            }
            if (valid(x - 1, y + 1)) {
                visited[x - 1][y + 1] = 1;
                q.enqueue([x - 1, y + 1]);
            }
            if (valid(x - 1, y - 1)) {
                visited[x - 1][y - 1] = 1;
                q.enqueue([x - 1, y - 1]);
            }
        }
        let ret = "NO";
        return ret;
    }
}

console.log(solve(0, 91, 3, 5, [0,0,0], [21,20,43]));