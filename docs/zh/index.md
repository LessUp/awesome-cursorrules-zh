---
layout: home
---

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  localStorage.setItem('preferred-locale', 'zh');
});
</script>

<ExecutiveHero
  kicker="Technical Whitepaper / Architecture Showcase"
  title="把 Cursor Rules 升级为组织级工程知识系统"
  summary="面向技术负责人与架构师，先解释价值与结构，再进入证据库与落地路径。"
  primary-href="./whitepaper/decision-brief"
  primary-label="先看决策者摘要"
  secondary-href="./architecture/blueprint"
  secondary-label="查看站点蓝图"
/>

<MetricBand
  :items="[
    { label: '规则资产', value: '132+', detail: '规则页保留为证据层，而不是首页主叙事。' },
    { label: '覆盖领域', value: '32+', detail: '覆盖前端、后端、数据、基础设施与协作治理。' },
    { label: '阅读定位', value: 'Tech Lead First', detail: '先服务技术负责人和架构师，再服务具体执行者。' }
  ]"
/>

<DecisionMatrix
  title="先做三种判断，再决定是否深入规则页"
  intro="这个首页不再把你带去规则目录，而是先帮助技术负责人和架构师判断：这是不是一个值得投资的工程知识系统。"
  :options="[
    {
      fit: '价值判断',
      title: '先确认它是不是组织资产',
      summary: '如果规则只被当成临时提示词，团队无法复用经验，也无法形成稳定治理。',
      considerations: '首页因此先讲组织资产、治理成本和复用收益，而不是分类卡片。'
    },
    {
      fit: '结构判断',
      title: '再确认系统如何被组织',
      summary: '架构师需要先看 rules/、叙事文档、主题层和 GitHub Pages 的关系，再决定如何接入团队。',
      considerations: '结构先被解释清楚，后续证据库、角色路径和贡献模型才有落点。'
    },
    {
      fit: '执行判断',
      title: '最后再进入证据库与落地路径',
      summary: '当价值和结构被确认后，再进入规则证据库挑选样本、模板与组合方式。',
      considerations: '这样 rules/ 会成为支撑决策的证据层，而不是孤立的规则 Atlas。'
    }
  ]"
/>

<ArchitectureSnapshot
  title="从资产源到发布面的四层快照"
  summary="白皮书展厅型首页的任务，是把项目总览、站点蓝图、发布和证据放进同一条解释链路，而不是只展示数量。"
  :layers="[
    {
      label: '规则资产层 · rules/',
      detail: '保存 132+ 规则资产，继续作为权威内容源。'
    },
    {
      label: '叙事编排层 · whitepaper / architecture / playbook',
      detail: '用白皮书解释价值，用架构页解释结构，用操作路径解释如何开始。'
    },
    {
      label: '展示与发布层 · VitePress / GitHub Pages',
      detail: '把首页、导航和主题组件组织成适合决策者快速浏览的发布面。'
    },
    {
      label: '证据层 · rules pages / references',
      detail: '当读者准备验证判断时，再进入规则证据库、资源网络和具体页面样本。'
    }
  ]"
/>

<EvidenceBand
  title="证据库不是首页主角，而是决策之后的支撑层"
  intro="首页先完成价值判断，再把 rules/、资源网络与文档证据组织成可验证的下一步。"
  :items="[
    {
      value: '132+',
      label: '规则样本',
      detail: '为团队建立规范模板、技术边界和协作约束提供直接证据。'
    },
    {
      value: '32+',
      label: '技术领域',
      detail: '证明这不是单一栈玩具，而是可被组合进多团队场景的知识资产。'
    },
    {
      value: 'Role-based',
      label: '采用路径',
      detail: '技术负责人、平台负责人与贡献者都能沿着不同路径进入同一套系统。'
    }
  ]"
/>

<SectionCallout
  title="建议阅读顺序"
  body="先读决策者摘要，再进入项目总览、站点蓝图与信息图谱，随后查看采用路径和角色路径，最后把 rules/ 当作证据库使用。"
  href="./whitepaper/decision-brief"
  label="按白皮书顺序开始"
/>
