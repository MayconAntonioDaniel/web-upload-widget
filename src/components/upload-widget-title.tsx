import { UploadCloud } from "lucide-react"
import { usePendingUploads } from "../store/uploads"

export function UploadWidgetTitle() {
  const { isThereAnyPendingUpload, globalPorcentage } = usePendingUploads()
  
  return (
    <div className="flex items-center gap-1.5 text-sm font-medium">
      <UploadCloud className="size-4 text-zinc-400" strokeWidth={ 1.5 } />
        { isThereAnyPendingUpload ? (
          <span className="flex items-baseline gap-1">
            Uploading
            <span className="text-xs text-zinc-400 tabular-nums">{globalPorcentage}%</span>
          </span>
        ) : (
          <span className="text-sm font-medium">Upload files</span>
        )}
    </div>
  )
}