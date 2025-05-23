import { Button, Grid, LinkButton, LookupField, Pagination, TextField } from 'cx/widgets';
import Controller from './Controller';
import columns from './columns';

export default () => (
   <cx>
      <main class="overflow-hidden flex flex-col text-gray-600" controller={Controller}>
         <div class="p-2 space-x-1 flex">
            <TextField
               placeholder="Search invoices..."
               value={{
                  bind: '$page.filter.query',
                  debounce: 300,
               }}
               icon="search"
            />
            <LookupField
               placeholder="Status"
               value={{
                  bind: '$page.filter.status',
               }}
               class="w-32"
               options={[
                  {
                     id: 'paid',
                     text: 'Paid',
                  },
                  {
                     id: 'unpaid',
                     text: 'Unpaid',
                  },
               ]}
            />
            <div class="grow" />
            <LinkButton href="~/invoices/new" text="New Invoice" mod="primary" />
            <Button icon-expr="{$page.loading} ? 'loading' : 'refresh'" onClick="onLoad" mod="hollow">
               Refresh
            </Button>
         </div>
         <Grid
            records-bind="$page.records"
            class="grow"
            scrollable
            border={false}
            remoteSort
            lockColumnWidths
            sortField-bind="$page.filter.sortField"
            sortDirection-bind="$page.filter.sortDir"
            mod="fixed-layout"
            columns={columns}
         />
         <div class="border-t p-2 flex  ">
            <Pagination page-bind="$page.page" pageCount-bind="$page.pageCount" />
            <LookupField
               value-bind="$page.pageSize"
               class="ml-2 w-[180px]"
               required
               options={[
                  {
                     id: 5,
                     text: '5 rows per page',
                  },
                  {
                     id: 10,
                     text: '10 rows per page',
                  },
                  {
                     id: 20,
                     text: '20 rows per page',
                  },
                  {
                     id: 50,
                     text: '50 rows per page',
                  },
               ]}
            />
         </div>
      </main>
   </cx>
);
