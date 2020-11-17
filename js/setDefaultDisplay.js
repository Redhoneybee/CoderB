const HEADER_CONTAINER = "header-container";
const HEADER_CONTENT = "header-content";

const WIDTH = "width";
const HEIGHT = "height";

const getDisplaySize = () => {
    const size = {
        width : window.innerWidth || document.body.clientWidth,
        height : window.innerHeight || document.body.clientHeight
    };
    
    return size;
}


const setDisplaySize = (obj, value) => {
    const { width, height } = value;
    
    const target = document.getElementById(obj);


    target.style.width = String(width) + "px";
    target.style.height = String(height) + "px";
}


const onLoadHandler = () => {
    const size = getDisplaySize();
    
    setDisplaySize(HEADER_CONTAINER, size);
}