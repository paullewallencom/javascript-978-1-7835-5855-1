// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(logger('dev'));
// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Authentication middleware.
app.use(stormpath.init(app, {
  apiKeyId: '[Deleted]',
  apiKeySecret: '[Deleted]',
  application:
    'https://api.stormpath.com/v1/applications/[Deleted]',
  secretKey: '[Deleted]',
  sessionDuration: 365 * 24 * 60 * 60 * 1000
}));
       
app.use('/users', users);
