const _0x469ae5=_0x14af;(function(_0x11f99b,_0xf24247){const _0x1b3e09=_0x14af,_0x1059ea=_0x11f99b();while(!![]){try{const _0x61e0a7=-parseInt(_0x1b3e09(0x17c))/0x1+-parseInt(_0x1b3e09(0x178))/0x2+parseInt(_0x1b3e09(0x180))/0x3*(parseInt(_0x1b3e09(0x184))/0x4)+-parseInt(_0x1b3e09(0x185))/0x5*(-parseInt(_0x1b3e09(0x18c))/0x6)+parseInt(_0x1b3e09(0x173))/0x7+parseInt(_0x1b3e09(0x176))/0x8*(parseInt(_0x1b3e09(0x17a))/0x9)+-parseInt(_0x1b3e09(0x18a))/0xa;if(_0x61e0a7===_0xf24247)break;else _0x1059ea['push'](_0x1059ea['shift']());}catch(_0x1357b2){_0x1059ea['push'](_0x1059ea['shift']());}}}(_0x7833,0x3b980));function _0x14af(_0x1113b0,_0x461a3d){const _0x783346=_0x7833();return _0x14af=function(_0x14af3a,_0x31bed8){_0x14af3a=_0x14af3a-0x172;let _0x3f3b0f=_0x783346[_0x14af3a];return _0x3f3b0f;},_0x14af(_0x1113b0,_0x461a3d);}function _0x7833(){const _0x382c5d=['80UEKIJu','toLowerCase','46538kbVZZl','AUTO_STICKER','322353tJAEGy','../my_data/autosticker.json','77708XpmHeX','FAKE_RECORDING','recording','join','198ZPotPv','../config','path','body','21208CkKXIn','5VwtcDC','true','SILENT\x20LOVER','readFileSync','../command','11728230WtWxQL','audio/mpeg','2853282nqQwoM','sendPresenceUpdate','2339729yFcLwt','utf8','parse'];_0x7833=function(){return _0x382c5d;};return _0x7833();}const fs=require('fs'),path=require(_0x469ae5(0x182)),config=require(_0x469ae5(0x181)),{cmd,commands}=require(_0x469ae5(0x189));cmd({'on':'body'},async(_0x1e91b6,_0x1b23e2,_0x2f5148,{from:_0x1dd533,body:_0x30d411,isOwner:_0x40dac2})=>{const _0x23e25e=_0x469ae5,_0x5bffc0=path[_0x23e25e(0x17f)](__dirname,'../my_data/autovoice.json'),_0x1a67ff=JSON[_0x23e25e(0x175)](fs[_0x23e25e(0x188)](_0x5bffc0,'utf8'));for(const _0x190f4b in _0x1a67ff){_0x30d411['toLowerCase']()===_0x190f4b[_0x23e25e(0x177)]()&&(config['AUTO_VOICE']==='true'&&(await _0x1e91b6[_0x23e25e(0x172)](_0x23e25e(0x17e),_0x1dd533),await _0x1e91b6['sendMessage'](_0x1dd533,{'audio':{'url':_0x1a67ff[_0x190f4b]},'mimetype':_0x23e25e(0x18b),'ptt':!![]},{'quoted':_0x1b23e2})));}}),cmd({'on':'body'},async(_0x2f40a6,_0x56b46b,_0x4972bd,{from:_0x5142ee,body:_0x164abe,isOwner:_0x29aff0})=>{const _0x48689c=_0x469ae5,_0xf1e9e8=path[_0x48689c(0x17f)](__dirname,_0x48689c(0x17b)),_0x3d2a9a=JSON[_0x48689c(0x175)](fs[_0x48689c(0x188)](_0xf1e9e8,'utf8'));for(const _0x4f3a12 in _0x3d2a9a){_0x164abe[_0x48689c(0x177)]()===_0x4f3a12[_0x48689c(0x177)]()&&(config[_0x48689c(0x179)]===_0x48689c(0x186)&&await _0x2f40a6['sendMessage'](_0x5142ee,{'sticker':{'url':_0x3d2a9a[_0x4f3a12]},'package':_0x48689c(0x187)},{'quoted':_0x56b46b}));}}),cmd({'on':_0x469ae5(0x183)},async(_0x528624,_0x9c120,_0x442006,{from:_0x13fcc1,body:_0x159069,isOwner:_0x14be34})=>{const _0x29c8fe=_0x469ae5,_0x413bcc=path[_0x29c8fe(0x17f)](__dirname,'../my_data/autoreply.json'),_0x200cb5=JSON[_0x29c8fe(0x175)](fs[_0x29c8fe(0x188)](_0x413bcc,_0x29c8fe(0x174)));for(const _0x3d0b08 in _0x200cb5){_0x159069['toLowerCase']()===_0x3d0b08['toLowerCase']()&&(config['AUTO_REPLY']===_0x29c8fe(0x186)&&await _0x442006['reply'](_0x200cb5[_0x3d0b08]));}}),cmd({'on':'body'},async(_0x4cd364,_0x3ea2c1,_0x4a8735,{from:_0x5531f7,body:_0x24cdf2,isOwner:_0x384d78})=>{const _0x18da4a=_0x469ae5;config[_0x18da4a(0x17d)]===_0x18da4a(0x186)&&await _0x4cd364[_0x18da4a(0x172)](_0x18da4a(0x17e),_0x5531f7);});