/** Returns random element from array */
const choice = (items) => {
    const i = Math.floor(Math.random() * items.length)
    return items[i]
}

/** Removes first matching element if exists and returns updated array, 
 * or returns undefined */
const remove = (items, item) => {
    const idx = items.indexOf(item)
    if (idx === -1) return undefined

    items.splice(idx, 1)
    return items
}

export { choice, remove }