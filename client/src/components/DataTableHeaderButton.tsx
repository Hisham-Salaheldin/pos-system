import { Button } from "@/components/ui/button"

interface HeaderButtonProps {
    title:string
    onClick?: () => void
}

const DataTableHeaderButton = ({title,onClick}:HeaderButtonProps) => {
  return (
    <Button
        variant="ghost"
        onClick={onClick}
    >
        {title}
    </Button>
  )
}

export default DataTableHeaderButton