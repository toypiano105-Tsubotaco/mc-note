import { useMemo, useState } from "react";
import "./App.css";
import songs from "./songs.js";
import { canReturnToSetList } from "./setListReturn.js";

function App() {
  // 起動時だけ共通の曲IDを解決し、最初の描画から詳細を表示する。
  const [initialSong] = useState(() => {
    const songId = new URLSearchParams(window.location.search).get("song");
    return songs.find((song) => song.songId === songId);
  });
  const [screen, setScreen] = useState(initialSong ? "detail" : "create");
  const [input, setInput] = useState("3");
  const [sequence, setSequence] = useState(() => initialSong ? [initialSong] : []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mcIndex, setMcIndex] = useState(0);
  const [search, setSearch] = useState("");
  const showSetListReturn = Boolean(initialSong);

  const parsedSongs = useMemo(() => {
    const numbers = input
      .split(/[\s,、]+/)
      .filter(Boolean)
      .map(Number);

    return numbers
      .map((number) =>
        songs.find((song) => song.id === number)
      )
      .filter(Boolean);
  }, [input]);

  const currentSong = sequence[currentIndex];

  const currentMcPatterns = currentSong
    ? currentSong.mcPatterns.filter(
        (pattern) =>
          pattern.type !== "少しユーモア"
      )
    : [];

  const humorPattern = currentSong
    ? currentSong.mcPatterns.find(
        (pattern) =>
          pattern.type === "少しユーモア"
      )
    : null;

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openSequence = () => {
    if (!parsedSongs.length) return;

    setSequence(parsedSongs);
    setCurrentIndex(0);
    setMcIndex(0);
    setScreen("detail");
    scrollTop();
  };

  const returnToSetList = () => {
    const setListUrl = import.meta.env.VITE_SET_LIST_NOTE_URL
      || "https://set-list-note.netlify.app/";
    if (canReturnToSetList(
      document.referrer,
      window.history.length,
      setListUrl,
    )) {
      window.history.back();
      return;
    }

    // 直接アクセスや参照元不明の場合も、Set List Noteへ移動する。
    window.location.assign(setListUrl);
  };

  const openSong = (song) => {
    setSequence([song]);
    setCurrentIndex(0);
    setMcIndex(0);
    setScreen("detail");
    scrollTop();
  };

  const previousSong = () => {
    if (currentIndex === 0) return;

    setCurrentIndex((index) => index - 1);
    setMcIndex(0);
    scrollTop();
  };

  const nextSong = () => {
    if (
      currentIndex >=
      sequence.length - 1
    ) {
      return;
    }

    setCurrentIndex((index) => index + 1);
    setMcIndex(0);
    scrollTop();
  };

  const changeMC = () => {
    if (!currentMcPatterns.length) return;

    setMcIndex(
      (index) =>
        (index + 1) %
        currentMcPatterns.length
    );
  };

  const filteredSongs = songs.filter((song) => {
    const keyword = search
      .trim()
      .toLowerCase();

    return (
      song.title
        .toLowerCase()
        .includes(keyword) ||
      String(song.id)
        .padStart(2, "0")
        .includes(keyword)
    );
  });

  return (
    <div className="app">
      <header className="header">
        <h1>MC Note</h1>
        <p>TOHKO Live MC</p>
      </header>

      <main className="main">
        {/* =========================
            MC作成
        ========================= */}

        {screen === "create" && (
          <section>
            <div className="card">
              <h2>
                今日の曲番号を入力
              </h2>

              <input
                className="song-input"
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }
                placeholder="3 29 15 31"
              />

              <p className="hint">
                空白でもカンマでもOK
              </p>
            </div>

            {parsedSongs.length > 0 && (
              <div className="card">
                <h2>
                  今日の曲順
                </h2>

                <div className="song-order">
                  {parsedSongs.map(
                    (song, index) => (
                      <div
                        className="order-row"
                        key={`${song.id}-${index}`}
                      >
                        <span className="song-number">
                          {String(
                            song.id
                          ).padStart(2, "0")}
                        </span>

                        <span>
                          {song.title}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            <button
              className="primary-button"
              onClick={openSequence}
              disabled={!parsedSongs.length}
            >
              この曲順でMCを開く
            </button>
          </section>
        )}

        {/* =========================
            曲番号一覧
        ========================= */}

        {screen === "list" && (
          <section>
            <div className="card">
              <h2>
                曲番号一覧
              </h2>

              <input
                className="song-input"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="曲名・番号を検索"
              />
            </div>

            <div className="song-list">
              {filteredSongs.map((song) => (
                <button
                  className="song-list-item"
                  key={song.id}
                  onClick={() => openSong(song)}
                >
                  <span className="song-number">
                    {String(song.id).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <span>
                    {song.title}
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* =========================
            MC詳細
        ========================= */}

        {screen === "detail" &&
          currentSong && (
            <section>
              {showSetListReturn && (
                <button className="set-list-return" onClick={returnToSetList}>
                  ← セットリストに戻る
                </button>
              )}
              <div className="title-card">
                <span className="detail-number">
                  {String(
                    currentSong.id
                  ).padStart(2, "0")}
                </span>

                <h2>
                  {currentSong.title}
                </h2>
              </div>

              {/* =====================
                  そのまま読めるMC
              ===================== */}

              {currentMcPatterns.length > 0 && (
                <div className="mc-card">
                  <div className="mc-top-row">
                    <div>
                      <p className="mc-label">
                        そのまま読めるMC
                      </p>

                      <p className="mc-counter">
                        {mcIndex + 1}
                        {" / "}
                        {
                          currentMcPatterns.length
                        }
                      </p>
                    </div>

                    <span className="mc-type">
                      {
                        currentMcPatterns[
                          mcIndex
                        ].type
                      }
                    </span>
                  </div>

                  <p className="mc-text">
                    {
                      currentMcPatterns[
                        mcIndex
                      ].text
                    }
                  </p>

                  <button
                    className="change-button"
                    onClick={changeMC}
                  >
                    別の言い方にする
                  </button>
                </div>
              )}

              {/* =====================
                  少しユーモア
              ===================== */}

              {humorPattern && (
                <div className="humor-card">
                  <div className="humor-heading">
                    <span className="humor-icon">
                      😄
                    </span>

                    <h3>
                      少しユーモア
                    </h3>
                  </div>

                  <p className="humor-text">
                    {humorPattern.text}
                  </p>
                </div>
              )}

              {/* =====================
                  前の曲 / 次の曲
              ===================== */}

              <div className="song-navigation">
                <button
                  onClick={previousSong}
                  disabled={
                    currentIndex === 0
                  }
                >
                  ＜ 前の曲
                </button>

                <button
                  onClick={nextSong}
                  disabled={
                    currentIndex ===
                    sequence.length - 1
                  }
                >
                  次の曲 ＞
                </button>
              </div>

              {/* =====================
                  TOHKO Original
              ===================== */}

              {currentSong.originalSong && (
                <div className="info-card">
                  <h3 className="section-title">
                    TOHKO Original
                  </h3>

                  <Info
                    label="制作年"
                    value={
                      currentSong.productionYear
                    }
                  />

                  <Info
                    label="作詞"
                    value={
                      currentSong.lyricist
                    }
                  />

                  <Info
                    label="作曲"
                    value={
                      currentSong.composer
                    }
                  />

                  <Info
                    label="歌詞のテーマ"
                    value={
                      currentSong.theme
                    }
                  />

                  <Info
                    label="歌詞の情景"
                    value={
                      currentSong.scenery
                    }
                  />

                  <Info
                    label="曲の核心"
                    value={
                      currentSong.core
                    }
                  />

                  <Info
                    label="印象的なモチーフ"
                    value={
                      currentSong.motifs
                    }
                  />

                  <Info
                    label="MCポイント"
                    value={
                      currentSong.mcPoint
                    }
                  />
                </div>
              )}

              {/* =====================
                  通常曲
              ===================== */}

              {!currentSong.originalSong && (
                <div className="info-card">
                  <h3 className="section-title">
                    曲について
                  </h3>

                  <Info
                    label="年代"
                    value={
                      currentSong.year
                    }
                  />

                  <Info
                    label="作曲者"
                    value={
                      currentSong.composer
                    }
                  />

                  <Info
                    label="作詞者"
                    value={
                      currentSong.lyricist
                    }
                  />

                  <Info
                    label="初演・オリジナル"
                    value={
                      currentSong.original
                    }
                  />

                  <Info
                    label="代表歌手／代表録音"
                    value={
                      currentSong
                        .representative
                    }
                  />

                  <Info
                    label="歌詞の意味"
                    value={
                      currentSong.meaning
                    }
                  />

                  <Info
                    label="エピソード"
                    value={
                      currentSong.episode
                    }
                  />

                  <Info
                    label="音楽トリビア"
                    value={
                      currentSong.trivia
                    }
                  />

                  <Info
                    label="MCポイント"
                    value={
                      currentSong.mcPoint
                    }
                  />
                </div>
              )}

              {/* =====================
                  TOHKOメモ
              ===================== */}

              <div className="memo-card">
                <h3>
                  TOHKOメモ
                </h3>

                <textarea
                  defaultValue={
                    currentSong.tohkoMemo
                  }
                  placeholder="ライブ用のメモをここに…"
                />
              </div>
            </section>
          )}
      </main>

      {/* =========================
          下部ナビ
      ========================= */}

      <nav className="bottom-nav">
        <button
          className={
            screen === "create"
              ? "active"
              : ""
          }
          onClick={() => {
            setScreen("create");
            scrollTop();
          }}
        >
          🎤
          <span>
            MC作成
          </span>
        </button>

        <button
          className={
            screen === "list"
              ? "active"
              : ""
          }
          onClick={() => {
            setScreen("list");
            scrollTop();
          }}
        >
          🎵
          <span>
            曲番号一覧
          </span>
        </button>
      </nav>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="info-block">
      <h3>{label}</h3>
      <p>{value}</p>
    </div>
  );
}

export default App;
