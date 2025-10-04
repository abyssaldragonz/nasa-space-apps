const FilterIcon = ({color}) => (
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
      d="M44 6H4l16 18.92V38l8 4V24.92z"
    ></path>
  </svg>
);

export default FilterIcon;
