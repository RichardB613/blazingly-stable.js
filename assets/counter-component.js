import { BaseComponent, defineComponent }  from './base_component.js'

class CounterComponent extends BaseComponent {
    constructor() {
        super();
        this.count = this.createState(0);
    }

    onInit() {
        console.log("CounterComponent is initialized");
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                /* Scoped styles */
            </style>
            <div>
                <span>${this.count.value}</span>
                <button onclick="this.getRootNode().host.increment()">Increment</button>
                <button onclick="this.getRootNode().host.decrement()">Decrement</button>
            </div>
        `;
    }

    increment() {
        this.count.value++;
    }

    decrement() {
        this.count.value--;
    }
}

defineComponent('counter-component', CounterComponent);
