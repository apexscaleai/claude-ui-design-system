# Claude UI Design System

Complete UI/UX design system for React Native & Next.js projects - from greenfield to brownfield.

## What This Does

### 🆕 New Projects (Greenfield)
- Establish design system foundation with tokens
- Generate complete documentation
- Scaffold component library with atomic design
- Set up theme system and design presets

### ♻️ Existing Projects (Brownfield)
- Refactor UI with modern design principles
- Migrate to new design presets
- Modernize component implementations
- Improve accessibility and aesthetics

### 🎨 Design Presets
Choose from 6 curated design styles:
- **Minimalist Modern** (timeless, clean)
- **Bold Brutalist** (bleeding edge, bold)
- **Soft Neumorphic** (subtle, tactile)
- **Glass Aesthetic** (transparent, depth)
- **Timeless Classic** (professional, accessible)
- **Bleeding Edge Experimental** (innovative, forward-thinking)

## Installation

### Method 1: Plugin Marketplace (Easiest) ⭐
Install via Claude Code plugin system:

```bash
# In Claude Code, run:
/plugin marketplace add apexscaleai/claude-ui-design-system
/plugin install ui-design-system@ui-design-system
```

Restart Claude Code. Skills are now available!

### Method 2: Personal Skills (Manual)
Install globally for use across all projects:

```bash
cd ~/.claude/skills
git clone https://github.com/apexscaleai/claude-ui-design-system
```

Restart Claude Code. Skills are now available!

### Method 3: Project Skills (Team)
Install for specific project (team-shared):

```bash
cd your-project
mkdir -p .claude/skills
cd .claude/skills
git clone https://github.com/apexscaleai/claude-ui-design-system
```

Commit to git. Team members get skills automatically.

## Available Skills

### 📦 Foundation (New Projects)
- `design-system-foundation` - Set up design tokens, structure, theme system
- `design-documentation-generator` - Auto-generate design specs and style guides
- `component-library-scaffolder` - Scaffold atomic design component library

### 🎨 Presets (Style System)
- `design-preset-system` - Apply and switch between design presets

### ♻️ Refactoring (Existing Projects)
- `ui-refactoring-workflow` - Refactor UI with modern design principles
- `component-modernization` - Modernize React Native/Next.js components
- `design-migration` - Migrate between design systems

### ✨ Enhancement (Universal)
- `aesthetic-excellence` - Improve visual hierarchy, spacing, typography
- `animation-enhancement` - Add thoughtful animations and transitions
- `accessibility-upgrade` - Enhance WCAG compliance

## Usage Examples

### Starting New Project
```
"Set up design system foundation for my React Native fitness app using glass-aesthetic preset"
```

Claude will:
1. ✅ Create design tokens
2. ✅ Set up folder structure
3. ✅ Generate documentation
4. ✅ Scaffold base components
5. ✅ Apply glass-aesthetic styling

### Refactoring Existing Code
```
"Refactor this button component to use minimalist-modern preset and improve accessibility"
```

Claude will:
1. ✅ Analyze current implementation
2. ✅ Apply modern design patterns
3. ✅ Migrate to design tokens
4. ✅ Enhance accessibility
5. ✅ Add micro-interactions

### Generating Documentation
```
"Generate complete design system documentation for my component library"
```

Claude creates:
- Design System Spec
- Component Docs
- Style Guide
- Accessibility Guide
- Token Reference

### Switching Design Presets
```
"Convert my app from minimalist-modern to bold-brutalist preset"
```

Claude will:
1. ✅ Analyze current token usage
2. ✅ Map to new preset tokens
3. ✅ Update component styling
4. ✅ Maintain functionality
5. ✅ Update documentation

## Skills Structure

```
claude-ui-design-system/
├── foundation/                  # Greenfield - New Projects
│   ├── design-system-foundation/
│   ├── design-documentation-generator/
│   └── component-library-scaffolder/
│
├── presets/                     # Design Style Presets
│   └── design-preset-system/
│       └── presets/
│           ├── minimalist-modern/
│           ├── bold-brutalist/
│           ├── soft-neumorphic/
│           ├── glass-aesthetic/
│           ├── timeless-classic/
│           └── bleeding-edge-experimental/
│
├── refactoring/                 # Brownfield - Existing
│   ├── ui-refactoring-workflow/
│   ├── component-modernization/
│   └── design-migration/
│
└── enhancement/                 # Universal Improvements
    ├── aesthetic-excellence/
    ├── animation-enhancement/
    └── accessibility-upgrade/
```

## Design Presets Overview

### Minimalist Modern (Timeless)
- Clean, spacious layouts
- Monochromatic + single accent
- Subtle shadows (0-10% opacity)
- Generous white space

### Bold Brutalist (Bleeding Edge)
- High contrast (black/white/red/yellow)
- Sharp corners (0 border radius)
- Bold typography (700-900 weight)
- Harsh shadows (solid, offset)

### Soft Neumorphic (Subtle)
- Soft shadows and highlights
- Low contrast backgrounds
- Rounded corners
- Tactile appearance

### Glass Aesthetic (Modern)
- Transparency with backdrop blur
- Layered depth
- Soft glows and halos
- Semi-transparent surfaces

### Timeless Classic (Professional)
- Balanced, professional
- High accessibility
- Conservative colors
- Proven patterns

### Bleeding Edge Experimental (Innovative)
- Latest 2025 trends
- Experimental interactions
- Cutting-edge animations
- Forward-thinking patterns

## Contributing

This is a living design system. Contributions welcome!

1. Fork the repository
2. Create feature branch
3. Add/improve skills following TDD approach
4. Submit pull request

## License

MIT License - feel free to use in your projects!

## Credits

Built for the Claude Code community by [@apexscaleai](https://github.com/apexscaleai)

Inspired by:
- VoltAgent's awesome-claude-code-subagents
- obra's superpowers
- Anthropic's official skills repository

---

**Questions?** Open an issue or start a discussion!
