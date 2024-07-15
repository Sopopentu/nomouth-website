function drawRandomSquares(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    const squareSize = 10;

    const width = canvas.parentElement.clientWidth;
    const height = canvas.parentElement.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const numHorizontal = Math.ceil(width / squareSize);
    const numVertical = Math.ceil(height / squareSize);

    // Initialize an array to keep track of the state of each square
    const squareStates = [];
    for (let i = 0; i < numHorizontal; i++) {
        squareStates[i] = [];
        for (let j = 0; j < numVertical; j++) {
            squareStates[i][j] = Math.random() < 0.5 ? "black" : "#eeeeeeff";
        }
    }

    // Function to get mouse position relative to the canvas
    function getMousePos(event) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    // Event listener for mouse movement
    canvas.addEventListener('mousemove', function(event) {
        const mousePos = getMousePos(event);
        const squareX = Math.floor(mousePos.x / squareSize);
        const squareY = Math.floor(mousePos.y / squareSize);

        // Toggle the color of the square under the mouse cursor
        squareStates[squareX][squareY] = squareStates[squareX][squareY] === "black" ? "#FF0127" : "black";
        ctx.fillStyle = squareStates[squareX][squareY];
        ctx.fillRect(squareX * squareSize, squareY * squareSize, squareSize, squareSize);
    });

    // Draw initial canvas state
    for (let i = 0; i < numHorizontal; i++) {
        for (let j = 0; j < numVertical; j++) {
            ctx.fillStyle = squareStates[i][j];
            ctx.fillRect(i * squareSize, j * squareSize, squareSize, squareSize);
        }
    }
}

drawRandomSquares("canvas");
