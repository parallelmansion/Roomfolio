# ROADMAP

Roomfolio は、段階的に育てていくプロジェクトです。

このロードマップは、

**「何を作るか」ではなく、**
**「どの順番で実装していくか」**

を整理するためのドキュメントです。

サービス仕様は `Blueprint.md` を正とし、
`ROADMAP.md` では実装する順番と各Stageの進行状況を管理します。

---

# 実装方針

最初からプラットフォーム全体を完成させることは目指しません。

Roomfolioの基本体験を小さな段階に分けて実装し、
各Stageを確認しながら次のStageへ進みます。

Blueprint.mdに記載されている内容は、

- 決定事項
- 検討中
- 将来構想

に分けて扱います。

実装の順番は、このROADMAPに従います。

---

# 🏗 Stage 0 : Foundation

Roomfolioを開発するための基盤を整えます。

## 実施内容

- リポジトリを作成する
- README.mdを整備する
- VISION.mdを整備する
- Blueprint.mdを整備する
- CLAUDE.mdを整備する
- ROADMAP.mdを整備する
- 開発環境を整える

**Status : ✅ Completed**

---

# 🏠 Stage 1 : Author Entry

作者が自分のRoomへ入り、
編集を開始できる状態を整えます。

## 実施内容

- ログイン
- Author Home
- 自分のRoomの取得
- 自分のRoomの表示
- Room編集画面への導線
- 作者側画面の基本構成

**Status : ✅ Completed**

---

# 🪑 Stage 2 : Room Editor

Roomfolioの中心となるRoom編集機能を完成させます。

作者が自分のRoomを編集し、
内容を保存できる状態を目指します。

## 実施内容

### Room

- Room背景を設定する
- 背景プリセットを選択する
- 背景画像をアップロードする
- テーマを設定する
- Room情報を保存する

### Furniture / Asset

- Assetを配置する
- 最大8個のAssetを扱う
- Frame / Object / Originalを扱う
- タイトルを設定する
- 説明を設定する
- 配置位置を設定する
- 固定配置 / ランダム配置を扱う

### Link

- Assetにリンクを設定する
- 複数リンクを扱う
- リンクタイトルを設定する
- リンクレイアウトを設定する
- Assetからリンクを開けるようにする

### 保存

- Room情報を保存する
- Asset情報を保存する
- Link情報を保存する
- 保存したRoomを再読み込みできるようにする

---

## Stage 2 完了条件

以下を満たした時点でStage 2を完了とします。

- Room背景を編集できる
- Default.webpが背景選択肢に含まれていない
- Assetを最大8個配置できる
- Frame / Object / Originalを扱える
- タイトル・説明を設定できる
- リンクを設定できる
- Asset配置を保存できる
- Link情報を保存できる
- Room情報を保存できる
- 保存した内容を再読み込みできる
- Blueprint.mdで定められた配置仕様を満たす
- Blueprint.mdで定められた保存仕様を満たす

**Status : 🚧 In Progress**

---

# 🌐 Stage 3 : Public Room

作者のRoomを訪問者が閲覧できる状態を実装します。

## 実施内容

- 公開Roomを表示する
- 公開URLを実装する
- Roomを訪問者向けに表示する
- 背景を表示する
- Assetを表示する
- Assetからコンテンツへ移動できるようにする
- スマートフォン表示を整える
- PC表示を整える
- 公開 / 非公開の切り替えを実装する

## 完了条件

- 公開RoomをURLから閲覧できる
- 非公開Roomが訪問者から見えない
- Roomの表示がBlueprint.mdの仕様を満たす
- PC / スマートフォンの表示を確認できる

**Status : ⏳ Planned**

---

# 👤 Stage 4 : Account & Profile

Roomfolioを複数ユーザーが利用できるサービスへ発展させます。

このStageで新規ユーザー登録を実装します。

## Account

- 新規ユーザー登録
- 表示名
- Roomfolio User ID
- パスワード
- Authアカウント作成
- Room作成
- 初期Room設定
- ログイン
- ログアウト

## 新規Room

新規ユーザー登録時のRoomは、

- 背景：Default.webp
- Asset：0個
- プロフィール：空

を初期状態とします。

Default.webpは初期背景として使用しますが、
背景選択肢には含めません。

## Profile

- プロフィール
- リンク
- リンク説明
- 更新情報
- 更新メモ
- 更新セクション
- プロフィール表示
- フォロー / フォロワー公開設定

**Status : ⏳ Planned**

---

# 🔍 Stage 5 : Discovery

Roomfolio内で人や作品と出会える導線を追加します。

## 実施内容

- 検索
- ユーザー検索
- Roomへの導線
- 作品への導線
- 発見性の向上
- おすすめ導線

検索条件や結果表示など、
Blueprint.mdで検討中となっている内容は、
決定後に実装します。

**Status : ⏳ Planned**

---

# 🌱 Future

Blueprint.mdの将来構想をもとに、
Roomfolioを継続的に育てていきます。

将来構想は現在の実装対象ではありません。

必要になった段階でBlueprint.mdを確認し、
実装内容と順番を改めて整理します。

**Status : ⏳ Future**

---

# 🧭 現在地

現在のRoomfolioは、

**Stage 2 : Room Editor**

を進行中です。

現在の進行順は、

```text
Stage 0 : Foundation
        ↓
Stage 1 : Author Entry
        ↓
Stage 2 : Room Editor ← 現在
        ↓
Stage 3 : Public Room
        ↓
Stage 4 : Account & Profile
        ↓
Stage 5 : Discovery
        ↓
Future