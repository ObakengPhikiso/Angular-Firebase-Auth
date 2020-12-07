const express = require('express')
const app = express();
app.use(express.static('./dist/firebase-auth"'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/firebase-auth"/'}
);
});

app.listen(process.env.PORT || 8080);