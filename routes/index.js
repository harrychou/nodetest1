var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld', function(req, res) {
  res.render('helloworld', {title: 'Hello, World!'})
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* GET Userlist page. */
router.get('/verses', function(req, res) {
    var db = req.db;
    var collection = db.get('bibleverses');
    collection.find({},{},function(e,docs){
        res.render('verses', {
            "verses" : docs
        });
    });
});

/* GET Userlist page. */
router.get('/initverses', function(req, res) {
    var db = req.db;
    var collection = db.get('bibleverses');
    collection.insert(verses, function(err, doc) {     
    });
});

router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
});
module.exports = router;

var verses = [{
    cn: '利未記 19:11',
    en: 'Leviticus 19:11',
    cn_topic: '誠實',
    en_topic: 'Honesty',
    cn_text: '你們不可偷盜,不可欺騙,也不可彼此說謊。',
    en_text: 'Do not steal. Do not lie. Do not deceive one another.'
}, {
    cn: '約書亞記 1:8',
    en: 'Joshua 1:8 ',
    cn_topic: '神的話',
    en_topic: 'God’s Word',
    cn_text: '這律法書不可離開你的口,總要晝夜思想,好使你謹守遵行這書上所寫的一切話。如此你的道路就可以亨通,凡事順利。',
    en_text: 'Do not let this Book of the Law depart from your mouth; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful.'
}, {
    cn: '詩篇 119:9-11',
    en: 'Psalm 119:9-11 ',
    cn_topic: '試探中的幫助',
    en_topic: 'Help in Temptations',
    cn_text: '少年人用甚麼潔淨他的行為呢?是要遵行你的話。我將你的話藏在心裏,免得我得罪你。',
    en_text: 'How can a young man keep his way pure? By living according to your word..... I have hidden your word in my heart that I might not sin against you.'
}, {
    cn: '詩篇 121:1-2 ',
    en: 'Psalm 121:1-2 ',
    cn_topic: '',
    en_topic: '',
    cn_text: '我要向山舉目;我的幫助從何而來?我的幫助從造天地的耶和華而來。',
    en_text: 'I lift up my eyes to the hills--where does my help come from? My help comes from the LORD, the Maker of heaven and earth.'
}, {
    cn: '以賽亞書 41:10',
    en: 'Isaiah 41:10 ',
    cn_topic: '神的力量',
    en_topic: 'Power of God',
    cn_text: '你不要害怕,因為我與你同在;不要驚惶,因為我是你的神。我必堅固你,我必幫助你。',
    en_text: 'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.'
}, {
    cn: '以賽亞書 53:6',
    en: 'Isaiah 53:6 ',
    cn_topic: '世人都犯了罪',
    en_topic: 'All Have Sinned',
    cn_text: '我們都如羊走迷,各人偏行己路,耶和華使我們眾人的罪孽都歸在他身上。',
    en_text: 'We all, like sheep, have gone astray, each of us has turned to his own way; and the LORD has laid on him the iniquity of us all.'
}, {
    cn: '耶利米哀歌 3:22-23',
    en: 'Lamentations 3:22-23',
    cn_topic: '神的信實',
    en_topic: 'The Faithfulness of God',
    cn_text: '我們不至消滅,是出於耶和華諸般的慈愛;是因他的憐憫,不致斷絕。每早晨這都是新的.你的誠實、極其廣大。',
    en_text: "Because of the LORD'S great love we are not consumed, for his compassions never fail.They are new every morning;great is your faithfulness."
}, {
    cn: '馬太福音 4:4',
    en: 'Matthew 4:4 ',
    cn_topic: '',
    en_topic: '',
    cn_text: '耶穌卻回答說:「經上記著說:人活著,不是單靠食物,乃是靠上帝口裏所出的一切話。」',
    en_text: 'Jesus answered, "It is written: Man does not live on bread alone, but on every word that comes from the mouth of God.'
}, {
    cn: '馬太福音 4:19',
    en: 'Matthew 4:19 ',
    cn_topic: '作見証',
    en_topic: 'Witnessing',
    cn_text: '耶穌對他們說:「來跟從我,我要叫你們得人如得魚一樣。',
    en_text: 'Come, follow me, Jesus said, "and I will make you fishers of men."'
}, {
    cn: '馬太福音 5:16',
    en: 'Matthew 5:16 ',
    cn_topic: '善行',
    en_topic: 'Good Deeds',
    cn_text: '你們的光也當這樣照在人前,叫他們看見你們的好行為,便將榮耀歸給你們在天上的父。',
    en_text: 'In the same way, let your light shine before men, that they may see your good deeds and praise your Father in heaven.'
}, {
    cn: '馬太福音 6:33',
    en: 'Matthew 6:33 ',
    cn_topic: '基督擺首位',
    en_topic: 'Christ the First Priority',
    cn_text: '你們要先求他的國和他的義,這些東西都要加給你們了。',
    en_text: 'But seek first his kingdom and his righteousness, and all these things will be given to you as well.'
}, {
    cn: '馬太福音 18:20',
    en: 'Matthew 18:20 ',
    cn_topic: '團契生活',
    en_topic: 'Fellowship',
    cn_text: '因為無論在那裏,有兩三個人奉我的名聚會,那裏就有我在他們中間。',
    en_text: 'For where two or three come together in my name, there am I with them.'
}, {
    cn: '馬太福音 24:44 ',
    en: 'Matthew 24:44 ',
    cn_topic: '',
    en_topic: '',
    cn_text: '所以,你們也要預備,因為你們想不到的時候,人子就來了。」',
    en_text: 'So you also must be ready, because the Son of Man will come at an hour when you do not expect him.'
}, {
    cn: '馬太福音 28:19-20',
    en: 'Matthew 28:19-20 ',
    cn_topic: '大使命',
    en_topic: 'Great Commission',
    cn_text: '所以你們要去,使萬民作我的門徒,奉父子聖靈的名,給他們施洗。凡我所吩咐你們的,都教訓他們遵守,我就常與你們同在,直到世界的末了。',
    en_text: 'Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age."'
}, {
    cn: '馬可福音 10:45',
    en: 'Mark 10:45 ',
    cn_topic: '服事人',
    en_topic: 'Serve People',
    cn_text: '因為人子來，並不是要受人的服事，乃是要服事人，並且要捨命，作多人的贖價。',
    en_text: 'For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many."'
}, {
    cn: '路加福音 16:10',
    en: 'Luke 16:10 ',
    cn_topic: '',
    en_topic: '',
    cn_text: '人在最小的事上忠心,在大事上也忠心;在最小的事上不義,在大事上也不義。',
    en_text: 'Whoever can be trusted with very little can also be trusted with much, and whoever is dishonest with very little will also be dishonest with much.'
}, {
    cn: '約翰福音 1:21',
    en: 'John 1:21 ',
    cn_topic: '接受耶穌',
    en_topic: 'Accepting Jesus',
    cn_text: '凡接待他的,就是信他名的人。他就他們權柄,作神的兒女。',
    en_text: 'Yet to all who received him, to those who believed in his name, he gave the right to become children of God--'
}, {
    cn: '約翰福音 5:24',
    en: 'John 5:24 ',
    cn_topic: '救恩的把握',
    en_topic: 'Assurance of Salvation',
    cn_text: '我實實在在的告訴你們,那聽我話,又信差我來者的,就有永生,不至於定罪,是已經出死入生了。',
    en_text: 'I tell you the truth, whoever hears my word and believes him who sent me has eternal life and will not be condemned; he has crossed over from death to life.'
}, {
    cn: '約翰福音 13:34-35',
    en: 'John 13:34-35 ',
    cn_topic: '愛',
    en_topic: 'Love',
    cn_text: '我賜給你們一條新命令,乃是叫你們彼此相愛。我怎樣愛你們,你們也要怎樣相愛。你們若有彼此相愛的心,眾人因此就認出你們是我的門徒了。',
    en_text: 'A new command I give you: Love one another. As I have loved you, so you must love one another. By this all men will know that you are my disciples, if you love one another.'
}, {
    cn: '約翰福音 14:21',
    en: 'John 14:21 ',
    cn_topic: '順服基督',
    en_topic: 'Obedience to Christ',
    cn_text: '有了我的命令又遵守的,這人就是愛我的。愛我的,必蒙我父愛他,我也要愛他,並且要向他顯現。',
    en_text: 'Whoever has my commands and obeys them, he is the one who loves me. He who loves me will be loved by my Father, and I too will love him and show myself to him."'
}, {
    cn: '約翰福音 15:7',
    en: 'John 15:7 ',
    cn_topic: '禱告',
    en_topic: 'Prayer',
    cn_text: '你若常在我裏面，我的話也常在你們裏面，凡你們所願意的，祈求就給你們成就。',
    en_text: 'If you remain in me and my words remain in you, ask whatever you wish, and it will be given you.'
}, {
    cn: '約翰福音 16:24',
    en: 'John 16:24 ',
    cn_topic: '',
    en_topic: '',
    cn_text: '向來你們沒有奉我的名求甚麼，如今你們求，就必得著，叫你們的喜樂可以滿足。',
    en_text: 'Until now you have not asked for anything in my name. Ask and you will receive, and your joy will be complete.'
}, {
    cn: '使徒行傳 24:16',
    en: 'Acts 24:16 ',
    cn_topic: '誠實',
    en_topic: 'Honesty',
    cn_text: '我因此自己勉勵，對神對人，常存無虧的良心。',
    en_text: 'So I strive always to keep my conscience clear before God and man.'
}, {
    cn: '羅馬書 1:16',
    en: 'Romans 1:16 ',
    cn_topic: '作見証',
    en_topic: 'Witnessing',
    cn_text: '我不以福音為恥，這福音本是神的大能，要救一切相信的。先是猶太人，後是希利尼人。',
    en_text: 'I am not ashamed of the gospel, because it is the power of God for the salvation of everyone who believes: first for the Jew, then for the Gentile.'
}, {
    cn: '羅馬書 3:23',
    en: 'Romans 3:23 ',
    cn_topic: '世人都犯了罪',
    en_topic: 'All Have Sinned',
    cn_text: '因為世人都犯了罪，虧缺了神的榮耀。',
    en_text: 'for all have sinned and fall short of the glory of God. '
}, {
    cn: '羅馬書 4:20-21',
    en: 'Romans 4:20-21 ',
    cn_topic: '信心',
    en_topic: 'Faith',
    cn_text: '並且仰望神的應許，總沒有因不信，心裏起疑惑，反倒因信，心裏得堅固，將榮耀歸給神；且滿心相信，神所應許的，必能作成。',
    en_text: 'Yet he did not waver through unbelief regarding the promise of God, but was strengthened in his faith and gave glory to God, being fully persuaded that God had power to do what he had promised.'
}, {
    cn: '羅馬書 5:8',
    en: 'Romans 5:8 ',
    cn_topic: '基督的救贖',
    en_topic: 'The Redemption of Christ',
    cn_text: '惟有基督在我們還作罪人的時候，為我們死，神的愛就在此向我們顯明了。',
    en_text: 'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.'
}, {
    cn: '羅馬書 6:23',
    en: 'Romans 6:23 ',
    cn_topic: '罪的審判',
    en_topic: 'Judgment of Sin',
    cn_text: '因為罪的工價乃是死，惟有神的恩賜，在我們的主基督耶穌裏，乃是永生。',
    en_text: 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.'
}, {
    cn: '羅馬書 8:32',
    en: 'Romans 8:32 ',
    cn_topic: '神的供應',
    en_topic: 'Providence of God',
    cn_text: '神既不愛惜自己的兒子為我們眾人捨了，豈不也把萬物和他一同白白的賜給我們麼？',
    en_text: 'He who did not spare his own Son, but gave him up for us all--how will he not also, along with him, graciously give us all things?'
}, {
    cn: '羅馬書 12:1',
    en: 'Romans 12:1 ',
    cn_topic: '順服基督',
    en_topic: 'Obedience to Christ',
    cn_text: '所以弟兄們，我以神的慈悲勸你們，將身體獻上當作活祭，是聖潔的，是神所喜悅的，你們如此事奉乃是理所當然的。',
    en_text: "Therefore, I urge you, brothers, in view of God's mercy, to offer your bodies as living sacrifices, holy and pleasing to God--this is your spiritual act of worship."
}, {
    cn: '羅馬書 12:2',
    en: 'Romans 12:2 ',
    cn_topic: '與世界分別',
    en_topic: 'Set Apart From the World',
    cn_text: '不要效法這個世界，只要心意更新而變化，叫你們察驗何為神善良純全可喜悅的旨意。',
    en_text: "Do not conform any longer to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is--his good, pleasing and perfect will."
}, {
    cn: '歌林多前書 2:12',
    en: '1 Corinthians 2:12 ',
    cn_topic: '神的靈',
    en_topic: 'Spirit of God',
    cn_text: '我們所領受的，並不是世上的靈，乃是從神來的靈，叫我們能知道神開恩賜給我們的事。',
    en_text: 'We have not received the spirit of the world but the Spirit who is from God, that we may understand what God has freely given us.'
}, {
    cn: '歌林多前書 3:16',
    en: '1 Corinthians 3:16 ',
    cn_topic: '神的靈',
    en_topic: 'Spirit of God',
    cn_text: '豈不知你們是神的殿，神的靈住在你們裏頭麼？',
    en_text: "Don't you know that you yourselves are God 's temple and that God's Spirit lives in you ?"
}, {
    cn: '歌林多前書 13:4 ',
    en: '1 Corinthians 13:4 ',
    cn_topic: '',
    en_topic: '',
    cn_text: '愛是恆久忍耐，又有恩慈；愛是不嫉妒；愛是不自誇，不張狂，',
    en_text: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud.'
}, {
    cn: '歌林多後書 5:17',
    en: '2 Corinthians 5:17 ',
    cn_topic: '在基督裏',
    en_topic: 'In Christ',
    cn_text: '若有人在基督裏，他就是新造的人，舊事已過，都變成新的了。',
    en_text: 'Therefore, if anyone is in Christ, he is a new creation; the old has gone, the new has come!'
}, {
    cn: '加拉太書 2:20',
    en: 'Galatians 2:20 ',
    cn_topic: '在基督裏',
    en_topic: 'In Christ',
    cn_text: '我已經與基督同釘十字架，現在活著的，不再是我，乃是基督在我裏面活著。並且我如今在肉身活著，是因信神的兒子而活，他是愛我，為我捨己。',
    en_text: 'I have been crucified with Christ and I no longer live, but Christ lives in me. The life I live in the body, I live by faith in the Son of God, who loved me and gave himself for me.'
}, {
    cn: '加拉太書 6:9-10',
    en: 'Galatians 6:9-10 ',
    cn_topic: '善行',
    en_topic: 'Good Deeds',
    cn_text: '我們行善,不可喪志；若不灰心,到了時候，就要收成。所以有了機會，就當向眾人行善；向信徒一家的人,更當這樣。',
    en_text: 'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. Therefore, as we have opportunity, let us do good to all people, especially to those who belong to the family of believers.'
}, {
    cn: '以弗所書 2:8-9',
    en: 'Ephesians 2:8-9 ',
    cn_topic: '得救的恩典',
    en_topic: 'Saved by grace alone',
    cn_text: '你們得救是本乎恩，也因著信。這並不是出於自己，乃是神所賜的。也不是出於行為，免得有人自誇。',
    en_text: 'For it is by grace you have been saved, through faith--and this not from yourselves, it is the gift of God--not by works, so that no one can boast.'
}, {
    cn: '以弗所書 5:3',
    en: 'Ephesians 5:3 ',
    cn_topic: '聖潔',
    en_topic: 'Purity',
    cn_text: '至於淫亂，並一切污穢，或是貪婪，在你們中間連提都不可，方合聖徒的體統。淫詞妄語，和戲笑的話，都不相宜，總要說感謝的話。',
    en_text: "But among you there must not be even a hint of sexual immorality, or of any kind of impurity, or of greed, because these are improper for God's holy people."
}, {
    cn: '腓立比書 2:3-4',
    en: 'Philippians 2:3-4 ',
    cn_topic: '謙卑',
    en_topic: 'Humility',
    cn_text: '凡事不可結黨，不可貪圖虛浮的榮耀，只要存心謙卑，各人看別人比自己強。各人不要單顧自己的事，也要顧別人的事。',
    en_text: 'Do nothing out of selfish ambition or vain conceit, but in humility consider others better than yourselves. Each of you should look not only to your own interests, but also to the interests of others.'
}, {
    cn: '腓立比書 4:6-7',
    en: 'Philippians 4:6-7 ',
    cn_topic: '禱告',
    en_topic: 'Prayer',
    cn_text: '應當一無掛慮，祇要凡事藉著禱告、祈求和感謝，將你們所要的告訴神。神所賜出人意外的平安，必在基督耶穌裏，保守你們的心懷意念。',
    en_text: 'Do not be anxious about anything, but in everything, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.'
}, {
    cn: '腓立比書 4:13',
    en: 'Philippians 4:13 ',
    cn_topic: '神的力量',
    en_topic: 'Power of God',
    cn_text: '我靠著那加給我力量的，凡事都能做。',
    en_text: 'I can do everything through him who gives me strength.'
}, {
    cn: '腓立比書 4:19',
    en: 'Philippians 4:19 ',
    cn_topic: '神的供應',
    en_topic: 'Providence of God',
    cn_text: '我的神必照他榮耀的豐富，在基督耶穌裏，使我們一切所需用的都充足。',
    en_text: 'And my God will meet all your needs according to his glorious riches in Christ Jesus.'
}, {
    cn: '歌羅西書 3:9 ',
    en: 'Colossians 3:9 ',
    cn_topic: '',
    en_topic: '',
    cn_text: '不要彼此說謊；因你們已經脫去舊人和舊人的行為，',
    en_text: 'Do not lie to each other, since you have taken off your old self with its practices'
}, {
    cn: '提摩太後書 3:16',
    en: '2 Timothy 3:16 ',
    cn_topic: '神的話',
    en_topic: 'God’s Word',
    cn_text: '聖經都是神所默示的，於教訓、督責、使人歸正、教導人學義，都是有益的。',
    en_text: 'All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.'
}, {
    cn: '提多書 3:5',
    en: 'Titus 3:5 ',
    cn_topic: '得救的恩典',
    en_topic: 'Saved by grace alone',
    cn_text: '他便救了我們，並不是因我們自己所行的義，乃是照他的憐憫，藉著重生的洗，和聖靈的更新。',
    en_text: 'he saved us, not because of righteous things we had done, but because of his mercy. He saved us through the washing of rebirth and renewal by the Holy Spirit.'
}, {
    cn: '希伯來書 2:18',
    en: 'Hebrews 2:18 ',
    cn_topic: '試探中的幫助',
    en_topic: 'Help in Temptations',
    cn_text: '他自己既然被試探而受苦，就能搭救被試探的人。',
    en_text: 'Because he himself suffered when he was tempted, he is able to help those who are being tempted.'
}, {
    cn: '希伯來書 11:6',
    en: 'Hebrews 11:6 ',
    cn_topic: '信心',
    en_topic: 'Faith',
    cn_text: '人非有信，就不能得神的喜悅；因為到神面前來的人，必須信有神，且信他賞賜那尋求他的人。',
    en_text: 'And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him. '
}, {
    cn: '希伯來書 12:3',
    en: 'Hebrews 12:3 ',
    cn_topic: '堅定',
    en_topic: 'Steadfast',
    cn_text: '那忍受罪人這樣頂撞的，你們要思想，免得疲倦灰心。',
    en_text: 'Consider him who endured such opposition from sinful men, so that you will not grow weary and lose heart.'
}, {
    cn: '雅各書 1:22 ',
    en: 'James 1:22 ',
    cn_topic: '',
    en_topic: '',
    cn_text: '只是你們要行道，不要單單聽道，自己欺哄自己。',
    en_text: 'Do not merely listen to the word, and so deceive yourselves. Do what it says.'
}, {
    cn: '彼得前書 2:11',
    en: '1 Peter 2:11 ',
    cn_topic: '聖潔',
    en_topic: 'Purity',
    cn_text: '親愛的弟兄啊！你們是客旅，是寄居的。我勸你們要禁戒肉體的私慾，這私慾是與靈魂爭戰的。',
    en_text: 'Dear friends, I urge you, as aliens and strangers in the world, to abstain from sinful desires, which war against your soul.'
}, {
    cn: '彼得前書 3:18',
    en: '1 Peter 3:18 ',
    cn_topic: '基督的救贖',
    en_topic: 'The Redemption of Christ',
    cn_text: '因基督也曾一次為罪受苦,就是義的代替不義的,為要引我們到神面前。按著肉體說,他被治死;按著靈性說,他復活了。',
    en_text: 'For Christ died for sins once for all, the righteous for the unrighteous, to bring you to God. He was put to death in the body but made alive by the Spirit.'
}, {
    cn: '彼得前書 5:5-6',
    en: '1 Peter 5:5-6 ',
    cn_topic: '謙卑',
    en_topic: 'Humility',
    cn_text: '你們年幼的，也要順服年長的，就是你們眾人，也都要以謙卑束腰，彼此順服。因為神阻擋驕傲的人，賜恩給謙卑的人。所以你們要自卑，服在神大能的手下，到了時候，他必叫你們升高。',
    en_text: "Young men, in the same way be submissive to those who are older. All of you, clothe yourselves with humility toward one another, because, God opposes the proud but gives grace to the humble. Humble yourselves, therefore, under God's mighty hand, that he may lift you up in due time."
}, {
    cn: '彼得前書 5:7',
    en: '1 Peter 5:7 ',
    cn_topic: '神的平安',
    en_topic: 'Peace from God',
    cn_text: '你們要將一切的憂慮卸給神，因為他顧念你們。',
    en_text: 'Cast all your anxiety on him because he cares for you.'
}, {
    cn: '約翰一書 1:9',
    en: '1 John 1:9 ',
    cn_topic: '',
    en_topic: '',
    cn_text: '我們若認自己的罪，上帝是信實的，是公義的，必要赦免我們的罪，洗淨我們一切的不義。',
    en_text: 'If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.'
}, {
    cn: '約翰一書 2:15-16',
    en: '1 John 2:15-16 ',
    cn_topic: '與世界分別',
    en_topic: 'Set Apart From the World',
    cn_text: '不要愛世界和世界上的事；人若愛世界，愛父的心，就不在他裏面了。因為凡世界上的事，就像肉體的情慾，眼目的情慾，並今生的驕傲，都不是從父來的，乃是從世界來的。',
    en_text: 'Do not love the world or anything in the world. If anyone loves the world, the love of the Father is not in him. For everything in the world--the cravings of sinful man, the lust of his eyes and the boasting of what he has and does--comes not from the Father but from the world.'
}, {
    cn: '約翰一書 3:18',
    en: '1 John 3:18 ',
    cn_topic: '愛',
    en_topic: 'Love',
    cn_text: '小子們哪！我們相愛，不要只在言語和舌頭上，總在行為和誠實上。',
    en_text: 'Dear children, let us not love with words or tongue but with actions and in truth.'
}, {
    cn: '約翰一書 5:13',
    en: '1 John 5:13 ',
    cn_topic: '救恩的把握',
    en_topic: 'Assurance of Salvation',
    cn_text: '我將這話寫給你們信奉神兒子之名的人，要叫你們知道自己有永生。',
    en_text: 'I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life.'
}, {
    cn: '約翰一書 5:14',
    en: '1 John 5:14 ',
    cn_topic: '',
    en_topic: '',
    cn_text: '我們若照他的旨意求甚麼，他就聽我們，這是我們向他所存坦然無懼的心。',
    en_text: 'This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.'
}, {
    cn: '啟示錄 3:20',
    en: 'Revelation 3:20 ',
    cn_topic: '接受耶穌',
    en_topic: 'Accepting Jesus',
    cn_text: '看哪！我站在門外叩門，若有聽見我聲音就開門的，我要進到他那裏去，我與他，他與我一同坐席。',
    en_text: 'Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with him, and he with me.'
}];