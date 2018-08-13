module.exports =  {
  active: '',
  log: 'INFO',
  output: {
    dir: 'dist',
    'dir-service': 'dist-service',
  },
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
