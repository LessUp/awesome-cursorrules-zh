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
    <SignalPill label="项目白皮书" />
    <SignalPill label="架构展厅" />
    <SignalPill label="研究引用" />
  </div>

  <WhitepaperHero
    kicker="Technical Whitepaper / Architecture Showcase / Research Library"
    title="把 Cursor Rules 做成可审阅的工程知识学院"
    summary="这个站点不再用规则数量争取注意力，而是用清晰的论点、系统总览、学院路径和研究引用证明项目的长期价值。"
    :indicators="[
      { label: '规则资产', value: `${siteFacts.ruleCount}+` },
      { label: '覆盖领域', value: `${siteFacts.domainCount}+` },
      { label: '双语路径', value: `${siteFacts.localeCount}` }
    ]"
    primary-href="./introduction/mission"
    primary-label="先读项目使命"
    secondary-href="./architecture/system-overview"
    secondary-label="查看系统总览"
  />

  <NarrativeRail
    title="先建立判断，再进入证据"
    intro="建议按一条收敛路径阅读：先看项目使命，确认为什么值得关注；再看学院路径与架构设计，理解系统如何成立；最后把规则索引和研究引用当作证据层。"
    :stages="[
      {
        index: '01',
        title: '项目导读',
        body: '先用项目使命和读者地图确认这是不是一个值得深入的工程知识系统。',
        href: './introduction/reader-map',
        label: '查看读者地图'
      },
      {
        index: '02',
        title: '学院路径',
        body: '把面试官、架构师、维护者放入不同的学习路径，降低理解门槛。',
        href: './academy/learning-path',
        label: '进入学院路径'
      },
      {
        index: '03',
        title: '证据与研究',
        body: '把 rules/ 作为证据层，同时把相关文档方法论、上游仓库和演进思考组织成研究引用。',
        href: './research/references',
        label: '浏览研究引用'
      }
    ]"
  />

  <SystemShowcase
    title="系统总览，不只是换一层皮"
    summary="工程化层面对齐 kimi-cli docs 的思路：构建前同步站点事实、显式组织导航与侧边栏、让主题组件服务于内容叙事，而不是堆装饰。"
    :nodes="[
      {
        eyebrow: 'Source Assets',
        title: 'rules/ 作为权威资产源',
        detail: '所有计数和领域覆盖都从规则资产自动提取，避免首页指标与真实仓库脱节。'
      },
      {
        eyebrow: 'Narrative Shell',
        title: '导读、学院、架构、指南',
        detail: '目录树从简单分类切换为白皮书式解释链路，先帮助读者完成判断。'
      },
      {
        eyebrow: 'Publishing Layer',
        title: 'VitePress 主题与生成事实',
        detail: '主题令牌、可视化组件和同步脚本共同定义站点的一致性与可维护性。'
      },
      {
        eyebrow: 'Evidence Layer',
        title: '规则索引与研究引用',
        detail: '规则页负责证据，研究页负责背书，避免首页继续像一个目录生成器。'
      }
    ]"
  />

  <CurriculumDeck
    title="学院路径，用角色组织阅读深度"
    intro="不同读者不必共享同一条导航起点，但他们最终会汇入同一套系统认识。"
    :tracks="[
      {
        name: '面试官 / 审阅者路径',
        audience: 'Fast pass',
        outcome: '在最短时间内判断项目是否具备结构、深度和持续演进能力。',
        steps: ['从项目使命理解站点为什么不再是规则目录', '看系统总览确认工程化与发布策略', '用研究引用和规则索引做交叉验证']
      },
      {
        name: '架构师路径',
        audience: 'Architecture pass',
        outcome: '理解资产源、叙事层、主题层和研究层如何形成闭环。',
        steps: ['先看系统总览与站点蓝图', '再看学院路径确认不同角色的进入顺序', '最后评估规则组合模式与内容系统']
      },
      {
        name: '维护者路径',
        audience: 'Maintainer pass',
        outcome: '明确如何新增规则、更新叙事页面、校验指标并保持双语一致。',
        steps: ['从维护者课程掌握更新顺序', '用团队接入指南保持贡献流程统一', '将研究引用作为长期演进的参考索引']
      }
    ]"
  />

  <CitationLedger
    title="研究引用，把项目拉到白皮书语境"
    intro="这里不是装饰性友情链接，而是为文档结构、发布策略和开源项目定位提供方法论背书。"
    :entries="[
      {
        kind: 'Framework',
        title: 'Diátaxis Documentation Framework',
        note: '将教程、操作指南、解释与参考资料拆开，为本站的导读、学院、指南和研究区提供结构启发。',
        href: 'https://diataxis.fr/',
        label: '查看框架'
      },
      {
        kind: 'Open Source',
        title: 'MoonshotAI / kimi-cli',
        note: '参考其 VitePress 工程组织与 docs 同步策略，并将其演化为更重叙事与视觉的白皮书型外壳。',
        href: 'https://github.com/MoonshotAI/kimi-cli',
        label: '查看仓库'
      },
      {
        kind: 'Book',
        title: 'The Architecture of Open Source Applications',
        note: '提醒项目展示不应只停留在功能清单，而要公开解释系统结构与边界。',
        href: 'https://aosabook.org/en/index.html',
        label: '查看书籍'
      }
    ]"
  />
</div>
