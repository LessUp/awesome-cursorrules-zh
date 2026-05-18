---
layout: home
---

<script setup>
import { onMounted } from 'vue';
import { siteFacts } from '../.vitepress/site/facts';

onMounted(() => {
  localStorage.setItem('preferred-locale', 'zh');
});
</script>

<div class="home-shell">
  <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px;">
    <SignalPill label="系统架构白皮书" />
    <SignalPill label="规则编排算法" />
    <SignalPill label="性能与证据" />
    <SignalPill label="参考与演进" />
  </div>

  <WhitepaperHero
    kicker="System Architecture Whitepaper / Rule Orchestration Algorithm / Evidence Dossier"
    title="把 Cursor Rules 重构成可审阅、可论证、可引用的工程研究门户"
    summary="这个首页不再只是入口页，而是整个项目的总论：先说明系统如何组织，再解释规则编排算法如何工作，最后给出性能、证据和参考资料，让严苛审稿人也能快速建立信任。"
    :indicators="[
      { label: '规则资产', value: `${siteFacts.ruleCount}+` },
      { label: '覆盖领域', value: `${siteFacts.domainCount}+` },
      { label: '高密度领域', value: `${siteFacts.coverageBuckets[0]?.count ?? 0}` }
    ]"
    primary-href="./architecture/system-overview"
    primary-label="进入系统架构"
    secondary-href="./algorithms/overview"
    secondary-label="查看算法机制"
  />

  <SignalGrid
    eyebrow="Thesis Signals"
    title="先立论，再展开系统、方法、证据与参考资料"
    intro="首页负责回答四个问题：仓库到底在组织什么、系统架构是否成立、规则编排算法是否自洽、性能与证据是否足以支撑长期价值。"
    :items="[
      {
        label: '规则资产',
        value: `${siteFacts.ruleCount}+`,
        detail: '所有页面、图示与论点都回到 rules/ 这个权威资产源。'
      },
      {
        label: '知识覆盖',
        value: `${siteFacts.domainCount}+`,
        detail: '通过高密度与长尾领域并存的结构证明仓库不是单点技巧集合。'
      },
      {
        label: '演进阶段',
        value: `${siteFacts.timelineSignals.length}`,
        detail: '从资产策展、叙事编排到证据发布，整个流程都被显式建模。'
      }
    ]"
  />

  <TopologyMap
    eyebrow="System Topology"
    title="系统架构白皮书：把仓库结构翻译成可解释的发布系统"
    summary="站点不再依赖静态文案维持专业感，而是通过资产层、快照层、信息架构层、呈现层和发布层形成真正可审阅的工程结构。"
    :layers="[
      { name: '资产层', detail: 'rules/ 作为唯一事实源，避免首页指标与仓库真实状态脱节。' },
      { name: '快照层', detail: 'sync-site-facts.mjs 生成结构化站点快照，为页面和图示提供同一份数据源。' },
      { name: '信息架构层', detail: '导读、系统架构、算法机制、性能白皮书、参考与演进、规则证据形成稳定阅读链路。' },
      { name: '呈现层', detail: '主题组件把指标、拓扑图、编排流水线和引文矩阵变成统一视觉语言。' },
      { name: '发布层', detail: 'VitePress 与 GitHub Pages 输出最终的白皮书界面和证据库。' }
    ]"
  />

  <PipelineCanvas
    eyebrow="Method"
    title="规则编排算法不是黑盒，而是一条可解释流水线"
    summary="算法章节解释项目如何把离散的规则资产转化为分类、组合、升级路径与发布证据，避免站点沦为只会陈列数量的资源列表。"
    :stages="[
      { name: '发现', detail: '递归扫描 rules/，识别规则资产与分类边界。' },
      { name: '归类', detail: '将规则映射为覆盖桶、头部领域和长尾知识面。' },
      { name: '编排', detail: '把规则组合模式、决策树与阅读路径组织成可执行的算法说明。' },
      { name: '发布', detail: '把系统结构、性能与参考资料统一发布为证据化界面。' }
    ]"
  />

  <SignalGrid
    eyebrow="Performance & Evidence"
    title="性能与证据不是附录，而是项目可信度的主体"
    intro="这里的性能既包括构建链路，也包括导航效率、维护复杂度、图示可靠性和内容密度。真正的高级感来自于可解释和可验证，而不是夸张的动效。"
    :items="[
      {
        label: '高密度领域',
        value: `${siteFacts.coverageBuckets[0]?.count ?? 0}`,
        detail: '头部领域承担方法论展示，形成可快速审阅的强信号。'
      },
      {
        label: '中密度领域',
        value: `${siteFacts.coverageBuckets[1]?.count ?? 0}`,
        detail: '中层覆盖证明仓库具备扩展性，而不是只围绕少量热点技术。'
      },
      {
        label: '长尾领域',
        value: `${siteFacts.coverageBuckets[2]?.count ?? 0}`,
        detail: '长尾知识面为项目提供更强的研究价值和引用价值。'
      }
    ]"
  />

  <DossierMatrix
    eyebrow="References & Evolution"
    title="参考与演进：用学术与开源对照抬高整个项目的可信度"
    intro="不是堆外链，而是明确每一种方法论、上游开源项目和参考文献分别影响了本站的哪一层设计。"
    :entries="[
      {
        subject: 'Documentation Method',
        source: 'Diátaxis',
        adopted: '吸收其解释、指南、参考资料分层思路，避免全站只有一种写法。',
        advance: '进一步收敛成导读、系统架构、算法机制、性能白皮书与规则证据的阅读路径。'
      },
      {
        subject: 'Docs Engineering',
        source: 'MoonshotAI / kimi-cli',
        adopted: '继承构建前同步 docs 数据的工程思路。',
        advance: '把同步数据升级为支撑拓扑图、性能页和引文矩阵的白皮书级快照。'
      },
      {
        subject: 'Open Source Framing',
        source: 'AOSA + 同类仓库对照',
        adopted: '强调开源项目不仅要列能力，还要解释结构、边界与权衡。',
        advance: '将 rules/ 从单纯目录升级为“规则证据库”，让参考与演进成为长期护城河。'
      }
    ]"
  />
</div>
