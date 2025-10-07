type MetaData = {
    selector: string;
}

export function Component({selector}: MetaData) {
    console.log(selector);
    return function (classReference: CustomElementConstructor) {
        console.log(classReference.name);
        customElements.define(selector, classReference);
    }
}