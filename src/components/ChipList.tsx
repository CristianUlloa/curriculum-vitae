import { Chip, Stack } from "@mui/material";
type Props = { items: string[] };
export default function ChipList({ items }: Props) {
  return (
    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
      {items.map((t, i) => <Chip key={i} label={t} />)}
    </Stack>
  );
}
