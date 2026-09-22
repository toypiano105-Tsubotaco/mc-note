import assert from "node:assert/strict";
import test from "node:test";
import { canReturnToSetList } from "../src/setListReturn.js";

const setListUrl = "https://set-list.example/";

test("Set List Note由来の参照元と戻れる履歴がある場合だけ戻る", () => {
  assert.equal(canReturnToSetList(setListUrl, 2, setListUrl), true);
  assert.equal(canReturnToSetList(`${setListUrl}?set=live`, 3, setListUrl), true);
  assert.equal(canReturnToSetList(setListUrl, 1, setListUrl), false);
  assert.equal(canReturnToSetList("", 3, setListUrl), false);
  assert.equal(canReturnToSetList("https://other.example/", 3, setListUrl), false);
  assert.equal(canReturnToSetList("https://set-list.example.other.example/", 3, setListUrl), false);
  assert.equal(canReturnToSetList("invalid", 3, setListUrl), false);
  assert.equal(canReturnToSetList(setListUrl, 3, ""), false);
});

test("ローカル検証でもポートを含む同一オリジンだけ許可する", () => {
  const local = "http://127.0.0.1:4180/";
  assert.equal(canReturnToSetList(local, 2, local), true);
  assert.equal(canReturnToSetList("http://127.0.0.1:5177/", 2, local), false);
});
