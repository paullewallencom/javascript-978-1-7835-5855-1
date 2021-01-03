var fs = require('fs');
fs.readFile('/etc/passwd', 'utf8', function(err, data)
  {
  if (err)
    {
    console.log('There was an error:');
    console.log(err);
    }
  console.log(data);
  });
