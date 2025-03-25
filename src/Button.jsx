export function Button({ children, style, kind }) {
  return (
    <div>
      <button type={kind} className={style}>
        {children}
      </button>
    </div>
  );
}
