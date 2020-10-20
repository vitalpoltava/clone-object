function copyAllOwnProperties(target, ...sources) {
    for (const source of sources) {
        for (const key of Reflect.ownKeys(source)) {
            const desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
    return target;
}
