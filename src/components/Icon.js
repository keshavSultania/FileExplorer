// const EditIcon = () => {
//   return (
//     <path d="M32.792 13.125 26.875 7.25l1.917-1.958q.791-.792 1.979-.771 1.187.021 1.979.812l1.958 1.959q.792.791.813 1.937.021 1.146-.771 1.938Zm-2 2L10.917 35H5v-5.917L24.875 9.208Z" />
//   );
// };

// const Sample = () => {
//   return (
//     <g transform="translate(-20.655 -17.456)">
//       <path
//         d="m51.254 44.131-14.638 8.451-14.638-8.451v-16.902l14.638-8.451
//         14.638 8.451z"
//         fill="none"
//         stroke="#fb00ff"
//         stroke-linejoin="round"
//         stroke-width="2.6458"
//       />
//     </g>
//   );
// };

const map = {
  edit:
    "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
  sample:
    "m51.254 44.131-14.638 8.451-14.638-8.451v-16.902l14.638-8.451 14.638 8.451z"
};

const Icon = ({
  size = 24,
  onClick,
  color = "black",
  type = "edit",
  style
}) => {
  return (
    <svg
      width={`${size}px`}
      onClick={onClick}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path d={map[type]} />
    </svg>
  );
};

export default Icon;
