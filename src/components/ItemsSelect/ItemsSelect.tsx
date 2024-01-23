import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

type Item = {
  text: string;
  title: string;
};

type ItemsListProps = {
  title?: string;
  label: string;
  list: Item[];
  handleChange: (event: SelectChangeEvent) => void;
  value: string;
};

const ItemsSelect = ({
  title,
  label,
  list,
  handleChange,
  value,
}: ItemsListProps) => {
  return (
    <FormControl className="w-40">
      {title && <InputLabel id={label}>{title}</InputLabel>}
      <Select
        labelId={label}
        id={label + "-" + title}
        value={value}
        label={value}
        onChange={handleChange}
      >
        {list.map((item, index: number) => (
          <MenuItem key={label + "-" + index} value={item.text}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ItemsSelect;
