import { Stack, Chip } from "@mui/material";

interface ChipListProps {
  items: string[];
}

export default function ChipList({ items }: ChipListProps) {
  return (
    <Stack direction="column" spacing={1.5}>
      {items.map((item, i) => (
        <Chip
          key={i}
          label={item}
          variant="outlined"
          sx={{ justifyContent: "flex-start", textAlign: "left" }}
        />
      ))}
    </Stack>
  );
}
