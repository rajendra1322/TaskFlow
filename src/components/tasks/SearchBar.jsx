import { Input } from "@/components/ui/input";

function SearchBar({ value, onChange }) {
  return (
    <Input
      placeholder="Search tasks..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-72"
    />
  );
}

export default SearchBar;