(() => {
  const translations = {
    ja: {
      meta: {
        title: 'AIDD / SHIFT — AI駆動開発への転換',
        description: '日本のSIerに向けたAI駆動開発（AIDD）への転換提案。KDDIの事例、従来型との違い、Skills + Codex導入方法、PoC計画を紹介。'
      },
      'nav.aria': 'セクションナビゲーション',
      'lang.aria': '言語切替',
      'hero.title': 'コードを書く時代から、<br><span class="accent">開発を設計し直す時代へ。</span>',
      'hero.lead': 'AIは単なるコーディング支援ツールではない。人が目的と品質を判断し、AIが設計・実装・テストを継続的に実行する。日本のSIerが、次の開発モデルへ移行するための提案。',
      'hero.ctaPrimary': '提案を見る ↘',
      'hero.ctaSecondary': '開発モデルを比較する →',
      'hero.keyMessage': '<strong>AIDDとは</strong> — 人が判断し、AIが実行を駆動する開発アプローチ。',
      'why.title': 'なぜ、今なのか。',
      'why.desc': 'AIの進化が変えるのは作業時間だけではない。人月を基準に設計された開発ビジネスの前提そのものが、変わり始めている。',
      'why.card1Title': '人月モデルの転換',
      'why.card1Desc': '開発工数が短縮されるほど、投入人数・時間に依存した収益構造は再検討を迫られる。顧客が求める価値は工数から成果へ。',
      'why.card2Title': 'コード生成から工程実行へ',
      'why.card2Desc': 'Coding Agentはコード変更だけでなく、テストの実行、結果の確認、修正までを連続して行えるようになった。',
      'why.card3Title': '開発能力の再定義',
      'why.card3Desc': '競争力を左右するのはエンジニアの人数だけではない。要件を整理し、AIを安全に運用し、短期間で価値を届ける組織能力が重要になる。',
      'story.title': 'すでに、成果は出ている。',
      'story.desc': 'KDDIアイレットは、AIを個々の工程に追加したのではなく、開発プロセスそのものを再設計した。',
      'story.label': 'KDDIアイレット / 大規模システム刷新',
      'story.heading': '既存コードをAIが理解できる状態に整え、設計・実装・検証の進め方を変える。',
      'story.body': '既存コードの整理、コーディング規約・設計ルール・テスト手順の標準化、AIによる一次レビューを組み合わせ、人は重要な業務ロジックと仕様の確認に集中。',
      'story.link': 'KDDI公式記事を読む ↗',
      'story.metricOldLabel': '従来の想定工期',
      'story.metricOld': '2〜3年',
      'story.metricNewLabel': 'AIDDを活用した完遂実績',
      'story.metricNew': '半年',
      'story.metricSmall': '大規模システム更新の公開事例',
      'story.conclusion': '成果の本質は「AIがコードを速く書いた」ことではない。<br>開発の手順・役割・検証方法を変えたことにある。',
      'story.source': '出典：KDDI公式記事（2026年7月31日）。工期は公開事例における想定と実績。',
      'traditional.title': '変わるのは、工程ではなく実行主体。',
      'traditional.desc': '要件定義、設計、テスト、品質保証の必要性は変わらない。人が各工程を実行するモデルから、人が判断しAIが工程を横断して実行するモデルへ。',
      'traditional.oldTitle': '人から人への引き継ぎ',
      'traditional.oldStage1': '要件定義 → 基本設計 <span>文書・承認</span>',
      'traditional.oldStage2': '詳細設計 → 製造 <span>文書・実装</span>',
      'traditional.oldStage3': '単体 → 結合 → 総合テスト <span>検証・修正</span>',
      'traditional.oldDesc': '工程間の待ち時間、成果物の再解釈、変更時の手戻りが蓄積しやすい。',
      'traditional.newTitle': '人の判断 × AIの継続実行',
      'traditional.newStage1': '人：目的・要件・品質基準を判断 <span>DECIDE</span>',
      'traditional.newStage2': 'AI：仕様整理 → 設計 → 実装 <span>EXECUTE</span>',
      'traditional.newStage3': 'AI：テスト → レビュー → 修正 <span>VERIFY</span>',
      'traditional.newDesc': '規則・仕様・テストを一貫して参照し、検証結果を次の修正へつなげる。重要箇所は人が確認・承認。',
      'traditional.conclusion': '人の仕事を減らすことが目的ではない。人の時間を、業務判断・設計の意思決定・品質責任に集中させる。',
      'matrix.title': '同じ思想を、より小さく実装できるか。',
      'matrix.desc': 'KDDIのAIDDは企業向けの開発・品質管理アプローチ。一方、Matt Pocock Skillsは、AI Coding Agentに工程上の規律を与える再利用可能なSkills群。目的は近いが、提供範囲と成熟度は異なる。',
      'matrix.filterAria': '比較カテゴリ',
      'matrix.filterAll': 'すべて',
      'matrix.filterEng': '技術・プロセス',
      'matrix.filterQual': '品質',
      'matrix.filterGov': 'ガバナンス・成熟度',
      'matrix.th1': '比較観点',
      'matrix.th2': 'KDDIアイレット AIDD',
      'matrix.r1c1': '<strong>要件整理</strong><span class="tag">PROCESS</span>',
      'matrix.r1c2': 'AIを要件定義から活用。開発工程全体の一貫性を重視。',
      'matrix.r1c3': '<b>grill-with-docs</b> で曖昧さを解消し、<b>to-spec</b> で仕様を明文化。',
      'matrix.r2c1': '<strong>コンテキスト</strong><span class="tag">TECH</span>',
      'matrix.r2c2': '既存コード、設計ルール、規約をAIが参照しやすい形に整理。',
      'matrix.r2c3': 'Glossary・ADR・AGENTS.mdなどを整備。Codexにプロジェクト文脈を渡す。',
      'matrix.r3c1': '<strong>タスク管理</strong><span class="tag">PROCESS</span>',
      'matrix.r3c2': '企画からテストまでを横断する開発プロセスを提供。',
      'matrix.r3c3': '<b>to-tickets</b> で分解し、<b>implement-spec</b> 等で実装。',
      'matrix.r4c1': '<strong>実装主体</strong><span class="tag">TECH</span>',
      'matrix.r4c2': 'AIが設計・実装・テストなどの実行部分を担当。',
      'matrix.r4c3': 'Codexがコード変更・コマンド実行・テスト・修正を担当。',
      'matrix.r5c1': '<strong>テスト設計</strong><span class="tag">QUALITY</span>',
      'matrix.r5c2': 'テスト手順を標準化し、AI活用と品質確認を結びつける。',
      'matrix.r5c3': '<b>tdd</b> と既存テスト基盤。CI上で自動実行。',
      'matrix.r6c1': '<strong>コードレビュー</strong><span class="tag">QUALITY</span>',
      'matrix.r6c2': '形式的チェックや一次レビューをAIに任せ、人が重要ロジックを確認。',
      'matrix.r6c3': '<b>code-review</b> ＋ PR承認ルール。重要な変更は人が確認。',
      'matrix.r7c1': '<strong>継続改善</strong><span class="tag">QUALITY</span>',
      'matrix.r7c2': 'ルールと開発プロセスを標準化し再利用。',
      'matrix.r7c3': '<b>retro</b> でAgent環境・チェック・規約を改善。',
      'matrix.r8c1': '<strong>セキュリティ</strong><span class="tag">GOVERNANCE</span>',
      'matrix.r8c2': '企業向けサービスとしてセキュリティ・プライバシーへの対応を提供。',
      'matrix.r8c3': 'Skills単体では不足。権限管理、秘密情報保護、SAST/SCA等の追加が必要。',
      'matrix.r9c1': '<strong>監査・承認</strong><span class="tag">GOVERNANCE</span>',
      'matrix.r9c2': '人の判断・承認を中心に据えた企業向けアプローチ。',
      'matrix.r9c3': 'GitHub PR、CIログ、Branch Protection、人の承認ゲートで構築。',
      'matrix.r10c1': '<strong>導入成熟度</strong><span class="tag">MATURITY</span>',
      'matrix.r10c2': '企業向けサービス提供と、大規模システム刷新の公開実績がある。',
      'matrix.r10c3': '公開OSSのSkills群。自社で運用モデルと実績を構築する必要がある。',
      'matrix.r11c1': '<strong>導入コスト</strong><span class="tag">MATURITY</span>',
      'matrix.r11c2': '企業向け導入支援・開発サービス。個別の契約・体制による。',
      'matrix.r11c3': '小規模から試行しやすい。ツール利用料、検証・統制・教育コストは別途必要。',
      'matrix.source': '公開資料に基づく機能比較と、自社導入案の対比。KDDI内部の非公開実装を断定するものではありません。フィルタで比較観点を切り替えられます。',
      'impl.title': '大企業の思想を、小さな実行モデルへ。',
      'impl.desc': 'KDDIの組織やサービスをそのまま複製する必要はない。まずはCodexとSkills、既存のGitHub/CIを組み合わせ、1チームで再現可能な開発プロセスを構築する。',
      'impl.s1Title': '仕様を固める',
      'impl.s1Desc': '質問で曖昧さをなくし、判断基準とテスト対象を明文化する。',
      'impl.s2Title': 'AIが実装する',
      'impl.s2Desc': '仕様を小さなタスクに分け、Codexに変更と実装を任せる。',
      'impl.s3Title': '自動で検証する',
      'impl.s3Desc': 'テストとレビューを実行し、結果をもとに修正を繰り返す。',
      'impl.s4Title': '次に活かす',
      'impl.s4Desc': '失敗や知見をルール・テスト・環境へ還元する。',
      'impl.rulebar': '<b>実務適用の最低条件：</b> 権限管理 · シークレット保護 · 自動テスト · 静的解析 · PRレビュー · 承認ゲート · 実行ログ。Skillsは開発規律を提供し、企業の統制は別途組み込む。',
      'impl.source': 'Skills公式：<a class="source" href="https://github.com/mattpocock/skills" target="_blank" rel="noopener noreferrer">github.com/mattpocock/skills ↗</a>',
      'poc.title': 'まずは4週間で、効果を測る。',
      'poc.desc': 'いきなり全社導入はしない。実際の開発案件を一つ選び、従来方式と比較可能な条件で、AIが担える工程と品質を検証する。',
      'poc.roadmapAria': '4週間の計画',
      'poc.w0Btn': '<b>WEEK 01</b>対象と基準',
      'poc.w1Btn': '<b>WEEK 02</b>仕様と環境',
      'poc.w2Btn': '<b>WEEK 03</b>実装と検証',
      'poc.w3Btn': '<b>WEEK 04</b>評価と判断',
      'poc.kpi1': '開発リードタイム<small>開始からレビュー完了まで</small>',
      'poc.kpi2': '品質・不具合<small>テスト合格率、レビュー指摘、回帰不具合</small>',
      'poc.kpi3': '人の関与時間<small>手作業、確認、修正、承認の所要時間</small>',
      'poc.conclusion': 'PoCのゴールは「AIで作れた」というデモではない。<br>品質を守りながら、どの工程の工数をどこまで置き換えられるかを示すこと。',
      'footer.title': 'AIツールの導入ではなく、<br>開発の進め方そのものを変える。',
      'footer.desc': '小さなPoCから始め、再現性のある成果を確認し、標準プロセスへ展開する。',
      'footer.legal': '2026 / AIDD STRATEGY • Concept preview • KDDIアイレットとの提携・公式関係を示すものではありません。',
      weeks: [
        ['対象案件と成功条件を決める', '既存の小規模API改修、あるいはレガシー機能の移行を1件選ぶ。対象範囲、既存の品質基準、比較に使う工数・手戻り・テスト指標を合意する。'],
        ['仕様とエージェント環境を整える', 'grill-with-docs / to-specで要求を明確化。既存コード、設計ルール、テストケースを整理し、Codex・GitHub CI・権限制御を準備する。'],
        ['AIで実装し、反復検証する', 'to-ticketsで作業を分解。Codexで実装し、単体・回帰テスト、静的解析、コードレビューを実行。失敗箇所を修正して再検証する。'],
        ['成果を比較し、次の投資を判断する', '品質・リードタイム・人手工数・手戻りを既存実績と比較。導入可能な工程と未解決のリスクを整理し、次の対象範囲を決める。']
      ]
    },
    zh: {
      meta: {
        title: 'AIDD / SHIFT — 向 AI 驱动开发转型',
        description: '面向日本 SIer 的 AI 驱动开发（AIDD）转型提案。介绍 KDDI 案例、与传统模式的差异、Skills + Codex 落地方法及 PoC 计划。'
      },
      'nav.aria': '章节导航',
      'lang.aria': '语言切换',
      'hero.title': '从编写代码的时代，<br><span class="accent">迈向重构开发流程的时代。</span>',
      'hero.lead': 'AI 不再只是辅助编码的工具。由人来把控目标与质量，AI 持续执行设计、实现与测试。这是一份面向日本 SIer 迈向下一代开发模式的转型提案。',
      'hero.ctaPrimary': '查看提案 ↘',
      'hero.ctaSecondary': '对比开发模式 →',
      'hero.keyMessage': '<strong>什么是 AIDD</strong> — 由人做决策，由 AI 驱动执行的开发方法。',
      'why.title': '为什么是现在？',
      'why.desc': 'AI 的演进改变的不仅是作业工时。以人月为基础构建的传统软件开发商业前提，本身正在发生动摇。',
      'why.card1Title': '人月模式的转型',
      'why.card1Desc': '开发工时越缩短，依赖投入人数与工时的收益结构就越需要重新审视。客户追求的价值正从“工时”转向“成果”。',
      'why.card2Title': '从代码生成走向流程执行',
      'why.card2Desc': 'Coding Agent 不仅能修改代码，还能连续完成运行测试、确认结果与修复问题等一系列工程动作。',
      'why.card3Title': '重新定义开发能力',
      'why.card3Desc': '决定竞争力的不再只是工程师人数。梳理需求、安全驾驭 AI 并在短周期内交付价值的组织能力正变得至关重要。',
      'story.title': '实际成果，已经显现。',
      'story.desc': 'KDDI iret 并非只是在单个环节叠加 AI，而是对开发流程本身进行了重新设计。',
      'story.label': 'KDDI iret / 大规模系统重构',
      'story.heading': '将既有代码整理为 AI 可理解的状态，彻底改变设计、实现与验证的推进方式。',
      'story.body': '结合既有代码梳理、编码规范/设计规则/测试流程的标准化，以及 AI 初审，让工程师专注于核心业务逻辑与规格确认。',
      'story.link': '阅读 KDDI 官方报道 ↗',
      'story.metricOldLabel': '传统预计工期',
      'story.metricOld': '2〜3年',
      'story.metricNewLabel': '采用 AIDD 后的实际完成周期',
      'story.metricNew': '半年',
      'story.metricSmall': '大规模系统更新的公开案例',
      'story.conclusion': '成果的本质不在于“AI 写代码更快”。<br>而在于彻底改变了开发的步骤、角色分工与验证方式。',
      'story.source': '来源：KDDI 官方报道（2026年7月31日）。工期为公开案例中的预计与实际数据。',
      'traditional.title': '改变的不是工程环节，而是执行主体。',
      'traditional.desc': '需求定义、设计、测试与质量保障的必要性并未改变。真正改变的是从“人执行每个环节”转向“人做决策、AI 跨环节执行”。',
      'traditional.oldTitle': '人与人之间的交接传递',
      'traditional.oldStage1': '需求定义 → 概要设计 <span>文档·审批</span>',
      'traditional.oldStage2': '详细设计 → 编码实现 <span>文档·实现</span>',
      'traditional.oldStage3': '单元 → 集成 → 系统测试 <span>验证·修复</span>',
      'traditional.oldDesc': '环节间的等待耗时、产物的重复理解，以及变更时的返工成本极易不断累积。',
      'traditional.newTitle': '人的决策 × AI 的持续执行',
      'traditional.newStage1': '人：判断目标、需求与质量标准 <span>DECIDE</span>',
      'traditional.newStage2': 'AI：规格梳理 → 设计 → 实现 <span>EXECUTE</span>',
      'traditional.newStage3': 'AI：测试 → 评审 → 修复 <span>VERIFY</span>',
      'traditional.newDesc': '统一参照规范、规格与测试，并将验证结果直接驱动下一轮修复；关键节点由人确认与审批。',
      'traditional.conclusion': '目的不是减少人的工作，而是将人的时间聚焦于业务判断、架构决策与质量把关。',
      'matrix.title': '同样的理念，能否以更轻量的规模落地？',
      'matrix.desc': 'KDDI 的 AIDD 是面向企业的开发与质量管理方法；而 Matt Pocock Skills 则是为 AI Coding Agent 赋予工程纪律的可复用 Skills 集合。两者目标相近，但覆盖范围与成熟度不同。',
      'matrix.filterAria': '对比分类',
      'matrix.filterAll': '全部',
      'matrix.filterEng': '技术·流程',
      'matrix.filterQual': '质量',
      'matrix.filterGov': '治理·成熟度',
      'matrix.th1': '对比维度',
      'matrix.th2': 'KDDI iret AIDD',
      'matrix.r1c1': '<strong>需求梳理</strong><span class="tag">PROCESS</span>',
      'matrix.r1c2': '从需求定义阶段即引入 AI，注重全开发流程的一致性。',
      'matrix.r1c3': '通过 <b>grill-with-docs</b> 消除歧义，再用 <b>to-spec</b> 明确规格文档。',
      'matrix.r2c1': '<strong>上下文管理</strong><span class="tag">TECH</span>',
      'matrix.r2c2': '将既有代码、设计规则与规范整理为 AI 易于参照的形式。',
      'matrix.r2c3': '完善 Glossary、ADR、AGENTS.md 等文档，向 Codex 注入项目上下文。',
      'matrix.r3c1': '<strong>任务管理</strong><span class="tag">PROCESS</span>',
      'matrix.r3c2': '提供贯穿从策划到测试全流程的开发体系。',
      'matrix.r3c3': '使用 <b>to-tickets</b> 拆分任务，并通过 <b>implement-spec</b> 等推进实现。',
      'matrix.r4c1': '<strong>实现主体</strong><span class="tag">TECH</span>',
      'matrix.r4c2': '由 AI 承担设计、实现、测试等执行环节。',
      'matrix.r4c3': '由 Codex 负责代码修改、命令执行、测试与问题修复。',
      'matrix.r5c1': '<strong>测试设计</strong><span class="tag">QUALITY</span>',
      'matrix.r5c2': '标准化测试流程，将 AI 应用与质量确认紧密结合。',
      'matrix.r5c3': '结合 <b>tdd</b> 与既有测试体系，在 CI 上自动运行。',
      'matrix.r6c1': '<strong>代码评审</strong><span class="tag">QUALITY</span>',
      'matrix.r6c2': '规范检查与初审交由 AI，工程师聚焦关键业务逻辑确认。',
      'matrix.r6c3': '<b>code-review</b> ＋ PR 审批规则，重要变更由人工确认。',
      'matrix.r7c1': '<strong>持续改进</strong><span class="tag">QUALITY</span>',
      'matrix.r7c2': '将规则与开发流程标准化并持续复用。',
      'matrix.r7c3': '通过 <b>retro</b> 持续优化 Agent 环境、检查项与开发规范。',
      'matrix.r8c1': '<strong>安全合规</strong><span class="tag">GOVERNANCE</span>',
      'matrix.r8c2': '作为企业级服务提供安全性与隐私保护支持。',
      'matrix.r8c3': '仅靠 Skills 本身不足，需额外配套权限管理、密钥保护与 SAST/SCA 等机制。',
      'matrix.r9c1': '<strong>审计与审批</strong><span class="tag">GOVERNANCE</span>',
      'matrix.r9c2': '以人的判断与审批为核心的企业级治理方式。',
      'matrix.r9c3': '依托 GitHub PR、CI 日志、Branch Protection 与人工审批关卡构建。',
      'matrix.r10c1': '<strong>落地成熟度</strong><span class="tag">MATURITY</span>',
      'matrix.r10c2': '具备企业级服务交付能力及大规模系统重构的公开实绩。',
      'matrix.r10c3': '开源的 Skills 集合，需由企业自行构建运维模式并积累实践经验。',
      'matrix.r11c1': '<strong>导入成本</strong><span class="tag">MATURITY</span>',
      'matrix.r11c2': '企业级导入支持与开发服务，视具体合同与团队体制而定。',
      'matrix.r11c3': '易于小规模试行，但工具使用费及验证、管控与培训成本需另行投入。',
      'matrix.source': '基于公开资料的功能对比与企业自建方案对照，并非对 KDDI 内部非公开实现的断言。可通过上方筛选按钮切换对比维度。',
      'impl.title': '将大企业的理念，转化为小团队可执行的模型。',
      'impl.desc': '无需照搬 KDDI 的组织架构或服务体系。先从 Codex、Skills 与现有的 GitHub/CI 组合入手，在单个团队内跑通可复现的开发流程。',
      'impl.s1Title': '明确规格',
      'impl.s1Desc': '通过追问消除歧义，明确判断标准与测试对象。',
      'impl.s2Title': 'AI 负责实现',
      'impl.s2Desc': '将规格拆分为小颗粒任务，交由 Codex 完成修改与实现。',
      'impl.s3Title': '自动化验证',
      'impl.s3Desc': '自动运行测试与代码评审，并基于结果循环修复。',
      'impl.s4Title': '沉淀并反哺',
      'impl.s4Desc': '将失败教训与经验沉淀回规范、测试与环境中。',
      'impl.rulebar': '<b>生产落地的最低要求：</b> 权限管理 · 密钥保护 · 自动化测试 · 静态分析 · PR 评审 · 审批关卡 · 执行日志。Skills 提供开发纪律，企业级管控需另行嵌入。',
      'impl.source': 'Skills 官方仓库：<a class="source" href="https://github.com/mattpocock/skills" target="_blank" rel="noopener noreferrer">github.com/mattpocock/skills ↗</a>',
      'poc.title': '先用 4 周时间，验证实际成效。',
      'poc.desc': '不急于全公司铺开。先挑选一个真实开发项目，在与传统模式可对比的条件下，验证 AI 能承担的环节与交付质量。',
      'poc.roadmapAria': '4 周计划',
      'poc.w0Btn': '<b>WEEK 01</b>目标与基线',
      'poc.w1Btn': '<b>WEEK 02</b>规格与环境',
      'poc.w2Btn': '<b>WEEK 03</b>实现与验证',
      'poc.w3Btn': '<b>WEEK 04</b>评估与决策',
      'poc.kpi1': '开发交付周期<small>从启动开发到评审完成</small>',
      'poc.kpi2': '质量与缺陷<small>测试通过率、评审意见、回归缺陷</small>',
      'poc.kpi3': '人工投入时间<small>手动操作、确认、修改与审批耗时</small>',
      'poc.conclusion': 'PoC 的目标不是做一个“AI 能写出来”的演示。<br>而是在守住质量底线的前提下，明确哪些环节、多少工时可以被有效替代。',
      'footer.title': '不是单纯引入 AI 工具，<br>而是改变软件开发本身的推进方式。',
      'footer.desc': '从小型 PoC 起步，验证可复现的成果，再逐步推广为标准流程。',
      'footer.legal': '2026 / AIDD STRATEGY • Concept preview • 本页面仅作概念展示，不代表与 KDDI iret 存在合作或官方关系。',
      weeks: [
        ['确定试点项目与成功标准', '选取 1 个现有的小型 API 改造或遗留功能迁移项目。就目标范围、现有质量标准以及用于对比的工时、返工率、测试指标达成一致。'],
        ['完善规格与 Agent 环境', '使用 grill-with-docs / to-spec 澄清需求。梳理既有代码、设计规范与测试用例，并准备好 Codex、GitHub CI 与权限控制。'],
        ['AI 实现与迭代验证', '用 to-tickets 拆分任务，交由 Codex 实现，并运行单元测试、回归测试、静态分析与代码评审；针对失败项持续修复并重新验证。'],
        ['对比成果并评估后续投入', '将质量、交付周期、人工工时与返工率同历史实绩对比。梳理可推广的环节与遗留风险，决定下一阶段的推进范围。']
      ]
    }
  };

  let currentLang = 'ja';
  let currentWeek = 0;

  const langButtons = document.querySelectorAll('.lang-btn');
  const metaDesc = document.querySelector('meta[name="description"]');
  const weekLabel = document.getElementById('week-label');
  const weekTitle = document.getElementById('week-title');
  const weekDetail = document.getElementById('week-detail');

  function renderWeek(index) {
    currentWeek = index;
    const week = translations[currentLang].weeks[index];
    weekLabel.textContent = `WEEK 0${index + 1}`;
    weekTitle.textContent = week[0];
    weekDetail.textContent = week[1];
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    const dict = translations[lang];

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'ja';
    document.title = dict.meta.title;
    if (metaDesc) metaDesc.setAttribute('content', dict.meta.description);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = dict[el.dataset.i18n];
      if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const val = dict[el.dataset.i18nHtml];
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const val = dict[el.dataset.i18nAria];
      if (val !== undefined) el.setAttribute('aria-label', val);
    });

    langButtons.forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    renderWeek(currentWeek);

    try {
      localStorage.setItem('aidd-lang', lang);
    } catch {
      // Ignore storage restrictions
    }
  }

  langButtons.forEach(btn => btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  }));

  const filters = document.querySelectorAll('.filter');
  const rows = document.querySelectorAll('tbody tr[data-kind]');
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    const kind = button.dataset.filter;
    rows.forEach(row => { row.hidden = !(kind === 'all' || row.dataset.kind === kind); });
  }));

  const weekButtons = document.querySelectorAll('.week');
  weekButtons.forEach(button => button.addEventListener('click', () => {
    const index = Number(button.dataset.week);
    weekButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    renderWeek(index);
  }));

  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  let savedLang = null;
  try {
    savedLang = localStorage.getItem('aidd-lang');
  } catch {
    // Ignore storage restrictions
  }
  const initialLang = (urlLang === 'zh' || urlLang === 'ja')
    ? urlLang
    : ((savedLang === 'zh' || savedLang === 'ja') ? savedLang : 'ja');

  if (initialLang !== 'ja') {
    setLanguage(initialLang);
  }
})();
