module.exports =  {
  active: '',
  log: {
    level: 'INFO',

  },
  output: {
    dir: 'dist',
    'dir-service': 'dist-service',
  },
  devPort: 8080,
  network: {
    default: {
      origin: '',
      header: {
        'Content-Type': 'text/html;charset=utf-8'
      },
      timeout: 0,
      'web-worker': false
    }
  }
};
