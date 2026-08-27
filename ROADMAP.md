# ROADMAP

Roomfolio は、段階的に育てていくプロジェクトです。

このロードマップは、

**「何を作るか」ではなく、**
**「どの順番で実装していくか」**

を整理するためのドキュメントです。

サービス仕様は Blueprint.md を正とし、
ROADMAP.md では実装する順番のみを管理します。

各Stageは、単にページを作ることではなく、
そのページと関連する導線が実際に利用できる状態になることを完了条件とします。

---

# 実装方針

最初からプラットフォーム全体を完成させることは目指しません。

まずは、作者が自分のRoomfolioを作成・編集し、
訪問者が公開されたRoomを閲覧できる最小構成を完成させます。

実際に利用しながら改善を重ね、
その後アカウント・プロフィール・検索・フォローなどの機能を追加し、
段階的にプラットフォームへ育てていきます。

実装はStageごとに小さく進め、
各Stageの完了条件を確認してから次のStageへ進みます。

Blueprint.md に記載された「決定事項」のみを実装対象とし、
「検討中」「将来構想」は独自判断で実装しません。

---

# 🏗 Stage 0 : Foundation（現在）

仕様・データ構造・配信環境・実装計画を整えます。

## 対象

- README.md を整備する
- VISION.md を整備する
- Blueprint.md を整備する
- CLAUDE.md を整備する
- ROADMAP.md を整備する
- 本番リポジトリを確認する
- Vercelとの接続を確認する
- Supabaseの既存データ構造を確認する
- 既存Room・assets・linksの関係を確認する
- Auth UIDとRoomの所有関係を確認する
- 後続Stageの実装範囲と順番を整理する

## 完了条件

- Blueprint.md が現在の仕様の正となっている
- 各Stageの実装範囲が定義されている
- 既存データを壊さない実装方針が確認されている
- 未決定の仕様を推測して実装しないことが確認されている

**Status : 🚧 In Progress**

---

# 🔐 Stage 1 : Author Entry

既存ユーザーがログインし、
自分のRoomfolioを確認・管理する作者用Homeへ進める状態を目指します。

Loginと作者用Homeは別ページですが、
ログイン成功後に作者用Homeへ進む導線が決定されているため、
最小の作者導線として同じStageで実装します。

## ページ

### Login

```text
/login
```

- Email + Passwordでログインする
- Supabase Auth sessionを作成する
- ログイン成功後、作者用Homeへ進む

### 作者用Home

- 自分のRoomを表示する
- 自分の公開ユーザーIDを確認できる
- 自分の公開Room URLを確認・共有できる
- Editへの入口を用意する

作者用HomeとEdit画面は別ページとして扱います。

## データ導線

```text
Email + Password
    ↓
Supabase Auth session
    ↓
Auth UID
    ↓
rooms.user_id
    ↓
自分のRoom
```

Auth UIDに対応するRoomが存在しない場合は、
Roomを自動作成せず、操作を停止して案内します。

## このStageで変更しないもの

- Roomの編集・保存
- assetsの編集
- linksの編集
- `is_published`の変更
- 公開Room
- 新規ユーザー登録
- プロフィール
- 検索
- フォロー
- おすすめ

## 完了条件

- 既存Email Authユーザーが `/login` からログインできる
- ログイン成功後、作者用Homeへ進める
- 作者用Homeで自分のRoomを確認できる
- 公開ユーザーIDと公開Room URLを確認できる
- HomeからEditへ進める
- Roomが存在しない場合に自動作成しない

**Status : ⏳ Planned**

---

# 🛠 Stage 2 : Room Editor

作者が自分のRoomを読み込み、
背景・assets・links・themeを編集して保存できる状態を目指します。

## ページ

```text
/edit
```

## 対象

- 保存済みRoomを読み込む
- 背景を変更する
- themeを変更する
- assetsを追加・編集する
- assetsの配置を設定する
- assetsのタイトル・説明を設定する
- linksを設定する
- Roomを保存する

## Roomの取得

ログイン中のAuth UIDから、
所有するRoomを解決します。

```text
Auth UID
    ↓
rooms.user_id
    ↓
rooms.id
```

取得したRoom IDを、
Room・assets・links・Storageの共通基準として使用します。

## 保存

保存済みRoomを編集した場合は、
新しいRoomを作成せず、同じRoom IDを更新します。

```text
rooms
  ↓
assets
  ↓
links
```

それぞれを既存のRoom ID・asset IDの関係に従って扱います。

## 既存検証HTMLの扱い

既存の検証用HTMLで確認済みの処理を、
本番Editへ段階的に移植します。

ただし、以下は本番実装へ持ち込みません。

- 固定 `TEST_ROOM_ID`
- `?room_id` によるRoom指定
- Room選択用localStorage

本番ではAuth UIDから取得したRoomを使用します。

## 完了条件

- ログイン済みの作者が自分のRoomを読み込める
- 既存Roomの背景・assets・links・themeを復元できる
- Roomを編集できる
- 同じRoom IDへ保存できる
- 新しいRoomを勝手に作成しない
- Room・assets・links・Storageが正しいRoom IDを基準に扱われる
- 未ログインまたはRoom未検出時に編集・保存・アップロードを開始しない

**Status : ⏳ Planned**

---

# 🌐 Stage 3 : Public Room

訪問者がログインせず、
公開されたRoomをURLから閲覧できる状態を目指します。

## ページ

```text
/{roomfolio_user_id}
```

## 対象

- 公開ユーザーIDからRoomを取得する
- 公開状態を確認する
- Roomを表示する
- 背景・assets・themeを表示する
- assetsの説明を表示する
- assetsに設定されたlinksを表示する
- Room内のポップアップからリンクを開ける

## 訪問者

公開ページはログインしなくても閲覧できます。

公開ページを閲覧しているユーザーを、
自動的にLoginへリダイレクトしません。

Auth UIDは公開URLや訪問者向け画面に使用しません。

## 公開・非公開

`is_published`を使用して公開状態を管理します。

公開Roomと管理用データのアクセス境界については、
Stage 3の実装前にRLS・Storageの詳細を確認します。

## 完了条件

- `/{roomfolio_user_id}` で公開Roomへ到達できる
- 訪問者はログインせず閲覧できる
- 非公開Roomは訪問者へ公開されない
- Auth UIDを公開URLに使用しない
- 公開Roomの背景・assets・themeを表示できる
- assetsからlinksを利用できる

※未公開Roomの表示、404ページ、公開切替UIなど、
Blueprintで詳細が未決定の項目は、実装前に仕様を確認します。

**Status : ⏳ Planned**

---

# 👤 Stage 4 : Account & Profile

新規ユーザー登録とプロフィールを扱える状態を目指します。

## 対象

- 新規ユーザー登録
- 表示名
- ユーザーID
- パスワード
- 初期Roomの作成
- プロフィール
- プロフィール表示
- 更新情報
- アカウント管理

## 注意

既存ユーザーのLoginはStage 1で扱います。

新規登録やプロフィールの保存先など、
Stage 4で必要となる詳細仕様は、
Blueprint.mdの決定事項に基づいて実装します。

未決定の保存先・UI・仕様を独自判断で追加しません。

**Status : ⏳ Planned**

---

# 🔍 Stage 5 : Discovery

Roomfolio内で作者を見つけ、
継続して訪問できる状態を目指します。

## 対象

- 検索
- 検索結果
- 作者を見つける導線
- フォロー
- フォロワー
- おすすめ

検索では、Blueprint.mdで決定されている検索対象を使用します。

## 注意

検索結果のレイアウト、
並び順、
おすすめとの組み合わせなど、
Blueprintで「検討中」となっている項目は、
決定されるまで実装しません。

**Status : ⏳ Planned**

---

# 🌱 Future

Blueprint.md の将来構想をもとに、
Roomfolioを継続的に育てていきます。

将来構想は現在の実装対象ではありません。

必要になった時点でBlueprint.mdを更新し、
その内容をROADMAP.mdへ反映します。

---

# 📌 Stage間の基本導線

Roomfolioの主要な作者導線は、次の順番で実装します。

```text
Stage 0
Foundation
    ↓
Stage 1
Login → 作者用Home
    ↓
Stage 2
Edit → 保存
    ↓
Stage 3
Public Room
    ↓
Stage 4
Account & Profile
    ↓
Stage 5
Discovery
```

訪問者側は、公開ページについてログインを要求しません。

```text
訪問者
    ↓
Public Room
    ↓
閲覧・リンク利用
```

作者側は、管理機能へ進む際に認証を要求します。

```text
作者
    ↓
Login
    ↓
作者用Home
    ↓
Edit
```

各Stageは、前Stageの成果物を利用しながら段階的に実装します。
