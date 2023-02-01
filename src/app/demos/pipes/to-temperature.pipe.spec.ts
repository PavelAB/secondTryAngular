import { ToTemperaturePipe } from './to-temperature.pipe';

describe('ToForenheitPipe', () => {
  it('create an instance', () => {
    const pipe = new ToTemperaturePipe();
    expect(pipe).toBeTruthy();
  });
});
