import { Controller } from 'cx/ui';
import m, { ChartItem, Model } from './model';
import { getDashboardChartData } from '../../api/dashboard/dashboard';

export default class extends Controller<Model> {
   onInit() {
      this.store.set(m.$page.chart, getDashboardChartData());
      this.store.set(m.$page.charts, {
         sales: true,
         expenses: true,
         cash: true,
      });

      this.store.set(m.$page.topProducts, [
         { id: '1', name: 'Product 1', sales: 9442, percent: 0.1 },
         { id: '2', name: 'Product 2', sales: 7321, percent: 0.081 },
         { id: '3', name: 'Product 3', sales: 5321, percent: 0.062 },
         { id: '4', name: 'Product 4', sales: 4321, percent: 0.043 },
         { id: '5', name: 'Product 5', sales: 3321, percent: 0.033 },
      ]);

      this.store.set(m.$page.topExpenses, [
         { id: '1', name: 'Employee benefits', expense: 9442, percent: 0.5 },
         { id: '2', name: 'Advertising', expense: 7321, percent: 0.15 },
         { id: '3', name: 'Office rent + utilities', expense: 5321, percent: 0.13 },
         { id: '4', name: 'Depreciation', expense: 3321, percent: 0.1 },
         { id: '5', name: 'Insurance', expense: 4321, percent: 0.05 },
      ]);
   }
}
