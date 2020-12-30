const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morganLogger = require('morgan');
const mongoose = require('mongoose');
const environment = require('dotenv');
const cors = require('cors');
const SuperAdmin = require('./App/SuperAdmin/routes')
const Admin = require('./App/Admin/routes')
app.get('/',function(req,res)
{
    res.render('pages/index');
}
)