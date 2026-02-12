import { Check, X } from "lucide-react"

type FeatureRowProps = {
  title: string
  values: (string | boolean)[]
  type?: "text" | "boolean"
}

function FeatureRow({
  title,
  values,
  type = "text",
}: FeatureRowProps) {
  return (
    <div className="grid grid-cols-4 px-6 py-4 items-center border-b border-zinc-800 last:border-0 w-full">
      <div className="text-muted-foreground">{title}</div>

      {values.map((value, i) => (
        <div key={i} className="text-center">
          {type === "boolean" ? (
            value ? (
              <Check className="mx-auto h-5 w-5 text-green-500" />
            ) : (
              <X className="mx-auto h-5 w-5 text-muted-foreground" />
            )
          ) : (
            <span>{value}</span>
          )}
        </div>
      ))}
    </div>
  )
}

export default FeatureRow
