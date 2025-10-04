const ActivityIcon = ({color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    fill="none"
    viewBox="0 0 48 48"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
      d="M44 24h-8l-6 18L18 6l-6 18H4"
    ></path>
  </svg>
);

export default ActivityIcon;
