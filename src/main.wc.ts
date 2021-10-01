import { defineCustomElement } from 'vue';
import AvTest from './wc/av-test.ce.vue';

const AvTestElement = defineCustomElement(AvTest);

// Registers the custom element if it has not been registered
try {
    const isDefined = customElements.get(AvTest.name);
    if (!isDefined) {
        customElements.define(AvTest.name, AvTestElement);
    }
} catch (error) {
    console.error(error);
}
