import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';

export function Widget() {

  return (
    <Popover  className="absolute right-4 mod:bottom-8 md:right-8 bottom-4 flex flex-col items-end">
     <Popover.Panel>
       <WidgetForm />
     </Popover.Panel>

      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          FeedBack
        </span>
      </Popover.Button>
    </Popover>
  )
}