(function () {
  "use strict";

  var root = document.documentElement;

  // --- Theme toggle ---------------------------------------------------------
  var toggle = document.querySelector(".theme-toggle");

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* storage unavailable (e.g. private mode) — theme still applies */
      }
    });
  }

  // --- Scroll reveal ----------------------------------------------------------
  var reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion && "IntersectionObserver" in window) {
    var targets = document.querySelectorAll(
      ".hero, main > section, .compact-grid, footer"
    );

    targets.forEach(function (el) {
      el.classList.add("reveal");
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -36px 0px" }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Language switching -----------------------------------------------------
  var LANG_LABELS = { en: "EN", zh: "中", ja: "日", ko: "한" };
  var HTML_LANGS = { en: "en", zh: "zh-CN", ja: "ja", ko: "ko" };

  var I18N = {
    en: null, // English is the source markup; no dictionary needed
    zh: {
      "page.title": "Kai Wang — LLM 智能体研究者",
      "theme.toggle": "切换深浅色主题",
      "nav.about": "关于",
      "nav.research": "研究",
      "hero.role": "LLM 智能体研究者",
      "hero.lede":
        "我的研究聚焦于智能体运行时与 Harness 工程，目标是提升智能体解决长程任务的能力。我也开展 LLM 后训练相关研究。",
      "hero.location": "中国",
      "sec.interests": "研究兴趣",
      "sec.education": "教育经历",
      "sec.experience": "工业界经历",
      "sec.publications": "论文发表",
      "sec.projects": "开源项目",
      "sec.awards": "荣誉奖项",
      "sec.links": "相关链接",
      "focus.1.title": "知识增强 LLM",
      "focus.1.desc":
        "RAG、Graph-RAG 与 Agentic RAG——将语言模型扎根于外部知识，面向真实世界应用。",
      "focus.2.title": "智能体系统",
      "focus.2.desc":
        "设计核心运行时、Harness 与工作流，实现可靠的工具调用与长程任务执行。",
      "focus.3.title": "自进化智能体",
      "focus.3.desc":
        "通过工具合成、轨迹修正、Harness 训练与自适应重规划持续改进智能体。",
      "edu.1.title": "软件工程 硕士研究生",
      "edu.1.org": "中国科学技术大学",
      "edu.1.advisor": "导师：Xu Wang 研究员、Yang Wang 教授",
      "edu.2.title": "软件工程 学士",
      "edu.2.org": "西安交通大学",
      "exp.1.meta": "2026 年 6 月 — 至今",
      "exp.1.title": "研究实习生",
      "exp.1.org": "腾讯 · TEG · 智能算法",
      "exp.1.desc":
        "提出 MetaAgent，为跨多样任务的智能体提供可泛化的行为引导，在降低智能体配置门槛的同时提升任务完成质量。",
      "exp.2.meta": "2026 年 2 月 — 5 月",
      "exp.2.title": "算法实习生",
      "exp.2.org": "字节跳动 · TikTok 音乐计算",
      "exp.2.desc":
        "训练用于热点去重与内容—热点匹配的 Qwen3-Reranker-4B 模型。内容—热点匹配的精确率由 72% 提升至 88%、召回率由 87% 提升至 93%；热点去重的端到端批量延迟由 10 秒降至 6 秒以内。",
      "exp.3.meta": "2025 年 4 月 — 9 月",
      "exp.3.title": "工程实习生",
      "exp.3.org": "英特尔亚太研发 · Flex",
      "exp.3.desc":
        "将 EduLamp 从多智能体架构简化为 agents-as-tools 单智能体架构，首 token 延迟由 5 秒降至 2 秒以内。引入基于 MCP 的视觉、音频与动作插件；该项目获英特尔内部 AIPC 赛道一等奖。",
      "link.paper": "[论文]",
      "link.code": "[代码]",
      "proj.1.desc": "用于构建工具调用智能体的轻量级节点流运行时。",
      "proj.2.desc": "基于 Agent Core Runtime 构建的个人 CLI 智能体。",
      "award.1": "中国科学技术大学一等奖学金",
      "award.2": "国家励志奖学金",
      "footer.updated": "最后更新：2026 年 7 月",
    },
    ja: {
      "page.title": "Kai Wang — LLMエージェント研究者",
      "theme.toggle": "テーマを切り替え",
      "nav.about": "概要",
      "nav.research": "研究",
      "hero.role": "LLMエージェント研究者",
      "hero.lede":
        "エージェントランタイムとハーネスエンジニアリングを中心に、エージェントの長期的タスク解決能力の向上を目指して研究しています。LLMのポストトレーニングに関する研究も行っています。",
      "hero.location": "中国",
      "sec.interests": "研究テーマ",
      "sec.education": "学歴",
      "sec.experience": "業界経験",
      "sec.publications": "論文",
      "sec.projects": "オープンソース",
      "sec.awards": "受賞",
      "sec.links": "リンク",
      "focus.1.title": "知識拡張LLM",
      "focus.1.desc":
        "RAG、Graph-RAG、エージェンティックRAG——外部知識で言語モデルをグラウンディングし、実世界のアプリケーションへ。",
      "focus.2.title": "エージェントシステム",
      "focus.2.desc":
        "信頼性の高いツール利用と長期的タスク実行のため、コアランタイム、ハーネス、ワークフローを設計。",
      "focus.3.title": "自己進化エージェント",
      "focus.3.desc":
        "ツール合成、軌跡修正、ハーネス学習、適応的再計画を通じてエージェントを継続的に改善。",
      "edu.1.title": "ソフトウェア工学 修士課程",
      "edu.1.org": "中国科学技術大学",
      "edu.1.advisor": "指導教員：Xu Wang 研究員、Yang Wang 教授",
      "edu.2.title": "ソフトウェア工学 学士",
      "edu.2.org": "西安交通大学",
      "exp.1.meta": "2026年6月 — 現在",
      "exp.1.title": "研究インターン",
      "exp.1.org": "テンセント · TEG · インテリジェントアルゴリズム",
      "exp.1.desc":
        "多様なタスクにわたりエージェントへ汎化可能な行動指針を提供する「MetaAgent」を提案。エージェント設定のハードルを下げながら、タスク完了の質を向上させました。",
      "exp.2.meta": "2026年2月 — 5月",
      "exp.2.title": "アルゴリズムインターン",
      "exp.2.org": "ByteDance · TikTok Music Computing",
      "exp.2.desc":
        "トレンドの重複排除とコンテンツ・トレンドマッチングのため、Qwen3-Reranker-4Bモデルを学習。コンテンツ・トレンドマッチングでは適合率が72%から88%へ、再現率が87%から93%へ向上し、トレンド重複排除ではエンドツーエンドのバッチレイテンシを10秒から6秒未満に短縮しました。",
      "exp.3.meta": "2025年4月 — 9月",
      "exp.3.title": "エンジニアリングインターン",
      "exp.3.org": "Intel アジア太平洋R&D · Flex",
      "exp.3.desc":
        "EduLampをマルチエージェント構成からagents-as-tools型の単一エージェントへ簡素化し、ファーストトークンのレイテンシを5秒から2秒未満に削減。視覚・音声・アクション機能を担うMCPベースのプラグインを導入し、Intel社内AIPCトラックで最優秀賞を受賞しました。",
      "link.paper": "[論文]",
      "link.code": "[コード]",
      "proj.1.desc":
        "ツールを使うエージェントを構築するための軽量ノードフローランタイム。",
      "proj.2.desc": "Agent Core Runtime上に構築したパーソナルCLIエージェント。",
      "award.1": "中国科学技術大学 一等奨学金",
      "award.2": "国家励志奨学金",
      "footer.updated": "最終更新：2026年7月",
    },
    ko: {
      "page.title": "Kai Wang — LLM 에이전트 연구원",
      "theme.toggle": "테마 전환",
      "nav.about": "소개",
      "nav.research": "연구",
      "hero.role": "LLM 에이전트 연구원",
      "hero.lede":
        "에이전트 런타임과 하네스 엔지니어링을 중심으로 에이전트의 장기 과업 해결 능력 향상을 연구하고 있습니다. LLM 포스트트레이닝 연구도 함께 수행하고 있습니다.",
      "hero.location": "중국",
      "sec.interests": "연구 관심 분야",
      "sec.education": "학력",
      "sec.experience": "산업계 경험",
      "sec.publications": "논문",
      "sec.projects": "오픈소스 프로젝트",
      "sec.awards": "수상",
      "sec.links": "링크",
      "focus.1.title": "지식 증강 LLM",
      "focus.1.desc":
        "RAG, Graph-RAG, 에이전틱 RAG — 외부 지식에 언어 모델을 그라운딩하여 실세계 애플리케이션에 적용합니다.",
      "focus.2.title": "에이전트 시스템",
      "focus.2.desc":
        "신뢰할 수 있는 도구 사용과 장기 과업 수행을 위한 코어 런타임, 하네스, 워크플로를 설계합니다.",
      "focus.3.title": "자기 진화 에이전트",
      "focus.3.desc":
        "도구 합성, 궤적 수정, 하네스 학습, 적응형 재계획을 통해 에이전트를 지속적으로 개선합니다.",
      "edu.1.title": "소프트웨어공학 석사 과정",
      "edu.1.org": "중국과학기술대학교",
      "edu.1.advisor": "지도교수: Xu Wang 연구원, Yang Wang 교수",
      "edu.2.title": "소프트웨어공학 학사",
      "edu.2.org": "시안교통대학교",
      "exp.1.meta": "2026년 6월 — 현재",
      "exp.1.title": "리서치 인턴",
      "exp.1.org": "텐센트 · TEG · 인텔리전트 알고리즘",
      "exp.1.desc":
        "다양한 태스크에서 에이전트에 일반화 가능한 행동 가이던스를 제공하는 MetaAgent를 제안했습니다. 에이전트 구성의 진입 장벽을 낮추면서 태스크 완수 품질을 높였습니다.",
      "exp.2.meta": "2026년 2월 — 5월",
      "exp.2.title": "알고리즘 인턴",
      "exp.2.org": "바이트댄스 · TikTok Music Computing",
      "exp.2.desc":
        "트렌딩 중복 제거와 콘텐츠-트렌딩 매칭을 위한 Qwen3-Reranker-4B 모델을 학습했습니다. 콘텐츠-트렌딩 매칭에서 정밀도는 72%에서 88%로, 재현율은 87%에서 93%로 향상되었고, 트렌딩 중복 제거의 엔드투엔드 배치 지연은 10초에서 6초 미만으로 감소했습니다.",
      "exp.3.meta": "2025년 4월 — 9월",
      "exp.3.title": "엔지니어링 인턴",
      "exp.3.org": "Intel 아시아태평양 R&D · Flex",
      "exp.3.desc":
        "EduLamp를 멀티 에이전트 아키텍처에서 agents-as-tools 방식의 단일 에이전트로 간소화하여 첫 토큰 지연을 5초에서 2초 미만으로 줄였습니다. 비전·오디오·액션 기능을 위한 MCP 기반 플러그인을 도입했으며, 이 프로젝트는 Intel 내부 AIPC 트랙에서 최고상을 받았습니다.",
      "link.paper": "[논문]",
      "link.code": "[코드]",
      "proj.1.desc": "도구 사용 에이전트를 구축하기 위한 경량 노드 플로 런타임.",
      "proj.2.desc": "Agent Core Runtime 기반의 개인 CLI 에이전트.",
      "award.1": "중국과학기술대학교 1등 장학금",
      "award.2": "국가격려장학금",
      "footer.updated": "마지막 업데이트: 2026년 7월",
    },
  };

  var switcher = document.querySelector(".lang-switcher");
  var langBtn = document.querySelector(".lang-btn");
  var langMenu = document.querySelector(".lang-menu");
  var langLabel = document.querySelector(".lang-current");

  // English source strings are captured from the markup on first switch,
  // so switching back to English always restores the exact original text.
  var enSource = {};

  function applyLang(lang) {
    if (!I18N[lang]) lang = "en";
    var dict = I18N[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!(key in enSource)) enSource[key] = el.textContent.trim();
      el.textContent = dict ? dict[key] || enSource[key] : enSource[key];
    });

    root.lang = HTML_LANGS[lang];
    document.title =
      (dict && dict["page.title"]) ||
      "Kai Wang — LLM Agent Researcher";
    langLabel.textContent = LANG_LABELS[lang];

    if (toggle) {
      var t = (dict && dict["theme.toggle"]) || "Toggle color theme";
      toggle.setAttribute("aria-label", t);
      toggle.setAttribute("title", t);
    }

    langMenu.querySelectorAll("[data-lang]").forEach(function (li) {
      li.setAttribute(
        "aria-selected",
        li.getAttribute("data-lang") === lang ? "true" : "false"
      );
    });

    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      /* storage unavailable */
    }
  }

  function setMenu(open) {
    langBtn.setAttribute("aria-expanded", String(open));
    langMenu.hidden = !open;
  }

  if (switcher && langBtn && langMenu) {
    langBtn.addEventListener("click", function () {
      setMenu(langMenu.hidden);
    });

    langMenu.addEventListener("click", function (e) {
      var li = e.target.closest("[data-lang]");
      if (li) {
        applyLang(li.getAttribute("data-lang"));
        setMenu(false);
      }
    });

    document.addEventListener("click", function (e) {
      if (!langMenu.hidden && !e.target.closest(".lang-switcher")) {
        setMenu(false);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !langMenu.hidden) {
        setMenu(false);
        langBtn.focus();
      }
    });

    var saved = null;
    try {
      saved = localStorage.getItem("lang");
    } catch (e) {
      /* storage unavailable */
    }
    if (saved && saved !== "en") applyLang(saved);
  }
})();
