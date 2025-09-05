# 🎨 Design System Documentation

포트폴리오 프로젝트의 통합 디자인 시스템입니다.

## 📐 Design Tokens

### Color Palette

#### Primary Brand Colors
```css
primary-50:  #fef2f4
primary-100: #fde6e9
primary-200: #fbd0d9
primary-300: #f7aabb
primary-400: #f27a97
primary-500: #E30547  /* Main brand color */
primary-600: #d91c5c
primary-700: #b91c5c
primary-800: #9b1c47
primary-900: #881337
primary-950: #4c0519
```

#### Secondary Colors
```css
secondary-50:  #eef2ff
secondary-100: #e0e7ff
secondary-200: #c7d2fe
secondary-300: #a5b4fc
secondary-400: #818cf8
secondary-500: #6366f1  /* Main secondary */
secondary-600: #4f46e5
secondary-700: #4338ca
secondary-800: #3730a3
secondary-900: #312e81
secondary-950: #1e1b4b
```

#### Neutral Scale
```css
neutral-50:  #f8fafc
neutral-100: #f1f5f9
neutral-200: #e2e8f0
neutral-300: #cbd5e1
neutral-400: #94a3b8
neutral-500: #64748b
neutral-600: #475569
neutral-700: #334155
neutral-800: #1e293b
neutral-900: #0f172a
neutral-950: #020617
```

#### Semantic Colors
```css
success-500: #22c55e
warning-500: #f59e0b
error-500:   #ef4444
```

### Typography Scale
```css
text-xs:   0.75rem  (12px) / 1rem    (16px)
text-sm:   0.875rem (14px) / 1.25rem (20px)
text-base: 1rem     (16px) / 1.5rem  (24px)
text-lg:   1.125rem (18px) / 1.75rem (28px)
text-xl:   1.25rem  (20px) / 1.75rem (28px)
text-2xl:  1.5rem   (24px) / 2rem    (32px)
text-3xl:  1.875rem (30px) / 2.25rem (36px)
text-4xl:  2.25rem  (36px) / 2.5rem  (40px)
text-5xl:  3rem     (48px) / 1
text-6xl:  3.75rem  (60px) / 1
```

### Spacing Scale
```css
0.5:  0.125rem (2px)
1:    0.25rem  (4px)
1.5:  0.375rem (6px)
2:    0.5rem   (8px)
2.5:  0.625rem (10px)
3:    0.75rem  (12px)
4:    1rem     (16px)
6:    1.5rem   (24px)
8:    2rem     (32px)
12:   3rem     (48px)
16:   4rem     (64px)
18:   4.5rem   (72px)    /* Custom */
20:   5rem     (80px)
24:   6rem     (96px)
32:   8rem     (128px)
88:   22rem    (352px)   /* Custom */
128:  32rem    (512px)   /* Custom */
```

### Border Radius
```css
xs:      0.125rem (2px)
sm:      0.25rem  (4px)
DEFAULT: 0.375rem (6px)
md:      0.5rem   (8px)
lg:      0.75rem  (12px)
xl:      1rem     (16px)
2xl:     1.5rem   (24px)
3xl:     2rem     (32px)
```

### Shadows
```css
xs:    0 1px 2px 0 rgb(0 0 0 / 0.05)
sm:    0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
md:    0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
lg:    0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
xl:    0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
2xl:   0 25px 50px -12px rgb(0 0 0 / 0.25)
glass: 0 4px 30px rgba(0, 0, 0, 0.1)
glow:  0 0 20px rgba(99, 102, 241, 0.3)
```

## 🧩 Components

### Card Component

일관된 카드 디자인을 위한 범용 컴포넌트입니다.

#### Props
```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'elevated' | 'outlined' | 'flat';
  size?: 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  animated?: boolean;
  onClick?: () => void;
}
```

#### Variants
- **default**: 기본 흰색 배경과 미디엄 그림자
- **glass**: 글래스모피즘 효과 (반투명 배경 + 블러)
- **elevated**: 높은 그림자로 부각된 느낌
- **outlined**: 투명 배경에 경계선만
- **flat**: 플랫 디자인 (그림자 없음)

#### Usage
```tsx
import { Card } from './ui';

<Card variant="glass" size="md" hoverable animated>
  <div>Card Content</div>
</Card>
```

### Button Component

통일된 버튼 스타일과 상호작용을 제공합니다.

#### Props
```typescript
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  animated?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}
```

#### Variants
- **primary**: 메인 브랜드 색상 그라디언트
- **secondary**: 보조 색상 그라디언트
- **outline**: 투명 배경에 색상 경계선
- **ghost**: 투명 배경, 호버 시 배경 표시
- **link**: 텍스트 링크 스타일

#### Usage
```tsx
import { Button } from './ui';

<Button variant="primary" size="md" leftIcon={<Icon />}>
  Click me
</Button>
```

### Badge Component

태그, 상태 표시 등을 위한 작은 라벨 컴포넌트입니다.

#### Props
```typescript
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}
```

#### Usage
```tsx
import { Badge } from './ui';

<Badge variant="primary" size="sm">
  2024
</Badge>
```

## 📱 Responsive Design

### Breakpoints
```css
sm:  640px   /* 모바일 가로 / 작은 태블릿 */
md:  768px   /* 태블릿 */
lg:  1024px  /* 작은 데스크톱 */
xl:  1280px  /* 데스크톱 */
2xl: 1536px  /* 큰 데스크톱 */
```

### Mobile-First Approach
모든 스타일은 모바일부터 시작해서 데스크톱으로 확장합니다.

```css
/* 모바일 기본 */
.card {
  padding: 1rem;
}

/* 태블릿 이상 */
@media (min-width: 768px) {
  .card {
    padding: 1.5rem;
  }
}
```

## 🌙 Dark Mode

### Implementation
`class` 기반 다크 모드를 사용합니다.

```tsx
<div className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
  Content
</div>
```

### Color Scheme
- **Light Mode**: 화이트 배경, 다크 텍스트
- **Dark Mode**: 다크 배경 (neutral-800~900), 라이트 텍스트

## ⚡ Animations

### Motion Tokens
```typescript
const motionTokens = {
  duration: {
    fast: 0.12,
    base: 0.2,
    slow: 0.32,
    xslow: 0.48,
  },
  ease: {
    standard: [0.22, 1, 0.36, 1],
  },
};
```

### Accessibility
`prefers-reduced-motion` 미디어 쿼리를 사용해 접근성을 고려합니다.

```typescript
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

### Custom Animations
```css
/* Tailwind에 추가된 커스텀 애니메이션 */
animate-fade-in:   fadeIn 0.5s ease-in-out
animate-slide-up:  slideUp 0.3s ease-out  
animate-slide-down: slideDown 0.3s ease-out
animate-scale-in:  scaleIn 0.2s ease-out
animate-float:     float 3s ease-in-out infinite
```

## 🎯 Usage Guidelines

### Do's
- 일관된 spacing 사용 (4의 배수)
- 의미적 컬러 사용 (primary, secondary, neutral)
- 접근성 고려 (색상 대비, 키보드 네비게이션)
- 모바일 우선 반응형 디자인
- 적절한 애니메이션 (과하지 않게)

### Don'ts  
- 임의의 색상 사용 금지
- 인라인 스타일 사용 금지
- 고정 크기 설정 (반응형 깨짐)
- 과도한 애니메이션
- 접근성 무시

## 📦 File Structure

```
components/
├── ui/
│   ├── Card.tsx       # 범용 카드 컴포넌트
│   ├── Button.tsx     # 버튼 컴포넌트
│   ├── Badge.tsx      # 배지 컴포넌트
│   └── index.ts       # UI 컴포넌트 exports
├── EducationCard.tsx  # 특화 컴포넌트들
├── ProjectCard.tsx
├── AwardCard.tsx
└── CareerCard.tsx
```

## 🚀 Next Steps

1. **컴포넌트 확장**: Input, Modal, Dropdown 등 추가
2. **테마 시스템**: 다중 테마 지원
3. **아이콘 시스템**: 일관된 아이콘 라이브러리
4. **애니메이션 라이브러리**: 더 풍부한 모션
5. **스토리북 통합**: 컴포넌트 문서화