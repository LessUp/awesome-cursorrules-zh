import DefaultTheme from 'vitepress/theme'
import './style.css'
import ExecutiveHero from './components/ExecutiveHero.vue'
import MetricBand from './components/MetricBand.vue'
import DecisionMatrix from './components/DecisionMatrix.vue'
import ArchitectureSnapshot from './components/ArchitectureSnapshot.vue'
import EvidenceBand from './components/EvidenceBand.vue'
import SectionCallout from './components/SectionCallout.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    DefaultTheme.enhanceApp?.({ app })
    app.component('ExecutiveHero', ExecutiveHero)
    app.component('MetricBand', MetricBand)
    app.component('DecisionMatrix', DecisionMatrix)
    app.component('ArchitectureSnapshot', ArchitectureSnapshot)
    app.component('EvidenceBand', EvidenceBand)
    app.component('SectionCallout', SectionCallout)
  },
}
