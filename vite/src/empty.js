// Empty module stub - blocks lucide-react and cmdk completely
const noop = () => null;
const NoopComponent = ({ children, ...props }) => children || null;

export default {};

// Export ALL possible lucide-react icons as noops
const iconNames = ['Search', 'Menu', 'X', 'ChevronDown', 'ChevronLeft', 'ChevronRight', 'Check', 
  'MoreHorizontal', 'Circle', 'ArrowLeft', 'ArrowRight', 'GripVertical', 'PanelLeft', 'Minus',
  'Plus', 'Star', 'Heart', 'Home', 'User', 'Settings', 'Bell', 'Calendar', 'Mail', 'File'];

iconNames.forEach(name => {
  if (typeof window !== 'undefined') {
    window[name] = noop;
  }
});

// Export all icons
export const Search = noop;
export const Menu = noop;
export const X = noop;
export const ChevronDown = noop;
export const ChevronLeft = noop;
export const ChevronRight = noop;
export const Check = noop;
export const MoreHorizontal = noop;
export const Circle = noop;
export const ArrowLeft = noop;
export const ArrowRight = noop;
export const GripVertical = noop;
export const PanelLeft = noop;
export const Minus = noop;

// cmdk exports
export const Command = NoopComponent;
