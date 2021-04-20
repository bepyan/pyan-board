export default function Cursor() {
    const pointer = document.createElement("div")
    pointer.id = "pointer-dot"
    document.body.insertBefore(pointer, document.body.children[0])

    const ring = document.createElement("div")
    ring.id = "pointer-ring"
    document.body.insertBefore(ring, document.body.children[0])

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let mouseDown = false;

    const init_pointer = (options = {
        pointerColor: "#0d1820",
        ringSize: 15,
        ringClickSize: 10
    }) => {
        window.onmousemove = (mouse) => {
            mouseX = mouse.clientX;
            mouseY = mouse.clientY;
        }
        window.onmousedown = () => mouseDown = true;
        window.onmouseup = () => mouseDown = false;

        const getRingSize = () => mouseDown ? options.ringClickSize : options.ringSize;
        const trace = (a, b, n) => (1 - n) * a + n * b;
        // window["trace"] = trace;

        const render = () => {
            ringX = trace(ringX, mouseX, 0.2)
            ringY = trace(ringY, mouseY, 0.2)

            const isCursorDisappear = document.querySelector(".cursor-disappear:hover") !== null;
            pointer.style.display = isCursorDisappear ? "none" : "initial";
            ring.style.display = isCursorDisappear ? "none" : "initial";

            const isHover = document.querySelector(".p-action-click:hover") !== null;
            pointer.style.borderColor = isHover ? options.pointerColor : "#FFFFE1";
            pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

            ring.style.borderColor = options.pointerColor;
            ring.style.padding = `${getRingSize()}px`;
            ring.style.transform = `translate(${ringX - getRingSize()}px, ${ringY - getRingSize()}px)`

            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
    }
    init_pointer();
}