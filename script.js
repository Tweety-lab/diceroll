body {
    background-color: #8ecc39;
}

.btn-roll-dice {
    background-color: white;
    width: 100px;
    height: 100px;
    border-style: solid;
    border-color: #a7d948;
    border-radius: 50px;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, .8);

    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.material-symbols-rounded {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-variation-settings: 'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 48;
}

.dice-container {
    background-color: rgb(228, 228, 228);
    width: 200px;
    height: 200px;
    border-radius: 15px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, .3);
}

#dicetop {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    width: 190px;
    height: 190px;
    border-radius: 50px;
}

.dice-dot {
    --top: 50%;
    --left: 50%;

    width: 25px;
    height: 25px;
    background-color: #000000;
    border-radius: 50%;

    position: absolute;
    top: calc(var(--top) - 50% / 2);
    left: calc(var(--left) - 50% / 2);
    transform: translate(-50%, -50%);
}
