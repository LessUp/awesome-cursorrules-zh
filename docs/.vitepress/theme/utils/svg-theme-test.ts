/**
 * SVG Theme Test Utility
 * Automatically detect SVG visibility issues in light/dark mode
 */

export interface SvgVisibilityIssue {
  element: Element
  attribute: 'fill' | 'stroke'
  value: string
  issue: 'invisible-in-light' | 'invisible-in-dark' | 'low-contrast'
}

/**
 * Test SVG elements for visibility issues
 * @param svg - The SVG element to test
 * @param isDark - Whether the current theme is dark mode
 * @returns Array of visibility issues found
 */
export function testSvgVisibility(svg: SVGSVGElement, isDark: boolean): SvgVisibilityIssue[] {
  const issues: SvgVisibilityIssue[] = []

  // Check fill attributes
  const fills = svg.querySelectorAll('[fill]')
  for (const el of fills) {
    const fill = el.getAttribute('fill')
    if (!fill) continue

    // Hardcoded white fill - invisible in light mode
    if (fill === 'white' || fill === '#fff' || fill === '#ffffff' || fill === '#FFF') {
      if (!isDark) {
        issues.push({
          element: el,
          attribute: 'fill',
          value: fill,
          issue: 'invisible-in-light'
        })
      }
    }

    // Hardcoded black fill - invisible in dark mode
    if (fill === 'black' || fill === '#000' || fill === '#000000') {
      if (isDark) {
        issues.push({
          element: el,
          attribute: 'fill',
          value: fill,
          issue: 'invisible-in-dark'
        })
      }
    }

    // Check for RGB values close to background
    const rgbMatch = fill.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i)
    if (rgbMatch) {
      const [, r, g, b] = rgbMatch.map(Number)
      const brightness = (r * 299 + g * 587 + b * 114) / 1000

      if (!isDark && brightness > 240) {
        issues.push({
          element: el,
          attribute: 'fill',
          value: fill,
          issue: 'invisible-in-light'
        })
      }
      if (isDark && brightness < 30) {
        issues.push({
          element: el,
          attribute: 'fill',
          value: fill,
          issue: 'invisible-in-dark'
        })
      }
    }
  }

  // Check stroke attributes
  const strokes = svg.querySelectorAll('[stroke]')
  for (const el of strokes) {
    const stroke = el.getAttribute('stroke')
    if (!stroke) continue

    if (stroke === 'white' || stroke === '#fff' || stroke === '#ffffff') {
      if (!isDark) {
        issues.push({
          element: el,
          attribute: 'stroke',
          value: stroke,
          issue: 'invisible-in-light'
        })
      }
    }

    if (stroke === 'black' || stroke === '#000' || stroke === '#000000') {
      if (isDark) {
        issues.push({
          element: el,
          attribute: 'stroke',
          value: stroke,
          issue: 'invisible-in-dark'
        })
      }
    }
  }

  return issues
}

/**
 * Log visibility issues to console
 */
export function logVisibilityIssues(svg: SVGSVGElement, isDark: boolean): void {
  const issues = testSvgVisibility(svg, isDark)

  if (issues.length === 0) {
    console.log('✅ SVG visibility test passed')
    return
  }

  console.group(`⚠️ Found ${issues.length} SVG visibility issue(s) in ${isDark ? 'dark' : 'light'} mode`)

  for (const issue of issues) {
    const tagName = issue.element.tagName
    const classList = issue.element.classList.value || '(no class)'
    console.warn(
      `${tagName}.${classList}: ${issue.attribute}="${issue.value}" → ${issue.issue}`
    )
  }

  console.groupEnd()
}

/**
 * Auto-fix simple visibility issues
 * Replaces hardcoded white/black with currentColor or CSS variables
 */
export function autoFixVisibilityIssues(svg: SVGSVGElement): number {
  let fixedCount = 0
  const fills = svg.querySelectorAll('[fill]')

  for (const el of fills) {
    const fill = el.getAttribute('fill')
    if (fill === 'white' || fill === '#fff' || fill === '#ffffff') {
      el.setAttribute('fill', 'var(--figure-text-label)')
      fixedCount++
    }
    if (fill === 'black' || fill === '#000' || fill === '#000000') {
      el.setAttribute('fill', 'var(--figure-text-label)')
      fixedCount++
    }
  }

  const strokes = svg.querySelectorAll('[stroke]')
  for (const el of strokes) {
    const stroke = el.getAttribute('stroke')
    if (stroke === 'white' || stroke === '#fff' || stroke === '#ffffff') {
      el.setAttribute('stroke', 'var(--figure-stroke-primary)')
      fixedCount++
    }
    if (stroke === 'black' || stroke === '#000' || stroke === '#000000') {
      el.setAttribute('stroke', 'var(--figure-stroke-primary)')
      fixedCount++
    }
  }

  return fixedCount
}
