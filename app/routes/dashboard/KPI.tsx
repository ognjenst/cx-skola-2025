import { ClassProp } from 'cx/src/core';
import { computable } from 'cx/ui';
import { DataProxy, Icon } from 'cx/widgets';

interface KPIProp {
   title: string;
   value: string | number;
   unit?: string;
   icon?: string;
   iconClass?: string;
   change?: number;
   className?: ClassProp;
}

export const KPI = ({ title, value, unit, icon, iconClass, change, className }: KPIProp) => (
   <cx>
      <div className="bg-white border p-6 rounded-sm transition duration-300" class={className}>
         <Icon name={icon} class="block p-2 rounded-full w-10 h-10" className={iconClass} />
         <div class="my-2 text-gray-600">{title}</div>
         <div class="text-3xl font-bold leading-none" ws>
            <span text={value} /> <span class="text-sm" text={unit} />
         </div>
         <DataProxy data={{ $change: change }}>
            <div
               class={{
                  'mt-2  flex items-center': true,
                  'text-green-600': { expr: '{$change} >= 0' },
                  'text-red-600': { expr: '{$change} < 0' },
               }}
            >
               <Icon name={computable('$change', (change) => (change >= 0 ? 'arrow-up' : 'arrow-down'))} class="mr-2" />
               <span text-tpl="{$change:p;1}" />
            </div>
         </DataProxy>
      </div>
   </cx>
);
