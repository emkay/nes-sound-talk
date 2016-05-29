function changeSlide (state, direction) {
  if (direction === 'void') {
    return
  }

  if (direction === 'right') {
    if (state.slide() < state.slideLen() - 1) {
      state.slide.set(state.slide() + 1)
    }
  } else if (direction === 'left') {
    if (state.slide() > 0) {
      state.slide.set(state.slide() - 1)
    }
  }

  const percent = state.slide() === 0 ? 0 : (state.slide() / state.slideLen()) * 100
  state.percent.set(percent)
}

module.exports = {
  changeSlide: changeSlide
}
