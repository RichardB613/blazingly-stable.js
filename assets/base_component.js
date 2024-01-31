export class BaseComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.onInit();
    }

    disconnectedCallback() {
        this.onDestroy();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.onUpdate(name, oldValue, newValue);
    }

    // Lifecycle hooks
    onInit() {} // Called after component is first connected to the DOM
    onUpdate() {} // Called after an attribute changes
    onDestroy() {} // Called right before the element is removed from the DOM

    // Method to define reactive properties
    createState(initialValue) {
        let value = initialValue;
        const component = this;
        return {
            get value() {
                return value;
            },
            set value(newValue) {
                value = newValue;
                component.render(); // Re-render the component on state change
            }
        };
    }

    // Method to update the component's HTML content
    render() {
        // Define in derived classes
    }
}

// Utility for defining a component
export function defineComponent(tagName, componentClass) {
    customElements.define(tagName, componentClass);
}

