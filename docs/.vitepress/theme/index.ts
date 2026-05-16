import DefaultTheme from 'vitepress/theme'
import './style.css'
import ExecutiveHero from './components/ExecutiveHero.vue'
import MetricBand from './components/MetricBand.vue'
import DecisionMatrix from './components/DecisionMatrix.vue'
import ArchitectureSnapshot from './components/ArchitectureSnapshot.vue'
import EvidenceBand from './components/EvidenceBand.vue'
import SectionCallout from './components/SectionCallout.vue'
import WhitepaperHero from './components/WhitepaperHero.vue'
import NarrativeRail from './components/NarrativeRail.vue'
import SystemShowcase from './components/SystemShowcase.vue'
import CurriculumDeck from './components/CurriculumDeck.vue'
import CitationLedger from './components/CitationLedger.vue'
import SignalPill from './components/SignalPill.vue'

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
    app.component('WhitepaperHero', WhitepaperHero)
    app.component('NarrativeRail', NarrativeRail)
    app.component('SystemShowcase', SystemShowcase)
    app.component('CurriculumDeck', CurriculumDeck)
    app.component('CitationLedger', CitationLedger)
    app.component('SignalPill', SignalPill)
  },
}
