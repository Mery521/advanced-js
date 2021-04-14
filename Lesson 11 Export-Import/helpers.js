export const compose = (...fs) => {
    return (...args) => { 
        return fs.reduce((acc, fn) => fn(acc), args)
    }
}
export const log = (...args) => console.log(...args);
