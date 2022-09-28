export default function Header({ headerText }) {
  return (
    <h2 style={{ color: "yellow", textShadow: "2px 2px #ff0000" }}>
      {headerText}
    </h2>
  );
}
