class Display {
    constructor() {
        this.width = window.innerWidth || Document.body.clientWidth;
        this.height = window.innerHeight || Document.body.clientHeight;
    }

    get size() {
        return {
            width: this.width,
            height: this.height
        };
    }

    static draw(targetname, value) {
        const { width, height } = value;

        const target = document.getElementById(targetname);


        target.style.width = String(width) + "px";
        target.style.height = String(height) + "px";
    }

    static compareDisplaySize(compare, current) {
        if (compare.width !== current.width || compare.height !== current.height) {
            return true;
        }
    }
}



const onLoadHandler = () => {
    const display = new Display();
    const size = display.size;

    // console.log(size.width, size.height);

    Display.draw(HEADER_CONTAINER, size);

    // observe chagne display size
    setInterval(() => {
        const currentDisplay = new Display();

        if (Display.compareDisplaySize(display, currentDisplay)) {
            location.reload();
        }
    }, 100);
}