// /src/server.ts

import app from './app';

const port = process.env.PORT || 5437;
//const port = '';

app.listen(function() {
    console.log(`GSEC dashboard API has started successfully at PORT: ${port}`);
});