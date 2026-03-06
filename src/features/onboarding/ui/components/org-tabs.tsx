import { useState } from 'react'
import { Building2, Hash } from 'lucide-react'
import { CreateOrgForm } from './create-org-form'
import { JoinOrgForm } from './join-org-form'

type Tab = 'create' | 'join'

export function OrgTabs() {
  const [tab, setTab] = useState<Tab>('create')

  return (
    <div>
      <div className="flex rounded-md border border-border p-1 bg-muted mb-4 gap-1">
        <button
          onClick={() => setTab('create')}
          className={`flex-1 flex items-center justify-center gap-2 text-sm py-1.5 rounded-sm font-medium transition-colors ${
            tab === 'create'
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Building2 size={14} />
          Create
        </button>
        <button
          onClick={() => setTab('join')}
          className={`flex-1 flex items-center justify-center gap-2 text-sm py-1.5 rounded-sm font-medium transition-colors ${
            tab === 'join'
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Hash size={14} />
          Join
        </button>
      </div>

      {tab === 'create' ? <CreateOrgForm /> : <JoinOrgForm />}
    </div>
  )
}
