import DefaultTheme from 'vitepress/theme'
import 'virtual:uno.css'
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
import SignalGrid from './components/SignalGrid.vue'
import TopologyMap from './components/TopologyMap.vue'
import PipelineCanvas from './components/PipelineCanvas.vue'
import DossierMatrix from './components/DossierMatrix.vue'
import SignalPill from './components/SignalPill.vue'
import ThemedSvg from './components/ThemedSvg.vue'
import ReferenceCard from './components/ReferenceCard.vue'
import ArchitectureDiagram from './components/ArchitectureDiagram.vue'
import RuleDecisionTree from './components/RuleDecisionTree.vue'
import RuleCard from './components/RuleCard.vue'
import ThemedLogo from './components/ThemedLogo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    DefaultTheme.enhanceApp?.({ app })

    // Core Components
    app.component('WhitepaperHero', WhitepaperHero)
    app.component('NarrativeRail', NarrativeRail)
    app.component('SystemShowcase', SystemShowcase)
    app.component('CurriculumDeck', CurriculumDeck)
    app.component('CitationLedger', CitationLedger)
    app.component('SignalGrid', SignalGrid)
    app.component('TopologyMap', TopologyMap)
    app.component('PipelineCanvas', PipelineCanvas)
    app.component('DossierMatrix', DossierMatrix)
    app.component('SignalPill', SignalPill)
    app.component('SectionCallout', SectionCallout)

    // New Components (Phase 1-3)
    app.component('ThemedSvg', ThemedSvg)
    app.component('ReferenceCard', ReferenceCard)
    app.component('ArchitectureDiagram', ArchitectureDiagram)
    app.component('RuleDecisionTree', RuleDecisionTree)
    app.component('RuleCard', RuleCard)
    app.component('ThemedLogo', ThemedLogo)

    // Legacy Components (kept for backward compatibility)
    app.component('ExecutiveHero', ExecutiveHero)
    app.component('MetricBand', MetricBand)
    app.component('DecisionMatrix', DecisionMatrix)
    app.component('ArchitectureSnapshot', ArchitectureSnapshot)
    app.component('EvidenceBand', EvidenceBand)
  },
}
