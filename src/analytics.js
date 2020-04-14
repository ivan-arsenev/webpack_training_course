function createAnalytics() {
    let counter = 0
    let isDestroyed = true

    const listener = () => counter++

    document.addEventListener('click', listener)
    return {
        destroy() {
            document.removeEventListener('click', listener)
            isDestroyed= false
        },

        getClicks() {
            if(!isDestroyed) {
                return 'Analytics is destroyed'

            }
            return  counter
        }
    }
}

window.analytics = createAnalytics()