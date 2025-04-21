type InputProps = {
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
};

export const Input = ({ label, placeholder, error, disabled }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        placeholder={placeholder}
        disabled={disabled}
        className={`border rounded px-3 py-2 focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
