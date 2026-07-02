import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function StatusFilter({ value, onChange }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full md:w-48">
        <SelectValue placeholder="Filter Status" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="All">All</SelectItem>
        <SelectItem value="Pending">Pending</SelectItem>
        <SelectItem value="Completed">Completed</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default StatusFilter;