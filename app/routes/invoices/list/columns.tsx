import { bind, expr } from 'cx/ui';
import { GridColumnConfig, HighlightedSearchText, Link } from 'cx/widgets';

export default [
   {
      field: 'invoiceNo',
      sortable: true,
      align: 'center',
      items: (
         <cx>
            <Link
               href-tpl="~/invoices/{$record.id}"
               text-tpl="{$record.invoiceNo}"
               class="text-blue-500 hover:underline"
            />
         </cx>
      ),
      header: { text: 'Order No.', style: 'border-left: none' },
      resizable: true,
      defaultWidth: 110,
   },
   {
      field: 'date',
      format: 'd',
      sortable: true,
      align: 'center',
      header: 'Date',
      resizable: true,
      defaultWidth: 120,
   },
   {
      field: 'customer.name',
      value: bind('$record.customer.name'),
      sortable: true,
      header: 'Customer',
      resizable: true,
      defaultWidth: 300,
      items: (
         <cx>
            <HighlightedSearchText text-bind="$record.customer.name" query-bind="$page.filter.query" />
         </cx>
      ),
   },
   {
      field: 'dueDate',
      format: 'd',
      sortable: true,
      align: 'center',
      header: 'Due Date',
      resizable: true,
      defaultWidth: 120,
   },
   {
      header: 'Amount',
      field: 'totalAmount',
      format: 'currency;;2',
      align: 'right',
      sortable: true,
      resizable: true,
      defaultWidth: 120,
   },
   {
      header: 'Status',
      field: 'status',
      sortable: true,
      resizable: true,
      defaultWidth: 120,
      items: (
         <cx>
            <span
               text-bind="$record.status"
               class={{
                  'px-3 py-1 uppercase text-[11px] rounded-full': true,
                  'bg-gray-100': expr("{$record.status} == 'paid'"),
                  'bg-yellow-300': expr("{$record.status} == 'unpaid'"),
               }}
            />
         </cx>
      ),
   },
] as GridColumnConfig[];
