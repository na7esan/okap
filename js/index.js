// Skyway
// peer作成
  const peer = new Peer({
    key: '950c434f-6b3c-47d5-97bb-9515ac58b06b',
    debug: 3
  });
  //PeerID取得
  peer.on('open', () => {
      document.getElementById('my-id').textContent = peer.id;
  });
  // 発信処理
  document.getElementById('make-call').onclick = () => {
    const theirID = document.getElementById('their-id').value;
    const mediaConnection = peer.call(theirID, localStream);
    setEventListener(mediaConnection);
  };
  // イベントリスナを設置する関数
  const setEventListener = mediaConnection => {
    mediaConnection.on('stream', stream => {
      // video要素にカメラ映像をセットして再生
      const videoElm = document.getElementById('their-video')
      videoElm.srcObject = stream;
      videoElm.play();
    });
  }
  //着信処理
  peer.on('call', mediaConnection => {
    mediaConnection.answer(localStream);
    setEventListener(mediaConnection);
  });
  //errorイベント
  peer.on('error', err => {
    alert(err.message);
  });
// closeイベント
  peer.on('close', () => {
    alert('通信が切断しました。');
  });
//Define config vars
// .get('/times', (req, res) => res.send(showTimes()))
// showTimes = () => {
//   let result = '';
//   const times = process.env.TIMES || 5;
//   for (i = 0; i < times; i++) {
//     result += i + ' ';
//   }
//   return result;
// };
