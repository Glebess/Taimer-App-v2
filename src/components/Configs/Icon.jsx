export const PriorityIcon = ({ colors }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="4" height="16" fill={colors[0]} />
    <rect x="10" y="8" width="4" height="12" fill={colors[1]} />
    <rect x="16" y="12" width="4" height="8" fill={colors[2]} />
  </svg>
);
export default PriorityIcon;
