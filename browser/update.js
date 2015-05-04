function changeSlide(state, direction) {
    if (direction === "void") {
        return;
    }

    if (direction === "right") {
        if (state.slide() < state.slideLen() - 1) {
            state.slide.set(state.slide() + 1);
        }
    } else if (direction === "left") {
        if (state.slide() > 0) {
            state.slide.set(state.slide() - 1);
        }
    }
}

module.exports = {
    changeSlide: changeSlide
}
