const AlertIcon = ({color}) => (
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
      d="M24 18v8m0 8h.02M20.58 7.72 3.64 36a4 4 0 0 0 3.42 6h33.88a4 4 0 0 0 3.42-6L27.42 7.72a4 4 0 0 0-6.84 0"
    ></path>
  </svg>
);

export default AlertIcon;
