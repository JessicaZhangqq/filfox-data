var timestampModule = require('./timestamp.js')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
urlAtlas = "mongodb+srv://jessicazhang:BHmU6iByiAA3Ymk1@cluster0.w574b.mongodb.net/filfox?retryWrites=true&w=majority";
var axios = require('axios')
var axiosRetry =require('axios-retry');
const decimalBase = 1000000000000000000;
axiosRetry(axios, { retries: 3 });
//读取
const myConfig = {
    raxConfig: {
      retry: 5, // number of retry when facing 4xx or 5xx
      noResponseRetries: 5, // number of retry when facing connection error
      onRetryAttempt: err => {
        const cfg = rax.getConfig(err);
        console.log(`Retry attempt #${cfg.currentRetryAttempt}`); // track current trial
      }
    },
    timeout: 50000 // don't forget this one
  }
  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
const wokerMinerList=[ 
    {
        //0
    "miner": "f0155050",
    "worker": "f3v6v2bew2tnvnlj7n4gmig4ldwnrb7wi4s33dbzspth7uryhbleswxuerlo25fq7an3yl6dpltppe77jutaza",
    "controlAddresses": [
      "f3s4otir3hgq6fdbd343usawhh7yay6tzb2bermgmjg35e6fbnxswu47dcaa2x44tr7pkwpvy2d7bzzdvwgsgq",
      "f3rp7d3tp23leia6fx6rq5net5xe5qsumgeattmcnpye4d5nlk2t7ikee3fpwjhkdg2tctr7tqxi6e6mbqudsq"
    ]
  },
{
    //1
    "miner": "f01602479",
    "worker": "f3sxjuao74whiwmcnd7ad7hltkrbquzu7tp3rjqwlqa5mpngyvdsvo4x4g5hx5zl6xnvvoitewpwboagkacdmq",
    "controlAddresses": [
      "f3vrvpai2ebi32hmjs56ovaqmpbkn7up3lf3e7dzm2qlq6txkxbe6ujl4tyrnpeaqu2y3g672dsqr6qfjnnysq",
      "f3vxjm2tjmhsqrvzgvlwnzrii5rscwyhn4uty6pehk7oyyqwxwm33wyabszqw4woovbk4gf7q3nwyt3q6umq2a"
    ]
  },
{
    //2
    "miner": "f0112667",
    "worker": "f3ta6m5o3u5xkn67y236zfruhti5xk5c6em3fxnta5wnwk6mptnulwjedlbuigh7hbtovwxf4jj47hrlmznyma",
    "controlAddresses": [
      "f3va37ati2zdnwf4j55e7xwlzisrl3biuxho4xpoo2wbxolhjhbpikjvhvb3i23fplctqy5inw4zi225f6rbza"
    ]
  },{
      //3
    "miner": "f0672951",
    "worker": "f3r2smu4icyge3bmbgbrajccgzcqinr362es5uylyi25iecnr4r652a53si3dwgs7ewl3ptkif6lof4nzlr4qq",
    "controlAddresses": [
      "f3vvzixpuajbmdjlemfgpcrlprhxcjjisyjp2sk24dxbnxeno6myfnicjjhs65wo6f3ljqd5n7hjjwtg6fy4fq",
      "f3r7zwprrxqv77wdl3w2sre6a2htxehc5raex4es7mwggkqkrhtrpm2u2ktuu5t43hd2gqaonn5hq2ct46rh5a",
      "f3xd3lnxr4gh4dlrtrz7xgydurmit7a22luadw2lsn3mn7thcfjirvcnv7ocj73dc4zyd75qk2udi6ngr7dyxq",
      "f3qln4t7f6m7xfmvctq565hf5n4drnykxwwm7snqjp5irz33pnumwm7ksqi4g52fqy5a7it645st3tf3hfapha"
    ]
  },
{
    //4 数据很多
    "miner": "f01641612",
    "worker": "f3sqnmdy4i4nb4xgblergtls45hyuegnllltvlftphqj4wsgjdpatmxdmczmjgvyo2toswr3lkz33hiztcmr3q",
    "controlAddresses": [
      "f3uls6elfv6emoqo74kwxuyid4hlf54qlb2m7qi7o5mcxv47tbbveotwqiz2l36g5xerbmcskad4adxdyqc7hq",
      "f3w5acabi4aalimr7stt7dm2agzulr7vrupog337ygugxxq64ol3ow7xpj523vvp443y5fcvkusghf5kg2aenq"
    ]
  },{
      //5 很多
    "miner": "f01606675",
    "worker": "f3uqshbzcorkuwjacgqxdlzz5wcbztj3aujy6n3olak5wj2tv6daffztebqelulc7e56sbkcaazqnuvrzivpzq",
    "controlAddresses": [
      "f3wawf3dgkoic4fn54avywljgjib4njamyn7mt5uu7yf4ffvebj3ta4qpz2qo7qokhcm5dznfmbv64vr5qvjya",
      "f3wb3yi47g52z4w7s44qzoaj35urz4erwsktp6azamz7izjvlgjgyynilaaxepw2jp2glzrfp5oxa6ge4zckmq"
    ]
  },{
      //6
    "miner": "f0130884",
    "worker": "f3u2frya4upurpa6ov4rrkptyoaywjcadbrds4np5doi64fmg4jxmccarxgwkjr4akl6p664hvtj6nvicg33pq",
    "controlAddresses": [
      "f3qxlnocqg7yiwwxvqhnywia37yzwxrv5srcfafken4nwmnnmercjmyv65ospfvoedcrq3cu5ejeca22nfzhaq",
      "f3ua4rz2pdgor2ztv756lrz64xhgovmxkg5erzxgdgczxaarob4hheluyhzkif637f2jsfsh4pdeuy3tim3qka"
    ]
  },{
      //7
    "miner": "f092228",
    "worker": "f3s4r2vsyzoolg3znoavol6p5od5lw6sgl6ijvoygmk4xrwkyca2hcilub7naumstmawspcwn3rxtc6wrxqdqa",
    "controlAddresses": [
      "f3s4r2vsyzoolg3znoavol6p5od5lw6sgl6ijvoygmk4xrwkyca2hcilub7naumstmawspcwn3rxtc6wrxqdqa",
      "f3urnjmgbtmpdirfw6z3ctpwcs4qk3gyn5rfw5desmd3jwbsq655i73ba4x2sk22no3q32lz6lgw7anvvko3bq",
      "f3xf4cdhnxpcis2t4mgivi3ti2iyvydrir6cxeigahppxj4e475b4aaeuws3mupaxmwaali3ciz5wzq33vvrda"
    ]
  },{
      //8 超级超级多
    "miner": "f01776738",
    "worker": "f3ulwjmaumwrkk5pom6kgwtbtmdvlrb4aiaqo2qk2rzzodttkm2obzerxyh6764l6insts26ysmamy4p6vev6a",
    "controlAddresses": [
      "f3vkj3d3clhq6udx25dsgwjow4mpwbq7yvf4em4vsw3ohdx6lnr6k5cyeyf2g7jssye3bda7rwv4risto652ya",
      "f3xdqrqsfhdxr2i3rfzzwciaprowdlgjuuewrm64gz4dqsk2gdu32shfs4lgnjqjygfkztfnhqlhl2ho5od2ua"
    ]
  },{
      //9
    "miner": "f01694304",
    "worker": "f3uorvoosl5lerdutjlklly7yu2dsyicso7rfd4wdabfvdo5vvwmwe4rhnbmkedfk6mtof5wgfwih7oz2klbiq",
    "controlAddresses": [
      "f3up6nlhh2yswbhga5o42keabh7j5zfs3bxprt7r6tmb6mpnr3lc67c6hhhtfzts2oluav74vnu4qyorfvyjaa",
      "f3wmudgbx54745ok2uudyfmtth7fmgvqifflbsrjjecdjutohflarwe5ictcjvj7nqsp2dzwenexucl7xugqna",
      "f3wpu42epdfsssrr4laobxr5w7muduzumv7pjepvoa6phfez7gtqiebsa2wwc4nvvwbeuddjh7xllgvr4ponfa",
      "f3wzk4anlxsppwrg3t32ossv65pjwxsxuqmsqstizysc47exq63nfyiwxwsrcztltfzlcq4f5u6pbwhryhqnla"
    ]
  },{
      //10
    "miner": "f01264125",
    "worker": "f3vvfpxjai7p3ds43qzeu7u6ihm63ry2sqatjyfoanskqy5p3ioaz3ulpl5gbf4jp27ppehl4jatrz5lcgjf7a",
    "controlAddresses": [
      "f3vzi4sqizrwvwhzvbbbr3k2rvhwlzvoillmzomx6ta2nz2mxkndzrvbsizm456sc544ile4yiuhiw5jirvmba"
    ]
  },{
      //11 有些多29238 页
    "miner": "f01606849",
    "worker": "f3vgdka3dcodiwlgq4ytfhj6cj7fu7zhye76jduxxovhxxocpxkl3dmctnishp6irapsiaf7n4qf4lmawpnmta",
    "controlAddresses": [
      "f3wqvcfaof4iag6tecv5mi6h4wjj7macux6lxtvbp22bhydjdgt6bum47pyuv2jmwuhpwc26fq5kln33wjjjda",
      "f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha"
    ]
  },{
      //12
    "miner": "f01238519",
    "worker": "f3ss2626xwbftlxcnhhq5pqdqqpz5udmex7hgn67qic7sqmo5l24ggmzhzzdfxkgplkjjf2nwh3g7lf5x55zia",
    "controlAddresses": [
      "f3q6igcc2rqkxgpqxtqszbk3r3hx3m2cdfsxfa7caabztc6hbx4tzupo6wwa4njk2y64t2hcbylfsxa63yjt4q",
      "f3thnzbbmdf5xyotnoeul54jnv57r7qazoenc2okkeflwju5ixkqid26peksvw2msoxjkn5vnthgthnhsoxvpq",
      "f3udhjgzordbmxgg7mcaolkfi64zblr3uw736nqu2y6agkh2ebtg67q4qc2mg44wt6z7rqdooc6exmzf3u3uyq",
      "f3wr24vqgvrizbitmnhqsua54yuuubrp7q4elmfn43yiinl5ipssn5fgcsqulrer4khzvd22ttvlxevynry6ka"
    ]
  },{
      //13
    "miner": "f01731371",
    "worker": "f3se3ao66pqy6dvpzsifzeaqrksw23wcmkdusqdtsrf7kzxaq2hnz5g4yg2kvkb434e6yxifdp7pnzlbfgl2rq",
    "controlAddresses": [
      "f3su67way45h7phfrjkqiwr4c7jy5cctbntbwdewplxsvkgwq4vu6bwk4ys6vgtrfp46limbcz74jzexibwhyq",
      "f3vz3gxddc4uot6b2adujg7ypyllilfohsa5ppboqe3iie7fjqqaz67e7na3jmljxt7fd35svy47bzyluylgea"
    ]
  },{
      //14
    "miner": "f01372912",
    "worker": "f3qgpidj6eyib4gabrouzx765evux4loepigang3qcuqv3dmyedcmvip2x6g3mge3zn6gdiwkhoupitaffihmq",
    "controlAddresses": [
      "f3vmedrfibzpbaczhbw2wv5f365ufrxsuco3xtdhw6kegpe72cha2pq5nj7a2nyjpwxdpqrg7yyxygdksoqmta"
    ]
  },{
      //15
    "miner": "f01479781",
    "worker": "f3wwz4e27vx6e24y2bh2lzasvsw2d6fv4lbi3zsdr72gsndtucfy72pz3dpatri4heovvt3xh7xl3w6yqmco7q",
    "controlAddresses": [
      "f3ue6jwqmpjxve3drlxdm5t6gtnewyujjhi76d324qi6dr2hmvi43uooyq2lbbe3tqaw5dmkeuucl3q6p6ln6a",
      "f3wo6xfrkjmzgddxzmrwwr7k7l4xht4khbqt2q3gfuw5y7knpd27bcoje2zqyupjgizjkaullteq6bmrusrzua",
      "f3ultton3lkv67n6aijq64hcoza362rkif5nrbh44kexm7gjebzabovevjqzxf5bisqgh63s5oq6hkb44l3cyq",
      "f3rfuhdclpqomogpmookmvw2ihbptwemty2llrbgokn5l2ly4tzl552zcgj75cyuha6lilwi554tdb7okn6awq",
      "f3tb5dq22nginq6lfxnxyznc6vxofe73qeio7q5hvimdexsfhvsexsbkl3d2gaij6udi6vdc7poa3impojhpma",
      "f3qojncgvvcobibidmhs4c2bbmcjl3tcpwlxhf4334jai2mrxrxb3vh4bsqjvab5g3jaorris3kmxlphwc3ftq",
      "f3vqcmfxjgl56g7rkbafjfr5vqxhpfgyow7b2litnvm7j6crkp22obicvrbb7x7ya7qdparetchabewdq2ncmq",
      "f3qdizy2qyfdnlyqtxhnsd7fiqfworulnfa2hkb6oshd6nusoogrk7otw7xi4gjqbyu4u77ojx2inspyvpwovq",
      "f3q6dnekjxzpf7mvtwsljrghpfagefajlahmjwrl4mivn6yu2t6sitqek5s66ayued7nkpljnqwj6s66xw67vq",
      "f3qakz5gancba5m3ak3beykca5x5vzhgibaq2teatt4vsyag4lwo3pqkrwdgedbyiovtm7dlrtihtybha5te5q"
    ]
  },{
      //16
    "miner": "f01662887",
    "worker": "f3uuzal4coj6eje2k2ud5zapz55un7q5m3drnres52j2o7vfzijm2xobxbux6qjvfj7e4lskpzv3wv7jsxu7oq",
    "controlAddresses": [
      "f3w6kgn6j2yugosf32jkeatt7tj6lwyig3xkecu2ou4jwketdjr4uz77by6zsx5vve6su24ht7gyjznfgm3juq",
      "f3vlrrox5bkbz6ufmeujgc7l3byhhdtd3yeigincx6m7d2envvmbzfegdeeggal2difuw4yzshms7hy6hab5za"
    ]
  },{
      //17
    "miner": "f0402661",
    "worker": "f3sfgekq462uzidxk72zd5x225cv2ukqmo2p2f7wstyoljq5iena5v7pmn3uqzbaddipbeb6yhsko4g7jbyroq",
    "controlAddresses": [
      "f3qolf55rtaejclw4slcvxefq5dlpd4wmwzobn5kpji5qezl5xkshr7qujixyniz7qggm4r745yv7judkasxsq",
      "f3rjntcvi5kidm4nk3eolvdnozahykeqlk74ip2jnxhk3xow2w3b3vqmpofcgethnr32zwqts2pq3cdcsb7e4q",
      "f3tb7jirgn5qxjhwsqzmlkh6eu3q2t56gnlnsn34k7r7qgml4uxyo37soqvjvnwq3uvukniecnml6ktv5be5aq",
      "f3tdngwf36id7zmtnjxpwxqgohfvi5d3dzljhyrd2uz6ws6awkbbrwutqr6enumxkqtafcy53ymuyfteixfqaa"
    ]
  },
  // ,{
  //     //18 miner unactive,worker有数据
  //   "miner": "f01716454",
  //   "worker": "f3qsvtbkbunuklkfd7pa5ol2ftljbifuziaynhgxkdpfinj3sxlwq5ipr2k6l3xy4paflxr5zmarvfs6g2soqq",
  //   "controlAddresses": []
  // },
  {
      //19
    "miner": "f01466173",
    "worker": "f3w5m4funfxmr6igos3dwbatsneg34bhxzgx5inqnhojlx5j2i4u42kfdrdbufklgngk3kokupictckhkdkt2a",
    "controlAddresses": [
      "f3qe7phesjdoohqkcrleqpwsrkqvuwtmim77uespztqnbtvenq5aybgjli3zn7gfnheiptft2tmlwueiynzlbq",
      "f3v4l4bobfan5ne3qbrnfomusfojdwo477okyvxwbi5qdo33pzugtctvjmczuhpmc5qd37cv4vt63xtvqyywfq",
      "f3wasdjh3a7v6e5jj4nbuam5qpta6c4fonanu43j44kkjflrwheno4ivuja5l33sf3ydi63wviiguihdjki6gq",
      "f3xe5xlzpg6kqtdyrxvfqpam3dksarhct23q7cczsn7wwm4np4ghg556o6ye3p3nlj32efhcmr2qmv4y5iqliq"
    ]
  },{
      //20
    "miner": "f01716466",
    "worker": "f3qnmwvjek4de67ivyctcb2af457ga6uw7a5wfra4qscmojcfxtgnizhtezwsb2aoy7j5yzugpku4p6dq7625q",
    "controlAddresses": [
      "f3qsvtbkbunuklkfd7pa5ol2ftljbifuziaynhgxkdpfinj3sxlwq5ipr2k6l3xy4paflxr5zmarvfs6g2soqq",
      "f3wywoihtccidne6ajx6xzn2z6antxqvhciejqagzggadhutfjhuncj2nlrrrqm2gtreq5wffp32pvcb5bbfjq"
    ]
  }]
const minerList=[
    'f0155050',  'f01602479',
    'f0112667',  'f0672951',
    'f01641612', 'f01606675',
    'f0130884',  'f092228',
    'f01776738', 'f01694304',
    'f01264125', 'f01606849',
    'f01238519', 'f01731371',
    'f01372912', 'f01479781',
    'f01662887', 'f0402661',
    'f01466173', 'f01716466'
  ]
  //insert document to a collection
function insertManyDocument(url,document, myObj){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      // var myobj = { name: "Company Inc", address: "Highway 37" };
      var dbo = db.db("filfox");
      dbo.collection(document).insertMany(myObj, function(err, res) {
        if (err) throw err;
        console.log("many document inserted");
        db.close();
      });
    });
  }
 //insert one document to a collection
function insertOneDocument(url,document, myObj){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      // var myobj = { name: "Company Inc", address: "Highway 37" };
      var dbo = db.db("filfox");
      dbo.collection(document).insertOne(myObj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
  } 

  //process transactions
function processTransaction(transaction){
    // console.log('processTransaction')
    transaction["value"]=parseInt(transaction["value"])/decimalBase
    var dateObj = new Date(0); // The 0 there is the key, which sets the date to the epoch
    dateObj.setUTCSeconds(transaction["timestamp"]);
    transaction.date= dateObj
    transaction.month = dateObj.getUTCMonth() + 1; //months from 1-12
    transaction.day = dateObj.getUTCDate();
    transaction.year = dateObj.getUTCFullYear();
   
}
//读取地址transaction with 条件 时间戳和类型
const getTransWithTimestampType =async (miner,address,maxTimestamp,type)=>{
    finished=false
    finishedController=false
 console.log('getTransWithTimestampType ')
 var newMaxTimestamp
 var res = await axios.get(`https://filfox.info/api/v1/address/${address}/transfers?pageSize=100&page=0&type=${type}`,myConfig)
 var data = await res.data
 if(!data["transfers"]){
   console.log('no transactions of address:',address)
 }else{
  newMaxTimestamp = data["transfers"][0].timestamp

  console.log('newMaxTimestamp',newMaxTimestamp)
  //save the first page data into mongodb
   //calculate the size of pages in total,
   var pageSize = parseInt(data["totalCount"]/100)
   var timestamp
   var continueLoop = true
  if( data["totalCount"] >0){
      //page start from 0
      for(var i=0;i<=pageSize;i++){
         if(continueLoop){
              console.log("page",i)
             // i is page number
             if(i%59 == 0){
                 await sleep(10000)
             }
             res = await axios.get(`https://filfox.info/api/v1/address/${address}/transfers?pageSize=100&page=${i}&type=${type}`,myConfig)
             data = await res.data
             // console.log(data)
             for(var j=0;j<data["transfers"].length;j++){
                 //j is transaction number
                 timestamp = data["transfers"][j].timestamp
                 // console.log('timestamp',timestamp)
                 if(timestamp>maxTimestamp){
                     // console.log("transaction",j)
                     data["transfers"][j].miner=miner
                     data["transfers"][j].address=address
                     processTransaction(data["transfers"][j])
                 }else{
                     continueLoop =false
                     data["transfers"].splice(j,100)
                     console.log('got to max time limit')
                 }
              }
           //insert the transaction of this page into db
           if(data["transfers"].length>0){
               insertManyDocument(url,'transactions',data["transfers"])
           }else{
               console.log('no data to insert db')
           }
         }else{
             break;
         }
     }
  }
  //全部结束后，需要更新此地址在timstamp表的最大时间戳，
  if(newMaxTimestamp>maxTimestamp){
      timestampModule.findAndUpdate(address,newMaxTimestamp)
  }
 console.log('WC finished')
  finished=true
  finishedController=true
 }
 
}

//读取一个地址的transaction 时间戳大于maxtimestamp
const getTransWithTimestamp =async (miner,address,maxTimestamp)=>{
    finished=false;
    console.log('getTransWithTimestamp ',miner)
   var newMaxTimestamp
    var res = await axios.get(`https://filfox.info/api/v1/address/${address}/transfers?pageSize=100&page=0`,myConfig)
    var data = await res.data
    if(!data["transfers"]){
      console.log('no transactions of address:',address)
      finished=true
    }else{
      newMaxTimestamp = data["transfers"][0].timestamp
      console.log('new max timestamp',newMaxTimestamp)
      //save the first page data into mongodb
       //calculate the size of pages in total,
       var pageSize = parseInt(data["totalCount"]/100)
       var timestamp
       var continueLoop = true
      if( data["totalCount"] >0){
          //page start from 0
          for(var i=0;i<=pageSize;i++){
             if(continueLoop){
                  console.log("page",i)
                 // i is page number
                 if(i%59 == 0){
                   //暂停40秒，为了应对429问题
                     await sleep(40000)
                 }
                 res = await axios.get(`https://filfox.info/api/v1/address/${address}/transfers?pageSize=100&page=${i}`,myConfig)
                 data = await res.data
                 // console.log(data)
                 for(var j=0;j<data["transfers"].length;j++){
                     //j is transaction number
                     timestamp = data["transfers"][j].timestamp
                  //    console.log('timestamp',timestamp)
                     if(timestamp>maxTimestamp){
                         // console.log("transaction",j)
                         data["transfers"][j].miner=miner
                         data["transfers"][j].address=address
                         processTransaction(data["transfers"][j])
                     }else{
                         continueLoop =false
                         data["transfers"].splice(j,100)
                         console.log('got to max time limit')
                     }
                  }
               //insert the transaction of this page into db
               if(data["transfers"].length>0){
                   insertManyDocument(url,'transactions',data["transfers"])
               }else{
                   console.log('no data to insert db')
               }
             }else{
                 break;
             }
         }
      //    console.log('WC finished')
         finished=true
      }
      //全部结束后，需要更新此地址在timstamp表的最大时间戳，
      if(newMaxTimestamp>maxTimestamp){
          // console.log('我要更新最大时间戳啦！')
          timestampModule.findAndUpdate(address,newMaxTimestamp)
          finished=true
      }
    }
    
}

async function dbCallback(miner,address,timestamp,type,callback){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("filfox");
        dbo.collection('timestamps').findOne({address:address}, function(err, res) {
          if (err) throw err;
          // console.log("document found",res);
          db.close();
          if(res){
            timestamp = res["maxTimestamp"]
            console.log('maxtimestamp is ',timestamp)
            callback(miner,address,timestamp,type)
          }else{
            timestamp=1648699200
            console.log('maxtimestamp is ',timestamp)
            callback(miner,address,timestamp,type)
          }
        });
      
      });
}
//读取worker controller最新的数据
async function getTransUptoDateWC(miner,address,type,callback){
    var timestamp
    finished=false
    // console.log('getTransUptoDateWC')
    console.log(finished)
   await dbCallback(miner,address,timestamp,type,callback)
      finished=true
      console.log(finished)
  }
//读取woker transaction
 async function getTransactionWorker(ind){
    console.log('getTransactionWorker()')
     finished=false
    var worker= wokerMinerList[ind].worker
    var miner= wokerMinerList[ind].miner
    if(worker){
        console.log('worker',worker)
     await   getTransUptoDateWC(miner,worker,'transfer',getTransWithTimestampType)
    }else{
        console.log('no worker address of ',ind,'reocrd')
    }
   step=3;
   console.log('next step',step)
   console.log('at the end of getTransactionWorker() finished is',finished)
}  
//读取controller数据
var finished=true
var finishedController=true

async function getTransactionController(ind){
    console.log('getTransactionController(),finished is ',finished)
    finished=false

    var i=0
    var miner=wokerMinerList[ind].miner
   var  controllers=wokerMinerList[ind].controlAddresses
    console.log('miner',miner);
    setInterval(()=>{
      while(finishedController&&i<controllers.length){
          finishedController=false
        //   finished=false
        console.log('controller,',wokerMinerList[ind].controlAddresses[i])
        console.log('while',i,' th controller, finishsed=',finished)
        var address=controllers[i]
        getTransUptoDateWC(miner,address,'transfer',getTransWithTimestampType)
        i++
      }
    },5000)
    step=4
    console.log('next step is ',step)
    console.log('at the end of getTransactionController() finished is',finished)
}
// 日期格式转化为可读
function convertDateFormat(dateObj) {
    var s,d;
    d = new Date(0);
    d.setUTCSeconds(dateObj);
    // s = d.getUTCFullYear()+ "/";
    // s += d.getUTCMonth() + 1+ "/"; //months from 1-12
    // s += d.getUTCDate();
    return d;
}
//读取table timestamp中对应地址的最大timestamp传递到callback函数中
async function getTransUptoDateMiner(miner,address,callback){
    console.log('getTransUptoDateMiner')
    var timestamp
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("filfox");
        dbo.collection('timestamps').findOne({address:address}, function(err, res) {
          if (err) throw err;
          // console.log("document found",res);
          db.close();
          if(res){
            timestamp = res["maxTimestamp"]
            callback(miner,address,timestamp)
          }else{
            timestamp=1648699200
            callback(miner,address,timestamp)
          }
        });
      });
  }
function step4(){
    oneFinished=true;
    console.log('step4(),oneFinished=',oneFinished)
    console.log('===one miner download done===')
}
  //读取miner所有最新transactions
 async function getTransactionMiner(ind){
     console.log('step ',1)
     finished=false
     var miner= wokerMinerList[ind].miner
     console.log('getTransactionMiner()','miner',miner)
      var address = miner
    await  getTransUptoDateMiner(miner,address,getTransWithTimestamp)
    step=2;
    console.log('next step',step)
  }
//  读取一个miner的全部transaction，包含miner，worker，controllers
var step=1;
  function getTransactionAll(ind){
     oneFinished=false
     step =1
    const myInterval= setInterval(()=>{
        // console.log('current step is',step)
        switch(step){
            case 1:
                getTransactionMiner(ind)
            case 2:
                {
                    if(finished==true){
                        getTransactionWorker(ind)
                    }
                }
            case 3:
                if(finished==true){
                    getTransactionController(ind)
                }
                
            case 4:
                if(finished==true){
                    step4();
                    clearInterval(myInterval)
                    break;
                }
               
        }
         
     },20000)
    //  finished=true;

  }
  async function getBalance(address,miner){
    // console.log('address ',address)
    try{
      var res = await axios.get(`https://filfox.info/api/v1/address/${address}`)
    }catch(error){
      throw(error)
      console.log("error",error)
    }
    var data = await res.data
    // console.log(data)
    var balanceResult={}
    var timestamp = data["timestamp"]
    balanceResult.date=convertDateFormat(timestamp)
    balanceResult.address=address
    balanceResult.miner=miner
    balanceResult.timestamp = timestamp

    d = new Date(0);
    d.setUTCSeconds(timestamp);
    // s = d.getUTCFullYear()+ "/";
    // s += d.getUTCMonth() + 1+ "/"; //months from 1-12

    balanceResult.year=d.getUTCFullYear()
    balanceResult.month=d.getUTCMonth()+1
    balanceResult.day=d.getUTCDate()
    balanceResult.balance = data["balance"]/decimalBase
  
    insertOneDocument(url,'balances',balanceResult)
    // await sleep(10000)
  }
  async function getBalanceWC(ind,callback){
    console.log('getBalanceWC, ind:',ind)
    console.log(ind)
    if(ind%5 ==0){
      await sleep(20000)
    }
    var miner = wokerMinerList[ind]["miner"]
    // worker balance
    var worker = wokerMinerList[ind].worker
    console.log("worker",worker)
    await getBalance(worker,miner)
    var controllers = wokerMinerList[ind].controlAddresses
    for(var i=0;i<controllers.length;i++){
      console.log('controller',controllers[i])
       await   getBalance(controllers[i],miner)
    }
    if(ind<20){
      callback(ind+1,callback)
    }
  }

  //get all transaction of all miners including miner, worker,controllers
var oneFinished=true
 async function getTransactions(ind,callback){
     console.log('getTransactions() ind',ind)
    //  finished=true
      getTransactionAll(ind)
    console.log('before interval oneFinished is ',oneFinished)
  var myInterval=  setInterval(()=>{
        if(oneFinished==true){
            oneFinished=false
            if(ind<=18){
                console.log('ind+1',ind+1)
                callback(ind+1,callback)
                clearInterval(myInterval)
            }else{
                console.log('All miners transactions have been downloaded!')
            }
        }
    },3000)
  }
  //test
//读取worker controller余额 ，执行时间每月最后一天utc 24点
  // getBalanceWC(0,getBalanceWC)
// timestampModule.getMaxMinAll()
getTransactions(20,getTransactions)
// getTransactionController(18)
// getTransactionAll(0)
