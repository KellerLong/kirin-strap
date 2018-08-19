declare const require: any;

const context = (require as any).context('mock', false, /\.ts$/);

let mock: any[] = [];
context.keys().map((path: string) => {
  mock = [...mock, new (context(path).default)()];
});

export default mock;