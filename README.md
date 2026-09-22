# React + Vite

## Set List Noteからの復帰

`?song=song-003` などで有効な曲を直接開くと、詳細上部に「← セットリストに戻る」を表示します。
参照元が設定したSet List Noteのオリジンと一致し、履歴がある場合に `history.back()` を使います。
参照元不明・履歴なしの場合は、設定したSet List Note URLへ同じタブで移動します。

本番用の `.env.production` には `VITE_SET_LIST_NOTE_URL=https://set-list-note.netlify.app/` を設定済みです。
未設定の場合も同じ本番URLを使用します。ローカルで上書きする場合は `.env.example` を `.env.local` にコピーしてください。
環境変数はビルド時に反映されるため、変更後は開発サーバーの再起動または再ビルドが必要です。
公開時は本番のSet List Note URLを指定してください。ローカルの往復確認にはローカルURLを指定します。

判定のテスト: `node --test tests/setListReturn.test.js`

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
