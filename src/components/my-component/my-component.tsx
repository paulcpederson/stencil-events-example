import { Component, h } from '@stencil/core';
@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <div>
        Click to trigger nested event:
        <my-nested-component onNestedChange={e => console.log(e)}></my-nested-component>
      </div>
    );
  }
}
