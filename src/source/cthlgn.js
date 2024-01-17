const express=require("express")
const app=express()
const path=require("path")
const mongoose=require("mongoose")
const nodemailer=require("nodemailer")
const session = require('express-session');
const bcrypt = require('bcrypt');
const router = express.Router();
const hbs=require("hbs")
const multer = require('multer');
const User = require('./login');
const Diskusi = require('./diskusi');
const Info = require('./info')
const Chatbot = require('./chatbot');
const { users } = require("moongose/models");

app.use(express.static(path.join(__dirname, '../public')));

const templatesPath=path.join(__dirname, '../templates')

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatesPath)
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

mongoose.connect('mongodb://localhost:27017/sawala', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// Fungsi middleware untuk memeriksa apakah pengguna telah login
const requireLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect('/login');
  } else {
    next();
  }
};

app.get('/admin/diskusi', requireLogin, (req, res) => {
  User.findById(req.session.userId, (err, user) => {
    if (err) {
      console.error(err);
      res.redirect('/login');
    } else {
      res.render('admin/diskusi', { user });
    }
  });
});



//login
app.get("/login",(req, res)=>{
    res.render("login")
})

//pembagian role
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username, password }).populate('role');
      if (user && await bcrypt.compare(password, user.password)) {
        req.session.userId = user._id;
        res.send('username atau password salah');
        return;
      }
  
      if (user.role === 'admin') {
        res.redirect('admin/homepage');
      } else if (user.role === "mahasiswa") {
        res.redirect('mahasiswa/homepage');
      }
    } catch (error) {
      res.status(500).send('Silahkan cek kembali username dan password');
    }
  });

  

//register
app.get("/register",(req, res)=>{
    res.render("register")
})

// Pengaturan Multer untuk menyimpan ktm
const storages = multer.diskStorage({
  destination: './admin/data_user/create/uploads', // Direktori penyimpanan untuk KTM
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname);
  },
});

const uploads = multer({
  storage: storages,
}).single('ktm');


// Middleware untuk static files
app.use(express.static('admin/data_user/create'));

// Route untuk mengirim data postingan ke MongoDB

app.post('/register', (req, res) => {
  uploads(req, res, (err) => {
    if (err) {
      res.status(500).send('Error uploading file');
      return;
    }

    const { email, fullname, npm, tahun, prodi,  username, password } = req.body;
    const ktm = '/uploads/' + req.file.filename; // Jika ada file gambar

    const newPost = new User({
        email,
        fullname,
        npm,
        tahun,
        prodi,
        username,
        password,
        role : 'mahasiswa',
        ktm,
        isVerified: false,
    });

    User.insertMany([newPost])
    .then(() => {
      res.redirect('wait');
    })
    .catch((err) => {
      res.status(500).send('Error saving to database: ' + err.message);
    });
  });
});

app.get('/konfirmasi_user/:Id', async (req, res) => {
  try {
    const id = req.params.Id;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).send('User tidak ditemukan');
    }

    user.isVerified = true;
    await user.save();

    res.redirect('/admin/data_user/read');
  } catch (err) {
    console.error(err);
    res.status(500).send('Terjadi kesalahan saat konfirmasi');
  }
});

app.get('/sendEmail/:Id', async (req, res) => {
  try {
    const id = req.params.Id;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).send('User tidak ditemukan');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      logger:true,
      secureConnection: false,
      auth: {
        user: 'sawala.ulbi@gmail.com', // Ganti dengan alamat email pengirim
        pass: '@Sawala123', // Ganti dengan kata sandi email pengirim
      }

    });

    await transporter.sendMail({
      from: 'sawala.ulbi@gmail.com',
      to: user.email,
      subject: 'Konfirmasi Login',
      text: 'Anda bisa login sekarang.',
    });

    res.send('Email konfirmasi berhasil dikirim');
  } catch (err) {
    console.error(err);
    res.status(500).send('Terjadi kesalahan saat pengiriman email');
  }
});



//landingpage
app.get("/",(req, res)=>{
  res.render("landingpage")
})

app.get("/landingpage",(req, res)=>{
  res.render("landingpage")
})

//homepage
app.get("/homepage/diskusi",(req, res)=>{
  res.render("homepage/diskusi")
})

//Halaman admin
app.get('/wait', (req, res)=>{
  res.render('wait')
})


//admin diskusi
//tambah pertanyaan diskusi

app.post("/pertanyaan",async (req, res)=>{

  const data={
      pertanyaan:req.body.pertanyaan,
  }

 await Diskusi.insertMany([data])
 res.redirect('/admin/diskusi');
})

//menampilkan pertanyaan
app.get('/admin/diskusi', async (req, res) => {
  try {
    const diskusis = await Diskusi.find();
    const reversedPosts = diskusis.reverse(); // Membalik urutan posting
    res.render('admin/diskusi', { diskusis:reversedPosts });
  } catch (err) {
    console.error('Kesalahan:', err);
    res.sendStatus(500);
  }
});

// Mengupdate data
app.get('/edit_pertanyaan/:id', (req, res) => {
  const id = req.params.id;
  Diskusi.findById(id)
    .then(data => {
      res.render('admin/diskusis/edit', { data });
    })
    .catch(err => console.log(err));
});

// Simpan perubahan item (dalam kasus edit)
app.post('/edit_pertanyaan/:id', async (req, res) => {
  try {
    await Diskusi.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/admin/diskusi');
  } catch (err) {
    res.status(500).send(err);
  }
});
//menghapus pertanyaan diskusi
app.get('/hapus_pertanyaan/:id', (req, res) => {
  const id = req.params.id;
  Diskusi.findByIdAndDelete(id)
      .then(() => {
          res.redirect('/admin/diskusi');
      })
      .catch(err => {
          console.log(err);
          res.status(500).send('Server Error');
      });
});


//admin info
 // Pengaturan Multer untuk menyimpan gambar
const storage = multer.diskStorage({
  destination: './admin/info/uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // Batasan ukuran file: 10MB
}).single('image');

// Middleware untuk static files
app.use(express.static('admin/info'));

// Route untuk mengirim data postingan ke MongoDB

app.post('/info', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(500).send('Error uploading file');
      return;
    }

    const { judul, deskripsi } = req.body;
    const image = '/uploads/' + req.file.filename; // Jika ada file gambar

    const newPost = new Info({
      judul,
      deskripsi,
      image
    });

    Info.insertMany([newPost])
    .then(() => {
      res.redirect('admin/info');
    })
    .catch((err) => {
      res.status(500).send('Error saving to database: ' + err.message);
    });
  });
});

//menampilkan info
app.get('/admin/info', async (req, res) => {
  try {
    const infos = await Info.find();
    const reversedPosts = infos.reverse(); // Membalik urutan posting
    res.render('admin/info', { infos:reversedPosts });
  } catch (err) {
    console.error('Kesalahan:', err);
    res.sendStatus(500);
  }
});

// Mengupdate data info
app.get('/edit_info/:id', (req, res) => {
  const id = req.params.id;
  Info.findById(id)
    .then(data => {
      res.render('admin/edit_info', { data });
    })
    .catch(err => console.log(err));
});

//admin info
 // Pengaturan Multer untuk menyimpan gambar
 const storage_einfo = multer.diskStorage({
  destination: './admin/edit_info/uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload_einfo = multer({
  storage: storage_einfo,
  limits: { fileSize: 10000000 }, // Batasan ukuran file: 10MB
}).single('image');

// Middleware untuk static files
app.use(express.static('admin/edit_info'));

// Rute untuk menyimpan data edit postingan ke MongoDB
app.post('/edit_info/:id', (req, res) => {
  const postId = req.params.id;

  upload_einfo(req, res, (err) => {
    if (err) {
       console.log(err);
      res.status(500).send('Error uploading file');
      return;
    }

    const { judul, deskripsi } = req.body;
    const image = '/uploads/' + req.file.filename; // Jika ada file gambar

    Info.findByIdAndUpdate(postId, { judul, deskripsi, image })
    .then(() => {
      res.redirect('/admin/info');
    })
    .catch(err => console.log(err));
  });
});

// Hapus data info
app.get('/hapus_info/:id', (req, res) => {
  const id = req.params.id;
  Info.findByIdAndDelete(id)
      .then(() => {
          res.redirect('/admin/info');
      })
      .catch(err => {
          console.log(err);
          res.status(500).send('Server Error');
      });
});


app.get('/admin/info_desc',(req, res)=>{
  res.render('admin/info_desc')
})

// admin data_user
//Menampilkan data_user dalam halaman admin
app.get('/admin/data_user/read', async (req, res) => {
  try {
    const users = await User.find();
    res.render('admin/data_user/read', { users });
  } catch (err) {
    console.error('Kesalahan:', err);
    res.sendStatus(500);
  }
});

app.get("/admin/data_user/create", (req, res)=>{
  res.render("admin/data_user/create")
})

// Pengaturan Multer untuk menyimpan gambar
const storagess = multer.diskStorage({
  destination: './admin/data_user/create/uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const uploadss = multer({
  storage: storagess,
  limits: { fileSize: 10000000 }, // Batasan ukuran file: 10MB
}).single('image');

// Middleware untuk static files
app.use(express.static('admin/data_user/create'));

// Route untuk mengirim data postingan ke MongoDB

app.post('/create', (req, res) => {
  uploadss(req, res, (err) => {
    if (err) {
      res.status(500).send('Error uploading file');
      return;
    }

    const { email, fullname, npm, tahun, prodi,  username, password, role} = req.body;
    const ktm = '/uploads/' + req.file.filename; // Jika ada file gambar

    const newPost = new User({
        email,
        fullname,
        npm,
        tahun,
        prodi,
        username,
        password,
        role,
        ktm,
        isVerified: true,
    });

    User.insertMany([newPost])
    .then(() => {
      res.redirect('admin/data_user/read');
    })
    .catch((err) => {
      res.status(500).send('Error saving to database: ' + err.message);
    });
  });
});


// Mengupdate data
app.get('/update_user/:id', (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then(data => {
      res.render('admin/data_user/update', { data });
    })
    .catch(err => console.log(err));
});

app.post('/update_user/:id', (req, res) => {
  const id = req.params.id;
  const { email, fullname, username, password, role } = req.body;
  User.findByIdAndUpdate(id, { email, fullname, username, password, role })
    .then(() => {
      res.redirect('/admin/data_user/read');
    })
    .catch(err => console.log(err));
});
// Hapus data pengguna
app.get('/delete_user/:id', (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
      .then(() => {
          res.redirect('/admin/data_user/read');
      })
      .catch(err => {
          console.log(err);
          res.status(500).send('Server Error');
      });
});

//admin chatbot
app.get("/admin/chatbot", (req, res)=>{
  res.render("admin/chatbot")
})



//menampilkan homepage
app.get('/admin/homepage', requireLogin, async (req, res) => {
  try {
    const infos = await Info.find();
    const diskusis = await Diskusi.find();
    const reversedPosts = infos.reverse(); // Membalik urutan posting
    res.render('admin/homepage', { infos:reversedPosts });
  } catch (err) {
    console.error('Kesalahan:', err);
    res.sendStatus(500);
  }
});

//mahasiswa diskusi

app.get('/mahasiswa/diskusi',(req, res)=>{
  res.render('mahasiswa/diskusi')
})



app.get("/mahasiswa/info",(req, res)=>{
  res.render("mahasiswa/info")
})

app.get("/mahasiswa/info_desc",(req, res)=>{
  res.render("mahasiswa/info_desc")
})

//panggil port
app.listen(3000,()=>{
    console.log("port connected");
})