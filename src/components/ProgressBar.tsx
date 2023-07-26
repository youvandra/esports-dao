import "./ProgressBar.css";

export default function ProgressBar({
  value,
  maxValue,
}: {
  value: number;
  maxValue: number;
}) {
  const percentage = (value / maxValue) * 100;
  return (
    <div className="progress-bar w-full">
      <div className="progress-bar-fill" style={{ width: `${percentage}%` }}>
        <span className="progress-bar-text">{`${percentage.toFixed(1)}%`}</span>
      </div>
    </div>
  );
}
