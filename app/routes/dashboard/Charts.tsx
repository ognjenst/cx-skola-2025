import { CategoryAxis, Chart, Gridlines, Legend, LineGraph, Marker, NumericAxis } from 'cx/charts';
import { Svg } from 'cx/svg';
import { expr, tpl } from 'cx/ui';
import { Repeater } from 'cx/widgets';
import '../../util/kformat';
import m, { ChartItem } from './model';

export const Charts = ({}) => (
   <cx>
      <div class="bg-white border col-span-4 px-6 py-4 rounded-sm">
         <div class="flex items-center">
            <div class="mr-auto text-gray-600">Performance Chart</div>
            <Legend />
         </div>
         <Svg class="w-full h-[350px] text-gray-500">
            <Chart
               margin="30 10 30 45"
               axes={{
                  x: { type: CategoryAxis, hideLine: true, hideTicks: true },
                  y: {
                     type: NumericAxis,
                     vertical: true,
                     tickSize: 0,
                     minTickDistance: 30,
                     hideLine: true,
                     format: 'kformat',
                  },
               }}
            >
               <Gridlines xAxis={false} />
               <LineGraph
                  data={m.$page.chart}
                  xField="month"
                  yField="sales"
                  class="text-green-500 stroke-current"
                  colorIndex={4}
                  active={m.$page.charts.sales}
                  legend={false}
               />
               <LineGraph
                  data={m.$page.chart}
                  colorIndex={1}
                  xField="month"
                  yField="expenses"
                  name="Expenses"
                  active={m.$page.charts.expenses}
                  legend={false}
               />
               <LineGraph
                  data={m.$page.chart}
                  colorIndex={8}
                  xField="month"
                  yField="balance"
                  active={m.$page.charts.cash}
                  legend={false}
               />
               <Repeater<ChartItem> records={m.$page.chart} recordAlias={m.$record}>
                  <Marker
                     name="Sales"
                     x={m.$record.month}
                     y={m.$record.sales}
                     shape="circle"
                     size={12}
                     colorIndex={4}
                     style="stroke-width: 2; fill: white"
                     active={m.$page.charts.sales}
                     class="cursor-pointer"
                     tooltip={{
                        title: tpl('Sales in {$record.month}'),
                        text: tpl('{$record.sales:n;0} EUR'),
                     }}
                  />
                  <Marker
                     name="Expenses"
                     x={m.$record.month}
                     y={m.$record.expenses}
                     shape="circle"
                     size={12}
                     colorIndex={1}
                     style="stroke-width: 2; fill: white;"
                     active={m.$page.charts.expenses}
                     class="cursor-pointer"
                     tooltip={{
                        title: tpl('Expenses in {$record.month}'),
                        text: tpl('{$record.expenses:n;0} EUR'),
                     }}
                  />

                  <Marker
                     name="Cash"
                     x={m.$record.month}
                     y={m.$record.balance}
                     shape="circle"
                     size={12}
                     colorIndex={8}
                     style="stroke-width: 2; fill: white"
                     active={m.$page.charts.cash}
                     class="cursor-pointer"
                     tooltip={{
                        title: tpl('Cash Balance in {$record.month}'),
                        text: tpl('{$record.balance:n;0} EUR'),
                     }}
                  />
               </Repeater>
            </Chart>
         </Svg>
      </div>
   </cx>
);
