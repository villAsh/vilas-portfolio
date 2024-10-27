import React from 'react';
import { CircleChevronRight } from 'lucide-react';
export default function IconList({text}: {text: string}) {
  return (
    <li className='flex flex-row items-center gap-2'><CircleChevronRight /> {text}</li>
  )
}
