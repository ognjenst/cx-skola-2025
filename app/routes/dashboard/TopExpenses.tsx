import { computable } from 'cx/ui';
import { Grid } from 'cx/widgets';
import m, { TopExpenseModel } from './model';

export const TopExpenses = () => (
   <cx>
      <Grid<TopExpenseModel>
         records={m.$page.topExpenses}
         headerMode="plain"
         onCreateFilter={() => {
            return (record) => record.percent > 0.01;
         }}
         columns={[
            {
               field: 'name',
               header: { text: 'Expense', class: 'pl-0' },
               class: 'pl-0!',
               sortable: true,
            },
            {
               field: 'expense',
               header: 'Amount',
               format: 'currency;EUR;0',
               align: 'right',
               sortable: true,
            },
            {
               field: 'percent',
               header: 'Percentage',
               format: 'p;1',
               align: 'right',
               sortable: true,
            },
            {
               field: 'percent',
               header: '',
               children: (
                  <cx>
                     <div
                        class="bg-orange-400 h-2"
                        styles={{
                           width: computable('$record.percent', (percent) => percent * 100),
                        }}
                     />
                  </cx>
               ),
            },
         ]}
      />
   </cx>
);
