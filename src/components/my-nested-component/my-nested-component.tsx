import { Component, h, Event, EventEmitter } from '@stencil/core';
@Component({
  tag: 'my-nested-component',
  shadow: true,
})
export class MyNestedComponent {
  @Event() nestedChange: EventEmitter<void>;

  render() {
    return <button onClick={() => this.nestedChange.emit()}>Emit Event</button>;
  }
}
