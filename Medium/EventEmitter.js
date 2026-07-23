class EventEmitter {

    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {

        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);

        return {
            unsubscribe: () => {
                this.events[eventName] =
                    this.events[eventName].filter(cb => cb !== callback);
            }
        };
    }

    emit(eventName, args = []) {

        if (!this.events[eventName]) {
            return [];
        }

        const result = [];

        for (const callback of this.events[eventName]) {
            result.push(callback(...args));
        }

        return result;
    }
}

// Example
const emitter = new EventEmitter();

const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);

console.log(emitter.emit("firstEvent", [5])); // [6, 7]

sub1.unsubscribe();

console.log(emitter.emit("firstEvent", [5])); // [7]