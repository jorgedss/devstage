'use client'
import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Check, Copy, Link } from 'lucide-react'
import { useState } from 'react'

interface InviteLinkProps {
  inviteLink: string
}
export default function InviteLinkInput({ inviteLink }: InviteLinkProps) {
  const [copied, setCopied] = useState(false)

  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={inviteLink} />
      <IconButton onClick={copyInviteLink} className="-mr-2">
        {copied ? <Check className="size-5" /> : <Copy className="size-5" />}
      </IconButton>
    </InputRoot>
  )
}
