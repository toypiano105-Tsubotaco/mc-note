const standard = ({
  id,
  title,
  year,
  composer,
  lyricist,
  original,
  representative,
  meaning,
  episode,
  trivia,
  mcPoint,
  mcPatterns,
}) => ({
  id,
  songId: `song-${String(id).padStart(3, "0")}`,
  title,
  detailsReady: true,
  originalSong: false,
  year,
  composer,
  lyricist,
  original,
  representative,
  meaning,
  episode,
  trivia,
  mcPoint,
  mcPatterns,
  tohkoMemo: "",
});

const originalSong = ({
  id,
  title,
  productionYear,
  theme,
  scenery,
  core,
  motifs,
  mcPoint,
  mcPatterns,
}) => ({
  id,
  songId: `song-${String(id).padStart(3, "0")}`,
  title,
  detailsReady: true,
  originalSong: true,
  productionYear,
  lyricist: "TOHKO",
  composer: "TOHKO",
  theme,
  scenery,
  core,
  motifs,
  mcPoint,
  mcPatterns,
  tohkoMemo: "",
});

export const songs = [

  /* ==================================================
     01 A Dream Is A Wish Your Heart Makes
  ================================================== */

  standard({
    id: 1,
    title: "A Dream Is A Wish Your Heart Makes",
    year: "1950年",
    composer:
      "Mack David（マック・デイヴィッド）、Al Hoffman（アル・ホフマン）、Jerry Livingston（ジェリー・リヴィングストン）",
    lyricist:
      "Mack David（マック・デイヴィッド）、Al Hoffman（アル・ホフマン）、Jerry Livingston（ジェリー・リヴィングストン）",
    original:
      "Disney映画『Cinderella（シンデレラ）』でIlene Woods（アイリーン・ウッズ）が歌唱。",
    representative:
      "Ilene Woods（アイリーン・ウッズ）による映画版。",
    meaning:
      "つらい時でも心の中の夢を信じ続ければ、いつか願いはかなうという希望を歌った曲。",
    episode:
      "1950年公開のDisney映画『シンデレラ』を代表する一曲です。",
    trivia:
      "映画全体を通して描かれる『夢をあきらめない』というテーマを象徴する歌。",
    mcPoint:
      "『シンデレラ』、夢を信じる気持ち、希望。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次はDisney映画『シンデレラ』から『A Dream Is A Wish Your Heart Makes』です。夢を信じ続けていれば、いつか願いはかなう。そんな優しいメッセージの曲です。",
      },
      {
        type: "しっとり",
        text:
          "つらい時にも、心の中の夢だけは手放さないで。そんな静かな希望を歌った曲です。『A Dream Is A Wish Your Heart Makes』。",
      },
      {
        type: "トリビア入り",
        text:
          "1950年のDisney映画『シンデレラ』を代表する一曲です。物語を通して描かれる、夢をあきらめない気持ちがこの歌にも込められています。",
      },
      {
        type: "短め",
        text:
          "夢を信じ続ける気持ちを歌った、『シンデレラ』の名曲です。",
      },
      {
        type: "少しユーモア",
        text:
          "夢を見るだけなら、いくつ見ても大丈夫ですよね（笑）。『A Dream Is A Wish Your Heart Makes』です。",
      },
    ],
  }),

  /* ==================================================
     02 Song For You
  ================================================== */

  originalSong({
    id: 2,
    title: "Song For You",
    productionYear: "2023年",
    theme:
      "大切な人への祈り、感謝、愛情。出会えたことや一緒に過ごした時間への感謝。",
    scenery:
      "大切な人を思い浮かべながら、そっと語りかけるように歌を届ける温かな情景。",
    core:
      "あなたに出会えたことへの感謝を、言葉だけではなく歌にして届けたいという想い。",
    motifs:
      "歌、祈り、思い出、感謝、包み込むような愛。",
    mcPoint:
      "大切な人への感謝、“あなたのために歌う”というシンプルな想い。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は、2023年に作った私のオリジナル曲『Song For You』です。大切な人に、ありがとうって言葉だけでは伝えきれない時がありますよね。そんな気持ちを歌にしました。",
      },
      {
        type: "しっとり",
        text:
          "大切な人と過ごした時間や思い出に、そっとありがとうを伝えたい。そんな祈るような気持ちで作った曲です。『Song For You』。",
      },
      {
        type: "トリビア入り",
        text:
          "タイトルの通り、“あなたのために歌う”というとてもシンプルな気持ちから生まれたオリジナル曲です。",
      },
      {
        type: "短め",
        text:
          "大切な人への感謝を込めた、私のオリジナル曲『Song For You』です。",
      },
      {
        type: "少しユーモア",
        text:
          "ありがとうって何回言っても足りない時は、もう歌にしちゃおうと（笑）。『Song For You』です。",
      },
    ],
  }),

  /* ==================================================
     03 All Of Me
  ================================================== */

  standard({
    id: 3,
    title: "All Of Me",
    year: "1931年",
    composer:
      "Gerald Marks（ジェラルド・マークス）",
    lyricist:
      "Seymour Simons（シーモア・シモンズ）",
    original:
      "1931年に発表され、その後ジャズ・スタンダードとして広く演奏されるようになった曲。",
    representative:
      "Billie Holiday（ビリー・ホリデイ）、Frank Sinatra（フランク・シナトラ）など。",
    meaning:
      "別れた相手への未練を、切なさと少しのユーモアを交えて歌ったラブソング。",
    episode:
      "1930年代から現在まで、多くのジャズ歌手や演奏家に歌い継がれています。",
    trivia:
      "軽快に演奏されることも多いですが、歌詞はかなり切ない失恋の内容。",
    mcPoint:
      "明るいサウンドと切ない歌詞とのギャップ。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次はジャズのスタンダードから『All Of Me』です。明るく楽しい曲に聴こえるんですが、実は歌詞はちょっと切ない失恋の歌なんです。",
      },
      {
        type: "しっとり",
        text:
          "離れてしまった大切な人への想いを歌った、少し切ないスタンダードです。『All Of Me』。",
      },
      {
        type: "トリビア入り",
        text:
          "『All Of Me』は1931年に生まれました。Billie Holiday（ビリー・ホリデイ）やFrank Sinatra（フランク・シナトラ）など、本当にたくさんの歌手が歌ってきた曲です。",
      },
      {
        type: "短め",
        text:
          "ジャズのスタンダードから『All Of Me』。お聴きください。",
      },
      {
        type: "少しユーモア",
        text:
          "タイトルは“私の全部を持っていって”。でも本当に全部持っていかれたらちょっと困りますよね（笑）。『All Of Me』です。",
      },
    ],
  }),

  /* ==================================================
     04 But Not For Me
  ================================================== */

  standard({
    id: 4,
    title: "But Not For Me",
    year: "1930年",
    composer:
      "George Gershwin（ジョージ・ガーシュウィン）",
    lyricist:
      "Ira Gershwin（アイラ・ガーシュウィン）",
    original:
      "Broadwayミュージカル『Girl Crazy（ガール・クレイジー）』のために書かれた曲。",
    representative:
      "Ella Fitzgerald（エラ・フィッツジェラルド）、Chet Baker（チェット・ベイカー）など。",
    meaning:
      "幸せな恋の歌はたくさんあるけれど、そんな恋は自分には縁がない、と強がりながら失恋を嘆く歌。",
    episode:
      "George Gershwin（ジョージ・ガーシュウィン）とIra Gershwin（アイラ・ガーシュウィン）の兄弟によるスタンダード。",
    trivia:
      "明るく歌われることもありますが、歌詞の主人公はかなり恋に傷ついています。",
    mcPoint:
      "“恋なんて私には縁がない”という強がりと切なさ。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次はGershwin兄弟の『But Not For Me』です。素敵な恋の歌はいっぱいあるけれど、“そんな幸せは私には縁がないわ”って、ちょっと強がっている失恋の歌です。",
      },
      {
        type: "しっとり",
        text:
          "恋を信じたいのに、自分にはそんな幸せはやってこない。そんな少し強がった切ない曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "1930年のBroadwayミュージカル『Girl Crazy』のためにGeorge Gershwin（ジョージ・ガーシュウィン）とIra Gershwin（アイラ・ガーシュウィン）が書いた曲です。",
      },
      {
        type: "短め",
        text:
          "“そんな素敵な恋は私には縁がない”。『But Not For Me』です。",
      },
      {
        type: "少しユーモア",
        text:
          "素敵な恋？ 私には関係ないわ、というタイトルなんです。でもそう言ってる人ほど、まだ好きだったりしますよね（笑）。",
      },
    ],
  }),

  /* ==================================================
     05 C Jam Blues
  ================================================== */

  standard({
    id: 5,
    title: "C Jam Blues",
    year: "1940年代初頭",
    composer:
      "Duke Ellington（デューク・エリントン）",
    lyricist:
      "インストゥルメンタル曲。後に『Duke’s Place』として歌詞付き版も作られました。",
    original:
      "Duke Ellington（デューク・エリントン）のオーケストラによる演奏で知られるブルース。",
    representative:
      "Duke Ellington Orchestra（デューク・エリントン・オーケストラ）。",
    meaning:
      "シンプルなテーマから、演奏者が自由に即興を広げていくジャズらしいブルース。",
    episode:
      "ジャム・セッションで演奏しやすく、即興演奏の楽しさがよく分かる一曲。",
    trivia:
      "テーマのメロディーはほぼGとCの2音だけでできています。",
    mcPoint:
      "少ない音から音楽が広がっていく、ジャズの面白さ。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次はDuke Ellington（デューク・エリントン）の『C Jam Blues』です。とってもシンプルなテーマなんですが、そこからいくらでも遊べるのがジャズの面白いところです。",
      },
      {
        type: "しっとり",
        text:
          "ほんの少しの音から、演奏する人によっていろんな景色が生まれる。ジャズの面白さが詰まった曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "この曲のテーマ、実はほぼ2つの音だけなんです。それでもこんなに音楽が広がります。『C Jam Blues』。",
      },
      {
        type: "短め",
        text:
          "Duke Ellington（デューク・エリントン）の『C Jam Blues』です。",
      },
      {
        type: "少しユーモア",
        text:
          "テーマはほぼ2音です。2音しかない、じゃなくて、2音もあればジャズはできる（笑）。『C Jam Blues』です。",
      },
    ],
  }),

  /* ==================================================
     06 Don't Know Why
  ================================================== */

  standard({
    id: 6,
    title: "Don’t Know Why",
    year: "1999年／Norah Jones版は2002年",
    composer:
      "Jesse Harris（ジェシー・ハリス）",
    lyricist:
      "Jesse Harris（ジェシー・ハリス）",
    original:
      "Jesse Harris（ジェシー・ハリス）が先に発表した曲。",
    representative:
      "Norah Jones（ノラ・ジョーンズ）。アルバム『Come Away with Me（カム・アウェイ・ウィズ・ミー）』収録。",
    meaning:
      "どうしてあの時あなたのところへ行かなかったのだろう、という後悔と忘れられない想い。",
    episode:
      "Norah Jones（ノラ・ジョーンズ）の歌唱によって世界的に知られるようになりました。",
    trivia:
      "Norah Jones（ノラ・ジョーンズ）の自作曲ではなく、Jesse Harris（ジェシー・ハリス）の作品。",
    mcPoint:
      "Norah Jonesの代表曲、静かな後悔、夜の空気。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次はNorah Jones（ノラ・ジョーンズ）で有名な『Don’t Know Why』です。Norahの曲というイメージが強いんですが、実はJesse Harris（ジェシー・ハリス）が書いた曲なんです。",
      },
      {
        type: "しっとり",
        text:
          "どうしてあの時、会いに行かなかったんだろう。時間が過ぎても消えない想いと静かな後悔を歌った曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "Norah Jones（ノラ・ジョーンズ）のオリジナル曲ではなく、Jesse Harris（ジェシー・ハリス）が先に発表した曲です。",
      },
      {
        type: "短め",
        text:
          "Norah Jones（ノラ・ジョーンズ）でおなじみの『Don’t Know Why』です。",
      },
      {
        type: "少しユーモア",
        text:
          "『Don’t Know Why』、“どうしてなのか自分でも分からない”。恋をしてると、そういうことありますよね（笑）。",
      },
    ],
  }),

  /* ==================================================
     07 Fly Me To The Moon
  ================================================== */

  standard({
    id: 7,
    title: "Fly Me To The Moon",
    year: "1954年",
    composer:
      "Bart Howard（バート・ハワード）",
    lyricist:
      "Bart Howard（バート・ハワード）",
    original:
      "当初のタイトルは『In Other Words』。Kaye Ballard（ケイ・バラード）が初期に録音。",
    representative:
      "Frank Sinatra（フランク・シナトラ）の1960年代の録音が特に有名。",
    meaning:
      "月や星を旅する壮大な表現を使いながら、結局は“あなたを愛している”と伝えるラブソング。",
    episode:
      "宇宙時代とともに『Fly Me To The Moon』という題名が定着しました。",
    trivia:
      "Apollo計画との結びつきでも知られ、宇宙のイメージが強いスタンダード。",
    mcPoint:
      "月の歌に見えて、実はとてもストレートなラブソング。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は『Fly Me To The Moon』です。月まで連れて行って、星の間で遊ばせて、なんて壮大なんですが、結局言いたいのは“あなたが好き”なんですよね。",
      },
      {
        type: "しっとり",
        text:
          "月や星の美しい景色を借りながら、大切な人への想いを歌った『Fly Me To The Moon』です。",
      },
      {
        type: "トリビア入り",
        text:
          "この曲、最初のタイトルは『In Other Words』でした。後に歌詞の印象的な言葉から『Fly Me To The Moon』と呼ばれるようになったんです。",
      },
      {
        type: "短め",
        text:
          "ジャズの定番から『Fly Me To The Moon』です。",
      },
      {
        type: "少しユーモア",
        text:
          "月まで連れて行って、という曲ですが、今日はここから動かずにお届けします（笑）。『Fly Me To The Moon』。",
      },
    ],
  }),

  /* ==================================================
     08 I Feel The Earth Move
  ================================================== */

  standard({
    id: 8,
    title: "I Feel The Earth Move",
    year: "1971年",
    composer:
      "Carole King（キャロル・キング）",
    lyricist:
      "Carole King（キャロル・キング）",
    original:
      "Carole King（キャロル・キング）のアルバム『Tapestry（つづれおり）』収録。",
    representative:
      "Carole King（キャロル・キング）。",
    meaning:
      "恋の高揚感を、地面が揺れ、空が落ちてくるような大きな感覚で表現した曲。",
    episode:
      "名盤『Tapestry』を代表するエネルギッシュな一曲。",
    trivia:
      "『It’s Too Late』とのカップリングでも大きな成功を収めました。",
    mcPoint:
      "恋をすると世界まで揺れるような、高揚感。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次はCarole King（キャロル・キング）の『I Feel The Earth Move』です。好きな人を前にすると、地面まで揺れてるみたい。恋のパワーってすごいですね。",
      },
      {
        type: "しっとり",
        text:
          "心が大きく動いた時、世界まで違って見えることがあります。そんな恋の高揚感を歌った曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "1971年の名盤『Tapestry』に収録されたCarole King（キャロル・キング）の代表曲のひとつです。",
      },
      {
        type: "短め",
        text:
          "Carole King（キャロル・キング）の『I Feel The Earth Move』です。",
      },
      {
        type: "少しユーモア",
        text:
          "地面が揺れるほどの恋です。でも本当に揺れたら、まず避難してくださいね（笑）。",
      },
    ],
  }),

  /* ==================================================
     09 I Wish You Love
  ================================================== */

  standard({
    id: 9,
    title: "I Wish You Love",
    year: "1940年代／英語詞は後年",
    composer:
      "Charles Trenet（シャルル・トレネ）、Léo Chauliac（レオ・ショーリアック）",
    lyricist:
      "フランス語詞 Charles Trenet（シャルル・トレネ）／英語詞 Albert Beach（アルバート・ビーチ）",
    original:
      "フランス歌曲『Que reste-t-il de nos amours ?』をもとにした英語版。",
    representative:
      "Keely Smith（キーリー・スミス）、Nat King Cole（ナット・キング・コール）など。",
    meaning:
      "別れる相手に対して、恨みではなく幸せや愛を願って送り出す大人の別れの歌。",
    episode:
      "フランス生まれのメロディーが英語詞を得て、ジャズ・スタンダードとして広まりました。",
    trivia:
      "失恋の歌なのに、相手への祝福で終わるところが大きな魅力。",
    mcPoint:
      "別れた相手の幸せを願う、やさしく大人っぽい失恋。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は『I Wish You Love』です。別れることになっても、“あなたがこれから幸せでありますように”って相手を送り出す、とても大人なラブソングです。",
      },
      {
        type: "しっとり",
        text:
          "一緒にはいられなくても、あなたの幸せを願っている。そんな優しい別れを歌った『I Wish You Love』です。",
      },
      {
        type: "トリビア入り",
        text:
          "もともとはフランスの曲で、後から英語詞が付けられました。ジャズでもよく歌われる美しいスタンダードです。",
      },
      {
        type: "短め",
        text:
          "大切な人の幸せを願う別れの歌、『I Wish You Love』です。",
      },
      {
        type: "少しユーモア",
        text:
          "別れた相手に“幸せになってね”と言える。かなり大人です（笑）。『I Wish You Love』。",
      },
    ],
  }),

  /* ==================================================
     10 Just The Two Of Us
  ================================================== */

  standard({
    id: 10,
    title: "Just The Two Of Us",
    year: "1980〜1981年",
    composer:
      "Bill Withers（ビル・ウィザース）、Ralph MacDonald（ラルフ・マクドナルド）、William Salter（ウィリアム・ソルター）",
    lyricist:
      "Bill Withers（ビル・ウィザース）、Ralph MacDonald（ラルフ・マクドナルド）、William Salter（ウィリアム・ソルター）",
    original:
      "Grover Washington Jr.（グローヴァー・ワシントン・ジュニア）のアルバム『Winelight』に収録。",
    representative:
      "Grover Washington Jr.（グローヴァー・ワシントン・ジュニア） featuring Bill Withers（ビル・ウィザース）。",
    meaning:
      "二人で力を合わせれば、関係を育てていけるという前向きなラブソング。",
    episode:
      "ジャズ、ソウル、R&Bが心地よく溶け合ったクロスオーバーの名曲。",
    trivia:
      "印象的なコード進行は、後のポップスやR&Bでもよく連想されるサウンドになりました。",
    mcPoint:
      "二人ならできる、心地よいグルーヴ、都会的なサウンド。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は『Just The Two Of Us』です。“二人ならきっとやっていける”。そんな前向きな気持ちを、気持ちいいグルーヴに乗せた曲です。",
      },
      {
        type: "しっとり",
        text:
          "大切な人と二人で、少しずつ関係を育てていく。そんな穏やかな希望を歌った曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "Grover Washington Jr.（グローヴァー・ワシントン・ジュニア）のサックスとBill Withers（ビル・ウィザース）の歌で有名な一曲です。",
      },
      {
        type: "短め",
        text:
          "心地よいR&Bナンバー、『Just The Two Of Us』です。",
      },
      {
        type: "少しユーモア",
        text:
          "“二人ならできる”。三人になったらどうなるかは、この曲には書いてありません（笑）。",
      },
    ],
  }),

  /* ==================================================
     11 L-O-V-E
  ================================================== */

  standard({
    id: 11,
    title: "L-O-V-E",
    year: "1960年代",
    composer:
      "Bert Kaempfert（ベルト・ケンプフェルト）",
    lyricist:
      "Milt Gabler（ミルト・ゲイブラー）",
    original:
      "Bert Kaempfert（ベルト・ケンプフェルト）のメロディーに英語詞が付けられた曲。",
    representative:
      "Nat King Cole（ナット・キング・コール）の録音が特に有名。",
    meaning:
      "LOVEの4文字を一文字ずつ言葉にしながら、恋の楽しさと大切さを歌う曲。",
    episode:
      "Nat King Cole（ナット・キング・コール）の晩年を代表する明るいナンバー。",
    trivia:
      "Nat King Cole（ナット・キング・コール）は複数の言語でもこの曲を録音しています。",
    mcPoint:
      "LOVEの文字遊び、明るくおしゃれなラブソング。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は『L-O-V-E』です。LOVEの4文字を一文字ずつ意味にしていく、とてもおしゃれでかわいいラブソングです。",
      },
      {
        type: "しっとり",
        text:
          "軽やかな曲ですが、その中には“大切な心を傷つけないで”という素直な気持ちも込められています。",
      },
      {
        type: "トリビア入り",
        text:
          "Nat King Cole（ナット・キング・コール）は、この曲を英語だけでなくいろいろな言語で録音しています。",
      },
      {
        type: "短め",
        text:
          "Nat King Cole（ナット・キング・コール）でおなじみの『L-O-V-E』です。",
      },
      {
        type: "少しユーモア",
        text:
          "LOVEは4文字。今日はスペルを間違えないように歌いたいと思います（笑）。",
      },
    ],
  }),

  /* ==================================================
     12 Like A Star
  ================================================== */

  standard({
    id: 12,
    title: "Like A Star",
    year: "2005〜2006年",
    composer:
      "Corinne Bailey Rae（コリーヌ・ベイリー・レイ）",
    lyricist:
      "Corinne Bailey Rae（コリーヌ・ベイリー・レイ）",
    original:
      "Corinne Bailey Rae（コリーヌ・ベイリー・レイ）の初期を代表する作品。",
    representative:
      "Corinne Bailey Rae（コリーヌ・ベイリー・レイ）。",
    meaning:
      "大切な人の存在を星や光に例え、自分を導いてくれる不思議な愛を歌った曲。",
    episode:
      "柔らかな歌声とソウル、ジャズの香りを持つCorinne Bailey Raeの代表曲。",
    trivia:
      "静かな曲調の中に、相手への強い想いが込められています。",
    mcPoint:
      "大切な人を星に例える、静かで温かなラブソング。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次はCorinne Bailey Rae（コリーヌ・ベイリー・レイ）の『Like A Star』です。大切な人を、ずっとそこにいてくれる星のように感じる。そんな優しい曲です。",
      },
      {
        type: "しっとり",
        text:
          "暗い夜にも、そこにあるだけで道を照らしてくれる星。大切な人への想いをそんな光に重ねた曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "Corinne Bailey Rae（コリーヌ・ベイリー・レイ）の初期を代表する一曲です。ソウルの中にジャズの香りも感じられる曲ですね。",
      },
      {
        type: "短め",
        text:
          "Corinne Bailey Rae（コリーヌ・ベイリー・レイ）の『Like A Star』です。",
      },
      {
        type: "少しユーモア",
        text:
          "大切な人を星みたいだと思えるって、なかなかロマンチックですよね。私はちゃんと地上から歌います（笑）。",
      },
    ],
  }),

  /* ==================================================
     13 Love Me Tender
  ================================================== */

  standard({
    id: 13,
    title: "Love Me Tender",
    year: "1956年",
    composer:
      "旋律の原型はGeorge R. Poulton（ジョージ・R・ポールトン）による『Aura Lea』",
    lyricist:
      "Ken Darby（ケン・ダービー）による新しい歌詞。Elvis Presley（エルヴィス・プレスリー）もクレジット。",
    original:
      "Elvis Presley（エルヴィス・プレスリー）の1956年の映画・録音で広く知られました。",
    representative:
      "Elvis Presley（エルヴィス・プレスリー）。",
    meaning:
      "大切な人に、いつまでもそばにいて愛してほしいと穏やかに願うラブソング。",
    episode:
      "メロディーは19世紀の曲『Aura Lea』をもとにしています。",
    trivia:
      "ロックンロールのスターElvis Presley（エルヴィス・プレスリー）が、非常に静かで優しい歌を歌っているのも魅力。",
    mcPoint:
      "Elvisの優しい一面、時代を越えたシンプルな愛。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次はElvis Presley（エルヴィス・プレスリー）の『Love Me Tender』です。とてもシンプルに、“優しく愛して、ずっとそばにいて”と歌う曲です。",
      },
      {
        type: "しっとり",
        text:
          "大切な人に、ただ静かにそばにいてほしい。そんなまっすぐな愛を歌った『Love Me Tender』です。",
      },
      {
        type: "トリビア入り",
        text:
          "この曲のメロディーは、19世紀の『Aura Lea』という曲がもとになっています。",
      },
      {
        type: "短め",
        text:
          "Elvis Presley（エルヴィス・プレスリー）の名曲『Love Me Tender』です。",
      },
      {
        type: "少しユーモア",
        text:
          "“優しく愛してね”というタイトルです。注文はとてもシンプルです（笑）。",
      },
    ],
  }),

  /* ==================================================
     14 Misty
  ================================================== */

  standard({
    id: 14,
    title: "Misty",
    year: "1954年",
    composer:
      "Erroll Garner（エロール・ガーナー）",
    lyricist:
      "Johnny Burke（ジョニー・バーク）",
    original:
      "Erroll Garner（エロール・ガーナー）がインストゥルメンタルとして作曲。後に歌詞が付けられました。",
    representative:
      "Erroll Garner（エロール・ガーナー）、Sarah Vaughan（サラ・ヴォーン）など。",
    meaning:
      "恋をすると頭がぼんやりして、何もかも分からなくなってしまうほど相手に夢中になる気持ち。",
    episode:
      "ピアニストErroll Garner（エロール・ガーナー）が生んだ、ジャズ・バラードの代表曲。",
    trivia:
      "最初は歌詞のないピアノ曲でした。",
    mcPoint:
      "恋をすると霧の中にいるようになる、という美しい比喩。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は『Misty』です。恋をすると、なんだか頭がぼーっとして周りが見えなくなる。そんな気持ちを“霧の中”に例えた曲です。",
      },
      {
        type: "しっとり",
        text:
          "大切な人のそばにいるだけで、まるで霧に包まれたように何も見えなくなる。そんな恋を歌った美しいバラードです。",
      },
      {
        type: "トリビア入り",
        text:
          "『Misty』は、もともとErroll Garner（エロール・ガーナー）が作ったインストゥルメンタル曲でした。後からJohnny Burke（ジョニー・バーク）が歌詞を付けています。",
      },
      {
        type: "短め",
        text:
          "ジャズ・バラードの名曲『Misty』です。",
      },
      {
        type: "少しユーモア",
        text:
          "恋をすると霧の中にいるようになるそうです。転ばないように気をつけないといけませんね（笑）。",
      },
    ],
  }),

  /* ==================================================
     15 Moon River
  ================================================== */

  standard({
    id: 15,
    title: "Moon River",
    year: "1961年",
    composer:
      "Henry Mancini（ヘンリー・マンシーニ）",
    lyricist:
      "Johnny Mercer（ジョニー・マーサー）",
    original:
      "映画『Breakfast at Tiffany’s（ティファニーで朝食を）』でAudrey Hepburn（オードリー・ヘプバーン）が歌唱。",
    representative:
      "Audrey Hepburn（オードリー・ヘプバーン）、Andy Williams（アンディ・ウィリアムス）など。",
    meaning:
      "川の流れを人生や旅に重ね、まだ知らない世界や夢への憧れを描いた曲。",
    episode:
      "映画の中でAudrey Hepburn（オードリー・ヘプバーン）が静かに歌う場面で知られています。",
    trivia:
      "アカデミー歌曲賞を受賞した映画音楽の名曲。",
    mcPoint:
      "『ティファニーで朝食を』、旅、夢への憧れ。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は映画『ティファニーで朝食を』から『Moon River』です。Audrey Hepburn（オードリー・ヘプバーン）が歌ったことでも有名な、とても美しい曲ですね。",
      },
      {
        type: "しっとり",
        text:
          "川の流れの向こうに、まだ知らない世界や夢を見ている。そんな静かな憧れが込められた曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "映画の中ではAudrey Hepburn（オードリー・ヘプバーン）自身がこの曲を歌っています。",
      },
      {
        type: "短め",
        text:
          "人生や夢を川の流れに重ねた『Moon River』です。",
      },
      {
        type: "少しユーモア",
        text:
          "タイトルは『Moon River』ですが、月に川が流れているわけではありません（笑）。夢や旅への憧れを描いた曲です。",
      },
    ],
  }),

  /* ==================================================
     16 Moonlit Night
  ================================================== */

  originalSong({
    id: 16,
    title: "Moonlit Night",
    productionYear: "2023年",
    theme:
      "理性では止められない恋。幸せなのに苦しい、離れたいのに離れられない矛盾した恋心。",
    scenery:
      "満月の夜、濡れた路地、雨、雷、涙。感情が揺れ動く夜の景色。",
    core:
      "恋には理屈も境界線もなく、離れたいと思ってもさらに相手へ引き寄せられてしまう。",
    motifs:
      "満月、狼、雨、雷、涙、境界線。",
    mcPoint:
      "満月の夜、理性では止められない恋、幸せと苦しさの矛盾。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は、2023年に作ったオリジナル曲『Moonlit Night』です。満月の夜って、なんとなくいつもと違う気分になったりしませんか？ 理屈ではどうにもできない恋に振り回される気持ちを歌っています。",
      },
      {
        type: "しっとり",
        text:
          "幸せなはずなのに、なぜか苦しい。離れたいと思っても心はもっと近づいてしまう。そんな矛盾した恋心を満月の夜に重ねた曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "この曲には満月、雨、雷、涙と、夜の景色がたくさん登場します。恋には理屈で線を引けない、そんな気持ちを描きました。",
      },
      {
        type: "短め",
        text:
          "満月の夜、理性では止められない恋心を歌った『Moonlit Night』です。",
      },
      {
        type: "少しユーモア",
        text:
          "満月の夜には男の人が狼になるなんて言いますけど、この曲ではどうやら逆みたいです（笑）。",
      },
    ],
  }),

  /* ==================================================
     17 My Baby Just Cares For Me
  ================================================== */

  standard({
    id: 17,
    title: "My Baby Just Cares For Me",
    year: "1930年",
    composer:
      "Walter Donaldson（ウォルター・ドナルドソン）",
    lyricist:
      "Gus Kahn（ガス・カーン）",
    original:
      "ミュージカル／映画『Whoopee!（ウーピー！）』のために書かれた曲。",
    representative:
      "Nina Simone（ニーナ・シモン）の1958年の録音が特に有名。",
    meaning:
      "豪華なものや有名人には興味がなく、ただ自分だけを愛してくれる相手を嬉しく思う歌。",
    episode:
      "Nina Simone（ニーナ・シモン）の録音は後年再び注目され、彼女の代表曲のひとつになりました。",
    trivia:
      "1930年の曲が、何十年も後に再び世界的にヒットした珍しい例。",
    mcPoint:
      "“何より私を選んでくれる”という、かわいく自信に満ちたラブソング。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は『My Baby Just Cares For Me』です。高価なものにも有名人にも興味なし。“私のことだけ好きなの”という、とてもかわいいラブソングです。",
      },
      {
        type: "しっとり",
        text:
          "何を持っているかではなく、ただその人自身を大切にする。そんな愛を歌った曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "1930年の曲ですが、Nina Simone（ニーナ・シモン）の録音が何十年も後に再び注目され、代表曲になりました。",
      },
      {
        type: "短め",
        text:
          "Nina Simone（ニーナ・シモン）でおなじみの『My Baby Just Cares For Me』です。",
      },
      {
        type: "少しユーモア",
        text:
          "宝石にも高級車にも興味なし、私だけでいいそうです。理想的ですね（笑）。",
      },
    ],
  }),

  /* ==================================================
     18 My One And Only Love
  ================================================== */

  standard({
    id: 18,
    title: "My One And Only Love",
    year: "1950年代",
    composer:
      "Guy Wood（ガイ・ウッド）",
    lyricist:
      "Robert Mellin（ロバート・メリン）",
    original:
      "1950年代に現在の歌詞で発表され、ジャズ・バラードとして定着。",
    representative:
      "Frank Sinatra（フランク・シナトラ）、John Coltrane（ジョン・コルトレーン） & Johnny Hartman（ジョニー・ハートマン）など。",
    meaning:
      "大切なただ一人の人といる時の幸福やときめきを、繊細に描いたラブソング。",
    episode:
      "数多くのジャズ・ヴォーカリストや演奏家に取り上げられてきたバラード。",
    trivia:
      "John Coltrane（ジョン・コルトレーン）とJohnny Hartman（ジョニー・ハートマン）の録音も名演として知られます。",
    mcPoint:
      "“たった一人の大切な人”への静かで深い愛。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は『My One And Only Love』です。タイトル通り、“私のたった一人の大切な人”。とてもロマンチックなジャズ・バラードです。",
      },
      {
        type: "しっとり",
        text:
          "大切な人がそばにいるだけで感じる温かさやときめき。そんな静かな愛を描いた曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "John Coltrane（ジョン・コルトレーン）とJohnny Hartman（ジョニー・ハートマン）の録音も、ジャズの名演として知られています。",
      },
      {
        type: "短め",
        text:
          "美しいジャズ・バラード、『My One And Only Love』です。",
      },
      {
        type: "少しユーモア",
        text:
          "“One And Only”ですからね。二人いたらタイトルが変わってしまいます（笑）。",
      },
    ],
  }),

  /* ==================================================
     19 Neon
  ================================================== */

  standard({
    id: 19,
    title: "Neon",
    year: "1999〜2001年",
    composer:
      "John Mayer（ジョン・メイヤー）、Clay Cook（クレイ・クック）",
    lyricist:
      "John Mayer（ジョン・メイヤー）、Clay Cook（クレイ・クック）",
    original:
      "John Mayer（ジョン・メイヤー）の初期作品。後にアルバム『Room for Squares』にも収録。",
    representative:
      "John Mayer（ジョン・メイヤー）。",
    meaning:
      "ネオンに照らされた夜の街と、自由でつかみどころのない女性への想いを描いた曲。",
    episode:
      "John Mayer（ジョン・メイヤー）の独特なギター奏法でも有名な一曲。",
    trivia:
      "ギタリストの間では、演奏の難しさでもよく知られています。",
    mcPoint:
      "ネオンの街、夜、追いかけてもつかまらない相手。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次はJohn Mayer（ジョン・メイヤー）の『Neon』です。夜の街のネオンと、つかみどころのない女性を重ねた、とても都会的な曲です。",
      },
      {
        type: "しっとり",
        text:
          "光っては消えるネオンのように、近づいたと思うとまた遠ざかる。そんな恋を描いた曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "John Mayer（ジョン・メイヤー）のギター曲としても有名で、独特な奏法はギタリスト泣かせとも言われます。",
      },
      {
        type: "短め",
        text:
          "John Mayer（ジョン・メイヤー）の『Neon』です。",
      },
      {
        type: "少しユーモア",
        text:
          "この曲、ギターで弾くとかなり大変だそうです。私は今日はピアノでよかった（笑）。",
      },
    ],
  }),

  /* ==================================================
     20 Oh! Darling
  ================================================== */

  standard({
    id: 20,
    title: "Oh! Darling",
    year: "1969年",
    composer:
      "John Lennon（ジョン・レノン）、Paul McCartney（ポール・マッカートニー）",
    lyricist:
      "John Lennon（ジョン・レノン）、Paul McCartney（ポール・マッカートニー）",
    original:
      "The Beatles（ザ・ビートルズ）のアルバム『Abbey Road（アビー・ロード）』収録。Paul McCartney（ポール・マッカートニー）がリードヴォーカル。",
    representative:
      "The Beatles（ザ・ビートルズ）。",
    meaning:
      "どうか自分を捨てないでほしいと、必死に相手へ訴えかける情熱的なラブソング。",
    episode:
      "Paul McCartney（ポール・マッカートニー）の強烈でソウルフルな歌唱が印象的。",
    trivia:
      "Paul McCartneyは、声に荒々しさを出すため何度も歌唱を試したことで知られています。",
    mcPoint:
      "Beatles、ソウルフルな歌声、“お願いだから離れないで”。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次はThe Beatles（ザ・ビートルズ）の『Oh! Darling』です。“お願いだから僕を捨てないで”と、かなり必死なラブソングです。",
      },
      {
        type: "しっとり",
        text:
          "大切な人を失うかもしれない怖さを、まっすぐに叫ぶように歌った曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "Paul McCartney（ポール・マッカートニー）の、とてもソウルフルで荒々しいヴォーカルが印象的な『Abbey Road』の一曲です。",
      },
      {
        type: "短め",
        text:
          "The Beatles（ザ・ビートルズ）の『Oh! Darling』です。",
      },
      {
        type: "少しユーモア",
        text:
          "“お願い、行かないで！”とかなり必死です。恋愛では余裕がなくなることもありますよね（笑）。",
      },
    ],
  }),

  /* ==================================================
     21 On The Sunny Side Of The Street
  ================================================== */

  standard({
    id: 21,
    title: "On The Sunny Side Of The Street",
    year: "1930年",
    composer:
      "Jimmy McHugh（ジミー・マクヒュー）",
    lyricist:
      "Dorothy Fields（ドロシー・フィールズ）",
    original:
      "1930年の舞台作品から広まり、のちにジャズ・スタンダードとなった曲。",
    representative:
      "Louis Armstrong（ルイ・アームストロング）、Ella Fitzgerald（エラ・フィッツジェラルド）など。",
    meaning:
      "心配事を置いて、人生の明るい側を歩いていこうという前向きな歌。",
    episode:
      "大恐慌の時代に生まれながら、明るく前向きなメッセージで愛されました。",
    trivia:
      "ジャズではスウィング感たっぷりに演奏されることの多い定番曲。",
    mcPoint:
      "人生の明るい側を歩こう、というシンプルで前向きなメッセージ。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は『On The Sunny Side Of The Street』です。心配事はちょっと置いて、今日は明るい側を歩いていこう。そんなハッピーな曲です。",
      },
      {
        type: "しっとり",
        text:
          "どんな時でも、少しだけ明るい方へ目を向けて歩いていく。そんな優しい励ましの歌です。",
      },
      {
        type: "トリビア入り",
        text:
          "1930年に生まれた曲で、Louis Armstrong（ルイ・アームストロング）をはじめ多くのジャズ・ミュージシャンに演奏されてきました。",
      },
      {
        type: "短め",
        text:
          "明るい方を歩いていこう。『On The Sunny Side Of The Street』です。",
      },
      {
        type: "少しユーモア",
        text:
          "明るい側を歩こう、という曲です。夏は日陰の方がいいかもしれませんけどね（笑）。",
      },
    ],
  }),

  /* ==================================================
     22 One Note Samba
  ================================================== */

  standard({
    id: 22,
    title: "One Note Samba",
    year: "1959〜1960年頃",
    composer:
      "Antônio Carlos Jobim（アントニオ・カルロス・ジョビン）",
    lyricist:
      "Newton Mendonça（ニュートン・メンドンサ）。英語詞 Jon Hendricks（ジョン・ヘンドリックス）",
    original:
      "ブラジルのボサノヴァ黎明期に生まれた代表曲。",
    representative:
      "João Gilberto（ジョアン・ジルベルト）、Antônio Carlos Jobim（アントニオ・カルロス・ジョビン）など。",
    meaning:
      "たった一つの音から始めながら、音楽も恋もシンプルなものの中に大切なものがあると遊び心たっぷりに描く曲。",
    episode:
      "冒頭で同じ音を繰り返すユニークなメロディーが大きな特徴。",
    trivia:
      "タイトル通り“ワン・ノート”から始まりますが、もちろん曲全体が一音だけというわけではありません。",
    mcPoint:
      "一音から始まる、ボサノヴァらしい知的な遊び。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は『One Note Samba』です。タイトル通り、同じ一つの音から始まる、とっても遊び心のあるボサノヴァです。",
      },
      {
        type: "しっとり",
        text:
          "複雑なものがたくさんあっても、本当に大切なことは意外とシンプルなのかもしれません。『One Note Samba』です。",
      },
      {
        type: "トリビア入り",
        text:
          "冒頭のメロディーは、本当に同じ音が続きます。そこからどんどん音楽が広がっていくのが面白い曲です。",
      },
      {
        type: "短め",
        text:
          "一つの音から始まるボサノヴァ、『One Note Samba』です。",
      },
      {
        type: "少しユーモア",
        text:
          "一音だけなら簡単そうですよね。でも油断すると、そのあとちゃんと難しくなります（笑）。",
      },
    ],
  }),

  /* ==================================================
     23 Over The Rainbow
  ================================================== */

  standard({
    id: 23,
    title: "Over The Rainbow",
    year: "1939年",
    composer:
      "Harold Arlen（ハロルド・アーレン）",
    lyricist:
      "E. Y. Harburg（E・Y・ハーバーグ）",
    original:
      "映画『The Wizard of Oz（オズの魔法使）』でJudy Garland（ジュディ・ガーランド）が歌唱。",
    representative:
      "Judy Garland（ジュディ・ガーランド）。",
    meaning:
      "虹の向こうに、今いる場所とは違う夢の世界があるはずだと願う歌。",
    episode:
      "映画史を代表する名曲のひとつとして長く愛されています。",
    trivia:
      "Judy Garland（ジュディ・ガーランド）が演じるDorothy（ドロシー）の夢や憧れを象徴する曲。",
    mcPoint:
      "虹の向こう、夢、今いる場所から飛び立ちたい気持ち。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は『オズの魔法使』から『Over The Rainbow』です。虹の向こうには、きっと素敵な世界がある。そんな夢を歌った曲です。",
      },
      {
        type: "しっとり",
        text:
          "今いる場所を越えて、いつか夢見た世界へ。そんな静かな憧れを歌った『Over The Rainbow』です。",
      },
      {
        type: "トリビア入り",
        text:
          "1939年の映画『オズの魔法使』でJudy Garland（ジュディ・ガーランド）が歌った、映画音楽を代表する一曲です。",
      },
      {
        type: "短め",
        text:
          "映画『オズの魔法使』から『Over The Rainbow』です。",
      },
      {
        type: "少しユーモア",
        text:
          "虹の向こうには何があるんでしょうね。私はまだ最後まで歩いて確かめたことはありません（笑）。",
      },
    ],
  }),

  /* ==================================================
     24 A Shower Of Stars
  ================================================== */

  originalSong({
    id: 24,
    title: "A Shower Of Stars",
    productionYear: "要確認",
    theme:
      "運命的な出会いと、時間や困難を越えて続いていく愛。",
    scenery:
      "真夜中の道、ネオン、星空、雨に濡れた街、嵐、そして夜明け。",
    core:
      "離れている時や困難な時があっても、二人の愛は変わらず続いていく。",
    motifs:
      "流れ星、運命、手をつなぐこと、雨、嵐、導く光。",
    mcPoint:
      "運命的な出会い、困難を一緒に越えていく二人、星が降る夜。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は私のオリジナル曲『A Shower Of Stars』です。偶然出会った二人が、雨の日も嵐の日も一緒に歩いていく。そんな物語を描いた曲です。",
      },
      {
        type: "しっとり",
        text:
          "“この出会いには何か意味があるのかもしれない”。そんな運命のような出会いと、その後も続いていく二人の時間を描きました。",
      },
      {
        type: "トリビア入り",
        text:
          "この曲には真夜中の道、ネオン、星空、雨、嵐といろいろな景色が登場します。その中を二人で歩いていくイメージで作った曲です。",
      },
      {
        type: "短め",
        text:
          "運命的な出会いと、そこから続いていく愛を描いた『A Shower Of Stars』です。",
      },
      {
        type: "少しユーモア",
        text:
          "タイトルは“星のシャワー”。かなりロマンチックです（笑）。でも曲の中では雨も嵐もやってきます。",
      },
    ],
  }),

  /* ==================================================
     25 Smile
  ================================================== */

  standard({
    id: 25,
    title: "Smile",
    year: "旋律1936年／歌詞1954年",
    composer:
      "Charlie Chaplin（チャーリー・チャップリン）",
    lyricist:
      "John Turner（ジョン・ターナー）、Geoffrey Parsons（ジェフリー・パーソンズ）",
    original:
      "Charlie Chaplin（チャーリー・チャップリン）の映画『Modern Times（モダン・タイムス）』の旋律に、後から歌詞が付けられました。",
    representative:
      "Nat King Cole（ナット・キング・コール）の1954年の録音など。",
    meaning:
      "心が痛む時でも、笑顔を忘れずにいれば明日はきっと良くなるという励ましの歌。",
    episode:
      "もともとは歌詞のない映画音楽でした。",
    trivia:
      "喜劇王Charlie Chaplin（チャーリー・チャップリン）のメロディーが、後に世界的な歌になりました。",
    mcPoint:
      "苦しい時こそ笑顔を、という優しい励まし。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は『Smile』です。つらい時でも、ちょっと笑ってみたら明日が変わるかもしれない。そんな優しい応援歌です。",
      },
      {
        type: "しっとり",
        text:
          "心が痛む時にも、ほんの少しだけ笑顔を忘れずに。そんな静かな励ましを歌った曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "もともとはCharlie Chaplin（チャーリー・チャップリン）の映画『モダン・タイムス』のインストゥルメンタルでした。後から歌詞が付けられています。",
      },
      {
        type: "短め",
        text:
          "笑顔を忘れずに。『Smile』です。",
      },
      {
        type: "少しユーモア",
        text:
          "曲名は『Smile』。ということで、できれば皆さん笑顔で聴いてください。強制ではありません（笑）。",
      },
    ],
  }),

  /* ==================================================
     26 Sweet Memories
  ================================================== */

  standard({
    id: 26,
    title: "Sweet Memories",
    year: "1983年",
    composer:
      "大村雅朗（おおむら まさあき）",
    lyricist:
      "松本隆（まつもと たかし）",
    original:
      "松田聖子（まつだ せいこ）の1983年の楽曲。",
    representative:
      "松田聖子（まつだ せいこ）。",
    meaning:
      "かつて愛した人との思い出を、甘く懐かしく振り返る大人っぽいラブソング。",
    episode:
      "CMをきっかけに広く知られ、松田聖子の代表曲のひとつになりました。",
    trivia:
      "日本のポップスですが、ジャズやボサノヴァにもアレンジしやすい洗練された曲。",
    mcPoint:
      "甘い思い出、過去の恋、大人っぽいノスタルジー。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は松田聖子さんの『Sweet Memories』です。昔の恋って、時間が経つとちょっとだけきれいに見えたりしますよね。",
      },
      {
        type: "しっとり",
        text:
          "もう戻れない時間だからこそ、甘く心に残っている。そんな思い出を歌った『Sweet Memories』です。",
      },
      {
        type: "トリビア入り",
        text:
          "1983年に発表され、CMをきっかけに大きく知られるようになった松田聖子さんの代表曲です。",
      },
      {
        type: "短め",
        text:
          "松田聖子さんの名曲『Sweet Memories』です。",
      },
      {
        type: "少しユーモア",
        text:
          "思い出は時間が経つと“Sweet”になることがあります。都合の悪いところは忘れますからね（笑）。",
      },
    ],
  }),

  /* ==================================================
     27 Talking To Myself
  ================================================== */

  standard({
    id: 27,
    title: "Talking To Myself",
    year: "2009年",
    composer:
      "Lisa Freeman（リサ・フリーマン）、Otto Francker（オットー・フランカー）、Volmer Sørensen（ヴォルマー・ソレンセン）",
    lyricist:
      "Lisa Freeman（リサ・フリーマン）、Otto Francker（オットー・フランカー）、Volmer Sørensen（ヴォルマー・ソレンセン）",
    original:
      "Sinne Eeg（シーネ・エイ）のアルバム『Remembering You』収録。",
    representative:
      "Sinne Eeg（シーネ・エイ）。",
    meaning:
      "恋に落ちてしまい、自分でもどうしていいか分からず、一人で自分に話しかけてしまうような気持ち。",
    episode:
      "デンマークのジャズ・ヴォーカリストSinne Eeg（シーネ・エイ）が歌う、チャーミングなラブソング。",
    trivia:
      "深刻な失恋ではなく、恋に夢中になって自分でも可笑しくなるような軽やかさが魅力。",
    mcPoint:
      "恋に夢中、自分に話しかけてしまう、ちょっとコミカル。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次はSinne Eeg（シーネ・エイ）の『Talking To Myself』です。恋をすると、一人であれこれ考えて、気づいたら自分に話しかけてたりしますよね。",
      },
      {
        type: "しっとり",
        text:
          "誰かを好きになりすぎると、頭の中がその人でいっぱいになってしまう。そんな恋の始まりを描いた曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "デンマークのジャズ・シンガーSinne Eeg（シーネ・エイ）の録音で聴いている曲です。2009年のアルバム『Remembering You』に収録されています。",
      },
      {
        type: "短め",
        text:
          "Sinne Eeg（シーネ・エイ）の『Talking To Myself』です。",
      },
      {
        type: "少しユーモア",
        text:
          "一人でしゃべっているからって心配しないでください。恋をしてるだけです（笑）。『Talking To Myself』。",
      },
    ],
  }),

  /* ==================================================
     28 The Days Of Wine And Roses
  ================================================== */

  standard({
    id: 28,
    title: "The Days Of Wine And Roses",
    year: "1962年",
    composer:
      "Henry Mancini（ヘンリー・マンシーニ）",
    lyricist:
      "Johnny Mercer（ジョニー・マーサー）",
    original:
      "映画『Days of Wine and Roses（酒とバラの日々）』のために書かれた曲。",
    representative:
      "Andy Williams（アンディ・ウィリアムス）など。",
    meaning:
      "幸せだった時間が過ぎ去っていくことを、ワインとバラという美しいイメージで描いた曲。",
    episode:
      "映画音楽として生まれ、その後ジャズ・スタンダードになりました。",
    trivia:
      "Henry Mancini（ヘンリー・マンシーニ）とJohnny Mercer（ジョニー・マーサー）のコンビによる名曲。",
    mcPoint:
      "美しい時間は永遠ではない、という少しほろ苦いノスタルジー。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は『The Days Of Wine And Roses』です。ワインとバラのように華やかだった幸せな時間を、少し切なく振り返る曲です。",
      },
      {
        type: "しっとり",
        text:
          "楽しかった時間ほど、過ぎ去ったあとに美しく見えることがあります。そんな思い出を描いた曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "『Moon River』と同じHenry Mancini（ヘンリー・マンシーニ）とJohnny Mercer（ジョニー・マーサー）のコンビによる映画音楽です。",
      },
      {
        type: "短め",
        text:
          "映画音楽から生まれたジャズ・スタンダード、『The Days Of Wine And Roses』です。",
      },
      {
        type: "少しユーモア",
        text:
          "ワインとバラの日々。かなり優雅なタイトルですが、曲はちょっとほろ苦いんです。",
      },
    ],
  }),

  /* ==================================================
     29 The Girl From Ipanema
  ================================================== */

  standard({
    id: 29,
    title: "The Girl From Ipanema",
    year: "1960年代初頭",
    composer:
      "Antônio Carlos Jobim（アントニオ・カルロス・ジョビン）",
    lyricist:
      "Vinícius de Moraes（ヴィニシウス・ヂ・モライス）。英語詞 Norman Gimbel（ノーマン・ギンベル）",
    original:
      "ブラジルで生まれ、Stan Getz（スタン・ゲッツ）、João Gilberto（ジョアン・ジルベルト）、Astrud Gilberto（アストラッド・ジルベルト）らの録音で世界的に有名になりました。",
    representative:
      "Astrud Gilberto（アストラッド・ジルベルト）とStan Getz（スタン・ゲッツ）らによる録音。",
    meaning:
      "イパネマの海辺を歩く美しい女性を眺めながら、届かない憧れを歌う曲。",
    episode:
      "Rio de Janeiro（リオ・デ・ジャネイロ）のIpanema（イパネマ）地区の情景から生まれた曲。",
    trivia:
      "ボサノヴァを世界へ広めた代表曲のひとつ。",
    mcPoint:
      "イパネマの海岸、美しい女性、届かない憧れ。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次はボサノヴァの定番『The Girl From Ipanema』です。イパネマの海辺を歩いていく、とても魅力的な女性を眺めている歌です。",
      },
      {
        type: "しっとり",
        text:
          "目の前を通り過ぎていく美しい人。でもその想いは届かない。そんな淡い憧れをボサノヴァに乗せた曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "BrazilのRio de JaneiroにあるIpanemaの海岸の情景から生まれた、ボサノヴァを代表する一曲です。",
      },
      {
        type: "短め",
        text:
          "ボサノヴァの名曲『The Girl From Ipanema』です。",
      },
      {
        type: "少しユーモア",
        text:
          "きれいな人が歩いてきて、ただ見送るだけ。声をかけないところが、この曲の上品なところかもしれません（笑）。",
      },
    ],
  }),

  /* ==================================================
     30 Thoughts Of You
  ================================================== */

  originalSong({
    id: 30,
    title: "Thoughts Of You",
    productionYear: "2023年",
    theme:
      "抗えない恋心。何をしていても相手のことばかり考えてしまう気持ち。",
    scenery:
      "相手を考え続ける日常、嫉妬、近づこうとしてもすり抜けていく感覚、相手の瞳の中に自分が見えない切なさ。",
    core:
      "強く惹かれているのに、その想いが相手に届いているとは思えない。",
    motifs:
      "絡め取られる、網、風のようにすり抜ける、瞳。",
    mcPoint:
      "誰かのことばかり考えてしまう感覚、嫉妬、離れようとするとさらに惹かれる恋心。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は、2023年に作った私のオリジナル曲『Thoughts Of You』です。何をしていても、なぜかその人のことばっかり考えちゃう。そんな少し苦しい恋を歌っています。",
      },
      {
        type: "しっとり",
        text:
          "離れようと思えば思うほど、かえってその人のことばかり考えてしまう。そんな抗えない想いを歌った曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "この曲では、恋に落ちることを“網に絡め取られていくような感覚”として描いています。",
      },
      {
        type: "短め",
        text:
          "何をしていてもその人のことばかり考えてしまう。オリジナル曲『Thoughts Of You』です。",
      },
      {
        type: "少しユーモア",
        text:
          "好きな人ができると、仕事しててもご飯食べてても勝手に頭の中に出てきますよね（笑）。『Thoughts Of You』です。",
      },
    ],
  }),

  /* ==================================================
     31 Time After Time
  ================================================== */

  standard({
    id: 31,
    title: "Time After Time",
    year: "1983年（シングル発売は1984年）",
    composer:
      "Cyndi Lauper（シンディ・ローパー）、Rob Hyman（ロブ・ハイマン）",
    lyricist:
      "Cyndi Lauper（シンディ・ローパー）、Rob Hyman（ロブ・ハイマン）",
    original:
      "Cyndi Lauper（シンディ・ローパー）の1983年のアルバム『She’s So Unusual』に収録。1984年にシングルとして発売。",
    representative:
      "Cyndi Lauper（シンディ・ローパー）。",
    meaning:
      "離れてしまったり迷ったりしても、いつでも相手を見つけ、そばにいると伝える、やさしく強い愛を歌った曲。",
    episode:
      "Cyndi Lauper（シンディ・ローパー）とRob Hyman（ロブ・ハイマン）の共作。TOHKOはこの80年代の名曲をジャズアレンジで歌います。",
    trivia:
      "原曲はポップスですが、メロディーの美しさを生かしてさまざまなスタイルでカバーされてきた曲です。",
    mcPoint:
      "シンディ・ローパーの名曲をジャズアレンジで。原曲とは少し違う大人っぽい表情を楽しんでもらう。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次はCyndi Lauper（シンディ・ローパー）の名曲『Time After Time』です。原曲はポップスですが、今日は少し大人っぽいジャズアレンジでお届けします。よく知っている曲の、ちょっと違った表情を楽しんでいただけたらと思います。",
      },
      {
        type: "しっとり",
        text:
          "離れていても、大切な人を想い続ける。そんなやさしく強い気持ちが伝わってくる曲です。Cyndi Lauper（シンディ・ローパー）の『Time After Time』を、今日はジャズの響きに乗せてお届けします。",
      },
      {
        type: "トリビア入り",
        text:
          "『Time After Time』は、Cyndi Lauper（シンディ・ローパー）とRob Hyman（ロブ・ハイマン）が一緒に作った曲です。1980年代を代表する名曲のひとつを、今日はジャズアレンジでお聴きください。",
      },
      {
        type: "短め",
        text:
          "Cyndi Lauper（シンディ・ローパー）の『Time After Time』。今日はちょっと大人っぽく、ジャズアレンジでお届けします。",
      },
      {
        type: "少しユーモア",
        text:
          "Cyndi Lauper（シンディ・ローパー）の『Time After Time』です。80年代の名曲ですが、今日はちょっとおしゃれをして、ジャズになって登場です（笑）。",
      },
    ],
  }),

  /* ==================================================
     32 Wave
  ================================================== */

  standard({
    id: 32,
    title: "Wave",
    year: "1967年",
    composer:
      "Antônio Carlos Jobim（アントニオ・カルロス・ジョビン）",
    lyricist:
      "Antônio Carlos Jobim（アントニオ・カルロス・ジョビン）",
    original:
      "1967年のアルバム『Wave』ではインストゥルメンタルとして発表。",
    representative:
      "Antônio Carlos Jobim（アントニオ・カルロス・ジョビン）、Frank Sinatra（フランク・シナトラ）など。",
    meaning:
      "波や海のイメージを使いながら、恋は理屈ではなく心で感じるものだと歌う曲。",
    episode:
      "Jobimの代表的なボサノヴァ作品のひとつ。",
    trivia:
      "もともとの録音はインストゥルメンタルで、後に歌詞付きでも広く歌われました。",
    mcPoint:
      "海、波、恋は頭ではなく心で感じるもの。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次はJobim（ジョビン）の『Wave』です。波のように寄せては返す恋の気持ちを、心地いいボサノヴァに乗せた曲です。",
      },
      {
        type: "しっとり",
        text:
          "恋は目で見るものでも、頭で考えるものでもなく、心で感じるもの。そんな言葉が似合う曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "1967年のJobim（ジョビン）のアルバムでは、もともとインストゥルメンタルとして発表された曲です。",
      },
      {
        type: "短め",
        text:
          "Antônio Carlos Jobim（アントニオ・カルロス・ジョビン）の『Wave』です。",
      },
      {
        type: "少しユーモア",
        text:
          "波は寄せては返しますが、演奏はちゃんと最後まで進みます（笑）。『Wave』です。",
      },
    ],
  }),

  /* ==================================================
     33 You Are The Reason
  ================================================== */

  standard({
    id: 33,
    title: "You Are The Reason",
    year: "2017年",
    composer:
      "Calum Scott（カラム・スコット）、Corey Sanders（コーリー・サンダース）、Jon Maguire（ジョン・マグワイア）",
    lyricist:
      "Calum Scott（カラム・スコット）、Corey Sanders（コーリー・サンダース）、Jon Maguire（ジョン・マグワイア）",
    original:
      "Calum Scott（カラム・スコット）が発表。",
    representative:
      "Calum Scott（カラム・スコット）。Leona Lewis（レオナ・ルイス）とのデュエット版もあります。",
    meaning:
      "壊れかけた関係を取り戻すためなら何でもしたいと願う、強い愛と後悔の歌。",
    episode:
      "Calum Scott（カラム・スコット）の代表的なバラード。",
    trivia:
      "後にLeona Lewis（レオナ・ルイス）とのデュエット版も発表されました。",
    mcPoint:
      "関係を取り戻したい、もう一度そばにいてほしいという願い。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次はCalum Scott（カラム・スコット）の『You Are The Reason』です。大切な人との関係を、どうしてももう一度取り戻したい。そんな強い想いを歌っています。",
      },
      {
        type: "しっとり",
        text:
          "失ってから気づく大切さがあります。もう一度あなたのそばへ戻りたい、そんな願いを歌った曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "Calum Scott（カラム・スコット）の代表的なバラードで、Leona Lewis（レオナ・ルイス）とのデュエット版もあります。",
      },
      {
        type: "短め",
        text:
          "Calum Scott（カラム・スコット）の『You Are The Reason』です。",
      },
      {
        type: "少しユーモア",
        text:
          "“あなたが理由です”って、良いことの理由ならうれしいですよね（笑）。",
      },
    ],
  }),

  /* ==================================================
     34 丸ノ内サディスティック
  ================================================== */

  standard({
    id: 34,
    title: "丸ノ内サディスティック",
    year: "1999年",
    composer:
      "椎名林檎（しいな りんご）",
    lyricist:
      "椎名林檎（しいな りんご）",
    original:
      "椎名林檎（しいな りんご）のアルバム『無罪モラトリアム』収録。編曲は亀田誠治（かめだ せいじ）。",
    representative:
      "椎名林檎（しいな りんご）。",
    meaning:
      "東京の地名や音楽用語などをちりばめながら、都会で生きる若者の欲望や倦怠感を独特な言葉で描いた曲。",
    episode:
      "椎名林檎の初期を代表する曲として長く演奏されています。",
    trivia:
      "ジャジーなコード感と独特の言葉遊びが大きな魅力。",
    mcPoint:
      "東京、音楽用語、都会的で少し退廃的な世界。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次は椎名林檎さんの『丸ノ内サディスティック』です。東京の地名や音楽の言葉が次々に出てくる、とても都会的な曲です。",
      },
      {
        type: "しっとり",
        text:
          "都会の華やかさと、どこか満たされない感じ。その両方を持った独特な世界の曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "1999年のアルバム『無罪モラトリアム』に収録された、椎名林檎さんの初期を代表する一曲です。",
      },
      {
        type: "短め",
        text:
          "椎名林檎さんの『丸ノ内サディスティック』です。",
      },
      {
        type: "少しユーモア",
        text:
          "タイトルからしてかなり強そうです（笑）。でもコードはとってもジャジーでおしゃれなんです。",
      },
    ],
  }),

  /* ==================================================
     35 You've Got A Friend
  ================================================== */

  standard({
    id: 35,
    title: "You've Got A Friend",
    year: "1971年",
    composer:
      "Carole King（キャロル・キング）",
    lyricist:
      "Carole King（キャロル・キング）",
    original:
      "Carole King（キャロル・キング）のアルバム『Tapestry』に収録。",
    representative:
      "Carole King（キャロル・キング）、James Taylor（ジェームス・テイラー）。",
    meaning:
      "つらい時には呼んでくれれば、いつでもあなたのところへ行くよ、と語りかける友情と支えの歌。",
    episode:
      "James Taylor（ジェームス・テイラー）の録音も大ヒットし、広く愛される曲になりました。",
    trivia:
      "恋愛だけではなく、友情や人と人との支え合いの歌として親しまれています。",
    mcPoint:
      "“いつでもそばにいるよ”という安心感。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "次はCarole King（キャロル・キング）の『You've Got A Friend』です。つらい時は呼んでね、いつでもそばにいるよ。そんな温かい曲です。",
      },
      {
        type: "しっとり",
        text:
          "何かを解決してあげられなくても、ただそばにいることが支えになることがあります。そんな友情を歌った曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "Carole King（キャロル・キング）が作り、James Taylor（ジェームス・テイラー）の録音も大ヒットした1971年の名曲です。",
      },
      {
        type: "短め",
        text:
          "“あなたには友達がいるよ”。『You've Got A Friend』です。",
      },
      {
        type: "少しユーモア",
        text:
          "“呼んでくれたらすぐ行くよ”という歌です。距離によっては少し時間をください（笑）。",
      },
    ],
  }),

  /* ==================================================
     36 (You Make Me Feel Like) A Natural Woman
  ================================================== */

  standard({
    id: 36,
    title: "(You Make Me Feel Like) A Natural Woman",
    year: "1967年",
    composer:
      "Carole King（キャロル・キング）",
    lyricist:
      "Gerry Goffin（ジェリー・ゴフィン）、Carole King（キャロル・キング）、Jerry Wexler（ジェリー・ウェクスラー）",
    original:
      "Aretha Franklin（アレサ・フランクリン）が1967年に発表。",
    representative:
      "Aretha Franklin（アレサ・フランクリン）。Carole King（キャロル・キング）も後に自身で録音。",
    meaning:
      "愛されることで、自分らしさや生きる喜びを取り戻していく力強いラブソング。",
    episode:
      "Aretha Franklin（アレサ・フランクリン）の圧倒的な歌唱によってソウルの名曲となりました。",
    trivia:
      "Carole King（キャロル・キング）は後に自身のアルバム『Tapestry』でもこの曲を録音しています。",
    mcPoint:
      "愛されることで自分自身を取り戻す、Aretha Franklinの力強さ。",
    mcPatterns: [
      {
        type: "親しみやすい",
        text:
          "最後はAretha Franklin（アレサ・フランクリン）でおなじみの『A Natural Woman』です。愛されることで、自分らしい自分を取り戻していく。とても力強いラブソングです。",
      },
      {
        type: "しっとり",
        text:
          "誰かとの出会いによって、もう一度自分らしく生きられるようになる。そんな深い愛を歌った曲です。",
      },
      {
        type: "トリビア入り",
        text:
          "Aretha Franklin（アレサ・フランクリン）の名唱で知られますが、作曲したCarole King（キャロル・キング）も後に自身で録音しています。",
      },
      {
        type: "短め",
        text:
          "Aretha Franklin（アレサ・フランクリン）の名曲『A Natural Woman』です。",
      },
      {
        type: "少しユーモア",
        text:
          "タイトルだけ見ると“ナチュラルな女性”。でも歌はものすごくパワフルです（笑）。",
      },
    ],
  }),
];

export default songs;
