var tipuesearch = {"pages": [{'title': 'About', 'text': 'resume 作業示範: \n https://github.com/mdecd2023/resume-scrum-1 \n 2a pj1agx 作業示範: \n 將  https://github.com/mdecycu/cmsimde  作為倉儲的 cmsimde 目錄, 並從 up_dir 取出所有檔案放入 2a-pj1agx 倉儲的根目錄, 則可以 cms 啟動 dynamic site, 並將 token 放入 .git/config 中的 URL, 就可直接在動態網頁中進行改版, 以 generate_pages 轉為靜態後, 直接以 acp 進行 git add, commit 與 push \n https://github.com/mdecd2023/2a-pj1agx \n 靜態網頁: \n https://mdecd2023.github.io/2a-pj1agx \n', 'tags': '', 'url': 'About.html'}, {'title': 'Github', 'text': '甚麼情況下要 fork 其他人的 github 倉儲? \n \n 想要保留該 github 倉儲目前所有分支的內容 (因為若倉儲擁有者將該倉儲轉為 private 後, 其他無權限的用戶就無法擷取該倉儲內容) \n 希望在自己的帳號權限下修改倉儲內容後, 以 pull requests 流程請求倉儲擁有者 review 後將此一改版的功能或修正合併至原始倉儲 (因為並沒有權限直接對該倉儲改版) \n \n 想要多了解 git: \n https://git-scm.com/book/zh-tw/v2 \n 版本控制是一種記錄一個或若干文件內容變化，以便將來查閱特定版本修訂情況的系統。 \n 它允許你將檔案復原到之前的狀態、將整個專案復原到先前的狀態、比對某一段時間的修改、查看最後是誰在哪個時間點做了錯誤的修改導致問題發生，誰在何時提出了某個功能缺陷⋯⋯等。 \n 分散式版本控制系統（Distributed Version Control Systems，簡稱 DVCSs），（如 Git、Mercurial、Bazaar 和 Darcs）中，用戶端並不只取出最新的檔案快照；還把整個倉儲做個鏡像。 假設有任何一個協同合作的伺服器故障，事後都可以用任何一個用戶端的鏡像來還原。 因為每個地方都有完整的資料備份。 Linux kernel 是規模相當大的開放原始碼軟體專案。 Linux kernel 在 1991 年到 2002 年間的維護工作，幾乎都是透過補丁和壓縮檔來完成的。 在 2002 年時，Linux kernel 開始採用名為 BitKeeper 的商業分散式版本控制系統。 在 2005 年時，開發 Linux kernel 的社群與開發 BitKeeper 的商業公司的合作關係結束，也就無法再免費使用該工具。 這就迫使了 Linux 社群（特別是 Linux 之父 Linus Torvalds）基於使用 BitKeeper 所學到的經驗，來開發自有的工具。 這個系統必須達成下列目標： \xa0\xa0\xa0 快速 \xa0\xa0\xa0 簡潔的設計 \xa0\xa0\xa0 完整支援非線性的開發（上千個同時進行的分支） \xa0\xa0\xa0 完全的分散式系統 \xa0\xa0\xa0 能夠有效地處理像 Linux kernel 規模的專案（速度及資料大小） 從 Git 在 2005 年誕生後，現在的 Git 已相當成熟，也能很容易上手，並保持著最一開始的要求的品質。 它不可思議的快速、處理大型專案非常有效率、也具備相當優秀足以應付非線性開發的分支系統。', 'tags': '', 'url': 'Github.html'}, {'title': 'Resume', 'text': 'LaTex or Word? MikTeX or TeXLive? How to use ChatGPT? \n 納入 Portable MiKTeX 之後的可攜 Python 程式套件:  wcm_portable_w2-4-miktex.7z', 'tags': '', 'url': 'Resume.html'}, {'title': 'pj1', 'text': 'localhost, replit, stud?, stud2 ssh or token? cmsimde based or not? can not upload .txt file into cmsimde based web site!! \n 確定 server.py 與 acp 可以正確運作 \n 開始執行\xa0 https://mde.tw/pjcopsim/content/bubbleRobTutorial.html \xa0 \n', 'tags': '', 'url': 'pj1.html'}, {'title': '2apj1', 'text': 'https://github.com/mdecd2023 \n 已經完成網頁建置的分組: \n w3 - 2023.03.10.16 已經完成分組網頁者, 可以得到分組網頁評分 \n w3 - 請各組寫一個程式判定 2a 哪一組已經完成網頁建置. \n w3 開始執行  https://mde.tw/pjcopsim/content/bubbleRobTutorial.html \n 星期四補課時間, 要驗收 Tutorial1 (心得, 展示頁面說明各組員所完成項目, 說明該組的專案規劃) \n 為了以較有效率的方式驗收各分組專案與網頁內容, 需要將 2a.txt (修課學員學號與 Github 帳號對應檔案) 放入 \n https://github.com/mdecycu/studlist/tree/main/2023spring,  請問該用何種方式取得與維護此份資料. \n 以 Office 365 中的公開 Excel 表單讓使用者填入後, 轉檔至 2023spring/2a.txt, 之後再透過倉儲 pull requests 進行維護. \n 若有更動, 請從  https://github.com/mdecycu/studlist  以 Pull Requests 進行修改) \n 請問有沒有其他更有效率的方法與流程? \n 寫一個網際程式, 以學號@nfu.edu.tw 登入 (mail2000 是否支援 oauth2?) 後填入個人的 github 帳號 \n 在 office 365 建立表單, 學員以學號@nfu.edu.tw 登入後, 填入 github 帳號 \n 2a 總共會有 21 組: \n \n \n \n \n \n', 'tags': '', 'url': '2apj1.html'}, {'title': '2aw3', 'text': '2a-pj1g 分組沒有網站: \n ag21 \n ag20 \n ag19 \n ag18 \n ag16 \n ag15 \n ag14 \n ag12 \n ag9 \n ag8 \n ag7 \n ag4 \n ag3 \n \n', 'tags': '', 'url': '2aw3.html'}, {'title': '2bpj1', 'text': 'bg6 -> 刪除 cmsimde, 重建 cmsimde 目錄 \n bg22 -> 刪除 cmsimde, 重建 cmsimde 目錄 \n 2b 總共會有 31 組: \n \n \n \n \n \n', 'tags': '', 'url': '2bpj1.html'}, {'title': '協同設計', 'text': '協同設計要點: \n \n 參與協同者能否 同步並發 執行所被交付的內容 \n 能否保留每一個階段所從事的設計版本 \n 能否確認哪一階段的哪一事項是由哪位成員所完成 (可居功而且無法諉過) \n 了解採用不同設計流程的原因, 目的與所可能遭遇的問題, 讓協同者可在逐步改版過程逼近預設目標 \n', 'tags': '', 'url': '協同設計.html'}, {'title': 'allowExt', 'text': "假如使用 cmsimde 作為網際內容管理系統, 但是想要上傳 .txt 檔案, 則可以直接將 cmsimde 作為子目錄後, 修改 cmsimde 目錄中的 flaskapp.py 中的 allowExt 設定, 將 'swf' 改為 'txt' 然後重新啟動網站, 就可以上傳 .txt 檔案. \n cd2023b_w2_note.txt \n", 'tags': '', 'url': 'allowExt.html'}, {'title': 'Tools', 'text': 'Portable grepwin:  https://github.com/stefankueng/grepWin/releases/tag/2.0.13 \n 管理團隊:  https://github.com/orgs/mdecd2023/teams \n', 'tags': '', 'url': 'Tools.html'}]};