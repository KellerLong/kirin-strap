declare const require: any;

const context = (require as any).context('./mock', false, /\.ts$/);

let mock: any[] = [];
context.keys().map((path: string) => {
  mock = [...mock, ...context(path).default];
});

export default mock;